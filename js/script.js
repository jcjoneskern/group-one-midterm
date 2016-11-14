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
      active: true,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
      effect: "slide",
        // [string] Can be either "slide" or "fade".
      interval: 5000,
        // [number] Time spent on each slide in milliseconds.
      auto: false,
        // [boolean] Start playing the slideshow on load.
      swap: true,
        // [boolean] show/hide stop and play buttons
      pauseOnHover: false,
        // [boolean] pause a playing slideshow on hover
      restartDelay: 2500
        // [number] restart delay on inactive slideshow
    },
          
   
    

    });
      
    
    
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

   
    