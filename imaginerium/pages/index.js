import { signIn } from "next-auth/react";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import styles from "../styles/landing.module.css";
import Link from "next/link";

export default function landing() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.scene}>
        <div className={styles.upper}>
        <Link href="/signIn">
          <img className={styles.earth} src="./earth1.png" alt="earth"/>
          </Link>
          <img className={styles.moon1copy} src="./moon1.png" alt="moon" />
            <img className={styles.moon1} src="./moon1.png" alt="moon" />
            <img className={styles.moon2copy} src="./moon3.png" alt="moon" />
            <img className={styles.moon2} src="./moon3.png" alt="moon" />
          </div>

          <div className={styles.star1}></div>
          <div className={styles.star2}></div>
          <div className={styles.star3}></div>
          <div className={styles.star4}></div>
          <div className={styles.star5}></div>
        </div>
      </div>
      <div>
        <div className={styles.title}>
          <div className={styles.hover}>
            <h1>I</h1>
          </div>
          <div className={styles.hover}>
            <h1>M</h1>
          </div>
          <div className={styles.hover}>
            <h1>A</h1>
          </div>
          <div className={styles.hover}>
            <h1>G</h1>
          </div>
          <div className={styles.hover}>
            <h1>I</h1>
          </div>
          <div className={styles.hover}>
            <h1>N</h1>
          </div>
          <div className={styles.hover}>
            <h1>E</h1>
          </div>
          <div className={styles.hover}>
            <h1>R</h1>
          </div>
          <div className={styles.hover}>
            <h1>I</h1>
          </div>
          <div className={styles.hover}>
            <h1>U</h1>
          </div>
          <div className={styles.hover}>
            <h1>M</h1>
          </div>
        </div>
      </div>
    </>
  );
}
