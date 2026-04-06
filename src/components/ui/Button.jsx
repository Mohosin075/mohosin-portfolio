import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`CBtnBG inline-flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
