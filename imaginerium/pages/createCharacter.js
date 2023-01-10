import Link from "next/link";
import Navigation from "../Components/Navigation";
// import NameInput from "../Components/NameInput";
import Input from "../Components/Input";


export default function createCharacter() {
    return (
        <>
        <Navigation></Navigation>
        <div>
        <h1>Create character</h1>
        <Input></Input>
          <button><Link href="/">← Back to home</Link></button>
      </div>
      </>
    );
  }