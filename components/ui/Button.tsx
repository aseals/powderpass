"use client";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium tracking-tight transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-[#111111] text-[#FAFAFA] hover:bg-[#333333] active:scale-[0.98]":
              variant === "primary",
            "border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#FAFAFA]":
              variant === "outline",
            "text-[#111111] hover:bg-[#F0F0F0]": variant === "ghost",
          },
          {
            "px-4 py-2 text-sm rounded-md": size === "sm",
            "px-6 py-3 text-base rounded-lg": size === "md",
            "px-8 py-4 text-lg rounded-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
