(() => {
  // clase 27
  // const hero: string = "flash";

  // function returnName(): string {
  //   return hero;
  // }

  // const activeBatisignal = (): string => {
  //   return "batiseñal activada";
  // };

  //clase 28
  const fullName = (firstName: string, lastName: string | number): string => {
    return `${firstName} ${lastName}`;
  };

  const nombre = fullName("juan", 15);

  console.log(nombre);
})();
