import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";
import MoveButton from "./MoveButton";

function NotesItem({id, title, body, archive, createAt, onDelete, onMove}) {
    return(
        <div className="notes-item">
           <NotesItemBody title={title} body={body} archive={archive} createAt={createAt}/>
            <DeleteButton id={id} onDelete={onDelete}/>
            <MoveButton id={id} onMove={onMove}/>
            
        </div>
  );
}

export default NotesItem;