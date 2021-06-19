const wrapper = document.getElementById("wrapper");

wrapper.addEventListener("dblclick", (e)=> {
    const like = document.createElement("span");


    like.classList.add("like");

    like.style.left = e.clientX - (e.clientX - e.offsetX) + "px";
    like.style.top = e.clientY - (e.clientY - e.offsetY) + "px";

    wrapper.append(like)

    setTimeout(() => {
        like.remove();
    }, 1250);
})