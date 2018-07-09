'use strict'

window.addEventListener('load',function(eventWindows){

//Eventos
	var boton = document.querySelector('#btn');
	var input = document.querySelector('#input');

		boton.addEventListener('mouseover',function(event){
			boton.style.background = '#BDBDBD';
		});

		boton.addEventListener('mouseout',function(){
			boton.style.background = '#D8D8D8';
		});

		input.addEventListener('focus',function(event){
			console.log("[Focus] Estas dentro del input");
		});

		input.addEventListener('blur',function(){
			console.log("[Blur] Estas fuera del input");
		});

		input.addEventListener('keydown',function(event){
			console.log("[Keydown] Pulsando tecla");
			console.log(event.key.toUpperCase());
			console.log(String.fromCharCode(event.keyCode));
		});

		input.addEventListener('keypress',function(){
			console.log("[Keypress] Tecla Precionada");
		});

		input.addEventListener('keyup',function(){
			console.log("[Keyup] Tecla soltada");
		});

});