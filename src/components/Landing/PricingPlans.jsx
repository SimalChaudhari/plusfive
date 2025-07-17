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
      className="relative w-full flex flex-col items-center justify-center md:py-[64px] py-8 md:px-[80px] px-8 overflow-hidden"
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

      <div className='flex flex-col items-center justify-center gap-[64px]'>

        {/* Heading */}
        <div className="relative z-10 flex flex-col items-center gap-[24px]">
          <div className='flex flex-col items-center justify-center gap-[16px]'>
            <h2 className="text-4xl md:text-48 text-center">
              <span
                className="font-bold"
                style={{
                  background: 'linear-gradient(265deg, #DF64CC 50.66%, #FF2380 54.97%, #FE5D39 58.94%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {heading1}
              </span>
              <span className="font-bold text-white ">&nbsp;{heading2}</span>
            </h2>
            <p className="text-lg md:text-16 text-gray-300 text-center font-medium max-w-2xl">{subheading}</p>
          </div>
          {/* Toggle */}
          <div className="flex items-center gap-4 mb-2">
            <span className={`text-16 font-medium ${!yearly ? 'text-white' : 'text-gray-400'}`}>{toggleMonthly}</span>
            <button
              className={`w-12 h-7 rounded-full flex items-center px-1 transition-colors duration-300 ${yearly ? 'bg-pink-500' : 'bg-gray-600'}`}
              onClick={() => setYearly(y => !y)}
              aria-label="Toggle yearly pricing"
            >
              <span
                className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${yearly ? 'translate-x-5' : ''}`}
              />
            </button>
            <span className={`text-16 font-medium ${yearly ? 'text-white' : 'text-gray-400'}`}>{toggleYearly}</span>
            {yearly && <span className="ml-2 px-2 py-0.5 rounded bg-pink-600/20 text-pink-400 text-xs font-bold">{yearlyBadge}</span>}
          </div>
        </div>

        <div>
          {/* Pricing Cards */}
          <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`flex flex-col justify-between rounded-2xl shadow-xl p-7 md:p-[24px] min-h-[540px] transition-all
              ${plan.highlight ? 'border-2' : 'border-2 border-white/10'}
              relative
            `}
                style={{
                  boxShadow: plan.highlight ? '0 0 0 2px #DF64CC33, 0 8px 40px 0 #0004' : '0 8px 40px 0 #0002',
                  borderImage: plan.highlight ? 'linear-gradient(259deg, #FE5D39 3.28%, #FF2380 49.86%, #DF64CC 100.32%) 1' : 'none',
                  borderRadius: '20px'
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <span className="absolute top-6 right-6 bg-pink-600/10 text-pink-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <svg width="14" height="14" fill="currentColor" className="inline-block"><circle cx="7" cy="7" r="7" /></svg> {plan.badge}
                  </span>
                )}
                {/* Title & Desc */}
                <div>
                  <div className='flex flex-col items-start gap-[28px]'>
                    <div className='flex flex-col items-start gap-[12px]'>
                      <h3 className="text-2xl md:text-[30px] font-bold text-white">{plan.name}</h3>
                      <p className="text-gray-300  text-base md:text-16 font-medium">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="">
                      {plan.custom ? (
                        <span className="text-2xl md:text-[36px] font-bold text-white">{customPricingText}</span>
                      ) : (
                        <span className="text-4xl md:text-5xl font-extrabold text-white">{yearly ? (plan.price === 0 ? '$0' : `$${Math.round(plan.price * 0.3)}`) : `$${plan.price}`}</span>
                      )}
                      {!plan.custom && <span className="text-lg text-gray-400 font-medium ml-1">{plan.priceUnit}</span>}
                    </div>
                    
                  </div>

                  {/* Features */}
                  <ul className=" flex flex-col gap-[16px]">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-base md:text-lg text-gray-200">
                        <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0 text-16" />
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
                      className="w-full py-3 text-16 font-bold rounded-xl"
                    />
                  ) : (
                    <CommonCustomOutlineButton
                      text={plan.buttonText}
                      className="w-full py-3 text-16 font-bold rounded-xl bg-transparent border-pink-400 hover:border-pink-500"
                      borderColor="border-pink-400"
                      textColor="text-white"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>


    </section>
  );
}

export default PricingPlans;
