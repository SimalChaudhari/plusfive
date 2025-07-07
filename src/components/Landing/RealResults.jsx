import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CommonButton from '../commonComponent/CommonButton';

// Testimonial data (array for DRY carousel)
const testimonials = [
  {
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    storyType: 'User Story',
    storyTypeColor: 'text-pink-500',
    text: 'Plusfive showed us exactly who was about to leave—and saved over $3,000 in repeat sales in the first month alone.',
    author: 'William Kerry',
    authorTitle: 'Cofounder, GlowUp Studio',
  },
  {
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    storyType: 'User Story',
    storyTypeColor: 'text-pink-500',
    text: 'We increased our customer retention by 25% in just two months using PlusFive.',
    author: 'Sarah Lee',
    authorTitle: 'Owner, BeautyBar',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    storyType: 'User Story',
    storyTypeColor: 'text-pink-500',
    text: 'The insights and automation are a game changer for our business.',
    author: 'Mike Johnson',
    authorTitle: 'Manager, FitClub',
  },
];

function RealResults() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  // Carousel navigation
  const prev = () => setIndex(i => (i - 1 + total) % total);
  const next = () => setIndex(i => (i + 1) % total);

  // Helper to get card style (center, left, right, hidden)
  const getCardStyle = (i) => {
    if (i === index) return 'z-20 scale-100 opacity-100 blur-0 translate-x-0';
    if (i === (index - 1 + total) % total) return 'z-10 scale-95 opacity-60 blur-[2px] -translate-x-16 md:-translate-x-32';
    if (i === (index + 1) % total) return 'z-10 scale-95 opacity-60 blur-[2px] translate-x-16 md:translate-x-32';
    return 'hidden';
  };

  return (
    <section className="w-full bg-transparent py-16 md:py-24 flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-3 tracking-tight">
        Real Results. Real Businesses.<br />Real Revenue Saved
      </h2>
      <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 text-center font-medium mb-12 max-w-2xl">
        We have 1k+ positive reviews from our customers whose are loving using PlusFive.
      </p>
      {/* Carousel */}
      <div className="relative w-full max-w-6xl flex items-center justify-center mb-8 min-h-[420px]">
        {/* Cards */}
        <div className="w-full flex items-center justify-center relative" style={{ minHeight: 380 }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute left-0 right-0 mx-auto transition-all duration-500 ease-in-out ${getCardStyle(i)} w-full max-w-4xl bg-gray-50 dark:bg-neutral-900 rounded-3xl shadow-xl flex flex-col md:flex-row items-center px-4 md:px-12 py-10 md:py-12`}
              style={{ minHeight: 380 }}
            >
              {/* Image */}
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-200 mb-6 md:mb-0 md:mr-10 flex items-center justify-center">
                <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
              </div>
              {/* Text */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-sm font-bold mb-2 tracking-wide" style={{ color: '#FF2380' }}>{t.storyType}</div>
                <div className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-6 leading-snug">{t.text}</div>
                {/* Author & Button */}
                <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
                  <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-4 rounded-2xl md:rounded-full border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-0 md:px-6 py-4 shadow-sm mx-auto">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                      <span className="font-bold text-gray-900 dark:text-white text-base">{t.author}</span>
                      <span className="text-gray-500 dark:text-gray-300 text-sm">{t.authorTitle}</span>
                    </div>
                    <CommonButton
                      text="Read full"
                      className="w-full md:w-auto px-6 py-3 text-base font-bold rounded-full mt-2 md:mt-0"
                      icon={<FaArrowRight />}
                      iconPosition="right"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Carousel Arrows (centered below cards) */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <button
          onClick={prev}
          className="flex items-center justify-center bg-white dark:bg-neutral-800 rounded-full shadow-md p-3 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 transition-all z-30 border border-gray-200 dark:border-neutral-700"
          aria-label="Previous"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={next}
          className="flex items-center justify-center bg-white dark:bg-neutral-800 rounded-full shadow-md p-3 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 transition-all z-30 border border-gray-200 dark:border-neutral-700"
          aria-label="Next"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default RealResults;
