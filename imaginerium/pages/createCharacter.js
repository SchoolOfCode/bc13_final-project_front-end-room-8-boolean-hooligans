import Link from "next/link";


export default function createCharacter() {
    return (
      <div>
        <h1>Create character</h1>
          <button><Link href="/">← Back to home</Link></button>
      </div>
    );
  }