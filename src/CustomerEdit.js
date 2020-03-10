import React, { Component } from "react";
import CustomerService from "./CustomerService";

class CustomerEdit extends Component {
  constructor(props) {
    super(props);
    this.service = new CustomerService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);

    this.state = {
      customer: {
        id: "",
        data: {
          id: 0,
          firstname: "",
          lastname: ""
        }
      }
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log("Did change on: " + name);

    this.setState(state => ({
      customer: {
        id: state.customer.id,
        data: {
          id: name === "id" ? value : state.customer.data.id,
          firstname:
            name === "firstname" ? value : state.customer.data.firstname,
          lastname: name === "lastname" ? value : state.customer.data.lastname
        }
      }
    }));
  }

  onSubmit() {
    let customer = this.state.customer;
    let msg = "";

    if (!customer) msg = "Missing Data";

    if (!customer.data) msg += "Missing Data";

    if (!customer.data.firstname) msg += "Missing Firstname";

    if (!customer.data.lastname) msg += "Missing Lastname";

    if (!customer.data.id) msg += "Missing ID";

    if (msg.length === 0) this.service.update(customer);
    else console.log("Msg: " + msg);

    this.props.close();
  }

  onCancel() {
    this.props.close();
  }

  componentDidMount() {
    console.log("Did mount");

    this.setState((state, props) => ({
      customer: {
        id: this.props.customer.id,
        data: {
          id: this.props.customer.data.id,
          firstname: this.props.customer.data.firstname,
          lastname: this.props.customer.data.lastname
        }
      }
    }));
  }

  render() {
    return (
      <div className="input-panel">
        <span className="form-caption">
          Edit Customer: {this.state.customer.id}
        </span>
        <div>
          <label className="field-name">
            ID:
            <br />
            <input
              type="number"
              value={this.state.customer.data.id}
              id="id"
              name="id"
              className="form-control"
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
              type="text"
              value={this.state.customer.data.firstname}
              id="firstname"
              name="firstname"
              className="form-control"
              maxLength="40"
              required
              onChange={this.handleInputChange}
              placeholder="customer's first name"
            />
          </label>
        </div>
        <div>
          <label className="field-name">
            Last Name:
            <br />
            <input
              value={this.state.customer.data.lastname}
              id="lastname"
              name="lastname"
              className="form-control"
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

export default CustomerEdit;
