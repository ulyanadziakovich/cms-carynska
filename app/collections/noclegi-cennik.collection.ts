// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "noclegi-cennik",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Cennik noclegów",
      "singular": "Cennik noclegów"
    }
  },
  "apiRoutes": {
    "read": "public"
  },
  "dashboard": {
    "icon": "Receipt",
    "additionalRecordOptionsVueComponent": "./app/dashboard/ViewOnSite.vue",
    "fieldLayout": [
      {
        "Nagłówek": [
          "heroTag",
          "heroTitle",
          "heroImage"
        ],
        "Ceny pokoi": [
          "kicker",
          "tableTitle",
          "colType",
          "col1",
          "col2",
          "col3",
          "col4",
          "colApt",
          "rows",
          "note"
        ],
        "Usługi dodatkowe": [
          "extrasTitle",
          "extras"
        ],
        "Kontakt": [
          "contactTitle",
          "cta",
          "ctaHref",
          "dzial"
        ],
        "Okruszki": [
          "crumbParent",
          "crumbCurrent"
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
        "description": "Mały złoty napis nad tytułem strony Cennik."
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
        "label": "Napis nad tabelą"
      }
    },
    "tableTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł tabeli",
        "description": "Np. „Cennik pokoi 2026”."
      }
    },
    "colType": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Kolumna: rodzaj pokoju"
      }
    },
    "col1": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Kolumna: 1 osoba"
      }
    },
    "col2": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Kolumna: 2 osoby"
      }
    },
    "col3": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Kolumna: 3 osoby"
      }
    },
    "col4": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Kolumna: 4 osoby"
      }
    },
    "colApt": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Kolumna: apartament"
      }
    },
    "rows": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Wiersze tabeli",
        "description": "Puste pole lub „—” = brak ceny.",
        "addLabel": "Dodaj wiersz",
        "subfields": {
          "type": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Rodzaj pokoju"
            }
          },
          "p1": {
            "type": "text",
            "options": {
              "required": false,
              "label": "1 osoba"
            }
          },
          "p2": {
            "type": "text",
            "options": {
              "required": false,
              "label": "2 osoby"
            }
          },
          "p3": {
            "type": "text",
            "options": {
              "required": false,
              "label": "3 osoby"
            }
          },
          "p4": {
            "type": "text",
            "options": {
              "required": false,
              "label": "4 osoby"
            }
          },
          "apt": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Apartament"
            }
          }
        }
      }
    },
    "note": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Uwagi pod tabelą",
        "rows": 2
      }
    },
    "extrasTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek"
      }
    },
    "extras": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Usługi",
        "addLabel": "Dodaj usługę",
        "subfields": {
          "label": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa"
            }
          },
          "price": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Cena"
            }
          }
        }
      }
    },
    "contactTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek"
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
    }
  }
})
