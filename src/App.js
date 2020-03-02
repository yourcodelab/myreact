import React from "react";
import "./styles.css";
import CustomerList from "./CustomerList";
import CustomerCreate from "./CustomerCreate";

export default function App() {
  return (
    <div className="App">
      <h1>Customer Manager</h1>
      <CustomerCreate />
      <CustomerList />
    </div>
  );
}
