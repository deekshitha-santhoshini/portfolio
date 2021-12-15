// JavaScript Document


$(function() {
    var header = $(".my-nav");
    $(window).scroll(function() {
        if ($(window).scrollTop() >= $(window).height()) {
            header.removeClass('my-nav').addClass("nav-alt");
        } else {
            header.removeClass("nav-alt").addClass('my-nav');
        }
    });
});