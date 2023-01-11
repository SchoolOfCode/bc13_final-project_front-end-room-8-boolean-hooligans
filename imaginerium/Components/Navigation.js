import styles from "../styles/navigation.module.css";
import Link from "next/link";
import ButtonLink from "./ButtonLink";
import Image from 'next/image';

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Image
          priority
          src="/../public/imagineriumLogo.png"
          className={styles.logo}
          height={80}
          width={200}
          alt="Imaginerium"
        />
      </div>
  <div class={styles.dropdown}>
    <button class={styles.dropbtn}>Characters 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class={styles.dropdownContent}>
    <Link href="/">← Back to home</Link>
    <Link href="/characterList">Character list</Link>
    <Link href="/createCharacter">Create character</Link>
    </div>
</div>
<div className={styles.loginAndToggle}>
      <div className={styles.darkModeSwitch}>
        <button>🌓</button>
      </div>
      <div>
        <button className={styles.loginButton}>Login</button>
      </div>
    </div>
    </div>
  );
}

/*Comment for commit*/ 
