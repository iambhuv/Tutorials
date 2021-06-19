const search = document.getElementById("search");
const submitBtn = document.getElementById("submitBtn");
const searchHistory = document.querySelector(".searchHistory")
const bg = document.querySelector("#bg")

let sHistory = JSON.parse(localStorage.getItem("searchHistory"));
if (sHistory === null) {
    sHistory = [];
}



let i = 0;


const loadHistory = ()=> sHistory.forEach(e => {
    if (i > 6) {
        console.log("hii");
    } else {
        const searchedQuery = document.createElement("div");
        searchedQuery.classList.add("searchItem");
        searchedQuery.innerHTML = `<i class="far fa-clock"></i>
        <span class="searchedText">${e}</span>`;

        searchHistory.append(searchedQuery)
        
        searchedQuery.addEventListener("click", function(){
            search.value = this.innerText;
            search.blur();
            search.classList.remove("active")
            searchHistory.classList.remove("active")
        });
    }
    i++;
});


loadHistory();


const saveValue = (value) => {
    if (sHistory[0] !== value) {
        sHistory.unshift(value)
    }

    localStorage.setItem("searchHistory", JSON.stringify(sHistory))

    loadHistory();
    
    // location.href = `https://www.google.com/search?q=${value}`

    if (sHistory.length >= 0) {
        search.classList.add("active")
        searchHistory.classList.add("active")
    }
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (search.value !== "") {
        console.log(search.value);

        saveValue(search.value);
    }
})



search.addEventListener("focus", () => {
    if (sHistory.length > 1) {
        search.classList.add("active")
        searchHistory.classList.add("active")
    }
})
bg.addEventListener("click", (e) => {
    search.classList.remove("active")
    searchHistory.classList.remove("active")
})