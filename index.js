/*
1)  Para este desafío simulo un carrito de compras, en el cual se debe loguar primero con la password correcta. -->  admin123
        Si la misma se ingresa 3 veces mal, Al 4to intento se le infica al usuario que está bloqueado.
        Debe presionar F5 para volver a intentar.

2)  Si el usuario ingresa al sistema de forma correcta:
        En caso de arrepentirse puede "salir". El sistema envia un mensaje indicando que no realizó ninguna compra. y finaliza el mismo

        Si desea comprar en nuestra tienda debe escribir "comprar".
        para comenzar seleccionando la categoría. o escribir "salir".
        Si ingresa una categoría que no está en sistema, se le indica que vuelva a ingresarla.
        Luego de seleccionar la categoria, continúa seleccionando el producto. 
        Si ingresa un producto que  que no está en sistema, se le indica que vuelva a ingresarlo.

3)  Si desea continuar comprando, debe escribir "comprar" -> Se repite el proceso 2)
        Caso contrario "salir" para finalizar el programa.

4)Al finalizar la compra se le indica al usuario, cuantos productos ha comprado



Muchas Gracias.-

PD: el inicio del programa comienza en la linea 120.

*/






/*******************************************************************************************************************/
//Carrito de Compras 
/*******************************************************************************************************************/

let carritoCompras = () => {
    let comenzarAcomprar = prompt('Para comenzar a comprar en el sitio escriba: comprar -  Para finalizar programa escriba Salir. Muchas Gracias');

    eleccionDelUsuario(comenzarAcomprar);
}



/***********Decisión del usuario, Si decide comprar comienza seleccionando la Categoría********************************/

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
                    alert(`Lo siento no disponemos de ese producto ${carritoCompras}. Debes seleccionar correctamente del desde el 1 al 4`);
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


                    //LOGIN

//Password a Ingresar: admin123

let password = prompt('Ingresa tu password de Administrador para ingresar');

    for (let intentos = 1; intentos < 5; intentos++) {

        if (password != 'admin123') {

            alert(`La password ${password} ingresada es incorrecta. Intento Nro: ${intentos}`);

            password = prompt('Vuelve a ingresar tu password de Administrador para ingresar');        

            if (intentos > 2) {
                alert('bloqueaste tu cuenta. Por favor presiona F5 y vuelve a intentar');
                break;
            }
        }else{

            //Inicia el carrito de compras
        
            alert('Bienvenidos al mejor Ecommerce de CoderHouse');
            carritoCompras();
            break;
        
        }
    }


/**************** F I N del programa =) ************************************/




