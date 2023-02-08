"use strict";
(() => {
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    let SuperHeroes;
    (function (SuperHeroes) {
        SuperHeroes[SuperHeroes["acuaman"] = 0] = "acuaman";
        SuperHeroes[SuperHeroes["batman"] = 1] = "batman";
        SuperHeroes[SuperHeroes["flash"] = 5] = "flash";
        SuperHeroes[SuperHeroes["superman"] = 100] = "superman";
    })(SuperHeroes || (SuperHeroes = {}));
    const fuerzaFlash = SuperHeroes.flash;
    const fuerzaSuperman = SuperHeroes.superman;
    const fuerzaBatman = SuperHeroes.batman;
    const fuerzaAcuaman = SuperHeroes.acuaman;
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app%202.js.map