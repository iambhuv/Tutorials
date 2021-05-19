const mainBox = document.getElementById("mainBox");

const mainFunc = (event) =>{
    const selRect = document.createElement('div');
    selRect.classList.add("select__Rectangle")
    selRect.style.top = event.clientY+"px";
    selRect.style.left = event.clientX+"px";
    mainBox.appendChild(selRect)
    setTimeout(() =>{
        selRect.remove();
    }, 600)
    selRect.addEventListener("click", () =>{
        alert("rectangle Clicked")
    })
}

mainBox.addEventListener("mousedown", mainFunc, false);