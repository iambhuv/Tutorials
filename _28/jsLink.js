const LnK = $("[data-link]");

function goTo($gotoPara){
    location.replace($gotoPara);
}


LnK.on("click", ()=>{
    checkFunc(this);
});

function checkFunc(crtelemE) {
    let rfyrdif = crtelemE.getAttribute("data-link");    
    goTo(rfyrdif);
}
