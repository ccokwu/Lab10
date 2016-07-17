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
  var $seatArray = [
    {
      name: 'Jeseekia',
      seatID: 1
    }

  ];
  $($(seat1)).addClass("taken");


  var $selectedSeat;
  var $selectedDiv;
  var $form = $('form');
  var $seats = $(".seats");
  var $personObject;
  var $popUp = $('<div id="popUp"></div>');  // used for confirmation message background
  var $confirmationMessage = $("<p></p>");  // used for confirmation message container
  var $popUpButton = $("<button>OK</button>"); // button to encourage people to click the popup to dismiss

// Create an empty paragraph on the pop up
$popUp.append($confirmationMessage);

// Create a button on the pop up
$popUp.append($popUpButton);

// Using jQuery, create the popUp after document loads -- will show it later
$("body").append($popUp);





  $($seats).on("click", function(){
    if ($(this).hasClass('selected')) {
      // remove selected class
      $(this).removeClass('selected');
      // add selected class
    } else if ($(this).hasClass('taken')) {
      // display an error message if red
        alert('Sorry, this seat is reserved. Please select a different seat.');

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
    // $seatArray[$selectedSeat-1] = {$name, $selectedSeat};
    $personObject.name = $name;
    console.log($personObject);
    // push personObject to seatArray
    $seatArray.push($personObject);
    // console.log($personObject.seatID);
    console.log('person object: '+ $personObject);
    console.log('seat array: '+ $seatArray);


  // var seatAssignment = $('.seats');
  // need to set variable to id of seat selected and then use that variable below instead of 'this'
      $($selectedDiv).removeClass("selected").removeClass('seats').addClass('takenSeat').addClass('taken');

      // show the pop-up window
      $popUp.show();

      // add text to the confirmationMessage empty paragraph
      $confirmationMessage.text("Thank you, " + $name + ". We have reserved your spot for seat " + $selectedSeat + "!")

      // When the pop up is clicked
      $popUp.click(function(){
        //Hide the pop up
        $popUp.hide();
      });

      // preserving the next line down for historical purposes -- in the process of using a pop up instead
      // $form.replaceWith("<div class='message'> Thank you, " + $name + ". We have reserved your spot for seat " + $selectedSeat + "!</div>");
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
