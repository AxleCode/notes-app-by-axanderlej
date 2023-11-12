import React from "react";

function NotesItemBody({title, body, archive, createAt}) {
    return(
        <div className="list">
            <p className="notes-item__title">{title}</p>
            <p className="notes-item__body">"{body}"</p>
            <p className="notes-item__archive">{archive}</p>
            <p className="notes-item__createAt">{createAt}</p>
        </div>
    );
}

export default NotesItemBody;