import Link from "next/link";
import Navigation from "../Components/Navigation";


export default function createCharacter() {
    return (
        <>
        <Navigation></Navigation>
        <div>
        <h1>Create character</h1>
          <button><Link href="/">← Back to home</Link></button>
      </div>
      </>
    );
  }