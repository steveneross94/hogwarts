import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";

class App extends Component {
  state = { hogs: [] }

  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
