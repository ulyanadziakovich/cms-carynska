// WYGENEROWANE z scripts/forms/spec.mjs — nie edytuj ręcznie (npm run forms).
import { defineCollection } from '#pruvious'

export default defineCollection({
  "name": "atrakcje",
  "mode": "single",
  "label": {
    "collection": {
      "plural": "Atrakcje",
      "singular": "Atrakcje"
    }
  },
  "apiRoutes": {
    "read": "public"
  },
  "dashboard": {
    "icon": "Sun",
    "additionalRecordOptionsVueComponent": "./app/dashboard/ViewOnSite.vue",
    "fieldLayout": [
      {
        "Nagłówek": [
          "heroTag",
          "heroTitle",
          "heroImage"
        ],
        "Wstęp": [
          "intro"
        ],
        "Wypożyczalnia": [
          [
            "waterTag",
            "waterTitle"
          ],
          "waterBody",
          "waterItems",
          "waterImages",
          "waterPricingTitle",
          "waterPricing"
        ],
        "Flota": [
          [
            "fleetTitle",
            "noPatentLabel"
          ],
          [
            "unitsLabel",
            "specLink"
          ],
          "unitsCount",
          "fleet"
        ],
        "Bosmanat": [
          [
            "marinaTag",
            "marinaTitle"
          ],
          "marinaBody",
          "marinaAmenities",
          "marinaPricingTitle",
          "marinaPricing",
          "marinaImages",
          "marinaDzial"
        ],
        "Aktywny dzień": [
          [
            "landTag",
            "landTitle"
          ],
          "landBody",
          "landItems",
          "landImages"
        ],
        "Dla grup": [
          [
            "groupsTag",
            "groupsTitle"
          ],
          "groupsDzial"
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
        "description": "Mały złoty napis nad tytułem strony Atrakcje."
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
    "intro": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tekst wstępu",
        "description": "Akapity oddziel pustą linią.",
        "rows": 8
      }
    },
    "waterTag": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad tytułem"
      }
    },
    "waterTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł"
      }
    },
    "waterBody": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tekst",
        "rows": 4
      }
    },
    "waterItems": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Rodzaje sprzętu",
        "addLabel": "Dodaj rodzaj",
        "subfields": {
          "icon": {
            "type": "select",
            "options": {
              "required": false,
              "label": "Ikona",
              "choices": {
                "zaglowka": "Żaglówka",
                "elektryczna": "Łódź elektryczna",
                "kajak": "Kajak",
                "jacht": "Jacht",
                "trekking": "Góry / sport",
                "plaza": "Plaża / basen",
                "koncert": "Koncert / atrakcje",
                "grupy": "Grupa ludzi",
                "impreza": "Impreza / kieliszki",
                "zapora": "Zapora / tama"
              },
              "clearable": true
            }
          },
          "label": {
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
          }
        },
        "fieldLayout": [
          [
            "icon",
            "label"
          ],
          "desc"
        ]
      }
    },
    "waterImages": {
      "type": "gallery",
      "options": {
        "required": false,
        "label": "Zdjęcia obok opisu",
        "directory": "atrakcje/"
      }
    },
    "waterPricingTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek cennika"
      }
    },
    "waterPricing": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Cennik wypożyczalni",
        "addLabel": "Dodaj grupę cen",
        "subfields": {
          "category": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa grupy",
              "description": "Np. „Sprzęt niesilnikowy”."
            }
          },
          "note": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Uwaga pod nazwą",
              "description": "Opcjonalnie, np. godziny sesji."
            }
          },
          "items": {
            "type": "repeater",
            "options": {
              "required": false,
              "label": "Pozycje",
              "addLabel": "Dodaj pozycję",
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
              },
              "fieldLayout": [
                [
                  "label",
                  "price"
                ]
              ]
            }
          }
        },
        "fieldLayout": [
          [
            "category",
            "note"
          ],
          "items"
        ]
      }
    },
    "fleetTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek"
      }
    },
    "noPatentLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Etykieta „bez patentu”"
      }
    },
    "unitsLabel": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Podpis: jednostki"
      }
    },
    "specLink": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Link do specyfikacji"
      }
    },
    "unitsCount": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Liczba jednostek na liście",
        "description": "Strona wstawi liczbę w miejsce {liczba}, np. „{liczba} jednostki”."
      }
    },
    "fleet": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Jednostki",
        "addLabel": "Dodaj jednostkę",
        "subfields": {
          "type": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Rodzaj",
              "description": "Np. „Jacht żaglowy”."
            }
          },
          "name": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa"
            }
          },
          "units": {
            "type": "text-area",
            "options": {
              "required": false,
              "label": "Nazwy jednostek",
              "description": "Jedna pozycja w linii.",
              "rows": 5
            }
          },
          "capacity": {
            "type": "number",
            "options": {
              "required": false,
              "label": "Liczba osób"
            }
          },
          "price": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Cena"
            }
          },
          "patent": {
            "type": "checkbox",
            "options": {
              "required": false,
              "label": "Wymaga patentu"
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
          "specs": {
            "type": "text-area",
            "options": {
              "required": false,
              "label": "Dane techniczne",
              "description": "Jedna pozycja w linii.",
              "rows": 5
            }
          },
          "href": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Specyfikacja producenta (link)",
              "placeholder": "np. /atrakcje albo https://…"
            }
          }
        },
        "fieldLayout": [
          [
            "type",
            "name"
          ],
          "units",
          [
            "capacity",
            "price",
            "patent"
          ],
          "desc",
          "specs",
          "href"
        ]
      }
    },
    "marinaTag": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad tytułem"
      }
    },
    "marinaTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł"
      }
    },
    "marinaBody": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tekst",
        "rows": 4
      }
    },
    "marinaAmenities": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Udogodnienia",
        "description": "Jedna pozycja w linii.",
        "rows": 5
      }
    },
    "marinaPricingTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Nagłówek cennika"
      }
    },
    "marinaPricing": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Cennik usług",
        "addLabel": "Dodaj grupę cen",
        "subfields": {
          "category": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Nazwa grupy",
              "description": "Np. „Sprzęt niesilnikowy”."
            }
          },
          "note": {
            "type": "text",
            "options": {
              "required": false,
              "label": "Uwaga pod nazwą",
              "description": "Opcjonalnie, np. godziny sesji."
            }
          },
          "items": {
            "type": "repeater",
            "options": {
              "required": false,
              "label": "Pozycje",
              "addLabel": "Dodaj pozycję",
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
              },
              "fieldLayout": [
                [
                  "label",
                  "price"
                ]
              ]
            }
          }
        },
        "fieldLayout": [
          [
            "category",
            "note"
          ],
          "items"
        ]
      }
    },
    "marinaImages": {
      "type": "gallery",
      "options": {
        "required": false,
        "label": "Zdjęcia",
        "directory": "atrakcje/"
      }
    },
    "marinaDzial": {
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
    "landTag": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad tytułem"
      }
    },
    "landTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł"
      }
    },
    "landBody": {
      "type": "text-area",
      "options": {
        "required": false,
        "label": "Tekst",
        "rows": 3
      }
    },
    "landItems": {
      "type": "repeater",
      "options": {
        "required": false,
        "label": "Atrakcje",
        "addLabel": "Dodaj atrakcję",
        "subfields": {
          "icon": {
            "type": "select",
            "options": {
              "required": false,
              "label": "Ikona",
              "choices": {
                "zaglowka": "Żaglówka",
                "elektryczna": "Łódź elektryczna",
                "kajak": "Kajak",
                "jacht": "Jacht",
                "trekking": "Góry / sport",
                "plaza": "Plaża / basen",
                "koncert": "Koncert / atrakcje",
                "grupy": "Grupa ludzi",
                "impreza": "Impreza / kieliszki",
                "zapora": "Zapora / tama"
              },
              "clearable": true
            }
          },
          "label": {
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
          }
        },
        "fieldLayout": [
          [
            "icon",
            "label"
          ],
          "desc"
        ]
      }
    },
    "landImages": {
      "type": "gallery",
      "options": {
        "required": false,
        "label": "Zdjęcia obok opisu",
        "directory": "atrakcje/"
      }
    },
    "groupsTag": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Napis nad tytułem"
      }
    },
    "groupsTitle": {
      "type": "text",
      "options": {
        "required": false,
        "label": "Tytuł"
      }
    },
    "groupsDzial": {
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
