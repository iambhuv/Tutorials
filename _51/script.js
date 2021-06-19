const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("secr");

hour.addEventListener("change", ()=> {
    if (hour.value < 10) {
        hour.value = 0+hour.value
    }
})
min.addEventListener("change", ()=> {
    if (min.value < 10) {
        min.value = 0+min.value
    }
})