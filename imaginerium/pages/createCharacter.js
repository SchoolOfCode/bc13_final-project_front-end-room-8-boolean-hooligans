import Link from "next/link";
import Navigation from "../Components/Navigation";
import Form from "../Components/Form";
import styles from "./../styles/createCharacter.module.css";
import NewNavBar from "../Components/NewNavBar";

import { useState } from "react";
import Router from "next/router";

import { useSession } from "next-auth/react";

export default function createCharacter() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        {/* <Navigation></Navigation>  */}
        <NewNavBar />
        <div>Log in to create character</div>;
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
