// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "test-formularza",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Formularz testowy",
      "singular": "Formularz testowy"
    }
  },
  "apiRoutes": {
    "read": "public"
  },
  "dashboard": {
    "icon": "Flask",
    "additionalRecordOptionsVueComponent": "./app/dashboard/ViewOnSite.vue",
    "fieldLayout": [
      {
        "Lista": [
          "grupy",
          "punkty",
          "dzial"
        ]
      }
    ]
  },
  "fields": {
    "grupy": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Grupy",
        "addLabel": "Dodaj grupę",
        "subfields": {
          "nazwa": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa"
            }
          },
          "pozycje": {
            "type": "repeater",
            "options": {
              "required": false,
              "label": "Pozycje",
              "addLabel": "Dodaj pozycję",
              "subfields": {
                "nazwa": {
                  "type": "text",
                  "options": {
                    "required": false,
                    "label": "Nazwa"
                  }
                },
                "cena": {
                  "type": "text",
                  "options": {
                    "required": false,
                    "label": "Cena"
                  }
                }
              }
            }
          }
        }
      }
    },
    "punkty": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Punkty",
        "description": "Jedna pozycja w linii.",
        "rows": 5
      }
    },
    "dzial": {
      "type": "record",
      "options": {
        "required": false,
        "label": "Dział kontaktowy",
        "description": "Telefon i e-mail tego działu pokażą się w tym miejscu.",
        "collection": "dzialy",
        "populate": true,
        "fields": {
          "id": true,
          "name": true,
          "tag": true,
          "phone": true,
          "email": true,
          "desc": true
        },
        "recordLabel": "name",
        "clearable": true
      }
    }
  }
})
