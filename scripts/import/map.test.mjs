import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { buildForms } from './map.mjs'

const d = JSON.parse(readFileSync(new URL('./data.json', import.meta.url), 'utf8'))
const ctx = { img: (p) => `img:${p}`, gallery: (l) => l.map((x) => ({ uploadId: `img:${x.src}`, alt: x.alt })), dzial: (n) => `dzial:${n}`, file: (p) => `file:${p}` }
const forms = buildForms(d, d.templates, ctx)

test('każdy formularz ze spec ma rekord', async () => {
  const spec = (await import('../forms/spec.mjs')).default
  for (const f of spec) assert.ok(forms[f.name], `brak rekordu dla ${f.name}`)
})
test('żadne pole rekordu nie jest undefined', () => {
  for (const [name, rec] of Object.entries(forms))
    for (const [k, v] of Object.entries(rec)) assert.notEqual(v, undefined, `${name}.${k} = undefined`)
})
test('każde pole rekordu (także w listach) istnieje w formularzu', async () => {
  const spec = (await import('../forms/spec.mjs')).default
  const bad = []
  const check = (fields, rec, path) => {
    for (const [k, v] of Object.entries(rec ?? {})) {
      const f = fields[k]
      if (!f) { bad.push(`${path}.${k}`); continue }
      if (f.type === 'repeater' && Array.isArray(v)) v.forEach((item, i) => check(f.subfields, item, `${path}.${k}.${i}`))
    }
  }
  for (const f of spec) check(Object.assign({}, ...Object.values(f.tabs)), forms[f.name], f.name)
  assert.deepEqual(bad, [])
})
test('pola telefonu tylko w działach i obiektach siostrzanych', () => {
  const bad = []
  const walk = (o, path) => {
    if (!o || typeof o !== 'object') return
    for (const [k, v] of Object.entries(o)) {
      const p = `${path}.${k}`
      if (/^(phone|tel|telefon)$/i.test(k) && !p.includes('.sisters.')) bad.push(p)
      walk(v, p)
    }
  }
  walk(forms, '')
  assert.deepEqual(bad, [])
})
test('pokoje mają galerie', () => {
  assert.equal(forms['noclegi-pokoje'].rooms.length, d.noclegi.rooms.length)
  assert.ok(forms['noclegi-pokoje'].rooms.every((r) => r.images.length > 0))
})
test('pola zdjęć i plików wskazują wgrane pliki, nie surowe ścieżki', async () => {
  const spec = (await import('../forms/spec.mjs')).default
  const bad = []
  const check = (fields, rec, path) => {
    for (const [k, v] of Object.entries(rec ?? {})) {
      const f = fields[k]
      if (!f || v === null) continue
      if ((f.type === 'image' || f.type === 'file') && !/^(img|file):/.test(String(v))) bad.push(`${path}.${k}=${v}`)
      if (f.type === 'gallery' && !(Array.isArray(v) && v.every((x) => /^img:/.test(String(x.uploadId))))) bad.push(`${path}.${k}`)
      if (f.type === 'repeater' && Array.isArray(v)) v.forEach((item, i) => check(f.subfields, item, `${path}.${k}.${i}`))
    }
  }
  for (const f of spec) check(Object.assign({}, ...Object.values(f.tabs)), forms[f.name], f.name)
  assert.deepEqual(bad, [])
})
