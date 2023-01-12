import styles from "../styles/characterCard.module.css";
import { SlGhost } from "react-icons/sl";
import { GiHeartInside } from "react-icons/gi";
import { useState } from "react";
import PopUpCharacterCard from "../modals/popUpCharacterCard";


export default function CharacterCard(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    
    
       <div  onClick={() => setShowModal(!showModal)} >
       <div class="center">

<div class="card green">
  <div class="additional">
    <div class="user-card">
    
      <div class="alive-status">
        Alive
      </div>
      
      <img class="image" src="https://deepgrouplondon.com/wp-content/uploads/2019/06/person-placeholder-5.png" />
    </div>
    <div class="more-info">
      <h1>Jane Doe</h1>
      
      <div class="stats">
        <div>
          <div class="title">Age</div>
          <i class="fa fa-heart"></i>
          <div class="value">28</div>
        </div>
        <div>
          <div class="title">Height</div>
          <i class="fa fa-heart"></i>
          <div class="value">5'2</div>
        </div>
        <div>
          <div class="title">Family</div>
          <i class="fa fa-group"></i>
          <div class="value">Doe</div>
        </div>
        
      </div>
    </div>
  </div>
  <div class="general">
    <h1>Jane Doe</h1>
    <p class="description">Brief character description Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    <span class="more">Click on the card to expand</span>
  </div>
</div>

</div>
{/*  <--end of card styling */}

   
        
        {/* <img classNameName={styles.img} src={props.image} alt={props.name} />
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
        )} */}


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
  );
}