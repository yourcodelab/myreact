import React, { Component } from "react";
import CustomerService from "./CustomerService";

class CustomerList extends Component {
  constructor() {
    super();
    this.service = new CustomerService();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    this.getListAll();
  }

  getListAll() {
    this.service.listAll().then(customers => {
      this.setState({ customers: customers });
    });
  }

  render() {
    const listCustomers = this.state.customers;

    if (listCustomers == null)
      this.tableCustomers = (
        <tr>
          <td>No results</td>
        </tr>
      );
    else {
      this.tableCustomers = listCustomers.map(customer => (
        <tr key={customer.id}>
          <td>{customer.data.firstname}</td>
          <td>{customer.data.lastname}</td>
        </tr>
      ));
    }

    return (
      <div className="CustomerList">
        Customer List
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>{this.tableCustomers}</tbody>
        </table>
      </div>
    );
  }
}

export default CustomerList;
