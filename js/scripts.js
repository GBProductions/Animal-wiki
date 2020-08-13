$(document).ready(function() {
  $("#formOne").change(function(event) {
    event.preventDefault();
    const animals = $("#animals").val();
  // const turtle = $("#turtle").val();

    if (animals === "Turtle") {
      $('#turtle').show();
    } else {
      $('#turtle').hide();
    }  
    if (animals === "Snake") {
      $('#snake').show();
    } else {
      $('#snake').hide();
    }
    if (animals === "Insects") {
      $('#insects').show();
    } else {
      $('#insects').hide();
    }   
  });  
});