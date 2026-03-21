import { fallbackMenuData } from '../src/menuData';

export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  initialValue: {
    sections: fallbackMenuData
  },
  fields: [
    {
      name: 'sections',
      title: 'Sekcje Menu',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'tableSection',
          title: 'Sekcja Tabelaryczna (Kebab, Bułka, Danie)',
          fields: [
            { name: 'category', title: 'Kategoria', type: 'string' },
            { name: 'subtitle', title: 'Podtytuł', type: 'string' },
            { name: 'description', title: 'Opis pod tytułem', type: 'text' },
            { name: 'vegeOption', title: 'Opcja Vege', type: 'string' },
            {
              name: 'addons',
              title: 'Dodatki',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'name', title: 'Nazwa', type: 'string' },
                  { name: 'price', title: 'Cena', type: 'string' }
                ]
              }]
            },
            {
              name: 'columns',
              title: 'Kolumny (np. kurczak, karkówka)',
              type: 'array',
              of: [{ type: 'string' }]
            },
            {
              name: 'rows',
              title: 'Wiersze (Rozmiary)',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'name', title: 'Nazwa (np. mały)', type: 'string' },
                  { name: 'weight', title: 'Waga (np. 140g)', type: 'string' },
                  {
                    name: 'prices',
                    title: 'Ceny (odpowiadające kolumnom)',
                    type: 'array',
                    of: [{ type: 'string' }]
                  }
                ]
              }]
            },
            { name: 'footerNote', title: 'Notatka na dole', type: 'text' }
          ]
        },
        {
          type: 'object',
          name: 'listSection',
          title: 'Sekcja Listy (Burgery, Napoje, itp.)',
          fields: [
            { name: 'category', title: 'Kategoria', type: 'string' },
            { name: 'subtitle', title: 'Podtytuł', type: 'string' },
            { name: 'isWhiteBox', title: 'Białe tło (np. PLAN NA SEZON)', type: 'boolean', initialValue: false },
            {
              name: 'items',
              title: 'Pozycje',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'name', title: 'Nazwa', type: 'string' },
                  { name: 'price', title: 'Cena', type: 'string' },
                  { name: 'description', title: 'Opis', type: 'text' },
                  {
                    name: 'variants',
                    title: 'Warianty (np. pojemności)',
                    type: 'array',
                    of: [{
                      type: 'object',
                      fields: [
                        { name: 'volume', title: 'Pojemność / Typ', type: 'string' },
                        { name: 'price', title: 'Cena', type: 'string' }
                      ]
                    }]
                  }
                ]
              }]
            },
            {
              name: 'zestaw',
              title: 'Opcja Zestawu (np. dla burgerów)',
              type: 'object',
              fields: [
                { name: 'title', title: 'Tytuł (np. Zestaw?)', type: 'string' },
                { name: 'description', title: 'Opis', type: 'text' }
              ]
            },
            { name: 'footerNote', title: 'Notatka na dole', type: 'text' }
          ]
        }
      ]
    }
  ]
};
