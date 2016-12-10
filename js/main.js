
// $(document).ready(function() {
// 	$('#menu-des').on('click',function(){
// 	  $('#main-nav').toggleClass('mostrar')
// 	  $('#menu-des').toggleClass('mover')
// 	})
// 	$('#setting').on('click', function(){
// 		$('#lenguages').toggleClass('mostrar')
// 	})
// }


$(document).ready(function() {
	$('.fa-bars').on('click',function(){
	  $('.perfil2').toggleClass('mostrar');
	})
	$('#setting').on('click', function(){
		$('#lenguages').toggleClass('mostrar');
	})
}
