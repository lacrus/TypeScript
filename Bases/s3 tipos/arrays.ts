(() => {
  let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let numersLetters: (number | string | boolean | Object)[] = [
    1,
    2,
    "a",
    4,
    [],
    {},
    5,
  ];

  numersLetters.push(true);
  numersLetters.push({});

  console.log(numbers);
})();
