// kebap-case (no permitido en JavaScript)
const lastame = 'Garoppo';
// snake_case (recomendado en otros lenguajes como Python)
const last_name = 'Doenica';
// PascalCase (recomendado en JavaScript para las clases)
const LastName = 'sorianne';
// camelCase (recomendado en JavaScript para las variables y funciones)
const lastName = 'olifetto';
document.write(lastame);
const person = 'John Doe', carName = 'Volvo', price = 200;
let x; // creando la variable
x = 5;//asignando valor de tipo numerico entero y valor 5
x = 'Texto';//asigna valor de tipo string y valor texto
//infinity
const variable1 = 1/0;
//NaN
const variable2 = parseFloat('prueba');
const str3 = 'hola';
// 'lo'
console.log(str3.substring(1, 3));
// 'ola'
console.log(str3.substring(1));
const strCharat = 'hola';
// h
console.log(strCharat.charAt(0));
// a
console.log(strCharat.charAt(3));
//
console.log(strCharat.charAt(4));
// h
console.log(strCharat[0]);
// a
console.log(strCharat[3]);
// undefined
console.log(strCharat[4]);

//dias de la semana
const semana = new Array ('Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo');
console.log(semana[0]);
console.log(semana[1]);
console.log(semana[2]);
console.log(semana[3]);
console.log(semana[4]);
console.log(semana[5]);
console.log(semana[6]);
//lenght para arrays
console.log(semana.length);
//arrays dimensiones
const array9 = new Array('Carmen','Juan');
array9[3] = 'Alejandro';
//[ 'Carmen', 'Juan', <1 empty item>, 'Alejandro' ]
array9[1] = 'Carlos';
//[ 'Carmen', 'Carlos', 'Juan', <1 empty item>, 'Alejandro' ]
console.log(array9);
//

//

//ejercicio
semana.length = 4;
console.log(semana);
semana.length = 7;
console.log(semana)
//Date
const date1 = new Date();
// Sun Apr 22 2018 12:37:06 GMT+0200 (Hora de verano romance)
console.log(date1);
// milisegundos en formato Unix
const milisegundos = new Date().getTime();
// fecha creada a partir del número de milisegundos en formato Unix
const date2 = new Date(milisegundos);
const dia = new Date().getDay