import useInputDataStore from '@/app/store/input-data';
import { DefaultRequestModel } from '@/types';
import React from 'react'

type TextFieldProps = {
  ident: "indication" | "drug" | "target" | "phase" | "year" | "pilot" ;
  type?: string;
  helper?: string;
  placeholder?: string;
  explanation?: string;
  setData: React.Dispatch<React.SetStateAction<DefaultRequestModel>>;
  data: DefaultRequestModel
}
const TextField = ({
  ident,
  type="text",
  helper="helper text",
  placeholder="placeholder",
  explanation="explan",
  data,
  setData,
}: TextFieldProps) => {
  const { setInputData } = useInputDataStore();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setData(prevData => ({
      ...prevData,
      [ident]: value,
    }));
    if (ident == "indication") {
      setInputData({indication: value})
      return;
    } else if (ident == "drug") {
      setInputData({drug: value})
      return;
    } else if (ident == "target") {
      setInputData({target: value})
      return;
    } else if (ident == "phase") {
      setInputData({phase: value})
      return;
    } else if (ident == "year") {
      setInputData({year: value})
      return;
    }
  }
  return (
    <div>
      <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{helper}</label>
      <input 
        type={type}
        id="helper-text" 
        aria-describedby="helper-text-explanation" 
        className="bg-gray-50 border border-gray-950 text-gray-900 text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5 mb-4" 
        placeholder={placeholder}
        onChange={(event) => handleInputChange(event)}
      />
      {/* <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">{explanation}</p> */}
    </div>
  )
}

export default TextField
