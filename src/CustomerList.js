import React, { Component } from "react";
import CustomerService from "./CustomerService";
import CustomerCreate from "./CustomerCreate";
import CustomerEdit from "./CustomerEdit";

class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.service = new CustomerService();

    this.getListAll = this.getListAll.bind(this);
    this.onShowCreate = this.onShowCreate.bind(this);
    this.onCloseCreate = this.onCloseCreate.bind(this);
    this.onSelect = this.onSelect.bind(this);

    this.state = {
      showList: true,
      showCreate: false,
      showEdit: false,
      customers: [],
      customer: {
        id: "",
        data: {
          id: "",
          firstname: "",
          lastname: ""
        }
      }
    };
  }

  componentDidMount() {
    this.getListAll();
  }

  getListAll() {
    this.service.listAll().then(customers => {
      this.setState({
        customers: customers,
        showList: true,
        showCreate: false,
        showEdit: false
      });
    });
  }

  onSelect(id) {
    console.log("OnSelect ID: " + id);
    this.service.findByID(id).then(customer => {
      this.setState((state, props) => ({
        customer: {
          id: customer.id,
          data: {
            id: customer.data.id,
            firstname: customer.data.firstname,
            lastname: customer.data.lastname
          }
        },
        showList: false,
        showCreate: false,
        showEdit: true
      }));
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
          <td
            className="customer-id"
            onClick={() => this.onSelect(customer.id)}
          >
            {customer.data.id}
          </td>
          <td className="customer-firstname">{customer.data.firstname}</td>
          <td className="customer-lastname">{customer.data.lastname}</td>
        </tr>
      ));
    }

    return (
      <div className="CustomerList">
        <div className="customer-table" hidden={!this.state.showList}>
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>{this.tableCustomers}</tbody>
          </table>
          <br />
          <button onClick={() => this.onShowCreate()}>New</button>
        </div>

        {this.state.showCreate && (
          <CustomerCreate
            show={this.state.showCreate}
            open={this.onShowCreate}
            close={this.onCloseCreate}
          />
        )}
        {this.state.showEdit && (
          <CustomerEdit
            customer={this.state.customer}
            show={this.state.showEdit}
            open={this.onShowCreate}
            close={this.onCloseCreate}
          />
        )}
      </div>
    );
  }

  onShowCreate() {
    this.setState({
      showList: false,
      showCreate: true,
      showEdit: false
    });
  }

  onCloseCreate() {
    this.getListAll();
  }
}

export default CustomerList;
