import Link from "next/link";
import NewNavBar from "./NewNavBar";
import LoginOutButton from "./login-btn";
import styles from "../styles/pleaseLogin.module.css";


export default function NoCharactersYet () {

return (
    <>
        <NewNavBar/>
            <div>
            <h1 className={styles.h1}>You have not yet shared any characters!</h1>
            <h1 className={styles.h1}><Link href="/characterList">Why not share some now</Link>?</h1>
            <LoginOutButton />
            </div>
    </>
)

}