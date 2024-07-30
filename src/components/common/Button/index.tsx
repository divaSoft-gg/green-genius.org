import { Link } from 'react-router-dom';
import { ButtonProps } from '../../../helpers/types';

const Button : React.FC<ButtonProps> = ({ children, form, className, to, type, onClick, disabled }) => {
  if (to) {
    return (
      <Link
        to={to}
        className={` ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      form={form}
      type={type}
      className={` ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;