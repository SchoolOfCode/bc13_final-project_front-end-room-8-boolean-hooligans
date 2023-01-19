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
  const[editGender, setEditGender] = useState(null)
  const[editHairInput, setEditHairInput] = useState(false)
  const[editHair, setEditHair] = useState(null)
  const[editHeightInput, setEditHeightInput] = useState(false)
  const[editHeight, setEditHeight] = useState(null)
  const[editHopesInput, setEditHopesInput] = useState(false)
  const[editHopes, setEditHopes] = useState(null)
  // const[editImgInput, setEditImgInput] = useState(false)
  // const[editImg, setImgEdit] = useState(null)
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

            {/* <p className="category">Portrait:</p>
            {editImgInput?(<div><input type='text' onChange={(e)=>setEditImg(e.target.value)}></input><button onClick={()=>editImg(props.character_id, 'char_img', editImg)} className="edit-button">Done</button></div>):(<div><h3>{props.char_img}</h3><button onClick={()=>setEditImgInput(!editImgInput)} className="edit-button">edit</button></div>)} */}

            <p className="category">Age in years: </p>
            {editAgeInput?(<div><input type='number' onChange={(e)=>setEditAge(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_age', editAge)} className="edit-button">Done</button></div>):(<div><h3>{props.char_age}</h3><button onClick={()=>setEditAgeInput(!editAgeInput)} className="edit-button">edit</button></div>)}

            <p className="category">Ethnic group and species:</p>
            {editSpeciesInput?(<div><input type='text' onChange={(e)=>setEditSpecies(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_species', editSpecies)} className="edit-button">Done</button></div>):(<div><h3>{props.char_species}</h3><button onClick={()=>setEditSpeciesInput(!editSpeciesInput)} className="edit-button">edit</button></div>)}

            <p className="category">Hair colour:</p>
            {editHairInput?(<div><input type='text' onChange={(e)=>setEditHair(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_hairColour', editHair)} className="edit-button">Done</button></div>):(<div><h3>{props.char_hairColour}</h3><button onClick={()=>setEditHairInput(!editHairInput)} className="edit-button">edit</button></div>)}

            <p className="category">Eye colour:</p>
            {editEyeInput?(<div><input type='text' onChange={(e)=>setEditEye(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_eyeColour', editEye)} className="edit-button">Done</button></div>):(<div><h3>{props.char_eyeColour}</h3><button onClick={()=>setEditEyeInput(!editEyeInput)} className="edit-button">edit</button></div>)}

            <p className="category">Skin colour:</p>
            {editSkinInput?(<div><input type='text' onChange={(e)=>setEditSkin(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_skinColour', editSkin)} className="edit-button">Done</button></div>):(<div><h3>{props.char_skinColour}</h3><button onClick={()=>setEditSkinInput(!editSkinInput)} className="edit-button">edit</button></div>)}

            <p className="category">Height in feet:</p>            
            {editHeightInput?(<div><input type='number' onChange={(e)=>setEditHeight(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_height',editHeight)} >Done</button></div>):(<div><h3>{props.char_height}</h3><button onClick={()=>setEditHeightInput(!editHeightInput)} className="edit-button">edit</button></div>)}

            <p className="category">Weight in Kilograms:</p>
            {editWeightInput?(<div><input type='text' onChange={(e)=>setEditWeight(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_weight', editWeight)} className="edit-button">Done</button></div>):(<div><h3>{props.char_weight}</h3><button onClick={()=>setEditWeightInput(!editWeightInput)} className="edit-button">edit</button></div>)}

            <p className="category">Distinguishing features:</p>
            {editFeaturesInput?(<div><input type='text' onChange={(e)=>setEditFeatures(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_features', editFeatures)} className="edit-button">Done</button></div>):(<div><h3>{props.char_features}</h3><button onClick={()=>setEditFeaturesInput(!editFeaturesInput)} className="edit-button">edit</button></div>)}

            <p className="category">Physical Description:</p>
            {editDescInput?(<div><input type='text' onChange={(e)=>setEditDesc(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_desc', editDesc)} className="edit-button">Done</button></div>):(<div><h3>{props.char_desc}</h3><button onClick={()=>setEditDescInput(!editDescInput)} className="edit-button">edit</button></div>)}

            {props.char_alive ? (
              <p className="category">
                Status: <GiHeartInside /> Alive!
                <button onClick={()=>editCharacter(props.character_id,'char_alive',false)}>Kill!</button>
              </p>
            ) : (
              <p className="category">
                Status: <SlGhost /> Dead
                <button onClick={()=>editCharacter(props.character_id,'char_alive',true)}>Resurrect!</button>
              </p>
            )}

            <h2>Personality:</h2>

            <p className="category">Hopes, dreams, motivation, and goals:</p>
            {editHopesInput?(<div><input type='text' onChange={(e)=>setEditHopes(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_hopes', editHopes)} className="edit-button">Done</button></div>):(<div><h3>{props.char_hopes}</h3><button onClick={()=>setEditHopesInput(!editHopes)} className="edit-button">edit</button></div>)}

            <p className="category">Fears, troubles, and flaws:</p>
            {editFearsInput?(<div><input type='text' onChange={(e)=>setEditFears(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_fears', editFears)} className="edit-button">Done</button></div>):(<div><h3>{props.char_fears}</h3><button onClick={()=>setEditFearsInput(!editFearsInput)} className="edit-button">edit</button></div>)}

            <p className="category">Catchphrases, sayings, languages spoken:</p>
            {editSpeechInput?(<div><input type='text' onChange={(e)=>setEditSpeech(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_speech', editSpeech)} className="edit-button">Done</button></div>):(<div><h3>{props.char_speech}</h3><button onClick={()=>setEditSpeechInput(!editSpeechInput)} className="edit-button">edit</button></div>)}

            <p className="category">Likes and dislikes:</p>
            {editLikesInput?(<div><input type='text' onChange={(e)=>setEditLikes(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_likes', editLikes)} className="edit-button">Done</button></div>):(<div><h3>{props.char_likes}</h3><button onClick={()=>setEditLikesInput(!editLikesInput)} className="edit-button">edit</button></div>)}

            <h2>Other Details:</h2>

            <p className="category">Brief Background:</p>
            {editBackgroundInput?(<div><input type='text' onChange={(e)=>setEditBackground(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_background', editBackground)} className="edit-button">Done</button></div>):(<div><h3>{props.char_background}</h3><button onClick={()=>setEditBackgroundInput(!editBackgroundInput)} className="edit-button">edit</button></div>)}

            <p className="category">Disabilities:</p>
            {editDisabilitiesInput?(<div><input type='text' onChange={(e)=>setEditDisabilities(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_disabilities', editDisabilities)} className="edit-button">Done</button></div>):(<div><h3>{props.char_disabilities}</h3><button onClick={()=>setEditDisabilitiesInput(!editDisabilitiesInput)} className="edit-button">edit</button></div>)}

            <p className="category">Job:</p>
            {editJobInput?(<div><input type='text' onChange={(e)=>setEditJob(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_job', editJob)} className="edit-button">Done</button></div>):(<div><h3>{props.char_job}</h3><button onClick={()=>setEditJobInput(!editJobInput)} className="edit-button">edit</button></div>)}

            <p className="category">Gender:</p>
            {editGenderInput?(<div><input type='text' onChange={(e)=>setEditGender(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_gender', editGender)} className="edit-button">Done</button></div>):(<div><h3>{props.char_gender}</h3><button onClick={()=>setEditGenderInput(!editGenderInput)} className="edit-button">edit</button></div>)}

            <p className="category">Sexuality:</p>
            {editSexualityInput?(<div><input type='text' onChange={(e)=>setEditSexuality(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_sexuality', editSexuality)} className="edit-button">Done</button></div>):(<div><h3>{props.char_sexuality}</h3><button onClick={()=>setEditSexualityInput(!editSexualityInput)} className="edit-button">edit</button></div>)}

            <p className="category">Skills:</p>
            {editSkillsInput?(<div><input type='text' onChange={(e)=>setEditSkills(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_skills', editSkills)} className="edit-button">Done</button></div>):(<div><h3>{props.char_skills}</h3><button onClick={()=>setEditSkillsInput(!editSkillsInput)} className="edit-button">edit</button></div>)}

            <p className="category">Morality:</p>
            {editMoralityInput?(<div><input type='text' onChange={(e)=>setEditMorality(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_morality', editMorality)} className="edit-button">Done</button></div>):(<div><h3>{props.char_morality}</h3><button onClick={()=>setEditMoralityInput(!editMoralityInput)} className="edit-button">edit</button></div>)}

            <p className="category">Personal Relationships:</p>
            {editRelationshipsInput?(<div><input type='text' onChange={(e)=>setEditRelationships(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_relationships', editRelationships)} className="edit-button">Done</button></div>):(<div><h3>{props.char_relationships}</h3><button onClick={()=>setEditRelationshipsInput(!editRelationshipsInput)} className="edit-button">edit</button></div>)}

            <p className="category">General Notes:</p>
            {editNotesInput?(<div><input type='text' onChange={(e)=>setEditNotes(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, 'char_notes', editNotes)} className="edit-button">Done</button></div>):(<div><h3>{props.char_notes}</h3><button onClick={()=>setEditNotesInput(!editNotesInput)} className="edit-button">edit</button></div>)}

           </div>
          </div>
         
)



}