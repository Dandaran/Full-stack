const a = 3;
console.log('Esta parte está antes del switch')
switch (a) {
    case 1:
        console.log('El valor de a es 1');
        document.write('el valor de a es 1')
        break;
    case 2:
        console.log('El valor de a es 2');
        document.write ('el valor de a es 2')
        break;
        
    case 3:
        console.log('El valor de a es 3');
        document.write ('el valor de a es 3')
        break;
        
    case 4:    
        console.log('El valor de a es 4');
        document.write ('el valor de a es 4')
        break;
       
    default:
        console.log('El valor de a es desconocido');
        document.write ('el valor de a es desconocido')
}
console.log('Esta parte está despues del switch')