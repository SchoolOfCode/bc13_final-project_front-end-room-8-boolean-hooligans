import React from 'react'
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import FormSubmissionPopUp from "../modals/formSubmissionPopUp";
import Link from 'next/link';
import Router from 'next/router'

export default function Step2({setStep, formValues, setFormValues}) {
  const {register, handleSubmit} = useForm();

  
  async function onSubmit(values) {
    setFormValues({...formValues, ...values})
    setStep(3)
  }
  
  
  console.log(formValues);
  return (
    <div>
    <h2>Personality:</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="char_hopes">What are their hopes, dreams, goals, and motivations?:</label>
      <textarea rows="4" cols="50" {...register('char_hopes', { required: false })} name="char_hopes" id="char_hopes"/>
      <label htmlFor="char_fears">What are their fears, troubles and flaws?:</label>
      <textarea rows="4" cols="50" {...register('char_fears', { required: false })} name="char_fears" id="char_fears"/>
      <label htmlFor="char_speech">Do they have any catch phrases, sayings or speech patterns?:</label>
      <textarea rows="4" cols="50" {...register('char_speech', { required: false })} name="char_speech" id="char_speech"/>
      <label htmlFor="char_likes">What are their likes and dislikes?:</label>
      <textarea placeholder='Food, music etc.' rows="4" cols="50" {...register('char_likes', { required: false })} name="char_likes" id="char_likes"/>
      

      <button onClick={() => setStep(1)} type="submit">Back</button>
      <button type='submit'>Next</button>
    </form>
    </div>
  )
}