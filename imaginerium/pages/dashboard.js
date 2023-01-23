import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navigation from "../Components/Navigation";
import NewNavBar from "../Components/NewNavBar.js";
import ButtonLink from "../Components/ButtonLink";
import { VscPersonAdd, VscOrganization, VscGlobe } from "react-icons/vsc";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 return (
    <>
      <Head>
        <title>Imaginerium</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeContainer}>
      {/* <Navigation /> */}
      <NewNavBar />
      <main className={styles.main}>
      <div className={styles.titleContainer}>
        <h1>IMAGINERIUM</h1>
        <div className={styles.descriptionContainer}>
          <Image
            priority
              src="https://i.ibb.co/ZVj6bcP/spinning-Earth-unscreen.gif"
            className={styles.earth}
            height={320}
            width={ 427}
            alt="Earth"
          />
         
          <p>
            Breathe life into your imagination with <span className={styles.background}>IMAGINERIUM</span> the ultimate creative playground for world building, character creation, and story weaving.
          </p>
          
        </div>

        <div className={styles.buttonsContainer}>
       
          <Link href="/createCharacter">
          <button className={styles.buttonMain}>
            <div>
            Create character
            </div>
            <VscPersonAdd className={styles.add}/>
          </button>
          </Link>     

        <Link href="/characterList" >
         <button className={styles.buttonMain}>
          <div className={styles.buttonMain}>
          Your characters
          </div>
          <VscOrganization className={styles.add}/>
          </button>
          </Link>

          <Link href="/sharedCharacters" >
         <button className={styles.buttonMain}>
          <div className={styles.buttonMain}>
          Shared characters
          </div>
          <VscOrganization className={styles.add}/>
          </button>
          </Link>

          <Link href="/createNewWorld">
          <button className={styles.buttonMain}>
          <div>
          Create World
          </div>
          <VscGlobe className={styles.add}/>
          </button>
          </Link>

        </div>
        </div>
      </main>
      </div>
    </>
  );
}
