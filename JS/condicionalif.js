
// condicionales if y else if
const a = 3;
const b = 5;
if (a > b) {
    console.log(`a (${a}) es mayor que b (${b})`);
    document.write(' a>b ');
}
else if (a < b) {
    console.log(`b (${b}) es mayor que b (${a})`);
    document.write(' b>a ');
}
else if (a === b) {
    console.log(`a (${a}) es igual y posee el mismo tipo que b (${b})`);
    document.write(' a=b valor y tipo ');
}
else {
    console.log(`Else a (${a}) es igual en valor que b (${b})`);
document.write(' Else a=b solo en valor ');

}
//ejercicio2 pg 168
const c = 6;
const d = 8;
const e = 3;
const f = 9;

console.log  (c + d);
console.log  (e + f);
if (c+d > e+f ) {
    console.log(`cd (${c+d}) es mayor que ef (${e+f})`);
    document.write(' cd>ef ');
}
else if (e+f < c+d) {
    console.log(`ef (${e+f}) es mayor que cd (${c+d})`);
    document.write(' ef>cd ');
}
else if (c+d === e+f) {
    console.log(`cd (${c+d}) es igual y posee el mismo tipo que ef (${e+f})`);
    document.write(' cd=ij valor y tipo ');
}
else {
    console.log(`Else cd (${c+d}) es igual en valor que ij (${e+f})`);
document.write(' Else cd=ij solo en valor ');

}
let g=5, h=8, x=4, j=6;
suma1=g+h;
suma2=x+j;
if (suma1<suma2){
    document.write(' la suma g+h es menor que i+j ');
}
else if (suma1>suma2){
    document.write(' la suma de g+h es mayor que i+j ');
}
else {
    document.write(' la suma g+h es igual que i+j ');
} 
// ejercicio hora
let hora= 13;
if ((hora>=9) && (hora<=14)){
    document.write (' Sant boi ');
}
else if ((hora>=15) && (hora<=20)){
    document.write (' castelldefels ');
}
else {
    document.write (' fuera de clase ')
}

//ejercicio3pg168

let angulo1=35, angulo2=35, angulo3=110;
let triangulo = angulo1 + angulo2 + angulo3;
if (triangulo == 180) {
    document.write(' los angulos forman 180º de un triangulo ');
}
if(angulo1==angulo2|| angulo1==angulo3|| angulo2==angulo3){
    document.write(' es un triangulo issosceles ')
}
else {
    document.write(' no es un triangulo ');
}

//ejercicio4pg168

let k=638;
if(k%2 == 0) {
    document.write(' Es un numero PAR ')
}
else {
    document.write(' Es un numero IMPAR ')
}

//ejercicio5pg168
let l=6, m=9, n=4
if(l>m && l>n){
    document.write(' L es mayor que M y N ')
}
else if(m>l && m>n){
    document.write(' M es mayor que L y N ')
}
else if(n>l && n>m){
    document.write(' N es mayor que L y M ')
}
else {
    document.write(' ninguna es mayor ')
}

//ejercicio6pg168
const z = 25;
if(z == 25) {
console.log("a");
}
else { 
console.log("b");
}