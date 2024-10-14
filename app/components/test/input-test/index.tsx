"use client";

import axios from 'axios';
import React from 'react';

type Data = {
  indication: string;
  drug: string;
  target: string;
  phase: string;
  year: string;
  pilot: string;
}

const InputTest = () => {
  const [data, setData] = React.useState<Data>({
    indication: "",
    drug: "",
    target: "",
    phase: "",
    year: "",
    pilot: "",
  })
  const [result, setResult] = React.useState<any>();
  const handleSubmitButtom = async (event: React.FormEvent) => {
    event.preventDefault();
    const queryParams = new URLSearchParams(data as Record<string, string>).toString();
    const response = await axios.get(`http://localhost:8001/test?${queryParams}`)
    if (response) setResult(response.data);
    console.log(response);
  }
  return (
    <div className='bg-slate-200'>
      <form onSubmit={handleSubmitButtom} className='flex flex-col my-8 gap-x-4'>
        indi<input className='bg' type="text" value={data.indication} onChange={(event) => setData({...data, indication: event.target.value})} />
        drug<input className='bg' type="text" value={data.drug} onChange={(event) => setData({...data, drug: event.target.value})} />
        target<input className='bg' type="text" value={data.target} onChange={(event) => setData({...data, target: event.target.value})} />
        phase<input className='bg' type="text" value={data.phase} onChange={(event) => setData({...data, phase: event.target.value})} />
        year<input className='bg' type="text" value={data.year} onChange={(event) => setData({...data, year: event.target.value})} />
        pilot<input className='bg' type="text" value={data.pilot} onChange={(event) => setData({...data, pilot: event.target.value})} />
        <button className='bg-slate-400 my-4' type='submit'>submit</button>
      </form>
      {result && <div>{result.data}</div>}
    </div>
  )
}

export default InputTest