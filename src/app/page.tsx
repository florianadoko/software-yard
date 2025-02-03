'use client'
import { useState } from 'react';
import StepOne from './features/StepOne';
import StepTwo from './features/StepTwo';
import MultiStepForm from './pages';


const Home = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);

  return (
   <MultiStepForm/>
  );
};

export default Home;
