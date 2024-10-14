import React from 'react';

type SelectCardProps = {
  header?: string;
  body?: string;
  checked?: boolean;
}
const SelectCard = ({
  header,
  body,
  checked=false,
}: SelectCardProps) => {
  const defaultHeadStyle = "w-[17rem] font-bold leading-4 tracking-tight text-slate-800 my-3 text-lg"
  const defaultBodyStyle = "w-[5rem]"
  return (
    <div className={`
      ${checked ? "bg-primary-100" : "bg-background dark:bg-foreground"}
      flex
      flex-row
      items-center
      justify-between
      w-[100%]
      rounded-2xl
      px-6
      pb-4
      border
      border-background/5
      hover:border
      hover:border-primary-300
      hover:cursor-pointer
      hover:bg-background/[0.01]
    `}>
      {header && 
        <h1 className={defaultHeadStyle}>
          {header}
        </h1>
      }
      {body &&
        <span className={defaultBodyStyle+"left-10"}>
          {body}
        </span>
      }
    </div>
  )
}

export default SelectCard