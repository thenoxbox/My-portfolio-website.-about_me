const menu_button = $(".hamburger");
const mobile_menu = $(".mobile-nav")
const everybody = $('body')
const bretheren = $(".bros")
menu_button.click(function () {
    menu_button.toggleClass("is-active"); 
    mobile_menu.toggleClass("is-active");
    everybody.toggleClass("diostoptime");
});

bretheren.click(function () {
    menu_button.toggleClass("is-active"); 
    mobile_menu.toggleClass("is-active");
});