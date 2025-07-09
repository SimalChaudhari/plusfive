import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CommonButton from "../commonComponent/CommonButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    storyType: "User Story",
    storyTypeColor: "text-pink-500",
    text: "Plusfive showed us exactly who was about to leave—and saved over $3,000 in repeat sales in the first month alone.",
    author: "William Kerry",
    authorTitle: "Cofounder, GlowUp Studio",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    storyType: "User Story",
    storyTypeColor: "text-pink-500",
    text: "We increased our customer retention by 25% in just two months using PlusFive.",
    author: "Sarah Lee",
    authorTitle: "Owner, BeautyBar",
  },
  {
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    storyType: "User Story",
    storyTypeColor: "text-pink-500",
    text: "The insights and automation are a game changer for our business.",
    author: "Mike Johnson",
    authorTitle: "Manager, FitClub",
  },
  {
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    storyType: "User Story",
    storyTypeColor: "text-pink-500",
    text: "With PlusFive, our team can focus on growth instead of chasing churned customers.",
    author: "Emily Carter",
    authorTitle: "Head of Marketing, FreshMart",
  },
  {
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    storyType: "User Story",
    storyTypeColor: "text-pink-500",
    text: "The dashboard is so intuitive and the results speak for themselves.",
    author: "David Kim",
    authorTitle: "CEO, TechNest",
  },
  {
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    storyType: "User Story",
    storyTypeColor: "text-pink-500",
    text: "We saw a 40% increase in repeat purchases after using PlusFive’s recommendations.",
    author: "Priya Singh",
    authorTitle: "Founder, StyleHub",
  },
  {
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    storyType: "User Story",
    storyTypeColor: "text-pink-500",
    text: "PlusFive’s analytics helped us identify our most loyal customers and reward them.",
    author: "Carlos Rivera",
    authorTitle: "COO, Foodies",
  },
];

// Custom Arrow Components (for below the card)
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="mx-2 flex items-center justify-center bg-white shadow rounded-full p-2"
      onClick={onClick}
      aria-label="Next"
      type="button"
    >
      <FaArrowRight className="text-2xl text-gray-400" />
    </button>
  );
}
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="mx-2 flex items-center justify-center bg-white shadow rounded-full p-2"
      onClick={onClick}
      aria-label="Previous"
      type="button"
    >
      <FaArrowLeft className="text-2xl text-gray-400" />
    </button>
  );
}

const RealResults = () => {
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
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-3 tracking-tight">
        Real Results. Real Businesses.<br />Real Revenue Saved
      </h2>
      <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 text-center font-medium mb-12 max-w-2xl">
        We have 1k+ positive reviews from our customers whose are loving using PlusFive.
      </p>
      <div className="w-full">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="flex justify-center items-center w-full md:px-4 py-5">
              <div className="w-full max-w-7xl mx-auto px-4">
                <div
                  className="w-full bg-gray-50 dark:bg-neutral-800 rounded-2xl shadow-lg flex flex-col md:flex-row items-stretch p-8 md:p-12 transition-all border border-gray-100 dark:border-neutral-700"
                  style={{ minHeight: 340 }}
                >
                  {/* Left: Image */}
                  <div className="flex-shrink-0 flex items-center justify-center mb-6 md:mb-0">
                    <img
                      src={t.image}
                      alt={t.author}
                      className="w-full md:w-64 h-64 object-cover rounded-xl bg-gray-200 dark:bg-neutral-700"
                      style={{ minWidth: 180, minHeight: 240 }}
                    />
                  </div>
                  {/* Right: Content */}
                  <div className="flex flex-col justify-center flex-1 md:pl-8">
                    <p className="text-pink-500 font-semibold mb-2">User Story</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 max-w-2xl md:max-w-3xl text-left">
                      {t.text}
                    </p>
                    <div className="flex md:flex-row flex-col sm:items-center sm:justify-between bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 sm:rounded-full rounded-lg px-6 py-4 shadow-sm w-full">
                      <div className="mr-6">
                        <p className="font-bold text-gray-800 dark:text-white mb-0">{t.author}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-300">{t.authorTitle}</p>
                      </div>
                      <CommonButton
                        text="Read full"
                        icon={<FaArrowRight />}
                        iconPosition="right"
                        className="ml-2 px-6 py-3 text-base font-bold rounded-full"
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
