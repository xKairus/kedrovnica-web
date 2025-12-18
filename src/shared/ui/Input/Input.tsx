import { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import s from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className={clsx(s.wrapper, className)}>
        {label && <label className={s.label}>{label}</label>}
        <input
          ref={ref}
          className={clsx(s.input, { [s.errorInput]: !!error })}
          {...props}
        />
        {error && <span className={s.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';