import React, { Component } from "react";
import "./App.css";
import AddTask from "./components/AddTask";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">{/*login/register place*/}</header>
        <AddTask />
      </div>
    );
  }
}

export default App;
