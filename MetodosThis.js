
var persona = {
	nombre2 :'Sam',
	edad : '12',
	saludar : function(){


		function funcion(){
		  nombre ='Pedro3';
			console.log('Hola me llamo '+this.nombre);
		}
	//	console.log('Hola me llamo '+nombre);

		function funcion2(){
			console.log('Hola me llamo '+this.nombre);
		}
		funcion();
		funcion2();

		console.log('Hola me llamo '+this.nombre);
	}

}

 var p =persona.saludar;
p();
console.log('Hola me llamo '+this.nombre);

console.log(persona);