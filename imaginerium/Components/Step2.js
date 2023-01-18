import React from 'react'
import {useForm} from 'react-hook-form';

export default function Step2({setStep, formValues, setFormValues}) {
  const {register, handleSubmit} = useForm();

  async function addNewCharacter(formValues) {
    await fetch(`https://imaginerium-qpii.onrender.com/characters`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    });
  }

  
  async function onSubmit(values) {
    await addNewCharacter({...formValues, ...values})
  }
  
  console.log(formValues);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="char_age">How old are they in years?</label>
          <input type="number" {...register('char_age', { required: true })} name="char_age" id="char_age"/>

          <label htmlFor="char_alive">Are they alive?</label>
          <select className='dropdown' {...register('char_alive', { required: true })} name="char_alive" id="char_alive">
          <option value="true">They live!</option>
          <option value="false">They are dead!</option>
          </select>
          <button type='submit'>Submit</button>
            
        
    </form>
    </div>
  )
}
