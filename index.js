const baner = document.querySelector(".baner");
const languages = document.querySelector(".languages");
const skills = document.querySelector(".skills");
const items = document.querySelectorAll(".item");

let skillsPosition = skills.getBoundingClientRect();

$(".banerArrow").on("click", function() {
    $("body, html").animate({
        scrollTop: skillsPosition.top
    }, 2000)
})


let banerHeight =  baner.offsetHeight

window.addEventListener("scroll", function(){
    let scrollYPosition = window.pageYOffset;
    items.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scrollYPosition * speed}px)`;
    });


})
