import { SlGhost } from "react-icons/sl";
import { GiHeartInside } from "react-icons/gi";
import { RiCake2Fill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { MdHeight } from "react-icons/md";
import { useEffect, useState } from "react";



export default function CharacterPopUp(props){

  const[editNameInput, setEditNameInput] = useState(false)
  const[editName, setEditName] = useState(null) 
  const[editAgeInput, setEditAgeInput] = useState(false)
  const[editAge, setEditAge] = useState(null)
  const[editAlive, setEditAlive] = useState(null)
  const[editBackgroundInput, setEditBackgroundInput] = useState(false)
  const[editBackground, setEditBackground] = useState(null)
  const[editDescInput, setEditDescInput] = useState(false)
  const[editDesc, setEditDesc] = useState(null)
  const[editDisabilitiesInput, setEditDisabilitiesInput] = useState(false)
  const[editDisabilities, setEditDisabilities] = useState(null)
  const[editEyeInput, setEditEyeInput] = useState(false)
  const[editEye, setEditEye] = useState(null)
  const[editFearsInput, setEditFearsInput] = useState(false)
  const[editFears, setEditFears] = useState(null)
  const[editFeaturesInput, setEditFeaturesInput] = useState(false)
  const[editFeatures, setEditFeatures] = useState(null)
  const[editGenderInput, setEditGenderInput] = useState(false)
  const[editGenderBackground, setEditGender] = useState(null)
  const[editHairInput, setEditHairInput] = useState(false)
  const[editHair, setEditHair] = useState(null)
  const[editHeightInput, setEditHeightInput] = useState(false)
  const[editHeight, setEditHeight] = useState(null)
  const[editHopesInput, setEditHopesInput] = useState(false)
  const[editHopes, setEditHopes] = useState(null)
  const[editImgInput, setEditImgInput] = useState(false)
  const[editImg, setImgEdit] = useState(null)
  const[editJobInput, setEditJobInput] = useState(false)
  const[editJob, setEditJob] = useState(null)
  const[editLikesInput, setEditLikesInput] = useState(false)
  const[editLikes, setEditLikes] = useState(null)
  const[editMoralityInput, setEditMoralityInput] = useState(false)
  const[editMorality, setEditMorality] = useState(null)
  const[editNotesInput, setEditNotesInput] = useState(false)
  const[editNotes, setEditNotes] = useState(null)
  const[editRelationshipsInput, setEditRelationshipsInput] = useState(false)
  const[editRelationships, setEditRelationships] = useState(null)
  const[editSexualityInput, setEditSexualityInput] = useState(false)
  const[editSexuality, setEditSexuality] = useState(null)
  const[editSkillsInput, setEditSkillsInput] = useState(false)
  const[editSkills, setEditSkills] = useState(null)
  const[editSkinInput, setEditSkinInput] = useState(false)
  const[editSkin, setEditSkin] = useState(null)
  const[editSpeciesInput, setEditSpeciesInput] = useState(false)
  const[editSpecies, setEditSpecies] = useState(null)
  const[editSpeechInput, setEditSpeechInput] = useState(false)
  const[editSpeech, setEditSpeech] = useState(null)  
  const[editWeightInput, setEditWeightInput] = useState(false)
  const[editWeight, setEditWeight] = useState(null)

async function destroyCharacter(id) {
  console.log("destroy has been called");
  console.log(id);
  await fetch(`https://imaginerium-qpii.onrender.com/characters/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  })
};

async function editCharacter(id,key,value) {
  console.log("edit has been called");
  console.log(id);
  let body = {}
  body.user_id = 1
  body[key] = value
  await fetch(`https://imaginerium-qpii.onrender.com/characters/${id}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    mode: "cors",
    headers: { "Content-Type": "application/json" }
  })
  console.log(body)
  // setEditName(null)
}



return (
  
  <div className="pop-up">
  {console.log(props.char_name)}
  {console.log(props.character_id)}
        <div className="pop-up-left">
        <img className="pop-up-image" src="https://deepgrouplondon.com/wp-content/uploads/2019/06/person-placeholder-5.png" />
        {editNameInput?(<div><input onChange={(e)=>setEditName(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id,'char_name',editName)} className="edit-button">Done</button></div>):(<div><h3>{props.char_name}</h3><button onClick={()=>setEditNameInput(!editNameInput)} className="edit-button">edit</button></div>)}
          <button className="delete-button" onClick={()=> destroyCharacter(props.character_id)}>delete {props.char_name}</button>
        </div>
        <div className="pop-up-right">
            <h1>{props.char_name}</h1>

            <h2>Physical Appearance:</h2>

            <p className="category">Age in years: </p>
            {editAgeInput?(<div><input type='number' onChange={(e)=>setEditAge(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_age', editAge)} className="edit-button">Done</button></div>):(<div><h3>{props.char_age}</h3><button onClick={()=>setEditAgeInput(!editAgeInput)} className="edit-button">edit</button></div>)}

            <p className="category">Ethnic group and species:</p>
            {editSpeciesInput?(<div><input type='text' onChange={(e)=>setEditSpecies(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_species', editSpecies)} className="edit-button">Done</button></div>):(<div><h3>{props.char_species}</h3><button onClick={()=>setEditSpeciesInput(!editSpeciesInput)} className="edit-button">edit</button></div>)}

            <p className="category">Hair colour:</p>
            {editHairInput?(<div><input type='text' onChange={(e)=>setEditHair(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_hairColour', editHair)} className="edit-button">Done</button></div>):(<div><h3>{props.char_hairColour}</h3><button onClick={()=>setEditHairInput(!editHairInput)} className="edit-button">edit</button></div>)}

            <p className="category">Height in feet:</p>            
            {editHeightInput?(<div><input type='number' onChange={(e)=>setEditHeight(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_height',editHeight)} >Done</button></div>):(<div><h3>{props.char_height}</h3><button onClick={()=>setEditHeightInput(!editHeightInput)} className="edit-button">edit</button></div>)}
            

            {props.char_alive ? (
              <p className="category">
                Status: <GiHeartInside /> Alive!
                <button onClick={()=>editCharacter(props.character_id,'char_alive',false)}>Kill</button>
              </p>
            ) : (
              <p className="category">
                Status: <SlGhost /> Dead
                <button onClick={()=>editCharacter(props.character_id,'char_alive',true)}>Resurrect</button>
              </p>
            )}
           </div>
          </div>
         
)



}