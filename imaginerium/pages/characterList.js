import Link from "next/link";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Navigation from "../Components/Navigation.js";
import CharacterCard from "../Components/CharacterCard.js";
import styles from "../styles/characterList.module.css";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function characterList() {
  // const charactersArray = useFetch()
  const [charactersArray, setCharactersArray] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://imaginerium-qpii.onrender.com/characters`
      );
      const data = await response.json();
      setCharactersArray(data.payload);
    }
    fetchData();
  }, []);

  async function searchByName(nameToSearch) {
    const response = await fetch(
      `https://imaginerium-qpii.onrender.com/characters?char_name=${nameToSearch}`
    );
    const data = await response.json();
    setCharactersArray(data.payload);
  }

  
  return (
    <>
    
      <Navigation />
      <div>
        <div className={styles.searchBar}>
          <div role="heading" aria-level="1">
            <h1>List of characters</h1>
            
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                let nameToSearch = formData.get("char_name");

                searchByName(nameToSearch);
              }}
            >
              <label htmlFor="char_name">Search by name:</label>
              <input type="text" name="char_name" id="char_name" />
              <button>Submit</button>
            </form>
            <button onClick={()=>searchByName("")}>View All Characters</button>
          </div>
        </div>

        
          <div className={styles.cardsContainer}>
            {charactersArray.map((character) => {
              return (
                <CharacterCard className="cctest"
                  key={character.character_id}
                  character_id={character.character_id}
                  char_name={character.char_name}
                  char_age={character.char_age}
                  char_alive={character.char_alive}
                  char_height={character.char_height}
                  // image={character.image}
                  // alt={character.alt}
                />
              );
            })}
          </div>
       
      </div>
    </>
  );
}
