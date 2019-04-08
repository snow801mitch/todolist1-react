import React, { Component } from "react";
import "./App.css";
import Note from "./Components/Note";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noteText: "",
      notes: [],
    }
  }
    updateNoteText(noteText) {
      this.setState({ noteText: noteText.target.value })
    }
    handleKeyPress=(event) => {
      if (event.key === 'Enter') {
        // place logic here
      }
    }

    deleteNote(index) {}

  render() {

    Let notes = this.state.notes.map((val,key) => {
      return <Note key={key} text={val}
              deleteMethod={ () => this.deleteNote(key)}
              />
    })

    return (
      <div className="container">
        <header classsName="header">React To Do App</header>

        <btn className="button">Submit</btn>

        <input
          type="text"
          ref={((input) => { this.textInput = input})}
          className="textInput"
          value={this.state.noteText}
          onChangeText={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default App;
