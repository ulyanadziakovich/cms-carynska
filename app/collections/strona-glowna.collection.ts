// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "strona-glowna",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Strona główna",
      "singular": "Strona główna"
    }
  },
  "apiRoutes": {
    "read": "public"
  },
  "dashboard": {
    "icon": "Home",
    "additionalRecordOptionsVueComponent": "./app/dashboard/ViewOnSite.vue",
    "fieldLayout": [
      {
        "Baner ze zdjęciami": [
          "heroTitle",
          "heroSubtitle",
          "heroImages"
        ],
        "Noclegi": [
          "noclegiTag",
          "noclegiTitle",
          "noclegiBody",
          "noclegiImage",
          [
            "noclegiImageAlt",
            "noclegiCta"
          ],
          "noclegiCtaHref"
        ],
        "Atrakcje (kafelki)": [
          "atrakcjeTag",
          "atrakcjeTitle",
          "atrakcjeBody",
          "atrakcjeImage",
          [
            "atrakcjeImageAlt",
            "atrakcjeCta"
          ],
          [
            "atrakcjeCtaHref",
            "tileHint"
          ],
          "tiles"
        ],
        "Tawerna": [
          "kuchniaTag",
          "kuchniaTitle",
          "kuchniaBody",
          "kuchniaImage",
          [
            "kuchniaImageAlt",
            "kuchniaCta"
          ],
          "kuchniaCtaHref"
        ],
        "Opinie gości": [
          [
            "reviewsTag",
            "reviewsTitle"
          ],
          [
            "reviewsAll",
            "googleUrl"
          ],
          "reviews"
        ],
        "Facebook": [
          "fbTag",
          "fbTitle",
          "fbBody",
          [
            "fbTabFacebook",
            "fbTabInstagram"
          ],
          [
            "fbTabReviews",
            "fbFollow"
          ],
          [
            "fbUrl",
            "igUrl"
          ]
        ]
      }
    ]
  },
  "fields": {
    "heroTitle": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tytuł",
        "description": "Nowa linia = łamanie wiersza.",
        "rows": 2
      }
    },
    "heroSubtitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Podtytuł"
      }
    },
    "heroImages": {
      "type": "gallery",
      "options": {
        "required": false,
        "label": "Zdjęcia w banerze",
        "description": "Zmieniają się co kilka sekund. Kolejność przeciąganiem.",
        "directory": "strona-glowna/"
      }
    },
    "noclegiTag": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad tytułem"
      }
    },
    "noclegiTitle": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tytuł",
        "rows": 2
      }
    },
    "noclegiBody": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tekst",
        "description": "Akapity oddziel pustą linią.",
        "rows": 6
      }
    },
    "noclegiImage": {
      "type": "image",
      "options": {
        "required": false,
        "label": "Zdjęcie"
      }
    },
    "noclegiImageAlt": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Opis zdjęcia"
      }
    },
    "noclegiCta": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk"
      }
    },
    "noclegiCtaHref": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Dokąd prowadzi przycisk",
        "placeholder": "np. /atrakcje albo https://…"
      }
    },
    "atrakcjeTag": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad tytułem"
      }
    },
    "atrakcjeTitle": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tytuł",
        "rows": 2
      }
    },
    "atrakcjeBody": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tekst",
        "rows": 3
      }
    },
    "atrakcjeImage": {
      "type": "image",
      "options": {
        "required": false,
        "label": "Zdjęcie"
      }
    },
    "atrakcjeImageAlt": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Opis zdjęcia"
      }
    },
    "atrakcjeCta": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk"
      }
    },
    "atrakcjeCtaHref": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Dokąd prowadzi przycisk",
        "placeholder": "np. /atrakcje albo https://…"
      }
    },
    "tileHint": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Podpowiedź na kafelku",
        "description": "Np. „Kliknij, aby dowiedzieć się więcej”."
      }
    },
    "tiles": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Kafelki",
        "description": "Kliknięcie kafelka otwiera okienko ze szczegółami.",
        "addLabel": "Dodaj kafelek",
        "subfields": {
          "tag": {
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
          "icon": {
            "type": "image",
            "options": {
              "required": false,
              "label": "Ikona"
            }
          },
          "image": {
            "type": "image",
            "options": {
              "required": false,
              "label": "Zdjęcie"
            }
          },
          "from": {
            "type": "select",
            "options": {
              "required": false,
              "label": "Skąd wjeżdża przy przewijaniu",
              "choices": {
                "left": "Z lewej",
                "right": "Z prawej"
              },
              "clearable": true
            }
          },
          "modalTitle": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Okienko: tytuł"
            }
          },
          "modalBody": {
            "type": "text-area",
            "options": {
              "required": false,
              "label": "Okienko: tekst",
              "description": "Akapity oddziel pustą linią.",
              "rows": 8
            }
          },
          "highlights": {
            "type": "text-area",
            "options": {
              "required": false,
              "label": "Okienko: wyróżniki",
              "description": "Jedna pozycja w linii.",
              "rows": 5
            }
          }
        },
        "fieldLayout": [
          [
            "tag",
            "title"
          ],
          "icon",
          "image",
          [
            "from",
            "modalTitle"
          ],
          "modalBody",
          "highlights"
        ]
      }
    },
    "kuchniaTag": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad tytułem"
      }
    },
    "kuchniaTitle": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tytuł",
        "rows": 2
      }
    },
    "kuchniaBody": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tekst",
        "description": "Akapity oddziel pustą linią.",
        "rows": 5
      }
    },
    "kuchniaImage": {
      "type": "image",
      "options": {
        "required": false,
        "label": "Zdjęcie"
      }
    },
    "kuchniaImageAlt": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Opis zdjęcia"
      }
    },
    "kuchniaCta": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk"
      }
    },
    "kuchniaCtaHref": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Dokąd prowadzi przycisk",
        "placeholder": "np. /atrakcje albo https://…"
      }
    },
    "reviewsTag": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad tytułem"
      }
    },
    "reviewsTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł"
      }
    },
    "reviewsAll": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Link do wszystkich opinii"
      }
    },
    "googleUrl": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Adres opinii w Google",
        "placeholder": "np. /atrakcje albo https://…"
      }
    },
    "reviews": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Opinie",
        "addLabel": "Dodaj opinię",
        "subfields": {
          "name": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Autor"
            }
          },
          "badge": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Odznaka autora",
              "description": "Np. „Lokalny przewodnik”."
            }
          },
          "date": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Kiedy",
              "description": "Np. „3 tygodnie temu”."
            }
          },
          "stars": {
            "type": "number",
            "options": {
              "required": false,
              "label": "Gwiazdki (1–5)"
            }
          },
          "text": {
            "type": "text-area",
            "options": {
              "required": false,
              "label": "Treść",
              "rows": 4
            }
          }
        },
        "fieldLayout": [
          [
            "name",
            "badge",
            "date",
            "stars"
          ],
          "text"
        ]
      }
    },
    "fbTag": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad tytułem"
      }
    },
    "fbTitle": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tytuł",
        "rows": 2
      }
    },
    "fbBody": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tekst",
        "rows": 3
      }
    },
    "fbTabFacebook": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Zakładka: Facebook"
      }
    },
    "fbTabInstagram": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Zakładka: Instagram"
      }
    },
    "fbTabReviews": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Zakładka: Opinie"
      }
    },
    "fbFollow": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk obserwowania"
      }
    },
    "fbUrl": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Adres strony na Facebooku",
        "description": "Też źródło okienka z postami.",
        "placeholder": "np. /atrakcje albo https://…"
      }
    },
    "igUrl": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Adres profilu na Instagramie",
        "placeholder": "np. /atrakcje albo https://…"
      }
    }
  }
})
