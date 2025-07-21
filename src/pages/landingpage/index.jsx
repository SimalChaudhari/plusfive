import React, { useState, useEffect } from 'react'
import { HeroComponent, GrowthComponent, AiAgent, WhatHappens, BeforeVsAfter, HowItWorks, Trusted, PricingPlans, RealResults, FAQ, LandingFooter, Banner } from '../../components'
import { TbMessageCircleFilled } from "react-icons/tb";

function LandingPage({ language }) {
  const [showSupportButton, setShowSupportButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.5; // 50vh
      
      setShowSupportButton(scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ab aapko language prop mil gaya
  return (
    <div>
      <div className='bg-white dark:bg-customGray'>
      <div className="
        absolute inset-0
        bg-[radial-gradient(ellipse_at_left_bottom,_var(--tw-gradient-stops))]
        from-pink-100/20 via-white/60 to-purple-100/60
        dark:from-[#232136]/80 dark:via-[#232136]/60 dark:to-[#232136]/0
        pointer-events-none
      " />
        <HeroComponent language={language} />
        <GrowthComponent language={language} /> 
        <AiAgent language={language} />
        <WhatHappens language={language} />
        <BeforeVsAfter language={language} />
        {/*
          */}
        <HowItWorks language={language} />
        <Trusted language={language} />
        <PricingPlans language={language} />
        <RealResults language={language} />
        <FAQ language={language} />
        <Banner language={language} />
        <LandingFooter language={language} />
        
        {/* Get Support Button - Fixed Position */}
        {showSupportButton && (
          <button className="fixed bottom-6 right-6 w-[45px] h-[45px] bg-white rounded-full flex items-center justify-start cursor-pointer  overflow-hidden transition-all duration-300 shadow-lg z-50 hover:w-[150px] hover:rounded-[40px] group">
            <div className="w-full transition-all duration-300 flex items-center justify-center group-hover:w-[30%] group-hover:pl-5">
              <TbMessageCircleFilled className="w-7 h-7 " />
            </div>
            <div className="absolute right-0 w-0 opacity-0 text-black text-lg whitespace-nowrap transition-all duration-300 group-hover:opacity-100 group-hover:w-[70%] group-hover:pr-2">
              Get Support
            </div>
          </button>
        )}
      </div>
    </div>  
  )
}

export default LandingPage
