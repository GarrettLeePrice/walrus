$(document).ready(function() {
  $(".clickable").click(function() {
    $("#image-hidden").fadeToggle();
    $("#image-showing").fadeToggle();

  });
    $(".slide").click(function() {
    $("#fight-slide").slideDown();
  });
});
