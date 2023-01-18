import React, { cloneElement } from 'react'
import {useForm} from 'react-hook-form';

export default function Step1({setStep, formValues, setFormValues}) {

  const {register, handleSubmit} = useForm();

  function onSubmit(values) {
    // console.log(values);
    setFormValues({...formValues, ...values});
    setStep(2);
  }
  

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="char_name">Character Name:</label>
          <input type="text" {...register('char_name', { required: true })} name="char_name" id="char_name"/>
          
          <label htmlFor="char_height">Height in feet?</label>
          <select className='dropdown' {...register('char_height', { required: true })} name="char_height" id="char_height">
          <option value="" defaultValue>How tall are they?</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          </select>
          <button type='submit'>Next</button>
    </form>
      
    </div>
  )
}