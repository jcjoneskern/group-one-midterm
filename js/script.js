$(function() { //equivalent to document.ready

      $("#slides").slidesjs({
     navigation: {
      active: false,
        // [boolean] Generates next and previous buttons.
        // You can set to false and use your own buttons.
        // User defined buttons must have the following:
        // previous button: class="slidesjs-previous slidesjs-navigation"
        // next button: class="slidesjs-next slidesjs-navigation"
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    },

      pagination: {
      active: false,
        // [boolean] Create pagination items.
        // You cannot use your own pagination. Sorry.
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    },
  play: {
      active: false,
      auto: true,
      interval: 4000,
      swap: true,
      pauseOnHover: true,
      restartDelay: 2500

   }


    });


$("#selectable li").on("click", function() {
  if ($(this).hasClass("available") === true) {
  $(this).toggleClass("active").siblings().removeClass("active");
  }
});

 var reservations = [];
 var currentSeat;
 $(".seat").click(seatClick());
//takes user info and pushes it into an array
 function seatClick() {
   var seatNum;
   $(".seat").on("click",function(event){
     if ($(this).hasClass("available") === true) {
       $("#thanks").hide();
       $("form").slideDown().show();
       currentSeat = this;
       seatNum = currentSeat.id;
   }
   });
   $("form").on("submit", function(event) {
     event.preventDefault();
     var name = $("#nameField").val();
     reservations.push(
       {name: name,
       number: seatNum}
     ); //creates array in case you wanted to check total # of reservations
     $(currentSeat).addClass("reserved").removeClass("available active");
     $(currentSeat).text("Reserved");
     $(currentSeat).data({name: name}); //associates name with seat
     $("#nameField").val("");
     $("#thanks").show().html("<p>Thank you for your reservation, "+name+"!");
     $("form").hide();
   });
 } //end seatclick function

//hover with price information for VIP seats
 $(".vip").hover(
  function() {
    if ($(event.target).hasClass("reserved") === true) {
      $.noop();
    } else {
   $(this).append("<span></br>VIP $25</span>");
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
   $(this).append("<span></br>General Admission $10</span>");
  }
  }, function() {
   $(this).find("span:last").remove();
 });
 //end price info
 //hover with reserved info
 $(".seat").hover(
  function() {
    if ($(event.target).hasClass("reserved") === true) {
      $(this).append("<span></br>by: "+$(this).data().name+"</span>");
    } else {
   $.noop;
  }
  }, function() {
   $(this).find("span:last").remove();
 });


});
