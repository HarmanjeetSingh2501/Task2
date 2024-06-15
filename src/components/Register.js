import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import BusinessForm from './BusinessForm';
import '../styles/Register.css';

const Register = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="container">
      <div className="form-content">
        {step === 1 && <ProfileForm nextStep={nextStep} setStep={setStep} step={step} />}
        {step === 2 && <BusinessForm prevStep={prevStep} nextStep={nextStep} setStep={setStep} step={step} />}
      </div>
    </div>
  );
};

export default Register;
