import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiGlobe } from 'react-icons/fi';
import { IoChevronDownOutline } from 'react-icons/io5';

function CommonNormalDropDown({
  options = [],
  value,
  onChange,
  className = "",
  placeholder = "Select option",
  bgColor = "bg-gray-100 dark:bg-customBlack",
  textColor = "text-gray-700 dark:text-white",
  fontSize = "text-base",
  showIcon = true,
  borderRadius = "rounded-xl",
  width = "min-w-[110px] w-max",
  inputWidth = "min-w-[90px]", // DEFAULT: minimum width for button
  inputBorderRadius = "rounded-full", // DEFAULT: rounded full for button
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);
  const dropdownRef = useRef(null);
  console.log("borderRadius", borderRadius);
  
  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center px-4 py-2 border-2
          ${bgColor}
          ${textColor}
          border-gray-200 dark:border-customBorderColor
          transition-colors duration-200
          shadow-sm
          font-ttcommons font-medium
          ${fontSize}
          ${inputWidth}
          ${inputBorderRadius}
        `}
        style={{ minWidth: 90 }}
      >
        {showIcon && <FiGlobe className="text-lg mr-2" />}
        <span className={`mx-1 font-medium mt-1 ${fontSize}`}>
          {selectedOption?.code?.toUpperCase() || selectedOption?.label || placeholder}
        </span>
        <IoChevronDownOutline className={`ml-2 ${fontSize} transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div
          className={`
            absolute left-0 mt-2
            ${width}
            bg-white dark:bg-customBlack
            border border-gray-200 dark:border-customBorderColor
            shadow-xl z-50 py-2
            ${borderRadius}
          `}
        >
          {options.map(option => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`
                w-full text-left px-4 py-2
                hover:bg-gray-100 dark:hover:bg-[#2C2C2C]
                transition-colors duration-200
                ${fontSize}
                ${value === option.value ? 'text-pink-500 font-bold' : 'text-black dark:text-white'}
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

CommonNormalDropDown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      code: PropTypes.string, // for language code like 'en', 'hi'
    })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.string,
  showIcon: PropTypes.bool,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
};

export default CommonNormalDropDown;
