import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    { author: "Kamil P.", text: "Obsługa uśmiechnięta i życzliwa. Merytorycznie i zwięźle potrafią wytłumaczyć co jest czym w menu. Ogromy plus za świeże warzywa i własne mięso, a nie słynną „kulę mocy” jak w przypadku innych lokali. :) Jedzenie naprawdę smaczne, doprawione. Porcje solidne. Musiałem poprosić o zapakowanie reszty na wynos, bo przeliczyłem się odnośnie swoich możliwości w jedzeniu, a pojeść lubię. No i tu kolejny plus, bo po odgrzaniu w domu na drugi dzień wciąż czuć przyjemny smak własnoręcznie przygotowywanego mięska. Polecam z czystym sumieniem.", rating: 5 },
    { author: "Anna M.", text: "Pojechałem do piri-piri na kebaba o godzinie 21. Wszystkie stoliki zajęte i olbrzymia kolejka. Stojąc w kolejce zacząłem szukać jakiegoś kebaba bliżej miejsca zamieszkania, a już mam dosyć tych kebabów na mieście i tych kul mocy. I tak trafiłem na Plan w Dominowie. Świeże ważywa i mięso. Przyznam szczeże że tak dobrego kebaba dawno nie jadłem. No i obsługa naprawdę super. Troche tego kebaba rozbebłałem widelcem zanim zrobiłem zdjęcie ale był naprawde super podany. Dostałem nawet zupkę zapakowaną do domu żeby spróbować czy dobra. I serio była naprawdę dobra. Barszczyk jak u mamusi. Bardzo polecam to miejsce. Naprawdę warto podjechać.", rating: 5 },
    { author: "Michał K.", text: "Przepyszny burger i lawasz! Idealne proporcje składników i doprawienie. Wszystko mega świeże! Polecam, warto!", rating: 5 },
    { author: "Piotr W.", text: "Miałem okazję zjesc kebaba w tym miejscu. Lokal duży, bardzo ładnie wykończony, obsługa miła, a jedzenie ? .... Kebab którego zamówiłemrozplywal sie w ustach, mięso świetnie doprawione, smak nie znikał wśród surówek. Bardzo fajnie podany. Napewno wrócę by spróbować reszty propozycji. Oby tak dalej!", rating: 5 },
    { author: "Zuzanna L.", text: "Zamówiłem “Danie gigant” i kebab średni z dostawą, otrzymałem zamówienie szybko, porcja naprawdę bardzo duża, podane ładnie, mięso soczyste i smaczne. Napewno będę zamawiać dalej", rating: 5 },
    { author: "Marek S.", text: "Witam serdecznie byłem dzisiaj zjeść kebsa,powiem tak mięsko bardzo pyszne kraftowe nie jakaś kula mocy brawo !!!, obsługa super !!! Podadzą do stołu więc możesz się poczuć w kebab de lux,a o to chodzi żeby klient był zadowolony i wychodzil najedzony, wystrój bardzo ładny schludnie i komfortowo można się poczuć w dobrym kebabie, pozdrawiam szefa i oby trzymał jakość", rating: 5 },
    { author: "Katarzyna B.", text: "Pozdrawiam serdecznie! Pyszne , szybko, miła atmosfera!Polecam!", rating: 5 },
    { author: "Tomasz D.", text: "Kebab kraftowy ! Zamówiliśmy z dowozem kebab gorący i chrupiący , jakość premium … Szybki dowóz", rating: 5 },
    { author: "Ewa J.", text: "Nareszcie dobry kebab smaczne mięso, świeże dodatki i dobre sosy.", rating: 5 },
    { author: "Robert H.", text: "Jedna z najlepszych kebabowni, w jakich jadłem! Mięso świeże, dobrze doprawione i soczyste, warzywa chrupiące, a sosy idealnie zbalansowane. Obsługa bardzo miła i pomocna, a zamówienie zostało przygotowane szybko. Lokal czysty i zadbany. Na pewno będę wracać i polecam każdemu, kto ma ochotę na porządnego kebaba!", rating: 5 },
    { author: "Magdalena Z.", text: "klimat bardzo fajny obsługa bardzo miła jedzenie mega smakowało całej rodzinie ja tam nie lubię próbować nowych rzeczy ale serio mega polecam kidosmini POLECAM!", rating: 5 },
    { author: "Grzegorz C.", text: "Byliśmy w tym lokalu całą rodziną i bardzo nam się podobało. Jedzenie jest bardzo smaczne, ceny są przystępne, a personel i niezwykle mili i przyjemni. Polecam to miejsce - na pewno wrócimy tam jeszcze nieraz", rating: 5 },
    { author: "Joanna N.", text: "Pyszne kebaby,domowe zupki,miła atmosfera.Moje dzieci wychodząc,za każdym razem mówią, że to najlepsza restauracja w jakiej były myślę że to ze względu na jedzenie,ale też kącik dla dzieci o który również tu zadbano polecamy!", rating: 5 },
    { author: "Bartosz R.", text: "Jedzenie jest niesamowicie smaczne, ceny bardzo przyjemne, obsługa na najwyższym poziomie. Polecam, wszystko nam się bardzo podobało", rating: 5 },
    { author: "Aleksandra M.", text: "Polecam z całego serca, świeże warzywa, kraftowe mięso, duże porcje, ceny przystępne, w piri piri małe porcje, ceny kosmos, milion sosów które jadą chemią, a tutaj macie sosy robione własnoręcznie co czuć od pierwszej chwili,wszystko jest zachowane w proporcjach takich jak powinno być(cena smak jakoś) plus w burgerach pyszna bułka z sezamem, a nie chamski dmuchawiec marketowy. Obsługa na najwyższym poziomie, nie ma stania i zamawiania przy barze jak w większości nijakich śmierdzących kebabach, tutaj jesteś traktowany jak w restauracji, jest pachnąco czysto i bardzo przytulnie, obsługa podchodzi do stolika, polecam zarówno na szybkie jedzenie jak i na wypad ze znajomymi.", rating: 5 },
    { author: "Jakub T.", text: "Odwiedziłam to bistro pierwszy raz i ogólnie mam pozytywne wrażenia. Lokal jest niewielki, ale czysty i schludny. Zamówiłam kebab w picie z mieszanym mięsem i ostrym sosem. Mięso było świeże, dobrze doprawione i nieprzesuszone, co niestety często się zdarza w podobnych miejscach. Warzywa chrupiące, sałata i pomidory wyglądały na świeże, a kapusta była dobrze doprawiona. Na plus również sos – faktycznie ostry, ale z wyczuwalnym smakiem, a nie tylko 'palący'. Oprócz jedzenia bardzo pozytywnie zaskoczyła mnie obsługa. Kelnerki są naprawdę miłe, uśmiechnięte i pomocne. Czas oczekiwania około 10 minut mimo kilku osób w kolejce, więc całkiem sprawnie. Porcja solidna Ceny raczej standardowe jak na obecne realia. Jeszcze na pewno wrócę!", rating: 5 }
  ];

  // Duplicate reviews to create seamless loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="opinie" className="py-20 bg-plan-orange relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
        <span className="font-display text-[20rem] text-plan-dark whitespace-nowrap transform -rotate-12">
          MNIAM MNIAM
        </span>
      </div>

      <div className="max-w-[100vw] mx-auto relative z-10">
        <div className="text-center mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-display text-plan-light mb-4 inline-block bg-plan-purple px-6 md:px-8 py-2 cartoon-border transform rotate-2"
          >
            CO MÓWIĄ INNI?
          </motion.h2>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden flex bg-plan-dark/5 py-8 transform -rotate-1">
          <div className="animate-marquee flex w-max">
            {duplicatedReviews.map((review, idx) => (
              <div
                key={idx}
                className={`w-[280px] sm:w-[350px] md:w-[450px] mx-3 md:mx-4 cartoon-border bg-plan-light p-6 md:p-8 flex flex-col justify-between whitespace-normal shrink-0 transform ${idx % 2 === 0 ? '-rotate-2' : 'rotate-2'} hover:scale-105 transition-transform duration-300`}
              >
                <div>
                  <div className="flex mb-4 text-plan-orange">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={24} />
                    ))}
                  </div>
                  <p className="text-base md:text-lg font-bold text-plan-dark mb-4 md:mb-6 italic line-clamp-4">"{review.text}"</p>
                </div>
                <div className="flex items-center gap-4 border-t-2 border-plan-dark/10 pt-4">
                  <div className="w-12 h-12 bg-plan-purple rounded-full flex items-center justify-center text-plan-light font-display text-xl border-2 border-plan-dark shrink-0">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-xl text-plan-dark">{review.author}</p>
                    <p className="text-sm font-bold text-gray-500">Opinia z Google</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promo Banner */}
        <div className="mt-12 max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.a
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.google.com/maps/place/PLAN+Street+Food/@51.1706938,22.5946688,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x4722f90ad30c5d95:0x157ac9009370d571!2sPLAN+Street+Food!8m2!3d51.1706905!4d22.5972437!16s%2Fg%2F11yvcwp5jn!3m5!1s0x4722f90ad30c5d95:0x157ac9009370d571!8m2!3d51.1706905!4d22.5972437!16s%2Fg%2F11yvcwp5jn?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cartoon-border bg-plan-purple text-plan-light font-display text-xl sm:text-2xl md:text-4xl px-8 py-4 md:px-12 md:py-6 shadow-[6px_6px_0_#2d1642] hover:bg-plan-dark transition-colors"
          >
            ZOBACZ WIĘCEJ OPINII ⭐⭐⭐⭐⭐
          </motion.a>
        </div>
      </div>
    </section>
  );
}
