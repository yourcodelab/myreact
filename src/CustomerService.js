class CustomerService {
  constructor() {
    this.urlservice =
      "https://my-firebase-api-001.firebaseapp.com/api/v1/customers";
  }

  async listAll() {
    return fetch(this.urlservice)
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async findByID(id) {
    return fetch(this.urlservice + "/" + id)
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }

        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async insert(customer) {
    return fetch(this.urlservice, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customer)
    })
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async update(customer) {
    return fetch(this.urlservice + "/" + customer.id, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customer.data)
    })
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async delete(id) {
    return fetch(this.urlservice + "/" + id, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  handleResponseError(response) {
    throw new Error("HTTP error, status = " + response.status);
  }

  handleError(error) {
    console.log(error.message);
  }
}

export default CustomerService;