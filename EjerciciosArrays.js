'use strict'

/*
	1. Pida 6 numuero por pantalla y los ponga en un array
	2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina 
	y en la consola
	3. Ordenarlo y mostrarlo
	4. Invertir su orden  y mostrarlo
	5 . cant de elementos del array
	6 buscar un valor introducido por el usuario
	decir si esta en el array y su posicion.
*/
var numero = parseInt(prompt("Ingrese un numero "),0);
var arrayNumeros = new Array();
arrayNumeros[0] = numero;

for (var i = 1; i <6; i++) {
	arrayNumeros[i] = parseInt(prompt("Ingrese otro numero "),0);
}

arrayNumeros.forEach(
	(elemento,indice)=>
{
	console.log(elemento); 
	document.write(elemento+'<br>');
});
document.write('<hr>');
console.log('-----------------------------------------------------------'); 
arrayNumeros.sort();
arrayNumeros.forEach(
	(elemento,indice)=>
{
	console.log(elemento); document.write(elemento+'<br>');
});

document.write('<hr>');
console.log('-----------------------------------------------------------'); 
arrayNumeros.reverse();
arrayNumeros.forEach(
	(elemento,indice)=>
{
	console.log(elemento); document.write(elemento+'<br>');
});

document.write('<hr>');
console.log('-----------------------------------------------------------'); 
var cant_elementos =arrayNumeros.length;
 console.log(cant_elementos); document.write(cant_elementos+'<br>');


 document.write('<hr>');
console.log('-----------------------------------------------------------'); 
var numerob = parseInt(prompt("Buscar un numero "),0);

var buscado = arrayNumeros.findindex(function(numero){
	return numerob == numerob;
});

console.log(buscado);