"use strict";
(() => {
    let objeto = {
        nombre: "nombre",
        apellido: "apellido",
        edad: 24,
        poderes: ["supervelocidad", "viajar en el tiempo"],
    };
    objeto = {
        nombre: "cambiado",
        apellido: "otro",
        poderes: ["ninguno"],
        nombrecompleto() {
            return `${this.nombre} ${this.apellido}`;
        },
    };
    console.log(objeto);
})();
//# sourceMappingURL=objects.js.map