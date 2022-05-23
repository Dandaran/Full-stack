const frutas = ['Banana', 'Orange', 'Apple', 'Mango'];
const lon = frutas.length;
// for clásico
for (let i = 0; i < lon; i++) {
console.log(frutas[i]);
}
// for...of
for (let fruta of frutas) {
console.log(fruta + ',');
document.write(fruta + ',');
}