// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "galeria",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Galeria",
      "singular": "Galeria"
    }
  },
  "apiRoutes": {
    "read": "public"
  },
  "dashboard": {
    "icon": "Photo",
    "additionalRecordOptionsVueComponent": "./app/dashboard/ViewOnSite.vue",
    "fieldLayout": [
      {
        "Nagłówek": [
          "heroTag",
          "heroTitle",
          "heroImage"
        ],
        "Zdjęcia": [
          "allLabel",
          "emptyText",
          "categories"
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
        "description": "Mały złoty napis nad tytułem strony Galeria."
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
    "allLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Filtr „wszystkie”"
      }
    },
    "emptyText": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Gdy brak zdjęć"
      }
    },
    "categories": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Kategorie zdjęć",
        "description": "Każda kategoria to przycisk filtra nad zdjęciami.",
        "addLabel": "Dodaj kategorię",
        "subfields": {
          "label": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa kategorii"
            }
          },
          "photos": {
            "type": "gallery",
            "options": {
              "required": false,
              "label": "Zdjęcia",
              "description": "Opis zdjęcia = podpis widoczny na zdjęciu.",
              "directory": "galeria/"
            }
          }
        }
      }
    }
  }
})
