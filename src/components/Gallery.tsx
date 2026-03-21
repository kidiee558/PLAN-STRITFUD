import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';

export default function Gallery() {
  const [howWeDoIt, setHowWeDoIt] = useState<string[]>([]);
  const [galleryThumbs, setGalleryThumbs] = useState<string[]>([]);
  const [smileImages, setSmileImages] = useState<string[]>([]);

  useEffect(() => {
    client.fetch('*[_type == "pageMedia"][0]')
      .then((data) => {
        if (data) {
          if (data.howWeDoItImages?.length > 0) {
            setHowWeDoIt(data.howWeDoItImages.map((img: any) => img ? urlFor(img).width(800).url() : null));
          }
          if (data.heroGalleryThumbs?.length > 0) {
            setGalleryThumbs(data.heroGalleryThumbs.map((img: any) => img ? urlFor(img).width(600).url() : null));
          }
          if (data.smileGalleryImages?.length > 0) {
            setSmileImages(data.smileGalleryImages.map((img: any) => img ? urlFor(img).width(600).url() : null));
          }
        }
      })
      .catch((err) => {
        console.error("Sanity fetch error in Gallery:", err.message);
      });
  }, []);

  const fallbackHowWeDoIt = [
    { type: 'video', src: "https://github.com/kidiee558/PLAN-street-food/raw/refs/heads/main/Wideo%20Kurczak.mp4" },
    { type: 'video', src: "https://github.com/kidiee558/PLAN-street-food/raw/refs/heads/main/Wideo%20Mi%C4%99sko.mp4" },
    { type: 'video', src: "https://github.com/kidiee558/PLAN-street-food/raw/refs/heads/main/Wideo%20Pity.mp4" }
  ];

  const fallbackThumbs = [
    "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-produkt-1.jpg",
    "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-produkt-2.jpg",
    "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-produkt-4.jpg",
    "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-produkt-5.jpg"
  ];

  const fallbackSmile = [
    "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/Wiadomo-sm-5.jpg",
    "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/Wiadomo-sm-6.jpg",
    "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-40.jpg",
    "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/dziewczyny1.jpg"
  ];

  const displayHowWeDoIt = fallbackHowWeDoIt.map((fallbackItem, idx) => {
    if (howWeDoIt[idx]) {
      return { type: 'image', src: howWeDoIt[idx] };
    }
    return fallbackItem;
  });

  const displayThumbs = fallbackThumbs.map((fallbackSrc, idx) => {
    return galleryThumbs[idx] || fallbackSrc;
  });

  const displaySmile = fallbackSmile.map((fallbackSrc, idx) => {
    return smileImages[idx] || fallbackSrc;
  });

  const rotations = ["-rotate-2", "rotate-3", "-rotate-1", "rotate-2"];
  const bgColors = ["bg-plan-orange", "bg-plan-purple", "bg-plan-orange", "bg-plan-purple"];
  const howWeDoItRotations = ["rotate-1", "-rotate-1", "rotate-2"];

  return (
    <section id="o-nas" className="py-20 bg-plan-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display text-plan-purple mb-4"
            style={{ textShadow: '3px 3px 0 #f48120' }}
          >
            JAK TO ROBIMY?
          </motion.h2>
          <p className="text-xl font-bold text-plan-dark max-w-2xl mx-auto">
            Świeże składniki, autorskie sosy i mięso przygotowywane z pasją. Zobacz nasz PLAN na idealny street food!
          </p>
        </div>

        {/* How We Do It Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {displayHowWeDoIt.slice(0, 3).map((item, idx) => (
            <motion.div 
              key={`how-${idx}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`w-fit mx-auto cartoon-border bg-plan-orange p-2 md:p-4 transform ${howWeDoItRotations[idx % 3]}`}
            >
              <div className="rounded-xl flex items-center justify-center border-4 border-plan-dark relative overflow-hidden bg-black">
                {item.type === 'image' ? (
                  <img 
                    src={item.src}
                    alt={`Jak to robimy ${idx + 1}`}
                    className="h-[60vh] md:h-[70vh] w-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <video className="h-[60vh] md:h-[70vh] w-auto object-cover" autoPlay loop muted playsInline>
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Thumbs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center mb-16">
          {displayThumbs.slice(0, 4).map((src, idx) => (
            <motion.div
              key={`thumb-${idx}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`cartoon-border ${bgColors[idx % 4]} p-2 transform ${rotations[idx % 4]} ${idx % 2 === 1 ? 'sm:-mt-8 lg:-mt-12' : ''}`}
            >
              <img 
                src={src} 
                alt={`Galeria ${idx + 1}`} 
                className="w-full h-64 md:h-72 object-cover rounded-lg border-2 border-plan-dark"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-12 mt-20">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display text-plan-purple mb-4 inline-block bg-plan-light px-6 py-2 cartoon-border transform -rotate-2"
          >
            ZAWSZE Z UŚMIECHEM!
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {displaySmile.map((src, idx) => (
            <motion.div
              key={`smile-${idx}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`cartoon-border ${bgColors[(idx + 1) % 4]} p-2 transform ${rotations[(idx + 2) % 4]} ${idx % 2 === 1 ? 'sm:-mt-8 lg:-mt-12' : ''}`}
            >
              <img 
                src={src} 
                alt={`Ekipa ${idx + 1}`} 
                className="w-full h-72 md:h-80 object-cover rounded-lg border-2 border-plan-dark"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* More Button */}
        <div className="mt-16 text-center">
          <motion.a
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/plan.streetfood/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cartoon-border bg-plan-purple text-plan-light font-display text-xl md:text-3xl px-6 py-4 shadow-[6px_6px_0_#f48120]"
          >
            ZOBACZ WIĘCEJ PYSZNOŚCI 📸
          </motion.a>
        </div>
      </div>
    </section>
  );
}
