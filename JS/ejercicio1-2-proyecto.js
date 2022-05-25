const objeto1 = {
    gestor: "banco X",
    cliente: "Dan",
    mensaje() {
        console.log( "hola " + this.cliente);
    },
    transferencia(){
        console.log("la transferencia de " + this.gestor + "se ha realizado correctamente");
    }
}
console.log(objeto1.cliente);
console.log(objeto1.mensaje());
const objeto2 = {
    gestor: "banco Y",
    cliente: "Laia",
    mensaje() {
        console.log( "hola " + this.cliente);
    },
    transferencia(){
        console.log("la transferencia de " + this.gestor + "se ha realizado correctamente");
    }
}
console.log(objeto2.cliente);
console.log(objeto2.mensaje());
const objeto3 = {
    gestor: "banco Z",
    cliente: "Dalaian",
    mensaje() {
        console.log( "hola " + this.cliente);
    },
    transferencia(){
        console.log("la transferencia de " + this.gestor + "se ha realizado correctamente");
    }
}
console.log(objeto3.cliente);
console.log(objeto3.mensaje());
//Alamacena las propiedades del objeto en un array
Arrayobj1=Object.keys(objeto1)
console.log(Arrayobj1);
Arrayobj2=Object.keys(objeto2)
console.log(Arrayobj2);
Arrayobj3=Object.keys(objeto3)
console.log(Arrayobj3);

lon1 = Arrayobj1.length;//4
for (let i = 0; i < lon1; i++) {
    console.log(objeto1[Arrayobj1[i]]);
}
lon2 = Arrayobj2.length;//4
for (let i = 0; i < lon2; i++) {
    console.log(objeto2[Arrayobj2[i]]);
}
lon3 = Arrayobj3.length;//4
for (let i = 0; i < lon3; i++) {
    console.log(objeto3[Arrayobj3[i]]);
}
