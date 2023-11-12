import React from "react";
import SearchBox from "./SearchBox";
import { getData } from "../utils/data";
import NotesList from "./NotesList";
import InputNotes from "./InputNotes";

class NotesApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getData(),
            nextId: 4,
            filteredNotes: [],
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onMoveHandler = this.onMoveHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onMoveHandler(id) {
        this.setState((prevState) => {
          const updatedNotes = prevState.notes.map((note) => {
            if (note.id === id) {
              return { ...note, archive: !note.archive };
            }
            return note;
          });
      
          return { notes: updatedNotes };
        });
      }

    onAddNoteHandler({ title, body, archive }) {
        this.setState(
          (prevState) => ({
            notes: [
              ...prevState.notes,
              {
                id: prevState.nextId,
                title,
                body,
                archive,
                createAt: new Date().toISOString(),
              },
            ],
            nextId: prevState.nextId + 1,
          }),
          () => {
            // Simpan data ke localStorage setelah state diperbarui
            localStorage.setItem('notesData', JSON.stringify(this.state.notes));
          }
        );
      }

    handleSearch(searchValue){
        const filteredNotes = this.state.notes.filter(
            (note) =>
            note.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        this.setState({filteredNotes});
    }

    render(){

        return(
            <>
            <header>
                <div className="navbar">
                    <div className="logo-app">
                        <img src="/images/logo.png" alt="" />
                    </div>
                    <SearchBox onSearch={this.handleSearch}/>
                 </div>
            </header>
            <main>
                <div className="wrapper">
                    <div className="card-add">
                        <h2>Tambah Catatan</h2>
                        <div className="notes-input">
                            <InputNotes addNotes={this.onAddNoteHandler}/>
                        </div>
                       
                    </div>
                    <div className="card-notes">
                        <h2>Catatan Aktif</h2>
                        <div className="card-active">
                            <NotesList notes={this.state.filteredNotes.length > 0 ? this.state.filteredNotes : this.state.notes}
                                onDelete={this.onDeleteHandler}
                                onMove={this.onMoveHandler}
                                archive={true}
                            />
                            
                        </div>
                        <h2>Arsip</h2>
                        <div className="card-archive">
                            <NotesList notes={this.state.filteredNotes.length > 0 ? this.state.filteredNotes : this.state.notes}
                                onDelete={this.onDeleteHandler}
                                onMove={this.onMoveHandler}
                                archive={false}
                           />
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <p>Notes App by Axanderlej &#169; 2023 Build with 
                    <a href="https://react.dev" target="_blank">
                        <img src='src/assets/react.svg' className="logo react" alt="React logo" />
                    </a>
                </p>
            </footer>

            </>
        );
    }
}

export default NotesApp;