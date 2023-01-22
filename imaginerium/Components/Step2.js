import React from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import styles from "../styles/steps.module.css";

export default function Step2({ setStep, formValues, setFormValues }) {
  const { register, handleSubmit } = useForm();
  const myForm = useRef();

  async function onSubmit(values, e) {
    e.preventDefault();
    setFormValues({ ...formValues, ...values });
    if (myForm.current.buttonId === "back") {
      setStep(1);
    } else {
      setStep(3);
    }

    const buttonId = e;
    console.log(buttonId);
  }

  console.log("step2:", formValues);
  return (
    <div className={styles.mainStepTwo}>
      <h2 className={styles.heading}>Personality</h2>

      <form
        className={styles.mainContainer}
        onSubmit={handleSubmit(onSubmit)}
        ref={myForm}
      >
        <div className={styles.formContainerStepTwo}>
          <div className={styles.stepTwoLeftContainer}>
            <div>
              <label htmlFor="char_hopes">
                What are their hopes, dreams, goals, and motivations?
              </label>
              <textarea
                defaultValue={formValues.char_hopes}
                rows="10"
                cols="50"
                {...register("char_hopes", { required: false })}
                name="char_hopes"
                id="char_hopes"
              />
            </div>
            <div>
              <label htmlFor="char_fears">
                What are their fears, troubles and flaws?
              </label>
              <textarea
                defaultValue={formValues.char_fears}
                rows="10"
                cols="50"
                {...register("char_fears", { required: false })}
                name="char_fears"
                id="char_fears"
              />
            </div>
          </div>

          <div className={styles.stepTwoRightContainer}>
            <div>
              <label htmlFor="char_speech">
                Do they have any catch phrases, sayings or speech patterns?
              </label>
              <textarea
                defaultValue={formValues.char_speech}
                rows="10"
                cols="50"
                {...register("char_speech", { required: false })}
                name="char_speech"
                id="char_speech"
              />
            </div>
            <div>
              <label htmlFor="char_likes">
                What are their likes and dislikes?
              </label>
              <textarea
                defaultValue={formValues.char_likes}
                placeholder="Food, music etc."
                rows="10"
                cols="50"
                {...register("char_likes", { required: false })}
                name="char_likes"
                id="char_likes"
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <div>
            <button
              className={styles.stepTwoButton}
              type="submit"
              onClick={(e) => (myForm.current.buttonId = e.target.id)}
              id="back"
            >
              Back
            </button>
          </div>
          <div>
            <button
              className={styles.stepTwoButton}
              type="submit"
              onClick={(e) => (myForm.current.buttonId = e.target.id)}
              id="next"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
