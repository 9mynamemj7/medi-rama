import React from 'react'
// import { Logo } from '../../../assets/logo.png';

type CodeBlockProps = {
  children: React.ReactNode | string | number;
}
const CodeBlock = ({
  children,
}: CodeBlockProps) => {
  return (
    <code className="mr-10 dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
      {children} by mediaiplus
      {/* <img width={100} height={20} alt='logo' src={Logo} /> */}
      <span className='ml-4 font-thin text-xs'></span>
    </code>
  )
}

export default CodeBlock