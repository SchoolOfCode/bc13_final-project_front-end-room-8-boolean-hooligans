import Navigation from "../Components/Navigation";
import NewNavBar from "../Components/NewNavBar";
import styles from "../styles/createNewWorld.module.css";
import { useSession } from "next-auth/react";
import PleaseLogin from "../Components/PleaseLogin.js";

export default function createNewWorld() {
const { data: session } = useSession();
  if (!session) {
    return (
      <>
       <PleaseLogin />
      </>
    );
  } else {
  
  return (
    <>
      {/* <Navigation /> */}
      <NewNavBar />
      <iframe
        className={styles.map}
        src="https://azgaar.github.io/Fantasy-Map-Generator/"
      ></iframe>
    </>
  );
}
}
