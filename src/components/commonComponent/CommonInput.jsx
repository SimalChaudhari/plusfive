import React from 'react'
import { BsFillExclamationCircleFill } from 'react-icons/bs'

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
}) {
  const commonClasses = `w-full text-xl border rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 ${
    error
      ? 'border-customRed pr-10 bg-red-100 dark:bg-customRed/10'
      : 'bg-customBody dark:bg-customBrown border-gray-200 dark:border-customBorderColor'
  }`;

  return (
    <div>
      <label htmlFor={id} className="block text-xl font-medium mb-2 dark:text-white text-black">
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

export default CommonInput
