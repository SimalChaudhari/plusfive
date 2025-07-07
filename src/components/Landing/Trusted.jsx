import React from 'react'
import { HiOutlineUserGroup, HiOutlineCurrencyDollar, HiOutlineClipboardCheck } from 'react-icons/hi';
import { FaCheckCircle, FaTrophy, FaRegFileAlt } from 'react-icons/fa';

// Stat cards data
const stats = [
  {
    icon: <HiOutlineUserGroup className="text-pink-400 text-3xl" />, // user icon
    stat: '2,300+',
    title: 'Trusted Service Businesses',
    desc: 'Growing community of successful partners',
  },
  {
    icon: <HiOutlineCurrencyDollar className="text-pink-400 text-3xl" />, // dollar icon
    stat: '$9.4M+',
    title: 'In Recovered Revenue',
    desc: 'Real results for real businesses',
  },
  {
    icon: <HiOutlineClipboardCheck className="text-pink-400 text-3xl" />, // check icon
    stat: '100%',
    title: 'Industry Coverage',
    desc: 'Salons, spas, barbershops, gyms, clinics & agencies',
  },
];

// Bottom row data
const bottom = [
  {
    icon: <FaCheckCircle className="text-green-500 text-lg mr-2" />,
    label: 'Verified Results',
  },
  {
    icon: <FaTrophy className="text-orange-500 text-lg mr-2" />,
    label: 'Industry Leading',
  },
  {
    icon: <FaRegFileAlt className="text-indigo-500 text-lg mr-2" />,
    label: 'Proven Track Record',
  },
];

function Trusted() {
  return (
    <section className="w-full bg-transparent py-16 md:py-24 flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-4 tracking-tight">Trusted by Industry Leaders</h2>
      <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 text-center font-medium mb-12 max-w-2xl">
        Join thousands of successful service businesses who have transformed their revenue recovery with our proven solutions.
      </p>
      {/* Stat Cards */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 px-2">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-gray-100 rounded-2xl shadow-lg p-8 md:p-10 min-h-[260px] transition-all border border-gray-100 dark:border-neutral-800"
            // style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.06)' }}
          >
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-pink-50 dark:bg-neutral-800">
              {item.icon}
            </div>
            <div className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">{item.stat}</div>
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1 text-center">{item.title}</div>
            <div className="text-gray-400 dark:text-gray-400 text-base text-center">{item.desc}</div>
          </div>
        ))}
      </div>
      {/* Bottom Row */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-base md:text-lg font-semibold text-gray-700 dark:text-gray-200 mt-2">
        {bottom.map((item, idx) => (
          <React.Fragment key={item.label}>
            <span className="flex items-center">{item.icon}{item.label}</span>
            {idx < bottom.length - 1 && (
              <span className="mx-2 text-gray-300 text-2xl select-none">&bull;</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Trusted
