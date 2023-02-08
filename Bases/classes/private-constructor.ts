(() => {
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    // creamos un metodo estatico para "crear el apocalipsis".. osea nos deberia devolver una instancia de la class
    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("soy apocalipsis 1"); // y aca dentro podriamos llamar al constructor privado
      }
      return Apocalipsis.instance;
    }
  }

  // // AL tener el constructor privado esto no se puede hacer ya que no recibe parametros
  //   const apocalipsis = new Apocalipsis("soy apocalipsis.. el unico");
  //   const apocalipsis2 = new Apocalipsis("soy apocalipsis2.. el unico");

  //   console.log(apocalipsis);
  //   console.log(apocalipsis2);

  const apocalipsis = Apocalipsis.callApocalipsis();

  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();
  const apocalipsis4 = Apocalipsis.callApocalipsis();

  console.log(apocalipsis);
  console.log(apocalipsis2);
  console.log(apocalipsis3);
  console.log(apocalipsis4);
})();
