import type {
  FC,
  InputHTMLAttributes,
  MouseEvent,
  KeyboardEvent,
} from 'react';
import { useRef } from 'react';
import type { Variant, Color } from './types.server';

const variants = {
  contained: {
    primary: `
      bg-primary/[0.1] text-primary-dark
      hover:bg-primary-dark hover:text-light-light
      peer-checked:bg-primary peer-checked:text-light
      peer-checked:hover:bg-primary-dark
      focus:outline-none
      focus:ring
      focus:ring-primary/[0.5]
    `,
    secondary: `
      bg-secondary/[0.2] text-secondary-dark
      hover:bg-secondary-dark hover:text-light-light
      peer-checked:bg-secondary peer-checked:text-light
      peer-checked:hover:bg-secondary-dark
      focus:outline-none
      focus:ring
      focus:ring-secondary/[0.5]
    `,
    success: `
      bg-success/[0.2] text-success-dark
      hover:bg-success-dark hover:text-light-light
      peer-checked:bg-success peer-checked:text-light
      peer-checked:hover:bg-success-dark
      focus:outline-none
      focus:ring
      focus:ring-success/[0.5]
    `,
    info: `
      bg-info/[0.2] text-info-dark
      hover:bg-info-dark hover:text-light-light
      peer-checked:bg-info peer-checked:text-light
      peer-checked:hover:bg-info-dark
      focus:outline-none
      focus:ring
      focus:ring-info/[0.5]
    `,
    danger: `
      bg-danger/[0.2] text-danger-dark
      hover:bg-danger-dark hover:text-light-light
      peer-checked:bg-danger peer-checked:text-light
      peer-checked:hover:bg-danger-dark
      focus:outline-none
      focus:ring
      focus:ring-danger/[0.5]
    `,
    warning: `
      bg-warning/[0.2] text-warning-dark
      hover:bg-warning-dark hover:text-light-light
      peer-checked:bg-warning peer-checked:text-dark
      peer-checked:hover:bg-warning-dark peer-checked:hover:text-light-light
      focus:outline-none
      focus:ring
      focus:ring-warning/[0.5]
    `,
    dark: `
      bg-dark/[0.2] text-dark-dark
      hover:bg-dark-dark hover:text-light-light
      peer-checked:bg-dark peer-checked:text-light
      peer-checked:hover:bg-dark-dark
      focus:outline-none
      focus:ring
      focus:ring-dark/[0.5]
    `,
    light: `
      bg-light/[0.2] text-dark
      hover:bg-light-dark hover:text-dark
      peer-checked:bg-light peer-checked:text-dark
      peer-checked:hover:bg-light-dark
      focus:outline-none
      focus:ring
      focus:ring-light/[0.5]
    `,
  },
  outlined: {
    primary: `
      bg-transparent text-primary border border-primary
      hover:bg-primary-dark hover:text-light-light hover:border-primary-dark
      peer-checked:bg-primary peer-checked:text-light :peer-checked:border-primary
      peer-checked:hover:bg-primary-dark peer-checked:hover:border-primary-dark
      focus:outline-none
      focus:ring
      focus:ring-primary/[0.5]
    `,
    secondary: `
      bg-transparent text-secondary border border-secondary
      hover:bg-secondary-dark hover:text-light-light hover:border-secondary-dark
      peer-checked:bg-secondary peer-checked:text-light :peer-checked:border-secondary
      peer-checked:hover:bg-secondary-dark peer-checked:hover:border-secondary-dark
      focus:outline-none
      focus:ring
      focus:ring-secondary/[0.5]
    `,
    success: `
      bg-transparent text-success border border-success
      hover:bg-success-dark hover:text-light-light hover:border-success-dark
      peer-checked:bg-success peer-checked:text-light :peer-checked:border-success
      peer-checked:hover:bg-success-dark peer-checked:hover:border-success-dark
      focus:outline-none
      focus:ring
      focus:ring-success/[0.5]
    `,
    info: `
      bg-transparent text-info border border-info
      hover:bg-info-dark hover:text-light-light hover:border-info-dark
      peer-checked:bg-info peer-checked:text-light :peer-checked:border-info
      peer-checked:hover:bg-info-dark peer-checked:hover:border-info-dark
      focus:outline-none
      focus:ring
      focus:ring-info/[0.5]
    `,
    danger: `
      bg-transparent text-danger border border-danger
      hover:bg-danger-dark hover:text-light-light hover:border-danger-dark
      peer-checked:bg-danger peer-checked:text-light :peer-checked:border-danger
      peer-checked:hover:bg-danger-dark peer-checked:hover:border-danger-dark
      focus:outline-none
      focus:ring
      focus:ring-danger/[0.5]
    `,
    warning: `
      bg-transparent text-warning border border-warning
      hover:bg-warning-dark hover:text-light-light hover:border-warning-dark
      peer-checked:bg-warning peer-checked:text-light :peer-checked:border-warning
      peer-checked:hover:bg-warning-dark peer-checked:hover:border-warning-dark
      focus:outline-none
      focus:ring
      focus:ring-warning/[0.5]
    `,
    dark: `
      bg-transparent text-dark border border-dark
      hover:bg-dark-dark hover:text-light-light hover:border-dark-dark
      peer-checked:bg-dark peer-checked:text-light :peer-checked:border-dark
      peer-checked:hover:bg-dark-dark peer-checked:hover:border-dark-dark
      focus:outline-none
      focus:ring
      focus:ring-dark/[0.5]
    `,
    light: `
      bg-transparent text-light border border-light
      hover:bg-light-dark hover:text-dark hover:border-light-dark
      peer-checked:bg-light peer-checked:text-dark :peer-checked:border-light
      peer-checked:hover:bg-light-dark peer-checked:hover:border-light-dark
      focus:outline-none
      focus:ring
      focus:ring-light/[0.5]
    `,
  },
};

export type RadioPillProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string,
  variant?: Variant,
  color?: Color,
};

export const RadioPill: FC<RadioPillProps> = (props) => {
  const {
    id,
    label,
    name,
    variant = 'contained',
    color = 'primary',
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const pillRef = useRef<HTMLLabelElement>(null);

  const handleKeyUp = (event: KeyboardEvent<HTMLLabelElement>) => {
    if(event.key === "Enter" && inputRef.current) {
      inputRef.current.checked = true;
    }
  };

  const handleClick = (event: MouseEvent<HTMLLabelElement>) => {
    const oldSelected = document.querySelector(`label[data-name=${name}][aria-checked=true]`);
    if(oldSelected) {
      oldSelected.setAttribute('aria-checked', "false");
    }

    pillRef.current?.setAttribute('aria-checked', "true");

    if(inputRef.current) {
      inputRef.current.checked = true;
    }
  };

  return (
    <div>
      <input
        {...rest}
        ref={inputRef}
        name={name}
        id={`${id}-input`}
        type="radio"
        className="peer hidden"
      />
      <label
        role="radio"
        htmlFor={`${id}-input`}
        id={`${id}-pill`}
        data-name={name}
        ref={pillRef}
        aria-checked="false"
        tabIndex={0}
        onClick={handleClick}
        onKeyUp={handleKeyUp}
        aria-labelledby={`${id}-label`}
        className={`
          ${variants[variant][color]}
          cursor-pointer
          capitalize
          text-xs
          rounded-sm
          py-0.5
          px-1.5
        `}
      >
        <span id={`${id}-label`}>
          {label}
        </span>
      </label>
    </div>
  );
};

export default RadioPill;
