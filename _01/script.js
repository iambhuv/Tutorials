// getting reference

const button = document.getElementById('button');
const demoScore = document.getElementById('demoScore');

let score = 0;

button.addEventListener("click", ()=>{
    score++;
    // this will increase the value in score to 1 and keep adding whenever button clicked

    demoScore.innerHTML = "Score : "+ score +"s";
    // this will print score value in the demoscore paragraph
});
