import styles from "../styles/characterCard.module.css";
import { SlGhost } from "react-icons/sl";
import { GiHeartInside } from "react-icons/gi";
import { useState } from "react";
import PopUpCharacterCard from "../modals/popUpCharacterCard";

export default function CharacterCard(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.card} onClick={() => setShowModal(!showModal)} >
        
        {/* <img className={styles.img} src={props.image} alt={props.name} /> */}
        <h3 className={styles.name}>{props.char_name}</h3>
        <p>Age: {props.char_age}</p>

        {props.char_alive ? (
          <p>
            <GiHeartInside /> Alive!
          </p>
        ) : (
          <p>
            <SlGhost /> Dead
          </p>
        )}

        {showModal ? (
          <PopUpCharacterCard>
            <div className="pop-up">
              <h1>{props.char_name}</h1>
              <p>Height in feet: {props.char_height}</p>
              <p>Age in years: {props.char_age}</p>
              {props.char_alive? (<p>Status: <GiHeartInside /> Alive!</p>) : (<p>Status: <SlGhost /> Dead</p>)}
              <button id="pop-up-button" onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </PopUpCharacterCard>
        ) : null}
      </div>
    </>
  );
}