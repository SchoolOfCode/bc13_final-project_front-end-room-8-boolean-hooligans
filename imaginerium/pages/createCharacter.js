import Form from "../Components/Form";
import NewNavBar from "../Components/NewNavBar";
import PleaseLogin from "../Components/PleaseLogin.js";
import { useSession } from "next-auth/react";

export default function createCharacter() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <PleaseLogin />
      </>
    );
  }

  return (
    <>
      <NewNavBar />
      <Form />
    </>
  );
}
