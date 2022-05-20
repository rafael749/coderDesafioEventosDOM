//Productos de la tienda cargados en el sistema.
//localStorage.setItem("productos",JSON.stringify(productos)); 

let listaProductosAccesorios = JSON.parse(localStorage.getItem("productos"));

    let contadorProd=0;
    for (const itemAccesorio of listaProductosAccesorios){
        if(itemAccesorio.categoriaProducto === 'accesorios'){
            let grillaPadre = document.getElementsByClassName('grillaPadre5')
            let producto = document.createElement("div");
            producto.id = contadorProd;
            producto.className = `producto${contadorProd} productos card__css-manual rounded`;
            producto.innerHTML = 	`<span id="" data-action="cart-can" class="cart_menu cart_menu_Nuevo badge rounded">${itemAccesorio.estadoProducto}</span> 
                                                <span id="" data-action="cart-can" class="cart_menu cart_menu_Envio badge rounded">${itemAccesorio.envioProducto}</span> 
                                                <img src="${itemAccesorio.imagen}" alt="Producto Nuevo Agregado con Js"> 
                                         <div class="productoDetalle"> 
                                                <h3 class="precio__actual">${itemAccesorio.precioProducto}</h3> 
                                                <h5>${itemAccesorio.nombreProducto}</h5> 
                                                <h6>${itemAccesorio.modeloProducto}</h6> 
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