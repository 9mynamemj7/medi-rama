"use client";

import React from 'react';
import TextField from '../global/custom-input';
import { DefaultRequestModel, FirstApiResponseModel } from '@/types';
import CustomButton from '../global/custom-button';
import CustomToggle from '../global/custom-toggle';
import { firstReq } from '@/app/apis';

type Data = DefaultRequestModel;

type InputSectionProps = {
  setFirstData: React.Dispatch<React.SetStateAction<FirstApiResponseModel | undefined>>
}
const InputSection = ({
  setFirstData,
}: InputSectionProps) => {
  const [data, setData] = React.useState<Data>({
    indication: "",
    drug: "",
    target: "",
    phase: "",
    year: "",
    pilot: "false",
  });
  const [isButtonAbled, setIsButtonAbled] = React.useState<boolean>(false);
  const checkButtonDisbled = () => {
    const values = Object.values(data);
    const isDisabled = values.some(value => value === "");
    setIsButtonAbled(!isDisabled);
  };
  const handleButtonClick = () => {
    const queryParams = new URLSearchParams(data as Record<string, string>).toString();
    firstReq(queryParams).then((response) => setFirstData(response.data));
  }
  React.useEffect(() => {
    checkButtonDisbled()
  }, [data])
  return (
    <div className='flex flex-row'>
      <div className='w-2/3 mr-4'>
        <TextField key="indication" ident="indication" helper='indication' placeholder="HER2-positive breast cancer" data={data} setData={setData} />
        <TextField key="drug" ident="drug" helper='drug' placeholder="Trastuzumab" data={data} setData={setData} />
        <TextField key="target" ident="target" helper='target' placeholder="HER2" data={data} setData={setData} />
      </div>
      <div className='w-1/3'>
        <div className='flex flex-row gap-x-1'>
          <TextField key="phase" ident="phase" helper='phase' placeholder='2' data={data} setData={setData} />
          <TextField key="year" ident="year" helper='year' placeholder='5' data={data} setData={setData} />
        </div>
        <div className='flex flex-col justify-around items-center pt-8'>
          <div><CustomToggle setData={setData} /></div>
          <div className='pt-12'><CustomButton onClick={handleButtonClick} content="Submit" type={isButtonAbled ? 'outlined' : 'disabled'} /></div>
        </div>
      </div>
    </div>
  )
}

export default InputSection;