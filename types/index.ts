export type EndpointData = {
  om: string;
  desc: string;
  timeFrame: string;
}

export type FrequencyData = {
  endpoint_name: string;
  frequency: number;
}

export type DefaultRequestModel = {
  indication: string;
  drug: string;
  target: string;
  phase: string;
  year: string;
  pilot: "true" | "false";
}

export type EndpointName = {
  endpoint_name: string;
}

export type EndpointRequestModel = DefaultRequestModel & EndpointName;

export type FirstApiResponseModel = {
  freqs: Array<[string, number]>
}

export type SecondApiResponseModel = {
  generate: {
    om: string,
    desc: string,
    timeFrame: string,
  }
}

export type ThirdApiResponseModel = {
  generate: {
    inclusionCriteria: Array<string>,
    exclusionCriteria: Array<string>,
  }
}