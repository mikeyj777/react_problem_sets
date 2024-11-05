import React from 'react';
import './CustomUI.css';

const CustomInput = ({
  type = 'text',
  value,
  onChange,
  placeholder = '',
  disabled = false,
  className = '',
  label = '',
  error = ''
}) => {
  const inputClasses = [
    'custom-input',
    error ? 'custom-input--error' : '',
    className
  ].filter(Boolean).join(' ');

  const inputWrapperClasses = [
    'custom-input-wrapper',
    disabled ? 'custom-input-wrapper--disabled' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={inputWrapperClasses}>
      {label && (
        <label className="custom-input__label">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClasses}
      />
      {error && (
        <span className="custom-input__error">
          {error}
        </span>
      )}
    </div>
  );
};

export default CustomInput;