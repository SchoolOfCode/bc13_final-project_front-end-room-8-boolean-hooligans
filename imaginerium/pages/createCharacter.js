// import Link from "next/link";
 import Navigation from "../Components/Navigation";
//  import NameInput from "../Components/NameInput";
// import Input from "../Components/Input";
// import Button from "../Components/Button";
// import { useState } from "react";

export default function createCharacter() {
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
      <div>
        <h1>Create character</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const characterData = {
              user_id: 1,
              char_name: formData.get("characterName"),
              char_height: formData.get("characterHeight"),
              char_age: formData.get("characterAge"),
              char_alive: formData.get("characterAlive"),
            };

            addNewCharacter(characterData);
          }}
        >
          <input
            placeholder="Enter character name"
            type="text"
            name="characterName"
          />
          <input
            placeholder="Enter character height feet"
            type="number"
            name="characterHeight"
          />
          {/*change to limit to positive numbers only */}
          <input
            placeholder="Enter character age"
            type="number"
            name="characterAge"
          />
          <p>Is your character alive?</p>
          <input type="checkbox" name="characterAlive" />
          <button id="next">Submit</button>
        </form>
      </div>
    </>
  );
}
