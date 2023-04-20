(() => {
  interface Client {
    name: string;
    age?: number;
    // address: {
    //   id: number;
    //   zip: string;
    //   city: string;
    // };
    address: Address;
    getFullAddress?(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Juan",
    // age: 34,
    address: {
      id: 125,
      zip: "KSH 45",
      city: "algo",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };

  // const client2: Client = {
  //   name: "Fernando",
  //   age: 30,
  // };
})();
