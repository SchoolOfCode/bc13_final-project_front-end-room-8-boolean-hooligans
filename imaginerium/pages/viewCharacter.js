import { React, state, useState } from "react";
import Navigation from "../Components/Navigation";
import NewNavBar from "../Components/NewNavBar";

function viewCharacter() {
  return (
    <div>
      {/* <Navigation/> */}
      <NewNavBar />
      <div>viewCharacter</div>

      <div className="circle">
        <div className="semi-circle top">
          <p className="text-hidden">My Words</p>
        </div>
        <div className="semi-circle bottom"></div>
      </div>
    </div>
  );
}

export default viewCharacter;
