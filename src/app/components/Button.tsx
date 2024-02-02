import React from "react"

interface Props {
  onClick: () => void
  children: string | React.ReactNode
  disabled?: boolean
}

const Button = ({ onClick, children, disabled }: Props) => {
  return (
    <button
      className={`bg-grey-900 disabled:bg-grey-100 disabled:text-grey-300 w-full rounded-md py-[10px]
      font-medium text-white
      duration-150 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] disabled:hover:cursor-not-allowed disabled:hover:shadow-none
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
