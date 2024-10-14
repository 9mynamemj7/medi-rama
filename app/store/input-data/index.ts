import { EndpointRequestModel } from '@/types';
import { create } from 'zustand';

type InputDataStore = {
  inputData: EndpointRequestModel;
  setInputData: (newInputData: Partial<EndpointRequestModel>) => void;
};
const useInputDataStore = create<InputDataStore>((set) => ({
  inputData: {
    indication: "",
    drug: "",
    target: "",
    phase: "",
    year: "",
    pilot: "false",
    endpoint_name: "",
  },
  setInputData: (newInputData) => set((state) => ({
    inputData: { ...state.inputData, ...newInputData}}))
}))

export default useInputDataStore;