import styles from "../styles/newNavBar.module.css";
import React from "react";
import { AnimatePresence, clamp, motion, useCycle } from "framer-motion";
import LoginOutButton from "./login-btn";

const links = [
  { name: "Home", to: "/dashboard", id: 1 },
  { name: "About", to: "/aboutUs", id: 2 },
  { name: "Create Characters", to: "/createCharacter", id: 3 },
  { name: "View Characters", to: "/characterList", id: 4 },
  { name: "Shared Characters", to: "/sharedCharacters", id: 5 },
  { name: "Create World", to: "/createNewWorld", id: 6 }
];

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

export default function NewNavBar() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <div className={styles.navBarContainer}>
      <AnimatePresence>
        {open && (
          <motion.aside
            className={styles.aside}
            initial={{ width: 0 }}
            animate={{
              width: 250
            }}
            exit={{
              width: 0,
              transition: { delay: 0.8, duration: 0.9 }
            }}
          >
            <motion.div
              className={styles.container}
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.05, color: "#f8f8f8" }}
                  variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className={styles.btnContainer} onClick={cycleOpen}>
        <div className={styles.hamburgerButton}>
          {open ? (
            <>
              <motion.div
                animate={{
                  y: 13,
                  rotate: [0, 0, -45],
                  backgroundColor: "#505459"
                }}
              />
              <motion.div
                animate={{
                  rotate: [0, 360, 360],
                  opacity: [1, 1, 0]
                }}
              />
              <motion.div
                animate={{
                  y: -13,
                  rotate: [0, 0, 45],
                  backgroundColor: "#505459"
                }}
              />
            </>
          ) : (
            <>
              <motion.div
                animate={{
                  y: 0,
                  rotate: [45, 0, 0],
                  backgroundColor: "#505459"
                }}
              />
              <motion.div
                animate={{
                  rotate: [0, 0, 0],
                  backgroundColor: "#505459"
                }}
              />
              <motion.div
                animate={{
                  y: 0,
                  rotate: [-45, 0, 0],
                  backgroundColor: "#505459"
                }}
              />
            </>
          )}
        </div>
      </div>
      <LoginOutButton></LoginOutButton>
    </div>
  );
}
