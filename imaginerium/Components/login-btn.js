import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/login-btn.module.css";

export default function LoginOutButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className={styles.logInOutContainer}>
   
        <button className={styles.logIOBtn} onClick={() => {
            signOut();
            `http://localhost:3000`;
          }}>Sign out</button>

      <img className={styles.profilePic} src={session.user.image} />
      </div>
    )
  }
  return (
    <div className={styles.logInOutContainer}>
      <button className={styles.logIOBtn} onClick={() => signIn()}>Sign in</button>
      <img className={styles.profilePic} src="https://deepgrouplondon.com/wp-content/uploads/2019/06/person-placeholder-5.png" />
    </div>
  )
}