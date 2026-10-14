// data.json → rekordy formularzy. ctx dostarcza id wgranych plików i działów.
const paras = (a) => (Array.isArray(a) ? a.join('\n\n') : a ?? '')
const ls = (a) => (a ?? []).join('\n')

export const DZIALY = (d) => {
  const call = { Noclegi: ['Rezerwacje', 'bed', 1], Tawerna: ['Restauracja', 'utensils', 2], Bosmanat: ['Przystań', 'anchor', 3] }
  return d.content.kontakt.departments.map((x, i) => ({
    name: x.name, tag: x.tag, desc: x.desc, phone: x.phone, email: x.email ?? '',
    showInCallMenu: !!call[x.name], callTag: call[x.name]?.[0] ?? '', icon: call[x.name]?.[1] ?? 'briefcase', order: call[x.name]?.[2] ?? 10 + i,
  }))
}

const priceGroups = (groups) => groups.map((g) => ({ category: g.category, note: g.note ?? '', items: g.items.map((i) => ({ label: i.label, price: i.price })) }))

export function buildForms(d, templates, ctx) {
  const c = d.content
  // Teksty z szablonów; ścieżki zdjęć w nagłówkach zamieniane na wgrane pliki.
  const t = Object.fromEntries(Object.entries(templates).map(([k, v]) =>
    [k, v && !Array.isArray(v) && typeof v.heroImage === 'string' ? { ...v, heroImage: ctx.img(v.heroImage) } : v]))
  const hero = (h) => ({ heroTag: h.tag ?? '', heroTitle: h.title ?? '', heroImage: h.image ? ctx.img(h.image) : null })
  return {
    ustawienia: { ...t.ustawienia, logo: ctx.img('/images/logonew.png'), footerLogo: ctx.img(c.kontakt.logo.src), menuBackground: ctx.img('/images/solina2.avif'),
      badges: t.badges.map((b) => ({ image: ctx.img(b.src), alt: b.alt, href: b.href ?? '' })) },
    kontakt: {
      ...t.kontakt, address: c.kontakt.address, mapQuery: c.kontakt.mapQuery.replace(/\+/g, ' '), email: c.kontakt.email,
      bankName: c.kontakt.bank.name, account: c.kontakt.bank.account, swift: c.kontakt.bank.swift, bankNote: c.kontakt.bank.note,
      social: c.kontakt.social, platforms: c.kontakt.platforms,
      sisters: c.kontakt.siostrzaneObiekty.map(({ desc, ...s }, i) => ({ ...s, shortDesc: desc, ...t.sisters[i], image: ctx.img(t.sisters[i].image) })),
    },
    'menu-strony': { links: t.menu },
    'strona-glowna': {
      ...t['strona-glowna'],
      heroTitle: c.hero.title, heroSubtitle: c.hero.subtitle, heroImages: ctx.gallery(c.hero.images.map((src) => ({ src, alt: '' }))),
      noclegiTag: c.noclegi.tag, noclegiTitle: c.noclegi.title, noclegiBody: paras(c.noclegi.body),
      noclegiImage: ctx.img(c.noclegi.rooms[0].image), noclegiImageAlt: c.noclegi.rooms[0].type,
      noclegiCta: c.noclegi.cta.label, noclegiCtaHref: c.noclegi.cta.href,
      atrakcjeTag: c.atrakcje.tag, atrakcjeTitle: c.atrakcje.title, atrakcjeBody: c.atrakcje.body,
      atrakcjeImage: ctx.img(c.atrakcje.image.src), atrakcjeImageAlt: c.atrakcje.image.alt,
      atrakcjeCta: c.atrakcje.cta.label, atrakcjeCtaHref: c.atrakcje.cta.href,
      tiles: c.atrakcje.tiles.map((x) => ({ tag: x.tag, title: x.title, icon: ctx.img(x.icon), image: ctx.img(x.image), from: x.from,
        modalTitle: x.modalTitle, modalBody: paras(x.modalBody), highlights: ls(x.highlights) })),
      kuchniaTag: c.kuchnia.tag, kuchniaTitle: c.kuchnia.title, kuchniaBody: paras(c.kuchnia.body),
      kuchniaImage: ctx.img(c.kuchnia.image.src), kuchniaImageAlt: c.kuchnia.image.alt, kuchniaCta: c.kuchnia.cta.label, kuchniaCtaHref: c.kuchnia.cta.href,
      googleUrl: c.reviews.googleUrl, reviews: c.reviews.items.map((r) => ({ ...r, badge: r.badge ?? '' })),
    },
    'noclegi-pokoje': {
      ...t['noclegi-pokoje'], ...hero(d.noclegi.hero), heroSubtitle: d.noclegi.hero.subtitle, intro: paras(d.noclegi.intro),
      rooms: d.noclegi.rooms.map((r) => ({ slug: r.slug, tag: r.tag, title: r.title, size: r.size, occupancy: r.occupancy, desc: r.desc,
        amenities: ls(r.amenities), images: ctx.gallery(r.images.map((src) => ({ src, alt: `${r.tag} ${r.title}` }))) })),
      dzial: ctx.dzial('Noclegi'),
    },
    'noclegi-cennik': { ...t['noclegi-cennik'], rows: d.noclegi.pricing.rows, note: d.noclegi.pricing.note, extras: d.noclegi.pricing.extras, dzial: ctx.dzial('Noclegi') },
    'noclegi-jacht': {
      ...t['noclegi-jacht'], ...hero(d.jacht.hero), intro: d.jacht.intro, includes: ls(d.jacht.includes), note: d.jacht.note,
      yachts: d.jacht.yachts.map((y) => ({
        name: y.name, tag: y.tag, units: y.units, capacity: y.capacity, cabins: y.cabins, price: y.price ?? '', desc: y.desc,
        gallery: ctx.gallery((y.gallery ?? [y.image]).map((src) => ({ src, alt: y.name }))),
        features: ls(y.features.filter((f) => typeof f === 'string')),
        specs: [...(y.specs ?? []), ...y.features.filter((f) => typeof f === 'object')],
        pricing: y.pricing ?? [],
      })),
      dzial: ctx.dzial('Noclegi'),
    },
    atrakcje: {
      ...t.atrakcje, ...hero(d.atrakcje.hero), intro: paras(d.atrakcje.intro),
      waterTag: d.atrakcje.water.tag, waterTitle: d.atrakcje.water.title, waterBody: d.atrakcje.water.body,
      waterItems: d.atrakcje.water.items, waterPricing: priceGroups(d.atrakcje.water.pricing),
      fleet: d.atrakcje.water.fleet.map(({ id, ...f }) => ({ ...f, units: ls(f.units), specs: ls(f.specs), href: f.href ?? '' })),
      marinaTag: d.atrakcje.marina.tag, marinaTitle: d.atrakcje.marina.title, marinaBody: d.atrakcje.marina.body,
      marinaAmenities: ls(d.atrakcje.marina.amenities), marinaPricing: priceGroups(d.atrakcje.marina.pricing),
      marinaImages: ctx.gallery(d.atrakcje.marina.images), marinaDzial: ctx.dzial('Bosmanat'),
      landTag: d.atrakcje.land.tag, landTitle: d.atrakcje.land.title, landBody: d.atrakcje.land.body, landItems: d.atrakcje.land.items,
      groupsTag: d.atrakcje.groups.tag, groupsTitle: d.atrakcje.groups.title, groupsBody: d.atrakcje.groups.body,
      groupsCta: d.atrakcje.groups.cta.label, groupsDzial: ctx.dzial('Bosmanat'),
    },
    'zaplanuj-pobyt': { ...t['zaplanuj-pobyt'], tiles: t['zaplanuj-pobyt'].tiles.map((x) => ({ ...x, image: ctx.img(x.image) })) },
    tawerna: {
      ...t.tawerna, ...hero(d.tawerna.hero), intro: d.tawerna.intro,
      menu: d.tawerna.menu.map((m) => ({ category: m.category, menuImage: m.menuImage ? ctx.img(m.menuImage) : null,
        items: m.items.map((i) => ({ name: i.name, note: i.note ?? '', price: i.price ?? '' })) })),
      deliveryTitle: d.tawerna.delivery.title, deliveryBody: d.tawerna.delivery.body, dzial: ctx.dzial('Tawerna'),
    },
    galeria: { ...t.galeria, categories: t.galeria.categories.map((k) => ({ label: k.label, photos: ctx.gallery(k.photos) })) },
    grupy: (() => {
      const g = d.noclegi.grupy, p = g.pricing
      return {
        ...t.grupy, heroTag: g.tag, heroTitle: g.title, 
        sections: g.sections.map((s) => ({ ...s, note: s.note ?? '' })),
        pricingTag: p.tag, minPersons: p.minPersons, bonuses: p.bonuses, cols: ls(p.cols),
        rows: p.rows.map((r) => ({ type: r.type, values: ls(r.values) })),
        includesHb: ls(p.includes.hb), includesFb: ls(p.includes.fb), footnote: p.includes.footnote, notes: ls(p.notes), legal: p.legal,
        extras: p.extras.map((e) => ({ category: e.category, note: e.note ?? '', items: e.items })),
        capacityRooms: g.capacity.rooms, totalRooms: g.capacity.totalRooms, beds: g.capacity.beds, maxOccupancy: g.capacity.maxOccupancy,
        halls: g.capacity.halls, dzial: ctx.dzial('Biuro'),
      }
    })(),
    projekty: {
      ...t.projekty, ...hero(d.projekty.hero),
      projectTitle: d.projekty.project.title, contract: d.projekty.project.contract, projectBody: paras(d.projekty.project.body),
      finance: d.projekty.project.finance, fundsTitle: d.projekty.funds.title, fundsBody: paras(d.projekty.funds.body), fundsLinks: d.projekty.funds.links,
      timelineTitle: d.projekty.timeline.title, timelineSubtitle: d.projekty.timeline.subtitle, milestones: d.projekty.timeline.milestones,
    },
    ...Object.fromEntries(['regulamin', 'regulamin-wypozyczalni', 'wzor-umowy-jachtu'].map((n) => [n, { ...t[n], pdf: t[n].pdf ? ctx.file(t[n].pdf) : null }])),
  }
}
