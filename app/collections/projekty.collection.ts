// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "projekty",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Projekty i fundusze",
      "singular": "Projekty i fundusze"
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
          "heroImage"
        ],
        "Projekt": [
          "programName",
          "projectTitle",
          "contract",
          "projectBody",
          "readMore",
          "finance"
        ],
        "Fundusze EOG": [
          "fundsKicker",
          "fundsTitle",
          "fundsBody",
          "fundsLinks"
        ],
        "Harmonogram": [
          "timelineTitle",
          "timelineSubtitle",
          "milestones"
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
    "programName": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nazwa programu"
      }
    },
    "projectTitle": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tytuł projektu",
        "rows": 2
      }
    },
    "contract": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Umowa",
        "rows": 4
      }
    },
    "projectBody": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Opis",
        "description": "Akapity oddziel pustą linią.",
        "rows": 8
      }
    },
    "readMore": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk „Czytaj więcej”"
      }
    },
    "finance": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Finansowanie",
        "addLabel": "Dodaj pozycję",
        "subfields": {
          "label": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa"
            }
          },
          "value": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Kwota"
            }
          }
        }
      }
    },
    "fundsKicker": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad tytułem"
      }
    },
    "fundsTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł"
      }
    },
    "fundsBody": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tekst",
        "description": "Akapity oddziel pustą linią.",
        "rows": 8
      }
    },
    "fundsLinks": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Linki",
        "addLabel": "Dodaj link",
        "subfields": {
          "label": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Napis"
            }
          },
          "href": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Adres",
              "placeholder": "np. /atrakcje albo https://…"
            }
          }
        }
      }
    },
    "timelineTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł"
      }
    },
    "timelineSubtitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Podtytuł"
      }
    },
    "milestones": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Etapy",
        "description": "Od najstarszego.",
        "addLabel": "Dodaj etap",
        "subfields": {
          "date": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Data"
            }
          },
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
              "label": "Opis",
              "rows": 3
            }
          }
        }
      }
    }
  }
})
