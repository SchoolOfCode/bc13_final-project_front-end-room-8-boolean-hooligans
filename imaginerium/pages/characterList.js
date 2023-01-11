import Link from "next/link";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Navigation from "../Components/Navigation.js";
import CharacterCard from "../Components/CharacterCard.js";
import styles from "../styles/characterList.module.css";
import useFetch from "../hooks/useFetch";
// import MyPopup from "../modals/characterCardModals.js";
import { state, useState } from 'react';
import PopUpCharacterCard from "../modals/popUpCharacterCard"

export default function characterList() {

const [showModal, setShowModal] = useState(false);
const charactersArray = useFetch()

console.log(charactersArray)

  return (
    <>
      <Navigation/>
      <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
            <PopUpCharacterCard
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                Hello from the modal!
            </PopUpCharacterCard>
        <h1>List of characters</h1>
        <div className="searchBar">
          <Input placeholder="Search" type="text" />
          <Button text="Search" />
        </div>
        <div className={styles.cardsContainer}>
          {charactersArray[0].map((character) => {
            return (
              <div>
              <CharacterCard 
                key={character.character_id}
                char_name={character.char_name}
                char_age={character.char_age}
                char_alive={character.char_alive}
                // image={character.image}
                // alt={character.alt}
              />
              </div>
            );
          })}
        </div>
        {/* {showModal ? (<MyPopup/>): null} */}
      </div>
    </>
  );
}
