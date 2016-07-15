$(document).ready(function(){
  var $seats = $(".seats");
  $($seats).on("click", function(){

    if ($(this).hasClass('selected')) {
      // remove selected class
      $(this).removeClass('selected');
    } else {
        $(this).addClass("selected");

        $(this).change(function() {
          var $selectedSeat = $(this).html();
          console.log($selectedSeat);
        });
        
    }
    // show the form when an available seat is selected
    var $form = $('form');
    $form.show();

  }); // end onclick function

//create array, prepopulate with 3 objects
// var $seatArray = [];

// $seatArray[12] = {
//   name:
// };
// $ function seatAssignment(name, seat) {
//   // this will connect with #name and #seat1...#seat24 from form
//     var seat12 = {
//       this.name: name, 
//       this.seat: seat
//   };

// seatAssignment(Benson, seat13);
//   {
//     name: "Benson",
//     seat: "seat13"
//   };
//   {
//     name: "Karen",
//     seat: "seat14"
//   }



// put in a few taken seats with user info

//

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

var $submit = $('#submit');
$($submit).on("click", function(){
// store user info in array
    var $name = $('#name').val();
    var $seat = $( this ).val();
    console.log($name + $selectedSeat);
	// var seatAssignment = $('.seats');
	// need to set variable to id of seat selected and then use that variable below instead of 'this'
      $(this).removeClass('selected');
      $(this).addClass('taken');
  });

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
