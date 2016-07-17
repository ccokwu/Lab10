$(document).ready(function(){
  // hide the form when loaded
$(function() {
  $('form').hide();
});

// when hovering over a red seat, display a message saying the seat is taken
// needs to be tested after submit is turning class to red
$( ".taken" ).hover(function() {
    $(this).after( $( "<span>This seat is already reserved. Please select another one.</span>" ) );
  }, function() {
    $(this).find( "span:last" ).remove();
  }
);

  var $seatArray = [
    {
      name: 'Jeseekia',
      seatID: 1
    }

  ];
  $($(seat1)).removeClass("selected").addClass('takenSeat').addClass('taken');


  var $selectedSeat;
  var $selectedDiv;

  // make an array of selected seats
  var $selectedSeatArr = [];
  // and an array of the divs
  var $selectedDivArr = [];

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

// add keypress to also trigger the following function
// $($'#name').keypress();

  $($seats).on("click", function(){

    if ($(this).hasClass('selected')) {
      // remove selected class
      $(this).removeClass('selected');
      // add selected class
    } else if ($(this).hasClass('taken')) {
      // display an error message if red
      // show the pop-up window
      $popUp.show();
      // add text to the confirmationMessage empty paragraph
      $confirmationMessage.text("Sorry, this seat is taken. Please select a different seat.")

      // When the pop up is clicked
      $popUp.click(function(){
        //Hide the pop up
        $popUp.hide();
      }); //closing pop up function

        // alert('Sorry, this seat is reserved. Please select a different seat.');

    } else {

        $(this).addClass("selected");
        // save this seat

          // add all selected seats, not just this one

              // do a for each div
            $('div.selected').each(function() {
              // make an element for the html and the div
              var $htmlEl = $('div').html;
              var $divEl = $('div');
              // push html element into selectedSeat array
              $selectedSeatArr.push($htmlEl);
              // push div element into selectedDiv array
              $selectedDivArr.push($divEl);
// console.log to show that we've got an array [first selected seat, second selected seat, ...] ditto on div
  // and it's not working yet
              console.log($selectedSeat, $selectedDiv);
            });
    // show the form when an available seat is selected
    $form.show();}
  }); // end selection onclick function

var $submit = $('#submit');
$($submit).on("click", function(){
// store user info in array
    var $name = $('#name').val();
// add object for each selected seat, not just  one
    $personObject = {
      name: $name,
      seatID: $selectedSeat
    };
    $personObject.name = $name;
// make an object for each item in array selectedSeat with same name
  for(i=0; i < $selectedSeatArr.length; i++) {
    $selectedSeat = [$selectedSeatArr[i]-1];
    $personObject.seatID = $selectedSeat;
    // push personObject to seatArray
    $seatArray.push($personObject);
    // console.log($personObject.seatID);
    console.log('person object: '+ $personObject);
    console.log('seat array: '+ $seatArray);

  // var seatAssignment = $('.seats');
  // need to set variable to id of seat selected and then use that variable below instead of 'this'
      $($selectedDiv).removeClass("selected").removeClass('seats').addClass('takenSeat').addClass('taken');
}; // end of for loop


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
// BONUS
// =====
// + display user info on hover






});
