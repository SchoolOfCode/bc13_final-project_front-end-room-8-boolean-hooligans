import Link from "next/link";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Navigation from "../Components/Navigation";
import CharacterCard from "../Components/CharacterCard";
import styles from "../styles/characterList.module.css";

export default function characterList() {
  const characters = [
    {
      name: "John Doe",
      image:
        "https://i0.wp.com/www.hireanillustrator.com/i/images/2021/02/DnD1.jpg?resize=600%2C849&ssl=1",
      alt: "john doe"
    },
    {
      name: "Jane Doe",
      image: "https://i.imgur.com/ItxjA1w.png",
      alt: "jane doe"
    },
    {
      name: "Bojo",
      image:
        "https://i0.wp.com/www.hireanillustrator.com/i/images/2021/02/DnD1.jpg?resize=600%2C849&ssl=1",
      alt: "bojo"
    }
  ];
  return (
    <>
      <Navigation></Navigation>
      <div>
        <div className="searchBar">
          <Input placeholder="Search" type="text" />
          <Button text="Search" />
        </div>
        <h1>List of characters</h1>
        <div className={styles.cardsContainer}>
          {characters.map((character) => {
            return (
              <CharacterCard
                name={character.name}
                image={character.image}
                alt={character.alt}
              />
            );
          })}
        </div>
      </div>
      <button>
        <Link href="/">← Back to home</Link>
      </button>
    </>
  );
}
