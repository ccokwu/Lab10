$(document).ready(function(){
  var $seats = $(".seats");
  $($seats).on("click", function(){
    $(this).addClass("taken");
  });

  // $($seats).on("mouseenter", function(){
  //   $(this).addClass(.taken);
  // })
});
