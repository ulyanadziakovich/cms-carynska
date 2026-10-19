import { defineCollection } from '#pruvious'

// Skrzynka: wiadomości z formularza „Napisz do nas” ze strony.
// Zapisuje je wyłącznie server/api/kontakt.post.ts (sprawdza sekret strony i pola) —
// domyślne publiczne tworzenie jest wyłączone, żeby z internetu nie dało się ustawić np. statusu.
export default defineCollection({
  name: 'wiadomosci',
  mode: 'multi',
  label: { collection: { plural: 'Wiadomości', singular: 'wiadomość' }, record: { plural: 'wiadomości', singular: 'wiadomość' } },
  translatable: false,
  // Własne pole daty „Otrzymano” zamiast wbudowanego createdAt (Pruvious nadaje mu stałą etykietę „Created at”).
  createdAtField: false,
  apiRoutes: { create: false, createMany: false, read: 'private', readMany: 'private', update: 'private', updateMany: 'private', delete: 'private', deleteMany: 'private' },
  dashboard: {
    icon: 'Mail',
    primaryField: 'name',
    overviewTable: {
      columns: [{ field: 'status' }, { field: 'name' }, { field: 'email' }, { field: 'receivedAt' }],
      sort: { field: 'receivedAt', direction: 'desc' },
      perPage: 50,
    },
    fieldLayout: [{
      'Wiadomość': [['name', 'status'], ['email', 'phone'], 'message', 'receivedAt'],
      'Notatka': ['note'],
    }],
  },
  fields: {
    name: { type: 'text', options: { label: 'Imię i nazwisko' } },
    email: { type: 'text', options: { label: 'E-mail', description: 'Odpowiedz z własnej skrzynki — kliknij adres albo skopiuj go.' } },
    phone: { type: 'text', options: { label: 'Telefon' } },
    message: { type: 'text-area', options: { label: 'Treść', rows: 8 } },
    status: {
      type: 'select',
      options: {
        // Wartości = napisy, bo tabela w panelu pokazuje wartość, nie etykietę.
        label: 'Status', default: 'Nowa',
        choices: { 'Nowa': 'Nowa', 'W toku': 'W toku', 'Odpowiedziano': 'Odpowiedziano', 'Spam': 'Spam' },
      },
    },
    receivedAt: { type: 'date-time', options: { label: 'Otrzymano' } },
    note: { type: 'text-area', options: { label: 'Notatka wewnętrzna', description: 'Widać ją tylko w panelu, np. „oddzwoniłam 20.10”.', rows: 4 } },
  },
})
