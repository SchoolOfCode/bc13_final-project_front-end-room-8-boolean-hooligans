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
          height={30}
          width={90}
          alt="Imaginerium"
        />
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <Link href="/">← Back to home</Link>
          </li>
          <li>
            <Link href="/characterList">Character list</Link>
          </li>
          <li>
            <Link href="/createCharacter">Create character</Link>
          </li>
        </ul>
      </div>
      <div className={styles.darkModeSwitch}>
        <button>🌓</button>
      </div>
      <div className={styles.user}>
        <button>User</button>
      </div>
    </div>
  );
}
