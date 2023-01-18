import React, { cloneElement } from 'react'
import {useForm} from 'react-hook-form';
import { useState } from 'react';

export default function Step1({setStep, formValues, setFormValues}) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const {register, handleSubmit} = useForm();

  function onSubmit(values) {
    // console.log(values);
    setFormValues({...formValues, ...values});
    setStep(2);
  }
  
  async function randomName(){
      const response = await fetch (`https://randomuser.me/api/`)
      const data = await response.json()
      setFirstName(data.results[0].name.first + ' ' + data.results[0].name.last)
      // setLastName(data.results[0].name.last)
    }
  

  return (
    <div>
    <h2>Physical features:</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="char_name">Character Name:</label>
          <input defaultValue={firstName} type="text" {...register('char_name', { required: true })} name="char_name" id="char_name"/>
          <button onClick={()=> randomName()}>Randomise</button>
          <img src="https://randomuser.me/api/portraits/men/60.jpg" alt='Character placeholder'></img>
          <label htmlFor="char_img">Enter image url:</label>
          <input name="char_img" type='text'/>
          <label htmlFor="char_age">How old are they in years?</label>
          <input placeholder="Enter number" type="number" {...register('char_age', { required: true })} name="char_age" id="char_age"/>
          <label htmlFor="char_species">Character species:</label>
          <input type="text" {...register('char_species', { required: true })} name="char_species" id="char_species"/>
          <label htmlFor="char_hairColour">Hair colour:</label>
          <input type="text" {...register('char_hairColour', { required: true })} name="char_hairColour" id="char_hairColour"/>
          <label htmlFor="char_eyeColour">Eye colour:</label>
          <input type="text" {...register('char_eyeColour', { required: true })} name="char_eyeColour" id="char_eyeColour"/>
          <label htmlFor="char_skinColour">Skin colour:</label>
          <input type="text" {...register('char_skinColour', { required: true })} name="char_skinColour" id="char_skinColour"/>
          <label htmlFor="char_height">Height in feet?</label>
          <input placeholder="Enter number" type="number" {...register('char_height', { required: true })} name="char_height" id="char_height"/>
          <label htmlFor="char_weight">Weight in kg?</label>
          <input placeholder="Enter number" type="number" {...register('char_weight', { required: true })} name="char_weight" id="char_weight"/>
          <label htmlFor="char_features">Character special features</label>
          <input placeholder="Scars / piercings /tattoos / prosthetics" type="text" {...register('char_features', { required: true })} name="char_features" id="char_features"/>
          <label htmlFor="char_desc">Character description:</label>
          <textarea rows="4" cols="50" {...register('char_desc', { required: true })} name="char_desc" id="char_desc"/>
          <label htmlFor="char_alive">Are they alive?</label>
          <select className='dropdown' {...register('char_alive', { required: true })} name="char_alive" id="char_alive">
          <option value="true">They live!</option>
          <option value="false">They are dead!</option>
          </select>
          <button type='submit'>Next</button>
    </form>
      
    </div>
  )
}