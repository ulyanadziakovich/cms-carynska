// Grupy w menu panelu — według podstron witryny. Pozycje spoza listy
// (Media, Użytkownicy) pokazują się na dole bez grupy.
export interface MenuGroup {
  label: string
  items: { collection: string; label: string }[]
}

export const MENU_GROUPS: MenuGroup[] = [
  { label: 'Skrzynka', items: [{ collection: 'wiadomosci', label: 'Wiadomości z formularza' }] },
  { label: 'Strona główna', items: [{ collection: 'strona-glowna', label: 'Baner, sekcje, opinie' }] },
  {
    label: 'Noclegi',
    items: [
      { collection: 'noclegi-pokoje', label: 'Pokoje i apartamenty' },
      { collection: 'noclegi-cennik', label: 'Cennik' },
      { collection: 'noclegi-jacht', label: 'Hotel na wodzie (jachty)' },
    ],
  },
  {
    label: 'Atrakcje',
    items: [
      { collection: 'atrakcje', label: 'Wypożyczalnia, bosmanat, aktywny dzień' },
      { collection: 'zaplanuj-pobyt', label: 'Zaplanuj pobyt' },
    ],
  },
  { label: 'Tawerna', items: [{ collection: 'tawerna', label: 'Teksty i menu' }] },
  { label: 'Galeria', items: [{ collection: 'galeria', label: 'Zdjęcia' }] },
  { label: 'Grupy', items: [{ collection: 'grupy', label: 'Oferta i cennik dla grup' }] },
  {
    label: 'Projekty',
    items: [
      { collection: 'projekty-lista', label: 'Lista projektów' },
      { collection: 'projekty', label: 'Strona i logotypy' },
    ],
  },
  {
    label: 'Dokumenty',
    items: [
      { collection: 'regulamin', label: 'Regulamin' },
      { collection: 'regulamin-wypozyczalni', label: 'Regulamin wypożyczalni' },
      { collection: 'wzor-umowy-jachtu', label: 'Wzór umowy jachtu' },
    ],
  },
  {
    label: 'Ustawienia wspólne',
    items: [
      { collection: 'dzialy', label: 'Działy i telefony' },
      { collection: 'kontakt', label: 'Kontakt, przelew i nasze obiekty' },
      { collection: 'menu-strony', label: 'Menu strony' },
      { collection: 'ustawienia', label: 'Logo, rezerwacje i teksty wspólne' },
    ],
  },
]
