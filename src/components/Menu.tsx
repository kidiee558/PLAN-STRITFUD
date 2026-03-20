import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';

const SectionHeader = ({ title, rotate = "-rotate-2", titleClass = "text-3xl md:text-4xl" }: { title: any, rotate?: string, titleClass?: string }) => (
  <div className={`mb-6 flex flex-col items-start transform ${rotate}`}>
    <h2 className={`${titleClass} font-display text-plan-light bg-plan-orange px-4 py-1 border-4 border-plan-dark shadow-[4px_4px_0_#2d1642] rounded-xl inline-block uppercase`}>
      {title}
    </h2>
  </div>
);

const fallbackMenuData = [
  {
    _id: 'fallback-1',
    category: 'KEBAB W BUŁCE',
    items: [
      { nazwa: 'Kebab Klasyczny', opis: 'Mięso kraftowe, świeże warzywa, autorskie sosy', cena: '25 zł' },
      { nazwa: 'Kebab Serowy', opis: 'Mięso kraftowe, dużo sera, świeże warzywa, autorskie sosy', cena: '28 zł' },
      { nazwa: 'Kebab Ostry', opis: 'Mięso kraftowe, jalapeno, ostre sosy', cena: '26 zł' }
    ]
  },
  {
    _id: 'fallback-2',
    category: 'KEBAB W CIEŚCIE (ROLLO)',
    items: [
      { nazwa: 'Rollo Klasyczne', opis: 'Mięso kraftowe, świeże warzywa, autorskie sosy', cena: '26 zł' },
      { nazwa: 'Rollo Amerykańskie', opis: 'Mięso kraftowe, frytki w środku, świeże warzywa, autorskie sosy', cena: '29 zł' },
      { nazwa: 'Rollo Fit', opis: 'Tylko mięso i warzywa, bez sosów', cena: '27 zł' }
    ]
  },
  {
    _id: 'fallback-3',
    category: 'DANIA NA TALERZU',
    items: [
      { nazwa: 'Danie Klasyczne', opis: 'Duża porcja mięsa, frytki, zestaw surówek, sosy', cena: '38 zł' },
      { nazwa: 'Danie Gigant', opis: 'Podwójne mięso, podwójne frytki, zestaw surówek, sosy', cena: '49 zł' }
    ]
  },
  {
    _id: 'fallback-4',
    category: 'BURGERY',
    items: [
      { nazwa: 'Burger Klasyk', opis: '100% wołowina, sałata, pomidor, ogórek, cebula, sos', cena: '32 zł' },
      { nazwa: 'Cheese Burger', opis: '100% wołowina, podwójny ser cheddar, sałata, pomidor, sos', cena: '35 zł' },
      { nazwa: 'Bacon Burger', opis: '100% wołowina, chrupiący bekon, ser, sałata, pomidor, sos', cena: '38 zł' }
    ]
  },
  {
    _id: 'fallback-5',
    category: 'DODATKI',
    items: [
      { nazwa: 'Frytki', opis: 'Złociste, chrupiące frytki', cena: '12 zł' },
      { nazwa: 'Krążki Cebulowe', opis: 'Smażone krążki cebulowe z sosem', cena: '15 zł' },
      { nazwa: 'Nuggetsy', opis: '6 sztuk chrupiących nuggetsów z kurczaka', cena: '18 zł' }
    ]
  },
  {
    _id: 'fallback-6',
    category: 'NAPOJE',
    items: [
      { nazwa: 'Coca-Cola / Sprite / Fanta', opis: 'Puszka 0.33l', cena: '7 zł' },
      { nazwa: 'Woda', opis: 'Niegazowana / Gazowana 0.5l', cena: '6 zł' },
      { nazwa: 'Ayran', opis: 'Tradycyjny turecki napój jogurtowy', cena: '6 zł' }
    ]
  }
];

export default function Menu() {
  const [menuSections, setMenuSections] = useState<any[]>([]);

  useEffect(() => {
    client.fetch('*[_type == "menuSection"] | order(_createdAt asc)').then((data) => {
      if (data && data.length > 0) {
        setMenuSections(data);
      }
    });
  }, []);

  const displayMenu = menuSections.length > 0 ? menuSections : fallbackMenuData;

  // Split into 3 columns for masonry-like layout
  const col1 = displayMenu.filter((_, i) => i % 3 === 0);
  const col2 = displayMenu.filter((_, i) => i % 3 === 1);
  const col3 = displayMenu.filter((_, i) => i % 3 === 2);

  const renderSection = (section: any, idx: number) => (
    <motion.div key={section._id || idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
      <SectionHeader title={section.category} rotate={idx % 2 === 0 ? '-rotate-2' : 'rotate-2'} />
      <div className="space-y-6 mt-6">
        {section.items?.map((item: any, i: number) => (
          <div key={i}>
            <h3 className="font-display text-xl text-plan-orange mb-1">
              {item.nazwa} <span className="text-plan-light text-lg whitespace-nowrap">{item.cena}</span>
            </h3>
            {item.opis && <p className="text-xs font-bold leading-tight">{item.opis}</p>}
            {item.zdjecie && (
              <img 
                src={typeof item.zdjecie === 'string' ? item.zdjecie : urlFor(item.zdjecie).width(400).url()} 
                alt={item.nazwa} 
                className="mt-3 w-full h-48 object-cover rounded-xl border-2 border-plan-dark"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="menu" className="py-20 bg-plan-purple text-plan-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-12">
            {col1.map((section, idx) => renderSection(section, idx * 3))}
          </div>
          <div className="space-y-12">
            {col2.map((section, idx) => renderSection(section, idx * 3 + 1))}
          </div>
          <div className="space-y-12">
            {col3.map((section, idx) => renderSection(section, idx * 3 + 2))}
          </div>
        </div>
      </div>
    </section>
  );
}

