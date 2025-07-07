import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import CommonButton from '../commonComponent/CommonButton';

const faqs = [
  {
    q: "What is churn prediction?",
    a: "Churn prediction uses AI to identify which customers are likely to stop using your service, so you can take action before they leave."
  },
  {
    q: "Can I recover customers who've already left?",
    a: "Yes! PlusFive helps you re-engage lost customers with personalized campaigns and offers."
  },
  {
    q: "How long until I see results?",
    a: "Most businesses see measurable improvements in retention and revenue within the first month."
  },
  {
    q: "Do I need to be technical?",
    a: "No technical skills needed! PlusFive is designed for business owners and teams of all backgrounds."
  },
  {
    q: "Can I track revenue saved?",
    a: "Absolutely. PlusFive provides clear dashboards showing revenue recovered and customer loyalty growth."
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 md:py-24 bg-transparent">
      {/* FAQ Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-3 tracking-tight">FAQ</h2>
      <p className="text-gray-500 dark:text-gray-300 text-center mb-10 max-w-xl">
        Sure! Here's a well-crafted FAQ entry starting with "What is churn prediction?"<br />
        and following with other key questions and concise answers relevant to Plusfive:
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
              <span>{item.q}</span>
              {open === idx ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </button>
            <div
              className={`px-6 pb-4 text-gray-600 dark:text-gray-300 text-base transition-all duration-300 ${open === idx ? 'block' : 'hidden'}`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
      {/* CTA Banner */}
      <div className="w-full max-w-4xl mx-auto rounded-2xl md:rounded-3xl shadow-xl bg-gradient-to-br from-[#181828] via-[#232347] to-[#181828] px-6 md:px-16 py-10 md:py-14 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Don't Let Another Customer Slip Away</h3>
          <p className="text-gray-300 text-base md:text-lg mb-2 md:mb-0">Plug Plusfive into your business today and watch revenue come back without spending a cent on ads.</p>
        </div>
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
          <CommonButton
            text="Get Started"
            className="px-8 py-3 text-lg font-bold rounded-full"
            iconPosition="right"
          />
        </div>
      </div>
    </section>
  );
}

export default FAQ;