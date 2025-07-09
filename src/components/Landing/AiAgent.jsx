import React from 'react'
import aiImg from '../../assets/Aiimage.png'
import { GoArrowRight } from 'react-icons/go'
import { CommonButton } from '../index'

function AiAgent() {
  return (
    <div className="max-w-7xl mx-auto w-full px-8">
      <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-evenly gap-8 lg:gap-12 py-16 lg:py-28 bg-white dark:bg-customGray rounded-3xl">
        {/* Left: Image Card */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="rounded-3xl shadow-2xl w-full max-w-md">
            <img src={aiImg} alt="AI Agent" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>
        </div>
        {/* Right: Text Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            Meet the AI Agent That Turns 
            Lost <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DF64CC] via-[#FF2380] to-[#FE5D39]">Customers</span> into Cash
          </h2>
          <p className="text-gray-700 dark:text-white text-base md:text-lg mb-8">
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
    </div>
  )
}

export default AiAgent
