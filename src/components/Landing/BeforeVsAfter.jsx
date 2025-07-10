import React from 'react'
import { FaTimes, FaCheck } from 'react-icons/fa'
import { CommonButton } from '../index'
import en from '../../i18/en.json'
import he from '../../i18/he.json'
import bgvs from "../../assets/Bgvs.png"; // <-- Image import
import arrow from "../../assets/ArrowIcon.svg"; // <-- Image import
import { IoClose } from 'react-icons/io5'
import { FiCheck } from 'react-icons/fi'
import { GoArrowRight } from 'react-icons/go'

function BeforeVsAfter({ language }) {
  const t = language === 'he' ? he.beforeVsAfter : en.beforeVsAfter;
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-0 md:px-0">
      {/* Background card */}
      <div
        className="w-full max-w-6xl mx-auto rounded-3xl shadow-2xl p-8 flex flex-col items-center"
        style={{
          backgroundImage: `url(${bgvs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#181926" // fallback color, optional
        }}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-[48px] font-extrabold text-center text-white mb-4 mt-6">{t.heading}</h2>
        <p className="text-center text-gray-300 max-w-lg mb-10 mx-auto text-[16px]">
          {t.subheading}
        </p>
        {/* Comparison Cards */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
          {/* Before Card */}
          <div className="flex-1 bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 md:p-8 backdrop-blur-md min-w-[260px] max-w-md">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-100">
                <IoClose className="text-red-500 text-xl" />
              </span>
              <span className="font-bold text-[24px] text-white">{t.beforeTitle}</span>
            </div>
            <div className="text-red-400 font-semibold my-4 text-[18px]">{t.beforeTagline}</div>
            <ul className="space-y-3">
              {t.beforeList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-white/90 text-[18px]"><FaTimes className="text-red-400" /> {item}</li>
              ))}
            </ul>
          </div>
          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
            {/*
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="arrowGradient" x1="0" y1="24" x2="48" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#DF64CC" />
                  <stop offset="1" stopColor="#FE5D39" />
                </linearGradient>
              </defs>
              <circle cx="24" cy="24" r="24" fill="#23243a" />
              <path d="M16 24H32M32 24L27 19M32 24L27 29" stroke="url(#arrowGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          */}
            <img src={arrow} alt="arrow" className="w-10 h-10" />
          </div>
          {/* After Card */}
          <div className="flex-1 bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 md:p-8 backdrop-blur-md min-w-[260px] max-w-md">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-100">
                <FiCheck className="text-green-500 text-lg" />
              </span>
              <span className="font-bold text-[24px] text-white">{t.afterTitle}</span>
            </div>
            <div className="text-green-400 font-semibold my-4 text-[18px]">{t.afterTagline}</div>
            <ul className="space-y-3 ">
              {t.afterList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-white/90 text-[18px]"><FiCheck className="text-green-400" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Button */}
        <CommonButton
          text={t.button}
          className="!text-white rounded-lg px-8 py-3 font-bold text-[24px] mx-auto mt-2"
          icon={<GoArrowRight />}
          iconPosition="right"
        />
      </div>
    </section>
  )
}

export default BeforeVsAfter
