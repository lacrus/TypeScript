(() => {
  function callBatman(): void {
    // return 1 => para ser una funcion que devuelve void no debe tener un return
    return undefined;
  }

  const callSuperman = (): void => {
    return;
  };

  const a = callBatman();
  console.log(a);
})();
