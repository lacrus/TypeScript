# Seccion 2

## clase 7

para que el codigo de app.ts funcione debemos primero hacer el tsc app.ts en consola.. para que transpile todo a .js

## clase 8
TSSconfig.json
en la terminal => tsc --init

una vez creado el archivo .json en la consola podemos usar el comando tsc solo.. sin aclarar el archivo.. ya que el json se encarga de eso

## clase 9 - MODO OBSERVADOR => tsc --w
esto es para que TS este esperando los cambios en cualquier archivo modificado y vaya haciendo las transpilaciones necesarias

# Seccion 3

## clase 13

tsconfig => "noImplicitAny": true, => si lo ponemos en false.. ts nos va a permitir crear variables sin determinar el tipo de valor

## Clase 16 - tipo ANY

tratar de nunca usarlo!!
si declaramos uan variable con let y no definimos el tipo, ts asigna variable any

## Clase 18 - arrays

let numersLetters: (number | string | boolean | Object)[] = [1, "a", {}]

## clase 19 - TUPLES

vendria a ser un array con los valores de adentro definidos / no como el array que puede contener numeros, strings, booleanos etc.. sino que el index 0 sera algo el 1 otra cosa y asi

const hero: [string, number] = ["Dr Strange", 100];

## Clase 20 - Enums

enum AudioLevel {
min,
medium,
max,
}

si no especificamos el valor para min, medium, max va a tomar 1,2,3 porque son los valores que tiene de acuerdo al orden que le vamos dando

## Clase 21 VOID - vacio

Void es para las funciones que no devuelven nada.. osea que tienen el return sin nada.. o return undefined

## Clase 22 Never

es para funciones que nunca tienen que terminar exitosamente o pueden terminar con algo o con un error

# SECCION 3

## CLASE 27 - funciones basicas
():string => {} => tipo de valor que debe retornar la funcion

## CLASE 28 - parametros obligatorios

para que los parametros sean obligatorios tenemos que tipar el tipo qu queremos que sean en los argumentos
const nombre = (nombre: string, apellido: string): string => {
return nombre + apellido
}

## CLASE 29 - parametros opcionales

para parametros opcionales solo ponemos un signo de pregunta antes de los : del tipado
const nombre = (nombre: string, apellido?: string) => {return nombre + (apellido || "----")}

## CLASE 30 - parametros por defecto

poniendo = luego del tipo de tipado dentro de los parametros
const nombre = (nombre: string, apellido?: string, Mayuscula: boolean = false) => {....}

## CLASE 31 - parametros REST

podemos aceptar parametros rest.. como es un array de elementos.. debemos darle el tipo de array.. pero aclarando el tipo de argumento que se espera dentro del array
const nombreCompleto = (nombre: string, ...restArgs: string[]) => {
return `${nombre} ${restArgs.join(" ")}`;
};

## CLASE 32 - tipo funcion

let miFuncion: Function; => de esta forma le decimos que la variable es una funcion
let miFuncion: () => number; => de esta forma le decimos que es una funcion que devuelve un numero.. FIJARSE EN LOS :

# SECCION 5 - Objetos

## CLASE 35 - objetos basicos
de forma basica cuando creamos un objeto, dsp no podemos asignarles nuevos elementos a ese obj
let obj = {nombre: "nombre", apellido: "apellido"}
obj.nombrecompleto = () => {return "nombre + apellido"} => esto no nos lo deja hacer

## CLASE 38 - TYPES

con los type podemos crear nuevos tipos determinados.. que luego los podemos establecer en los objetos.. y luego si necesitamos modifica el tipo de un elemento dentro del objeto podemos hacerlo desde el type.. y no obj por obj
type Hero = { name: string; age?: number; powers: string[]; getName?: () => string;
};

let flash: Hero = { name: "Barry Allen", age: 24, powers: ["Super Velocidad", "Viajar en el tiempo"],
};

# SECCION 6 - TSCONFIG y depuracion

## CLASE 45 - archivo tsconfig

archivo de configuracion de typescript, es donde le decimos a TS como debe funcionar
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html => configuraciones totales para el archivo tsconfig.json

## CLASE 46 - depuración

sourceMap => dentro del archivo tsconfig.. al habilitarlo nos genera un archivo para cada archivo transpilado a js.. archivo.js.map.. el que nos va a permitir que cuando hagamos console.log() en ts.. y se ejecute el js nos dara el numero de linea en donde se ejecuta el console.log() en el archivo TS

el sourcemap deberia estar desabilitado para el modo produccion.. para no hacer mas pesada la cargada de la pagina principalmente

## CLASE 47 - eliminacion de comentarios

en tsconfig.json => "removeComments": true,

## CLASE 48 - exclusion inclusion

dentro del tsconfig.json, seguido del objeto de "compilerOptions" podemos incluir:
"exclude": ["node_modules"], => agregarlo siempre
"include": []

## CLASE 50 - archivo de salida

es comun generar un solo archivo de .js para todos los archivos de .ts

en tsconfig.json tenemos la configuracion =>
"outFile": "./", => para dar nombre al archivo
al dar esta configuracion en la opcion debemos cambiar por => "module": "amd" (porque ts dice que son los unicos que acepta)
"outDir": "./", => para determinar el directorio donde va estar el archivo

al crear un unico archivo de salida.. no va a generar un archivo por cada archivo de ts.. entonces es mas rapida la carga y demas

# SECCION 8 - CLASSES

## CLASE 58 - clases basicas

las classes tiene propiedades privadas, publicas y estaticas

STATIC => significa que voy a tener acceso a la propiedad desde la clase en si y no desde la instancia de esta clase

```js
class Avenger {
private name: string = "valor defecto";
private team: string;
public realName: string;
static avgAge: number = 35;

    constructor(team: string, realName: string) {
      this.team = team;
      this.realName = realName;
    }

}
```

## CLASE 59 - forma corta de asignar propiedades en classes

```js
  class Avenger {
    static avgAge: number = 35;
    constructor(
      private name: string,
      private team: string,
      public realName?: string,
      avgAge: number = 55
    ) {
      Avenger.avgAge = avgAge; // => esto modifica a la class en si.. no a la instancia.. todas las clases ahora van a tener el valor dado por este cambio
    }
}
```

## CLASE 60 - METHODS publicos, privados y estaticos

si no determinamos el tipo de method.. ts le asigna el method public

## CLASE 61 - protected

podemos tener propiedades y method protected
la diferencia entre private y protected es que con protected pordemos acceder a estos desde dentro de classes que extienden a la class q definen el protected.. con private no se puede acceder

## CLASE 63 - gets y sets

los get y set desde fueran paracen propiedades comunes.. pero dentro son como methods
los get retornan alguna informacion.. mientras que los get establecen valores

GET => los get deben si o si retornar algo

get nombreGet() { return }

console.log(nombreClass.nombreGet) => no hay que ejecutar el get.. solo llamarlo

SET => los set deben si o si recibir un parametro!! (no 2 ni 3.. solo 1) y no retornan nada

set nombreSet(arg: string) {} => los set no retornan nada y puede repetir el nombre del get

set nombreClass.nombreSet = "algo"

## CLASE 64 - CLASES ABSTRACTAS

no podemos crear instencias de clases abstractas
sirven para crear otras clases.. que seria extender la clase abstracta

tmb sirve para crear un type.. osea podemos crear una clase abstracta para utilizarla como un type y determinar que ciertos parametros son de ese tipo

## CLASE 65 - constructores privados (private constructor)

cada vez se usan menos
se usan para controlar en la manera en la que las instancias son ejecutadas

solo se puede llamar al constructor desde dentro de la class.. no podemos utilizarlo por fuera

class Nombre {
    private constructor(){

    }
}