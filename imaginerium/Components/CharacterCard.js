import styles from "../styles/characterCard.module.css";
import { SlGhost } from "react-icons/sl";
import { GiHeartInside, GiWeight } from "react-icons/gi";
import { RiCake2Fill } from "react-icons/ri";
import { MdTransgender } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { MdHeight } from "react-icons/md";
import { useState } from "react";
import PopUpCharacterCard from "../modals/popUpCharacterCard";
import CharacterPopUp from "./CharacterPopUp";
import { motion } from "framer-motion";

export default function CharacterCard(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div onClick={() => setShowModal(true)} className={styles.center}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.card}
        >
          <div className={styles.additional}>
            <div className={styles.userCard}>
              <div className={styles.aliveStatus}>
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

              {props.char_img ? (
                <img src={props.char_img} className={styles.image} />
              ) : (
                <img
                  className={styles.image}
                  src="https://deepgrouplondon.com/wp-content/uploads/2019/06/person-placeholder-5.png"
                />
              )}
            </div>
            <div className={styles.moreInfo}>
              {/* <h1>{props.char_name}</h1> */}

              <div className={styles.stats}>
                <div>
                  <div className={styles.title}>Gender</div>
                  <MdTransgender />
                  <div className={styles.value}>{props.char_gender}</div>
                </div>
                <div>
                  <div className={styles.title}>Age</div>
                  <RiCake2Fill />
                  <div className={styles.value}>{props.char_age}</div>
                </div>
                <div>
                  <div className={styles.title}>Height</div>
                  <MdHeight />
                  <div className={styles.value}>{props.char_height}cm</div>
                </div>
                <div>
                  <div className={styles.title}>Weight</div>
                  <GiWeight />
                  <div className={styles.value}>{props.char_weight}kg</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.general}>
            <h1>{props.char_name}</h1>
            <p className={styles.description}>{props.char_desc}</p>
            <span className={styles.more}>Click to expand</span>
          </div>
        </motion.div>
      </div>
      {showModal ? (
        <PopUpCharacterCard>
          <CharacterPopUp
            setShowModal={setShowModal}
            searchByName={props.searchByName}
            key={props.character_id}
            character_id={props.character_id}
            user_email={props.user_email}
            char_name={props.char_name}
            char_age={props.char_age}
            char_alive={props.char_alive}
            char_background={props.char_background}
            char_desc={props.char_desc}
            char_disabilities={props.char_disabilities}
            char_eyecolour={props.char_eyecolour}
            char_fears={props.char_fears}
            char_features={props.char_features}
            char_gender={props.char_gender}
            char_haircolour={props.char_haircolour}
            char_height={props.char_height}
            char_hopes={props.char_hopes}
            char_img={props.char_img}
            char_job={props.char_job}
            char_likes={props.char_likes}
            char_morality={props.char_morality}
            char_notes={props.char_notes}
            char_pronouns={props.char_pronouns}
            char_relationships={props.char_relationships}
            char_sexuality={props.char_sexuality}
            char_skills={props.char_skills}
            char_skincolour={props.char_skincolour}
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
