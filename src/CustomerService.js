class CustomerService {
  constructor() {
    this.urlservice =
      "https://raw.githubusercontent.com/yourcodelab/myreact/master/public/customers.json";
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

  handleResponseError(response) {
    throw new Error("HTTP error, status = " + response.status);
  }

  handleError(error) {
    console.log(error.message);
  }
}

export default CustomerService;
