// Jednorazowo: czyta dane z ../carynska (server/api/*.get.ts) i zapisuje data.json.
// Po usunięciu tych plików z carynska data.json zostaje jedynym źródłem importu.
//   node scripts/import/extract.mjs [ścieżka do carynska]
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const site = resolve(process.argv[2] ?? '../carynska')
const out = {}
for (const name of ['content', 'noclegi', 'atrakcje', 'jacht', 'tawerna', 'projekty']) {
  let src = readFileSync(`${site}/server/api/${name}.get.ts`, 'utf8')
  src = src.replace(/^interface[^\n]*\n/gm, '').replace(/^\s*import[^\n]*\n/gm, '')
  // defineEventHandler(() => ({...})) → wartość zwracana przez handler
  const fn = new Function('defineEventHandler', src.replace('export default', 'return'))
  out[name] = fn((h) => h)()
}
writeFileSync(new URL('./data.json', import.meta.url), JSON.stringify(out, null, 2) + '\n')
console.log('Zapisano data.json:', Object.keys(out).join(', '))
