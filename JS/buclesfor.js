for (let i = 0; i < 8; i++) {
    // 0, 1, 2, 3, 4, 5, 6, 7 (en distintas líneas)
    console.log(i);
    document.write(i)
    }
    const array = ['En ', 'un ', 'lugar ', 'de ', 'la ', 'mancha ', 'de ', 'cuyo ', 'nombre'];
    const len = array.length;
    // recorre un array mediante un for clásico
    for (let i = 0; i < len; i++) {
    // En, un, lugar, de, la, mancha (en distintas líneas)
    console.log(array[i]);
    document.write(array[i])
    }
//ejercicio8pg171    
for (let c = 1; c < 51; c++){
    console.log(c);
    document.write(c)
}
//ejercicio9pg171
for (let b= 0; b < 11; b++ ){
    console.log(b)
    document.write('5x' + b + '=' + 5*b + '<br>');
}
//ejercicio10pg171
var nombre = prompt('dime tu nombre:','Escribe aqui');
for(let s = 0; s < 11; s++){
    document.write(nombre + '<br>');
}
//ejercicio11pg171
var num = prompt('dime un numero:','Escribe aqui');
for(let s = num; s >= 0; --s) {
    if (s==0){
        document.write(s)
    } else {document.write(s + ',');
}
}