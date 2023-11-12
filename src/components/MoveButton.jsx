import React from 'react';
 
function MoveButton({ id, onMove }) {
  const handleMove = () => {
    onMove(id);
  };

  return (
    <button className='note-item__move' onClick={handleMove}>
      <i className="fa-solid fa-folder"></i>
    </button>
  );
}
 
export default MoveButton;