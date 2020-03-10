import React, { Component } from "react";
import "./styles.css";
import CustomerList from "./CustomerList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Customer Manager</h1>
        <CustomerList />
      </div>
    );
  }
}

export default App;
