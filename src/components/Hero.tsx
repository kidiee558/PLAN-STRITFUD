import { motion } from 'motion/react';
import { ArrowDown, Facebook, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const productPool = [
    "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-produkt-1.jpg",
    "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-produkt-2.jpg",
    "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-produkt-4.jpg",
    "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-produkt-5.jpg",
    "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-produkt-6.jpg",
    "https://raw.githubusercontent.com/kidiee558/PLAN-street-food/main/PLAN-sm-produkt-9.jpg",
  ];

  const [heroImage, setHeroImage] = useState(productPool[2]);

  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * productPool.length);
    setHeroImage(productPool[randomIdx]);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-plan-orange pt-32 pb-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#2d1642 3px, transparent 3px)', backgroundSize: '40px 40px' }}></div>

      {/* Floating Emojis/Icons */}
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-1/4 left-10 text-6xl z-0 hidden md:block">🍔</motion.div>
      <motion.div animate={{ y: [0, 30, 0], rotate: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-1/4 right-10 text-6xl z-0 hidden md:block">🍟</motion.div>
      <motion.div animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 3.5 }} className="absolute top-1/3 right-20 text-6xl z-0 hidden md:block">🌯</motion.div>
      <motion.div animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4.5 }} className="absolute bottom-1/3 left-20 text-6xl z-0 hidden md:block">🥤</motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full md:w-7/12 lg:w-3/5 text-center md:text-left mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.6, duration: 1 }}
          >
            <h1 className="font-display text-plan-light mb-4 leading-none flex flex-col items-center md:items-start w-full" style={{ textShadow: '4px 4px 0 #2d1642' }}>
              <span className="text-[11vw] sm:text-[10vw] md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap">TWÓJ NOWY</span>
              <span className="text-[11vw] sm:text-[10vw] md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap text-plan-purple" style={{ textShadow: '4px 4px 0 #fef8f5' }}>ULUBIONY</span>
              <span className="text-[11vw] sm:text-[10vw] md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap">STREET FOOD</span>
            </h1>

            <a 
              href="https://www.google.com/maps/place/PLAN+Street+Food/@51.1706938,22.5946688,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x4722f90ad30c5d95:0x157ac9009370d571!2sPLAN+Street+Food!8m2!3d51.1706905!4d22.5972437!16s%2Fg%2F11yvcwp5jn!3m5!1s0x4722f90ad30c5d95:0x157ac9009370d571!8m2!3d51.1706905!4d22.5972437!16s%2Fg%2F11yvcwp5jn?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-sm sm:text-xl md:text-2xl font-bold text-plan-dark mb-8 bg-white/90 inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl transform rotate-2 cartoon-border hover:-translate-y-1 hover:shadow-[8px_8px_0_#2d1642] transition-all mx-auto md:mx-0"
            >
              <span>📍 Plac handlowy, Dominów, Rynek 4</span>
              <span className="text-xl sm:text-2xl md:text-3xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">🗺️</span>
            </a>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start items-center">
              <motion.a
                whileHover={{ scale: 1.1, rotate: -3 }}
                whileTap={{ scale: 0.9 }}
                href="#menu"
                className="cartoon-border bg-plan-purple text-plan-light font-display text-2xl sm:text-3xl px-6 py-3 sm:px-8 sm:py-4 text-center shadow-[6px_6px_0_#2d1642] whitespace-nowrap"
              >
                ZOBACZ MENU 🍔
              </motion.a>
              
              <div className="flex gap-3">
                <motion.a whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} href="https://www.facebook.com/plan.streetfood" target="_blank" rel="noopener noreferrer" className="bg-plan-light text-plan-purple p-3 sm:p-4 rounded-full cartoon-border hover:bg-plan-dark hover:text-plan-light transition-colors">
                  <Facebook size={28} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }} href="https://www.instagram.com/plan.streetfood/" target="_blank" rel="noopener noreferrer" className="bg-plan-light text-plan-purple p-3 sm:p-4 rounded-full cartoon-border hover:bg-plan-dark hover:text-plan-light transition-colors">
                  <Instagram size={28} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image / Graphic */}
        <div className="w-full md:w-5/12 lg:w-2/5 flex justify-center md:justify-end relative mt-10 md:mt-0 md:translate-x-8 lg:translate-x-16 xl:translate-x-24">
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 20 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1, delay: 0.2 }}
            className="relative"
          >
            <img 
              src={heroImage} 
              alt="Pyszne Jedzenie" 
              className="w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] object-cover object-center rounded-full border-[8px] md:border-[12px] border-plan-light shadow-2xl z-10 relative"
              referrerPolicy="no-referrer"
            />
            
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 md:-top-10 md:-right-10 bg-[#FFC700] text-plan-dark font-display text-sm md:text-2xl px-4 py-2 md:px-6 md:py-3 rounded-full border-4 border-plan-dark transform rotate-12 z-20 shadow-[4px_4px_0_#2d1642] whitespace-nowrap"
            >
              🔥 ŚWIEŻE SKŁADNIKI
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }} 
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-plan-dark bg-white/50 rounded-full p-2 cartoon-border"
      >
        <ArrowDown size={40} strokeWidth={3} />
      </motion.div>
    </section>
  );
}
