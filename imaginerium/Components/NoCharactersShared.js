import Link from "next/link";
import NewNavBar from "./NewNavBar";
import LoginOutButton from "./login-btn";
import styles from "./../styles/pleaseLogin.module.css";
import { VscOrganization } from "react-icons/vsc"

export default function NoCharactersYet () {

return (
    <>
        <NewNavBar />
        <Link className={styles.buttonText} href="/characterList">
                <button className={styles.buttonMain}>
                  <div><VscOrganization className={styles.icon} /></div>
                  <div>View</div>
                </button>
              </Link>
        <div className={styles.body}>
          <div className={styles.context}>
            
             <h1>IMAGINERIUM</h1>
            <h2>Not currently collaborating on any characters</h2>
            <h3>To share a character with a friend or collaborator, view your character and click 'share'</h3>
        
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