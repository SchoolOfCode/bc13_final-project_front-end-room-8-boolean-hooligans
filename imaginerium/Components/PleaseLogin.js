import NewNavBar from "./NewNavBar.js";
import { AiOutlineLogin } from "react-icons/ai";
import { useSession } from "next-auth/react";
import styles from "./../styles/pleaseLogin.module.css";
import Link from "next/link";

export default function PleaseLogin() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <NewNavBar />
        <Link className={styles.buttonText} href="/signIn">
                <button className={styles.buttonMain}>
                  <div><AiOutlineLogin className={styles.icon} /></div>
                  <div>Log in</div>
                </button>
              </Link>
        <div className={styles.body}>
          <div className={styles.context}>
            
             <h1>IMAGINERIUM</h1>
            <h2>Log in to see saved content</h2>
          </div>

          <div className={styles.area}>
            <ul className={styles.circles}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
