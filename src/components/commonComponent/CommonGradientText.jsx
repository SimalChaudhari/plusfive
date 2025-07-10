import React from 'react';

/**
 * CommonGradientText
 * Props:
 * - children: text ya element
 * - gradient: CSS gradient string (default user ke hisaab se)
 * - style: extra style (object)
 * - className: extra className (yahi se font-size, font-weight, etc. control karo)
 */
function CommonGradientText({
  children,
//   gradient = 'linear-gradient(200deg, #DF64CC 24.76%, #FF2380 38.87%, #FE5D39 51.9%)',
  gradient = 'linear-gradient(200deg, rgb(223, 100, 204) 24.76%, rgb(255, 35, 128) 40.87%, rgb(254, 93, 57) 70.9%)',
  style = {},
  className = '',
  ...rest
}) {
  return (
    <span
      className={className}
      style={{
        background: gradient,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

export default CommonGradientText;
