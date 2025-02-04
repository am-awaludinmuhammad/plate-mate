const Button = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  className
}) => {
  const baseStyle =
    "px-4 py-2 rounded font-semibold transition-all duration-200 focus:outline-none focus:ring-2";

  const variants = {
    primary: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-300",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    outline:
      "border-2 border-gray-900 text-gray-900 py-2 px-4 rounded hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
  };

  return (
    <button
      className={`${baseStyle} ${
        disabled ? variants.disabled : variants[variant]
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
