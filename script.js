$(document).ready(function(){
  // hide the form when loaded
$(function() {
  $('form').hide();
});

// when hovering over a red seat, display a message saying the seat is taken
// needs to be tested after submit is turning class to red
$( ".taken" ).hover(function() {
    $( this ).after( $( "<span>This seat is already taken</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);
  // $($seats).click(function(){
  //   if ()$(this).hasClass("selected")){
  //     alert("This is already taken.");
  //   }
  // })

  var $selectedSeat;
  var $selectedDiv;
  var $form = $('form');
  var $seats = $(".seats");
  var $personObject;
  // var seatArray = [];


  $($seats).on("click", function(){
    if ($(this).hasClass('selected')) {
      // remove selected class
      $(this).removeClass('selected');
      // add selected class
    } else {
        $(this).addClass("selected");

        // save this seat
        $selectedSeat = $(this).html();
        $selectedDiv = $(this);
        console.log($selectedDiv);
    }
    // show the form when an available seat is selected

    $form.show();
  }); // end selection onclick function

var $submit = $('#submit');
$($submit).on("click", function(){
// store user info in array
    var $name = $('#name').val();
    // var $seat = $( this ).val();

    $personObject = {
      name: $name,
      seatID: $selectedSeat
    };

    console.log($personObject);

  // var seatAssignment = $('.seats');
  // need to set variable to id of seat selected and then use that variable below instead of 'this'
      $($selectedDiv).removeClass("selected").removeClass('seats').addClass('takenSeat').addClass('taken');
      $form.replaceWith("<div class='message'> Thank you, " + $name + " we have reserved your spot seat " + $selectedSeat + "!</div>");
  });

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

// in jQuery, write a confirmation message that replaces the form

// BONUS
// =====
// + display user info on hover






});
