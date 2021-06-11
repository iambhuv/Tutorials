const cards = [
    "Guess",
    "Hello",
    "Hii",
    "World",
    "Correct",
    "Coding Wala",
    "Hello",
    "Coding Wala",
    "Guess",
    "Correct",
    "Hii",
    "World",
]
const container = document.getElementById("container");

let clickedTime = 1;
let clickedCardID;
let currId;

function shuffle(array) {
    var currInd = array.length,
        randomIndex;

    while (0 !== currInd) {
        randomIndex = Math.floor(Math.random * currInd);
        currInd--;

        [array[currInd], array[randomIndex] = [
            array[randomIndex], array[currInd]
        ]]
    }

    return array;
}

const shuffled_cards = cards
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)

console.log(shuffled_cards);

// while (shuffled_cards.length <= cards.length){

// }

const getId = (id) => {
    if (currId !== id) {
        clickedCardID = id;
    }
    currId = id;
}

const clicking = (para) => {
    clickedTime++;
    check();
    para.classList.add("clicked")
    para.hidden = true;
    console.log(clickedCardID);
    if(clickedCardID !== currId){
        alert("hello")
    }
}




shuffled_cards.forEach(elem => {
    const card = document.createElement("h1");
    card.classList.add("card")
    card.setAttribute("id", elem)
    card.setAttribute("onClick", "getId(this.id)")
    card.innerHTML = elem;
    container.append(card)
    card.addEventListener("click", ()=> clicking(card))
})




const check = () => {
    if (clickedTime >= 2) {
        clickedTime = 0;
        document.querySelectorAll('.clicked').forEach(e => e.classList.remove("clicked"));
    }
}