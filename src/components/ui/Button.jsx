import React from "react";

const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  full = false,
  ...props
}) => {
  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "outline"
        ? "btn-outline"
        : variant === "ghost"
          ? "btn-ghost"
          : "btn-primary";
  const sizeClass =
    size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "btn-md";
  const fullClass = full ? "w-full" : "inline-block";

  return (
    <button
      {...props}
      className={`btn ${variantClass} ${sizeClass} ${fullClass} whitespace-nowrap flex-shrink-0 ${className} hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--accent-from)]/30 transition-transform`}
    >
      {children}
    </button>
  );
};

export default Button;
