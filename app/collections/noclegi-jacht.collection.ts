// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "noclegi-jacht",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Hotel na wodzie",
      "singular": "Hotel na wodzie"
    }
  },
  "apiRoutes": {
    "read": "public"
  },
  "dashboard": {
    "icon": "Anchor",
    "additionalRecordOptionsVueComponent": "./app/dashboard/ViewOnSite.vue",
    "fieldLayout": [
      {
        "Nagłówek": [
          "heroTag",
          "heroTitle",
          "heroImage"
        ],
        "Wstęp": [
          "kicker",
          "intro"
        ],
        "Jachty": [
          "yachts"
        ],
        "Co zawiera nocleg": [
          "includesTitle",
          "includes",
          "note"
        ],
        "Napisy": [
          "seeDetails",
          "detailsLink",
          "onBoard",
          "seasonPricing",
          "callCta",
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
        "description": "Mały złoty napis nad tytułem strony Hotel na wodzie."
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
    "kicker": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad wstępem",
        "description": "Np. „Unikalne doświadczenie”."
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
    "yachts": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Jachty",
        "addLabel": "Dodaj jacht",
        "subfields": {
          "name": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa"
            }
          },
          "tag": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Napis nad nazwą"
            }
          },
          "units": {
            "type": "number",
            "options": {
              "required": false,
              "label": "Liczba jednostek"
            }
          },
          "capacity": {
            "type": "number",
            "options": {
              "required": false,
              "label": "Liczba osób"
            }
          },
          "cabins": {
            "type": "number",
            "options": {
              "required": false,
              "label": "Liczba kabin"
            }
          },
          "price": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Cena od",
              "description": "Np. „od 380 zł / noc”."
            }
          },
          "desc": {
            "type": "text-area",
            "options": {
              "required": false,
              "label": "Opis",
              "rows": 4
            }
          },
          "gallery": {
            "type": "gallery",
            "options": {
              "required": false,
              "label": "Zdjęcia",
              "description": "Pierwsze zdjęcie to okładka.",
              "directory": "jachty/"
            }
          },
          "features": {
            "type": "text-area",
            "options": {
              "required": false,
              "label": "Wyposażenie",
              "description": "Jedna pozycja w linii.",
              "rows": 5
            }
          },
          "specs": {
            "type": "repeater",
            "options": {
              "required": false,
              "label": "Dane techniczne",
              "addLabel": "Dodaj parametr",
              "subfields": {
                "label": {
                  "type": "text",
                  "options": {
                    "required": false,
                    "label": "Parametr"
                  }
                },
                "value": {
                  "type": "text",
                  "options": {
                    "required": false,
                    "label": "Wartość"
                  }
                }
              }
            }
          },
          "pricing": {
            "type": "repeater",
            "options": {
              "required": false,
              "label": "Cennik sezonowy",
              "addLabel": "Dodaj okres",
              "subfields": {
                "label": {
                  "type": "text",
                  "options": {
                    "required": false,
                    "label": "Okres"
                  }
                },
                "value": {
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
    "includesTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek"
      }
    },
    "includes": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Co zawiera nocleg",
        "description": "Jedna pozycja w linii.",
        "rows": 5
      }
    },
    "note": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Uwaga",
        "rows": 2
      }
    },
    "seeDetails": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk „Zobacz szczegóły”"
      }
    },
    "detailsLink": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Link „Szczegóły →”"
      }
    },
    "onBoard": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek: na pokładzie"
      }
    },
    "seasonPricing": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek: cennik sezonowy"
      }
    },
    "callCta": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk „Zadzwoń i zarezerwuj”"
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
