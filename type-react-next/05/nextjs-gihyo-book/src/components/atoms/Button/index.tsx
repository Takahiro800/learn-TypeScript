import styled from 'styled-components'
import 'tailwindcss/tailwind.css'

export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  children: string
}

export const Button = (props: ButtonProps) => {
  const { variant, children } = props

  return (
    <button className="rounded border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
      {children}
    </button>
  )
}
