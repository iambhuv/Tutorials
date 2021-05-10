const navBar = document.querySelector('#navBar');
const navItem = document.querySelector('#navItems');
const mobNavAdd = document.querySelector('#mobNavAdd');
const mobNavRemove = document.querySelector('#mobNavRemove');
const gallery = document.querySelector('#gallery');
const Hero = document.querySelector('#hero');
const navLink = document.querySelector('.navLink');
const contactPopupToggle = document.querySelector('#contactPopupToggle');
const contactPopup = document.querySelector('#contactPopup');
const contactForm = document.querySelector('#contactForm');
const CPBG = document.querySelector('#CPBG');
const contactPopupClose = document.querySelector('#contactPopupClose');


mobNavAdd.addEventListener("click", ()=>{
    navItem.classList.toggle('navItemActive');
});
mobNavRemove.addEventListener("click", ()=>{
    navItem.classList.toggle('navItemActive');
});

window.onscroll = function(){
    let top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 300) {
        navBar.classList.add("navBar--scrolled");
    } else if(top == 0) {
        navBar.classList.remove("navBar--scrolled");
    }
};

$(document).on('click', '#navBar ul li a', function(){
    $(this).addClass('activeNav').siblings().removeClass('activeNav')
});

$('.navList a').click(function(){
    navItem.classList.toggle('navItemActive');
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();


$('.page-section').each(function(i) {
    if ($(this).position().top <= scrollDistance) {
            $('#navBar .navList a.activeNav').removeClass('activeNav');
            $('#navBar .navList a').eq(i).addClass('activeNav');
    }
});
}).scroll();




contactPopupToggle.addEventListener("click", ()=>{
    contactPopup.classList.add('cpActive');
    $('body').css('overflow', 'hidden');
    navBar.style.zIndex = "-1";
    CPBG.classList.add('CPBGactive');
    contactForm.classList.add('contactFromActive');
});
contactPopupClose.addEventListener("click", ()=>{
    contactPopup.classList.remove('cpActive');
    $('body').css('overflow', 'unset');
    navBar.style.zIndex = "1000";
    CPBG.classList.remove('CPBGactive');
    contactForm.classList.remove('contactFromActive');
});



const success = document.getElementById('success');
const CFSubmit = document.querySelector('#CFSubmit');

CFSubmit.addEventListener("click", function(){
    success.classList.addClass('success')
});

const show__More = $('#show__More');
const showMoreLoader = $('#showMoreLoader');
const d__inlineBlock = $('.d__inlineBlock');
let d__FlexBox = 1;
const FrstPrjctCrdGrp = $('#firstProjectCard__Group:nth-child(1)');
let FPCG__ID = 1;


$(FrstPrjctCrdGrp).css("display", "flex");
$(showMoreLoader).css("display", "none");

function showMoreFunc() {
    $(show__More).css("display", "none");
    $(showMoreLoader).css("display", "block");
    d__FlexBox++;
    setTimeout(() => {
        $(FrstPrjctCrdGrp).siblings(":nth-child("+FPCG__ID+")").addClass("d__FlexBox");
        $(show__More).css("display", "block");
        $(showMoreLoader).css("display", "none");
    }, 600);
}


function showMoreClickFunc(){
    FPCG__ID++;
    showMoreFunc();
}

if (d__inlineBlock.length === d__FlexBox) {
    $(show__More).css("display", "none !important");
}else{
    $(show__More).css("display", "block");
}