import Navigation from "../Components/Navigation";
import Link from "next/link";
import Image from "next/image";

export default function aboutUs() {
   
return (
   <>
    <Navigation />
    <div>
    <h1>The Boolean Hooligans</h1>
    <Image className="teamLogo" src="./boolean_hoolingans_transparent.png"></Image>
    <p>We are a team of five from the School of Code Cohort 13, and this site is our final project. We built it over the course of four weeks in January 2023, and are very pleased with the end result!</p>
    <h2>Felicity Cullen</h2>
    <p>Prior to the bootcamp, Felicity spent 15 years in a variety of retail, office, and other service jobs before deciding to take the plunge into tech and do something constructive with the potential to improve the lives of many people. She enjoys back-end development and in her free time likes to indulge her nerdy hobbies such as painting toy soldiers and playing boardgames, and occasionally writing poetry. </p>
    <p><Link href="https://www.linkedin.com/in/felicitycullen">LinkedIn</Link></p>
    <p><Link href="https://github.com/Fliss317">GitHub</Link></p> 
    <h2>Andres Espin Martinez</h2>
    <p>WORDS GO HERE</p>
    <p><Link href="">LinkedIn</Link></p>
    <p><Link href="">GitHub</Link></p>
    <h2>Iona Rose</h2>
    <p>WORDS GO HERE</p>
    <p><Link href="linkedin.com/in/iona-rose/">LinkedIn</Link></p>
    <p><Link href="https://github.com/ionarose">GitHub</Link></p> 
    <h2>Filip Ruminski</h2>
    <p>WORDS GO HERE</p>
    <p><Link href="https://www.linkedin.com/in/filip-ruminski/">LinkedIn</Link></p>
    <p><Link href="https://github.com/fruminski">GitHub</Link></p>
    <h2>Charles Sajan</h2>
    <p>WORDS GO HERE</p>
    <p><Link href="">LinkedIn</Link></p>
    <p><Link href="">GitHub</Link></p>
    </div>
    </>
)
}