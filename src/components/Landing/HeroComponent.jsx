import React from 'react'
import { LandingHeader, SquaresAnim } from '../index'
import CommonButton from '../commonComponent/CommonButton';
import { GoArrowRight } from 'react-icons/go';

function HeroComponent() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-white rounded-b-[7rem]">
      {/* Animated grid background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <SquaresAnim speed={0.5} squareSize={50} direction='down' borderColor='#ececec' hoverFillColor='#f3e8ff' />
      </div>

      {/* Header (z-10 for above bg) */}
      <div className="relative z-20 w-full">
        <LandingHeader />
      </div>

      {/* Hero content */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 w-full pt-40 pb-16 px-4">
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 mb-6 leading-tight">
          You&apos;re Bleeding <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Revenue</span> Without<br className="hidden md:block" /> Even Knowing It
        </h1>
        {/* Subheading */}
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mb-8">
          Plusfive is your AI retention agent that spots at-risk customers before they churn and wins them back automatically, turning hidden churn patterns into automated win-back campaigns.
        </p>
        {/* Get Started button */}
        <div className="mb-2">

          <CommonButton
            text="Start Free Trial"
            className=" !text-white rounded-lg px-4 py-2 font-bold text-xl"
            icon={<GoArrowRight />}
            iconPosition="right"
          />
        </div>
        {/* Trial info */}
        <div className="mb-12">
          <span className="text-gray-500 text-sm">14-day trial – no credit card.</span>
        </div>
        {/* Trusted logos row */}
        <div className="w-full max-w-5xl flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-90">
          {/* Example logos and names, use placeholder icons/text */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">∞</span>
            <span className="font-semibold text-gray-800">Magnolia</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">★</span>
            <span className="font-semibold text-gray-800">Kintsugi</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">▦</span>
            <span className="font-semibold text-gray-800">StackEd Lab</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">★</span>
            <span className="font-semibold text-gray-800">Kintsugi</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⎋</span>
            <span className="font-semibold text-gray-800">Warpspeed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">▦</span>
            <span className="font-semibold text-gray-800">Sisyphus</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">∞</span>
            <span className="font-semibold text-gray-800">Magnolia</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">▦</span>
            <span className="font-semibold text-gray-800">OdeaoLabs</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">∞</span>
            <span className="font-semibold text-gray-800">Magnolia</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeroComponent
