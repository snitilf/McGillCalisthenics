import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'white';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden";
  
  const variants = {
    primary: "bg-mcgill-red text-white hover:bg-white hover:text-mcgill-red border-2 border-mcgill-red",
    outline: "bg-transparent text-mcgill-white border-2 border-mcgill-white hover:bg-mcgill-red hover:text-white",
    ghost: "bg-transparent text-white hover:text-mcgill-red",
    white: "bg-white text-mcgill-red hover:bg-mcgill-dark hover:text-white border-2 border-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;