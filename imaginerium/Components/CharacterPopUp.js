import { SlGhost } from "react-icons/sl";
import { GiHeartInside } from "react-icons/gi";
import { RiCake2Fill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { MdHeight } from "react-icons/md";

export default function CharacterPopUp(props){

return (
    <div className="pop-up">
        <div className="pop-up-left">
        <img className="pop-up-image" src="https://deepgrouplondon.com/wp-content/uploads/2019/06/person-placeholder-5.png" />
        <h3>{props.char_name}</h3> <button className="edit-button">edit</button><button>delete {props.char_name}</button>
        </div>
        <div className="pop-up-right">
            <h1>{props.char_name}</h1>
            <p>Height in feet: {props.char_height}<button className="edit-button">edit</button></p>
            <p>Age in years: {props.char_age}<button className="edit-button">edit</button></p>
            {props.char_alive ? (
              <p>
                Status: <GiHeartInside /> Alive!
              </p>
            ) : (
              <p>
                Status: <SlGhost /> Dead
              </p>
            )}<button className="edit-button">edit</button>
           </div>
          </div>
)



}