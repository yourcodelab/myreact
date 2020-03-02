import React, { Component } from "react";

class CustomerCreate extends Component {
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return <div className="CustomerCreate">Create a Customer</div>;
  }
}

export default CustomerCreate;
