



alert("Hola, vamos a calcular el total de una compra de 3 productos más su IVA!")

let product1 = parseFloat(prompt("Introducí el precio del primer producto"));
let product2 = parseFloat(prompt("Introducí el precio del segundo producto"));
let product3 = parseFloat(prompt("Introducí el precio del tercer producto"));
    
function calculoIva(product1, product2, product3) {
    const iva = 1.21;
    let result = (product1 + product2 + product3) * iva
    return result
}
    
alert(`El total con IVA es de $${Math.round(calculoIva(product1, product2, product3))}`)
    
alert("Tenemos descuento del 10% en todas las compras seleccionadas!")
    
function descuento(calculoIva) {
    let discount = 0.10;
    let porcentaje = calculoIva(product1, product2, product3) * discount;
    let descontar = calculoIva(product1, product2, product3) - porcentaje;
    return descontar
}
    
alert(`Su nuevo total con descuento es $${descuento(calculoIva)}`)



/**********************************Realizar Operacion matemática*******************************************************/




let operacion = prompt("Operacion para sumr ingresa +par restar -  Multiplicacion(*), Division(/)")
let primerValor = parseInt(prompt("Ingresa el primer valor que quieras operar"))
let segundoValor = parseInt(prompt("Ingresa el segundo valor que quieras operar"))

if(operacion === "+"){
    let resultado = primerValor + segundoValor;
    alert(`El resultado de tu suma es: ${resultado}`);
}else if (operacion === "-"){
    let resultado = primerValor - segundoValor;
    alert(`El resultado de tu resta es: ${resultado}`);
}else if(operacion === "*"){
    let resultado = primerValor * segundoValor;
    alert(`El resultado de tu multiplicacion es: ${resultado}`);
} else if(operacion === "/"){
    let resultado = parseFloat(primerValor / segundoValor)
    alert(`El resultado de tu divion es: ${resultado}`);
}else{alert("Ingresa un signo valido: +,-,*,/")
}





/**************************Calculadora****************************/


let num = prompt("Ingrese un número del 1 al 10");

num = parseInt(num);

while (num<=0 || num>10) {
    num = prompt("Número incorrecto, intentelo de nuevo");    
    }

    alert("texto'>Tabla del " + num);   

    for (let i=1;i<=10;i++) {
        multiplicacion = num*i;         
        alert("El resultado de "+ num + " X "+ i + " es: " + multiplicacion + " ");
        
    }



    