import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { CommonButton, CommonCustomOutlineButton } from '../index';
import en from '../../i18/en.json';
import he from '../../i18/he.json';
import Bg from '../../assets/Bg.png';

function PricingPlans({ language }) {
  const [yearly, setYearly] = useState(false);
  const lang = language === 'he' ? he : en;
  const plans = lang.pricingPlans.plans;

  const heading1 = lang.pricingPlans.heading1;
  const heading2 = lang.pricingPlans.heading2;
  const subheading = lang.pricingPlans.subheading;
  const toggleMonthly = lang.pricingPlans.toggleMonthly;
  const toggleYearly = lang.pricingPlans.toggleYearly;
  const yearlyBadge = lang.pricingPlans.yearlyBadge;
  const customPricingText = lang.pricingPlans.customPricingText;

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center px-8 py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // ya hata do agar content zyada hai
        height: 'auto',     // add this
      }}
    >
      {/* Starry effect (optional, can use bg pattern or custom) */}
      {/* <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, rgba(24,24,40,0.9) 100%)'}} /> */}
      {/* Heading */}
      <div className="relative z-10 flex flex-col items-center mb-12">
        <h2 className="text-4xl md:text-[48px] text-center mb-3 tracking-tight">
          <span className="font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent">{heading1}</span>
          <span className="font-bold text-white ">&nbsp;{heading2}</span>
        </h2>
        <p className="text-lg md:text-[16px] text-gray-300 text-center font-medium mb-6 max-w-2xl">{subheading}</p>
        {/* Toggle */}
        <div className="flex items-center gap-4 mb-2">
          <span className={`text-[16px] font-medium ${!yearly ? 'text-white' : 'text-gray-400'}`}>{toggleMonthly}</span>
          <button
            className={`w-12 h-7 rounded-full flex items-center px-1 transition-colors duration-300 ${yearly ? 'bg-pink-500' : 'bg-gray-600'}`}
            onClick={() => setYearly(y => !y)}
            aria-label="Toggle yearly pricing"
          >
            <span
              className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${yearly ? 'translate-x-5' : ''}`}
            />
          </button>
          <span className={`text-base font-medium ${yearly ? 'text-white' : 'text-gray-400'}`}>{toggleYearly}</span>
          {yearly && <span className="ml-2 px-2 py-0.5 rounded bg-pink-600/20 text-pink-400 text-xs font-bold">{yearlyBadge}</span>}
        </div>
      </div>
      {/* Pricing Cards */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`flex flex-col justify-between bg-white/5 backdrop-blur-sm border rounded-2xl shadow-xl px-7 py-9 md:px-10 md:py-12 min-h-[540px] transition-all
              ${plan.highlight ? 'border-2 border-pink-500 shadow-pink-500/20' : 'border border-white/10'}
              ${plan.highlight ? 'scale-105 z-20' : 'z-10'}
              relative
            `}
            style={{boxShadow: plan.highlight ? '0 0 0 2px #DF64CC33, 0 8px 40px 0 #0004' : '0 8px 40px 0 #0002'}}
          >
            {/* Badge */}
            {plan.badge && (
              <span className="absolute top-6 right-6 bg-pink-600/10 text-pink-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <svg width="14" height="14" fill="currentColor" className="inline-block"><circle cx="7" cy="7" r="7" /></svg> {plan.badge}
              </span>
            )}
            {/* Title & Desc */}
            <div>
              <h3 className="text-2xl md:text-[30px] font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-300 mb-6 text-base md:text-[16px] font-medium">{plan.description}</p>
              {/* Price */}
              <div className="mb-8">
                {plan.custom ? (
                  <span className="text-2xl md:text-[36px] font-bold text-white">{customPricingText}</span>
                ) : (
                  <span className="text-4xl md:text-5xl font-extrabold text-white">{yearly ? (plan.price === 0 ? '$0' : `$${Math.round(plan.price * 0.3)}`) : `$${plan.price}`}</span>
                )}
                {!plan.custom && <span className="text-lg text-gray-400 font-medium ml-1">{plan.priceUnit}</span>}
              </div>
              {/* Features */}
              <ul className="mb-8 flex flex-col gap-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-base md:text-lg text-gray-200">
                    <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0 text-[16px]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Button */}
            <div className="mt-auto pt-2">
              {plan.highlight ? (
                <CommonButton
                  text={plan.buttonText}
                  className="w-full py-3 text-[16px] font-bold rounded-xl"
                />
              ) : (
                <CommonCustomOutlineButton
                  text={plan.buttonText}
                  className="w-full py-3 text-[16px] font-bold rounded-xl bg-transparent border-pink-400 hover:border-pink-500"
                  borderColor="border-pink-400"
                  textColor="text-white"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingPlans;
