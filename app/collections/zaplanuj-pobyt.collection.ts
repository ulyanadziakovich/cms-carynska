// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "zaplanuj-pobyt",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Zaplanuj pobyt",
      "singular": "Zaplanuj pobyt"
    }
  },
  "apiRoutes": {
    "read": "public"
  },
  "dashboard": {
    "icon": "Map",
    "additionalRecordOptionsVueComponent": "./app/dashboard/ViewOnSite.vue",
    "fieldLayout": [
      {
        "Nagłówek": [
          "heroTag",
          "heroTitle",
          "heroImage"
        ],
        "O ośrodku": [
          "aboutTitle",
          "aboutBody"
        ],
        "Obiekty przystani": [
          "tilesTitle",
          "tileCta",
          "tiles"
        ],
        "Nasze obiekty w Bieszczadach": [
          "sistersTitle"
        ],
        "W okolicy": [
          "nearbyText",
          "nearbyCta",
          "nearbyHref"
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
        "description": "Mały złoty napis nad tytułem strony Zaplanuj pobyt."
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
    "aboutTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł"
      }
    },
    "aboutBody": {
      "type": "editor",
      "options": {
        "required": false,
        "label": "Tekst",
        "description": "Zaznacz słowo i wstaw link, aby prowadziło do podstrony.",
        "toolbar": [
          "heading2",
          "heading3",
          "paragraph",
          "bold",
          "italic",
          "link",
          "bulletList",
          "orderedList",
          "blockquote",
          "clear",
          "undo",
          "redo"
        ]
      }
    },
    "tilesTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek"
      }
    },
    "tileCta": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Link na kafelku",
        "description": "Np. „Zobacz →”."
      }
    },
    "tiles": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Kafelki",
        "addLabel": "Dodaj kafelek",
        "subfields": {
          "title": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Tytuł"
            }
          },
          "tag": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Napis nad tytułem (opcjonalnie)"
            }
          },
          "desc": {
            "type": "text-area",
            "options": {
              "required": false,
              "label": "Opis",
              "rows": 2
            }
          },
          "image": {
            "type": "image",
            "options": {
              "required": false,
              "label": "Zdjęcie"
            }
          },
          "href": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Dokąd prowadzi",
              "placeholder": "np. /atrakcje albo https://…"
            }
          }
        }
      }
    },
    "sistersTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek",
        "description": "Obiekty i ich opisy edytujesz w „Kontakt, przelew i nasze obiekty”."
      }
    },
    "nearbyText": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tekst"
      }
    },
    "nearbyCta": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk"
      }
    },
    "nearbyHref": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Dokąd prowadzi przycisk",
        "placeholder": "np. /atrakcje albo https://…"
      }
    }
  }
})
