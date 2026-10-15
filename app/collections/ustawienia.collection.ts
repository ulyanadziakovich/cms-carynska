// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "ustawienia",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Logo, rezerwacje i teksty wspólne",
      "singular": "Logo, rezerwacje i teksty wspólne"
    }
  },
  "apiRoutes": {
    "read": "public"
  },
  "dashboard": {
    "icon": "Settings",
    "additionalRecordOptionsVueComponent": "./app/dashboard/ViewOnSite.vue",
    "fieldLayout": [
      {
        "Logo i nazwa": [
          "logo",
          "footerLogo",
          "menuBackground",
          [
            "siteName",
            "tagline"
          ],
          "regionLine"
        ],
        "Rezerwacje online": [
          [
            "bookingUrl",
            "bookingCta"
          ],
          "widgetTitle"
        ],
        "Telefony w menu": [
          [
            "topbarLabel",
            "callTitle"
          ],
          [
            "callSubtitle",
            "pizzaLabel"
          ],
          "pizzaUrl"
        ],
        "Stopka": [
          "copyright"
        ],
        "Odznaki i certyfikaty": [
          "badges"
        ],
        "Teksty wspólne": [
          [
            "breadcrumbHome",
            "seeMore"
          ],
          [
            "details",
            "maxPersons"
          ]
        ],
        "Drobne napisy (rzadko zmieniane)": [
          [
            "widgetCheckIn",
            "widgetCheckOut"
          ],
          [
            "widgetArrival",
            "widgetDeparture"
          ],
          [
            "widgetPickDate",
            "widgetGuests"
          ],
          [
            "widgetGuestOne",
            "widgetGuestMany"
          ],
          [
            "widgetLess",
            "widgetMore"
          ],
          [
            "widgetReserve",
            "widgetReserveNow"
          ],
          [
            "close",
            "prevPhoto"
          ],
          [
            "nextPhoto",
            "photoN"
          ],
          [
            "openMenu",
            "closeMenu"
          ]
        ]
      }
    ]
  },
  "fields": {
    "logo": {
      "type": "image",
      "options": {
        "required": false,
        "label": "Logo w menu"
      }
    },
    "footerLogo": {
      "type": "image",
      "options": {
        "required": false,
        "label": "Logo w stopce",
        "description": "W sekcji Kontakt na dole każdej strony."
      }
    },
    "menuBackground": {
      "type": "image",
      "options": {
        "required": false,
        "label": "Tło rozwiniętego menu",
        "description": "Zdjęcie za listą pozycji po otwarciu menu."
      }
    },
    "siteName": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nazwa obiektu",
        "description": "Np. w menu i na okładce karty dań."
      }
    },
    "tagline": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Hasło pod logo",
        "description": "W rozwiniętym menu, np. „Luksus w sercu Bieszczad”."
      }
    },
    "regionLine": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Linia z lokalizacją",
        "description": "Na dole stopki, np. „Polańczyk · Jezioro Solińskie · Bieszczady”."
      }
    },
    "bookingUrl": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Link do systemu rezerwacji (hotres)",
        "description": "Wszystkie przyciski „Rezerwuj” i „Sprawdź dostępność” prowadzą tutaj.",
        "placeholder": "np. /atrakcje albo https://…"
      }
    },
    "bookingCta": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk w menu",
        "description": "Np. „Booking now”."
      }
    },
    "widgetTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Widżet: przycisk główny",
        "description": "Np. „Sprawdź dostępność”."
      }
    },
    "topbarLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Pasek górny: napis przed numerami",
        "description": "Np. „Rezerwacje:”. Numery to działy z zaznaczonym „Pokaż w pasku górnym”."
      }
    },
    "callTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk „Zadzwoń”: tytuł"
      }
    },
    "callSubtitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk „Zadzwoń”: podtytuł",
        "description": "Np. „Wybierz dział”."
      }
    },
    "pizzaLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk zamawiania pizzy",
        "description": "Na zdjęciu strony głównej i na stronie Tawerny, np. „🍕 Zamów pizzę”."
      }
    },
    "pizzaUrl": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk pizzy: link do zamówień online",
        "placeholder": "np. /atrakcje albo https://…"
      }
    },
    "copyright": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Prawa autorskie",
        "description": "Strona wstawi bieżący rok w miejsce {rok}."
      }
    },
    "badges": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Odznaki",
        "description": "Logotypy i certyfikaty na stronie Projekty.",
        "addLabel": "Dodaj odznakę",
        "subfields": {
          "image": {
            "type": "image",
            "options": {
              "required": false,
              "label": "Obrazek"
            }
          },
          "alt": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Opis obrazka",
              "description": "Dla osób niewidomych i wyszukiwarek."
            }
          },
          "href": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Link (opcjonalnie)",
              "placeholder": "np. /atrakcje albo https://…"
            }
          }
        },
        "fieldLayout": [
          "image",
          [
            "alt",
            "href"
          ]
        ]
      }
    },
    "breadcrumbHome": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Okruszki: strona startowa",
        "description": "Np. „Start”."
      }
    },
    "seeMore": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Link „Zobacz”",
        "description": "Np. „Zobacz →”."
      }
    },
    "details": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk „Szczegóły”"
      }
    },
    "maxPersons": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Etykieta liczby osób na zdjęciu",
        "description": "Strona wstawi liczbę w miejsce {liczba}, np. „max {liczba} os.”."
      }
    },
    "widgetCheckIn": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Widżet: przyjazd (krótko)",
        "description": "Np. „Check-in”."
      }
    },
    "widgetCheckOut": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Widżet: wyjazd (krótko)",
        "description": "Np. „Check-out”."
      }
    },
    "widgetArrival": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Widżet: przyjazd (w okienku)",
        "description": "Np. „Przyjazd”."
      }
    },
    "widgetDeparture": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Widżet: wyjazd (w okienku)",
        "description": "Np. „Wyjazd”."
      }
    },
    "widgetPickDate": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Widżet: podpowiedź daty",
        "description": "Np. „Wybierz datę”."
      }
    },
    "widgetGuests": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Widżet: goście",
        "description": "Np. „Goście”."
      }
    },
    "widgetGuestOne": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Widżet: „1 Gość”",
        "description": "Słowo po liczbie 1."
      }
    },
    "widgetGuestMany": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Widżet: „2 Gości”",
        "description": "Słowo po liczbie większej niż 1."
      }
    },
    "widgetLess": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Widżet: przycisk „mniej” (dla czytników)"
      }
    },
    "widgetMore": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Widżet: przycisk „więcej” (dla czytników)"
      }
    },
    "widgetReserve": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Widżet: przycisk w pasku",
        "description": "Np. „Rezerwuj”."
      }
    },
    "widgetReserveNow": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Widżet: przycisk w okienku",
        "description": "Np. „Rezerwuj teraz”."
      }
    },
    "close": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk zamykania (dla czytników)",
        "description": "Np. „Zamknij”."
      }
    },
    "prevPhoto": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Poprzednie zdjęcie (dla czytników)"
      }
    },
    "nextPhoto": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Następne zdjęcie (dla czytników)"
      }
    },
    "photoN": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Numer zdjęcia (dla czytników)",
        "description": "Strona wstawi numer w miejsce {liczba}, np. „Zdjęcie {liczba}”."
      }
    },
    "openMenu": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Otwórz menu (dla czytników)"
      }
    },
    "closeMenu": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Zamknij menu (dla czytników)"
      }
    }
  }
})
