import React from 'react'
import { HiOutlineUserGroup, HiOutlineCurrencyDollar, HiOutlineClipboardCheck } from 'react-icons/hi';
import { FaCheckCircle, FaTrophy, FaRegFileAlt } from 'react-icons/fa';
import en from '../../i18/en.json';
import he from '../../i18/he.json';

const statIcons = [
  <HiOutlineUserGroup className="text-pink-400 text-3xl" />, // user icon
  <HiOutlineCurrencyDollar className="text-pink-400 text-3xl" />, // dollar icon
  <HiOutlineClipboardCheck className="text-pink-400 text-3xl" />, // check icon
];

const bottomIcons = [
  <FaCheckCircle className="text-green-500 text-lg mr-2" />,
  <FaTrophy className="text-orange-500 text-lg mr-2" />,
  <FaRegFileAlt className="text-indigo-500 text-lg mr-2" />,
];

function Trusted({ language }) {
  const t = language === 'he' ? he.trusted : en.trusted;
  return (
    <section className="w-full bg-transparent py-16 md:py-24 flex flex-col items-center justify-center px-8">
      {/* Heading */}
      <h2 className="text-4xl md:text-[48px] font-extrabold text-gray-900 dark:text-white text-center mb-4 tracking-tight">{t.heading}</h2>
      <p className="text-lg md:text-[16px] text-gray-500 dark:text-gray-300 text-center font-medium mb-12 max-w-2xl">
        {t.subheading}
      </p>
      {/* Stat Cards */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 px-2">
        {t.stats.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-gray-100 dark:bg-neutral-800 rounded-2xl shadow-lg p-8 md:p-10 min-h-[260px] transition-all border border-gray-100 dark:border-neutral-700"
          >
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-pink-50 dark:bg-neutral-700">
              {statIcons[idx]}
            </div>
            <div className="text-3xl md:text-[48px] font-extrabold text-gray-900 dark:text-white mb-2">{item.stat}</div>
            <div className="text-[20px] text-gray-800 dark:text-gray-200 mb-1 text-center">{item.label}</div>
            <div className="text-[14px] text-gray-500 dark:text-gray-200 mb-1 text-center">{item.desc}</div>
            {/* Optional: description can be added in i18n if needed */}
          </div>
        ))}
      </div>
      {/* Bottom Row (optional, can use t.stats or keep as is) */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-base md:text-lg font-semibold text-gray-700 dark:text-gray-200 mt-2">
        {t.stats.map((item, idx) => (
          <React.Fragment key={item.label}>
            <span className="flex items-center text-[18px]">{bottomIcons[idx]}{item.label2}</span>
            {idx < t.stats.length - 1 && (
              <span className="mx-2 text-gray-300 dark:text-gray-600 text-2xl select-none">&bull;</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Trusted
