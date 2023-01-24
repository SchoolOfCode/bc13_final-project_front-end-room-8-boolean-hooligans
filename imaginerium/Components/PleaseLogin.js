import NewNavBar from "./NewNavBar.js";
import LoginOutButton from "./login-btn";

export default function PleaseLogin() {
    if (!session) {
    return (
        <>
            <NewNavBar/>
            <div>
            <h1>You are not logged in! Please login:</h1>
            <LoginOutButton/>
            </div>
        </>
        );
    }
}