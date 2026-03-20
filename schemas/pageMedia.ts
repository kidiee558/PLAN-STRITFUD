export default {
  name: 'pageMedia',
  title: 'Strona Media',
  type: 'document',
  fields: [
    {
      name: 'heroVideo',
      title: 'Hero Wideo (Plik .mp4)',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
    },
    {
      name: 'heroImageCircle',
      title: 'Główne okrągłe zdjęcie (Hero)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'howWeDoItImages',
      title: 'Zdjęcia "Jak to robimy?" (Zastępuje 3 wideo)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'heroGalleryThumbs',
      title: 'Miniaturki pod wideo (Max 4 zdjęcia)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule: any) => Rule.max(4),
    },
    {
      name: 'smileGalleryImages',
      title: 'Zdjęcia "Zawsze z uśmiechem!"',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
  ],
};
