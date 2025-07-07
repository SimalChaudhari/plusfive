import React from 'react'
import aiImg from '../../assets/Aiimage.png'
import { GoArrowRight } from 'react-icons/go'
import CommonButton from '../commonComponent/CommonButton'

function AiAgent() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-24 px-4 md:px-12 lg:px-24 py-16 lg:py-28 bg-white rounded-3xl">
      {/* Left: Image Card */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="rounded-3xl shadow-2xl w-full max-w-md">
          <img src={aiImg} alt="AI Agent" className="w-full h-auto rounded-2xl shadow-lg" />
        </div>
      </div>
      {/* Right: Text Content */}
      <div className="flex-1 max-w-2xl lg:pr-8 flex flex-col items-start justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Meet the AI Agent That Turns<br />
          Lost <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Customers</span> into Cash
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-8">
          Plusfive spots silent, unhappy, or inactive customers before they churn, then sends powerful campaign flows that win them back automatically. Built on real data, 3000+ tested variations, hundreds of businesses, thousands of customer interactions. And it gets smarter every day, optimizing itself based on your industry's live behavior.
        </p>
        <CommonButton
          text="Get Started"
          icon={<GoArrowRight />}
          iconPosition="right"
          className="!text-white rounded-lg px-6 py-3 font-bold text-lg"
        />
      </div>
    </section>
  )
}

export default AiAgent
