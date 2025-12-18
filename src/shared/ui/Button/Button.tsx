import { ButtonHTMLAttributes, ReactNode } from "react"
import clsx from "clsx"
import s from "./Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline"
  children: ReactNode
}

export const Button = ({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={clsx(s.button, s[variant], className)} {...props}>
      {children}
    </button>
  )
}
