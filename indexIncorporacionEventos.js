function crearObjetoProducto(nombreProducto,categoriaProducto,marcaProducto,precioProducto,modeloProducto){
	this.categoriaProducto = categoriaProducto;
	this.nombreProducto    = nombreProducto;
	this.marcaProducto     = marcaProducto;
	this.precioProducto    = precioProducto;
	this.modeloProducto    = modeloProducto;

    
	this.mostrarProducto = (arr) => {

		let contadorProd=0;

		for (const prod of productoArray){
			let grillaPadre = document.getElementsByClassName('grillaPadre')
			let producto = document.createElement("div");
			producto.id = contadorProd;
			producto.className = '"producto8 productos card__css-manual rounded';
			producto.innerHTML = 	`<span id="" data-action="cart-can" class="cart_menu cart_menu_Nuevo badge rounded">Nuevo</span> 
												<span id="" data-action="cart-can" class="cart_menu cart_menu_Envio badge rounded">Envio Gratis</span> 
												<img src="img/salero.jpg" alt="Producto Nuevo Agregado con Js"> 
											<div class="productoDetalle"> 
												<h3 class="precio__actual">${prod.precioProducto}</h3> 
												<h5>${prod.nombreProducto}</h5> 
												<h6>${prod.modeloProducto}</h6> 
											</div> 
											<div class="carrito"> 
												<a href="/html/listaDeseos.html"><i class="fas fa-heart heart"></i></a>
												<i class="fas fa-eye eye"></i> 
												<i class="fas fa-trash heart"></i>
												<a href="/html/pasarelaDePago.html">
													<i class="fas fa-shopping-cart shopping-car"></i>
												</a> 
											</div>`
			contadorProd++;
			grillaPadre[0].appendChild(producto);
		}						
	}    
}

const productoArray = [];

let crearProducto= () => {

	let cantidadProdIngresar = parseInt(prompt('ingrese Cuantos productos desea ingresar'));	
	for(let i = 0; i<cantidadProdIngresar;i++){
		alert('Estimado, el producto creado \nTendrá por defecto las etiqueta "Nuevo" y "Envío Gratis" \nSe lo visualizará al final de la web \nPara fines demostrativos la imagen a crear será la de un salero. Gracias');	
		let nombre = prompt("Introduce la categoría del Producto a crear");
		let categoria = prompt("Introduce nombre del Producto a crear");
		let marca = prompt("Introducie la marca del producto");
		let precio = prompt("introduce el precio del producto");
		let modelo = prompt("introduce el Modelo del producto");

		var producto = new crearObjetoProducto(nombre,categoria,marca,precio,modelo);
	
		productoArray.push(producto);
	}
	producto.mostrarProducto(productoArray);
}


let botonCrearProducto = document.querySelectorAll('.menu > ul')[0];
	let elementoNuevoMenu = document.createElement("li");
	elementoNuevoMenu.innerHTML = 	`<button type="button" class="btn btn-primary my-1 p-2">Crear Producto</button>`
									
	botonCrearProducto.appendChild(elementoNuevoMenu);	

	botonCrearProducto.addEventListener('click', () => {crearProducto()})



/*************************************************************************************************************/
let eliminarProducto = () => {
	const eliminarProducto = this.productoNuevoSaleroId;
	console.log(productoNuevoSaleroId);
}

let trashIcon = document.getElementsByClassName('fas fa-trash heart')[0];
let card = document.getElementsByClassName('producto1 productos card__css-manual rounded')[0];
trashIcon.addEventListener('click',eliminarProducto);
