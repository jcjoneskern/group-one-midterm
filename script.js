$(function() {
  //takes user info and pushes it into an array
  var reservations = [];
  var currentSeat;
  $(".seat").click(seatClick());
  function seatClick() {
    var seatNum;
    $(".seat").on("click",function(event){
      if ($(event.target).hasClass("reserved") === true) {
        $.noop();
      } else {
        $("#thanks").hide();
        $("#form").slideDown().show();
        seatNum = event.target.id;
        currentSeat = $(this);
    }
    });
    $("#submit").on("click", function() {
      var name = $("#nameField").val();
      reservations.push(
        {name: name,
        number: seatNum}
      );
      $(currentSeat).addClass("reserved");
      $("#nameField").val("");
      $("#thanks").show().html("<p>Thank you for your reservation, "+name+"!");
      $("#form").hide();
    });
  }

    
//    //SELECTABLE SEAT FUNCTION
// $( function() {
//    $( "#selectable" ).selectable();
//  } );