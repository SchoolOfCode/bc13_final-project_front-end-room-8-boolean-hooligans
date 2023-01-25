import Navigation from "../Components/Navigation";
import styles from "../styles/aboutUs.module.css";
import Link from "next/link";
import { GiHeartInside } from "react-icons/gi";
import NewNavBar from "../Components/NewNavBar";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

// import Image from "next/image";

export default function aboutUs() {

  return (
   <>
    {/* <Navigation /> */}
    <NewNavBar />
    <div>
    <img
        className={styles.teamLogo}
        src="./boolean_hoolingans_transparent.png"
        height={500}
        width={500}/>
    <div className={styles.headerBlock}>
    <p className={styles.headerText}>We are the Boolean Hooligans: a team of five from the <Link className={styles.link} href="https://www.schoolofcode.co.uk/" target="_blank">School of Code's</Link> Cohort 13, and this site is our final project. We built it over the course of four weeks in January 2023, and are very pleased with the end result!<br></br><br></br>
    Our brief was to come up with a problem, and solve it. After some thinking, we decided to look at creating a simple to use and accessible worldbuilding app for creative people such as writers, artists, or roleplaying gamers. The existing options are often confusing, busy, or otherwise suffer from unfriendly UI/UX.<br></br><br></br>
    The result is <strong>Imaginerium</strong>, which in its current form allows you to create and save all sorts of original characters, collaborate with other creators, and - thanks to Azgaar's Fantasy Map Generator - make and save world maps. There are many other things we'd like to add in future, from random plot generation to some form of character illustration, along the lines of a picrew. But for now, enjoy the result of our hard work as full stack developers!</p>
    </div>

    <div className={styles.cardsContainer}>
    
    <div>
        <div className={styles.center}>
          <div className={styles.card}>
            <div className={styles.additional}>
              <div className={styles.userCard}>
                <h2>Felicity Cullen</h2>
                <div className={styles.aliveStatus}>
                    <span>
                      <GiHeartInside /> <span>Alive</span>
                    </span>
                </div>
                <div className={styles.stats}>
                <div className={styles.socialsContainer}>
                  <div><Link className={styles.link} href="https://www.linkedin.com/in/felicitycullen" target="_blank"><AiFillLinkedin className={styles.icon}/></Link></div>
                  <div><Link className={styles.link} href="https://github.com/Fliss317" target="_blank"><AiFillGithub className={styles.icon} /></Link></div>
                  </div>
                </div>
              </div>
              <div className={styles.moreInfo}>
                <p className={styles.description}>Prior to the bootcamp, Felicity spent 15 years in a variety of retail, office, and other service jobs before deciding to take the plunge into tech and do something constructive with the potential to improve the lives of many people. {/*She enjoys back-end development and in her free time likes to indulge her nerdy hobbies such as painting toy soldiers and playing boardgames, and occasionally writing poetry.*/} </p>
              </div>
            </div>
            <div className={styles.general}>
                <img
                  className={styles.image}
                  src="./felicity_pfp.jpg"
                  alt="A photo of Felicity, holding a toy soldier. She is smiling."
                />
            </div>
          </div>
    </div>  
    </div> 

    <div>
        <div className={styles.center}>
          <div className={styles.card}>
            <div className={styles.additional}>
              <div className={styles.userCard}>
                <h2>Andrés Espin</h2>
                <div className={styles.aliveStatus}>
                    <span>
                      <GiHeartInside /> <span>Alive</span>
                    </span>
                </div>
                <div className={styles.stats}>
                <div className={styles.socialsContainer}>
                  <div><Link className={styles.link} href="https://www.linkedin.com/in/andres-e-036492108/" target="_blank"><AiFillLinkedin className={styles.icon}/></Link></div>
                  <div><Link className={styles.link} href="https://github.com/andres3m" target="_blank"><AiFillGithub className={styles.icon} /></Link></div>
                  </div>
                </div>
              </div>
              <div className={styles.moreInfo}>
                <p className={styles.description}>Andrés has seven years of experience working with hardware as an electronics technician. However, when he discovered the power of the web he decided to apply to School of Code to learn new skills and transfer his current ones in to software.</p>
              </div>
            </div>
            <div className={styles.general}>
                <img
                  className={styles.image2}
                  src="./andres_pfp.jpg"
                  alt="Pixel art of Andrés."
                />
            </div>
          </div>
    </div>  
    </div> 

    <div>
        <div className={styles.center}>
          <div className={styles.card}>
            <div className={styles.additional}>
              <div className={styles.userCard}>
                <h2>Iona<br/>Rose</h2>
                 <div className={styles.aliveStatus}>
                    <span>
                      <GiHeartInside /> <span>Alive</span>
                    </span>
                </div> 
                <div className={styles.stats}>
                  <div className={styles.socialsContainer}>
                  <div><Link className={styles.link} href="linkedin.com/in/iona-rose/" target="_blank"><AiFillLinkedin className={styles.icon}/></Link></div>
                  <div><Link className={styles.link} href="https://github.com/ionarose" target="_blank"><AiFillGithub className={styles.icon} /></Link></div>
                  </div>
                </div>
              </div>
              <div className={styles.moreInfo}>
                <p className={styles.description}>Before retraining, Iona was a medical scientist working mainly in cancer diagnosis and treatment. Initially, she loved her career - there was so much to learn and discover, and she enjoyed working in big teams of skilled professionals - but eventually needed to find a career where she wouldn’t run out of things to learn, and found it in code!</p>
              </div>
            </div>
            <div className={styles.general}>
                <img
                  className={styles.image2}
                  src="./iona_pfp.jpg"
                  alt="A photo of Iona."
                />
            </div>
          </div>
    </div>  
    </div> 

    <div>
        <div className={styles.center}>
          <div className={styles.card}>
            <div className={styles.additional}>
              <div className={styles.userCard}>
                <h2>Filip Ruminski</h2>
                <div className={styles.aliveStatus}>
                    <span>
                      <GiHeartInside /> <span>Alive</span>
                    </span>
                </div>
                <div className={styles.stats}>
                <div className={styles.socialsContainer}>
                  <div><Link className={styles.link} href="https://www.linkedin.com/in/filip-ruminski/" target="_blank"><AiFillLinkedin className={styles.icon}/></Link></div>
                  <div><Link className={styles.link} href="https://github.com/fruminski" target="_blank"><AiFillGithub className={styles.icon} /></Link></div>
                  </div>
                  </div>
              </div>
              <div className={styles.moreInfo}>
                <p className={styles.description}>WORDS HERE </p>
              </div>
            </div>
            <div className={styles.general}>
                <img
                  className={styles.image2}
                  src="./filip_pfp.png"
                  alt="Pixel art of Filip."
                />
            </div>
          </div>
    </div>  
    </div> 

    <div>
        <div className={styles.center}>
          <div className={styles.card}>
            <div className={styles.additional}>
              <div className={styles.userCard}>
                <h2>Charles Sajan</h2>
                <div className={styles.aliveStatus}>
                    <span>
                      <GiHeartInside /> <span>Alive</span>
                    </span>
                </div>
                <div className={styles.stats}>
                <div className={styles.socialsContainer}>
                  <div><Link className={styles.link} href="https://www.linkedin.com/in/charlessajan/" target="_blank"><AiFillLinkedin className={styles.icon}/></Link></div>
                  <div><Link className={styles.link} href="https://github.com/csajan" target="_blank"><AiFillGithub className={styles.icon} /></Link></div>
                  </div>
              </div>
              </div>
              <div className={styles.moreInfo}>
                <p className={styles.description}>WORDS HERE </p>
              </div>
            </div>
            <div className={styles.general}>
                <img
                  className={styles.image3}
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