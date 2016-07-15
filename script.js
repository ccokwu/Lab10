$(document).ready(function(){
  var $seats = $(".seats");
  $($seats).on("click", function(){

    if ($(this).hasClass('selected')) {
      // remove selected class
      $(this).removeClass('selected');
    } else {
        $(this).addClass("selected");
    }
    var $form = $('form');
    $form.show();
    
  }); // end onclick function

// hide the form when loaded
$(function() {
	$('form').hide();
});
// show the form when an available seat is selected

// set some of the seats to default as taken class using jQuery



});
