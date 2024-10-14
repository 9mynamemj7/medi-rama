import React from 'react'

const headStyle = {
  large: 'w-full',
  medium: 'w-full',
  small: 'w-full',
  "x-small": 'w-1/3',
}
const bodyStyle = {
  large: 'w-full',
  medium: 'w-full',
  small: 'w-full',
  "x-small": 'w-2/3',
}

type ECCardProps = {
  header?: string;
  body?: Array<string>;
  type?: "large" | "medium" | "small" | "x-small";
}
const ECCard = ({
  header,
  body=[""],
  type="large",
}: ECCardProps) => {
  const defaultHeadStyle = "font-bold leading-4 tracking-tight text-slate-800 my-3 text-lg lg:max-w-xl lg:text-2xl "

  return (
    <div className={`bg-background dark:bg-foreground flex ${type == "x-small" ? "flex-row items-center w-[22.5rem]" : "flex-col w-[100%]"} rounded-2xl px-6 pb-4 border border-background/[0.9]`}>
      {header && 
        <h1 className={defaultHeadStyle + headStyle[type]}>
          {header}
        </h1>
      }
      {body &&
        <div>
          {body.map((item, index) => {
            return (
              <li key={index} className={`font-medium dark:text-gray-500 ${bodyStyle}`}>
                {item}
              </li>
            )
          })}
        </div>
      }
    </div>
  )
}

export default ECCard