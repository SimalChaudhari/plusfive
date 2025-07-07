import React from 'react'
import { FaTimes, FaCheck } from 'react-icons/fa'
import CommonButton from '../commonComponent/CommonButton'

function BeforeVsAfter() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-2 md:px-0">
      {/* Background card */}
      <div className="w-full max-w-6xl mx-auto rounded-3xl shadow-2xl bg-gradient-to-br from-[#181926] via-[#23243a] to-[#181926] p-2 md:p-8 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-4 mt-6">Before Vs After</h2>
        <p className="text-center text-gray-300 max-w-2xl mb-10 mx-auto">
          See how businesses transform their retention strategy from reactive guesswork to proactive AI-powered growth.
        </p>
        {/* Comparison Cards */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
          {/* Before Card */}
          <div className="flex-1 bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 md:p-8 backdrop-blur-md min-w-[260px] max-w-md">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-100">
                <FaTimes className="text-red-500 text-2xl" />
              </span>
              <span className="font-bold text-lg text-white">Before Plusfive</span>
            </div>
            <div className="text-red-400 font-semibold mb-4 ml-11">The struggle is real</div>
            <ul className="space-y-3 ml-11">
              <li className="flex items-center gap-2 text-white/90"><FaTimes className="text-red-400" /> No idea who&apos;s about to leave</li>
              <li className="flex items-center gap-2 text-white/90"><FaTimes className="text-red-400" /> Lost clients = lost revenue</li>
              <li className="flex items-center gap-2 text-white/90"><FaTimes className="text-red-400" /> Spending $ on ads</li>
              <li className="flex items-center gap-2 text-white/90"><FaTimes className="text-red-400" /> Guessing customer satisfaction</li>
              <li className="flex items-center gap-2 text-white/90"><FaTimes className="text-red-400" /> Juggling multiple tools</li>
            </ul>
          </div>
          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
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
          </div>
          {/* After Card */}
          <div className="flex-1 bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 md:p-8 backdrop-blur-md min-w-[260px] max-w-md">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-100">
                <FaCheck className="text-green-500 text-2xl" />
              </span>
              <span className="font-bold text-lg text-white">After Plusfive</span>
            </div>
            <div className="text-green-400 font-semibold mb-4 ml-11">Retention on autopilot</div>
            <ul className="space-y-3 ml-11">
              <li className="flex items-center gap-2 text-white/90"><FaCheck className="text-green-400" /> Instantly flagged by AI</li>
              <li className="flex items-center gap-2 text-white/90"><FaCheck className="text-green-400" /> Recovered with auto-messaging</li>
              <li className="flex items-center gap-2 text-white/90"><FaCheck className="text-green-400" /> Growing via retention</li>
              <li className="flex items-center gap-2 text-white/90"><FaCheck className="text-green-400" /> Scored + tracked automatically</li>
              <li className="flex items-center gap-2 text-white/90"><FaCheck className="text-green-400" /> All-in-one retention engine</li>
            </ul>
          </div>
        </div>
        {/* Button */}
        <CommonButton
          text="Start Your Transformation"
          className="!text-white rounded-lg px-8 py-3 font-bold text-lg mx-auto mt-2"
        />
      </div>
    </section>
  )
}

export default BeforeVsAfter
