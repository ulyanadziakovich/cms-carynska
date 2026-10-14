// Grupy w menu panelu — według podstron witryny. Pozycje spoza listy
// (Media, Użytkownicy) pokazują się na dole bez grupy.
export interface MenuGroup {
  label: string
  items: { collection: string; label: string }[]
}

export const MENU_GROUPS: MenuGroup[] = [
  { label: 'Test', items: [{ collection: 'test-formularza', label: 'Formularz testowy' }] },
]
