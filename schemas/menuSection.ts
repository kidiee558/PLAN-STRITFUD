export default {
  name: 'menuSection',
  title: 'Menu Section',
  type: 'document',
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
