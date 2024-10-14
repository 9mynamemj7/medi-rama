import React from 'react'

const headStyle = {
  large: 'w-full',
  medium: 'w-full',
  small: 'w-full',
  "x-small": 'w-full',
}
const bodyStyle = {
  large: 'w-full',
  medium: 'w-full',
  small: 'w-full',
  "x-small": 'w-full',
}

type CardContentsProps = {
  header?: string;
  body?: string;
  type?: "large" | "medium" | "small" | "x-small";
}
const CardContents = ({
  header,
  body,
  type="large",
}: CardContentsProps) => {
  const defaultHeadStyle = "font-bold leading-4 tracking-tight text-slate-800 my-3 text-lg lg:max-w-xl lg:text-2xl "

  return (
    <div className={`dark:bg-foreground bg-background flex ${type == "x-small" ? "flex-col items-start w-[22.5rem]" : "flex-col w-[100%]"} rounded-2xl px-6 pb-4 border border-background/[0.9]`}>
      {header && 
        <h1 className={defaultHeadStyle + headStyle[type]}>
          {header}
        </h1>
      }
      {body &&
        <span className={`font-medium dark:text-gray-500 ${bodyStyle}`}>
          {body}
        </span>
      }
    </div>
  )
}

export default CardContents