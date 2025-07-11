import React from 'react'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import PropTypes from 'prop-types';

function CommonInput({
  label,
  type = 'text',
  id,
  name,
  value,
  onChange,
  error,
  placeholder,
  as = 'input',
  rows,
  textColor,
  labelColor,
  inputBg,
  labelFontSize = 'text-xl', // NEW PROP with default
}) {
  const colorClass = textColor ? textColor : 'text-gray-900 dark:text-white';
  const labelClass = labelColor ? labelColor : 'dark:text-white text-black';

  // 👇 labelFontSize yahan use karein
  const labelClasses = `block ${labelFontSize} font-medium mb-2 ${labelClass}`;

  const bgClass = inputBg
    ? inputBg
    : error
      ? 'bg-red-100 dark:bg-customRed/10'
      : 'bg-customBody dark:bg-customBrown';

  const commonClasses = `w-full border rounded-lg px-4 py-3 ${colorClass} ${bgClass} focus:outline-none focus:ring-2 focus:ring-pink-500 ${
    error
      ? 'border-customRed pr-10'
      : 'border-gray-200 dark:border-customBorderColor'
  }`;

  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <div className="relative">
        {as === 'textarea' ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows || 5}
            className={commonClasses}
            autoComplete="off"
          />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={commonClasses}
            autoComplete="off"
          />
        )}
        {error && (
          <div
            className={`absolute inset-y-0 right-0 pr-3 flex pointer-events-none ${
              as === 'textarea' ? 'items-start pt-4' : 'items-center'
            }`}
          >
            <BsFillExclamationCircleFill className="h-5 w-5 text-customRed" />
          </div>
        )}
      </div>
      {error && <p className="text-customRed text-lg mt-1">{error}</p>}
    </div>
  )
}

CommonInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  as: PropTypes.oneOf(['input', 'textarea']),
  rows: PropTypes.number,
  textColor: PropTypes.string,
  labelColor: PropTypes.string,
  inputBg: PropTypes.string,
  labelFontSize: PropTypes.string, // NEW
};

export default CommonInput
