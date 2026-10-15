// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "noclegi-pokoje",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Pokoje i apartamenty",
      "singular": "Pokoje i apartamenty"
    }
  },
  "apiRoutes": {
    "read": "public"
  },
  "dashboard": {
    "icon": "Building",
    "additionalRecordOptionsVueComponent": "./app/dashboard/ViewOnSite.vue",
    "fieldLayout": [
      {
        "Nagłówek": [
          "heroTag",
          "heroTitle",
          "heroImage",
          "heroSubtitle"
        ],
        "Wstęp": [
          "intro"
        ],
        "Pokoje": [
          "rooms"
        ],
        "Napisy": [
          [
            "crumbParent",
            "crumbCurrent"
          ],
          [
            "labelSize",
            "labelMax"
          ],
          [
            "labelAmenities",
            "occupancyValue"
          ],
          [
            "amenitiesCount",
            "questions"
          ],
          [
            "cta",
            "ctaHref"
          ],
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
        "description": "Mały złoty napis nad tytułem strony Pokoje."
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
      "type": "text",
      "options": {
        "required": false,
        "label": "Podtytuł"
      }
    },
    "intro": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tekst wstępu",
        "description": "Akapity oddziel pustą linią.",
        "rows": 8
      }
    },
    "rooms": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Pokoje",
        "description": "Kolejność jak na stronie.",
        "addLabel": "Dodaj pokój",
        "subfields": {
          "slug": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Identyfikator w adresie",
              "description": "Małe litery i myślniki, np. „pokoj-2-osobowy”. Nie zmieniaj bez potrzeby — linki do pokoju przestaną działać."
            }
          },
          "tag": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Rodzaj",
              "description": "Np. „Pokój 2-osobowy”."
            }
          },
          "title": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Standard",
              "description": "Np. „Standard Plus”."
            }
          },
          "size": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Powierzchnia",
              "description": "Np. „22 m²”."
            }
          },
          "occupancy": {
            "type": "number",
            "options": {
              "required": false,
              "label": "Maks. liczba osób"
            }
          },
          "desc": {
            "type": "text-area",
            "options": {
              "required": false,
              "label": "Opis",
              "rows": 3
            }
          },
          "amenities": {
            "type": "text-area",
            "options": {
              "required": false,
              "label": "Wyposażenie",
              "description": "Jedna pozycja w linii.",
              "rows": 5
            }
          },
          "images": {
            "type": "gallery",
            "options": {
              "required": false,
              "label": "Zdjęcia",
              "description": "Pierwsze zdjęcie to okładka.",
              "directory": "pokoje/"
            }
          }
        },
        "fieldLayout": [
          [
            "slug",
            "tag",
            "title",
            "size"
          ],
          "occupancy",
          "desc",
          "amenities",
          "images"
        ]
      }
    },
    "crumbParent": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Okruszki: nazwa działu",
        "description": "Mały link nad treścią, np. „Noclegi”."
      }
    },
    "crumbCurrent": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Okruszki: ta strona"
      }
    },
    "labelSize": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Podpis: powierzchnia"
      }
    },
    "labelMax": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Podpis: maks. osób"
      }
    },
    "labelAmenities": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Podpis: wyposażenie"
      }
    },
    "occupancyValue": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Liczba osób w szczegółach",
        "description": "Strona wstawi liczbę w miejsce {liczba}, np. „{liczba} osoby”."
      }
    },
    "amenitiesCount": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Liczba udogodnień na karcie",
        "description": "Strona wstawi liczbę w miejsce {liczba}."
      }
    },
    "questions": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Pytanie nad przyciskiem",
        "description": "Np. „Masz pytania o pokoje lub dostępność?”."
      }
    },
    "cta": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk rezerwacji"
      }
    },
    "ctaHref": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Dokąd prowadzi przycisk rezerwacji",
        "placeholder": "np. /atrakcje albo https://…"
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
