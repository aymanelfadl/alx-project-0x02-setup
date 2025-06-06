import { type ButtonProps }from "@/interfaces";

const sizeStyles = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border-2 cursor-pointer border-gray-300 rounded-xl hover:bg-gray-200 transition text-gray-600 ${sizeStyles[size]} ${shape} hover:bg-gray-200`}
    >
      {label}
    </button>
  );
};

export default Button;
