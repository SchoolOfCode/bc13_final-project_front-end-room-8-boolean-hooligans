import Navigation from "../Components/Navigation";
import styles from "../styles/aboutUs.module.css";
import Link from "next/link";
import { GiHeartInside } from "react-icons/gi";
// import Image from "next/image";

export default function aboutUs() {
   
return (
   <>
    <Navigation />
    <div>
    <img
        className={styles.teamLogo}
        src="./boolean_hoolingans_transparent.png"
        height={500}
        width={500}/>
    <div className={styles.headerBlock}>
    <p className={styles.headerText}>We are a team of five from the School of Code Cohort 13, and this site is our final project. We built it over the course of four weeks in January 2023, and are very pleased with the end result!</p>
    </div>

    <div className={styles.cardsContainer}>
    <div className={styles.card}>
        <div className={styles.additional}>
                <h1>Felicity Cullen</h1>
                <p><Link href="https://www.linkedin.com/in/felicitycullen">LinkedIn</Link></p>
                <p><Link href="https://github.com/Fliss317">GitHub</Link></p>
                <div className={styles.aliveStatus}><span>
                  <GiHeartInside /> <span>Alive</span>
                </span></div>
            </div>

        <div className={styles.moreInfo}>
        <img
              className="image"
              src="https://deepgrouplondon.com/wp-content/uploads/2019/06/person-placeholder-5.png"
            />
        <p>Prior to the bootcamp, Felicity spent 15 years in a variety of retail, office, and other service jobs before deciding to take the plunge into tech and do something constructive with the potential to improve the lives of many people. She enjoys back-end development and in her free time likes to indulge her nerdy hobbies such as painting toy soldiers and playing boardgames, and occasionally writing poetry. </p>
        </div>
    </div>

    <div className="card green">
        <h2>Andres Espin Martinez</h2>
        <p>WORDS GO HERE</p>
        <p><Link href="https://www.linkedin.com/in/andres-e-036492108/">LinkedIn</Link></p>
        <p><Link href="">GitHub</Link></p>
    </div>

    <div className="card green">
        <h2>Iona Rose</h2>
        <p>WORDS GO HERE</p>
        <p><Link href="linkedin.com/in/iona-rose/">LinkedIn</Link></p>
        <p><Link href="https://github.com/ionarose">GitHub</Link></p> 
    </div>

    <div className="card green">
        <h2>Filip Ruminski</h2>
        <p>WORDS GO HERE</p>
        <p><Link href="https://www.linkedin.com/in/filip-ruminski/">LinkedIn</Link></p>
        <p><Link href="https://github.com/fruminski">GitHub</Link></p>
    </div>

    <div className="card green">
        <h2>Charles Sajan</h2>
        <p>WORDS GO HERE</p>
        <p><Link href="https://www.linkedin.com/in/charlessajan/">LinkedIn</Link></p>
        <p><Link href="">GitHub</Link></p>
    </div>
    </div>

    </div>
    </>
)
}