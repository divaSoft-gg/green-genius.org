import React, { useState, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
// import './Input.module.css';

/**
 * Props for the Input component.
 *
 * @property {string} label - The label text that will be displayed inside the input or textarea field.
 * @property {string} id - The unique identifier for the input or textarea field.
 * @property {string} [className] - Optional additional CSS classes to apply to the input container.
 * @property {'input' | 'textarea'} [type] - Specifies whether the component is an input or textarea. Defaults to 'input'.
 * @extends {InputHTMLAttributes<HTMLInputElement>} - Extends the standard input attributes if type is 'input'.
 * @extends {TextareaHTMLAttributes<HTMLTextAreaElement>} - Extends the standard textarea attributes if type is 'textarea'.
 */

type InputOrTextareaProps = InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>;

interface InputProps extends InputOrTextareaProps {
  label?: string;
  id: string;
  className?: string;
  type?: 'input' | 'textarea' | 'number';
}

const Input: React.FC<InputProps> = ({ label, id, type = 'input', className = '', ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const commonProps = {
    id,
    className: `block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent peer`,
    onFocus: () => setIsFocused(true),
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => setIsFocused(e.target.value !== ''),
    ...props
  };

  return (
    <div className={`relative ${className}`}>
      {type === 'textarea' ? (
        <textarea {...commonProps as TextareaHTMLAttributes<HTMLTextAreaElement>} />
      ) : (
        <input type={type} {...commonProps as InputHTMLAttributes<HTMLInputElement>} />
      )}
      <label
        htmlFor={id}
        className={`absolute top-0 left-0 px-4 py-2 text-gray-500 pointer-events-none transition-all duration-200 ease-in-out transform origin-left ${
          isFocused ? 'translate-x-0 -translate-y-6 scale-75' : 'translate-y-2.5'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;