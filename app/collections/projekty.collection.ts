// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "projekty",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Strona Projekty i logotypy",
      "singular": "Strona Projekty i logotypy"
    }
  },
  "apiRoutes": {
    "read": "public"
  },
  "dashboard": {
    "icon": "Certificate",
    "additionalRecordOptionsVueComponent": "./app/dashboard/ViewOnSite.vue",
    "fieldLayout": [
      {
        "Nagłówek": [
          "heroTag",
          "heroTitle",
          "heroImage",
          "heroSubtitle"
        ],
        "Logotypy": [
          "logos"
        ],
        "Google i udostępnianie": [
          "seoTitle",
          "seoDescription",
          "seoImage"
        ],
        "Drobne napisy (rzadko zmieniane)": [
          [
            "readMore",
            "aboutLabel"
          ],
          [
            "scheduleLabel",
            "schedulePlaceLabel"
          ],
          [
            "scheduleParticipantsLabel",
            "scheduleExecutorLabel"
          ]
        ]
      }
    ]
  },
  "fields": {
    "heroTag": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad tytułem",
        "description": "Mały złoty napis nad tytułem strony Projekty."
      }
    },
    "heroTitle": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tytuł",
        "description": "Duży tytuł na zdjęciu. Nowa linia = łamanie wiersza.",
        "rows": 2
      }
    },
    "heroImage": {
      "type": "image",
      "options": {
        "required": false,
        "label": "Zdjęcie w tle",
        "description": "Duże zdjęcie na górze podstrony."
      }
    },
    "heroSubtitle": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Zdanie pod tytułem",
        "description": "Krótko, 1–2 zdania. Obok zdjęcia, pod tytułem. Puste = sam tytuł.",
        "rows": 2
      }
    },
    "logos": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Logotypy",
        "description": "Pasek pod zdjęciem na górze strony: logotypy programów, partnerów i certyfikaty. Kolejność zmieniasz przeciąganiem.",
        "addLabel": "Dodaj logo",
        "subfields": {
          "image": {
            "type": "image",
            "options": {
              "required": false,
              "label": "Logo"
            }
          },
          "alt": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa",
              "description": "Np. „Fundusze Europejskie” — dla osób niewidomych i wyszukiwarek."
            }
          },
          "href": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Link (opcjonalnie)",
              "description": "Po kliknięciu w logo.",
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
    "seoTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł w Google i w karcie przeglądarki",
        "description": "Puste = tytuł z nagłówka strony. Nazwa obiektu dopisze się sama na końcu."
      }
    },
    "seoDescription": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Opis w Google",
        "description": "Ok. 150 znaków. Puste = opis ogólny z Ustawień → Google i wyszukiwarki.",
        "rows": 3
      }
    },
    "seoImage": {
      "type": "image",
      "options": {
        "required": false,
        "label": "Obrazek przy udostępnianiu",
        "description": "Np. na Facebooku. Puste = zdjęcie z nagłówka strony."
      }
    },
    "readMore": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk „Czytaj więcej”"
      }
    },
    "aboutLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł karty z opisem projektu",
        "description": "Np. „O projekcie”."
      }
    },
    "scheduleLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł karty z harmonogramem",
        "description": "Gdy projekt nie ma własnego, np. „Harmonogram wsparcia”."
      }
    },
    "schedulePlaceLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Harmonogram: etykieta „Miejsce”"
      }
    },
    "scheduleParticipantsLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Harmonogram: etykieta „Uczestnicy”"
      }
    },
    "scheduleExecutorLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Harmonogram: etykieta „Prowadzi”"
      }
    }
  }
})
