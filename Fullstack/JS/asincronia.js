setTimeout(() => {
    console.log('Esta instrucción se ejecuta después de 5 segundos');
}, 5000);
setInterval(() => {
    console.log('Esta instrucción se ejecuta cada 5 segundos');
}, 5000);

setTimeout(() => {
    console.log('Hola');
    setTimeout(() => {
        console.log('Adiós');
    }, 500);
}, 1000)
    setTimeout(() => {
        console.log('Buenas tardes');
}, 100)
console.log('Buenos días');

/*
código síncrono
*/
const consultarDatabase = () => {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 2000);
    return "Consulta realizada";
}
console.log("Primera consulta al servidor");
const consulta1 = consultarDatabase();
console.log(consulta1);
console.log("Segunda consulta al servidor");
const consulta2 = consultarDatabase();
console.log(consulta2);
console.log("Más tareas a realizar...");
/*
código asíncrono
*/
const consultarDatabase1 = (callback) => {
setTimeout(() => {
callback("-Consulta realizada");
}, 2000);
}
console.log("-Primera consulta al servidor");
consultarDatabase1(function(consulta) {
console.log(consulta);
});
console.log("-Segunda consulta al servidor");
consultarDatabase1(function(consulta) {
console.log(consulta);
});
console.log("-Más tareas a realizar...");

//

function saludar(saludo) {
    if (!saludo) console.log('no hay saludo');
    else console.log(saludo);
    }
    // no hay saludo
    saludar();
    // hola
    saludar('hola');
    // hola
    saludar('hola', 'Alejandro');
//objeto "argumennts"
function saludar() {
    const saludo = arguments[0];
    const nombre = arguments[1];
    // undefined
    console.log(arguments[2]);
    // Adiós, Carlos!
    console.log(saludo + ', ' + nombre + '!');
    }
    saludar('Adiós', 'Carlos');