

/*******************************************************************************************************************/
//Carrito de Compras 
/*******************************************************************************************************************/


let carritoCompras = () => {
    let comenzarAcomprar = prompt('Para comenzar a comprar en el sitio escriba: comprar -  Para finalizar programa escriba Salir. Muchas Gracias');

    eleccionDelUsuario(comenzarAcomprar);
}



/***********Decisión del usuario, Si decide comprar comienza seleccionando la Categoría?********************************/



let eleccionDelUsuario = comenzarAcomprar => {

    if (comenzarAcomprar != 'comprar') {

        alert('Lamentamos que te vayas sin realizar una compra, vuelve pronto');
        alert('En caso que te hubieras equivocado, presiona F5 y escribe comprar. Muchas Gracias');

    } else {

        let totalCategoriasSeleccionadas = 0;

        while (comenzarAcomprar != 'salir') {

            let carritoCompras = prompt("Seleccione categoria del producto a comprar: 1 para Ofertas - 2 para Tecnologías - 3 para electrodomesticos - 4 para accesorios ");

            switch (carritoCompras) {
                case "1":
                    alert('Seleccionaste Ofertas');
                    prod('1');
                    break;
                case "2":
                    alert('Seleccionaste Tecnologías');
                    prod('2');
                    break;
                case "3":
                    alert('Seleccionaste electrodomesticos');
                    prod('3');
                    break;
                case "4":
                    alert('Seleccionaste accesorios');
                    prod('4');
                    break;
                default:
                    alert(`Lo siento no disponemos de ese producto ${carritoCompras}. Debes seleccionar correctamente deñ desde el 1 al 4`);
                    break;
            }

            comenzarAcomprar = prompt('Presiona comprar para continuar comprando, Para finalizar programa escriba Salir. Muchas Gracias');

            totalCategoriasSeleccionadas++;
        }

        alert(` has comprado un total de ${totalCategoriasSeleccionadas} Productos`);
    }
}


/*******************Continuamos la compra seleccionando el producto******************/



let prod = prod => {

    let producto = prompt("Ahora Elige el producto a comprar: 1 para Iphone - 2 para Smart-Tv - 3 para Heladera-Smart - 4 para Silla-Gamer ");
    let produ = 0;
    switch (producto) {
        case "1":
            alert('Seleccionaste Iphone precio $500');
            produ = 500;
            break;
        case "2":
            alert('Seleccionaste Smart-Tv precio $600');
            produ = 600;
            break;
        case "3":
            alert('Seleccionaste Heladera-Smart $700');
            produ = 700;
            break;
        case "4":
            alert('Seleccionaste Silla-Gamer $800');
            produ = 800;
            break;
        default:
            alert(`Lo siento no disponemos de ese producto ${producto}`);
            break;
    }
    return produ;
}






                    /****************************************************/
                                    //Inicio del programa
                    /****************************************************/

//Dado que le sitio se encuentra en Desarrollo, solo se permite ingresar como Admin.

//Login como Admin. 

let password = prompt('Ingresa tu password de Administrador para ingresar');

if (password != 'admin123') {

    for (let intentos = 1; intentos <= 4; intentos++) {
        
        alert(`La password ${password} ingresada es incorrecta`);

        alert('intentos hasta el momento '+intentos);

        password = prompt('Vuelve a ingresar tu password de Administrador para ingresar');        

     if (intentos > 2) {
            alert('bloqueaste tu cuenta. Por favor presiona F5 y vuelve a intentar');
            break;
        }
    }
}else{

//Inicia el carrito de compras

    alert('Bienvenidos al mejor Ecommerce de CoderHouse');
    carritoCompras();

}

/**************** F I N del programa =) ************************************/




