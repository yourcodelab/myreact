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
    const tableCustomers = listCustomers.map(customer => (
      <tr key={customer.id}>
        <td>{customer.firstname}</td>
        <td>{customer.lastname}</td>
      </tr>
    ));

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
          <tbody>{tableCustomers}</tbody>
        </table>
      </div>
    );
  }
}

export default CustomerList;
