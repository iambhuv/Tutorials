const header = document.getElementById("header");
const navToggler = document.getElementById("navToggler");
const navList = document.getElementById("navList")

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
})


navToggler.addEventListener("click", () => {
    navToggler.classList.toggle("active")
    navList.classList.toggle("active")
})


/////////////// Typed.Js Initialisation ///////////////
const typeText = document.getElementById("typeText")
var typed = new Typed(typeText, {
    strings: ['Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.', 'Youtuber.', 'Coder.', 'Freelancer.', 'Designer.'],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true,
    loopCount: Infinity,
});