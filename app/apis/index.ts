import { FirstApiResponseModel, SecondApiResponseModel, ThirdApiResponseModel } from "@/types";
import axios, { AxiosResponse } from "axios";

const baseUrl = "http://localhost:8001/";

export const firstReq = async (queryParams: string): Promise<AxiosResponse<FirstApiResponseModel>> => {
  const endpoint = "first";
  try {
    const response = await axios.get(`${baseUrl+endpoint}?${queryParams}`)
    return response;
  } catch(error) {
    throw error;
  }
};

export const secondReq = async (queryParams: string): Promise<AxiosResponse<SecondApiResponseModel>> => {
  const endpoint = "second";
  try {
    const response = await axios.get(`${baseUrl+endpoint}?${queryParams}`)
    return response;
  } catch(error) {
    throw error;
  }
};

export const thirdReq = async (queryParams: string): Promise<AxiosResponse<ThirdApiResponseModel>> => {
  const endpoint = "third";
  try {
    const response = await axios.get(`${baseUrl+endpoint}?${queryParams}`)
    return response;
  } catch(error) {
    throw error;
  }
};
