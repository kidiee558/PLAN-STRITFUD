import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import menuData from '../menu.json';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navLinks, setNavLinks] = useState(menuData.links);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Opcjonalnie: Jeśli chcesz użyć fetch (np. gdy plik jest w public/):
  /*
  useEffect(() => {
    fetch('/menu.json')
      .then(res => res.json())
      .then(data => setNavLinks(data.links));
  }, []);
  */

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-300 bg-plan-purple py-2 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ rotate: -5, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex-shrink-0"
          >
            <a href="#" className="flex items-center gap-3">
              <img src="https://github.com/kidiee558/PLAN-street-food/blob/main/LOGOOOO.png?raw=true" alt="PLAN Logo" className="h-10 md:h-16 w-auto" />
            </a>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.napis}
                href={link.link}
                className="font-display text-xl tracking-wide transition-colors text-plan-light hover:text-plan-orange"
              >
                {link.napis}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-plan-light"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-plan-purple border-b-4 border-plan-dark"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.napis}
                  href={link.link}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-2xl font-display text-plan-light hover:text-plan-orange"
                >
                  {link.napis}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
