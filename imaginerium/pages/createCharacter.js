import Link from "next/link";
import Navigation from "../Components/Navigation";
import Form from "../Components/Form";
import styles from "./../styles/createCharacter.module.css";
import NewNavBar from "../Components/NewNavBar";
import PleaseLogin from "../Components/PleaseLogin.js"
import { useSession } from "next-auth/react";
import { useState } from "react";
import Router from "next/router";

export default function createCharacter() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
       <PleaseLogin />
      </>
    );
  }

  return (
    <>
      <NewNavBar />
      <Form />
    </>
  );
}
