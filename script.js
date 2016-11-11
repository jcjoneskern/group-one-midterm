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
  }

//THIS "SHOULD" CHECK THE HOW MAMY SEATS ARE AVAILABLE 
function Theatre( seats, cost){
    this.seats = seats;
    this.cost = cost;
    this.checkAvailability = function(){
        return.this.seats - this.cost;
    };
}

var thetroit = new Theatre(3, 8);

var details = Theatre.seats + ": seats available";
details += Theatre.checkAvailability();
var elTheatre = document.getElementById("form");
elTheatre.textContent = details;