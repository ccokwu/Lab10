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
// needs to be tested after submit is turning class to red
$( ".taken" ).hover(function() {
    $( this ).after( $( "<span>This seat is already taken</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);
// hide the form when loaded
$(function() {
	$('form').hide();
});

// set some of the seats to default as 'taken' class using jQuery
// maybe need to use object
var $submit = $('#submit');
$($submit).on("click", function(){
// make object

// change class of seat to red (div class 'seats' and id)
	// var seatAssignment = $('.seats');
	// need to set variable to id of seat selected and then use that variable below instead of 'this'
      $(this).removeClass('selected');
      $(this).addClass('taken');
  });
// in jQuery, write a function to create a user object from the form input


// in jQuery, write a function to update the seat assignment class when a seat is reserved
// grab the seat number when it is selected

// in jQuery, write a confirmation message that replaces the form

// BONUS
// =====
// + display user info on hover


  // $($seats).click(function(){
  //   if ()$(this).hasClass("selected")){
  //     alert("This is already taken.");
  //   }
  // })



});
