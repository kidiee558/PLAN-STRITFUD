export default {
  name: 'menuSection',
  title: 'Menu Section',
  type: 'document',
  initialValue: {
    category: 'KEBAB W BUŁCE',
    items: [
      { nazwa: 'Kebab Klasyczny', opis: 'Mięso kraftowe, świeże warzywa, autorskie sosy', cena: '25 zł' },
      { nazwa: 'Kebab Serowy', opis: 'Mięso kraftowe, dużo sera, świeże warzywa, autorskie sosy', cena: '28 zł' },
      { nazwa: 'Kebab Ostry', opis: 'Mięso kraftowe, jalapeno, ostre sosy', cena: '26 zł' }
    ]
  },
  fields: [
    {
      name: 'category',
      title: 'Kategoria (np. Kebab, Burgery)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'items',
      title: 'Pozycje w menu',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nazwa', title: 'Nazwa potrawy', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'opis', title: 'Opis', type: 'text' },
            { name: 'cena', title: 'Cena (np. 25 lub 25-30)', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'zdjecie', title: 'Zdjęcie potrawy (opcjonalnie)', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    },
  ],
};
