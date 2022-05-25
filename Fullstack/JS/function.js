//funcion declarada
function sumar(a, b) {
    console.log(a + b);
}
// 5
sumar(2, 3);
// NaN (undefined + undefined)
sumar();
// 3
sumar(1, 2);
// 3
sumar(1, 2, 3, 4);
// 12 
sumar('1', 2);
// 12
sumar(1, '2');
//funcion sin nombre asignada a una variable
const sumar1 = function(c, d) {
    console.log(c + d);
};
// 5
sumar1(2, 3);
//8
sumar1(5, 3);
//30
sumar1(18, 12);
sumar1("3", 0)
//funcion metodo
const objetoa = {
    f: function() {
        console.log('Hola');
    }
};
// invocación utilizando la notación punto
objetoa.funcionMetodo()
// invocación utilizando la notación con corchetes
objetoa['funcionMetodo']();
//funcion autoejecutable
(function saludar() {
    console.log('Hola');
})();
// error: saludar it's not defined
saludar();


//function creadora de objetos
function hacerAlgo(a, b) {
    this.a = a;
    this.b = b;
}
//cracion del objeto
const b = new hacerAlgo(1,2);
// error porque b es un  objeto
//b();
//1
console.log