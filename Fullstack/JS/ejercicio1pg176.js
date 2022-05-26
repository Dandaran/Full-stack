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

const sumar1 = altura => 3 + altura + 5;
console.log(sumar1(0));
const resta1 = altura => 8 - altura - 4;
console.log(resta1(0));
const multi1 = altura => 6 * altura * 8;
console.log(multi1(1));
const divi1 = altura => 6 / altura / 9;
console.log(divi1(1));

//Ejercicio 3 pg 177: adaptar las cuatro funciones del Ejercicio 2 para que reciban un callback quesea invocado dentro de la función con el resultado de la operación. Posteriormenteinvocar a las cuatro funciones creando una función de callback por separado y pasándoladespués por parámetro. Utilizar la herramienta de depuración de Chrome (Herramientasde desarrollador --> Source) para comprobar cómo se ejecuta el programa.

const sumar2 =(x,y,callback) => callback(x+y)
const resta2 =(x,y,callback) => callback(x-y)
const multi2 =(x,y,callback) => callback(x*y)
const divi2 =(x,y,callback) => callback(x/y)

const callback =(resultado) => {
    console.log(resultado);
}
sumar2(3,5,callback);
resta2(8,4,callback);
multi2(6,8,callback);
divi2(6,9,callback);

//Ejercicio 4 pg 177: adaptar el ejercicio anterior para integrar el callback en la invocación de las cuatro funciones, en lugar de creándola como una función de callback por separado.Utilizar la herramienta de depuración de Chrome para comprobar cómo se ejecuta el programa.
const sumar3 = (a, b, callback) => {
    callback(a + b);
    };
    sumar3(3, 5, (resultado) => {
    console.log(resultado);
    });
const resta3 = (s, y, callback) => {
    callback(s - y);
};
    resta3(8,4, (resultado) => {
        console.log(resultado);
});
const multi3 = (z, r, callback) => {
    callback(z * r);
};
    multi3(6,8, (resultado) => {
        console.log(resultado);
});
const divi3 = (t, p, callback) => {
    callback(t / p);
};
    divi3(6,9, (resultado) => {
        console.log(resultado);
});
//Ejercicio 5: adaptar las cinco funciones del Ejercicio 4 para que las cuatro funciones invoquen el callback una vez han transcurrido 1 segundo (para la función sumar), 2 segundos (para la función restar), 3 segundos (para la función multiplicar) y 4 segundos para dividir (para la función dividir). Añadir un console.log en la última línea del código del programa. Utilizar la herramienta de depuración de Chrome para comprobar cómo se ejecuta el programa.

setTimeout(() => { 
    const sumar4 = (a, b, callback) => {
        callback(a + b);
    };
        sumar4(3, 5, (resultado) => {
            console.log("3+5=" + resultado);
    });
    setTimeout(() => {
        const resta4 = (s, y, callback) => {
            callback(s - y);
        };
            resta4(8,4, (resultado) => {
                console.log("8-4=" + resultado);
        });   
    }, 1000);
}, 2000)
setTimeout(() => { 
    const multi4 = (a, b, callback) => {
        callback(a * b);
    };
        multi4(6, 8, (resultado) => {
            console.log("6*8=" + resultado);
    });
    setTimeout(() => {
        const divi4 = (s, y, callback) => {
            callback(s / y);
        };
            divi4(6, 9, (resultado) => {
                console.log("6/9=" + resultado);
        });   
    }, 3000);
}, 4000)

// versión corta


  
setTimeout(() => { 
    console.log(sumar3(3, 5, (resultado) => {
            console.log("a)3+5=" + resultado);
    }));
    setTimeout(() => {
        console.log(resta3(8,4, (resultado) => {
                console.log("b)8-4=" + resultado);
        }));   
    }, 5000);
}, 6000)
setTimeout(() => { 
    console.log (multi3(6, 8, (resultado) => {
            console.log("c)6*8=" + resultado);
    }));
    setTimeout(() => {
        console.log(divi3(6, 9, (resultado) => {
                console.log("d)6/9=" + resultado);
        }));   
    }, 7000);
}, 8000)