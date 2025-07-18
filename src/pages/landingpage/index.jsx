import React from 'react'
import { HeroComponent, GrowthComponent, AiAgent, WhatHappens, BeforeVsAfter, HowItWorks, Trusted, PricingPlans, RealResults, FAQ, LandingFooter, Banner } from '../../components'

function LandingPage({ language }) {
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
      </div>
    </div>
  )
}

export default LandingPage
