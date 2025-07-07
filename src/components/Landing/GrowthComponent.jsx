import React from 'react'
import growthImg from '../../assets/image.png'

function GrowthComponent() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-24 px-4 md:px-12 lg:px-24 py-16 lg:py-28 bg-white rounded-3xl">
      {/* Left: Text Content */}
      <div className="flex-1 max-w-2xl lg:pl-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
          The Silent Churn That&apos;s
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Killing Your Growth</span>
        </h3>
        <p className="text-lg md:text-xl font-bold text-gray-900 mb-5">
          30% of your customers will ghost you this year.
        </p>
        <div className="text-gray-700 text-base md:text-lg mb-6 space-y-1">
          <p>They won&apos;t say goodbye.</p>
          <p>They just stop showing up.</p>
          <p>You chase new leads, spend on ads,</p>
          <p>and bleed money trying to replace customers you already earned.</p>
        </div>
        <p className="font-bold text-gray-900 mt-6 text-base md:text-lg">But what if you could stop churn before it starts?</p>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="rounded-3xl shadow-2xl ">
          <img src={growthImg} alt="Growth Chart" className="w-full h-auto rounded-2xl shadow-lg" />
        </div>
      </div>
    </section>
  )
}

export default GrowthComponent
