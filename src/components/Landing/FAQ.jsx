import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { CommonButton } from '../index';
import en from '../../i18/en.json';
import he from '../../i18/he.json';
import cardBg from "../../assets/card.png";

function FAQ({ language }) {
  const lang = language === 'he' ? he : en;
  const faqs = lang.faq.questions;
  const heading = lang.faq.heading;
  const subheading = lang.faq.subheading;
  const ctaHeading = lang.faq.ctaHeading;
  const ctaText = lang.faq.ctaText;
  const ctaButtonText = lang.faq.ctaButtonText;

  const [open, setOpen] = useState(null);

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 md:py-24 bg-transparent px-8">
      {/* FAQ Heading */}
      <h2 className="text-3xl md:text-[48px] font-extrabold text-gray-900 dark:text-white text-center mb-3 tracking-tight">{heading}</h2>
      <p className="text-gray-500 dark:text-gray-300 text-center mb-10 max-w-xl text-[16px]">
        {subheading}
      </p>
      {/* FAQ Accordions */}
      <div className="w-full max-w-2xl flex flex-col gap-4 mb-20">
        {faqs.map((item, idx) => (
          <div key={idx} className="rounded-lg bg-gray-50 dark:bg-neutral-900 overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-900 dark:text-white focus:outline-none"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              <span className="text-[18px] font-semibold">{item.q}</span>
              {open === idx ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </button>
            <div
              className={`px-6 pb-4 text-[18px] text-gray-600 dark:text-gray-300 text-base transition-all duration-300 ${open === idx ? 'block' : 'hidden'}`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
      {/* CTA Banner */}
      <div className="container mx-auto">
        <div
          className="w-full mx-auto rounded-2xl md:rounded-3xl shadow-xl px-6 md:px-16 py-10 md:py-14 flex flex-col md:flex-row items-center md:items-start justify-between gap-8"
          style={{
            backgroundImage: `url(${cardBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#181828" // fallback color, optional
          }}
        >
          <div className="flex-1">
            <h3 className="text-2xl md:text-[48px] font-extrabold text-white mb-3">{ctaHeading}</h3>
            <p className="text-gray-300 text-base md:text-[16px] mb-2 md:mb-0">{ctaText}</p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
            <CommonButton
              text={ctaButtonText}
              className="px-8 py-3 text-[16px] font-bold rounded-full"
              iconPosition="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;