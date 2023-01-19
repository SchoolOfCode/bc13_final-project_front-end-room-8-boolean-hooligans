import Link from "next/link";
import Navigation from "../Components/Navigation";
import Form from "../Components/Form";
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
