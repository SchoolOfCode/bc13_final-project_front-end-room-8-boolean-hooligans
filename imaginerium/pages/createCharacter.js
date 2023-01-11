// import Link from "next/link";
 import Navigation from "../Components/Navigation";
  import Form from "../Components/Form";
//  import NameInput from "../Components/NameInput";
// import Input from "../Components/Input";
// import Button from "../Components/Button";
// import { useState } from "react";

export default function createCharacter() {
 
  return (
    <>
       <Navigation></Navigation> 
      <div>
        <h1>Create Your Character Here:</h1>
        <Form/>
        
      </div>
    </>
  );
}
