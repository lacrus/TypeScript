"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("contructor avenger llamado");
        }
    }
    class Xmen extends Mutant {
        salvarMundo() {
            return "mundo salvado";
        }
    }
    class Villan extends Mutant {
        conquistarMundo() {
            return "conquistar al mundo";
        }
    }
    class Sinextender {
    }
    const sinextender = new Sinextender();
    const wolverine = new Xmen("wolverine", "Logan");
    const magneto = new Villan("magneto", "Magnus");
    console.log(wolverine instanceof Mutant);
    console.log(wolverine instanceof Xmen);
    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());
    const printName = (personaje) => { };
    printName(wolverine);
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = "valor defecto";
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger("antMan", "Pedro");
    console.log(antman);
})();
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
    }
    Avenger.avgAge = 35;
    const antMan2 = new Avenger("antman 2", "nuevo equipo", "nombre real", 15);
    console.log(Avenger.avgAge);
    console.log(antMan2);
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("contructor avenger llamado");
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("constructor xmen llamado");
        }
        getFullNameDesdeXmen() {
            console.log();
        }
    }
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("contructor avenger llamado");
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("constructor xmen llamado");
        }
        getFullNameDesdeXmen() {
            console.log();
        }
        get fullName() {
            return `${this.name} ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
    }
    const wolverine = new Xmen("wolverine", "Logan", true);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName, avgAge = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} ${this.team}`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger("claaMethod", "METHOD");
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("soy apocalipsis 1");
            }
            return Apocalipsis.instance;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    const apocalipsis4 = Apocalipsis.callApocalipsis();
    console.log(apocalipsis);
    console.log(apocalipsis2);
    console.log(apocalipsis3);
    console.log(apocalipsis4);
})();
//# sourceMappingURL=main.js.map