$(document).ready(function(){
  var $seats = $(".seats");
  $($seats).on("click", function(){
    $(this).addClass("selected");
  });
  //
  // $($seats).on("mouseenter", function(){
  //   $(this).addClass("selected");
  // });
  //
  // $($seats).on("mouseleave",function(){
  //   $(this).removeClass("selected");
  // });

  // $($seats).on("keydown", function(){
  //   $(this).addClass("selected");
  // });







  // $($seats).on("mouseenter", function(){
  //   $(this).addClass(.taken);
  // })
});
