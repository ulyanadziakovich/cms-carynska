import { defineCollection } from '#pruvious'

// Działy z telefonami i e-mailami — jedyne miejsce, gdzie się je wpisuje.
// Podstrony wskazują dział z listy (pole „Dział kontaktowy”).
export default defineCollection({
  name: 'dzialy',
  mode: 'multi',
  label: { collection: { plural: 'Działy i telefony', singular: 'dział' } },
  translatable: false,
  apiRoutes: { read: 'public', readMany: 'public' },
  dashboard: {
    icon: 'Phone',
    primaryField: 'name',
    overviewTable: { columns: [{ field: 'name' }, { field: 'phone' }, { field: 'email' }], sort: { field: 'order', direction: 'asc' }, perPage: 50 },
    fieldLayout: [{
      'Dane działu': ['name', 'tag', 'desc', 'phone', 'email'],
      'Menu „Zadzwoń”': ['showInCallMenu', 'callTag', 'icon', 'order'],
    }],
  },
  fields: {
    name: { type: 'text', options: { required: true, label: 'Nazwa działu', description: 'Np. „Noclegi”, „Tawerna”, „Bosmanat”.' } },
    tag: { type: 'text', options: { label: 'Napis nad nazwą', description: 'W sekcji Kontakt, np. „Rezerwacje indywidualne”.' } },
    desc: { type: 'text-area', options: { label: 'Krótki opis', description: 'W sekcji Kontakt pod nazwą działu.', rows: 2 } },
    phone: { type: 'text', options: { label: 'Telefon', placeholder: '+48 600 000 000' } },
    email: { type: 'text', options: { label: 'E-mail' } },
    showInCallMenu: { type: 'checkbox', options: { label: 'Pokaż w pasku górnym i w przycisku „Zadzwoń”' } },
    callTag: { type: 'text', options: { label: 'Napis nad numerem w menu „Zadzwoń”', description: 'Np. „Rezerwacje”.' } },
    icon: { type: 'select', options: { label: 'Ikona', choices: { bed: 'Łóżko', utensils: 'Sztućce', anchor: 'Kotwica', briefcase: 'Teczka' }, clearable: true } },
    order: { type: 'number', options: { label: 'Kolejność', default: 0 } },
  },
})
