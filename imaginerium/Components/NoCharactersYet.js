import Link from "next/link";
import NewNavBar from "./NewNavBar";
import LoginOutButton from "./login-btn";
import styles from "../styles/pleaseLogin.module.css";


export default function NoCharactersYet () {

return (
    <>
        <NewNavBar/>
            <div>
            <h1 className={styles.h1}>You have not yet made any characters!</h1>
            <br></br>
            <h1 className={styles.h1}><Link href="/createCharacter">Why not create one now</Link>?</h1>
            <LoginOutButton />
            </div>
    </>
)

}