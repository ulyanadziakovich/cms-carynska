import { defineCollection } from '#pruvious'

// Projekty dofinansowane — każdy wpis to jeden projekt na stronie /projekty.
// Wszystkie zakładki poza „Projekt” są opcjonalne: pusta część nie pokazuje się na stronie.
// Nagłówek strony, logotypy i napisy wspólne: formularz „projekty” (scripts/forms/spec.mjs).
const text = (label: string, description?: string) => ({ type: 'text', options: { label, description } }) as const
const area = (label: string, rows: number, description?: string) => ({ type: 'text-area', options: { label, description, rows } }) as const
const PARAGRAPHS = 'Akapity oddziel pustą linią.'

export default defineCollection({
  name: 'projekty-lista',
  mode: 'multi',
  label: { collection: { plural: 'Projekty', singular: 'projekt' }, record: { plural: 'projekty', singular: 'projekt' } },
  translatable: false,
  apiRoutes: { read: 'public', readMany: 'public' },
  dashboard: {
    icon: 'Certificate',
    primaryField: 'title',
    overviewTable: { columns: [{ field: 'title' }, { field: 'programName' }, { field: 'order' }], sort: { field: 'order', direction: 'asc' }, perPage: 50 },
    fieldLayout: [{
      'Projekt': [['programName', 'order'], 'title', 'contract', 'body', 'finance'],
      'Dodatkowe informacje': [['infoKicker', 'infoTitle'], 'infoBody', 'infoLinks'],
      'Etapy realizacji': [['timelineKicker', 'timelineTitle'], 'timelineSubtitle', 'milestones'],
      'Harmonogram wsparcia': [['scheduleKicker', 'scheduleTitle'], 'scheduleFacts', 'scheduleItems', ['schedulePdf', 'schedulePdfLabel']],
    }],
  },
  fields: {
    // ── Projekt ──
    programName: text('Nazwa programu', 'Mały złoty napis nad tytułem, np. „Fundusze Europejskie dla Podkarpacia”.'),
    order: { type: 'number', options: { label: 'Kolejność na stronie', description: 'Mniejsza liczba = wyżej.', default: 0 } },
    title: { type: 'text-area', options: { required: true, label: 'Tytuł projektu', rows: 2 } },
    contract: area('Umowa', 3, 'Numer umowy i program — pokazuje się kursywą nad opisem.'),
    body: area('Opis projektu', 8, PARAGRAPHS),
    finance: {
      type: 'repeater',
      options: {
        label: 'Finansowanie', description: 'Kwoty pod opisem, np. „Dofinansowanie — 1 465 888,56 PLN”.', addLabel: 'Dodaj pozycję',
        subfields: { label: text('Nazwa'), value: text('Kwota') },
        fieldLayout: [['label', 'value']],
      },
    },

    // ── Dodatkowe informacje (np. o funduszach) ──
    infoKicker: text('Napis nad tytułem'),
    infoTitle: text('Tytuł', 'Np. „Rola Funduszy Norweskich”. Puste = ta część nie pokazuje się.'),
    infoBody: area('Tekst', 8, PARAGRAPHS),
    infoLinks: {
      type: 'repeater',
      options: {
        label: 'Linki', addLabel: 'Dodaj link',
        subfields: { label: text('Napis'), href: { type: 'text', options: { label: 'Adres', placeholder: 'https://…' } } },
        fieldLayout: [['label', 'href']],
      },
    },

    // ── Etapy realizacji ──
    timelineKicker: text('Napis nad tytułem'),
    timelineTitle: text('Tytuł', 'Np. „Realizacja projektu”.'),
    timelineSubtitle: text('Podtytuł'),
    milestones: {
      type: 'repeater',
      options: {
        label: 'Etapy', description: 'Od najstarszego. Brak etapów = ta część nie pokazuje się.', addLabel: 'Dodaj etap',
        subfields: { date: text('Data'), title: text('Tytuł'), body: area('Opis', 3) },
        fieldLayout: [['date', 'title'], 'body'],
      },
    },

    // ── Harmonogram wsparcia ──
    scheduleKicker: text('Napis nad tytułem'),
    scheduleTitle: text('Tytuł', 'Puste = „Harmonogram wsparcia” (Strona i logotypy → Drobne napisy).'),
    scheduleFacts: {
      type: 'repeater',
      options: {
        label: 'Dane projektu', description: 'Np. Beneficjent, Nr projektu, Za okres.', addLabel: 'Dodaj pozycję',
        subfields: { label: text('Nazwa'), value: text('Wartość') },
        fieldLayout: [['label', 'value']],
      },
    },
    scheduleItems: {
      type: 'repeater',
      options: {
        label: 'Spotkania i działania',
        description: 'Kolejność dowolna — strona sama ułoży je po dacie i godzinie. Gdy miejsce, prowadzący albo uczestnicy są wszędzie te same, strona pokaże je raz, nad listą. Brak działań = harmonogram nie pokazuje się.',
        addLabel: 'Dodaj działanie',
        subfields: {
          date: text('Data', 'DD.MM.RRRR, np. 27.10.2026'),
          hours: text('Godziny', 'Np. 16.00-20.00'),
          title: area('Rodzaj wsparcia / działania', 2),
          place: text('Miejsce'),
          participants: text('Uczestnicy', 'Np. 1 pracodawca, 5 pracowników'),
          executor: area('Wykonawca / prowadzący', 3, 'Nazwa, adres, osoba i telefon.'),
        },
        fieldLayout: [['date', 'hours'], 'title', ['place', 'participants'], 'executor'],
      },
    },
    schedulePdf: { type: 'file', options: { label: 'Podpisany harmonogram (PDF)' } },
    schedulePdfLabel: text('Przycisk pobierania', 'Np. „Pobierz podpisany harmonogram (PDF)”.'),
  },
})
