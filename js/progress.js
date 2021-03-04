//클릭시 progression bar색 채워지고 팝업 띄어짐//
$(".step").click( function() {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
    $("#line-progress").css("width", "3%");
    $(".popupbg-01").css("display","block");
    $(".popup-01").css("display", "block");
    $(".popupbg-02").css("display", "none");
    $(".popup-02").css("display", "none");
    $(".popupbg-03").css("display", "none");
    $(".popup-03").css("display", "none");
    $(".popupbg-04").css("display", "none");
    $(".popup-04").css("display", "none");
    $(".popupbg-05").css("display", "none");
    $(".popup-05").css("display", "none");

});

$(".step02").click( function() {
    $("#line-progress").css("width", "25%"); 
    $(".popupbg-02").css("display","block");
    $(".popup-02").css("display", "block");
    $(".popupbg-01").css("display", "none");
    $(".popup-01").css("display", "none");
    $(".popupbg-03").css("display", "none");
    $(".popup-03").css("display", "none");
    $(".popupbg-04").css("display", "none");
    $(".popup-04").css("display", "none");
    $(".popupbg-05").css("display", "none");
    $(".popup-05").css("display", "none");
   

});

$(".step03").click( function() {
    $("#line-progress").css("width", "50%");
    $(".popupbg-03").css("display","block");
    $(".popup-03").css("display", "block");
    $(".popupbg-01").css("display", "none");
    $(".popup-01").css("display", "none");
    $(".popupbg-02").css("display", "none");
    $(".popup-02").css("display", "none");
    $(".popupbg-04").css("display", "none");
    $(".popup-04").css("display", "none");
    $(".popupbg-05").css("display", "none");
    $(".popup-05").css("display", "none");

});

$(".step04").click( function() {
    $("#line-progress").css("width", "75%");
    $(".popupbg-04").css("display","block");
    $(".popup-04").css("display", "block");
    $(".popupbg-01").css("display", "none");
    $(".popup-01").css("display", "none");
    $(".popupbg-02").css("display", "none");
    $(".popup-02").css("display", "none");
    $(".popupbg-03").css("display", "none");
    $(".popup-03").css("display", "none");
    $(".popupbg-05").css("display", "none");
    $(".popup-05").css("display", "none");
    
});

$(".step05").click( function() {
    $("#line-progress").css("width", "100%");
    $(".popupbg-05").css("display","block");
    $(".popup-05").css("display", "block");
    $(".popupbg-01").css("display", "none");
    $(".popup-01").css("display", "none");
    $(".popupbg-02").css("display", "none");
    $(".popup-02").css("display", "none");
    $(".popupbg-03").css("display", "none");
    $(".popup-03").css("display", "none");
    $(".popupbg-04").css("display", "none");
    $(".popup-04").css("display", "none");
    
});
//클릭시 progression bar색 채워지고 팝업 띄어짐 end//


// popup display none//
$(".popupbg-01").click( function() {
    $(".popupbg-01").css("display", "none");
    $(".popup-01").css("display", "none");
});
$("label").click( function() {
    $(".popupbg-01").css("display", "none");
    $(".popup-01").css("display", "none");
});
$(".popupbg-02").click( function() {
    $(".popupbg-02").css("display", "none");
    $(".popup-02").css("display", "none");
});
$("label").click( function() {
    $(".popupbg-02").css("display", "none");
    $(".popup-02").css("display", "none");
});
$(".popupbg-03").click( function() {
    $(".popupbg-03").css("display", "none");
    $(".popup-03").css("display", "none");
});
$("label").click( function() {
    $(".popupbg-03").css("display", "none");
    $(".popup-03").css("display", "none");
});
$(".popupbg-04").click( function() {
    $(".popupbg-04").css("display", "none");
    $(".popup-04").css("display", "none");
});
$("label").click( function() {
    $(".popupbg-04").css("display", "none");
    $(".popup-04").css("display", "none");
});
$(".popupbg-05").click( function() {
    $(".popupbg-05").css("display", "none");
    $(".popup-05").css("display", "none");
});
$("label").click( function() {
    $(".popupbg-05").css("display", "none");
    $(".popup-05").css("display", "none");
});
// popup display none end//

