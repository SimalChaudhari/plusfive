import React from 'react'
import growthImg from '../../assets/image.png'

function GrowthComponent() {
  return (
    <div className="max-w-7xl mx-auto w-full px-8">
      <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-evenly gap-8 lg:gap-12 py-16 lg:py-28 bg-white dark:bg-customGray rounded-3xl">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 leading-tight">
            The Silent Churn That's
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DF64CC] via-[#FF2380] to-[#FE5D39]">Killing Your Growth</span>
          </h3>
          <p className="text-lg md:text-3xl font-semibold text-gray-900 dark:text-white mb-5">
            30% of your customers will ghost you this year.
          </p>
          <div className="text-black dark:text-white text-base md:text-lg mb-6 space-y-1">
            <p>They won't say goodbye.</p>
            <p>They just stop showing up.</p>
            <p>You chase new leads, spend on ads,</p>
            <p>and bleed money trying to replace customers you already earned.</p>
          </div>
          <p className="font-bold text-black dark:text-white mt-6 text-base md:text-3xl">But what if you could stop churn before it starts?</p>
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
