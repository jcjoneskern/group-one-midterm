$(function() {
  //takes user info and pushes it into an array
  var reservations = [];
  $(".seat").click(seatClick());
  function seatClick() {
    var seatNum;
    $(".seat").on("click",function(event){
      $("#thanks").hide();
      $("#form").slideDown().show();
      seatNum = event.target.id;
    });
    $("#submit").on("click", function() {
      var name = $("#nameField").val();
      reservations.push(
        {name: name,
        number: seatNum}
      );
      $("#nameField").val("");
      $("#thanks").show().html("<p>Thank you for your reservation, "+name+"!");
      $("#form").hide();
      console.log(reservations);
    });
  }//end of seatClick

});

//unrelated: we could probably just build an if/else statement or something that would prevent the booking option from even becoming available when clicking on reserved seats
//maybe a second array that just holds reserved seats? wasn't there a demo like this...?
