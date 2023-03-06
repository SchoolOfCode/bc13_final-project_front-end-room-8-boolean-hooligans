import NewNavBar from "../Components/NewNavBar";
import styles from "../styles/createNewWorld.module.css";
import { useSession } from "next-auth/react";
import PleaseLogin from "../Components/PleaseLogin.js";
import { motion } from "framer-motion";

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
        <NewNavBar />
        <motion.div
          className={styles.guide}
          initial={{ x: 300 }}
          animate={{ x: 0 }}
        >
          <ul>
            <strong>Brief User Guide:</strong>
            <li>The arrow in the top left of the map is your menu</li>
            <li>
              You can save to device, dropbox, or the browser with the Save
              option in the menu
            </li>
            <li>
              To generate a new map, hover over the arrow and select New Map
              when it appears
            </li>
          </ul>
        </motion.div>
        <motion.iframe
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={styles.map}
          src="https://azgaar.github.io/Fantasy-Map-Generator/"
        ></motion.iframe>
      </>
    );
  }
}
