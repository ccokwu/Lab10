# Lab10
lab 10 with benson, langner and okwu

Tonight
=======

Karen is working on
+ show and hide the form using jQuery when an available seat is selected
+ set some of the seats to default as taken class using jQuery

Charlie is working on

+ visual design -- using CSS to make it look pretty
+ find curtains and add

Benson is working on

+ adding instructions / key / footer
+ some jQuery -- create user object after filling out form





// Use jQuery hover state
+ when hovering over a red seat, display a message saying the seat is taken
+ when hovering over a blue seat, turn the seat yellow (toggle?)
+ when clicking the yellow seat to select, make the form appear


// in jQuery, write a function to create a user object from the form input

// in jQuery, write a function to update the seat assignment class when a seat is reserved

// in jQuery, write a function to show the form when an available seat is selected

// in jQuery, write a confirmation message that replaces the form

// style the user input form in CSS

// in HTML, write instructions
+ don't forget to design the key
+ paragraph to explain how to use the form/site/whatever

// in HTML, get appropriate image for page


BONUS
=====
+ display user info on hover

+ refactor code / DRY


DONEish
=======
+ Link in Bootstrap to HTML, which includes jQuery
+ Create 24 boxes in HTML
+ added styles for red / blue / yellow boxes to reflect status
+ basic HTML form layout w/ submit button that triggers a function


// List of CSS classes and IDs for all elements

div class = "allSeats"
div class = "seats" (applied to each individual seat)

    id = "seat1"
    id = "seat2"
    ...
    id = "seat24"

seat class = "taken"
     class = "available"
     class = "selected"

form id = "form"

input id = "name"
      id = "creditCard"
      id = "submit"

p/div id = "confirmation"
  div id = "key"

h1 id = "title"

img id = "image"
    id = "stage"
