$(document).ready(function(){
  var $seats = $(".seats");
  $($seats).on("click", function(){

    if ($(this).hasClass('selected')) {
      // remove selected class
      $(this).removeClass('selected');
    } else {
        $(this).addClass("selected");
    }

    // show the form when an available seat is selected
    var $form = $('form');
    $form.show();

  }); // end onclick function

// when hovering over a red seat, display a message saying the seat is taken


// hide the form when loaded
$(function() {
	$('form').hide();
});

// set some of the seats to default as 'taken' class using jQuery
// maybe need to use object


// when submit button clicked, make object and change class of seat to red
var submit = $('#submit');

// in jQuery, write a function to create a user object from the form input

// in jQuery, write a function to update the seat assignment class when a seat is reserved
// grab the seat number when it is selected

// in jQuery, write a confirmation message that replaces the form

// BONUS
// =====
// + display user info on hover

});
