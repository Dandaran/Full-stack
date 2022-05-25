// crea un objeto String
const a = new String('hola');
// crea una string con comillas dobles
const b = 'hola';
// crea una string con comillas simples
const c = 'hola';
// más rápido
const x = 'John';
// más lento
const y = new String('John');
// string
console.log(typeof(x));
// object
console.log(typeof(y));
// true porque se comparan los valores (son iguales) y no los tipos (no son iguales)
console.log(x == y);
// false
console.log(x === y);
const z = new String('John');
// false porque es una comparación entre objeto y objeto (referencia)
console.log(y == z);
// false
console.log(y === z);
// "hola"
const d = '\"hola\"';
// 'hola"
const e = '\'hola\'';
// \hola\
const f = '\\hola\\';
//atributo length
const str = 'super califraji listico espialidoso'
console.log(str.length);
//indexof
console.log(str.indexOf('f'));
console.log(str.indexOf('r', 5));
console.log(str.indexOf('listico'));
console.log(str.indexOf('listico', 15 ));
console.log(str.indexOf('noencontrado'));
//lastindexof
const str3 = 'En un lugar de la mancha';
// 23
console.log(str3.lastIndexOf('a'));
// 6 (considera solamente hasta la posición 6)
console.log(str3.lastIndexOf('l', 6));
// -1 (considera solamente hasta la posición 5)
console.log(str3.lastIndexOf('l', 5));
// -1
console.log(str3.lastIndexOf('noencontrado'));
//metodo search

// 9 (expresión regular que busca la primera coincidencia de a, b o c)
console.log(str3.search(/[abc]/));

//metodo slice
const str4 = 'Apple, Banana, Kiwi';
// Banana (la posición 13 no se toma)
console.log(str4.slice(7, 13));
// Banana (la posición -6 no se toma)
console.log(str4.slice(-12, -6));
// Banana, Kiwi (toma desde la posición 7 hasta el final del string)
console.log(str4.slice(7));
// Banana, Kiwi (toma desde la posición -12 hasta el final del string)
console.log(str.slice(-12));
//metodo substring
// Banana (toma los 6 siguientes caracteres desde la posición 7)
console.log(str4.substring(7, 6));
// Banana, Kiwi (toma desde la posición 7 hasta el final del string)
console.log(str4.substring(7));
//metodo replace
const str6 = 'Visita MICROSOFT! Microsoft!';
// Visita MICROSOFT! Corenetworks! (case sensitive y solamente primera coincidencia)
console.log(str6.replace('Microsoft', 'Corenetworks'));
// Visita Corenetworks! Microsoft! (no case sensitive (i) y solamente primera coincidencia
console.log(str6.replace(/Microsoft/i, 'Corenetworks'));
// Visita Corenetworks! Corenetworks! (no case sensitive (i) y todas las coincidencias(g))
console.log(str6.replace(/Microsoft/ig, 'Corenetworks'));
//metodo toUppercase
const str7 = 'Hello World!';
// HELLO WORLD!
console.log(str7.toUpperCase());

//ejercicio 1 pg 204

const str1 = 'mfresco, calor, estimulon';
const str2 = 'mojado, seco, sensación';
if (str1.charAt(0) == str2.charAt(0)){
    document.write ('iguales' + '<br>');
}
else {
    document.write('no iguales' + '<br>');
}
//ejercicio 2 pg 204
 
if ((str1.charAt(1) == str2.charAt(1)) && (str1.charAt(-1) == str2.charAt(-1))){
    document.write ('iguales' + '<br>');
} 

// ejercicio 3 pg 204
let ejercicio3 = "cantame el abcdario empieza con la a seguida de b y c";
let existeABC = ejercicio3.indexOf("abc");
 if ((ejercicio3.indexOf("abc") != -1) && (ejercicio3.indexOf("abc") != 0) && (ejercicio3.lastIndexOf("abc") != ejercicio3.length-3)){
     console.log("existe ABC dentro del string");
 }
 else{
     console.log("no existe ABC o esta al principio o al final dentro del string ");
 }
// ejercicio4 pg 204

let stringPos = "Hola buenis";
let pos = 3;
if (stringPos.charAt(pos)==stringPos.charAt(pos-1)) {
    console.log("La letra anterior es igual");
}
else if (stringPos.charAt(pos)==stringPos.charAt(pos+1)) {
    console.log("La letra posterior es igual");
} else {
    console.log("La letra anterior y posterior no son igual");
} ///////////
if ((stringPos.charAt(pos)==stringPos.charAt(pos-1)) && (stringPos.charAt(pos)==stringPos.charAt(pos+1))) {
    console.log("La letra anterior y/o posterior  son igual");
}
else {
    console.log("La letra anterior y posterior no son igual");
}
//ejercicio7 pg 204
let ariados = "ratas blancas";
ariados = ariados.slice(0,-1);
console.log(ariados);
/////////////
let ariados1 = "ratas blancas";
ariados1 = ariados1.slice(0,-3);
console.log(ariados1);