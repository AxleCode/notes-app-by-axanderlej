import React from "react";

class InputNotes extends React.Component{
    constructor(props){
        super(props);

        //inisialisasi state
        this.state = {
            title:'',
            body:'',
            archive:false,
            maxTitleLenght: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onArchiveChangeEventHandler = this.onArchiveChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }   

    onTitleChangeEventHandler(event){
        const inputValue = event.target.value;
        if (inputValue.length <= this.state.maxTitleLenght) {
            this.setState({
                title: inputValue,
            });
        }
    }

    onBodyChangeEventHandler(event){
        this.setState(() =>{
            return{
                body: event.target.value,
            }
        })
    }

    onArchiveChangeEventHandler(event){
        this.setState((prevState) => ({
            archive: event.target.checked,
        }));
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNotes(this.state);
    }

    render(){
        const { title, body, archive, maxTitleLenght } = this.state;
        const remainingCharacters = maxTitleLenght - title.length;

        return(
            <form  onSubmit={this.onSubmitEventHandler}>
                <input className="title" type="text" placeholder="Masukkan Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <p>Sisa Karakter: {remainingCharacters}</p>
                <textarea className="body" type="textarea" placeholder="Masukkan Catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                <input className="checkbox" type="checkbox" placeholder="Arsipkan" value={this.state.archive} onChange={this.onArchiveChangeEventHandler}/>
                <label htmlFor="checkbox">Catatan Aktif?</label>
                <button className="submit" type="submit">Tambah Catatan</button>
            </form>
        )
    }
}

export default InputNotes;