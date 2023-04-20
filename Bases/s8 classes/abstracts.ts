(() => {
  abstract class Mutant {
    constructor(public name: string, public realName: string) {
      console.log("contructor avenger llamado");
    }
  }

  class Xmen extends Mutant {
    salvarMundo() {
      return "mundo salvado";
    }
  }
  class Villan extends Mutant {
    conquistarMundo() {
      return "conquistar al mundo";
    }
  }

  class Sinextender {}

  const sinextender = new Sinextender();

  const wolverine = new Xmen("wolverine", "Logan");
  const magneto = new Villan("magneto", "Magnus");

  console.log(wolverine instanceof Mutant);
  console.log(wolverine instanceof Xmen);
  console.log(wolverine.salvarMundo());
  console.log(magneto.conquistarMundo());

  // para utilizar la class abstract como type
  const printName = (personaje: Mutant) => {};

  printName(wolverine);
//   printName(sinextender); // da error porque no es una class extendida de Mutant
})();
