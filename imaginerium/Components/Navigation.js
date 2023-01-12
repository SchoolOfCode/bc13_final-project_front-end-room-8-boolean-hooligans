import styles from "../styles/navigation.module.css";
import Link from "next/link";
import ButtonToggleDarkMode from "./DarkModeToggle";
import Image from "next/image";

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Image
          priority
            src="https://i.ibb.co/0BtC8vF/imaginerium-logo2-1.png"
          className={styles.logo}
          height={65}
          width={212}
          alt="Imaginerium"
        />
      </div>

      <div class={styles.navButtons}>
        <div class={styles.dropdown}>
        <Link href="/"><button class={styles.dropbtn}>HOME
          </button></Link>

        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>
            CREATE
            <i className="fa fa-caret-down"></i>
          </button>
          <div className={styles.dropdownContent}>
            <Link href="/createCharacter">Create character</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>
            VIEW
            <i className="fa fa-caret-down"></i>
          </button>
          <div className={styles.dropdownContent}>
            <Link href="/characterList">Character list</Link>
          </div>
        </div>
      </div>
      <div className={styles.loginAndToggle}>
        <div className={styles.darkModeSwitch}>
          <ButtonToggleDarkMode></ButtonToggleDarkMode>
        </div>
        <div>
          <button className={styles.loginButton}>LOGIN</button>
        </div>
      </div>
    </div>
  );
}

/*Comment for commit*/
