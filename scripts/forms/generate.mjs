// Generuje formularze CMS z jednego źródła: scripts/forms/spec.mjs.
//   npm run forms
// Wynik: app/collections/<nazwa>.collection.ts (nie edytuj ręcznie)
//        app/config/formUrls.json (adresy podstron dla „Zobacz na stronie”)
import { writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import spec from './spec.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const EDITOR_TOOLBAR = ['heading2', 'heading3', 'paragraph', 'bold', 'italic', 'link', 'bulletList', 'orderedList', 'blockquote', 'clear', 'undo', 'redo']

/** Krótkie pola (jedna linijka) mogą stać obok siebie w jednym rzędzie. */
const SHORT = new Set(['text', 'number', 'select', 'checkbox', 'record'])

/**
 * Układ pól: kolejne krótkie pola łączone w rzędy (po `perRow`), żeby formularz
 * był niski i nie trzeba było długo przewijać. Duże pola (tekst, zdjęcia) — osobno.
 * Tablica w fieldLayout Pruviousa = pola obok siebie.
 */
export function compactLayout(fields, perRow) {
  const out = []
  let row = []
  const flush = () => { if (row.length) out.push(row.length === 1 ? row[0] : row); row = [] }
  for (const [key, f] of Object.entries(fields)) {
    if (SHORT.has(f.type)) {
      row.push(key)
      if (row.length === perRow) flush()
    } else {
      flush()
      out.push(key)
    }
  }
  flush()
  return out
}

export function fieldDef(f) {
  const options = { required: false, label: f.label }
  if (f.hint) options.description = f.hint
  if (f.default !== undefined) options.default = f.default
  if (f.placeholder) options.placeholder = f.placeholder
  switch (f.type) {
    case 'text-area': options.rows = f.rows; break
    case 'editor': options.toolbar = EDITOR_TOOLBAR; break
    case 'gallery': if (f.directory) options.directory = f.directory; break
    case 'select': options.choices = f.choices; options.clearable = true; break
    case 'record':
      options.collection = f.collection
      options.populate = true
      options.fields = { id: true, name: true, tag: true, phone: true, email: true, desc: true }
      options.recordLabel = 'name'
      options.clearable = true
      break
    case 'repeater':
      options.addLabel = f.addLabel
      options.subfields = Object.fromEntries(Object.entries(f.subfields).map(([k, sf]) => [k, fieldDef(sf)]))
      // Wszystkie krótkie pola wpisu w jednym rzędzie (np. danie: nazwa | dopisek | cena)
      options.fieldLayout = compactLayout(f.subfields, 4)
      break
  }
  return { type: f.type, options }
}

const urls = {}
for (const form of spec) {
  urls[form.name] = form.url ?? null
  const fields = {}
  const layout = {}
  for (const [tab, tabFields] of Object.entries(form.tabs)) {
    layout[tab] = compactLayout(tabFields, 2)
    for (const [key, f] of Object.entries(tabFields)) {
      if (fields[key]) throw new Error(`${form.name}: pole „${key}” występuje dwa razy`)
      fields[key] = fieldDef(f)
    }
  }
  const src = `// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection(${JSON.stringify({
    name: form.name,
    mode: 'single',
    label: { collection: { plural: form.label, singular: form.label } },
    apiRoutes: { read: 'public' },
    dashboard: {
      icon: form.icon ?? 'File',
      additionalRecordOptionsVueComponent: './app/dashboard/ViewOnSite.vue',
      fieldLayout: [layout],
    },
    fields,
  }, null, 2)})
`
  writeFileSync(join(root, 'app/collections', `${form.name}.collection.ts`), src)
}
writeFileSync(join(root, 'app/config/formUrls.json'), JSON.stringify(urls, null, 2) + '\n')
console.log(`Wygenerowano ${spec.length} formularzy`)
