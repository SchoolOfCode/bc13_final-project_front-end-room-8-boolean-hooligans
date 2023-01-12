import styles from "../styles/characterCard.module.css";
// import { SlGhost } from 'react-icons/sl';
// import { GiHeartInside } from  'react-icons/gi';



export default function CharacterCard(props) {
// const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div className={styles.card}> 
      {/* <img className={styles.img} src={props.image} alt={props.name} /> */}
      <h3 className={styles.name}>{props.char_name}</h3>
      <p>Age: {props.char_age}</p>

      
      {/* {props.char_alive ? (
             <p><GiHeartInside /> Alive!</p>
            ) : (
              <p> <SlGhost /> Dead</p>
            )} */}
    </div>
    </>
  );
}
