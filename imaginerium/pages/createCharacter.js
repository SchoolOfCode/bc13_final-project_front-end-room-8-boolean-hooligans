import Link from "next/link";
import Navigation from "../Components/Navigation";
// import NameInput from "../Components/NameInput";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useState } from "react";


export default function createCharacter() {
  const[isAlive, setIsAlive] = useState(false);
  console.log(isAlive)
  
  function handleCheckbox(){
    setIsAlive(isAlive == true ? false : true)
    return isAlive
  }

  function saveCharacter(){
    
  }

    return (
        <>
        <Navigation></Navigation>
        <div>
        <h1>Create character</h1>
        <Input placeholder ="Enter character name" type="text"></Input>
        <Input placeholder ="Enter character height cm" type="number"></Input> {/*To limit to positive numbers only */}
        <Input placeholder ="Enter character age" type="number"></Input>
        <p>Is your character alive?</p><Input type="checkbox" onClick={handleCheckbox}/>
        {isAlive}
        <Button text="Submit Character" onClick={saveCharacter}/>
      </div>
      </>
    );
  }