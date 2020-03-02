import React, { Component } from "react";
import CustomerService from "./CustomerService";

class CustomerCreate extends Component {

  constructor() {
    super();
    this.service = new CustomerService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.state = {
      id: 0,
      firstname: "",
      lastname: ""
    };
  }

  onSubmit() {
    this.service.insert(this.state);
  }

  onCancel() {
    this.setState({
      id: 0,
      firstname: "",
      lastname: ""
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="input-panel">
        <span className="form-caption">New Customer:</span>
        <div>
          <label className="field-name">
            ID:
            <br />
            <input
              value={this.state.id}
              name="id"
              maxLength="4"
              required
              onChange={this.handleInputChange}
              placeholder="customer ID"
            />
          </label>
        </div>
        <div>
          <label className="field-name">
            First Name:
            <br />
            <input
              value={this.state.firstname}
              name="firstname"
              maxLength="40"
              required
              onChange={this.handleInputChange}
              placeholder="customer's fisrt name"
            />
          </label>
        </div>
        <div>
          <label className="field-name">
            Last Name:
            <br />
            <input
              value={this.state.lastname}
              name="lastname"
              maxLength="40"
              required
              onChange={this.handleInputChange}
              placeholder="customer's last name"
            />
          </label>
        </div>

        <br />
        <button onClick={() => this.onCancel()}>Cancel</button>
        <button onClick={() => this.onSubmit()}>Create</button>
      </div>
    );
  }
}

export default CustomerCreate;
