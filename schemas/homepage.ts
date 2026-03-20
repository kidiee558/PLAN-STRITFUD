export default {
  name: 'homepage',
  title: 'Strona Główna',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Główny Tytuł (H1)',
      type: 'string',
      description: 'To jest główny napis, który pojawi się na samej górze strony.',
    },
    {
      name: 'description',
      title: 'Opis pod tytułem',
      type: 'text',
      description: 'Krótki tekst wprowadzający pod głównym tytułem.',
    },
    {
      name: 'image',
      title: 'Zdjęcie główne (Hero)',
      type: 'image',
      description: 'Główne zdjęcie w tle. Możesz ustawić punkt skupienia (hotspot).',
      options: {
        hotspot: true,
      },
    },
  ],
};
