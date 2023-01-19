import React from 'react'
import {useForm} from 'react-hook-form';
import { useState, useRef } from 'react';
import FormSubmissionPopUp from "../modals/formSubmissionPopUp";
import Link from 'next/link';
import Router from 'next/router'


export default function Step3({setStep, formValues, setFormValues}) {
  const {register, handleSubmit} = useForm();
  const [showModal, setShowModal] = useState(false)
  const myForm = useRef();
  
/*Use to post to backend */
  async function addNewCharacter(formValues) {
    await fetch(`https://imaginerium-qpii.onrender.com/characters`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    });
  }

  
  async function onSubmit(values) {
    setFormValues({...formValues, ...values})
    if(myForm.current.buttonId === 'back') {
      setStep(2);
    } else {setShowModal(true)}
    
  }
  

  console.log("After submit",formValues);
  return (
    <div>
    <h2>Miscellaneous:</h2>
      <form onSubmit={handleSubmit(onSubmit)} ref={myForm}>
      <label htmlFor="char_relationships">Key relationships</label>
      <textarea defaultValue={formValues.char_relationships} placeholder='family, partners, friendships, comrades' rows="4" cols="50" {...register('char_relationships', { required: false })} name="char_relationships" id="char_relationships"/>
      <label htmlFor="char_background">Background</label>
      <textarea defaultValue={formValues.char_background} placeholder='Brief background' rows="4" cols="50" {...register('char_background', { required: false })} name="char_background" id="char_background"/>
      <label htmlFor="char_disabilities">Disabilities</label>
      <input defaultValue={formValues.char_disabilities} type="text" {...register('char_disabilities', { required: false })} name="char_disabilities" id="char_disabilities"/>
      <label htmlFor="char_job">What do they do for a living?</label>
      <input defaultValue={formValues.char_job} type="text" {...register('char_job', { required: false })} name="char_job" id="char_job"/>
      <label htmlFor="char_gender">Gender</label>
      <input defaultValue={formValues.char_gender} type="text" {...register('char_gender', { required: false })} name="char_gender" id="char_gender"/>
      <label htmlFor="char_sexuality">Sexuality</label>
      <input defaultValue={formValues.sexuality} type="text" {...register('char_sexuality', { required: false })} name="char_sexuality" id="char_sexuality"/>
      <label htmlFor="char_skills">Skills</label>
      <input defaultValue={formValues.char_skills} placeholder='languages, archery' type="text" {...register('char_skills', { required: false })} name="char_skills" id="char_skills"/>
      <label htmlFor="char_morality">Morality alignment</label>
      <input defaultValue={formValues.char_morality} placeholder='lawful good, chaotic evil etc' type="text" {...register('char_morality', { required: false })} name="char_morality" id="char_morality"/>
      <label htmlFor="char_notes">General character notes section</label>
      <textarea defaultValue={formValues.char_notes} rows="4" cols="50" {...register('char_notes', { required: false })} name="char_notes" id="char_notes"/>
      <button type="submit" id='back' onClick={e => myForm.current.buttonId=e.target.id}>Back</button>
      <button type='submit'>Submit</button>
    </form>

    {showModal ? (<FormSubmissionPopUp >
          <div className={"form-submission-pop-up"}>
              <h3>Character created successfully!</h3>
            <button onClick={()=>{Router.reload(window.location.createCharacter)}}>Create another character</button><Link href="/characterList"><button >View Characters
          </button></Link>
              </div>
            </FormSubmissionPopUp>):null }
    </div>
  )
}

