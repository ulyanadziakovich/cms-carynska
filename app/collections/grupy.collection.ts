// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "grupy",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Grupy i eventy",
      "singular": "Grupy i eventy"
    }
  },
  "apiRoutes": {
    "read": "public"
  },
  "dashboard": {
    "icon": "Users",
    "additionalRecordOptionsVueComponent": "./app/dashboard/ViewOnSite.vue",
    "fieldLayout": [
      {
        "Nagłówek": [
          "heroTag",
          "heroTitle",
          "heroImage",
          "stats"
        ],
        "Oferta": [
          "offerKicker",
          "sections"
        ],
        "Cennik grupowy": [
          "pricingTag",
          "minPersons",
          "minPersonsLabel",
          "bonuses",
          "colRate",
          "cols",
          "rows",
          "hbLabel",
          "includesHb",
          "fbLabel",
          "includesFb",
          "footnote",
          "notesTitle",
          "notes",
          "legal"
        ],
        "Opcje dodatkowe": [
          "extrasTitle",
          "mealsLabel",
          "extras"
        ],
        "Baza noclegowa": [
          "capacityTitle",
          "capacityRooms",
          "totalRooms",
          "beds",
          "maxOccupancy",
          "halls"
        ],
        "Zapytanie": [
          "inquiryTitle",
          "inquiryCta",
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
        "description": "Mały złoty napis nad tytułem strony Grupy."
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
    "stats": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Liczby pod tytułem",
        "addLabel": "Dodaj liczbę",
        "subfields": {
          "value": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Liczba"
            }
          },
          "label": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Podpis"
            }
          }
        }
      }
    },
    "offerKicker": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad sekcjami",
        "description": "Np. „Organizujemy”."
      }
    },
    "sections": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Sekcje oferty",
        "addLabel": "Dodaj sekcję",
        "subfields": {
          "title": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Tytuł"
            }
          },
          "body": {
            "type": "text-area",
            "options": {
              "required": false,
              "label": "Tekst",
              "rows": 5
            }
          },
          "note": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Wyróżniona uwaga (opcjonalnie)"
            }
          }
        }
      }
    },
    "pricingTag": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad cennikiem",
        "description": "Np. „Cennik 2026”."
      }
    },
    "minPersons": {
      "type": "number",
      "options": {
        "required": false,
        "label": "Minimalna liczba osób"
      }
    },
    "minPersonsLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Podpis min. liczby osób"
      }
    },
    "bonuses": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Gratisy",
        "addLabel": "Dodaj gratis",
        "subfields": {
          "threshold": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Od ilu osób"
            }
          },
          "reward": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Gratis"
            }
          }
        }
      }
    },
    "colRate": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Kolumna: stawka"
      }
    },
    "cols": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Kolumny cennika",
        "description": "Jedna pozycja w linii.",
        "rows": 5
      }
    },
    "rows": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Wiersze cennika",
        "description": "Ceny w kolejności kolumn, jedna w linii.",
        "addLabel": "Dodaj wiersz",
        "subfields": {
          "type": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa"
            }
          },
          "values": {
            "type": "text-area",
            "options": {
              "required": false,
              "label": "Ceny",
              "description": "Jedna pozycja w linii.",
              "rows": 5
            }
          }
        }
      }
    },
    "hbLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Podpis HB",
        "description": "Np. „half board”."
      }
    },
    "includesHb": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "W cenie HB",
        "description": "Jedna pozycja w linii.",
        "rows": 5
      }
    },
    "fbLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Podpis FB",
        "description": "Np. „full board”."
      }
    },
    "includesFb": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "W cenie FB",
        "description": "Jedna pozycja w linii.",
        "rows": 5
      }
    },
    "footnote": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przypis o posiłkach"
      }
    },
    "notesTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek uwag"
      }
    },
    "notes": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Ważne informacje",
        "description": "Jedna pozycja w linii.",
        "rows": 5
      }
    },
    "legal": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Zastrzeżenie prawne",
        "rows": 3
      }
    },
    "extrasTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek"
      }
    },
    "mealsLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Etykieta wyżywienia",
        "description": "Np. „Wyżywienie”."
      }
    },
    "extras": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Grupy opcji",
        "addLabel": "Dodaj grupę",
        "subfields": {
          "category": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa grupy"
            }
          },
          "note": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Uwaga (opcjonalnie)"
            }
          },
          "items": {
            "type": "repeater",
            "options": {
              "required": false,
              "label": "Opcje",
              "addLabel": "Dodaj opcję",
              "subfields": {
                "name": {
                  "type": "text",
                  "options": {
                    "required": false,
                    "label": "Nazwa"
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
                "price": {
                  "type": "text",
                  "options": {
                    "required": false,
                    "label": "Cena"
                  }
                },
                "note": {
                  "type": "text",
                  "options": {
                    "required": false,
                    "label": "Dopisek (opcjonalnie)"
                  }
                }
              }
            }
          }
        }
      }
    },
    "capacityTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek"
      }
    },
    "capacityRooms": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Pokoje",
        "addLabel": "Dodaj rodzaj",
        "subfields": {
          "count": {
            "type": "number",
            "options": {
              "required": false,
              "label": "Liczba"
            }
          },
          "label": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Rodzaj"
            }
          }
        }
      }
    },
    "totalRooms": {
      "type": "number",
      "options": {
        "required": false,
        "label": "Pokoi razem"
      }
    },
    "beds": {
      "type": "number",
      "options": {
        "required": false,
        "label": "Miejsc noclegowych"
      }
    },
    "maxOccupancy": {
      "type": "number",
      "options": {
        "required": false,
        "label": "Maks. osób z dostawkami"
      }
    },
    "halls": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Sale",
        "addLabel": "Dodaj salę",
        "subfields": {
          "name": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa"
            }
          },
          "seats": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Pojemność"
            }
          }
        }
      }
    },
    "inquiryTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł"
      }
    },
    "inquiryCta": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk"
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
