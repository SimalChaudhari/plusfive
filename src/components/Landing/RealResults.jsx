import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CommonButton from "../commonComponent/CommonButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import en from '../../i18/en.json';
import he from '../../i18/he.json';
import TestDecor from '../../assets/test.svg';

const resolveImage = (img) => {
  if (!img) return '';
  if (img.startsWith('http')) return img;
  const fileName = img.split('/').pop();
  if (fileName === 'test.svg') return TestDecor;
  return img;
};

const RealResults = ({ language }) => {
  const lang = language === 'he' ? he : en;
  const testimonials = lang.realResults.testimonials;
  const heading = lang.realResults.heading;
  const heading2 = lang.realResults.heading2;
  const subheading = lang.realResults.subheading;
  const buttonText = lang.realResults.buttonText;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    // centerMode: false, // Only one card in center
  };

  // Slider ref for custom arrows
  const sliderRef = React.useRef();

  return (
    <div className="container mx-auto py-16 flex flex-col items-center justify-center px-8">
      <h2 className="text-3xl md:text-[48px] font-extrabold text-gray-900 dark:text-white text-center mb-3 tracking-tight">
        {heading}<br />
        {heading2}
      </h2>
      <p className="text-[16px] md:text-xl text-gray-500 dark:text-gray-300 text-center font-medium mb-12 max-w-2xl">
        {subheading}
      </p>
      <div className="w-full">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="flex justify-center items-center w-full md:px-4 py-5">
              <div className="w-full max-w-7xl mx-auto md:px-4">
                <div
                  className="w-full bg-gray-50 dark:bg-neutral-800 rounded-2xl shadow-lg flex flex-col md:flex-row items-stretch p-8 md:p-12 transition-all border border-gray-100 dark:border-neutral-700"
                  style={{ minHeight: 340 }}
                >
                  {/* Left: Image */}
                  <div className="flex-shrink-0 flex items-center justify-center mb-6 md:mb-0">
                    <img
                      src={resolveImage(t.image)}
                      alt={t.author}
                      className="w-full object-cover"
                      // style={{ minWidth: 180, minHeight: 240 }}
                    />
                  </div>
                  {/* Right: Content */}
                  <div className="flex flex-col justify-center flex-1 md:pl-8">
                    <p className={`${t.storyTypeColor} font-semibold mb-2 text-[20px]`}>{t.storyType}</p>
                    <p className="text-[30px] text-gray-900 dark:text-white mb-6 max-w-2xl md:max-w-3xl text-left">
                      {t.text}
                    </p>
                    <div className="flex md:flex-row flex-col sm:items-center sm:justify-between bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 sm:rounded-full rounded-lg px-6 py-4 shadow-sm w-full">
                      <div className="mr-6">
                        <p className="font-bold text-gray-800 dark:text-white mb-0 text-[18px]">{t.author}</p>
                        <p className="text-[16px] text-gray-500 dark:text-gray-300">{t.authorTitle}</p>
                      </div>
                      <CommonButton
                        text={buttonText}
                        icon={<FaArrowRight />}
                        iconPosition="right"
                        className="ml-2 px-6 py-3 text-[16px] font-bold rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Custom Arrows below the card */}
        <div className="flex justify-center items-center mt-6">
          <button
            className="mx-2 flex items-center justify-center bg-white dark:bg-neutral-800 shadow rounded-full p-2"
            onClick={() => sliderRef.current.slickPrev()}
            aria-label="Previous"
            type="button"
          >
            <FaArrowLeft className="text-2xl text-gray-400 dark:text-white" />
          </button>
          <button
            className="mx-2 flex items-center justify-center bg-white dark:bg-neutral-800 shadow rounded-full p-2"
            onClick={() => sliderRef.current.slickNext()}
            aria-label="Next"
            type="button"
          >
            <FaArrowRight className="text-2xl text-gray-400 dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealResults;
