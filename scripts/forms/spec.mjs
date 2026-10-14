// Jedno źródło prawdy dla wszystkich formularzy panelu. Każdy wpis = jeden
// formularz, zakładki = sekcje strony w kolejności, w jakiej widać je na stronie.
// Po zmianie: npm run forms
import { ICONS, area, checkbox, dzial, editor, file, gallery, image, lines, link, number, repeater, select, text } from './fields.mjs'

const hero = (where) => ({
  heroTag: text('Napis nad tytułem', `Mały złoty napis nad tytułem ${where}.`),
  heroTitle: area('Tytuł', 'Duży tytuł na zdjęciu. Nowa linia = łamanie wiersza.', 2),
  heroImage: image('Zdjęcie w tle', 'Duże zdjęcie na górze podstrony.'),
})
const priceGroups = (label, hint) => repeater(label, hint, 'Dodaj grupę cen', {
  category: text('Nazwa grupy', 'Np. „Sprzęt niesilnikowy”.'),
  note: text('Uwaga pod nazwą', 'Opcjonalnie, np. godziny sesji.'),
  items: repeater('Pozycje', '', 'Dodaj pozycję', { label: text('Nazwa'), price: text('Cena') }),
})

export default [
  // ───────── Ustawienia wspólne ─────────
  {
    name: 'ustawienia', label: 'Logo, rezerwacje i teksty wspólne', url: '/', icon: 'Settings',
    tabs: {
      'Logo i nazwa': {
        logo: image('Logo w menu'),
        footerLogo: image('Logo w stopce', 'W sekcji Kontakt na dole każdej strony.'),
        menuBackground: image('Tło rozwiniętego menu', 'Zdjęcie za listą pozycji po otwarciu menu.'),
        siteName: text('Nazwa obiektu', 'Np. w menu i na okładce karty dań.'),
        tagline: text('Hasło pod logo', 'W rozwiniętym menu, np. „Luksus w sercu Bieszczad”.'),
        regionLine: text('Linia z lokalizacją', 'Na dole stopki, np. „Polańczyk · Jezioro Solińskie · Bieszczady”.'),
      },
      'Rezerwacje online': {
        bookingUrl: link('Link do systemu rezerwacji (hotres)', 'Wszystkie przyciski „Rezerwuj” i „Sprawdź dostępność” prowadzą tutaj.'),
        bookingCta: text('Przycisk w menu', 'Np. „Booking now”.'),
        widgetTitle: text('Widżet: przycisk główny', 'Np. „Sprawdź dostępność”.'),
        widgetCheckIn: text('Widżet: przyjazd (krótko)', 'Np. „Check-in”.'),
        widgetCheckOut: text('Widżet: wyjazd (krótko)', 'Np. „Check-out”.'),
        widgetArrival: text('Widżet: przyjazd (w okienku)', 'Np. „Przyjazd”.'),
        widgetDeparture: text('Widżet: wyjazd (w okienku)', 'Np. „Wyjazd”.'),
        widgetPickDate: text('Widżet: podpowiedź daty', 'Np. „Wybierz datę”.'),
        widgetGuests: text('Widżet: goście', 'Np. „Goście”.'),
        widgetGuestOne: text('Widżet: „1 Gość”', 'Słowo po liczbie 1.'),
        widgetGuestMany: text('Widżet: „2 Gości”', 'Słowo po liczbie większej niż 1.'),
        widgetLess: text('Widżet: przycisk „mniej” (dla czytników)'),
        widgetMore: text('Widżet: przycisk „więcej” (dla czytników)'),
        widgetReserve: text('Widżet: przycisk w pasku', 'Np. „Rezerwuj”.'),
        widgetReserveNow: text('Widżet: przycisk w okienku', 'Np. „Rezerwuj teraz”.'),
      },
      'Telefony w menu': {
        topbarLabel: text('Pasek górny: napis przed numerami', 'Np. „Rezerwacje:”. Numery to działy z zaznaczonym „Pokaż w pasku górnym”.'),
        callTitle: text('Przycisk „Zadzwoń”: tytuł'),
        callSubtitle: text('Przycisk „Zadzwoń”: podtytuł', 'Np. „Wybierz dział”.'),
        pizzaLabel: text('Przycisk zamawiania pizzy', 'Na zdjęciu strony głównej i na stronie Tawerny, np. „🍕 Zamów pizzę”.'),
        pizzaUrl: link('Przycisk pizzy: link do zamówień online'),
      },
      'Stopka': {
        copyright: text('Prawa autorskie', 'Strona wstawi bieżący rok w miejsce {rok}.'),
      },
      'Odznaki i certyfikaty': {
        badges: repeater('Odznaki', 'Logotypy i certyfikaty na stronie Projekty.', 'Dodaj odznakę', {
          image: image('Obrazek'), alt: text('Opis obrazka', 'Dla osób niewidomych i wyszukiwarek.'), href: link('Link (opcjonalnie)'),
        }),
      },
      'Teksty wspólne': {
        breadcrumbHome: text('Okruszki: strona startowa', 'Np. „Start”.'),
        seeMore: text('Link „Zobacz”', 'Np. „Zobacz →”.'),
        details: text('Przycisk „Szczegóły”'),
        close: text('Przycisk zamykania (dla czytników)', 'Np. „Zamknij”.'),
        prevPhoto: text('Poprzednie zdjęcie (dla czytników)'),
        nextPhoto: text('Następne zdjęcie (dla czytników)'),
        photoN: text('Numer zdjęcia (dla czytników)', 'Strona wstawi numer w miejsce {liczba}, np. „Zdjęcie {liczba}”.'),
        maxPersons: text('Etykieta liczby osób na zdjęciu', 'Strona wstawi liczbę w miejsce {liczba}, np. „max {liczba} os.”.'),
        openMenu: text('Otwórz menu (dla czytników)'),
        closeMenu: text('Zamknij menu (dla czytników)'),
      },
    },
  },
  {
    name: 'kontakt', label: 'Kontakt, przelew i nasze obiekty', url: '/#kontakt', icon: 'Mail',
    tabs: {
      'Adres': {
        address: text('Adres'),
        mapQuery: text('Mapa: czego szukać w Google Maps', 'Np. „Przystan Carynska Polanczyk Rowna 19”.'),
        email: text('Główny e-mail', 'W pasku górnym, menu i sekcji Kontakt.'),
      },
      'Sekcja Kontakt': {
        kicker: text('Napis nad tytułem'),
        title: text('Tytuł'),
        reservationsTitle: text('Nagłówek listy działów', 'Np. „Rezerwacje”.'),
        formTitle: text('Formularz: tytuł', 'Np. „Napisz do nas”.'),
        formName: text('Formularz: imię i nazwisko'),
        formEmail: text('Formularz: e-mail'),
        formPhone: text('Formularz: telefon'),
        formMessage: text('Formularz: wiadomość'),
        formSubmit: text('Formularz: przycisk wysyłania'),
        formSending: text('Formularz: napis podczas wysyłania', 'Np. „Wysyłanie…”.'),
        formThanks: text('Po wysłaniu: tytuł', 'Np. „Dziękujemy!”.'),
        formThanksText: text('Po wysłaniu: tekst'),
      },
      'Dane do przelewu': {
        bankTitle: text('Nagłówek'),
        bankLabel: text('Podpis: bank'), bankName: text('Nazwa banku'),
        accountLabel: text('Podpis: numer rachunku'), account: text('Numer rachunku'),
        swiftLabel: text('Podpis: SWIFT'), swift: text('SWIFT / BIC'),
        bankNote: area('Uwaga do przelewu', '', 2),
      },
      'Social media i portale': {
        social: repeater('Media społecznościowe', '', 'Dodaj profil', {
          label: text('Nazwa'), href: link('Adres profilu'), icon: select('Ikona', '', { facebook: 'Facebook', instagram: 'Instagram' }),
        }),
        platforms: repeater('Portale rezerwacyjne', 'Linki w sekcji Kontakt.', 'Dodaj portal', { label: text('Nazwa'), href: link('Adres') }),
      },
      'Nasze obiekty': {
        sisterTitle: text('Nagłówek w stopce', 'Np. „Nasze obiekty”.'),
        sisters: repeater('Obiekty siostrzane', 'Pokazywane w stopce i na stronie Zaplanuj pobyt.', 'Dodaj obiekt', {
          name: text('Nazwa'), location: text('Miejscowość'), href: link('Strona internetowa'),
          phone: text('Telefon'), email: text('E-mail'),
          shortDesc: text('Krótki opis (stopka)'),
          longDesc: area('Dłuższy opis (Zaplanuj pobyt)', '', 3),
          image: image('Zdjęcie (Zaplanuj pobyt)'),
          imageAlt: text('Opis zdjęcia'),
          cta: text('Przycisk (Zaplanuj pobyt)', 'Np. „Zobacz Zajazd”.'),
        }),
      },
    },
  },
  {
    name: 'menu-strony', label: 'Menu strony', url: '/', icon: 'LayoutList',
    tabs: {
      'Pozycje menu': {
        links: repeater('Pozycje menu', 'Kolejność jak w menu na stronie.', 'Dodaj pozycję', {
          label: text('Nazwa'), href: link('Dokąd prowadzi'),
          showDzialy: checkbox('Podmenu: działy z telefonami', 'Zaznacz przy „Kontakt” — podmenu pokaże wszystkie działy z „Działy i telefony” (bez przepisywania numerów).'),
          children: repeater('Podmenu', 'Rozwijana lista pod pozycją (opcjonalnie).', 'Dodaj podpozycję', {
            label: text('Nazwa'), href: link('Dokąd prowadzi'), subtitle: text('Podpis (opcjonalnie)'),
            external: checkbox('Otwórz w nowej karcie'),
          }),
        }),
      },
    },
  },

  // ───────── Strona główna ─────────
  {
    name: 'strona-glowna', label: 'Strona główna', url: '/', icon: 'Home',
    tabs: {
      'Baner ze zdjęciami': {
        heroTitle: area('Tytuł', 'Nowa linia = łamanie wiersza.', 2),
        heroSubtitle: text('Podtytuł'),
        heroImages: gallery('Zdjęcia w banerze', 'Zmieniają się co kilka sekund. Kolejność przeciąganiem.', 'strona-glowna/'),
      },
      'Noclegi': {
        noclegiTag: text('Napis nad tytułem'), noclegiTitle: area('Tytuł', '', 2),
        noclegiBody: area('Tekst', 'Akapity oddziel pustą linią.', 6),
        noclegiImage: image('Zdjęcie'), noclegiImageAlt: text('Opis zdjęcia'),
        noclegiCta: text('Przycisk'), noclegiCtaHref: link('Dokąd prowadzi przycisk'),
      },
      'Atrakcje (kafelki)': {
        atrakcjeTag: text('Napis nad tytułem'), atrakcjeTitle: area('Tytuł', '', 2), atrakcjeBody: area('Tekst', '', 3),
        atrakcjeImage: image('Zdjęcie'), atrakcjeImageAlt: text('Opis zdjęcia'),
        atrakcjeCta: text('Przycisk'), atrakcjeCtaHref: link('Dokąd prowadzi przycisk'),
        tileHint: text('Podpowiedź na kafelku', 'Np. „Kliknij, aby dowiedzieć się więcej”.'),
        tiles: repeater('Kafelki', 'Kliknięcie kafelka otwiera okienko ze szczegółami.', 'Dodaj kafelek', {
          tag: text('Napis nad tytułem'), title: text('Tytuł'),
          icon: image('Ikona'), image: image('Zdjęcie'),
          from: select('Skąd wjeżdża przy przewijaniu', '', { left: 'Z lewej', right: 'Z prawej' }),
          modalTitle: text('Okienko: tytuł'), modalBody: area('Okienko: tekst', 'Akapity oddziel pustą linią.', 8),
          highlights: lines('Okienko: wyróżniki'),
        }),
      },
      'Tawerna': {
        kuchniaTag: text('Napis nad tytułem'), kuchniaTitle: area('Tytuł', '', 2), kuchniaBody: area('Tekst', 'Akapity oddziel pustą linią.', 5),
        kuchniaImage: image('Zdjęcie'), kuchniaImageAlt: text('Opis zdjęcia'),
        kuchniaCta: text('Przycisk'), kuchniaCtaHref: link('Dokąd prowadzi przycisk'),
      },
      'Opinie gości': {
        reviewsTag: text('Napis nad tytułem'), reviewsTitle: text('Tytuł'),
        reviewsAll: text('Link do wszystkich opinii'), googleUrl: link('Adres opinii w Google'),
        reviews: repeater('Opinie', '', 'Dodaj opinię', {
          name: text('Autor'), badge: text('Odznaka autora', 'Np. „Lokalny przewodnik”.'), date: text('Kiedy', 'Np. „3 tygodnie temu”.'),
          stars: number('Gwiazdki (1–5)'), text: area('Treść', '', 4),
        }),
      },
      'Facebook': {
        fbTag: text('Napis nad tytułem'), fbTitle: area('Tytuł', '', 2), fbBody: area('Tekst', '', 3),
        fbTabFacebook: text('Zakładka: Facebook'), fbTabInstagram: text('Zakładka: Instagram'), fbTabReviews: text('Zakładka: Opinie'),
        fbFollow: text('Przycisk obserwowania'),
        fbUrl: link('Adres strony na Facebooku', 'Też źródło okienka z postami.'), igUrl: link('Adres profilu na Instagramie'),
      },
    },
  },

  // ───────── Noclegi ─────────
  {
    name: 'noclegi-pokoje', label: 'Pokoje i apartamenty', url: '/noclegi/pokoje', icon: 'Building',
    tabs: {
      'Nagłówek': { ...hero('strony Pokoje'), heroSubtitle: text('Podtytuł') },
      'Wstęp': { intro: area('Tekst wstępu', 'Akapity oddziel pustą linią.', 8) },
      'Pokoje': {
        rooms: repeater('Pokoje', 'Kolejność jak na stronie.', 'Dodaj pokój', {
          slug: text('Identyfikator w adresie', 'Małe litery i myślniki, np. „pokoj-2-osobowy”. Nie zmieniaj bez potrzeby — linki do pokoju przestaną działać.'),
          tag: text('Rodzaj', 'Np. „Pokój 2-osobowy”.'), title: text('Standard', 'Np. „Standard Plus”.'),
          size: text('Powierzchnia', 'Np. „22 m²”.'), occupancy: number('Maks. liczba osób'),
          desc: area('Opis', '', 3), amenities: lines('Wyposażenie'),
          images: gallery('Zdjęcia', 'Pierwsze zdjęcie to okładka.', 'pokoje/'),
        }),
      },
      'Napisy': {
        crumbParent: text('Okruszki: nazwa działu', 'Mały link nad treścią, np. „Noclegi”.'), crumbCurrent: text('Okruszki: ta strona'),
        labelSize: text('Podpis: powierzchnia'), labelMax: text('Podpis: maks. osób'), labelAmenities: text('Podpis: wyposażenie'),
        occupancyValue: text('Liczba osób w szczegółach', 'Strona wstawi liczbę w miejsce {liczba}, np. „{liczba} osoby”.'),
        amenitiesCount: text('Liczba udogodnień na karcie', 'Strona wstawi liczbę w miejsce {liczba}.'),
        questions: text('Pytanie nad przyciskiem', 'Np. „Masz pytania o pokoje lub dostępność?”.'),
        cta: text('Przycisk rezerwacji'), ctaHref: link('Dokąd prowadzi przycisk rezerwacji'), dzial: dzial(),
      },
    },
  },
  {
    name: 'noclegi-cennik', label: 'Cennik noclegów', url: '/noclegi/cennik', icon: 'Receipt',
    tabs: {
      'Nagłówek': { ...hero('strony Cennik') },
      'Ceny pokoi': {
        kicker: text('Napis nad tabelą'), tableTitle: text('Tytuł tabeli', 'Np. „Cennik pokoi 2026”.'),
        colType: text('Kolumna: rodzaj pokoju'), col1: text('Kolumna: 1 osoba'), col2: text('Kolumna: 2 osoby'),
        col3: text('Kolumna: 3 osoby'), col4: text('Kolumna: 4 osoby'), colApt: text('Kolumna: apartament'),
        rows: repeater('Wiersze tabeli', 'Puste pole lub „—” = brak ceny.', 'Dodaj wiersz', {
          type: text('Rodzaj pokoju'), p1: text('1 osoba'), p2: text('2 osoby'), p3: text('3 osoby'), p4: text('4 osoby'), apt: text('Apartament'),
        }),
        note: area('Uwagi pod tabelą', '', 2),
      },
      'Usługi dodatkowe': {
        extrasTitle: text('Nagłówek'),
        extras: repeater('Usługi', '', 'Dodaj usługę', { label: text('Nazwa'), price: text('Cena') }),
      },
      'Kontakt': { contactTitle: text('Nagłówek'), cta: text('Przycisk rezerwacji'), ctaHref: link('Dokąd prowadzi przycisk rezerwacji'), dzial: dzial() },
      'Okruszki': { crumbParent: text('Okruszki: nazwa działu', 'Mały link nad treścią, np. „Noclegi”.'), crumbCurrent: text('Okruszki: ta strona'), },
    },
  },
  {
    name: 'noclegi-jacht', label: 'Hotel na wodzie', url: '/noclegi/jacht', icon: 'Anchor',
    tabs: {
      'Nagłówek': { ...hero('strony Hotel na wodzie') },
      'Wstęp': { kicker: text('Napis nad wstępem', 'Np. „Unikalne doświadczenie”.'), intro: area('Tekst wstępu', '', 4) },
      'Jachty': {
        yachts: repeater('Jachty', '', 'Dodaj jacht', {
          name: text('Nazwa'), tag: text('Napis nad nazwą'), units: number('Liczba jednostek'),
          capacity: number('Liczba osób'), cabins: number('Liczba kabin'), price: text('Cena od', 'Np. „od 380 zł / noc”.'),
          desc: area('Opis', '', 4), gallery: gallery('Zdjęcia', 'Pierwsze zdjęcie to okładka.', 'jachty/'),
          features: lines('Wyposażenie'),
          specs: repeater('Dane techniczne', '', 'Dodaj parametr', { label: text('Parametr'), value: text('Wartość') }),
          pricing: repeater('Cennik sezonowy', '', 'Dodaj okres', { label: text('Okres'), value: text('Cena') }),
        }),
      },
      'Co zawiera nocleg': { includesTitle: text('Nagłówek'), includes: lines('Co zawiera nocleg'), note: area('Uwaga', '', 2) },
      'Napisy': {
        seeDetails: text('Przycisk „Zobacz szczegóły”'), detailsLink: text('Link „Szczegóły →”'),
        onBoard: text('Nagłówek: na pokładzie'), seasonPricing: text('Nagłówek: cennik sezonowy'),
        callCta: text('Przycisk „Zadzwoń i zarezerwuj”'), dzial: dzial(),
        crumbParent: text('Okruszki: nazwa działu', 'Mały link nad treścią, np. „Noclegi”.'), crumbCurrent: text('Okruszki: ta strona'),
      },
    },
  },

  // ───────── Atrakcje ─────────
  {
    name: 'atrakcje', label: 'Atrakcje', url: '/atrakcje', icon: 'Sun',
    tabs: {
      'Nagłówek': { ...hero('strony Atrakcje') },
      'Wstęp': { intro: area('Tekst wstępu', 'Akapity oddziel pustą linią.', 8) },
      'Wypożyczalnia': {
        waterTag: text('Napis nad tytułem'), waterTitle: text('Tytuł'), waterBody: area('Tekst', '', 4),
        waterItems: repeater('Rodzaje sprzętu', '', 'Dodaj rodzaj', { icon: select('Ikona', '', ICONS), label: text('Nazwa'), desc: area('Opis', '', 2) }),
        waterImages: gallery('Zdjęcia obok opisu', '', 'atrakcje/'),
        waterPricingTitle: text('Nagłówek cennika'),
        waterPricing: priceGroups('Cennik wypożyczalni', ''),
      },
      'Flota': {
        fleetTitle: text('Nagłówek'), noPatentLabel: text('Etykieta „bez patentu”'), unitsLabel: text('Podpis: jednostki'), specLink: text('Link do specyfikacji'),
        unitsCount: text('Liczba jednostek na liście', 'Strona wstawi liczbę w miejsce {liczba}, np. „{liczba} jednostki”.'),
        fleet: repeater('Jednostki', '', 'Dodaj jednostkę', {
          type: text('Rodzaj', 'Np. „Jacht żaglowy”.'), name: text('Nazwa'), units: lines('Nazwy jednostek'),
          capacity: number('Liczba osób'), price: text('Cena'), patent: checkbox('Wymaga patentu'),
          desc: area('Opis', '', 3), specs: lines('Dane techniczne'), href: link('Specyfikacja producenta (link)'),
        }),
      },
      'Bosmanat': {
        marinaTag: text('Napis nad tytułem'), marinaTitle: text('Tytuł'), marinaBody: area('Tekst', '', 4),
        marinaAmenities: lines('Udogodnienia'), marinaPricingTitle: text('Nagłówek cennika'),
        marinaPricing: priceGroups('Cennik usług', ''),
        marinaImages: gallery('Zdjęcia', '', 'atrakcje/'), marinaDzial: dzial(),
      },
      'Aktywny dzień': {
        landTag: text('Napis nad tytułem'), landTitle: text('Tytuł'), landBody: area('Tekst', '', 3),
        landItems: repeater('Atrakcje', '', 'Dodaj atrakcję', { icon: select('Ikona', '', ICONS), label: text('Nazwa'), desc: area('Opis', '', 2) }),
        landImages: gallery('Zdjęcia obok opisu', '', 'atrakcje/'),
      },
      'Dla grup': {
        groupsTag: text('Napis nad tytułem'), groupsTitle: text('Tytuł'), groupsBody: area('Tekst', '', 3),
        groupsCta: text('Przycisk'), groupsDzial: dzial(),
      },
    },
  },
  {
    name: 'zaplanuj-pobyt', label: 'Zaplanuj pobyt', url: '/zaplanuj-pobyt', icon: 'Map',
    tabs: {
      'Nagłówek': { ...hero('strony Zaplanuj pobyt') },
      'O ośrodku': { aboutTitle: text('Tytuł'), aboutBody: editor('Tekst', 'Zaznacz słowo i wstaw link, aby prowadziło do podstrony.') },
      'Obiekty przystani': {
        tilesTitle: text('Nagłówek'), tileCta: text('Link na kafelku', 'Np. „Zobacz →”.'),
        tiles: repeater('Kafelki', '', 'Dodaj kafelek', {
          title: text('Tytuł'), tag: text('Napis nad tytułem (opcjonalnie)'), desc: area('Opis', '', 2),
          image: image('Zdjęcie'), href: link('Dokąd prowadzi'),
        }),
      },
      'Nasze obiekty w Bieszczadach': {
        sistersTitle: text('Nagłówek', 'Obiekty i ich opisy edytujesz w „Kontakt, przelew i nasze obiekty”.'),
      },
      'W okolicy': { nearbyText: text('Tekst'), nearbyCta: text('Przycisk'), nearbyHref: link('Dokąd prowadzi przycisk') },
    },
  },

  // ───────── Tawerna ─────────
  {
    name: 'tawerna', label: 'Tawerna', url: '/tawerna', icon: 'ChefHat',
    tabs: {
      'Nagłówek': { ...hero('strony Tawerna') },
      'Wstęp': { intro: area('Tekst wstępu', '', 4) },
      'Menu': {
        menu: repeater('Kategorie menu', 'Kategorie w kolejności jak w karcie dań.', 'Dodaj kategorię', {
          category: text('Nazwa kategorii'), menuImage: image('Grafika kategorii (opcjonalnie)'),
          items: repeater('Dania', '', 'Dodaj danie', { name: text('Nazwa'), note: text('Dopisek (opcjonalnie)'), price: text('Cena (opcjonalnie)') }),
        }),
      },
      'Karta dań (książka)': {
        bookKicker: text('Okładka: napis nad tytułem'), bookTitle: area('Okładka: tytuł', '', 2),
        bookName: text('Okładka: nazwa'), bookSection: text('Napis w nagłówku stron'), bookEnd: text('Ostatnia strona', 'Np. „Smacznego!”.'),
        bookPrev: text('Poprzednia strona (dla czytników)'), bookNext: text('Następna strona (dla czytników)'),
      },
      'Dostawa': { deliveryTitle: text('Tytuł'), deliveryBody: area('Tekst', '', 2), dzial: dzial() },
    },
  },

  // ───────── Galeria ─────────
  {
    name: 'galeria', label: 'Galeria', url: '/galeria', icon: 'Photo',
    tabs: {
      'Nagłówek': { ...hero('strony Galeria') },
      'Zdjęcia': {
        photosKicker: text('Napis nad zdjęciami', 'Np. „Zdjęcia”.'), allLabel: text('Filtr „wszystkie”'), emptyText: text('Gdy brak zdjęć'),
        categories: repeater('Kategorie zdjęć', 'Każda kategoria to przycisk filtra nad zdjęciami.', 'Dodaj kategorię', {
          label: text('Nazwa kategorii'),
          photos: gallery('Zdjęcia', 'Opis zdjęcia = podpis widoczny na zdjęciu.', 'galeria/'),
        }),
      },
    },
  },

  // ───────── Grupy ─────────
  {
    name: 'grupy', label: 'Grupy i eventy', url: '/grupy', icon: 'Users',
    tabs: {
      'Nagłówek': {
        ...hero('strony Grupy'),
        stats: repeater('Liczby pod tytułem', '', 'Dodaj liczbę', { value: text('Liczba'), label: text('Podpis') }),
      },
      'Oferta': {
        offerKicker: text('Napis nad sekcjami', 'Np. „Organizujemy”.'),
        sections: repeater('Sekcje oferty', '', 'Dodaj sekcję', { title: text('Tytuł'), body: area('Tekst', '', 5), note: text('Wyróżniona uwaga (opcjonalnie)') }),
      },
      'Cennik grupowy': {
        pricingTag: text('Napis nad cennikiem', 'Np. „Cennik 2026”.'), minPersons: number('Minimalna liczba osób'), minPersonsLabel: text('Podpis min. liczby osób', 'Strona wstawi liczbę w miejsce {liczba}.'),
        bonuses: repeater('Gratisy', '', 'Dodaj gratis', { threshold: text('Od ilu osób'), reward: text('Gratis') }),
        colRate: text('Kolumna: stawka'), cols: lines('Kolumny cennika'),
        rows: repeater('Wiersze cennika', 'Ceny w kolejności kolumn, jedna w linii.', 'Dodaj wiersz', { type: text('Nazwa'), values: lines('Ceny') }),
        hbCode: text('Skrót HB', 'Duże litery na karcie, np. „HB”.'), hbLabel: text('Podpis HB', 'Np. „half board”.'), includesHb: lines('W cenie HB'),
        fbCode: text('Skrót FB', 'Np. „FB”.'), fbLabel: text('Podpis FB', 'Np. „full board”.'), includesFb: lines('W cenie FB'),
        footnote: text('Przypis o posiłkach'),
        notesTitle: text('Nagłówek uwag'), notes: lines('Ważne informacje'),
        legal: area('Zastrzeżenie prawne', '', 3),
      },
      'Opcje dodatkowe': {
        extrasTitle: text('Nagłówek'), itemsOne: text('Licznik: 1 pozycja', 'Słowo po liczbie 1.'), itemsMany: text('Licznik: więcej pozycji', 'Słowo po liczbie większej niż 1.'),
        extras: repeater('Grupy opcji', '', 'Dodaj grupę', {
          category: text('Nazwa grupy'), note: text('Uwaga (opcjonalnie)'),
          icon: select('Ikona', '', { utensils: 'Sztućce', bus: 'Autokar', flame: 'Ognisko', music: 'Muzyka', star: 'Gwiazdka' }),
          items: repeater('Opcje', '', 'Dodaj opcję', { name: text('Nazwa'), desc: area('Opis', '', 2), price: text('Cena'), note: text('Dopisek (opcjonalnie)') }),
        }),
      },
      'Baza noclegowa': {
        capacityTitle: text('Nagłówek'),
        capacityRooms: repeater('Pokoje', '', 'Dodaj rodzaj', { count: number('Liczba'), label: text('Rodzaj') }),
        totalRooms: number('Pokoi razem'), totalRoomsLabel: text('Podpis: pokoi razem'),
        beds: number('Miejsc noclegowych'), bedsLabel: text('Podpis: łóżek'),
        maxOccupancy: number('Maks. osób z dostawkami'), maxOccupancyLabel: text('Podpis: maks. gości'),
        halls: repeater('Sale', '', 'Dodaj salę', { name: text('Nazwa'), seats: text('Pojemność') }),
      },
      'Zapytanie': { inquiryTitle: text('Tytuł'), inquiryCta: text('Przycisk'), dzial: dzial() },
    },
  },

  // ───────── Projekty ─────────
  {
    name: 'projekty', label: 'Projekty i fundusze', url: '/projekty', icon: 'Certificate',
    tabs: {
      'Nagłówek': { ...hero('strony Projekty') },
      'Projekt': {
        programName: text('Nazwa programu'), projectTitle: area('Tytuł projektu', '', 2), contract: area('Umowa', '', 4),
        projectBody: area('Opis', 'Akapity oddziel pustą linią.', 8), readMore: text('Przycisk „Czytaj więcej”'),
        finance: repeater('Finansowanie', '', 'Dodaj pozycję', { label: text('Nazwa'), value: text('Kwota') }),
      },
      'Fundusze EOG': {
        fundsKicker: text('Napis nad tytułem'), fundsTitle: text('Tytuł'), fundsBody: area('Tekst', 'Akapity oddziel pustą linią.', 8),
        fundsLinks: repeater('Linki', '', 'Dodaj link', { label: text('Napis'), href: link('Adres') }),
      },
      'Harmonogram': {
        timelineKicker: text('Napis nad tytułem'), timelineTitle: text('Tytuł'), timelineSubtitle: text('Podtytuł'),
        milestones: repeater('Etapy', 'Od najstarszego.', 'Dodaj etap', { date: text('Data'), title: text('Tytuł'), body: area('Opis', '', 3) }),
      },
    },
  },

  // ───────── Dokumenty ─────────
  ...[
    ['regulamin', 'Regulamin', '/regulamin'],
    ['regulamin-wypozyczalni', 'Regulamin wypożyczalni', '/regulamin-wypozyczalni'],
    ['wzor-umowy-jachtu', 'Wzór umowy jachtu', '/wzor-umowy-jachtu'],
  ].map(([name, label, url]) => ({
    name, label, url, icon: 'FileText',
    tabs: {
      'Treść': {
        title: text('Tytuł'), kicker: text('Napis nad tytułem'), heroImage: image('Zdjęcie w nagłówku'), lead: area('Wstęp pod tytułem', '', 3),
        body: editor('Treść dokumentu', 'Śródtytuły ustaw jako „Nagłówek 2”.'),
      },
      'Plik i przyciski': {
        pdf: file('Plik PDF do pobrania'), pdfLabel: text('Przycisk pobierania'),
        cta: text('Dodatkowy przycisk (opcjonalnie)'), ctaHref: link('Dokąd prowadzi dodatkowy przycisk'),
      },
    },
  })),
]
