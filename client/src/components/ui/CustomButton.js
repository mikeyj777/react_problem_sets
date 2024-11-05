import './CustomButton.css';  // Import the CSS file

const CustomButton = ({ 
  variant = 'default', 
  disabled = false, 
  onClick, 
  children,
  className = ''
}) => {
  // Build the class names based on variants and props
  const buttonClasses = [
    'custom-button',
    variant !== 'default' ? `custom-button--${variant}` : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;