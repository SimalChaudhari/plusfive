import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../context/ThemeContext';

function CommonOutlineButton({ text, onClick, className = '', type = 'button', icon }) {
  const { isDarkMode } = useTheme(); // ✅ dark mode from context

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-xl
        px-8 py-2 w-full
        dark:bg-customBrown bg-white
        dark:text-white text-black text-xl font-ttcommons font-medium
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:scale-[1.02]
        active:scale-[0.98]
        border-2 border-transparent
        ${className}
      `}
      style={{
        '--bg-color': isDarkMode ? '#121212' : '#ffffff',
        backgroundImage: `
          linear-gradient(var(--bg-color), var(--bg-color)),
          linear-gradient(to right, #DF64CC, #FF2380, #FE5D39)
        `,
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      <div className="flex items-center justify-center gap-2">
        {icon && <span className="text-2xl">{icon}</span>}
        {text}
      </div>
    </button>
  )
}

CommonOutlineButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  icon: PropTypes.node
}

export default CommonOutlineButton
