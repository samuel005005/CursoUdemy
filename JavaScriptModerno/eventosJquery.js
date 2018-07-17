$(document).ready(()=>{
	$(document).mousemove(function(){
		$('body').css("cursor","none");
		$('#MouseMove').css('left',event.clientX).css('top',event.clientY);
	});
});


