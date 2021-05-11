import React, { Component } from "react";
import "./App.css";
import Background from "./component/background";
import Search from "./component/Input_field";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h2 className="heading">Weather</h2>
        <div>
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
