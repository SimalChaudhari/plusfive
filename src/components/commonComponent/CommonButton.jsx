import React from 'react'
import PropTypes from 'prop-types'

function CommonButton({ text, onClick, className = '', type = 'button', icon }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-xl
        px-8 py-2 w-full
        bg-gradient-to-r from-[#DF64CC] via-[#FF2380] to-[#FE5D39]
        text-white text-xl font-ttcommons font-medium
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:scale-[1.02]
        active:scale-[0.98]
        ${className}
      `}
    >
      <div className="flex items-center justify-center gap-2">
        {icon && icon}
        {text}
      </div>
    </button>
  )
}

CommonButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  icon: PropTypes.node
}

export default CommonButton
