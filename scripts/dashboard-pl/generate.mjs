// Generuje app/translatable-strings/dashboard.en.ts: standardowe napisy panelu
// Pruvious z podmienionymi polskimi tłumaczeniami (scripts/dashboard-pl/pl.mjs).
// Panel ma jeden język („en”), więc to właśnie ten zestaw zastępujemy —
// standardowy jest wyłączony w nuxt.config.ts (standardTranslatableStrings.dashboard).
//   npm run dashboard-pl
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import pl from './pl.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const src = readFileSync(resolve(root, 'node_modules/pruvious/dist/runtime/translatable-strings/standard/dashboard.en.js'), 'utf8')
// Plik standardowy to `defineTranslatableStrings({...})` — wyciągamy obiekt i liczymy go jako wyrażenie.
const body = src.slice(src.indexOf('defineTranslatableStrings(') + 'defineTranslatableStrings('.length, src.lastIndexOf(')'))
const def = new Function(`return (${body})`)()

let used = 0
for (const [key, value] of Object.entries(pl)) {
  const cur = def.strings[key]
  if (cur === undefined) { console.warn(`Brak w Pruvious: ${key}`); continue }
  used++
  if (typeof cur === 'string') def.strings[key] = value
  else {
    // Wzorzec z odmianą (np. „$count $errors found”) — polski tekst bez odmiany.
    def.strings[key] = { pattern: value, input: cur.input }
  }
}

mkdirSync(resolve(root, 'app/translatable-strings'), { recursive: true })
writeFileSync(
  resolve(root, 'app/translatable-strings/dashboard.en.ts'),
  `// WYGENEROWANE (npm run dashboard-pl) z scripts/dashboard-pl/pl.mjs — nie edytuj ręcznie.\n` +
    `import { defineTranslatableStrings } from '#pruvious'\n\nexport default defineTranslatableStrings(${JSON.stringify(def, null, 2)})\n`,
)
console.log(`Polskie napisy panelu: ${used}/${Object.keys(def.strings).length}`)
