(() => {
  let objeto: {
    nombre: string;
    apellido: string;
    edad?: number;
    poderes: string[];
    nombrecompleto?: () => string;
  } = {
    nombre: "nombre",
    apellido: "apellido",
    edad: 24,
    poderes: ["supervelocidad", "viajar en el tiempo"],
    // nombrecompleto() {
    //   return `${this.nombre} ${this.apellido}`;
    // },
  };

  // no podemos asignar nuevos valores para el objeto
  //   objeto = {
  //     nombre2: "otro nombre",
  //   };
  //   objeto.nombre3 = "tercer nombre";

  //   objeto.nombre = "nuevo nombre";

  objeto = {
    nombre: "cambiado",
    apellido: "otro",
    poderes: ["ninguno"],
    nombrecompleto(): string {
      return `${this.nombre} ${this.apellido}`;
    },
  };

  console.log(objeto);
})();
