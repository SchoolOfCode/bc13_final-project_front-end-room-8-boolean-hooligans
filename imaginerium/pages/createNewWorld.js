import Navigation from "../Components/Navigation";
import NewNavBar from "../Components/NewNavBar";

export default function createNewWorld() {
  return (
    <>
      {/* <Navigation /> */}
      <NewNavBar />
      <iframe
        className="map"
        src="https://azgaar.github.io/Fantasy-Map-Generator/"
      ></iframe>
    </>
  );
}
