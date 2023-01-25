import React, { cloneElement, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRef } from "react";
import { useSession } from "next-auth/react";
import styles from "../styles/steps.module.css";
import { motion } from "framer-motion";
import Switch from "./Switch";
import style from "../styles/switch.module.css";

export default function Step1({ setStep, formValues, setFormValues }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");
  const [trigger, setTrigger] = useState(true);
  const [isOn, setIsOn] = useState(true);
  const myForm = useRef();

  const { register, handleSubmit } = useForm();

  const { data: session } = useSession();

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  async function randomName() {
    const response = await fetch(`https://randomuser.me/api/`);
    const data = await response.json();
    if (data) {
      setFirstName(
        data.results[0].name.first + " " + data.results[0].name.last
      );
      setImage(data.results[0].picture.large);
      setFormValues({ ...formValues, char_name: firstName, char_img: image });
    }
  }

  useEffect(() => {
    randomName();
    // setTrigger(true);
  }, []);

  let user = { user_email: session.user.email };

  console.log("step1:", formValues);

  async function onSubmit(values, e) {
    // e.preventDefault();
    setFormValues({ ...user, ...formValues, ...values });
    setStep(2);
    //   if(myForm.current.buttonId === 'next') {
    // }
  }

  if (isOn === true) {
    formValues.char_alive = true;
  }

  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (isOn === true) {
      let addAlive = { ...formValues, char_alive: false };
      setFormValues(addAlive);
    } else {
      let addAlive = { ...formValues, char_alive: true };
      setFormValues(addAlive);
    }
  };

  return (
    <div className={styles.mainStepTwo}>
      <h2>Physical Features</h2>

      <motion.form
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={styles.formContainerOne}
        onSubmit={handleSubmit(onSubmit)}
        ref={myForm}
      >
        <div className={styles.stepOneLeftContainer}>
          <label htmlFor="char_name">Character Name</label>
          <input
            defaultValue={formValues.char_name}
            type="text"
            {...register("char_name", { required: true })}
            name="char_name"
            id="char_name"
          />
          <button
            className={styles.randomButton}
            type="button"
            onClick={() => randomName()}
          >
            Randomise
          </button>
          {formValues.char_img ? ( // if image is true, show image, else show placeholder
            <img src={formValues.char_img} alt="Character placeholder" />
          ) : (
            // if image is false, show placeholder
            <img // placeholder image
              src="https://deepgrouplondon.com/wp-content/uploads/2019/06/person-placeholder-5.png"
              alt="Character placeholder"
            />
          )}
          <label htmlFor="char_img">Enter image url</label>
          <input
            defaultValue={formValues.char_img}
            {...register("char_img", { required: false })}
            name="char_img"
            type="text"
            id="char_img"
          />
        </div>

        <div className={styles.stepOneRightContainer}>
          <div>
            <label htmlFor="char_age">How old are they in years?</label>
            <input
              defaultValue={formValues.char_age}
              placeholder="Enter number"
              type="number"
              {...register("char_age", { required: false })}
              name="char_age"
              id="char_age"
            />
          </div>
          <div>
            <label htmlFor="char_species">Character species</label>
            <input
              defaultValue={formValues.char_species}
              type="text"
              {...register("char_species", { required: false })}
              name="char_species"
              id="char_species"
            />
          </div>
          <div>
            <label htmlFor="char_hairColour">Hair colour</label>
            <input
              defaultValue={formValues.char_hairColour}
              type="text"
              {...register("char_hairColour", { required: false })}
              name="char_hairColour"
              id="char_hairColour"
            />
          </div>
          <div>
            <label htmlFor="char_eyeColour">Eye colour</label>
            <input
              defaultValue={formValues.char_eyeColour}
              type="text"
              {...register("char_eyeColour", { required: false })}
              name="char_eyeColour"
              id="char_eyeColour"
            />
          </div>
          <div>
            <label htmlFor="char_skinColour">Skin colour</label>
            <input
              defaultValue={formValues.char_skinColour}
              type="text"
              {...register("char_skinColour", { required: false })}
              name="char_skinColour"
              id="char_skinColour"
            />
          </div>
          <div>
            <label htmlFor="char_height">Height in centimetres?</label>
            <input
              defaultValue={formValues.char_height}
              placeholder="Enter number"
              type="number"
              {...register("char_height", { required: false })}
              name="char_height"
              id="char_height"
            />
          </div>
          <div>
            <label htmlFor="char_weight">Weight in kg?</label>
            <input
              defaultValue={formValues.char_weight}
              placeholder="Enter number"
              type="number"
              {...register("char_weight", { required: false })}
              name="char_weight"
              id="char_weight"
            />
          </div>
          <div>
            <label htmlFor="char_features">Character special features</label>
            <input
              defaultValue={formValues.char_features}
              placeholder="Scars / piercings /tattoos / prosthetics"
              type="text"
              {...register("char_features", { required: false })}
              name="char_features"
              id="char_features"
            />
          </div>
          <div className={styles.textBoxStepOne}>
            <label htmlFor="char_desc">Character description</label>
            <textarea
              defaultValue={formValues.char_desc}
              rows="4"
              {...register("char_desc", { required: false })}
              name="char_desc"
              id="char_desc"
            />
          </div>
          <div>
            <label htmlFor="char_alive">Are they alive?</label>

            <div
              className={style.switch}
              data-isOn={formValues.char_alive}
              onClick={toggleSwitch}
            >
              <motion.div className={style.handle} transition={spring} />

              {console.log(isOn)}
              <p>{formValues.char_alive ? "Alive" : "Dead"}</p>
            </div>
          </div>

          <button type="submit" id="next" className={styles.stepOneButton}>
            Next
          </button>
        </div>
      </motion.form>
    </div>
  );
}
