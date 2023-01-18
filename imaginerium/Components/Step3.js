import React from 'react'
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import FormSubmissionPopUp from "../modals/formSubmissionPopUp";
import Link from 'next/link';
import Router from 'next/router'

export default function Step3({setStep, formValues, setFormValues}) {
  const {register, handleSubmit} = useForm();
  const [showModal, setShowModal] = useState(false)
  
/*Use to post to backend */
  async function addNewCharacter(formValues) {
    // await fetch(`https://imaginerium-qpii.onrender.com/characters`, {
    //   method: "POST",
    //   mode: "cors",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formValues),
    // });
  }

  
  async function onSubmit(values) {
    console.log({...formValues, ...values})
    setShowModal(true)
  }
  
  console.log("After submit",formValues);
  return (
    <div>
    <h2>Miscellaneous:</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="char_hopes">What are their hopes, dreams, goals, and motivations?:</label>
      <textarea rows="4" cols="50" {...register('char_hopes', { required: true })} name="char_hopes" id="char_hopes"/>
      <label htmlFor="char_fears">What are their fears, troubles and flaws?:</label>
      <textarea rows="4" cols="50" {...register('char_fears', { required: true })} name="char_fears" id="char_fears"/>
      <label htmlFor="char_speech">Do they have any catch phrases, sayings or speech patterns?:</label>
      <textarea rows="4" cols="50" {...register('char_speech', { required: true })} name="char_speech" id="char_speech"/>
      <label htmlFor="char_likes">What are their likes and dislikes?:</label>
      <textarea placeholder='Food, music etc.' rows="4" cols="50" {...register('char_likes', { required: true })} name="char_likes" id="char_likes"/>
      <button type='submit'>Next</button>
    </form>
    {showModal ? (<FormSubmissionPopUp >
          <div className="form-submission-pop-up">
              <h3>Character created successfully!</h3>
            <button onClick={()=>{Router.reload(window.location.createCharacter)}}>Create another character</button><Link href="/characterList"><button >View Characters
          </button></Link>
              </div>
            </FormSubmissionPopUp>):null }
    </div>
  )
}