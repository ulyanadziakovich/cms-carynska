// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "regulamin-wypozyczalni",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Regulamin wypożyczalni",
      "singular": "Regulamin wypożyczalni"
    }
  },
  "apiRoutes": {
    "read": "public"
  },
  "dashboard": {
    "icon": "FileText",
    "additionalRecordOptionsVueComponent": "./app/dashboard/ViewOnSite.vue",
    "fieldLayout": [
      {
        "Treść": [
          [
            "title",
            "kicker"
          ],
          "heroImage",
          "lead",
          "body"
        ],
        "Plik i przyciski": [
          "pdf",
          [
            "pdfLabel",
            "cta"
          ],
          [
            "ctaHref",
            "buttonsAtEnd"
          ],
          "showInFooter"
        ],
        "Google i udostępnianie": [
          "seoTitle",
          "seoDescription",
          "seoImage"
        ]
      }
    ]
  },
  "fields": {
    "title": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł"
      }
    },
    "kicker": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad tytułem"
      }
    },
    "heroImage": {
      "type": "image",
      "options": {
        "required": false,
        "label": "Zdjęcie w nagłówku"
      }
    },
    "lead": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Wstęp pod tytułem",
        "rows": 3
      }
    },
    "body": {
      "type": "editor",
      "options": {
        "required": false,
        "label": "Treść dokumentu",
        "description": "Śródtytuły ustaw jako „Nagłówek 2”.",
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
    "pdf": {
      "type": "file",
      "options": {
        "required": false,
        "label": "Plik PDF do pobrania"
      }
    },
    "pdfLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Przycisk pobierania"
      }
    },
    "cta": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Dodatkowy przycisk (opcjonalnie)"
      }
    },
    "ctaHref": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Dokąd prowadzi dodatkowy przycisk",
        "placeholder": "np. /atrakcje albo https://…"
      }
    },
    "buttonsAtEnd": {
      "type": "checkbox",
      "options": {
        "required": false,
        "label": "Przyciski pod treścią",
        "description": "Zaznaczone: przyciski na końcu dokumentu. Puste: nad treścią."
      }
    },
    "showInFooter": {
      "type": "checkbox",
      "options": {
        "required": false,
        "label": "Link w stopce",
        "description": "Zaznaczone: link do tego dokumentu jest w stopce każdej strony."
      }
    },
    "seoTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł w Google i w karcie przeglądarki",
        "description": "Puste = tytuł z nagłówka strony. Nazwa obiektu dopisze się sama na końcu."
      }
    },
    "seoDescription": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Opis w Google",
        "description": "Ok. 150 znaków. Puste = opis ogólny z Ustawień → Google i wyszukiwarki.",
        "rows": 3
      }
    },
    "seoImage": {
      "type": "image",
      "options": {
        "required": false,
        "label": "Obrazek przy udostępnianiu",
        "description": "Np. na Facebooku. Puste = zdjęcie z nagłówka strony."
      }
    }
  }
})
