const baner = document.querySelector(".baner");
const languages = document.querySelector(".languages");
const skills = document.querySelector(".skills");
const items = document.querySelectorAll(".item");
const contact = document.querySelector(".contact");
const fab = document.querySelectorAll(".fab");

let skillsPosition = skills.getBoundingClientRect();

let contactPosition = contact.getBoundingClientRect();

$(".banerArrow").on("click", function() {
    $("body, html").animate({
        scrollTop: skillsPosition.top
    }, 1000)
});

$(".skillsArrow").on("click", function() {
    $("body, html").animate({
        scrollTop: contactPosition.top
    }, 1000)
});

$("button").on("click", function() {
    $("body, html").animate({
        scrollTop: contactPosition.top
    }, 1000)
});


$(window).on("scroll", function () {

if($(window).scrollTop() > skillsPosition.top / 3){
    $(".fab").addClass("active");
    $(".skillsH1").addClass("activeH1");
}
})


