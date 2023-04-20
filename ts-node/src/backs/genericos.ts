// import { Hero } from "./classes/Hero";

import {
  printObject,
  genericFunction,
  genericFunctionArrow,
} from "../generics/generics";
import { Villain, Hero } from "../interfaces";
// import { Hero } from "./interfaces/hero";
// import { Villain } from "./interfaces/villain";

// // console.log("Hola Mundo!");

// const spiderman = new Hero("spiderman", 1, 21);

// console.log(spiderman);
// console.log(spiderman.power);

// printObject("hola");
// printObject(new Date());

// console.log(genericFunction(3.141612).toFixed(2));
// // console.log(genericFunction(new Date()).toFixed(2))
// console.log(genericFunction(new Date()).getDay());
// // console.log(genericFunction("hola mundo").toFixed(2))
// console.log(genericFunction("hola mundo").toUpperCase());

const deadpool = {
  name: "Dead Pool",
  realName: "El nombre verdadero",
  dangerLevel: 130,
};

console.log(genericFunctionArrow<Villain>(deadpool));
