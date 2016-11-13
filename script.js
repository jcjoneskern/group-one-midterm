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

//SELECTABLE SEAT FUNCTION

  //THIS FUNCTION ALLOWS YOU TO RESERVE THE SEAT UPON CLICK...SEAT A1-A6
    $("#A1, #A2, #A3, #A4, #A5, #A6").click(function () {
        $(this).css('background', 'goldenrod')
        $(this).css('font-family', 'Cuprum')
        $(this).css("color", " whitesmoke");
        $(this).text("V.I.P: Reserved ");
        $(this).animate({
            borderRadius: "9px"
            , fontSize: "1.5em"
        })
    });

    //THIS FUNCTION TELLS YOU HOW MUCH EACH SEAT IS UPON MOUSEENTER....SEAT A1-A6
       $("#A1, #A2, #A3, #A4, #A5, #A6").mouseenter(function () {
        $(this).text("Cost: $15.00 ");
        $(this).css('background', 'darkgrey');
         $(this).css("color", " green");
        $(this).animate({
            borderRadius: "9px"
            , fontSize: "1.5em"
        })
    });

  //THIS FUNCTION ALLOWS YOU TO RESERVE THE SEAT UPON CLICK...SEAT B1-B6

    $("#B1, #B2, #B3, #B4, #B5, #B6").click(function () {
        $(this).css('background', 'silver')
        $(this).css('font-family', 'Cuprum')
        $(this).css("color", " orangered");
        $(this).text(" Reserved ");
        $(this).animate({
            borderRadius: "9px"
            , fontSize: "1.8em"
        })
    });

    //THIS FUNCTION TELLS YOU HOW MUCH EACH SEAT IS UPON MOUSEENTER....SEAT B1-B6
       $("#B1, #B2, #B3, #B4, #B5, #B6").mouseenter(function () {
        $(this).text("Cost: $10.00 ");
        $(this).css('background', 'darkgrey');
         $(this).css("color", " green");
        $(this).animate({
            borderRadius: "9px"
            , fontSize: "1.5em"
        })
    });

  //THIS FUNCTION ALLOWS YOU TO RESERVE THE SEAT UPON CLICK...SEAT C1-C6
    $("#C1, #C2, #C3, #C4, #C5, #C6").click(function () {
        $(this).css('background', 'brown')
        $(this).css('font-family', 'Cuprum')
        $(this).css("color", " orangered");
        $(this).text(" Reserved ");
        $(this).animate({
            borderRadius: "9px"
            , fontSize: "1.8em"
        })
    });

    //THIS FUNCTION TELLS YOU HOW MUCH EACH SEAT IS UPON MOUSEENTER....SEAT C1-C6
       $("#C1, #C2, #C3, #C4, #C5, #C6").mouseenter(function () {
        $(this).text("Cost: $5.00 ");
        $(this).css('background', 'silver');
         $(this).css("color", " green");
        $(this).animate({
            borderRadius: "9px"
            , fontSize: "1.5em"
        })
    });

  //THIS FUNCTION ALLOWS YOU TO RESERVE THE SEAT UPON CLICK...SEAT C1-C6
    $("#D1, #D2, #D3, #D4, #D5, #D6").click(function () {
        $(this).css('background', 'darkslateblue')
        $(this).css('font-family', 'Cuprum')
        $(this).css("color", " orangered");
        $(this).text(" Reserved ");
        $(this).animate({
            borderRadius: "9px"
            , fontSize: "1.8em"
        })
    });

    //THIS FUNCTION TELLS YOU HOW MUCH EACH SEAT IS UPON MOUSEENTER....SEAT C1-C6
       $("#D1, #D2, #D3, #D4, #D5, #D6").mouseenter(function () {
        $(this).text("Cost: $2.00 ");
        $(this).css('background', 'silver');
         $(this).css("color", " green");
        $(this).animate({
            borderRadius: "9px"
            , fontSize: "1.5em"
        })
    });
});
