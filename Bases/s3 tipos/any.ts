(() => {
  let avengers: any = 123;

  avengers = "Dr Stranger";
  console.log((avengers as string).charAt(0)); // forma de "casteo"

  avengers = 10.1928527;
  console.log((<number>avengers).toFixed(2)); // otra forma de "casteo"
})();
