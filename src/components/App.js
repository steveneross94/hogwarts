import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogsContainer from "./HogsContainer";

class App extends Component {
  
  state = {
    hogs: [],
    filtered: false,
    sortedBy: null
  }

  handleClick = () => {
    this.setState({
      filtered: !this.state.filtered
    })
  }

  componentDidMount(){
    fetch('http://localhost:3001/hogs')
    .then(r => r.json())
    .then(hogs => {
      this.setState({
        hogs: hogs
      })
    })
  }

  sortBy = (value) => {
    return (
      this.state.hogs.sort((a,b) => {
        let nameA = a[value]
        let nameB = b[value]
        if(nameA < nameB){
            return -1
        }
        this.setState({sortedBy: value })
    })  
    )
  }

  render() {
   
    return (
      <div className="App">
        <Nav />
        <HogsContainer 
          hogs={this.state.hogs} 
          filtered={this.state.filtered} 
          greasedHogs={this.handleClick}
          sortHogs={this.sortBy}
          />
        <button onClick={() => this.sortBy('name')}>Sort By Name</button>
        <button onClick={() => this.sortBy('weight')}>Sort By Weight</button>
      </div>
    );
  }
}

export default App;
