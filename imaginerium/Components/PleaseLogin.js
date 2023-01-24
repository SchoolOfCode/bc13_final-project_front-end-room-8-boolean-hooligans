import NewNavBar from "./NewNavBar.js";
import LoginOutButton from "./login-btn";
import { useSession } from "next-auth/react";
import styles from "./../styles/pleaseLogin.module.css";

export default function PleaseLogin() {
    const { data: session } = useSession();
    if (!session) {
    return (
        <>
            <NewNavBar/>
            <div>
            <h1 className={styles.h1}>You are not signed in! Please sign in:</h1>
            <LoginOutButton />
            </div>
        </>
        );
    }
}