class CustomerService {
  constructor() {
    this.customers = [
      { id: 1, firstname: "Alex", lastname: "Siqueira" },
      { id: 2, firstname: "Pietro", lastname: "Benetti" }
    ];
  }

  async listAll() {
    return Promise.resolve(this.customers);
  }
}

export default CustomerService;
