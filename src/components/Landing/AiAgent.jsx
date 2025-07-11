import React from 'react'
import aiImg from '../../assets/AiBg.svg'
import { GoArrowRight } from 'react-icons/go'
import { CommonButton } from '../index'
import en from '../../i18/en.json'
import he from '../../i18/he.json'

function AiAgent({ language }) {
  const t = language === 'he' ? he.aiAgent : en.aiAgent;
  return (
    <div className="max-w-7xl mx-auto w-full px-8">
      <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-evenly gap-8 lg:gap-12 py-16 lg:py-28 bg-white dark:bg-customGray rounded-3xl">
        {/* Left: Image Card */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="rounded-3xl w-full max-w-md">
            <img src={aiImg} alt="AI Agent" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
        {/* Right: Text Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
          <h2 className="text-3xl md:text-48 font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            {t.heading1} 
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DF64CC] via-[#FF2380] to-[#FE5D39]"> {t.heading2} </span> 
            {t.heading3}
          </h2>
          <p className="text-gray-700 dark:text-white text-base md:text-16 mb-8">
            {t.description}
          </p>
          <CommonButton
            text={t.button}
            icon={<GoArrowRight />}
            iconPosition="right"
            className="!text-white rounded-lg px-6 py-3 font-bold text-16"
          />
        </div>
      </section>
    </div>
  )
}

export default AiAgent
