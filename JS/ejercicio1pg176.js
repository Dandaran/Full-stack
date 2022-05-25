//Ejercicio 1: escribir una programa con cuatro funciones de flecha: sumar, restar,multiplicar y dividir (cada una de ellas debe aceptar dos parámetros y devolver el resultado). Posteriormente invocar a las cuatro funciones con valores arbitrarios.

const sumar = ( a, b) =>{
    return a+b;
};
const resta = (a, b) =>{
    return a-b;
};
const multi = (a, b) =>{
    return a*b;
};
const divi = (a, b)=>{
    return a/b;
};
console.log(sumar (3,5));
console.log(resta(8,4));
console.log(multi (6,8));
console.log(divi(6,9));

// Ejercicio 2: adaptar el programa del ejercicio anterior simplificando las funciones de flecha eliminando las llaves y el return.

const sumar = ( a, b) =>{
    return a+b;
};
const resta = (a, b) =>{
    return a-b;
};
const multi = (a, b) =>{
    return a*b;
};
const divi = (a, b)=>{
    return a/b;