import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import FormSubmissionPopUp from "../modals/formSubmissionPopUp";
import Link from "next/link";
import Router from "next/router";
import { useSession } from "next-auth/react";
import styles from "../styles/steps.module.css";
import { motion } from "framer-motion";

export default function Step3({ setStep, formValues, setFormValues }) {
  const { register, handleSubmit } = useForm();
  const [showModal, setShowModal] = useState(false);
  const myForm = useRef();

  const { data: session } = useSession();

  /*Use to post to backend */
  async function addNewCharacter(formValues) {
    await fetch(`https://imaginerium-qpii.onrender.com/characters`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues)
    });
  }

  async function onSubmit(values) {
    // e.preventDefault();
    console.log("values", values);
    let updatedValues = { ...formValues, ...values };
    setFormValues(updatedValues);
    console.log("After submit", updatedValues);
    if (myForm.current.buttonId === "submit") {
      addNewCharacter(updatedValues);
      setShowModal(true);
    } else if (myForm.current.buttonId === "back") {
      setStep(2);
    }
  }

  return (
    <div className={styles.mainStepTwo}>
      <h2>Other Details</h2>

      <motion.form
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={styles.mainContainer}
        onSubmit={handleSubmit(onSubmit)}
        ref={myForm}
      >
        <div className={styles.formContainer}>
          <div className={styles.stepThreeLeftContainer}>
            <div>
              <label htmlFor="char_gender">Gender</label>
              <input
                defaultValue={formValues.char_gender}
                type="text"
                {...register("char_gender", { required: false })}
                name="char_gender"
                id="char_gender"
              />
            </div>
            <div>
              <label htmlFor="char_pronouns">Pronouns</label>
              <input
                defaultValue={formValues.char_pronouns}
                type="text"
                {...register("char_pronouns", { required: false })}
                name="char_pronouns"
                id="char_pronouns"
              />
            </div>
            <div>
              <label htmlFor="char_sexuality">Sexuality</label>
              <input
                defaultValue={formValues.sexuality}
                type="text"
                {...register("char_sexuality", { required: false })}
                name="char_sexuality"
                id="char_sexuality"
              />
            </div>
            <div>
              <label htmlFor="char_skills">Skills</label>
              <input
                defaultValue={formValues.char_skills}
                placeholder="languages, archery"
                type="text"
                {...register("char_skills", { required: false })}
                name="char_skills"
                id="char_skills"
              />
            </div>
            <div>
              <label htmlFor="char_morality">Morality alignment</label>
              <input
                defaultValue={formValues.char_morality}
                placeholder="lawful good, chaotic evil etc"
                type="text"
                {...register("char_morality", { required: false })}
                name="char_morality"
                id="char_morality"
              />
            </div>
            <div>
              <label htmlFor="char_disabilities">Disabilities</label>
              <input
                defaultValue={formValues.char_disabilities}
                type="text"
                {...register("char_disabilities", { required: false })}
                name="char_disabilities"
                id="char_disabilities"
              />
            </div>
            <div>
              <label htmlFor="char_job">What do they do for a living?</label>
              <input
                defaultValue={formValues.char_job}
                type="text"
                {...register("char_job", { required: false })}
                name="char_job"
                id="char_job"
              />
            </div>
          </div>
          <div className={styles.stepThreeRightContainer}>
            <label htmlFor="char_relationships">Key relationships</label>
            <textarea
              defaultValue={formValues.char_relationships}
              placeholder="family, partners, friendships, comrades"
              rows="8"
              cols="50"
              {...register("char_relationships", { required: false })}
              name="char_relationships"
              id="char_relationships"
            />
            <label htmlFor="char_background">Background</label>
            <textarea
              defaultValue={formValues.char_background}
              placeholder="Brief background"
              rows="8"
              cols="50"
              {...register("char_background", { required: false })}
              name="char_background"
              id="char_background"
            />
            <label htmlFor="char_notes">General character notes section</label>
            <textarea
              defaultValue={formValues.char_notes}
              rows="8"
              cols="50"
              {...register("char_notes", { required: false })}
              name="char_notes"
              id="char_notes"
            />
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <div>
            <button
              className={styles.stepTwoButton}
              type="submit"
              id="back"
              onClick={(e) => (myForm.current.buttonId = e.target.id)}
            >
              Back
            </button>
          </div>
          <div>
            <button
              className={styles.stepTwoButton}
              type="submit"
              id="submit"
              onClick={(e) => (myForm.current.buttonId = e.target.id)}
            >
              Submit
            </button>
          </div>
        </div>
      </motion.form>

      {showModal ? (
        <FormSubmissionPopUp>
          <div className={"form-submission-pop-up"}>
            <h3>Character created successfully!</h3>
            <div className="submision-buttons">
              <button
                onClick={() => {
                  Router.reload(window.location.createCharacter);
                }}
              >
                Create another character
              </button>
              <Link href="/characterList">
                <button>View Characters</button>
              </Link>
            </div>
          </div>
        </FormSubmissionPopUp>
      ) : null}
    </div>
  );
}
