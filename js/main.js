
//seleccionar usuario del chat y que pase la foto el nombre y el msj
//imprime un div con h5 p y time
//agregar texto al chat haciendo click en el microfono
//al hacer click al microfono dispara una funcion que crea un string 
function agregaMsj(){

	var contenedorMsj = document.getElementById("chat");
	var mensajeIn = document.getElementById("mensajes").value;
//crear contenedores
	var cajaMsj = document.createElement("div");
	var nuevoMsj = document.createElement("div");
	var contenedorTxt = document.createElement("p");
//atributos
	nuevoMsj.classList.add("w-message-text");
	cajaMsj.classList.add("w-message","w-message-out");	
//crear string
	var nodoMsjTexto = document.createTextNode(mensajeIn);
//insertar en el padre
	contenedorTxt.appendChild(nodoMsjTexto);
	nuevoMsj.appendChild(contenedorTxt);
	cajaMsj.appendChild(nuevoMsj);
	contenedorMsj.appendChild(cajaMsj);

//volver el input a blanco
	document.getElementById("mensajes").value = "";
  }
//para seleccionar el usuario necesito:
// un evento onclick que haga inner.html
/*clase avatar(div) 
	clase wh-44
	clase w-contact-name
	calse w-last-message
	clase w-profile (header) 
*/
 
 	
 






