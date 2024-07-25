import { useState } from 'react';

const Player = ({ initialName, symbol, isActive }) => {
   const [isEditing, setIsEditing] = useState(false);
   const [playerName, setPlayerName] = useState(initialName);
   function handleEditClick() {
      setIsEditing((prev) => !prev);
   }

   return (
      <li className={isActive ? 'active' : undefined}>
         <span className='player'>
            {isEditing ? (
               <input
                  type='text'
                  required
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  autoFocus
               ></input>
            ) : (
               <span className='player-name'>{playerName}</span>
            )}

            <span className='player-symbol'>{symbol}</span>
         </span>
         <button onClick={handleEditClick}>
            {isEditing ? 'Save' : 'Edit'}
         </button>
      </li>
   );
};
export default Player;
