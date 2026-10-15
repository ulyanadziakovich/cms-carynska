# Panel treści — Przystań Caryńska

Pruvious (Nuxt 4, SQLite). Strona: repo `../carynska`.

```bash
npm install
npm run dev          # panel: http://localhost:4322/dashboard
```

**Nie uruchamiaj `npm run build`, gdy działa `npm run dev`** — build nadpisuje `.nuxt` i serwer deweloperski przestaje wydawać pliki z mediów (404). Po buildzie zrestartuj `npm run dev`.

## Formularze

Wszystkie formularze opisuje `scripts/forms/spec.mjs`. Po zmianie: `npm run forms`, potem restart `npm run dev` (nowe formularze wymagają restartu).
Generator sam układa krótkie pola obok siebie i przenosi drobne napisy (dla czytników, okruszki, podpisy formularza) do ostatniej zakładki „Drobne napisy (rzadko zmieniane)”.

Polskie napisy panelu (przyciski, komunikaty) są w `scripts/dashboard-pl/pl.mjs`. Po zmianie albo po aktualizacji Pruviousa: `npm run dashboard-pl`, potem restart `npm run dev`.
Grupy w menu panelu: `app/config/menuGroups.ts`. Działy z telefonami: `app/collections/dzialy.collection.ts`.

## Import treści startowej

`scripts/import/data.json` + pliki w `scripts/import/files/`. Logowanie w `.env.import` (`CMS_EMAIL`, `CMS_PASSWORD`, poza repo).

```bash
npm run import                          # tylko na pustej bazie
npm run import -- --force               # UWAGA: nadpisuje wszystkie zmiany z panelu treścią startową
node --test scripts/import/map.test.mjs # testy mapowania
```
