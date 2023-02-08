(() => {
  class Avenger {
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name; // esto es el name de la class!! no la propiedad
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string,
      avgAge: number = 55
    ) {}

    // METHODS
    public bio() {
      return `${this.name} ${this.team}`;
    }
  }

  const antman = new Avenger("claaMethod", "METHOD");

  // console.log(antman);

  // console.log(antman.bio);

  // console.log(Avenger.getAvgAge());
})();
