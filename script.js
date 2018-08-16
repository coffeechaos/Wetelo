/*SLIDE_MENU>>>*/
$(function() {
  $('.menu__open').on('click', function() {
    $('.menu').toggleClass('menu__opened');
  });
  $('.menu__close').on('click', function() {
    $('.menu__open').click();
  });
});

/*ANIMATION FOR SECTIONS>>>*/
/*$(document).ready(function () {
    var url = document.location.toString();
    $("a").filter(function () {
        return url.indexOf(this.href) != -1;
    }).addClass("Current");
});*/



