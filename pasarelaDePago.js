//MUESTRO LOS PRODUCTOS QUE TIENE EL CLIENTE AÑADIDOS AL CARRITO CUANDO ESTOS PASAN AL LOCALSTORAGE
if(localStorage.listaProductosCarrito != null){

    //MUESTRO LOS PRODUCTOS QUE TIENE EL CLIENTE CARGADOS EN EL LOCALSTORAGE
    document.getElementById('idCarrito').innerText = JSON.parse(localStorage.listaProductosCarrito).length;
    
    let listaCarrito = JSON.parse(localStorage.getItem("listaProductosCarrito"))

    for(let productoEnCanasto of listaCarrito){
    
        console.log(productoEnCanasto)
        let mostrarProductoEnEsteDiv = document.getElementsByClassName('listaDeProductoPasarelaDePago');    
        let divParaMostrastrProducto = document.createElement('div');
        divParaMostrastrProducto.className = "card mb-3";
        divParaMostrastrProducto.innerHTML =`<div class="card-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div>
                                                            <img src="../${productoEnCanasto.imagen}" class="img-fluid rounded-3 imgPago" alt="Shopping item">
                                                        </div>
                                                        <div class="ms-3">
                                                            <h5>${productoEnCanasto.nombreProducto}</h5>
                                                            <p class="small mb-0">${productoEnCanasto.modeloProducto}</p>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div>
                                                            <h5 class="mb-0">$ ${productoEnCanasto.precioProducto}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`
        mostrarProductoEnEsteDiv[0].appendChild(divParaMostrastrProducto);                                        
    }
}else{ //Si el cliente aún no tiene compras, se lo dirige al inicio.
    swal({
		title: "",
		text: "¡Aún no haz realizado ninguna compra!",
		type: "warning",
		confirmButtonColor: "#D10024",
		closeOnConfirm: false
	  },
	  function(isConfirm){
		  if (isConfirm) {
			  window.location.href = 'http://127.0.0.1:5501/index.html';
		 	} 
  });
}