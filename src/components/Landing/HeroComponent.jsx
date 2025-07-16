import React from 'react'
import { LandingHeader, CommonButton } from '../index'
import { GoArrowRight } from 'react-icons/go';
import en from '../../i18/en.json';
import he from '../../i18/he.json';
import tableimage from "../../assets/tableimage.png";

function HeroComponent({ language }) {
  // Language-based text selection
  const t = language === 'he' ? he.hero : en.hero;
  const brandName = (language === 'he' ? he.header : en.header)?.brandName || 'PlusFive';
  const heading1 = t.heading1;
  const heading2 = t.heading2;
  const heading3 = t.heading3;
  const heading4 = t.heading4;
  const subheading = t.subheading;
  const buttonText = t.button;
  const trialInfo = t.trialInfo;
  const logos = t.logos || [
    "Magnolia", "Kintsugi", "StackEd Lab", "Kintsugi", "Warpspeed", "Sisyphus", "Magnolia", "OdeaoLabs", "Magnolia"
  ];

  

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black ">
      {/* Animated grid background */}

      {/* Header (z-10 for above bg) */}
      <div className="relative z-20 w-full">
        <LandingHeader language={language} />
      </div>

      {/* Hero content */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 w-full pt-40 pb-16 px-4">
        {/* Main heading */}
        
          <h1 className="md:block flex flex-wrap justify-center text-4xl md:text-48 lg:text-72 text-center text-white mb-6 leading-tight font-testtiemposfine">
            {heading1} 
            <span className="text-4xl md:text-48 lg:text-72 leading-tight font-testtiemposfine">
            &nbsp;{heading2}&nbsp;
            </span> 
            {heading3}<br className="hidden md:block" /> {heading4}
          </h1>
        {/* Subheading */}
        <p className="text-lg md:text-16 text-center text-white max-w-2xl mb-8">
          {subheading}
        </p>
        {/* Get Started button */}
        <div className="mb-2">
          <CommonButton
            text={buttonText}
            className=" !text-white rounded-lg px-4 py-2 font-bold text-16"
            icon={<GoArrowRight />}
            iconPosition="right"
          />
        </div>
        {/* Trial info */}
        <div className="mb-12">
          <span className="text-white text-14">{trialInfo}</span>
        </div>
        <div className="container mx-auto px-4 flex justify-center">
          <img src={tableimage} alt="tableimage" className="md:w-[60%] w-full object-cover rounded-xl" />
        </div>
      </main>
    </div>
  )
}

export default HeroComponent
