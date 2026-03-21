import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-plan-dark text-plan-light pt-20 pb-10 border-t-8 border-plan-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-5xl font-display text-plan-orange mb-8" style={{ textShadow: '2px 2px 0 #5c2c84' }}>
              WPADAJ DO NAS!
            </h2>
            
            <div className="space-y-6 font-bold text-lg">
              <div className="flex items-start gap-4">
                <div className="bg-plan-purple p-3 rounded-full border-2 border-plan-light">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-display text-2xl text-plan-orange">Adres</p>
                  <a 
                    href="https://www.google.com/maps/place/PLAN+Street+Food/@51.1706938,22.5946688,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x4722f90ad30c5d95:0x157ac9009370d571!2sPLAN+Street+Food!8m2!3d51.1706905!4d22.5972437!16s%2Fg%2F11yvcwp5jn!3m5!1s0x4722f90ad30c5d95:0x157ac9009370d571!8m2!3d51.1706905!4d22.5972437!16s%2Fg%2F11yvcwp5jn?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-plan-orange transition-colors"
                  >
                    <p>Plac handlowy, Dominów</p>
                    <p>Rynek 4</p>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-plan-purple p-3 rounded-full border-2 border-plan-light">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-display text-2xl text-plan-orange">Telefon</p>
                  <p>723 122 700</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-plan-purple p-3 rounded-full border-2 border-plan-light">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-display text-2xl text-plan-orange">Godziny otwarcia</p>
                  <p>Pon - Czw: 12:00 - 22:00</p>
                  <p>Pt - Sob: 12:00 - 23:00</p>
                  <p>Niedz: 12:00 - 22:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="https://www.facebook.com/plan.streetfood" target="_blank" rel="noopener noreferrer" className="bg-plan-orange text-plan-dark p-3 rounded-full border-2 border-plan-light hover:bg-plan-light hover:text-plan-orange transition-colors">
                <Facebook size={28} />
              </a>
              <a href="https://www.instagram.com/plan.streetfood/" target="_blank" rel="noopener noreferrer" className="bg-plan-orange text-plan-dark p-3 rounded-full border-2 border-plan-light hover:bg-plan-light hover:text-plan-orange transition-colors">
                <Instagram size={28} />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col">
            <div className="cartoon-border overflow-hidden bg-plan-light p-2 transform rotate-1 mb-6 h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.056075486955!2d22.59466881576734!3d51.17069377958153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722f90ad30c5d95%3A0x157ac9009370d571!2sPLAN%20Street%20Food!5e0!3m2!1spl!2spl!4v1710866321234!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
              ></iframe>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.google.com/maps/dir//PLAN+Street+Food/@51.1706905,22.5972437,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4722f90ad30c5d95:0x157ac9009370d571!2m2!1d22.5972437!2d51.1706905!3e0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 cartoon-border bg-plan-orange text-plan-dark font-display text-2xl md:text-3xl px-6 py-4 hover:bg-plan-light hover:text-plan-orange transition-colors shadow-[6px_6px_0_#fef8f5] text-center"
            >
              <MapPin size={32} className="hidden md:block" />
              <span className="text-center">KLIKNIJ ABY WYZNACZYĆ TRASĘ</span>
            </motion.a>
          </div>
        </div>

        <div className="border-t-2 border-plan-purple/50 pt-8 text-center font-bold text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} PLAN Street Food. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
