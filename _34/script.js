const body = document.body;

body.addEventListener("contextmenu", (e) => {
  const contextMenu = document.querySelector(".contextmenu")
  e.preventDefault();

  if (contextMenu !== null) {
    contextMenu.remove();
  }
  
  console.log(e);

  const customMenu = document.createElement("div");
  customMenu.classList.add("contextmenu");
  customMenu.innerHTML = `<span class="title">Custom Menu</span>
  <div class="separator"></div>
  <div class="menu-navs">
    <button>Button 1</button>
    <button>Button 1</button>
    <button>Button 1</button>
  </div>
  <div class="separator"></div>
  <div class="menu-navs">
    <button>Button 4</button>
  </div>`;

  customMenu.style.left = e.clientX + "px";
  customMenu.style.top = e.clientY + "px";

  body.prepend(customMenu);
});
