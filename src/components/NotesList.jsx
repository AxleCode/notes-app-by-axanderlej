import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onMove, archive }) {
    const filteredNotes = notes.filter((note) => note.archive === archive);
  
    return (
      <div className="notes-list">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NotesItem 
            key={note.id} 
            id={note.id} 
            onDelete={onDelete} 
            onMove={onMove} 
            {...note} />
          ))
        ) : (
          <p className="catatan">{`Tidak ada catatan di ${archive ? "arsip" : "aktif"}`}</p>
        )}
      </div>
    );
  }

export default NotesList;