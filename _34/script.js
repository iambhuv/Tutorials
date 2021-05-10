const mainBox = document.getElementById("mainBox");

mainBox.addEventListener("mousedown", (event) =>{
    // let x = 
    // let y = event.clientY;
    // this.addEventListener("mousemove", ()=>{
    //     console.log("mouse moved after clicking at x: "+x + "and y: "+y )
    // });
    const selRect = document.createElement('div');
    selRect.classList.add("select__Rectangle")
    selRect.style.top = event.clientY+"px";
    selRect.style.left = event.clientX+"px";
    this.addEventListener("mousemove", ()=>{
        // selRect.style.height = event.clientY-selRect.style.top+"px";
        console.log(event.clientY-selRect.style.top);
        // selRect.style.width = event.clientX-selRect.style.left+"px";
        console.log(event.clientX-selRect.style.left);
    })
    mainBox.appendChild(selRect)
    this.addEventListener("mouseup", () => {
        this.removeEventListener("mousemove");
        this.addEventListener("mousedown", () =>{
            selRect.remove();
        });
    });
});
// mainBox.addEventListener("mouseup", () =>{});