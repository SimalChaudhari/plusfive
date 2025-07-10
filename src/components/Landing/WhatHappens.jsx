import React from 'react'
import { FaUserFriends, FaCommentDots, FaChartLine, FaUserCheck, FaChartArea, FaBell, FaBullhorn, FaLink } from 'react-icons/fa'
import en from '../../i18/en.json'
import he from '../../i18/he.json'

const icons = [
  <FaUserFriends className="text-pink-400 text-xl" />,
  <FaCommentDots className="text-pink-400 text-xl" />,
  <FaChartLine className="text-pink-400 text-xl" />,
  <FaUserCheck className="text-pink-400 text-xl" />,
  <FaChartArea className="text-pink-400 text-xl" />,
  <FaBell className="text-pink-400 text-xl" />,
  <FaBullhorn className="text-pink-400 text-xl" />,
  <FaLink className="text-pink-400 text-xl" />
];

function WhatHappens({ language }) {
  const t = language === 'he' ? he.whatHappens : en.whatHappens;
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-8 md:px-0 bg-white dark:bg-customGray">
      {/* Heading */}
      <h2 className="text-3xl md:text-[48px] font-extrabold text-center text-gray-900 dark:text-white mb-4">
        {t.heading1} <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DF64CC] via-[#FF2380] to-[#FE5D39]">{t.heading2}</span> {t.heading3}
        <br className="hidden md:block" /> {t.heading4}
      </h2>
      {/* Subheading */}
      <p className="text-center text-gray-500 dark:text-gray-300 max-w-2xl mb-10 mx-auto text-[16px]">
        {t.subheading}
      </p>
      {/* Table/Card */}
      <div className="w-full overflow-x-auto mx-auto my-8">
        <div className="min-w-[700px] max-w-4xl bg-white dark:bg-customBlack rounded-2xl shadow-lg border border-gray-200 dark:border-customBorderColor mx-auto p-6 md:p-8">
          {/* Header Row */}
          <div className="grid grid-cols-2 gap-0 relative bg-transparent">
            <div className="font-bold text-[20px] dark:bg-customGray bg-gray-900 text-white px-6 py-4 w-full block rounded-l-2xl ">{language === 'he' ? 'מה תקבל' : 'What You Get'}</div>
            {/* Divider सिर्फ md+ पर ही render हो */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#606060] rounded"></div>
            <div className="font-bold text-[20px] dark:bg-customGray bg-gray-900 text-white px-6 py-4 w-full block rounded-r-2xl ">{language === 'he' ? 'איך זה עובד' : 'How It Works'}</div>
          </div>
          {/* Divider below header */}
          {/* <div className="w-full border-b-2 border-gray-200"></div> */}
          <div>
            {t.rows.map((row, i) => (
              <div key={i} className={`grid grid-cols-2 items-center border-t border-gray-100 dark:border-customBorderColor bg-white dark:bg-customBlack relative` + (i === t.rows.length - 1 ? ' rounded-b-2xl' : '')}>
                <div className="flex items-center gap-4 px-6 py-5">
                  <span className="bg-pink-50 dark:bg-customGray2 rounded-lg p-2 flex items-center justify-center w-10 h-10">{icons[i]}</span>
                  <span className="text-gray-900 dark:text-white text-base md:text-[18px] font-medium">{row.text}</span>
                </div>
                {/* Vertical divider for each row - only on md+ */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 dark:bg-customBorderColor"></div>
                <div className="px-6 py-5 text-gray-700 dark:text-gray-300 text-base md:text-[18px]">{row.how}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatHappens