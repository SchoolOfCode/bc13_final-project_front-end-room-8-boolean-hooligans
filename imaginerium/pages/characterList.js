
import Navigation from "../Components/Navigation.js";
import CharacterCard from "../Components/CharacterCard.js";
import styles from "../styles/characterList.module.css";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { useSession, getSession } from "next-auth/react"

export default function characterList() {

  const { data: session } = useSession()
  //const { data: session } = getSession()
  const [charactersArray, setCharactersArray] = useState([]);
 
  console.log(session)
  

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       `http://localhost:3001/characters?user_id=${session?.user.email}`
  //     );
  //     const data = await response.json();
  //     setCharactersArray(data.payload);
  //   }
  //   fetchData();
  // }, [session]);



  async function searchByName(nameToSearch) {
    const response = await fetch(
      `https://imaginerium-qpii.onrender.com/characters?char_name=${nameToSearch}`
    );
    const data = await response.json();
    setCharactersArray(data.payload);
  }
  

  if (!session) {
    
    return (
      <div>Log in to view your saved characters</div>
    )
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
