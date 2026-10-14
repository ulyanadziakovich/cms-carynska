import { dzial, repeater, text, lines } from './fields.mjs'

export default [
  {
    name: 'test-formularza', label: 'Formularz testowy', url: '/', icon: 'Flask',
    tabs: {
      Lista: {
        grupy: repeater('Grupy', '', 'Dodaj grupę', {
          nazwa: text('Nazwa'),
          pozycje: repeater('Pozycje', '', 'Dodaj pozycję', { nazwa: text('Nazwa'), cena: text('Cena') }),
        }),
        punkty: lines('Punkty'),
        dzial: dzial(),
      },
    },
  },
]
