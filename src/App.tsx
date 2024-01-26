import React, { useState, useEffect } from "react";
import './App.css';

export default function CharacterStatus() {
  const initialCharacter = {
    name: 'Gandalf',
    strength: 10,
    intelligence: 18,
    charisma: 16
  };

  const [character, setCharacter] = useState({ ...initialCharacter });
  const [isEditing, setIsEditing] = useState(false);

 

  function handleChange(e: { target: { name: any; value: any; }; }) {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value
    });
    setIsEditing(true);
  }

  function handleSave() {
    // Guardar los datos en el localStorage
    localStorage.setItem('savedCharacter', JSON.stringify(character));
    setIsEditing(false);
  }

  return (
    <div className="character-form-container">
      <form className="character-form">
        <label>
          Name:
          <input
            name="name"
            value={character.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Strength:
          <input
            name="strength"
            value={character.strength}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Intelligence:
          <input
            name="intelligence"
            value={character.intelligence}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Charisma:
          <input
            name="charisma"
            value={character.charisma}
            onChange={handleChange}
          />
        </label>
        <br />
        <button onClick={handleSave}>Guardar</button>
      </form>
    </div>
  );
}





//PROYECTO EMOJI
/*import React, { useState } from 'react';
import './App.css';

export default function EmojiCounter() {
  const [emoji, setEmoji] = useState("🐶");

  const addThreeDogs = () => {
    setEmoji((prevEmoji) => prevEmoji + "😒");
    setEmoji((prevEmoji) => prevEmoji + "😊🤣");
    setEmoji((prevEmoji) => prevEmoji + "😂😍😁");
  };

  return (
    <>
      <h1>{emoji}</h1>
      <button className="emoji-button" onClick={addThreeDogs}>add 3 dogs</button>
      <button className="emoji-button" onClick={() =>{
        setEmoji(emojiAdd => emojiAdd + "🐶");
      }}>Another</button>
      <button className="emoji-button delete-button" onClick={() =>{
         if (emoji.length > 0) {
          setEmoji(prevEmoji => prevEmoji.substring(2));
        }
      }}>Delete</button>
    </>
  );
}

//PROYECTO BANDERA
function App(): JSX.Element {
  const handleColorClick = (e: React.MouseEvent<HTMLDivElement>, color: string) => {
    e.stopPropagation();
    alert(`El color es: ${color} - Ecuador`);
  };

  return (
    <div>
      <div className="color-container">
        <div className="color yellow" onClick={(e) => handleColorClick(e, 'amarillo')}>
          <div className="color blue" onClick={(e) => handleColorClick(e, 'azul')}>
            <div className="color red" onClick={(e) => handleColorClick(e, 'rojo')}>
              Haz click en cada color.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
//export default App;
