import React, { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
// import styles from '../styles/Form.module.css';

export default function Form() {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});

  return (
    <div>
      {step === 1 && (
        <Step1
          setStep={setStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )}
      {step === 2 && (
        <Step2
          setStep={setStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )}
      {step === 3 && (
        <Step3
          setStep={setStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )}
    </div>
  );
}
