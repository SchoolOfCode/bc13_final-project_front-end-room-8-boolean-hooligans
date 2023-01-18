 import Link from "next/link";
 import Navigation from "../Components/Navigation";
 import Form from "../Components/Form";
//  import NameInput from "../Components/NameInput";
// import Input from "../Components/Input";
// import Button from "../Components/Button";
import styles from "./../styles/createCharacter.module.css"

import { useState } from "react";
import Router from 'next/router'

export default function createCharacter() {
  

  return (
    <>
       <Navigation></Navigation> 
        <Form/>
    </>
  );
}
