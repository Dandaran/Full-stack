// función tipada
function sumar1(x: number, y: number): number {
return x + y;
}
// función anónima tipada con inferencia de tipo
const sumar2 = function(x: number, y: number): number { return x + y; };
// función de flecha tipada con inferencia de tipo
const sumar3 = (x: number, y: number): number => x + y;
// función de flecha tipada sin inferencia de tipo (se utiliza el tipo Function)
const sumar4: Function = (x: number, y: number): number => x + y;
// creación de una variable que posteriormente almacenará una función
let sumar5: Function;
// error
// sumar5 = 5;
sumar5 = sumar4;
console.log(sumar1(3,2));

console.log(sumar2(6,8)); 
// sin parámetros opcionales (ejemplo de dos parámetros obligatorios)
const construirNombre1 = (nombre: string, apellidos: string) => {
    return nombre + ' ' + apellidos;
    };
// error porque solamente se ha pasado un parámetro
// const resultado1 = construirNombre1('Bob');
// error porque se han pasado tres parámetros
// const resultado2 = construirNombre1('Bob', 'Adams', 'Sr.');
// correcto
const resultado3 = construirNombre1('Bob', 'Adams');
// los parámetros opcionales no pueden ubicarse antes que los obligatorios. Si no sesuministran, su valor es undefined
const construirNombre2 = (nombre: string, apellidos?: string) => {
    return apellidos ? nombre + ' ' + apellidos : nombre;
};
// correcto
const resultado4 = construirNombre2('Bob');
// error porque la función acepta uno o dos parámetros
// const resultado5 = construirNombre2('Bob', 'Adams', 'Sr.');
// correcto
const resultado6 = construirNombre2('Bob', 'Adams');


const construirNombre = (nombre: string, ...resto: string[]) => {
    return `${nombre} ${resto.join(' ')}`;
};
    const persona = construirNombre('Joseph', 'Samuel', 'Lucas', 'MacKinzie', 'Paquita');
    console.log(persona)

    // el tercer parámetro que recibe la función es un callback (recibe una variable de tiponumérica y no retorna nada)
const suma = (a: number, b: number, cb: (result: number) => void) => {
const result = a + b;
cb(result);
};
// no es necesario declarar la variable result de tipo number porque TypeScript la infiere del tipado del callback
suma(1, 2, (result) => {
console.log(result);
});
function pickCard(x: string): string;
function pickCard(x: number): number;
function pickCard(x: number | string): number | string {
return (typeof x === 'string') ? x+1 : x+2;
}
// correcto
console.log (pickCard(4));
// correcto
console.log (pickCard('Hola'));
// error porque la función sobrecargada no recibe valores booleanos
// pickCard(true);