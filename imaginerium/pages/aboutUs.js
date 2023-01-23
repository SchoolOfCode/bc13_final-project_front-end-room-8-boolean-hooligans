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
    <p className={styles.headerText}>We are the BOOLEAN HOOLIGANS: a team of five from the <Link href="https://www.schoolofcode.co.uk/">School of Code's</Link> Cohort 13, and this site is our final project. We built it over the course of four weeks in January 2023, and are very pleased with the end result!</p>
    <p>Our brief was to come up with a problem, and solve it. After some thinking, we decided to look at creating a simple to use worldbuilding app for creative people such as writers, artists, or roleplaying gamers. The existing options are often confusing, busy, or otherwise suffer from unfriendly UI/UX.</p>
    <p>The result is IMAGINERIUM, which in its current form allows you to create and save all sorts of original characters, collaborate with other creators, and - thanks to Azgaar's Fantasy Map Generator - make and save world maps. There are many other things we'd like to add in future, from random plot generation to some form of character illustration, along the lines of a picrew. But for now, enjoy the result of our hard work as full stack developers!</p>
    </div>

    <div className={styles.cardsContainer}>
    
    <div>
        <div className="center">
          <div className={styles.card}>
            <div className={styles.additional}>
              <div className={styles.userCard}>
                <h2>Felicity Cullen</h2>
                <div className={styles.aliveStatus}>
                    <span>
                      <GiHeartInside /> <span>Alive</span>
                    </span>
                </div>
                <div className="stats">
                  <div>
                  <p><Link href="https://www.linkedin.com/in/felicitycullen"> LinkedIn</Link></p>
                  </div>
                  <div>
                  <p><Link href="https://github.com/Fliss317">GitHub</Link></p>
                  </div>
                </div>
              </div>
              <div className={styles.moreInfo}>
                <p className="description">Prior to the bootcamp, Felicity spent 15 years in a variety of retail, office, and other service jobs before deciding to take the plunge into tech and do something constructive with the potential to improve the lives of many people. She enjoys back-end development and in her free time likes to indulge her nerdy hobbies such as painting toy soldiers and playing boardgames, and occasionally writing poetry. </p>
              </div>
            </div>
            <div className={styles.general}>
                <img
                  className="image"
                  src="./felicity_pfp.jpg"
                  alt="A photo of Felicity, holding a toy soldier. She is smiling."
                />
            </div>
          </div>
    </div>  
    </div> 

    <div>
        <div className="center">
          <div className={styles.card}>
            <div className={styles.additional}>
              <div className={styles.userCard}>
                <h2>Andrés Espin</h2>
                <div className={styles.aliveStatus}>
                    <span>
                      <GiHeartInside /> <span>Alive</span>
                    </span>
                </div>
                <div className="stats">
                  <div>
                  <p><Link href="https://www.linkedin.com/in/andres-e-036492108/"> LinkedIn</Link></p>
                  </div>
                  <div>
                  <p><Link href="https://github.com/andres3m">GitHub</Link></p>
                  </div>
                </div>
              </div>
              <div className={styles.moreInfo}>
                <p className="description">WORDS HERE </p>
              </div>
            </div>
            <div className={styles.general}>
                <img
                  className="image"
                  src="./andres_pfp.png"
                  alt="Pixel art of Andrés."
                />
            </div>
          </div>
    </div>  
    </div> 

    <div>
        <div className="center">
          <div className={styles.card}>
            <div className={styles.additional}>
              <div className={styles.userCard}>
                <h2>Iona Rose</h2>
                <div className={styles.aliveStatus}>
                    <span>
                      <GiHeartInside /> <span>Alive</span>
                    </span>
                </div>
                <div className="stats">
                  <div>
                  <p><Link href="linkedin.com/in/iona-rose/"> LinkedIn</Link></p>
                  </div>
                  <div>
                  <p><Link href="https://github.com/ionarose">GitHub</Link></p>
                  </div>
                </div>
              </div>
              <div className={styles.moreInfo}>
                <p className="description">WORDS HERE </p>
              </div>
            </div>
            <div className={styles.general}>
                <img
                  className="image"
                  src="./iona_pfp.jpg"
                  alt="A photo of Iona."
                />
            </div>
          </div>
    </div>  
    </div> 

    <div>
        <div className="center">
          <div className={styles.card}>
            <div className={styles.additional}>
              <div className={styles.userCard}>
                <h2>Filip Ruminski</h2>
                <div className={styles.aliveStatus}>
                    <span>
                      <GiHeartInside /> <span>Alive</span>
                    </span>
                </div>
                <div className="stats">
                  <div>
                  <p><Link href="https://www.linkedin.com/in/filip-ruminski/"> LinkedIn</Link></p>
                  </div>
                  <div>
                  <p><Link href="https://github.com/fruminski">GitHub</Link></p>
                  </div>
                </div>
              </div>
              <div className={styles.moreInfo}>
                <p className="description">WORDS HERE </p>
              </div>
            </div>
            <div className={styles.general}>
                <img
                  className="image"
                  src="./filip_pfp.png"
                  alt="Pixel art of Filip."
                />
            </div>
          </div>
    </div>  
    </div> 

    <div>
        <div className="center">
          <div className={styles.card}>
            <div className={styles.additional}>
              <div className={styles.userCard}>
                <h2>Charles Sajan</h2>
                <div className={styles.aliveStatus}>
                    <span>
                      <GiHeartInside /> <span>Alive</span>
                    </span>
                </div>
                <div className="stats">
                  <div>
                  <p><Link href="https://www.linkedin.com/in/charlessajan/"> LinkedIn</Link></p>
                  </div>
                  <div>
                  <p><Link href="">GitHub</Link></p>
                  </div>
                </div>
              </div>
              <div className={styles.moreInfo}>
                <p className="description">WORDS HERE </p>
              </div>
            </div>
            <div className={styles.general}>
                <img
                  className="image"
                  src="./charles_pfp.jpg"
                  alt="A photo of Charles."
                />
            </div>
          </div>
    </div>  
    </div>
    </div>
    </div>
    </>
)
}