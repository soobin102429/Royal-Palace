$(".menu-btn").click( function() {
    $(".header-responsive").css("display", "block");
    $(".header").css("display", "none");
});

$(".cancel-btn").click( function() {
    $(".header-responsive").css("display", "none");
    $(".header").css("display", "block");
});

$(".menu-responsive ul li a").click( function() {
    $(".header-responsive").css("display", "none");
    $(".header").css("display", "block");
});

