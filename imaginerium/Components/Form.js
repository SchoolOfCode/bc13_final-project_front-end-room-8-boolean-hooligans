import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Step1 from './Step1';
import Step2 from './Step2';
// import styles from '../styles/Form.module.css';
 
export default function Form() {
  const {register, handleSubmit} = useForm();
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});

 
    
  
  return (
    
      <div>
        <p>Step {step} of 2</p>
        {
          step === 1 && (<Step1 setStep={setStep} formValues={formValues} setFormValues={setFormValues}/>)
        }
        {
          step === 2 && (<Step2 setStep={setStep} formValues={formValues} setFormValues={setFormValues}/>)
        }
        
        
      </div>
   
  )
}