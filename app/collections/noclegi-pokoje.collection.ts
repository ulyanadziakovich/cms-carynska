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
          "intro",
          "introFeatures"
        ],
        "Kafelki": [
          "rooms"
        ],
        "Napisy": [
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
            "filterAll"
          ],
          [
            "questions",
            "cta"
          ],
          [
            "ctaHref",
            "dzial"
          ]
        ],
        "Google i udostępnianie": [
          "seoTitle",
          "seoDescription",
          "seoImage"
        ],
        "Drobne napisy (rzadko zmieniane)": [
          [
            "crumbParent",
            "crumbCurrent"
          ],
          "filterLabel"
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
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Zdanie pod tytułem",
        "description": "Krótko, 1 zdanie. Obok tytułu, nad przyciskiem rezerwacji.",
        "rows": 2
      }
    },
    "intro": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tekst wstępu",
        "description": "Najlepiej 1–2 zdania. Akapity oddziel pustą linią.",
        "rows": 4
      }
    },
    "introFeatures": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Na miejscu (lista z ikonkami)",
        "description": "Pod tekstem wstępu.",
        "addLabel": "Dodaj pozycję",
        "subfields": {
          "icon": {
            "type": "select",
            "options": {
              "required": false,
              "label": "Ikonka",
              "choices": {
                "balkon": "Balkon / taras",
                "lazienka": "Łazienka / prysznic",
                "wifi": "WiFi",
                "parking": "Parking",
                "widok": "Widok na jezioro",
                "sniadanie": "Śniadanie / kawa",
                "klimatyzacja": "Klimatyzacja",
                "zwierzeta": "Zwierzęta",
                "obiad": "Obiad / talerz ze sztućcami",
                "pizza": "Pizza",
                "impreza": "Impreza / kieliszki",
                "ryba": "Ryba",
                "ognisko": "Ognisko / grill",
                "gry": "Gry / rozrywka",
                "sala": "Sala / konferencja"
              },
              "clearable": true
            }
          },
          "label": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Napis"
            }
          }
        },
        "fieldLayout": [
          [
            "icon",
            "label"
          ]
        ]
      }
    },
    "rooms": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Kafelki: pokoje, apartamenty, domki",
        "description": "Każdy kafelek to jedna karta na stronie (zdjęcie + opis, po kliknięciu szczegóły). Kolejność jak na stronie — przeciągnij za numer po lewej. Nowy kafelek, np. domek: „Dodaj kafelek” na dole listy.",
        "addLabel": "Dodaj kafelek",
        "subfields": {
          "slug": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Identyfikator w adresie",
              "description": "Małe litery i myślniki, np. „pokoj-2-osobowy” albo „domek-1”. Nie zmieniaj bez potrzeby — linki do kafelka przestaną działać."
            }
          },
          "category": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Kategoria (filtr)",
              "description": "Np. „Pokoje”, „Studia”, „Apartamenty”, „Domki”. Kafelki z tą samą kategorią trafiają pod jeden przycisk nad listą — wpisuj identycznie."
            }
          },
          "tag": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Rodzaj",
              "description": "Np. „Pokój 2-osobowy”, „Apartament”, „Domek”."
            }
          },
          "title": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa / standard",
              "description": "Np. „Standard Plus” albo „Domek pod lasem”."
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
          },
          "link": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Link zamiast okna ze szczegółami",
              "description": "Opcjonalnie. Np. „/noclegi/jacht” — kliknięcie kafelka prowadzi wtedy na tę podstronę (jachty mają tam ceny i dane techniczne). Puste = okno ze szczegółami.",
              "placeholder": "np. /atrakcje albo https://…"
            }
          }
        },
        "fieldLayout": [
          [
            "slug",
            "category",
            "tag",
            "title"
          ],
          [
            "size",
            "occupancy"
          ],
          "desc",
          "amenities",
          "images",
          "link"
        ]
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
    "filterAll": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Filtr: przycisk „wszystkie”",
        "description": "Pierwszy przycisk nad kafelkami, np. „Wszystkie”. Pozostałe przyciski to kategorie wpisane w kafelkach."
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
    "filterLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Filtr: opis dla czytników",
        "description": "Np. „Pokaż rodzaj noclegu”."
      }
    }
  }
})
