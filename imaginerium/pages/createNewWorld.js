import Navigation from "../Components/Navigation";
import NewNavBar from "../Components/NewNavBar";
import styles from "../styles/createNewWorld.module.css";

export default function createNewWorld() {
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
