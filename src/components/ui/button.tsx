import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  variant: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = ({ title, variant, className, ...props }) => {
  return (
    <button
      className={`${variant === 'primary' ? 'bg-primary-content' : 'bg-transparent'} border-primary-content hover:text-primary-content max-w-max cursor-pointer rounded border-2 px-6 py-1 duration-300 hover:bg-transparent ${className}`}
      {...props}
    >
      {title}
    </button>
  )
}

export default Button
