// suma
let a = 2 + 3;
// resta
const b = 2 - 3;
// multiplicación
const c = 2 * 3;
// división
const d = 2 / 3;
// módulo
const e = 2 % 3;
// incremento posterior
a++;
// incremento anterior
++a;
// decremento posterior
a--;
// decremento anterior
--a;
//
const x1 = 4;
// y1 = 5; x1 = 5 (primero incrementa y luego asigna)
const y1 = ++x1;
const x2 = 4;
// y2 = 4; x2 = 5 (primero asigna y luego incrementa)
const y2 = x2++;
//
let ab = 2;
// a = a + 2
ab += 2;
// a = a - 2
ab -= 2;
// a = a * 2
ab *= 2;
// a = a / 2
ab /= 2;
// a = a % 2
ab %= 2;
// true
console.log('2' == 2);
// false
console.log('2' === 2);
// true porque ambos valores representan un objeto vacío
console.log(null == undefined);
// false porque no son el mismo objeto
console.log(undefined === null);
// false
console.log('2' != 2);
// true
console.log('2' !== 2);
// true porque '2' es convertir a number
console.log('2' < 4);
// false
console.log(4 > 8);
// true
console.log(3 <= 3);
// true
console.log(3 >= 3);
// true
console.log(true && true);
// false
console.log(true && false);
// false
console.log(false && true);
// false
console.log(false && false);
// true
console.log(true || true);
// true
console.log(true || false);
// true
console.log(false || true);
// false
console.log(false || false);
// false
console.log(!true);
// true
console.log(!false);
// false
console.log(Boolean(0));
// true
console.log(Boolean(4));
// true
console.log(Boolean('Hola'));
// false
console.log(Boolean(''));
// false
console.log(Boolean(""));
// port toma el valor 5000 si process.env.PORT toma el valor de NaN, null o undefined
const puerto = puertoPorDefecto || 5000;
// ac = 4
const ac = true ? 4 : 3;
// ac = 3
const bc = false ? 4 : 3;
//
const str1 = 'hola';
// hola a todos 5true
const str2 = str1 + ' a todos ' + 5 + true;
// hola a todos 5true
console.log(str2);
// 20
console.log(+'13' + 7);
// 137
console.log('13' + 7);
//
const str1a = 'Hola';
const str2a = 'todos';
const str = `${str1} a ${str2}`;
// Hola a todos
console.log(str);