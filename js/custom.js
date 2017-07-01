$(document).ready(function(){
  $("li").on("click", function(){
    $("li").removeClass("active");
    $(this).addClass("active");
  });



  $('#carouselFade').carousel();
  $('#buttonsearch').click(function(){
				$('#formsearch').slideToggle( "fast",function(){
					 $( '#content' ).toggleClass( "moremargin" );
				} );
				$('#searchbox').focus()
				$('.openclosesearch').toggle();
		});





});
