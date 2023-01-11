import React, {useState} from 'react';
import styles from '../styles/Form.module.css';
 
export default function Form() {
  const [currentForm, setCurrentForm] = useState(0);

    const carousel = [
      <div className="form-content-one"> 
        <div className='inputs-container'>
        <label htmlFor="char_name">Character Name:</label>
          <input type="text" name="char_name" id="char_name"/>
          
          <label htmlFor="char_height">Height in feet?</label>
          <select className='dropdown' name="char_height" id="char_height">
          <option value="" defaultValue>How tall are they?</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          </select>
            
        </div>
        
      </div>, 

      <div className="form-content-two">

         <div className='inputs-container'>
            {/*change to limit to positive numbers only */}
          <label htmlFor="char_age">How old are they in years?</label>
          <input type="number" name="char_age" id="char_age"/>

          <label htmlFor="char_alive">Are they alive?</label>
          <select className='dropdown' name="char_alive" id="char_alive">
          <option value="true">They live!</option>
          <option value="false">They are dead!</option>
          </select>
            
        </div>
        
      </div>
    //   <div className="form-content-three">

    //     <div className='inputs-container'>
    //         <h1>page 3</h1>
    //         <h1>page 3</h1>
    //         <h1>page 3</h1>
            
    //     </div>

    //   </div> 
    ]
 
    async function addNewCharacter(characterData) {
        await fetch(`https://imaginerium-qpii.onrender.com/characters`, {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(characterData),
        });
      }
  
  return (
    <>

    
    <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const characterData = {
              user_id: 1,
              char_name: formData.get("char_name"),
              char_height: formData.get("char_height"),
              char_age: formData.get("char_age"),
              char_alive: formData.get("char_alive"),
            };

            addNewCharacter(characterData);

            alert(`You have created ${characterData.char_name}`)
          }}
        >
        {/* {console.log(characterData)} */}

        
    
    <div className="form-container">
      <div className='long-div'>
        <div className='inputs-container'>
          {carousel[currentForm]}
        </div>   
        

        {currentForm === 0 ?
        <div className='button-container-one'>
          <button class='next' onClick={()=>{currentForm <2 && setCurrentForm(currentForm+1)}}>Next</button>
      </div> 
      : ''
        }

        {currentForm === 1 ?
        <div className='button-container-two'>
          <button class='prev' onClick={()=>{setCurrentForm(currentForm-1)}}>Previous</button>
          <button class='next' onClick={()=>{setCurrentForm(currentForm+1)}}>Next</button>
      </div> 
      : ''
        }

        {currentForm === 2 ?
        <div className='button-container-three'>
          <button class='prev' onClick={()=>{setCurrentForm(currentForm-1)}}>Previous</button>
          <button class='next' onClick={()=>{currentForm <2 && setCurrentForm(currentForm+1)}} id="next">Submit</button>
      </div> 
      : ''
        }
      </div>
     </div>

     </form>
     </>
  )
}
