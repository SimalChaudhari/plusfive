import React from 'react'
import growthImg from '../../assets/Content_Container.png'
import en from '../../i18/en.json'
import he from '../../i18/he.json'
import { CommonGradientText } from '../index';

function GrowthComponent({ language }) {
  const t = language === 'he' ? he.growth : en.growth;
  return (
    <div className="max-w-7xl mx-auto w-full px-8">
      <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-evenly gap-8 lg:gap-12 py-16 lg:py-28 bg-white dark:bg-customGray rounded-3xl">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-48 font-extrabold text-gray-900 dark:text-white leading-tight">
            {t.heading}
          </h2>
          <h3 className="text-3xl md:text-48 font-extrabold mb-6 leading-tight">

            <CommonGradientText className="text-3xl md:text-48 font-extrabold leading-tight">
              {t.heading2}
            </CommonGradientText>
          </h3>
          <p className="text-lg md:text-20 font-semibold text-gray-900 dark:text-white mb-5">
            {t.subheading}
          </p>
          <div className="text-black dark:text-white text-base md:text-18 mb-6 space-y-1">
            {t.points && t.points.map((point, idx) => (
              <p key={idx}>{point}</p>
            ))}
          </div>
          <p className="font-bold text-black dark:text-white mt-6 text-base md:text-18">{t.cta}</p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="rounded-3xl shadow-2xl ">
            <img src={growthImg} alt="Growth Chart" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default GrowthComponent
