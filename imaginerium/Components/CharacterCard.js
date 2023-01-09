import styles from "../styles/characterCard.module.css";

export default function CharacterCard(props) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
    </div>
  );
}
