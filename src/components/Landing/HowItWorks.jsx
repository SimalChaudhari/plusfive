import React from 'react'
import QRImage from '../../assets/Frame.svg';
import en from '../../i18/en.json';
import he from '../../i18/he.json';

function HowItWorks({ language }) {
  const t = language === 'he' ? he.howItWorks : en.howItWorks;
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-transparent px-8 py-12 md:py-24">
      {/* Heading */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center mb-12">
        <h2 className="text-4xl md:text-[48px] font-extrabold text-gray-900 dark:text-white text-center mb-2 tracking-tight">{t.heading}</h2>
        <p className="text-lg md:text-[16px] text-gray-500 dark:text-gray-300 text-center font-medium mb-2">{t.subheading}</p>
      </div>
      {/* Content Row */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        {/* Left: Steps */}
        <div className="flex-1 flex flex-col justify-center relative max-w-xl w-full min-w-[320px]">
          {/* Vertical pink line */}
          <div className="absolute left-5 top-8 bottom-8 w-1 bg-gradient-to-b from-pink-400 to-pink-200 rounded-full z-0 hidden md:block" />
          <ol className="relative z-10 flex flex-col gap-10 md:gap-12">
            {t.steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-5 relative">
                {/* Numbered circle */}
                <div className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-bold text-xl border-4 shadow-sm pt-[0.4rem] ${idx === 0 ? 'bg-gradient-to-br from-pink-500 to-pink-400 text-white border-pink-200' : 'bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-neutral-700'}`}>{idx + 1}</div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-lg md:text-[20px] mb-1 leading-snug">
                    {step.title}
                  </div>
                  <div className="text-gray-500 dark:text-gray-300 text-base md:text-[16px] leading-snug">
                    {step.desc}
                  </div>
                </div>
              </li>
            ))}
          </ol>
          {/* Pink text at the end */}
          <div className="mt-10 text-pink-500 font-extrabold text-base md:text-[18px]">{t.tagline}</div>
        </div>
        {/* Right: Chart Card */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative w-full max-w-md rounded-3xl shadow-2xl flex flex-col items-center">
            {/* Chart Image */}
            <img
              src={QRImage}
              alt="QR Code Chart"
              className="w-full h-auto rounded-2xl shadow-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
