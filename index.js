// ENTREGA Numero  1  y 2

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


//          ENTREGA Numero 3  03/05/2022

/*
    Se Crean dos clases Categoría y Productos,
    Se crean dos array categoria y producto con los objetos necesarios para la prueba
*/



/******************************************************************************************************/


//         Primera entrega del Proyecto Final   05/05/2022


		//MEJORA
		
/*		Dentro de cada eleccion del usuario (Categoria y producto),Se le añade como  indice la variable con el numero seleccionado Sin la necesidad de usar un bucle.
		ANTES En la entrega anterior lo harcodeaba a mano el numero  */			



/******************************************************************************************************/

//	Desafío Complementario DOM


// Si el usuario escribe su nombre, éste se visualizará su nombre donde se encuentra el ícono del Usuario.

//Si el usuario desea esconder la etiqueta "Sin Stock", lo puede hacer. escribiendo true en el prompt, caso contrario, continuarán visualizandose.

//El usuario tiene la posibilidad añadir un nuevo producto ( por ahora..)


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

            let carritoCompras = prompt("Seleccione categoria del producto a comprar: 0 para Ofertas - 1 para Tecnologías - 2 para electrodomesticos - 3 para accesorios ");
            switch (carritoCompras) {
                case "0":
                    ararayCarritoCategorias.push(categorias[carritoCompras]);
                    alert(`Categorias seleccionadas: ${categorias[carritoCompras].nombre}`);
                    prod(categorias[carritoCompras].nombre);
                    break;
                case "1":
                    ararayCarritoCategorias.push(categorias[carritoCompras]);
                    alert(`Categorias seleccionadas: ${categorias[carritoCompras].nombre}`);
                    prod(categorias[carritoCompras].nombre);
                    break;
                case "2":
                    ararayCarritoCategorias.push(categorias[carritoCompras]);
                    alert(`Categorias seleccionadas: ${categorias[carritoCompras].nombre}`);
                    prod(categorias[carritoCompras].nombre);
                    break;
                case "3":
                    ararayCarritoCategorias.push(categorias[carritoCompras]);
                    alert(`Categorias seleccionadas: ${categorias[carritoCompras].nombre}`);
                    prod(categorias[carritoCompras].nombre);
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

    let producto = prompt("Ahora Elige el producto a comprar: 0 para Iphone - 1 para Smart-Tv - 2 para Heladera-Smart - 3 para Silla-Gamer ");
    let produ = 0;
    switch (producto) {
        case "0":
            ararayCarritoProductos.push(categorias[producto].productos[producto]);
            alert('Seleccionaste Iphone precio $500');

            produ = 500;
            break;
        case "1":
            ararayCarritoProductos.push(categorias[producto].productos[producto]);
            alert('Seleccionaste Smart-Tv precio $600');

            produ = 600;
            break;
        case "2":
            ararayCarritoProductos.push(categorias[producto].productos[producto]);
            alert('Seleccionaste Heladera-Smart $700');

            produ = 700;
            break;
        case "3":
            ararayCarritoProductos.push(categorias[producto].productos[producto]);
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
                alert('bloqueaste tu cuenta. Por favor presiona F5 y vuelve a probar. sino vuelvas prontos');
                break;
            }
        }else{

            //Inicia el carrito de compras
        
            alert('Bienvenidos al mejor Ecommerce de CoderHouse');
		
		//setea el nombre del usuario en el icono del usuario
		let usuarioLogueado = prompt('Ingrese su nombre de usuario');
		let userHtml = document.getElementsByClassName('usuario')[0].innerHTML = usuarioLogueado
		
		//mostrar o esconder etiqueta "Sin Stock"
		let etiquetaSinStock = prompt('Desea Ocultar la etiqueta "Sin Stock" en los productos?,\n escriba:  true, o cualquier letra para ocultar la misma ')
		if (etiquetaSinStock === "true"){	
			let contador = 0;
			for(sinStock of productoSinStock){
       				 console.log(sinStock.hidden= true)
           			 contador++;
   			 }
	alert('Se borro la etiqueta Sin Stock de los productos '+contador)
		}else{
			alert('ha seleccionado otro valor. las etiqueta no será eliminada.\nEn presione F5 para visualizarla nuevamente. Muchas gracias')
		}
		
		// Posivilidad del usuario añadir un nuevo producto en la seccion OFERTAS
		let agregarProductoNuevo = prompt('Producto Nuevo disponible a Agregar: \nNuevo - Salero. Seleccione 1. Sino cualquier tecla. Muchas Gracias ')

		if (agregarProductoNuevo === "1"){	

			let grillaPadre = document.getElementsByClassName('grillaPadre')
			let productoNuevoSalero = document.createElement("div")
			productoNuevoSalero.className = 'class="producto8 productos card__css-manual rounded';
			productoNuevoSalero.innerHTML = `<span id="" data-action="cart-can" class="cart_menu cart_menu_Nuevo badge rounded">Nuevo</span> <span id="" data-action="cart-can" class="cart_menu cart_menu_Envio badge rounded">Envio Gratis</span> <img src="img/salero.jpg" alt="Salero"> <div class="productoDetalle"> <h3 class="precio__actual">$1.999</h3> <h5>Salero</h5> <h6>MODELO: MME73AM/A</h6> </div> <div class="carrito"> <a href="/html/listaDeseos.html"><i class="fas fa-heart heart"></i></a> <i class="fas fa-eye eye"></i> <a href="/html/pasarelaDePago.html"><i class="fas fa-shopping-cart shopping-car"></i></a> </div>`
			grillaPadre[0].appendChild(productoNuevoSalero);
    
			alert('Agregando nuevo producto.... \Seccion Ofertas')
			}else{
			alert('ha seleccionado otro valor. No se agregara el nuevo producto.')}
		
		
           /* carritoCompras();*/
            break;
        
        }
    }


/**************** F I N del programa =) ************************************/
