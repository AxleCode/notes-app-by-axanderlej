import React from "react";

function NotesItemBody({title, body, archive, createAt}) {

    const createDate = new Date(createAt);

    const options = {
        hour: "numeric",
        minute: "numeric",
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    const formattedDate = new Intl.DateTimeFormat("id-ID", options).format(
        createDate
    );

    return(
        <div className="list">
            <p className="notes-item__title">{title}</p>
            <p className="notes-item__body">"{body}"</p>
            <p className="notes-item__archive">{archive}</p>
            <p className="notes-item__createAt">{formattedDate}</p>
        </div>
    );
}

export default NotesItemBody;