// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "menu-strony",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Menu strony",
      "singular": "Menu strony"
    }
  },
  "apiRoutes": {
    "read": "public"
  },
  "dashboard": {
    "icon": "LayoutList",
    "additionalRecordOptionsVueComponent": "./app/dashboard/ViewOnSite.vue",
    "fieldLayout": [
      {
        "Pozycje menu": [
          "links"
        ]
      }
    ]
  },
  "fields": {
    "links": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Pozycje menu",
        "description": "Kolejność jak w menu na stronie.",
        "addLabel": "Dodaj pozycję",
        "subfields": {
          "label": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa"
            }
          },
          "href": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Dokąd prowadzi",
              "placeholder": "np. /atrakcje albo https://…"
            }
          },
          "children": {
            "type": "repeater",
            "options": {
              "required": false,
              "label": "Podmenu",
              "description": "Rozwijana lista pod pozycją (opcjonalnie).",
              "addLabel": "Dodaj podpozycję",
              "subfields": {
                "label": {
                  "type": "text",
                  "options": {
                    "required": false,
                    "label": "Nazwa"
                  }
                },
                "href": {
                  "type": "text",
                  "options": {
                    "required": false,
                    "label": "Dokąd prowadzi",
                    "placeholder": "np. /atrakcje albo https://…"
                  }
                },
                "subtitle": {
                  "type": "text",
                  "options": {
                    "required": false,
                    "label": "Podpis (opcjonalnie)"
                  }
                },
                "external": {
                  "type": "checkbox",
                  "options": {
                    "required": false,
                    "label": "Otwórz w nowej karcie"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
})
