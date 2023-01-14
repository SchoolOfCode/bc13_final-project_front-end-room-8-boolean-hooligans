import styles from "../styles/characterCard.module.css";
import { SlGhost } from "react-icons/sl";
import { GiHeartInside } from "react-icons/gi";
import { RiCake2Fill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { MdHeight } from "react-icons/md";
import { useState } from "react";
import PopUpCharacterCard from "../modals/popUpCharacterCard";

export default function CharacterCard(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div onClick={() => setShowModal(!showModal)} className="center">
      <div className="card green">
        <div className="additional">
          <div className="user-card">
            <div className="alive-status">
              {props.char_alive ? (
                <span>
                  <GiHeartInside /> <span>Alive</span>
                </span>
              ) : (
                <span>
                  <SlGhost /> <span>Dead</span>
                </span>
              )}
            </div>

            <img
              className="image"
              src="https://deepgrouplondon.com/wp-content/uploads/2019/06/person-placeholder-5.png"
            />
          </div>
          <div className="more-info">
            <h1>{props.char_name}</h1>

            <div className="stats">
              <div>
                <div className="title">Age</div>
                <RiCake2Fill />
                <div className="value">{props.char_age}</div>
              </div>
              <div>
                <div className="title">Height</div>
                <MdHeight />
                <div className="value">{props.char_height}ft</div>
              </div>
              <div>
                <div className="title">Family</div>
                <HiUserGroup />
                <div className="value">Doe</div>
              </div>
            </div>
          </div>
        </div>
        <div className="general">
          <h1>{props.char_name}</h1>
          <p className="description">
            First few lines of character description? Lorem etc we like words{" "}
          </p>
          <span className="more">Click to expand</span>
        </div>
      </div>

      {showModal ? (
        <PopUpCharacterCard>
          <div classNameName="pop-up">
            <h1>{props.char_name}</h1>
            <p>Height in feet: {props.char_height}</p>
            <p>Age in years: {props.char_age}</p>
            {props.char_alive ? (
              <p>
                Status: <GiHeartInside /> Alive!
              </p>
            ) : (
              <p>
                Status: <SlGhost /> Dead
              </p>
            )}
            <button id="pop-up-button" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </PopUpCharacterCard>
      ) : null}
    </div>
  );
}
