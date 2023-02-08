(() => {
  type Carro = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
  };

  // Objetos
  const batimovil: Carro = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
  };

  const bumblebee: Carro = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
      // El metodo disparar es opcional
      console.log("Disparando");
    },
  };

  type Villano = {
    nombre: string;
    edad?: number;
    mutante: boolean;
  }[];

  // Villanos debe de ser un arreglo de objetos personalizados
  const villanos: Villano = [
    {
      nombre: "Lex Luthor",
      edad: 54,
      mutante: false,
    },
    {
      nombre: "Erik Magnus Lehnsherr",
      edad: 49,
      mutante: true,
    },
    {
      nombre: "James Logan",
      edad: undefined,
      mutante: true,
    },
  ];

  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis

  type Bueno = {
    poder: string;
    estatura: number;
  };

  type Malo = {
    lider: boolean;
    miembros: string[];
  };

  const charles: Bueno = {
    poder: "psiquico",
    estatura: 1.78,
  };

  const apocalipsis: Malo = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
  };

  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  type BuenoMalo = Bueno | Malo;
  let mystique: BuenoMalo;

  mystique = charles;
  mystique = apocalipsis;
})();
