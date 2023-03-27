import type { FC, InputHTMLAttributes, ReactNode } from 'react';
import type { Variant, Color } from 'app/components/types.server';
import type { BaseInputTypes } from 'app/components/form/types.server';

const inputVariants ={
  contained: {
    primary: `
      bg-light-light text-dark-dark border border-primary
      hover:border-primary-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-primary/[0.5]
    `,
    secondary: `
      bg-light-light text-dark-dark border border-secondary
      hover:border-secondary-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-secondary/[0.5]
    `,
    success: `
      bg-light-light text-dark-dark border border-success
      hover:border-success-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-success/[0.5]
    `,
    info: `
      bg-light-light text-dark-dark border border-info
      hover:border-info-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-info/[0.5]
    `,
    danger: `
      bg-light-light text-dark-dark border border-danger
      hover:border-danger-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-danger/[0.5]
    `,
    warning: `
      bg-light-light text-dark-dark border border-warning
      hover:border-warning-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-warning/[0.5]
    `,
    dark: `
      bg-light-light text-dark-dark border border-dark
      hover:border-dark-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-dark/[0.5]
    `,
    light: `
      bg-light-light text-dark-dark border border-light
      hover:border-light-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-light-dark/[0.5]
    `,
  },
  outlined: {
    primary: `
      bg-transparent text-dark-dark border-0 border-b border-primary/[0.5]
      hover:border-primary-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-primary/[0.5]
    `,
    secondary: `
      bg-transparent text-dark-dark border-0 border-b border-secondary/[0.5]
      hover:border-secondary-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-secondary/[0.5]
    `,
    success: `
      bg-transparent text-dark-dark border-0 border-b border-success/[0.5]
      hover:border-success-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-success/[0.5]
    `,
    info: `
      bg-transparent text-dark-dark border-0 border-b border-info/[0.5]
      hover:border-info-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-info/[0.5]
    `,
    danger: `
      bg-transparent text-dark-dark border-0 border-b border-danger/[0.5]
      hover:border-danger-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-danger/[0.5]
    `,
    warning: `
      bg-transparent text-dark-dark border-0 border-b border-warning/[0.5]
      hover:border-warning-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-warning/[0.5]
    `,
    dark: `
      bg-transparent text-dark-dark border-0 border-b border-dark/[0.5]
      hover:border-dark-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-dark/[0.5]
    `,
    light: `
      bg-transparent text-dark-dark border-0 border-b border-light/[0.5]
      hover:border-light-dark
      focus-within:outline-none
      focus-within:ring
      focus-within:ring-light-dark/[0.5]
    `,
  },
};

const labelVariants ={
  contained: {
    primary: `
      text-primary-dark
    `,
    secondary: `
      text-secondary-dark
    `,
    success: `
      text-success-dark
    `,
    info: `
      text-info-dark
    `,
    danger: `
      text-danger-dark
    `,
    warning: `
      text-warning-dark
    `,
    dark: `
      text-dark-dark
    `,
    light: `
      text-light-dark
    `,
  },
  outlined: {
    primary: `
      text-primary-dark
    `,
    secondary: `
      text-secondary-dark
    `,
    success: `
      text-success-dark
    `,
    info: `
      text-info-dark
    `,
    danger: `
      text-danger-dark
    `,
    warning: `
      text-warning-dark
    `,
    dark: `
      text-dark-dark
    `,
    light: `
      text-light-dark
    `,
  },
};

export type BaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: number | string,
  label: string,
  type?: BaseInputTypes,
  variant?: Variant,
  color?: Color,
  start?: ReactNode,
  end?: ReactNode,
  inputClassName?: string,
  labelClassName?: string,
};

export const BaseInput: FC<BaseInputProps> = (props) => {
  const {
    id,
    label,
    variant = 'contained',
    color = 'primary',
    start = null,
    end = null,
    className = '',
    inputClassName = '',
    labelClassName = '',
    ...rest
  } = props;

  return (
    <div
      className={`
        flex
        flex-col-reverse
        my-2
        ${className}
      `}
    >
      <div
        id={`${id}-control`}
        className={`
          flex
          flex-row
          bg-light-light
          border
          px-2 py-1
          placeholder:text-dark-dark/[0.4]
          ${inputVariants[variant][color]}
        `}
      >
        {start && (
          <div
            id={`${id}-start`}
            className={`
              mr-2
              text-dark-dark
            `}
          >
            {start}
          </div>
        )}
        <input
          id={`${id}-input`}
          {...rest}
          className={`
            peer
            focus:outline-none
            bg-transparent
            w-full
            ${inputClassName}
          `}
        />
        {end && (
          <div
            id={`${id}-end`}
            className={`
              ml-2
              text-dark-dark
            `}
          >
            {end}
          </div>
        )}
      </div>
      <label
        id={`${id}-label`}
        htmlFor={`${id}-input`}
        className={`
          mb-1
          ${labelVariants[variant][color]}
          ${labelClassName}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default BaseInput;
