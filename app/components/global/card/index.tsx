import React from 'react';


const style = {
  large: 'flex '
}

type CardProps = {
  children?: React.ReactNode | string | number;
  className?: string;
}
const Card = ({
  children,
  className=""
}: CardProps) => {
  return (
    <div className={`relative flex flex-wrap break-words w-[80rem] h-auto px-7 py-6 rounded-2xl shadow-sm border border-black/[.05] bg-white ${className}`}>
      {children}
    </div>
  )
}

export default Card