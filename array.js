'use strict'

//Arrays , Arreglos o Matrices



var marcasVehiculos = new Array('Honda','Toyota','Audi','Ford','Chevrole','Lexus');



document.write('<ul>');
marcasVehiculos.forEach(
		(elemento,index)=>{
//			document.write('<li>'+elemento+'</li>');
		}
);



for(var elemento in marcasVehiculos){
	//document.write('<li>'+marcasVehiculos[elemento]+'</li>');
}
//document.write('</ul>');


////Buscar texto
var busqueda = marcasVehiculos.find(marcas => marcas == 'Audi');


//ver inice donde se encuetra

var busqueda = marcasVehiculos.findIndex(marcas => marcas == 'Audi');

//document.write(busqueda);

var frutas = [2,4,5,23];

busqueda = frutas.some(fruta=>fruta<3);

document.write(busqueda);



