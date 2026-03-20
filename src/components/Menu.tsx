import { motion } from 'motion/react';

const menuData = {
  kebabs: [
    { name: 'mały', weight: '140g', chicken: 21, pork: 24 },
    { name: 'średni', weight: '180g', chicken: 26, pork: 29 },
    { name: 'duży', weight: '200g', chicken: 31, pork: 34 },
  ],
  bulka: [
    { name: 'średnia', weight: '180g', chicken: 25, pork: 29 },
    { name: 'gigant', weight: '220g', chicken: 31, pork: 35 },
  ],
  danie: [
    { name: 'średnie', weight: '180g', chicken: 29, pork: 33 },
    { name: 'gigant', weight: '220g', chicken: 32, pork: 36 },
  ],
  burgers: [
    { name: 'Lokator', price: 33, desc: 'wołowina/ cheddar/ piklowany ogórek/ sosy housowe/ mix sałat' },
    { name: 'Bacon', price: 34, desc: 'wołowina/ podwójny bekon/ piklowana kapusta/ prażona cebulka/ sos bbq' },
    { name: 'Dominek', price: 34, desc: 'wołowina/ bekon/ cheddar/ czerwona cebula/ pomidor/ sos sambal' },
    { name: 'Spice', price: 37, desc: 'wołowina/ spianata/ bekon/ cheddar/ jalapeño/ sos spice jalapeño' },
  ],
  kids: [
    { name: 'Burger Kidos', price: 20, desc: 'bułeczka z wołowiną/ cheddar/ sos łagodny' },
    { name: 'Chrupiący kurczak', price: 20, desc: 'kurczak/ frytki julienne/ ketchup' },
    { name: 'Frytki', price: 10, desc: 'frytki julienne/ ketchup' },
  ],
  salads: [
    { name: 'Grillowany kurczak', price: 36, desc: 'sałaty/ bekon/ pomidor/ ogórek/ sos housowy/ grillowana pita z cheddarem' },
    { name: 'Grillowana wieprzowina', price: 37, desc: 'sałaty/ bekon/ ogórek piklowany/ jalapeño/ cebulka czerwona/ sos housowy/ grillowana pita z cheddarem' },
  ],
  drinksCold: [
    { name: 'Lemoniada sezonowa', options: [{size: '0,4 l', price: 12}, {size: '1 l', price: 28}] },
    { name: 'Pepsi/ Mirinda/ 7up/ Lipton', options: [{size: '0,5 l', price: 9}, {size: '0,85 l', price: 15}] },
    { name: 'Woda 0,5 l', price: 7, desc: 'gazowana/ niegazowana' },
    { name: 'Karafka wody', price: 14, desc: 'z owocami i miętą' },
    { name: 'Sok 0,3 l', price: 8, desc: 'jabłko/ czarna porzeczka/ pomarańcza' },
  ],
  drinksHot: [
    { name: 'Herbata', price: 14, desc: 'czarna/ zielona/ Earl Grey/ jaśminowa' },
    { name: 'Malinowy PLAN', price: 20, desc: 'czarna herbata/ syrop malinowy/ wanilia/ mięta/ puder malinowy' },
    { name: 'Espresso', price: 8 },
    { name: 'Espresso doppio', price: 10 },
    { name: 'Americano', price: 11 },
    { name: 'Cappuccino', price: 11 },
    { name: 'Flat White', price: 13 },
    { name: 'Late Macchiato', price: 14 },
  ],
  beers: [
    { name: 'Perła lana', options: [{size: '0,3 l', price: 8}, {size: '0,5 l', price: 10}] },
    { name: 'Perła 0%', price: 11 },
    { name: 'Okocim piwo smakowe 0%', price: 12 },
    { name: 'Piwa kraftowe*', options: [{size: 'Dziki wschód 0,5 l', price: 20}] },
  ],
  seasonal: [
    { name: 'Hibiskus', price: 18, desc: 'hibiskus/ cytrusy/ syrop poziomkowy/ lód' },
    { name: 'Iced tea', price: 18, desc: 'marakuja/ brzoskwinia/ czarna herbata/ lód' },
    { name: 'Iced latte', price: 14, desc: 'espresso/ mleko/ lód' },
    { name: 'Kokosowe iced latte', price: 16, desc: 'espresso/ mleko/ lód/ syrop kokosowy' },
    { name: 'Frappe śmietankowe', price: 16, desc: 'lód/ śmietanka/ espresso/ wanilia' },
  ]
};

const SectionHeader = ({ title, rotate = "-rotate-2", titleClass = "text-3xl md:text-4xl" }: { title: any, rotate?: string, titleClass?: string }) => (
  <div className={`mb-6 flex flex-col items-start transform ${rotate}`}>
    <h2 className={`${titleClass} font-display text-plan-light bg-plan-orange px-4 py-1 border-4 border-plan-dark shadow-[4px_4px_0_#2d1642] rounded-xl inline-block uppercase`}>
      {title}
    </h2>
  </div>
);

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-plan-purple text-plan-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* COLUMN 1: KEBAB, BUŁKA, DANIE, DLA DZIECI */}
          <div className="space-y-12">
            
            {/* KEBAB */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-4">
                <SectionHeader title="KEBAB" rotate="-rotate-3" titleClass="text-4xl md:text-5xl" />
                <div className="text-sm font-bold leading-tight">
                  <span className="text-plan-orange">PIECZYWO DO WYBORU:</span><br/>
                  <span className="text-plan-orange text-lg">LAWASZ lub PITA!</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6 border-b-2 border-plan-light/20 pb-4">
                <div className="bg-plan-orange text-plan-dark font-display px-2 py-1 transform -rotate-2">VEGE?</div>
                <div className="text-sm font-bold">Wybierz<br/>TOFU W PANKO!</div>
                <div className="ml-auto text-xs font-bold text-plan-orange leading-tight text-right">
                  <span className="text-plan-light">+ do środka</span><br/>
                  FRYTKI 3 pln<br/>
                  CHEDDAR 4 pln<br/>
                  BEKON 4 pln<br/>
                  JALAPEÑO 2 pln
                </div>
              </div>

              <div className="grid grid-cols-[1.5fr_1fr_1fr] sm:grid-cols-[1.1fr_1fr_1fr] gap-1 sm:gap-2 mb-4 font-display text-base sm:text-lg text-plan-orange items-end">
                <div></div>
                <div className="text-center">kurczak</div>
                <div className="text-center leading-tight">karkówka<br/>z bekonem<br/><span className="text-[10px] sm:text-xs text-plan-light font-body">mięso mieszane</span></div>
              </div>
              
              <div className="space-y-4">
                {menuData.kebabs.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-[1.5fr_1fr_1fr] sm:grid-cols-[1.1fr_1fr_1fr] gap-1 sm:gap-2 items-center">
                    <div className="whitespace-nowrap">
                      <span className="font-display text-lg sm:text-xl text-plan-orange">{item.name}</span>
                      <span className="text-[10px] sm:text-xs font-bold opacity-70 ml-1 sm:ml-2">{item.weight}</span>
                    </div>
                    <div className="text-center font-bold text-base sm:text-xl">{item.chicken} pln</div>
                    <div className="text-center font-bold text-base sm:text-xl">{item.pork} pln</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* BUŁKA */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="BUŁKA" rotate="rotate-2" titleClass="text-4xl md:text-5xl" />
              <div className="space-y-4 mt-6">
                {menuData.bulka.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-[1.5fr_1fr_1fr] sm:grid-cols-[1.1fr_1fr_1fr] gap-1 sm:gap-2 items-center">
                    <div className="whitespace-nowrap">
                      <span className="font-display text-lg sm:text-xl text-plan-orange">{item.name}</span>
                      <span className="text-[10px] sm:text-xs font-bold opacity-70 ml-1 sm:ml-2">{item.weight}</span>
                    </div>
                    <div className="text-center font-bold text-base sm:text-xl">{item.chicken} pln</div>
                    <div className="text-center font-bold text-base sm:text-xl">{item.pork} pln</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DANIE */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="DANIE" rotate="-rotate-1" titleClass="text-4xl md:text-5xl" />
              <div className="text-sm font-bold text-plan-orange mb-6 bg-plan-dark/30 p-2 rounded-lg inline-block">
                mięso/ frytki julienne/ sałatka sezonowa/<br/>sos sambal/ sos housowy
              </div>
              <div className="space-y-4">
                {menuData.danie.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-[1.5fr_1fr_1fr] sm:grid-cols-[1.1fr_1fr_1fr] gap-1 sm:gap-2 items-center">
                    <div className="whitespace-nowrap">
                      <span className="font-display text-lg sm:text-xl text-plan-orange">{item.name}</span>
                      <span className="text-[10px] sm:text-xs font-bold opacity-70 ml-1 sm:ml-2">{item.weight}</span>
                    </div>
                    <div className="text-center font-bold text-base sm:text-xl">{item.chicken} pln</div>
                    <div className="text-center font-bold text-base sm:text-xl">{item.pork} pln</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-plan-orange font-bold text-sm flex items-start gap-2">
                <span className="text-2xl leading-none">!</span>
                <span>Weekendowe krafty + 5 pln<br/>[ o szczegóły zapytaj obsługę ]</span>
              </div>
            </motion.div>

            {/* DLA DZIECI */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="DLA DZIECI" rotate="-rotate-2" />
              <div className="space-y-6 mt-6">
                {menuData.kids.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="font-display text-xl text-plan-orange mb-1">
                      {item.name} <span className="text-plan-light text-lg whitespace-nowrap">{item.price} pln</span>
                    </h3>
                    <p className="text-xs font-bold leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* COLUMN 2: SMASHBURGERY, SAŁATKI, PLAN NA SEZON */}
          <div className="space-y-12">
            
            {/* SMASHBURGERY */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader 
                title={
                  <div className="text-center leading-none py-1">
                    SMASHBURGERY
                    <div className="text-lg md:text-xl tracking-normal mt-1">
                      <span className="font-display uppercase">WOŁOWE</span> <span className="font-body normal-case">180g</span>
                    </div>
                  </div>
                } 
                rotate="rotate-1" 
                titleClass="text-3xl md:text-4xl" 
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {menuData.burgers.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="font-display text-2xl text-plan-orange mb-1">
                      {item.name} <span className="text-plan-light text-xl whitespace-nowrap">{item.price} pln</span>
                    </h3>
                    <p className="text-xs font-bold leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex items-center gap-4 bg-plan-dark/30 p-4 rounded-xl border-2 border-plan-orange transform -rotate-1">
                <div className="font-display text-2xl text-plan-orange bg-plan-light px-2 py-1 rounded cartoon-border border-2">Zestaw?</div>
                <div className="text-sm font-bold">Frytki julienne<br/>i sałatka colesław za 9 pln</div>
              </div>
            </motion.div>

            {/* SAŁATKI Z PLANU */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="SAŁATKI Z PLANU" rotate="rotate-2" />
              <div className="space-y-6 mt-6">
                {menuData.salads.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="font-display text-xl text-plan-orange mb-1">
                      {item.name} <span className="text-plan-light text-lg whitespace-nowrap">{item.price} pln *</span>
                    </h3>
                    <p className="text-xs font-bold leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-xs font-bold text-plan-orange">
                *Zamień mięso na TOFU W PANKO!
              </div>
            </motion.div>

            {/* PLAN NA SEZON */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="PLAN NA SEZON" rotate="rotate-1" />
              <div className="space-y-5 mt-6 bg-plan-light text-plan-dark p-6 rounded-xl cartoon-border border-4">
                {menuData.seasonal.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="font-display text-xl text-plan-orange mb-1">
                      {item.name} <span className="text-plan-purple text-lg whitespace-nowrap">{item.price} pln</span>
                    </h3>
                    <p className="text-xs font-bold leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* COLUMN 3: NAPOJE, PIWA */}
          <div className="space-y-12">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12">
              {/* NAPOJE ZIMNE */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-end gap-2 mb-6">
                  <SectionHeader title="NAPOJE" rotate="-rotate-1" />
                  <span className="font-display text-2xl bg-white text-plan-orange px-2 py-1 transform rotate-2 cartoon-border border-2 mb-2">zimne</span>
                </div>
                <div className="space-y-5">
                  {menuData.drinksCold.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="font-display text-xl text-plan-orange mb-1">
                        {item.name} {item.price && <span className="text-plan-light text-lg whitespace-nowrap">{item.price} pln</span>}
                      </h3>
                      {item.options ? (
                        <div className="text-sm font-bold leading-tight space-y-1">
                          {item.options.map((opt, i) => (
                            <div key={i}>
                              <span className="text-plan-light text-base whitespace-nowrap">{opt.size} {opt.price} pln</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs font-bold leading-tight">{item.desc}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* NAPOJE GORĄCE */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-end gap-2 mb-6">
                  <SectionHeader title="NAPOJE" rotate="rotate-2" />
                  <span className="font-display text-2xl bg-white text-plan-orange px-2 py-1 transform -rotate-2 cartoon-border border-2 mb-2">gorące</span>
                </div>
                <div className="space-y-4">
                  {menuData.drinksHot.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="font-display text-xl text-plan-orange mb-1">
                        {item.name} <span className="text-plan-light text-lg whitespace-nowrap">{item.price} pln</span>
                      </h3>
                      {item.desc && <p className="text-xs font-bold leading-tight">{item.desc}</p>}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12">
              {/* PIWA */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <SectionHeader title="PIWA" rotate="-rotate-2" />
                <div className="space-y-5 mt-6">
                  {menuData.beers.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="font-display text-xl text-plan-orange mb-1">
                        {item.name} {item.price && <span className="text-plan-light text-lg whitespace-nowrap">{item.price} pln</span>}
                      </h3>
                      {item.options && (
                        <div className="text-sm font-bold leading-tight space-y-1">
                          {item.options.map((opt, i) => (
                            <div key={i}>
                              <span className="text-plan-light text-base whitespace-nowrap">{opt.size} {opt.price} pln</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-2 text-[10px] font-bold opacity-80">
                  *inne smaki? Zapytaj obsługę!
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

