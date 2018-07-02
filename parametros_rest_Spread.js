//Parametros de Tipo Rest ...otras_frutas (Este tipo de parametro te permite obtener la cantidad de paramtros posibles en una funcion si saber cuantos parametros van a llegar.)

function listadofrutas(fruta1,fruta2,fruta3,...otras_frutas) {
	console.log("fruta 1: ",fruta1);
	console.log("fruta 2: ",fruta2);
	console.log("fruta 3: ",fruta3);
	console.log("Otras Frutas: ",otras_frutas);
}


var frutas = ["Manzana","Zapote","Sandia"];

//Parametros Tipo Spread (para pasar un array como parametro eh interpretarlos como parametros de la funcion)
listadofrutas(...frutas,"Pera","Melocoton","Quiwi","Naranja");