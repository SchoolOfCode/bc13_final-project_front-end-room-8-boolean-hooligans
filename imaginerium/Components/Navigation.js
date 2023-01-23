import styles from "../styles/navigation.module.css";
import Link from "next/link";
import ButtonToggleDarkMode from "./DarkModeToggle";
import Image from "next/image";
import LoginOutButton from "./login-btn";

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            priority
            src="https://i.ibb.co/0BtC8vF/imaginerium-logo2-1.png"
            className={styles.logo}
            height={65}
            width={212}
            alt="Imaginerium"
          />
        </Link>
      </div>
      <div className={styles.rightNavBar}>
      <div className={styles.dropdown}>
        <Link href="/dashboard"><button class={styles.dropbtn}>Home
          </button></Link>

        </div>
        <div className={styles.dropdown}>
          
          <button className={styles.dropbtn}>Create</button>
          
          <div className={styles.dropdownContent}>
            <Link href="/createCharacter">Character</Link>
            <Link href="/createNewWorld">World map</Link>
            <Link href="/createNewWorld">Story</Link>
          </div>
        </div>



        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>View</button>
          <div className={styles.dropdownContent}>
            <Link href="/characterList">Characters</Link>
            <Link href="/characterList">World Maps</Link>
            <Link href="/characterList">Stories</Link>
          </div>
        </div>
        <div className={styles.darkModeSwitch}>
          <ButtonToggleDarkMode></ButtonToggleDarkMode>
        </div>
        <div className={styles.loginDiv}>
          <LoginOutButton></LoginOutButton>
        </div>
      </div>
    </div>
  );
}
