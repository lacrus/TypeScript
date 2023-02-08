(() => {
  class Avenger {
    private name: string = "valor defecto";
    private team: string;
    public realName?: string;
    static avgAge: number = 35;

    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antman: Avenger = new Avenger("antMan", "Pedro");

  console.log(antman);
})();

// FORMA CORTA DE ASIGNAR VARIABLES
(() => {
  class Avenger {
    // private name: string = "valor defecto";
    // private team: string;
    // public realName?: string;
    static avgAge: number = 35;

    constructor(
      private name: string,
      private team: string,
      public realName?: string,
      avgAge: number = 55 // pero esto nunca se hace!!
    ) {
      //   this.name = name;
      //   this.team = team;
      //   this.realName = realName;
      Avenger.avgAge = avgAge; // => esto modifica a la class en si.. no a la instancia.. todas las clases ahora van a tener el valor dado por este cambio
    }
  }

  const antMan2: Avenger = new Avenger(
    "antman 2",
    "nuevo equipo",
    "nombre real",
    15
  );

  console.log(Avenger.avgAge) // aca vmaos a ver el valor de 15
  console.log(antMan2);
})();
