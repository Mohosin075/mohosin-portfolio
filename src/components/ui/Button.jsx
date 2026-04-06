import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`CBtnBG inline-flex items-center justify-center gap-2 ${className} hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--accent-from)]/30 transition-transform`}
    >
      {children}
    </button>
  );
};

export default Button;
