'use strict'

//funciones anonimas
//Es una funcion que no posee un nombre

function sumame(numero1,numero2,sumaYmuestra ,sumaPorDos){
	var sumar = numero1 + numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);
	return sumar;
}


//Callback

sumame(1,5 , function(dato){
	console.log("La suma es : ",dato);
},function(dato){
	console.log("La suma por dos es : ",dato*2);
});


//Callback con Function Fecha Arrow Functions


sumame(1,5 , dato => {
	console.log("La suma es : ",dato);
},dato => {
	console.log("La suma por dos es : ",dato*2);
});