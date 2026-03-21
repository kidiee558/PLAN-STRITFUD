export const fallbackMenuData = [
  {
    _type: 'tableSection',
    _key: 'sec-kebab',
    category: 'KEBAB',
    subtitle: 'PIECZYWO DO WYBORU:\nLAWASZ lub PITA!',
    vegeOption: 'Wybierz\nTOFU W PANKO!',
    addons: [
      { _key: 'add-1', name: 'FRYTKI', price: '3 pln' },
      { _key: 'add-2', name: 'CHEDDAR', price: '4 pln' },
      { _key: 'add-3', name: 'BEKON', price: '4 pln' },
      { _key: 'add-4', name: 'JALAPEÑO', price: '2 pln' }
    ],
    columns: ['kurczak', 'karkówka\nz bekonem\nmięso mieszane'],
    rows: [
      { _key: 'row-1', name: 'mały', weight: '140g', prices: ['21 pln', '24 pln'] },
      { _key: 'row-2', name: 'średni', weight: '180g', prices: ['26 pln', '29 pln'] },
      { _key: 'row-3', name: 'duży', weight: '200g', prices: ['31 pln', '34 pln'] }
    ]
  },
  {
    _type: 'tableSection',
    _key: 'sec-bulka',
    category: 'BUŁKA',
    columns: ['', ''],
    rows: [
      { _key: 'row-1', name: 'średnia', weight: '180g', prices: ['25 pln', '29 pln'] },
      { _key: 'row-2', name: 'gigant', weight: '220g', prices: ['31 pln', '35 pln'] }
    ]
  },
  {
    _type: 'tableSection',
    _key: 'sec-danie',
    category: 'DANIE',
    description: 'mięso/ frytki julienne/ sałatka sezonowa/\nsos sambal/ sos housowy',
    columns: ['', ''],
    rows: [
      { _key: 'row-1', name: 'średnie', weight: '180g', prices: ['29 pln', '33 pln'] },
      { _key: 'row-2', name: 'gigant', weight: '220g', prices: ['32 pln', '36 pln'] }
    ],
    footerNote: '! Weekendowe krafty + 5 pln\n[ o szczegóły zapytaj obsługę ]'
  },
  {
    _type: 'listSection',
    _key: 'sec-salatki',
    category: 'SAŁATKI Z PLANU',
    items: [
      { _key: 'item-1', name: 'Grillowany kurczak', price: '36 pln *', description: 'sałaty/ bekon/ pomidor/ ogórek/ sos housowy/ grillowana pita z cheddarem' },
      { _key: 'item-2', name: 'Grillowana wieprzowina', price: '37 pln *', description: 'sałaty/ bekon/ ogórek piklowany/ jalapeño/ cebulka czerwona/ sos housowy/ grillowana pita z cheddarem' }
    ],
    footerNote: '*Zamień mięso na TOFU W PANKO!'
  },
  {
    _type: 'listSection',
    _key: 'sec-dzieci',
    category: 'DLA DZIECI',
    items: [
      { _key: 'item-1', name: 'Burger Kidos', price: '20 pln', description: 'bułeczka z wołowiną/ cheddar/ sos łagodny' },
      { _key: 'item-2', name: 'Chrupiący kurczak', price: '20 pln', description: 'kurczak/ frytki julienne/ ketchup' },
      { _key: 'item-3', name: 'Frytki', price: '10 pln', description: 'frytki julienne/ ketchup' }
    ]
  },
  {
    _type: 'listSection',
    _key: 'sec-smash',
    category: 'SMASHBURGERY',
    subtitle: 'WOŁOWE 180g',
    items: [
      { _key: 'item-1', name: 'Lokator', price: '33 pln', description: 'wołowina/ cheddar/ piklowany ogórek/ sosy housowe/ mix sałat' },
      { _key: 'item-2', name: 'Bacon', price: '34 pln', description: 'wołowina/ podwójny bekon/ piklowana kapusta/ prażona cebulka/ sos bbq' },
      { _key: 'item-3', name: 'Dominek', price: '34 pln', description: 'wołowina/ bekon/ cheddar/ czerwona cebula/ pomidor/ sos sambal' },
      { _key: 'item-4', name: 'Spice', price: '37 pln', description: 'wołowina/ spianata/ bekon/ cheddar/ jalapeño/ sos spice jalapeño' }
    ],
    zestaw: {
      title: 'Zestaw?',
      description: 'Frytki julienne\ni sałatka colesław za 9 pln'
    }
  },
  {
    _type: 'listSection',
    _key: 'sec-napoje-zimne',
    category: 'NAPOJE',
    subtitle: 'zimne',
    items: [
      { _key: 'item-1', name: 'Lemoniada sezonowa', variants: [{ _key: 'var-1', volume: '0,4 l', price: '12 pln' }, { _key: 'var-2', volume: '1 l', price: '28 pln' }] },
      { _key: 'item-2', name: 'Pepsi/ Mirinda/ 7up/ Lipton', variants: [{ _key: 'var-1', volume: '0,5 l', price: '9 pln' }, { _key: 'var-2', volume: '0,85 l', price: '15 pln' }] },
      { _key: 'item-3', name: 'Woda 0,5 l', price: '7 pln', description: 'gazowana/ niegazowana' },
      { _key: 'item-4', name: 'Karafka wody', price: '14 pln', description: 'z owocami i miętą' },
      { _key: 'item-5', name: 'Sok 0,3 l', price: '8 pln', description: 'jabłko/ czarna porzeczka/ pomarańcza' }
    ]
  },
  {
    _type: 'listSection',
    _key: 'sec-napoje-gorace',
    category: 'NAPOJE',
    subtitle: 'gorące',
    items: [
      { _key: 'item-1', name: 'Herbata', price: '14 pln', description: 'czarna/ zielona/ Earl Grey/ jaśminowa' },
      { _key: 'item-2', name: 'Malinowy PLAN', price: '20 pln', description: 'czarna herbata/ syrop malinowy/ wanilia/ mięta/ puder malinowy' },
      { _key: 'item-3', name: 'Espresso', price: '8 pln' },
      { _key: 'item-4', name: 'Espresso doppio', price: '10 pln' },
      { _key: 'item-5', name: 'Americano', price: '11 pln' },
      { _key: 'item-6', name: 'Cappuccino', price: '11 pln' },
      { _key: 'item-7', name: 'Flat White', price: '13 pln' },
      { _key: 'item-8', name: 'Late Macchiato', price: '14 pln' }
    ]
  },
  {
    _type: 'listSection',
    _key: 'sec-sezon',
    category: 'PLAN NA SEZON',
    isWhiteBox: true,
    items: [
      { _key: 'item-1', name: 'Hibiskus', price: '18 pln', description: 'hibiskus/ cytrusy/ syrop poziomkowy/ lód' },
      { _key: 'item-2', name: 'Iced tea', price: '18 pln', description: 'marakuja/ brzoskwinia/ czarna herbata/ lód' },
      { _key: 'item-3', name: 'Iced latte', price: '14 pln', description: 'espresso/ mleko/ lód' },
      { _key: 'item-4', name: 'Kokosowe iced latte', price: '16 pln', description: 'espresso/ mleko/ lód/ syrop kokosowy' },
      { _key: 'item-5', name: 'Frappe śmietankowe', price: '16 pln', description: 'lód/ śmietanka/ espresso/ wanilia' }
    ]
  },
  {
    _type: 'listSection',
    _key: 'sec-piwa',
    category: 'PIWA',
    items: [
      { _key: 'item-1', name: 'Perła lana', variants: [{ _key: 'var-1', volume: '0,3 l', price: '8 pln' }, { _key: 'var-2', volume: '0,5 l', price: '10 pln' }] },
      { _key: 'item-2', name: 'Perła 0%', price: '11 pln' },
      { _key: 'item-3', name: 'Okocim piwo smakowe 0%', price: '12 pln' },
      { _key: 'item-4', name: 'Piwa kraftowe*', description: 'Dziki wschód 0,5 l 20 pln' }
    ],
    footerNote: '*inne smaki? Zapytaj obsługę!'
  }
];
