$(window).scroll(function() {
    if ($("#menu").offset().top > 500) {
        $("#menu").addClass("nav-second");
        $(".text-header").addClass("text-scroll");
    } else {
        $("#menu").removeClass("nav-second");
        $(".text-header").removeClass("text-scroll")
    }
});