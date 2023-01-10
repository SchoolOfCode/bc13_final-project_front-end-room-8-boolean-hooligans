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

  const[characterObject, setcharacterObject] = useState({
    characterName: null,
    characterHeight: null,
    characterAge: null,
    characterAlive: null
  })
  

    return (
        <>
        <Navigation></Navigation>
        <div>
        <h1>Create character</h1>
       <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const characterObject = {
          characterName: formData.get('characterName'),
          characterHeight: formData.get('characterHeight'),
          characterAge: formData.get('characterAge'),
          characterAlive: formData.get('characterAlive')
        }
        setcharacterObject(characterObject)
        console.log(characterObject)
       }}>
        
        <Input placeholder ="Enter character name" type="text" name="characterName"></Input>
        <Input placeholder ="Enter character height cm" type="number" name="characterHeight"></Input> {/*To limit to positive numbers only */}
        <Input placeholder ="Enter character age" type="number" name="characterAge"></Input>
        <p>Is your character alive?</p><Input type="checkbox" name="characterAlive"/>
        {/* {isAlive} */}
        <Input text="Submit Character" type='submit' value='Submit'/>
        {/* <button id="next">Submit</button> */}
        </form>
      </div>
      </>
    );
  }