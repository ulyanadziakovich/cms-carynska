// Klocki do opisu pól w spec.mjs. Każde pole: etykieta po polsku, podpowiedź
// „gdzie to widać na stronie”, opcjonalnie wartość domyślna.
export const text = (label, hint, def) => ({ type: 'text', label, hint, default: def })
export const link = (label, hint, def) => ({ type: 'text', label, hint, default: def, placeholder: 'np. /atrakcje albo https://…' })
/** Tekst wieloliniowy. Akapity oddzielaj pustą linią. */
export const area = (label, hint, rows = 4) => ({ type: 'text-area', label, hint, rows })
/** Lista krótkich pozycji — jedna pozycja w linii. */
export const lines = (label, hint, rows = 5) => ({ type: 'text-area', label, hint: [hint, 'Jedna pozycja w linii.'].filter(Boolean).join(' '), rows })
export const editor = (label, hint) => ({ type: 'editor', label, hint })
export const image = (label, hint) => ({ type: 'image', label, hint })
export const gallery = (label, hint, directory) => ({ type: 'gallery', label, hint, directory })
export const file = (label, hint) => ({ type: 'file', label, hint })
export const number = (label, hint) => ({ type: 'number', label, hint })
export const checkbox = (label, hint) => ({ type: 'checkbox', label, hint })
export const select = (label, hint, choices) => ({ type: 'select', label, hint, choices })
/** Wybór działu (telefon/e-mail wpisuje się raz w „Działy i telefony”). */
export const dzial = (label = 'Dział kontaktowy', hint = 'Telefon i e-mail tego działu pokażą się w tym miejscu.') =>
  ({ type: 'record', label, hint, collection: 'dzialy' })
/** Lista powtarzalnych wpisów — kolejność zmienia się przeciąganiem. */
export const repeater = (label, hint, addLabel, subfields) => ({ type: 'repeater', label, hint, addLabel, subfields })

export const ICONS = {
  zaglowka: 'Żaglówka', elektryczna: 'Łódź elektryczna', kajak: 'Kajak', jacht: 'Jacht',
  trekking: 'Góry / sport', plaza: 'Plaża / basen', koncert: 'Koncert / atrakcje', grupy: 'Grupa ludzi',
}
