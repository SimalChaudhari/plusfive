import React from 'react'
import UserIcon from '../../assets/User.svg';
import DollarIcon from '../../assets/Doller.svg';
import FileCheckIcon from '../../assets/FileCheck.svg';
import VerifyIcon from '../../assets/VerifyIcon.svg';
import TrophyIcon from '../../assets/TrophyIcon.svg';
import FileIcon from '../../assets/FileIcon.svg';
import en from '../../i18/en.json';
import he from '../../i18/he.json';

const statIcons = [
  <img src={UserIcon} alt="User Icon" className="w-[64px] h-[64px]" />,
  <img src={DollarIcon} alt="Dollar Icon" className="w-[64px] h-[64px]" />,
  <img src={FileCheckIcon} alt="File Check Icon" className="w-[64px] h-[64px]" />,
];

const bottomIcons = [
  <img src={VerifyIcon} alt="Verify Icon" className="w-[24px] h-[24px] mr-2" />,
  <img src={TrophyIcon} alt="Trophy Icon" className="w-[24px] h-[24px] mr-2" />,
  <img src={FileIcon} alt="File Icon" className="w-[24px] h-[24px] mr-2" />,
];

function Trusted({ language }) {
  const t = language === 'he' ? he.trusted : en.trusted;
  return (
    <section className="w-full bg-transparent flex flex-col items-center justify-center md:py-[64px] py-8 md:px-[80px] px-8">
      <div className='flex flex-col items-center justify-center gap-[64px]'>

        <div className='flex flex-col items-center justify-center gap-[16px]'>
          {/* Heading */}
          <h2 className="text-4xl md:text-48 font-extrabold text-customLightTextColor dark:text-white text-center tracking-tight">{t.heading}</h2>
          <p className="text-lg md:text-16 text-customBoldTextColor dark:text-gray-300 text-center font-medium  max-w-[556px]">
            {t.subheading}
          </p>
        </div>

        <div className='flex flex-col items-center justify-center gap-[32px]'>
          {/* Stat Cards */}
          <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[24px] px-2">
            {t.stats.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center bg-gray-100 dark:bg-neutral-800 rounded-[16px] p-8 md:p-10 min-h-[260px] transition-all dark:border-neutral-700  md:px-[43px] md:py-[43px] md:flex md:flex-col md:justify-center md:items-center md:gap-[10px] md:rounded-2xl md:bg-gradient-to-br md:from-[#FCFBF8] md:to-[#F3F4F6]"
                style={{
                  borderRadius: 'var(--radius-2xl, 16px)',
                  background: 'linear-gradient(135deg, #FCFBF8 0%, #F3F4F6 100%)'
                }}
              >
                <div className='flex flex-col items-center justify-center gap-[24px]'>

                  <div className="mb-6 flex items-center justify-center">
                    {statIcons[idx]}
                  </div>

                  <div className='flex flex-col items-center justify-center gap-[16px]'>
                    <div className="text-3xl md:text-48 font-extrabold text-customLightTextColor dark:text-white">{item.stat}</div>
                    
                    <div className='flex flex-col items-center justify-center gap-[16px]'>
                    <div className="text-20 text-customLightTextColor dark:text-gray-200 text-center">{item.label}</div>
                    <div className="text-14 text-customBoldTextColor dark:text-gray-200 text-center">{item.desc}</div>
                    </div>
                  </div>

                </div>
                {/* Optional: description can be added in i18n if needed */}
              </div>
            ))}
          </div>
          {/* Bottom Row (optional, can use t.stats or keep as is) */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-[24px] text-base md:text-lg font-semibold text-gray-700 dark:text-gray-200">
            {t.stats.map((item, idx) => (
              <React.Fragment key={item.label}>
                <span className="flex items-center text-18 gap-[8px]">{bottomIcons[idx]}{item.label2}</span>
                {idx < t.stats.length - 1 && (
                  <span className="mx-2 text-gray-300 dark:text-gray-600 text-2xl select-none">&bull;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Trusted
