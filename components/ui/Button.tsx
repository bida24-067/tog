import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      withArrow = true,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans uppercase font-medium tracking-[0.14em] transition-all duration-300 ease-out select-none rounded-[var(--radius)] group";

    const sizeStyles = {
      sm: "text-[11px] py-2 px-4 gap-1.5",
      md: "text-[12px] py-3.5 px-6 gap-2",
      lg: "text-[13px] py-4 px-8 gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-primary text-white hover:bg-accent border border-primary hover:border-accent shadow-sm",
      secondary:
        "bg-surface text-primary hover:bg-[#ded9cb] border border-[#ded9cb]",
      outline:
        "border border-primary text-primary hover:bg-primary hover:text-white bg-transparent",
      ghost:
        "text-primary hover:text-accent bg-transparent p-0 tracking-[0.16em]",
    };

    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    const content = (
      <>
        <span>{children}</span>
        {withArrow && (
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        )}
      </>
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
