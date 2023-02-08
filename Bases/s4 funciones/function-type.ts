(() => {
  const agregarNumero = (a: number, b: number) => a + b;

  const saludo = (name: string) => `Hola ${name}`;

  const salvarElMundo = () => `El mundo esta salvado`;

  //   let miFuncion: Function;

  //   miFuncion = 10;

  //   let miFuncion: (x: number, y: number) => number;
  //   miFuncion = agregarNumero;
  //   console.log(miFuncion(1, 2));

  //   let miFuncion: (x: string) => string;
  //   miFuncion = saludo;
  //   console.log(miFuncion("Juan"));

  let miFuncion: () => string;
  miFuncion = salvarElMundo;
  console.log(miFuncion());
})();
