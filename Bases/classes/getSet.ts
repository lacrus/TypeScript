(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("contructor avenger llamado");
    }

    protected getFullname() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("constructor xmen llamado");
    }

    getFullNameDesdeXmen() {
      console.log();
    }

    get fullName() {
      return `${this.name} ${this.realName}`;
    }

    set fullName(name: string) {
      this.name = name;
    }
  }

  const wolverine = new Xmen("wolverine", "Logan", true);

  // console.log(wolverine.fullName);
  // wolverine.fullName = "pedro";
  // console.log(wolverine.fullName);
})();
