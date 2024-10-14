import React from 'react';

const backgroundColor = {
  filled: "bg-primary-500 hover:bg-primary-500/[.8] hover:cursor-pointer text-background",
  outlined: "bg-white hover:bg-[#FAFAFA]/[.9] hover:cursor-pointer text-[#222222] hover:text-primary-300",
  disabled: "bg-gray-300 hover:cursor-not-allowed text-background"
}

type CustomButtonProps = {
  content: React.ReactNode | string | number;
  type?: "filled" | "outlined" | "disabled";
  className?: string;
  onClick?: () => void;
}
const CustomButton = ({
  content,
  type="filled",
  className="",
  onClick,
}: CustomButtonProps) => {
  return (
    <button
      className={`
        
        rounded-2xl
        border
        border-solid
        border-black/[.08]
        dark:border-white/[.145]
        transition-colors
        ${backgroundColor[type]}
        bg-foreground
        flex
        items-center
        justify-center
        hover:border-transparent
        text-2xl
        sm:text-base
        h-8
        sm:h-12
        px-4
        sm:px-5
        sm:min-w-24
        ${className}
      `}
      rel="noopener noreferrer"
      onClick={type == "disabled" ? () => {} : onClick}
    >
      {content??""}
    </button>
  )
}

export default CustomButton