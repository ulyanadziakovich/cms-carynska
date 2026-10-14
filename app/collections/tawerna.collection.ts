// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "tawerna",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Tawerna",
      "singular": "Tawerna"
    }
  },
  "apiRoutes": {
    "read": "public"
  },
  "dashboard": {
    "icon": "ChefHat",
    "additionalRecordOptionsVueComponent": "./app/dashboard/ViewOnSite.vue",
    "fieldLayout": [
      {
        "Nagłówek": [
          "heroTag",
          "heroTitle",
          "heroImage"
        ],
        "Wstęp": [
          "intro"
        ],
        "Menu": [
          "menu"
        ],
        "Karta dań (książka)": [
          "bookKicker",
          "bookTitle",
          "bookName",
          "bookSection",
          "bookEnd",
          "bookContinued",
          "bookPrev",
          "bookNext"
        ],
        "Dostawa": [
          "deliveryTitle",
          "deliveryBody",
          "dzial"
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
        "description": "Mały złoty napis nad tytułem strony Tawerna."
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
    "intro": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tekst wstępu",
        "rows": 4
      }
    },
    "menu": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Kategorie menu",
        "description": "Kategorie w kolejności jak w karcie dań.",
        "addLabel": "Dodaj kategorię",
        "subfields": {
          "category": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa kategorii"
            }
          },
          "items": {
            "type": "repeater",
            "options": {
              "required": false,
              "label": "Dania",
              "addLabel": "Dodaj danie",
              "subfields": {
                "name": {
                  "type": "text",
                  "options": {
                    "required": false,
                    "label": "Nazwa"
                  }
                },
                "note": {
                  "type": "text",
                  "options": {
                    "required": false,
                    "label": "Dopisek (opcjonalnie)"
                  }
                },
                "price": {
                  "type": "text",
                  "options": {
                    "required": false,
                    "label": "Cena (opcjonalnie)"
                  }
                }
              }
            }
          }
        }
      }
    },
    "bookKicker": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Okładka: napis nad tytułem"
      }
    },
    "bookTitle": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Okładka: tytuł",
        "rows": 2
      }
    },
    "bookName": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Okładka: nazwa"
      }
    },
    "bookSection": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis w nagłówku stron"
      }
    },
    "bookEnd": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Ostatnia strona",
        "description": "Np. „Smacznego!”."
      }
    },
    "bookContinued": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Dopisek, gdy kategoria ciągnie się na kolejnej stronie",
        "description": "Np. „c.d.”."
      }
    },
    "bookPrev": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Poprzednia strona (dla czytników)"
      }
    },
    "bookNext": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Następna strona (dla czytników)"
      }
    },
    "deliveryTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł"
      }
    },
    "deliveryBody": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tekst",
        "rows": 2
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
