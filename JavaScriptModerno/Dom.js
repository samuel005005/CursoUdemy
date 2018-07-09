'use strict'

//var valorCaja = document.getElementById('idCaja');

// var valorCaja = document.querySelector('#idCaja');


// valorCaja.innerHTML = 'Ya soy una caja nueva';

// valorCaja.style.color = 'red';



var div =  document.getElementsByTagName('div');

for (var i =0; i < div.length  ; i++) {
	var parrafo = document.createElement('p');
	var text =document.createTextNode(div[i].innerHTML);
	parrafo.appendChild(text);
	document.querySelector('#Miseccion').appendChild(parrafo);
	
}