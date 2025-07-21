import React from 'react'
import growthImg from '../../assets/Content_Container.png'
import en from '../../i18/en.json'
import he from '../../i18/he.json'
import { CommonGradientText } from '../index';

function GrowthComponent({ language }) {
  const t = language === 'he' ? he.growth : en.growth;
  return (
    <div className=" mx-auto w-full">
      <section className="w-full flex flex-col lg:flex-row items-center justify-evenly md:py-[64px] py-8 md:px-[80px] px-8 md:gap-[114px] gap-10 bg-white dark:bg-customGray rounded-3xl">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-48 font-extrabold text-customLightTextColor dark:text-white font-testtiemposfine">
            {t.heading}
          </h2>
          <h3 className="text-3xl md:text-48 font-extrabold mb-6">

            <CommonGradientText className="text-3xl md:text-48 font-extrabold  font-testtiemposfine">
              {t.heading2}
            </CommonGradientText>
          </h3>
          <p className="text-lg md:text-20 font-semibold text-customLightTextColor dark:text-white mb-5 font-aktivgrotesk">
            {t.subheading}
          </p>
          <div className="text-customLightTextColor dark:text-white text-base md:text-18 mb-6 space-y-1 ">
            {t.points && t.points.map((point, idx) => (
              <p key={idx} className="font-aktivgrotesk">{point}</p>
            ))}
          </div>
          <p className="font-bold text-customBoldTextColor dark:text-white mt-6 text-base md:text-18 font-aktivgrotesk">{t.cta}</p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="rounded-3xl ">
            <img src={growthImg} alt="Growth Chart" className="md:w-[704px] md:w[600px] w-full h-auto rounded-2xl" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default GrowthComponent
