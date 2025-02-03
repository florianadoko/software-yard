import { create } from "zustand";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
}

interface FormStore {
  formData: FormData;
  step: number;
  setFormData: (updates: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  restartForm: () => void;
}

export const useFormStore = create<FormStore>((set) => ({
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    countryCode: "+44",
  },
  step: 1,
  
  setFormData: (updates) => set((state) => ({ formData: { ...state.formData, ...updates } })),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  restartForm: () => set(() => ({ step: 1, formData: { firstName: "", lastName: "", email: "", phoneNumber: "", countryCode: "+44" } })),
}));
