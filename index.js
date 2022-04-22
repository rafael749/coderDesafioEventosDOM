

/*Realizar Operacion matemática*/

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



