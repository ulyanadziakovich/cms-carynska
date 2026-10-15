// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "kontakt",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Kontakt, przelew i nasze obiekty",
      "singular": "Kontakt, przelew i nasze obiekty"
    }
  },
  "apiRoutes": {
    "read": "public"
  },
  "dashboard": {
    "icon": "Mail",
    "additionalRecordOptionsVueComponent": "./app/dashboard/ViewOnSite.vue",
    "fieldLayout": [
      {
        "Adres": [
          [
            "address",
            "mapQuery"
          ],
          "email"
        ],
        "Sekcja Kontakt": [
          [
            "kicker",
            "title"
          ],
          [
            "reservationsTitle",
            "formTitle"
          ],
          [
            "formName",
            "formEmail"
          ],
          [
            "formPhone",
            "formMessage"
          ],
          [
            "formSubmit",
            "formSending"
          ],
          [
            "formThanks",
            "formThanksText"
          ]
        ],
        "Dane do przelewu": [
          [
            "bankTitle",
            "bankLabel"
          ],
          [
            "bankName",
            "accountLabel"
          ],
          [
            "account",
            "swiftLabel"
          ],
          "swift"
        ],
        "Social media i portale": [
          "social",
          "platforms"
        ],
        "Nasze obiekty": [
          "sisterTitle",
          "sisters"
        ]
      }
    ]
  },
  "fields": {
    "address": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Adres"
      }
    },
    "mapQuery": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Mapa: czego szukać w Google Maps",
        "description": "Np. „Przystan Carynska Polanczyk Rowna 19”."
      }
    },
    "email": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Główny e-mail",
        "description": "W pasku górnym, menu i sekcji Kontakt."
      }
    },
    "kicker": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad tytułem"
      }
    },
    "title": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł"
      }
    },
    "reservationsTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek listy działów",
        "description": "Np. „Rezerwacje”."
      }
    },
    "formTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Formularz: tytuł",
        "description": "Np. „Napisz do nas”."
      }
    },
    "formName": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Formularz: imię i nazwisko"
      }
    },
    "formEmail": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Formularz: e-mail"
      }
    },
    "formPhone": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Formularz: telefon"
      }
    },
    "formMessage": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Formularz: wiadomość"
      }
    },
    "formSubmit": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Formularz: przycisk wysyłania"
      }
    },
    "formSending": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Formularz: napis podczas wysyłania",
        "description": "Np. „Wysyłanie…”."
      }
    },
    "formThanks": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Po wysłaniu: tytuł",
        "description": "Np. „Dziękujemy!”."
      }
    },
    "formThanksText": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Po wysłaniu: tekst"
      }
    },
    "bankTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek"
      }
    },
    "bankLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Podpis: bank"
      }
    },
    "bankName": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nazwa banku"
      }
    },
    "accountLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Podpis: numer rachunku"
      }
    },
    "account": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Numer rachunku"
      }
    },
    "swiftLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Podpis: SWIFT"
      }
    },
    "swift": {
      "type": "text",
      "options": {
        "required": false,
        "label": "SWIFT / BIC"
      }
    },
    "social": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Media społecznościowe",
        "addLabel": "Dodaj profil",
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
              "label": "Adres profilu",
              "placeholder": "np. /atrakcje albo https://…"
            }
          },
          "icon": {
            "type": "select",
            "options": {
              "required": false,
              "label": "Ikona",
              "choices": {
                "facebook": "Facebook",
                "instagram": "Instagram"
              },
              "clearable": true
            }
          }
        },
        "fieldLayout": [
          [
            "label",
            "href",
            "icon"
          ]
        ]
      }
    },
    "platforms": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Portale rezerwacyjne",
        "description": "Linki w sekcji Kontakt.",
        "addLabel": "Dodaj portal",
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
              "label": "Adres",
              "placeholder": "np. /atrakcje albo https://…"
            }
          }
        },
        "fieldLayout": [
          [
            "label",
            "href"
          ]
        ]
      }
    },
    "sisterTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek w stopce",
        "description": "Np. „Nasze obiekty”."
      }
    },
    "sisters": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Obiekty siostrzane",
        "description": "Pokazywane w stopce i na stronie Zaplanuj pobyt.",
        "addLabel": "Dodaj obiekt",
        "subfields": {
          "name": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa"
            }
          },
          "location": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Miejscowość"
            }
          },
          "href": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Strona internetowa",
              "placeholder": "np. /atrakcje albo https://…"
            }
          },
          "phone": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Telefon"
            }
          },
          "email": {
            "type": "text",
            "options": {
              "required": false,
              "label": "E-mail"
            }
          },
          "longDesc": {
            "type": "text-area",
            "options": {
              "required": false,
              "label": "Dłuższy opis (Zaplanuj pobyt)",
              "rows": 3
            }
          },
          "image": {
            "type": "image",
            "options": {
              "required": false,
              "label": "Zdjęcie (Zaplanuj pobyt)"
            }
          },
          "imageAlt": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Opis zdjęcia"
            }
          },
          "cta": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Przycisk (Zaplanuj pobyt)",
              "description": "Np. „Zobacz Zajazd”."
            }
          }
        },
        "fieldLayout": [
          [
            "name",
            "location",
            "href",
            "phone"
          ],
          "email",
          "longDesc",
          "image",
          [
            "imageAlt",
            "cta"
          ]
        ]
      }
    }
  }
})
