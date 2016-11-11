//push form info into an array
//clicking on seat brings up form
$(function() {
  var reservations = [];
  $(".seat").click(seatClick());

  function seatClick() {
    var seatNum;
    $(".seat").on("click",function(event){
      $("#form").slideDown();
      seatNum = event.target.id;
      console.log(seatNum);
    });
    $("#submit").on("click", function() {
      var name = $("#nameField").val();
      console.log(name);
      reservations.push(
        {name: name,
        number: seatNum}
      );
      // $("#form").html("<p>Thank you for your reservation, "+name+"!</p>")
      //clicking a new seat doesn't bring back the form so this is commented out for now
    });
  }
  //needs something to prevent you from changing your seat while reserving
});

//unrelated: we could probably just build an if/else statement or something that would prevent the booking option from even becoming available when clicking on reserved seats
//maybe a second array that just holds reserved seats? wasn't there a demo like this...?
