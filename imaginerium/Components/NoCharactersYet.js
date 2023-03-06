import Link from "next/link";
import NewNavBar from "./NewNavBar";
import styles from "./../styles/pleaseLogin.module.css";
import { VscPersonAdd } from "react-icons/vsc"

export default function NoCharactersYet () {

return (
    <>
       <NewNavBar />
        <Link className={styles.buttonText} href="/createCharacter">
                <button className={styles.buttonMain}>
                  <div><VscPersonAdd className={styles.icon} /></div>
                  <div>Create</div>
                </button>
              </Link>
        <div className={styles.body}>
          <div className={styles.context}>
            
             <h1>IMAGINERIUM</h1>
            <h2>No characters created yet</h2>
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
)

}