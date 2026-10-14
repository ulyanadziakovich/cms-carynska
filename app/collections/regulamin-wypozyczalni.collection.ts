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
          "title",
          "kicker",
          "heroImage",
          "lead",
          "body"
        ],
        "Plik i przyciski": [
          "pdf",
          "pdfLabel",
          "cta",
          "ctaHref"
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
    }
  }
})
