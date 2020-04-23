//Loads when the javascript has loaded. when menu-trigger is clicked the function slide toggle occurs. THe 500 is the length of the animation.

$(document).ready(function() {
  $('.menu_button_mobile').click(function() {
    $('.dropdown_menu').slideToggle(400);
  });//end slide toggle

//When window is resized, the display:none is turned off for the ul so the menu displays on click or touch.
  $(window).resize(function() {
	   if (  $(window).width() > 600 ) {
		$('.dropdown_menu').removeAttr('style');
	 }
	});//end resize
});//end ready

$(document).ready(function() {
  $('.menu_button_desktop').click(function() {
    $('.roles_nav').slideToggle(400);
  });//end slide toggle

//When window is resized, the display:none is turned off for the ul so the menu displays on click or touch.
  $(window).resize(function() {
	   if (  $(window).width() < 600 ) {
		$('.roles_nav').removeAttr('style');
	 }
	});//end resize
});//end ready
