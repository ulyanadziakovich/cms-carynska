# Panel treści — Przystań Caryńska

Pruvious (Nuxt 4, SQLite). Strona: repo `../carynska`.

```bash
npm install
npm run dev          # panel: http://localhost:4322/dashboard
```

**Nie uruchamiaj `npm run build`, gdy działa `npm run dev`** — build nadpisuje `.nuxt` i serwer deweloperski przestaje wydawać pliki z mediów (404). Po buildzie zrestartuj `npm run dev`.

## Formularze

Wszystkie formularze opisuje `scripts/forms/spec.mjs`. Po zmianie: `npm run forms`, potem restart `npm run dev` (nowe formularze wymagają restartu).
Grupy w menu panelu: `app/config/menuGroups.ts`. Działy z telefonami: `app/collections/dzialy.collection.ts`.

## Import treści startowej

`scripts/import/data.json` + pliki w `scripts/import/files/`. Logowanie w `.env.import` (`CMS_EMAIL`, `CMS_PASSWORD`, poza repo).

```bash
npm run import                          # można powtarzać — bez duplikatów
node --test scripts/import/map.test.mjs # testy mapowania
```
