import Link from "next/link";
import Navigation from "../Components/Navigation";
// import NameInput from "../Components/NameInput";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useState } from "react";


export default function createCharacter() {
  // const[isAlive, setIsAlive] = useState(false);
  // console.log(isAlive)
  
  // function handleCheckbox(){
  //   setIsAlive(isAlive == true ? false : true)
  //   return isAlive
  // }

  const[characterObject, setCharacterObject] = useState({
    char_name: '',
    char_height: null,
    char_age: null,
    char_alive: null
  })
  

    return (
        <>
        {/* <Navigation></Navigation> */}
        <div>
        <h1>Create character</h1>
       <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const characterData = {
          char_name: formData.get('characterName'),
          char_height: formData.get('characterHeight'),
          char_age: formData.get('characterAge'),
          char_alive: formData.get('characterAlive')
        }
        setTimeout(() => {
          setCharacterObject(characterData)
        }, "1000")
        setTimeout(() => {
          console.log(characterObject)
        }, "2000")
       }}>


      
        
        <input placeholder ="Enter character name" type="text" name="characterName" />
        <input placeholder ="Enter character height cm" type="number" name="characterHeight" /> {/*To limit to positive numbers only */}
        <input placeholder ="Enter character age" type="number" name="characterAge"/>
        <p>Is your character alive?</p><input type="checkbox" name="characterAlive"/>
        {/* {isAlive} */}
        {/* <Input text="Submit Character" type='submit' value='Submit'/> */}
        <button id="next">Submit</button>
        </form>
      </div>
      </>
    );
  }