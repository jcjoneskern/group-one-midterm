$(function() { //equivalent to document.ready
$("#selectable").selectable();

 var reservations = [];
 var currentSeat;
 $(".seat").click(seatClick());
//takes user info and pushes it into an array
 function seatClick() {
   var seatNum;
   $(".seat").on("click",function(event){
     if ($(event.target).hasClass("reserved") === true) {
       $.noop();
     } else {
       $("#thanks").hide();
       $("#form").slideDown().show();
       currentSeat = this;
       seatNum = currentSeat.id;
       console.log(seatNum);
   }
   });
   $("#submit").on("click", function() {
     var name = $("#nameField").val();
     reservations.push(
       {name: name,
       number: seatNum}
     );
     $(currentSeat).addClass("reserved").removeClass("available");
     $(currentSeat).text("Reserved");
     $("#nameField").val("");
     $("#thanks").show().html("<p>Thank you for your reservation, "+name+"!");
     $("#form").hide();
     console.log(reservations);
   });
 } //end seatclick function

//the below code only applies to unreserved seats
//hover with price information for VIP seats
 $(".vip").hover(
  function() {
    if ($(event.target).hasClass("reserved") === true) {
      $.noop();
    } else {
   $(this).append("<span><p>VIP $25</p></span>");
  }
  }, function() {
   $(this).find("span:last").remove();
 });
//hover with price info for other seats
 $(".available").hover(
  function() {
    if ($(event.target).hasClass("reserved") === true || $(event.target).hasClass("vip") === true) {
      $.noop();
    } else {
   $(this).append("<span><p>General Admission $10</p></span>");
  }
  }, function() {
   $(this).find("span:last").remove();
 });
 //end price info
 });
