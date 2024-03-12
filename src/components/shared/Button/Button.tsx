import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md px-3 py-2 uppercase font-semibold",
  {
    variants: {
      variant: {
        primary: "text-primaryCol hover:text-white bg-textCol hover:bg-primaryCol duration-300",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        primaryReverse: "text-white hover:bg-primaryCol/90 bg-primaryCol duration-300",
        icon: "rounded-full bg-bgCol/60 hover:bg-bgCol/80 py-0.5 px-0.5 text-2xl duration-200",
        sidebar: "hover:bg-white/10 text-white w-full justify-start gap-2 font-medium",
        activeSidebar: "bg-white/10 text-white w-full justify-start gap-2 font-medium",
      }
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, variant, className, ...props }, ref) => {

  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, className }))}
      {...props}>
      {children}
    </button>
  );
});

export default Button;