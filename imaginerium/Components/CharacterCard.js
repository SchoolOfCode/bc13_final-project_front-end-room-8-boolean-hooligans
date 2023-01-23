// import styles from "../styles/characterCard.module.css";
// import { SlGhost } from "react-icons/sl";
// import { GiHeartInside } from "react-icons/gi";
// import { RiCake2Fill } from "react-icons/ri";
// import { HiUserGroup } from "react-icons/hi";
// import { MdHeight } from "react-icons/md";
// import { useState } from "react";
// import PopUpCharacterCard from "../modals/popUpCharacterCard";
// import CharacterPopUp from "./CharacterPopUp";

// export default function CharacterCard(props) {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div>
//       <div onClick={() => setShowModal(true)} className={styles.center}>
//         <div className="card green">
//           <div className={styles.additional}>
//             <div className={styles.userCard}>
//               <div className={styles.aliveStatus}>
//                 {props.char_alive ? (
//                   <span>
//                     <GiHeartInside /> <span>Alive</span>
//                   </span>
//                 ) : (
//                   <span>
//                     <SlGhost /> <span>Dead</span>
//                   </span>
//                 )}
//               </div>

//               <img className={styles.image} src={props.char_img} />
//             </div>
//             <div className={styles.moreInfo}>
//               <h1>{props.char_name}</h1>

//               <div className={styles.stats}>
//                 <div>
//                   <div className={styles.title}>Age</div>
//                   <RiCake2Fill />
//                   <div className={styles.value}>{props.char_age}</div>
//                 </div>
//                 <div>
//                   <div className={styles.title}>Height</div>
//                   <MdHeight />
//                   <div className={styles.value}>{props.char_height}ft</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//         <div className={styles.general}>
//           <h1>{props.char_name}</h1>
//           <p className={styles.description}>

//             {props.char_desc}

//           </p>
//           <span className={styles.more}>Click to expand</span>

//         </div>
//       </div>
//       {showModal ? (
//         <PopUpCharacterCard>
//           <button
//             className="close-pop-up-button"
//             onClick={() => setShowModal(false)}
//           >
//             Close X
//           </button>
//           <CharacterPopUp

//                 key={props.character_id}
//                 character_id={props.character_id}
//                 user_email={props.user_email}
//                 char_name={props.char_name}
//                 char_age={props.char_age}
//                 char_alive={props.char_alive}
//                 char_background={props.char_background}
//                 char_desc={props.char_desc}
//                 char_disabilities={props.char_disabilities}
//                 char_eyeColour={props.char_eyeColour}
//                 char_fears={props.char_fears}
//                 char_features={props.char_features}
//                 char_gender={props.char_gender}
//                 char_hairColour={props.char_hairColour}
//                 char_height={props.char_height}
//                 char_hopes={props.char_hopes}
//                 char_img={props.char_img}
//                 char_job={props.char_job}
//                 char_likes={props.char_likes}
//                 char_morality={props.char_morality}
//                 char_notes={props.char_notes}
//                 char_pronouns={props.char_pronouns}
//                 char_relationships={props.char_relationships}
//                 char_sexuality={props.char_sexuality}
//                 char_skills={props.char_skills}
//                 char_skinColour={props.char_skinColour}
//                 char_species={props.char_species}
//                 char_speech={props.char_speech}
//                 char_weight={props.char_weight}
//                 />

//         </PopUpCharacterCard>
//       ) : null}
//     </div>
//   );
// }
/*Comment*/

import styles from "../styles/characterCard.module.css";
import { SlGhost } from "react-icons/sl";
import { GiHeartInside } from "react-icons/gi";
import { RiCake2Fill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { MdHeight } from "react-icons/md";
import { useState } from "react";
import PopUpCharacterCard from "../modals/popUpCharacterCard";
import CharacterPopUp from "./CharacterPopUp";

export default function CharacterCard(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
    <div onClick={() => setShowModal(true)} className="center">
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
            </div>
          </div>
        </div>
        <div className="general">
          <h1>{props.char_name}</h1>
          <p className="description">
           {props.char_desc}
          </p>
          <span className="more">Click to expand</span>
        </div>
      </div>
</div>  
      {showModal ? (
        <PopUpCharacterCard>
          <button className="close-pop-up-button" onClick={() => setShowModal(false)}>
              Close X
            </button>
          <CharacterPopUp
                key={props.character_id}
                character_id={props.character_id}
                user_email={props.user_email}
                char_name={props.char_name}
                char_age={props.char_age}
                char_alive={props.char_alive}
                char_background={props.char_background}
                char_desc={props.char_desc}
                char_disabilities={props.char_disabilities}
                char_eyeColour={props.char_eyeColour}
                char_fears={props.char_fears}
                char_features={props.char_features}
                char_gender={props.char_gender}
                char_hairColour={props.char_hairColour}
                char_height={props.char_height}
                char_hopes={props.char_hopes}
                char_img={props.char_img}
                char_job={props.char_job}
                char_likes={props.char_likes}
                char_morality={props.char_morality}
                char_notes={props.char_notes}
                char_relationships={props.char_relationships}
                char_sexuality={props.char_sexuality}
                char_skills={props.char_skills}
                char_skinColour={props.char_skinColour}
                char_species={props.char_species}
                char_speech={props.char_speech}
                char_weight={props.char_weight}
                />
        </PopUpCharacterCard>
      ) : null}
    </div>
  );
}
/*Comment*/