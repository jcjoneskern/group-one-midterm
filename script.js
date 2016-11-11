$(function() {
  //takes user info and pushes it into an array
  var reservations = [];
  var currentSeat;
  $(".seat").click(seatClick());
  function seatClick() {
    var seatNum;
    $(".seat").on("click",function(event){

      console.log(event.target.className);
      if ($(event.target).hasClass("reserved") === true) {
        $.noop();
      } else {
        $("#thanks").hide();
        $("#form").slideDown().show();
        seatNum = event.target.id;
        currentSeat = $(this);
        console.log(currentSeat);
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
      console.log(currentSeat);
      console.log(reservations);
    });
  }//end of seatClick

});

//unrelated: we could probably just build an if/else statement or something that would prevent the booking option from even becoming available when clicking on reserved seats
//maybe a second array that just holds reserved seats? wasn't there a demo like this...?
