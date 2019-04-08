import React, { Component } from "react";
import "./App.css";

class Note extends Component {

  render() {
    return (
      <div className="note" onClick={this.props.delete}>
        {this.props.text}
      </div>
      
    );
  }
}

export default Note;
