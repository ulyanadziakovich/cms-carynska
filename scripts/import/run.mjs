// Wgrywa zdjęcia/pliki z scripts/import/files i wypełnia wszystkie formularze.
//   npm run import [-- http://localhost:4322]   (logowanie z .env.import: CMS_EMAIL, CMS_PASSWORD)
// Można uruchamiać wielokrotnie: pliki i działy są dopasowywane po nazwie.
import { existsSync, readFileSync } from 'node:fs'
import { basename, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DZIALY, buildForms } from './map.mjs'

const base = process.argv[2] ?? 'http://localhost:4322'
// Pliki startowe (dawne public/ strony) — ścieżki w data.json są względem tego katalogu.
const site = fileURLToPath(new URL('./files', import.meta.url))
const d = JSON.parse(readFileSync(new URL('./data.json', import.meta.url), 'utf8'))

const login = await fetch(`${base}/api/login`, { method: 'POST', headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ email: process.env.CMS_EMAIL, password: process.env.CMS_PASSWORD }) })
if (!login.ok) throw new Error(`Logowanie: ${login.status} ${await login.text()}`)
const auth = { authorization: `Bearer ${(await login.text()).replace(/"/g, '')}` }
const api = async (path, init = {}) => {
  const res = await fetch(`${base}/api/${path}`, { ...init, headers: { ...auth, ...init.headers } })
  if (!res.ok) throw new Error(`${init.method ?? 'GET'} ${path}: ${res.status} ${await res.text()}`)
  return res.json()
}
const json = (method, body) => ({ method, headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) })

// — pliki: dedup po nazwie pliku w katalogu import/
// Pruvious zapisuje nazwy plików małymi literami — porównujemy bez względu na wielkość liter.
const existing = new Map((await api('collections/uploads?perPage=1000')).records.map((u) => [u.filename.toLowerCase(), u.id]))
const MIME = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif', '.svg': 'image/svg+xml', '.pdf': 'application/pdf' }
async function upload(publicPath) {
  const name = basename(publicPath)
  if (existing.has(name.toLowerCase())) return existing.get(name.toLowerCase())
  // Stare dane wskazują też pliki, których nigdy nie było na stronie — strona ich
  // i tak nie pokazywała, więc pole zostaje puste.
  if (!existsSync(`${site}${publicPath}`)) {
    console.warn('! brak pliku, pole zostanie puste:', publicPath)
    return null
  }
  const form = new FormData()
  form.append('$file', new Blob([readFileSync(`${site}${publicPath}`)], { type: MIME[extname(name).toLowerCase()] }), name)
  form.append('directory', 'import/')
  const rec = await api('collections/uploads', { method: 'POST', body: form })
  existing.set(name.toLowerCase(), rec.id)
  console.log('↑', name)
  return rec.id
}

// — działy: dedup po nazwie
const dz = new Map((await api('collections/dzialy?perPage=100')).records.map((r) => [r.name, r.id]))
for (const x of DZIALY(d)) {
  const rec = dz.has(x.name) ? await api(`collections/dzialy/${dz.get(x.name)}`, json('PATCH', x)) : await api('collections/dzialy', json('POST', x))
  dz.set(x.name, rec.id)
}

// — zbierz wszystkie ścieżki plików, wgraj, potem zbuduj rekordy synchronicznie
const paths = new Set()
const collect = { img: (p) => (paths.add(p), 0), file: (p) => (paths.add(p), 0), gallery: (l) => (l.forEach((x) => paths.add(x.src)), []), dzial: () => 0 }
buildForms(d, d.templates, collect)
const ids = new Map()
for (const p of paths) ids.set(p, await upload(p))

const ctx = {
  img: (p) => ids.get(p) ?? null, file: (p) => ids.get(p) ?? null,
  gallery: (l) => l.filter((x) => ids.get(x.src)).map((x) => ({ uploadId: ids.get(x.src), alt: x.alt ?? '' })),
  dzial: (n) => { if (!dz.has(n)) throw new Error(`Nieznany dział: ${n}`); return dz.get(n) },
}
for (const [name, rec] of Object.entries(buildForms(d, d.templates, ctx))) {
  await api(`collections/${name}`, json('PATCH', rec))
  console.log('✓', name)
}
