import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiGlobe } from 'react-icons/fi';
import { IoChevronDownOutline } from 'react-icons/io5';

function CommonNormalDropDown({
  options = [],
  value,
  onChange,
  className = "",
  placeholder = "Select option"
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);
  const dropdownRef = useRef(null);

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
          flex items-center px-4 py-2 rounded-full border-2
          bg-gray-100 dark:bg-customBlack
          text-gray-700 dark:text-white
          border-gray-200 dark:border-customBorderColor
          transition-colors duration-200
          shadow-sm
          min-w-[90px]
          font-ttcommons font-medium
        `}
        style={{ minWidth: 90 }}
      >
        <FiGlobe className="text-lg mr-2" />
        <span className="mx-1 text-base font-medium mt-1">{selectedOption?.code?.toUpperCase() || selectedOption?.label || placeholder}</span>
        <IoChevronDownOutline className={`ml-2 text-base transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div
          className="absolute left-1/2 -translate-x-1/2 mt-12 min-w-[110px] w-max bg-white dark:bg-customBlack border border-gray-200 dark:border-customBorderColor rounded-xl shadow-xl z-50 py-2"
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
                text-base
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
};

export default CommonNormalDropDown;
