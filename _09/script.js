const mobNavToggle = document.querySelector('#mobNavToggle');
const navItems = document.querySelector('#navItems');

mobNavToggle.addEventListener("click", ()=>{
    navItems.classList.toggle('navItemsActive');
});