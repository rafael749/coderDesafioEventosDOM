
            // ENTREGA Numero  1

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


*/


/******************************************************************************************************/


//          ENTREGA Numero 2

/*
    Se Crean dos clases Categoría y Productos,

    Se crean dos array categoria y producto con los objetos necesarios para la prueba

*/


class Categoria{
    constructor(id,nombre,estado){
        this.id = id;
        this.nombre = nombre;
        this.estado;
    }
}

class producto{
    constructor(id, nombre,stock,precio){
        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }  
}

const productos = [
    {id:1001, nombre:'IPhone', stock:'50', precio: '500'},
    {id:1002, nombre:'SmarTv', stock:'60', precio: '600'},
    {id:1003, nombre:'Heladera', stock:'70', precio: '700'},
    {id:1004, nombre:'Silla Gamer', stock:'80', precio: '800'},
]

const categorias = [
    {id:1001, nombre:'Ofertas', estado:'disponible', productos},
    {id:1002, nombre:'Tecnologias', estado:'isponible', productos},
    {id:1003, nombre:'Electrodomesticos', estado:'isponible', productos},
    {id:1004, nombre:'Accesorios', estado:'isponible', productos},
]






/*******************************************************************************************************************/
//Carrito de Compras 
/*******************************************************************************************************************/

let carritoCompras = () => {
    let comenzarAcomprar = prompt('Para comenzar a comprar en el sitio escriba: comprar -  Para finalizar programa escriba Salir. Muchas Gracias');

    eleccionDelUsuario(comenzarAcomprar);
}

let ararayCarritoCategorias = new Array();
let ararayCarritoProductos = new Array();

/***********Decisión del usuario, Si decide comprar comienza seleccionando la Categoría********************************/

let eleccionDelUsuario = comenzarAcomprar => {

    if (comenzarAcomprar != 'comprar') {

        alert('Lamentamos que te vayas sin realizar una compra, vuelve pronto');
        alert('En caso que te hubieras equivocado, presiona F5 y escribe comprar. Muchas Gracias');

    } else {

        let carritoCategoria = [];
        let carritoProducto = [];
        let carritoProductoTotal = [];
        let productosEnCanasta = 0;

        while (comenzarAcomprar != 'salir') {

            let carritoCompras = prompt("Seleccione categoria del producto a comprar: 1 para Ofertas - 2 para Tecnologías - 3 para electrodomesticos - 4 para accesorios ");
            // a Mejorar -> crear un ciclo For para recorrer los índices
            switch (carritoCompras) {
                case "1":
                    ararayCarritoCategorias.push(categorias[0]);
                    alert(`Categorias seleccionadas: ${categorias[0].nombre}`);
                    prod(categorias[0].nombre);
                    break;
                case "2":
                    ararayCarritoCategorias.push(categorias[1]);
                    alert(`Categorias seleccionadas: ${categorias[1].nombre}`);
                    prod(categorias[1].nombre);
                    break;
                case "3":
                    ararayCarritoCategorias.push(categorias[2]);
                    alert(`Categorias seleccionadas: ${categorias[2].nombre}`);
                    prod(categorias[2].nombre);
                    break;
                case "4":
                    ararayCarritoCategorias.push(categorias[3]);
                    alert(`Categorias seleccionadas: ${categorias[3].nombre}`);
                    prod(categorias[3].nombre);
                    break;
                default:
                    alert(`Lo siento no disponemos de ese producto ${carritoCompras}. Debes seleccionar correctamente del desde el 1 al 4`);
                    break;
            }

            comenzarAcomprar = prompt('Presiona comprar para continuar comprando, Para finalizar programa escriba Salir. Muchas Gracias');

        }

        for(const myCarritoCategorias of ararayCarritoCategorias){

            carritoCategoria.push(myCarritoCategorias.nombre);
        }

        for(const myCarritoProductos of ararayCarritoProductos){
            carritoProducto.push(myCarritoProductos.nombre);

            productosEnCanasta++;
        }

        alert(`Categorias que compró... \n${carritoCategoria}\n\nProductos:\n${carritoProducto}\n\nTotal de ${productosEnCanasta} Productos!`);
    }
}

/*******************Continuamos la compra seleccionando el producto******************/

let prod = prod => {

    let producto = prompt("Ahora Elige el producto a comprar: 1 para Iphone - 2 para Smart-Tv - 3 para Heladera-Smart - 4 para Silla-Gamer ");
    let produ = 0;
    switch (producto) {
        case "1":
            ararayCarritoProductos.push(categorias[0].productos[0]);
            alert('Seleccionaste Iphone precio $500');

            produ = 500;
            break;
        case "2":
            ararayCarritoProductos.push(categorias[1].productos[1]);
            alert('Seleccionaste Smart-Tv precio $600');

            produ = 600;
            break;
        case "3":
            ararayCarritoProductos.push(categorias[2].productos[2]);
            alert('Seleccionaste Heladera-Smart $700');

            produ = 700;
            break;
        case "4":
            ararayCarritoProductos.push(categorias[3].productos[3]);
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




