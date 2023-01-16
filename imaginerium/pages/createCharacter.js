 import Link from "next/link";
 import Navigation from "../Components/Navigation";
//  import NameInput from "../Components/NameInput";
// import Input from "../Components/Input";
// import Button from "../Components/Button";
// import { useState } from "react";
import styles from "./../styles/createCharacter.module.css"
import FormSubmissionPopUp from "../modals/formSubmissionPopUp";
import { useState } from "react";
import Router from 'next/router'

export default function createCharacter() {
  const [showModal, setShowModal] = useState(false)

  async function addNewCharacter(characterData) {
    await fetch(`https://imaginerium-qpii.onrender.com/characters`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(characterData),
    });
  }

 
  return (
    <>
       <Navigation></Navigation> 
      <div className={styles.createCharacter}>
      <div><h1>Create Your Character Here:</h1></div>
        <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const characterData = {
              user_id: 1,
              char_name: formData.get("char_name"),
              char_height: formData.get("char_height"),
              char_age: formData.get("char_age"),
              char_alive: formData.get("char_alive"),
            };

            addNewCharacter(characterData);
            setShowModal(true)
          }}
        >
          <label htmlFor="char_name">Character Name:</label>
          <input type="text" name="char_name" id="char_name"/>
          <br />
          <br />
          <label htmlFor="char_height">Height in feet?</label>
          <select className='dropdown' name="char_height" id="char_height">
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
          <br />
          <br />
          {/*change to limit to positive numbers only */}
          <label htmlFor="char_age">How old are they in years?</label>
          <input type="number" name="char_age" id="char_age"/>
          <br />
          <br />
          <label htmlFor="char_alive">Are they alive?</label>
          <select className='dropdown' name="char_alive" id="char_alive">
          <option value="true">They live!</option>
          <option value="false">They are dead!</option>
          </select>
          <br />
          <br />
          <button id="next">Submit</button>
        </form>
        </div>
        {showModal ? (<FormSubmissionPopUp >
          <div className="form-submission-pop-up">
              <h3>Character created successfully!</h3>
            <button onClick={()=>{Router.reload(window.location.createCharacter)}}>Create another character</button><Link href="/"><button >Back to home
          </button></Link>
              </div>
            </FormSubmissionPopUp>):null }
      </div>
    </>
  );
}
