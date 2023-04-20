(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: string): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    mutantPower(id: string) {
      return this.name + " " + this.realName;
    }

    constructor(
      public age: number,
      public name: string,
      public realName: string
    ) {}
  }
})();
