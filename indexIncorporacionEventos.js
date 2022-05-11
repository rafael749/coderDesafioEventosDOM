function crearObjetoProducto(nombreProducto,categoriaProducto,marcaProducto,precioProducto,modeloProducto){
this.categoriaProducto = categoriaProducto;
this.nombreProducto = nombreProducto;
this.marcaProducto = marcaProducto;
this.precioProducto = precioProducto;
this.modeloProducto = modeloProducto;

    
this.mostrarProducto = () => {
					
	let grillaPadre = document.getElementsByClassName('grillaPadre')
	let productoNuevoSalero = document.createElement("div")
	productoNuevoSalero.className = 'class="producto8 productos card__css-manual rounded';
	productoNuevoSalero.innerHTML = 	`<span id="" data-action="cart-can" class="cart_menu cart_menu_Nuevo badge rounded">Nuevo</span> 
										<span id="" data-action="cart-can" class="cart_menu cart_menu_Envio badge rounded">Envio Gratis</span> 
										<img src="img/salero.jpg" alt="Producto Nuevo Agregado con Js"> 
									<div class="productoDetalle"> 
										<h3 class="precio__actual">${precioProducto}</h3> 
										<h5>${nombreProducto}</h5> 
										<h6>${modeloProducto}</h6> 
									</div> 
									<div class="carrito"> 
										<a href="/html/listaDeseos.html"><i class="fas fa-heart heart"></i></a>
										<i class="fas fa-eye eye"></i> 
										<a href="/html/pasarelaDePago.html">
											<i class="fas fa-shopping-cart shopping-car"></i>
										</a> 
									</div>`
									
	grillaPadre[0].appendChild(productoNuevoSalero);
					
					
					}    
}

let crearProducto= () => {
alert('Estimado, el producto creado \nTendrá por defecto las etiqueta "Nuevo" y "Envío Gratis" \nSe lo visualizará al final de la web \nPara fines demostrativos la imagen a crear será la de un salero. Gracias');	
let nombre = prompt("Introduce la categoría del Producto a crear");
let categoria = prompt("Introduce nombre del Producto a crear");
let marca = prompt("Introducie la marca del producto");
let precio = prompt("introduce el precio del producto");
let modelo = prompt("introduce el Modelo del producto");

var producto = new crearObjetoProducto(nombre,categoria,marca,precio,modelo);
producto.mostrarProducto();


}


let botonCrearProducto = document.querySelectorAll('.menu > ul')[0];
	let elementoNuevoMenu = document.createElement("li");
//	productoNuevo.className = 'class="producto8 productos card__css-manual rounded';
	elementoNuevoMenu.innerHTML = 	`<button type="button" class="btn btn-danger my-1 p-2">Crear Producto</button>`
									
	botonCrearProducto.appendChild(elementoNuevoMenu);
	
	
	

/*    
var producto = new crearObjetoProducto(nombre,marca,precio);
producto.mostrarProducto();
*/	
	
	botonCrearProducto.addEventListener('click', () => {crearProducto()})
