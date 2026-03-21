import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { client } from '../sanityClient';
import { fallbackMenuData } from '../menuData';

const SectionHeader = ({ title, subtitle, rotate = "-rotate-2" }: { title: string, subtitle?: string, rotate?: string }) => {
  if (title === 'SMASHBURGERY') {
    return (
      <div className={`mb-4 flex justify-center transform ${rotate}`}>
        <h2 className="w-fit max-w-full text-center text-3xl md:text-4xl font-display text-plan-light bg-plan-orange px-5 py-2 border-4 border-plan-dark shadow-[4px_4px_0_#2d1642] rounded-xl inline-flex flex-col items-center uppercase leading-none">
          <span className="break-words whitespace-normal">{title}</span>
          {subtitle && <span className="text-base md:text-lg mt-1 text-white break-words whitespace-normal">{subtitle}</span>}
        </h2>
      </div>
    );
  }

  return (
    <div className={`mb-4 flex flex-row justify-center items-center gap-3 transform ${rotate} flex-wrap`}>
      <h2 className="w-fit max-w-full text-center text-3xl md:text-4xl font-display text-plan-light bg-plan-orange px-5 py-2 border-4 border-plan-dark shadow-[4px_4px_0_#2d1642] rounded-xl inline-block uppercase leading-none break-words whitespace-normal">
        {title}
      </h2>
      {subtitle && (
        subtitle.length < 15 ? (
          <div className="w-fit max-w-full text-center bg-white text-plan-orange font-display text-2xl px-4 py-1 rounded-xl border-4 border-plan-dark shadow-[4px_4px_0_#2d1642] transform rotate-3 inline-block leading-none break-words whitespace-normal">
            {subtitle}
          </div>
        ) : (
          <div className="text-center md:text-left text-plan-orange font-display text-sm md:text-base uppercase max-w-[200px] leading-tight whitespace-pre-line">
            {subtitle}
          </div>
        )
      )}
    </div>
  );
};

export default function Menu() {
  const [menuData, setMenuData] = useState<any[]>([]);

  useEffect(() => {
    client.fetch('*[_type == "menu"][0]')
      .then((data) => {
        if (data && data.sections && data.sections.length > 0) {
          setMenuData(data.sections);
        } else {
          setMenuData(fallbackMenuData);
        }
      })
      .catch((err) => {
        console.error("Sanity fetch error in Menu:", err.message);
        setMenuData(fallbackMenuData);
      });
  }, []);

  const displayMenu = menuData.length > 0 ? menuData : fallbackMenuData;

  const renderTableSection = (section: any, idx: number) => (
    <motion.div key={section._key || idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full">
      <SectionHeader title={section.category} subtitle={section.subtitle} rotate={idx % 2 === 0 ? '-rotate-2' : 'rotate-2'} />
      
      {(section.vegeOption || (section.addons && section.addons.length > 0)) && (
        <div className="flex flex-row justify-between items-start mb-1 border-b border-plan-light/20 pb-1">
          {section.vegeOption && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <div className="bg-plan-orange text-plan-dark font-display text-xl px-3 py-0.5 border-2 border-plan-dark shadow-[2px_2px_0_#2d1642] transform -rotate-2">VEGE?</div>
              <div className="text-plan-light font-display text-base sm:text-lg whitespace-pre-line leading-tight">{section.vegeOption}</div>
            </div>
          )}

          {section.addons && section.addons.length > 0 && (
            <div className="text-right text-plan-light font-bold text-[10px] sm:text-xs leading-tight ml-2">
              <div className="text-plan-light font-display text-sm sm:text-base mb-1">+ do środka</div>
              {section.addons.map((addon: any) => (
                <div key={addon._key}><span className="text-plan-orange uppercase">{addon.name}</span> {addon.price}</div>
              ))}
            </div>
          )}
        </div>
      )}

      {section.description && (
        <div className="bg-plan-dark/30 p-3 rounded-xl mb-4 text-plan-orange font-bold text-base">
          {section.description}
        </div>
      )}

      <div className="w-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="px-1 pb-1 pt-0"></th>
              {section.columns?.map((col: string, i: number) => (
                <th key={i} className="px-1 pb-1 pt-0 text-plan-orange font-display text-lg md:text-xl text-center whitespace-pre-line align-top leading-tight">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows?.map((row: any, i: number) => (
              <tr key={row._key || i} className="">
                <td className="py-1 pr-1 md:pr-2">
                  <span className="text-plan-orange font-display text-xl md:text-2xl mr-1 md:mr-2">{row.name}</span>
                  <span className="text-plan-light text-[10px] md:text-xs font-bold">{row.weight}</span>
                </td>
                {row.prices?.map((price: string, j: number) => (
                  <td key={j} className="py-1 px-1 md:px-2 text-center text-plan-light font-display text-lg md:text-xl">
                    {price}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {section.footerNote && (
        <div className="mt-2 text-plan-orange font-bold whitespace-pre-line text-sm">
          {section.footerNote}
        </div>
      )}
    </motion.div>
  );

  const renderListSection = (section: any, idx: number) => {
    const isWhiteBox = section.isWhiteBox;

    return (
      <motion.div key={section._key || idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full">
        <SectionHeader title={section.category} subtitle={section.subtitle} rotate={idx % 2 === 0 ? '-rotate-2' : 'rotate-2'} />
        
        <div className={`${isWhiteBox ? 'bg-white text-plan-dark p-5 rounded-2xl shadow-lg' : ''} space-y-5`}>
          {section.items?.map((item: any, i: number) => (
            <div key={item._key || i}>
              <div className="flex items-baseline gap-2 mb-0.5">
                <h3 className={`font-display text-xl md:text-2xl text-plan-orange`}>{item.name}</h3>
                {item.price && <span className={`${isWhiteBox ? 'text-plan-purple' : 'text-plan-light'} font-display text-lg md:text-xl whitespace-nowrap`}>{item.price}</span>}
              </div>
              
              {item.variants && item.variants.length > 0 && (
                <div className="space-y-0.5 mb-0.5">
                  {item.variants.map((v: any, j: number) => (
                    <div key={v._key || j} className={`${isWhiteBox ? 'text-plan-dark' : 'text-plan-light'} font-display text-base md:text-lg`}>
                      {v.volume} <span className={isWhiteBox ? 'text-plan-purple' : 'text-plan-light'}>{v.price}</span>
                    </div>
                  ))}
                </div>
              )}

              {item.description && <p className={`${isWhiteBox ? 'text-plan-purple' : 'text-plan-light'} text-xs font-bold leading-tight`}>{item.description}</p>}
            </div>
          ))}
        </div>

        {section.zestaw && (
          <div className="mt-5 border-2 border-plan-orange rounded-xl p-3 flex items-center gap-3">
            <div className="bg-plan-light text-plan-orange font-display text-xl px-3 py-1 rounded-xl border-2 border-plan-dark shadow-[2px_2px_0_#2d1642] transform -rotate-2">
              {section.zestaw.title}
            </div>
            <div className="text-plan-light font-bold text-xs whitespace-pre-line leading-tight">
              {section.zestaw.description}
            </div>
          </div>
        )}

        {section.footerNote && (
          <div className="mt-4 text-plan-orange font-bold text-xs">
            {section.footerNote}
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section id="menu" className="py-20 bg-plan-purple text-plan-light relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-10">
          {displayMenu.map((section, idx) => (
            <div key={section._key || idx} className="break-inside-avoid mb-10 w-full inline-block">
              {section._type === 'tableSection' ? renderTableSection(section, idx) : renderListSection(section, idx)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

