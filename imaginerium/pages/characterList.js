import Link from "next/link";
import Navigation from "../Components/Navigation";


export default function characterList() {
    return (
      <div>
        <h1>List of characters</h1>
          <button><Link href="/">← Back to home</Link></button>
      </div>
    );
  }