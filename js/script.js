$(function() { //equivalent to document.ready
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
       seatNum = event.target.id;
       currentSeat = $(this);
      // $(currentSeat).addClass("active");
   }
   });
   $("#submit").on("click", function() {
     var name = $("#nameField").val();
     reservations.push(
       {name: name,
       number: seatNum}
     );
     $(currentSeat).addClass("reserved").removeClass("available"); //removed active from this, might need to be added back
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
//needs some styling fixes to fit the seats
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
 //this doesn't necessarily need to be implemented with hover, but I think it looks ~fancy~
 $("#selectable").selectable();

 //adding the active class doesn't really do what we want, so we should try to figure out the selectable UI probably
//SELECTABLE SEAT FUNCTION

  //THIS FUNCTION ALLOWS YOU TO RESERVE THE SEAT UPON CLICK...SEAT A1-A6
    // $("#A1, #A2, #A3, #A4, #A5, #A6").click(function () {
        // $(this).css('background', 'goldenrod')
        // $(this).css('font-family', 'Cuprum')
        // $(this).css("color", " whitesmoke");
        // $(this).text("V.I.P");
        // $(this).animate({
        //     borderRadius: "9px"
        //     , fontSize: "1.5em"
        // })
    // });

    //THIS FUNCTION TELLS YOU HOW MUCH EACH SEAT IS UPON MOUSEENTER....SEAT A1-A6
    //    $("#A1, #A2, #A3, #A4, #A5, #A6").mouseenter(function () {
    //     $(this).text("Cost: $15.00 ");
    //     $(this).css('background', 'darkgrey');
    //      $(this).css("color", " green");
    //     $(this).animate({
    //         borderRadius: "9px"
    //         , fontSize: "1.5em"
    //     })
    // });

  //THIS FUNCTION ALLOWS YOU TO RESERVE THE SEAT UPON CLICK...SEAT B1-B6

    // $("#B1, #B2, #B3, #B4, #B5, #B6").click(function () {
        // $(this).css('background', 'silver')
        // $(this).css('font-family', 'Cuprum')
        // $(this).css("color", " orangered");
        // $(this).text("general admission");
        // $(this).animate({
        //     borderRadius: "9px"
        //     , fontSize: "1.8em"
        // })
    // });

    //THIS FUNCTION TELLS YOU HOW MUCH EACH SEAT IS UPON MOUSEENTER....SEAT B1-B6
    //    $("#B1, #B2, #B3, #B4, #B5, #B6").mouseenter(function () {
    //     $(this).text("Cost: $10.00 ");
    //     $(this).css('background', 'darkgrey');
    //      $(this).css("color", " green");
    //     $(this).animate({
    //         borderRadius: "9px"
    //         , fontSize: "1.5em"
    //     })
    // });

  //THIS FUNCTION ALLOWS YOU TO RESERVE THE SEAT UPON CLICK...SEAT C1-C6
    // $("#C1, #C2, #C3, #C4, #C5, #C6").click(function () {
        // $(this).css('background', 'brown')
        // $(this).css('font-family', 'Cuprum')
        // $(this).css("color", " orangered");
        // $(this).text("general admission");
        // $(this).animate({
        //     borderRadius: "9px"
        //     , fontSize: "1.8em"
        // })
    // });

    //THIS FUNCTION TELLS YOU HOW MUCH EACH SEAT IS UPON MOUSEENTER....SEAT C1-C6
    //    $("#C1, #C2, #C3, #C4, #C5, #C6").mouseenter(function () {
    //     $(this).text("Cost: $5.00 ");
    //     $(this).css('background', 'silver');
    //      $(this).css("color", " green");
    //     $(this).animate({
    //         borderRadius: "9px"
    //         , fontSize: "1.5em"
    //     })
    // });

  //THIS FUNCTION ALLOWS YOU TO RESERVE THE SEAT UPON CLICK...SEAT C1-C6
    // $("#D1, #D2, #D3, #D4, #D5, #D6").click(function () {
        // $(this).css('background', 'darkslateblue')
        // $(this).css('font-family', 'Cuprum')
        // $(this).css("color", " orangered");
        // $(this).text("general admission");
        // $(this).animate({
        //     borderRadius: "9px"
        //     , fontSize: "1.8em"
        // })
    // });

    //THIS FUNCTION TELLS YOU HOW MUCH EACH SEAT IS UPON MOUSEENTER....SEAT C1-C6
    //  $("#D1, #D2, #D3, #D4, #D5, #D6").mouseenter(function () {
    //     $(this).text("Cost: $2.00 ");
    //     $(this).css('background', 'silver');
    //      $(this).css("color", " green");
    //     $(this).animate({
    //         borderRadius: "9px"
    //         , fontSize: "1.5em"
    //     })
    // });
});

//reserving the seat should happen when they submit the form, not whent they click the seat
//updated the text to reflect this
//we can adjust things later but for now the animations and price are commented out
//it was distracting and I don't think it was working the way we wanted
