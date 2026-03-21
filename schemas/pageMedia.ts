export default {
  name: 'pageMedia',
  title: 'Strona Media',
  type: 'document',
  initialValue: () => ({
    heroVideoUrl: "https://github.com/kidiee558/PLAN-street-food/raw/refs/heads/main/Wideo%20Kurczak.mp4",
    heroImageCircleUrl: "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-produkt-4.jpg",
    howWeDoItUrls: [
      "https://github.com/kidiee558/PLAN-street-food/raw/refs/heads/main/Wideo%20Kurczak.mp4",
      "https://github.com/kidiee558/PLAN-street-food/raw/refs/heads/main/Wideo%20Mi%C4%99sko.mp4",
      "https://github.com/kidiee558/PLAN-street-food/raw/refs/heads/main/Wideo%20Pity.mp4"
    ],
    heroGalleryThumbsUrls: [
      "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-produkt-1.jpg",
      "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-produkt-2.jpg",
      "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-produkt-4.jpg",
      "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-produkt-5.jpg"
    ],
    smileGalleryImagesUrls: [
      "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/Wiadomo-sm-5.jpg",
      "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/Wiadomo-sm-6.jpg",
      "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-40.jpg",
      "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/dziewczyny1.jpg"
    ]
  }),
  fields: [
    {
      name: 'heroVideo',
      title: 'Hero Wideo (Wgraj plik .mp4, aby nadpisać domyślne)',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
    },
    {
      name: 'heroVideoUrl',
      title: 'Domyślny link do wideo',
      type: 'url',
      readOnly: true,
    },
    {
      name: 'heroImageCircle',
      title: 'Główne okrągłe zdjęcie (Hero) (Wgraj, aby nadpisać domyślne)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'heroImageCircleUrl',
      title: 'Domyślny link do głównego zdjęcia',
      type: 'url',
      readOnly: true,
    },
    {
      name: 'howWeDoItImages',
      title: 'Zdjęcia "Jak to robimy?" (Wgraj, aby nadpisać domyślne wideo)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'howWeDoItUrls',
      title: 'Domyślne linki "Jak to robimy?"',
      type: 'array',
      of: [{ type: 'url' }],
      readOnly: true,
    },
    {
      name: 'heroGalleryThumbs',
      title: 'Miniaturki pod wideo (Max 4 zdjęcia) (Wgraj, aby nadpisać domyślne)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule: any) => Rule.max(4),
    },
    {
      name: 'heroGalleryThumbsUrls',
      title: 'Domyślne linki miniaturek',
      type: 'array',
      of: [{ type: 'url' }],
      readOnly: true,
    },
    {
      name: 'smileGalleryImages',
      title: 'Zdjęcia "Zawsze z uśmiechem!" (Wgraj, aby nadpisać domyślne)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'smileGalleryImagesUrls',
      title: 'Domyślne linki "Zawsze z uśmiechem!"',
      type: 'array',
      of: [{ type: 'url' }],
      readOnly: true,
    },
  ],
};
