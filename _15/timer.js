
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
};

const TIME_LIMIT = 1800;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.querySelector(".inner-div").innerHTML = `
  <span id="base-timer-label" class="base-timer__label">Total Time Left: ${formatTime(
    timeLeft
)}</span>
<h2 id="live__Score"></h2>
<h2 class="question">Question Comes Here</h2>
<ul>
    <li>
        <input type="radio" name="answer" id="ans1" class="answer">
        <label for="ans1" id="option1">Answer Option</label>
    </li>
    <li>
        <input type="radio" name="answer" id="ans2" class="answer">
        <label for="ans2" id="option2">Answer Option </label>
    </li>
    <li>
        <input type="radio" name="answer" id="ans3" class="answer">
        <label for="ans3" id="option3">Answer Option</label>
    </li>
    <li>
        <input type="radio" name="answer" id="ans4" class="answer">
        <label for="ans4" id="option4">Answer Option</label>
    </li>
</ul>
<button id="submit">submit</button>
<div id="showScore" class="scoreArea"> </div>
`;

startTimer();


function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById("base-timer-label").innerHTML = "Total Time Left: "+ formatTime(
            timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        if (timeLeft === 0) {
            onTimesUp();
        }
    }, 1000);
}

function onTimesUp() {
    clearInterval(timerInterval);
    document.querySelector(".main-div").style.pointerEvents="none";
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(warning.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(warning.color);
    }
}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}

