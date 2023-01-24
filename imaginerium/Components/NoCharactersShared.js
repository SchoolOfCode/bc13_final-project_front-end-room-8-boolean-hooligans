import Link from "next/link";
import NewNavBar from "./NewNavBar";
import LoginOutButton from "./login-btn";
import styles from "../styles/pleaseLogin.module.css";


export default function NoCharactersYet () {

return (
    <>
        <NewNavBar/>
            <div>
            <h1 className={styles.h1}>You are not currently working with anyone</h1>
            <LoginOutButton />
            </div>
    </>
)

}