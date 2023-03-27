import type {
  FC,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from 'react';
import type { Variant, Color } from 'app/components/types.server';

const variants ={
  contained: {
    primary: `
      bg-primary text-light-light border-primary border-b-primary-dark
      hover:bg-primary-dark
      focus:outline-none
      focus:ring
      focus:ring-primary/[0.5]
    `,
    secondary: `
      bg-secondary text-light-light boarder-secondary border-b-secondary-dark
      hover:bg-secondary-dark
      focus:outline-none
      focus:ring
      focus:ring-secondary/[0.5]
    `,
    success: `
      bg-success text-light-light border-success border-b-success-dark
      hover:bg-success-dark
      focus:outline-none
      focus:ring
      focus:ring-success/[0.5]
    `,
    info: `
      bg-info text-light-light border-info border-b-info-dark
      hover:bg-info-dark
      focus:outline-none
      focus:ring
      focus:ring-info/[0.5]
    `,
    danger: `
      bg-danger text-light-light border-danger border-b-danger-dark
      hover:bg-danger-dark
      focus:outline-none
      focus:ring
      focus:ring-danger/[0.5]
    `,
    warning: `
      bg-warning text-light-light border-warning border-b-warning-dark
      hover:bg-warning-dark
      focus:outline-none
      focus:ring
      focus:ring-warning/[0.5]
    `,
    dark: `
      bg-dark text-light-light border-dark border-b-dark-dark
      hover:bg-dark-dark
      focus:outline-none
      focus:ring
      focus:ring-dark/[0.5]
    `,
    light: `
      bg-light text-dark border-light border-b-light-dark
      hover:bg-light-dark hover:text-light-light
      focus:outline-none
      focus:ring
      focus:ring-light-dark/[0.5]
    `,
  },
  outlined: {
    primary: `
      bg-transparent text-primary-dark border-primary border-b-primary-dark
      hover:bg-primary-dark hover:text-light-light hover:border-primary-dark
      focus:outline-none
      focus:ring
      focus:ring-primary/[0.5]
    `,
    secondary: `
      bg-transparent text-secondary border border-secondary border-b-secondary-dark
      hover:bg-secondary-dark hover:text-light-light hover:border-secondary-dark
      focus:outline-none
      focus:ring
      focus:ring-secondary/[0.5]
    `,
    success: `
      bg-transparent text-success-dark border border-success border-b-success-dark
      hover:bg-success-dark hover:text-light-light hover:border-success-dark
      focus:outline-none
      focus:ring
      focus:ring-success/[0.5]
    `,
    info: `
      bg-transparent text-info-dark border border-info border-b-info-dark
      hover:bg-info-dark hover:text-light-light hover:border-info-dark
      focus:outline-none
      focus:ring
      focus:ring-info/[0.5]
    `,
    danger: `
      bg-transparent text-danger-dark border border-danger border-b-danger-dark
      hover:bg-danger-dark hover:text-light-light hover:border-danger-dark
      focus:outline-none
      focus:ring
      focus:ring-danger/[0.5]
    `,
    warning: `
      bg-transparent text-warning-dark border border-warning border-b-warning-dark
      hover:bg-warning-dark hover:text-light-light hover:border-warning-dark
      focus:outline-none
      focus:ring
      focus:ring-warning/[0.5]
    `,
    dark: `
      bg-transparent text-dark border border-dark border-b-dark-dark
      hover:bg-dark-dark hover:text-light-light hover:border-dark-dark
      focus:outline-none
      focus:ring
      focus:ring-dark/[0.5]
    `,
    light: `
      bg-transparent text-light-dark border border-light border-b-light-dark
      hover:bg-light-dark hover:text-light-light hover:border-light-dark
      focus:outline-none
      focus:ring
      focus:ring-light-dark/[0.5]
    `,
  },
  text: {
    primary: `
      bg-transparent text-primary-dark border-transparent
      hover:bg-primary-dark hover:text-light-light hover:border-primary-dark
      focus:outline-none
      focus:ring
      focus:ring-primary/[0.5]
    `,
    secondary: `
      bg-transparent text-secondary-dark border-transparent
      hover:bg-secondary-dark hover:text-light-light hover:border-secondary-dark
      focus:outline-none
      focus:ring
      focus:ring-secondary/[0.5]
    `,
    success: `
      bg-transparent text-success-dark border-transparent
      hover:bg-success-dark hover:text-light-light hover:border-success-dark
      focus:outline-none
      focus:ring
      focus:ring-success/[0.5]
    `,
    info: `
      bg-transparent text-info-dark border-transparent
      hover:bg-info-dark hover:text-light-light hover:border-info-dark
      focus:outline-none
      focus:ring
      focus:ring-info/[0.5]
    `,
    danger: `
      bg-transparent text-danger-dark border-transparent
      hover:bg-danger-dark hover:text-light-light hover:border-danger-dark
      focus:outline-none
      focus:ring
      focus:ring-danger/[0.5]
    `,
    warning: `
      bg-transparent text-warning-dark border-transparent
      hover:bg-warning-dark hover:text-light-light hover:border-warning-dark
      focus:outline-none
      focus:ring
      focus:ring-warning/[0.5]
    `,
    dark: `
      bg-transparent text-dark-dark border-transparent
      hover:bg-dark-dark hover:text-light-light hover:border-dark-dark
      focus:outline-none
      focus:ring
      focus:ring-dark/[0.5]
    `,
    light: `
      bg-transparent text-light-dark border-transparent
      hover:bg-light-dark hover:text-light-light hover:border-light-dark
      focus:outline-none
      focus:ring
      focus:ring-light-dark/[0.5]
    `,
  }
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant | 'text',
  color?: Color,
};

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    variant = 'contained',
    color = 'primary',
    className = '',
    children,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={`
        ${variants[variant][color]}
        text-sm
        rounded-sm
        py-1
        px-1.5
        border
        border-b-2
        capitalize
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
