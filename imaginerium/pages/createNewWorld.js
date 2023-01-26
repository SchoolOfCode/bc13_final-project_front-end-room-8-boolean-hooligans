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
      <title>Create World Map</title>
       <PleaseLogin />
      </>
    );
  } else {
  
  return (
    <>
      <title>Create World Map</title>
      <NewNavBar />
      <div className={styles.guide}>
        <ul>
          <strong>Brief User Guide:</strong>
          <li>The arrow in the top left of the map is your menu</li>
          <li>You can save to device, dropbox, or the browser with the Save option in the menu</li>
          <li>To generate a new map, hover over the arrow and select New Map when it appears</li>
        </ul>
      </div>
      <iframe
        className={styles.map}
        src="https://azgaar.github.io/Fantasy-Map-Generator/"
      ></iframe>
    </>
  );
}
}
