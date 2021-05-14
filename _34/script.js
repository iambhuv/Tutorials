const mainBox = document.getElementById("mainBox");

mainBox.addEventListener("mousedown", (event) =>{
    const selRect = document.createElement('div');
    selRect.classList.add("select__Rectangle")
    selRect.style.top = event.clientY+"px";
    selRect.style.left = event.clientX+"px";
    mainBox.appendChild(selRect)
    setTimeout(() =>{
        selRect.remove();
    }, 600)
});