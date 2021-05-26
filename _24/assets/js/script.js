const _userInput = document.getElementById("user__Input"),
  $userSubmit = $("#user__Input__Submit"),
  $_resutBox = document.getElementById("resutBox"),
  toggleMuchLineIndex = $("#toggleMuchLineIndex"),
  user__MuchLineInput = document.getElementById("user__MuchLineInput");
let parsedVal;
let FinalValue = "";
let TableLineValue = 10;
const checkFunction1 = () => {
  parsedVal = parseInt(_userInput.value);
  if (isNaN(parsedVal) || parsedVal == 0) {
    _userInput.value = "";
  } else {
    FinalValue = _userInput.value = Math.floor(_userInput.value);
  }
};
const checkFunction2 = () => {
  parsedVal = parseInt(user__MuchLineInput.value);
  if (isNaN(parsedVal) || parsedVal == 0) {
    user__MuchLineInput.value = "";
  } else {
    TableLineValue = user__MuchLineInput.value = Math.floor(
      user__MuchLineInput.value
    );
  }
};
const printTable = () => {
  if (!FinalValue == "") {
    user__MuchLineInput.value >= 200
      ? alert("Warning : This Can Make Your Device Unresponsive")
      : null;
    let constantValue = FinalValue;
    let muchLineIndex = TableLineValue;
    let num = 1;
    let val = FinalValue;

    const resultArray = [];

    while (val < constantValue * muchLineIndex + 1) {
      resultArray.push(constantValue + " ⨯ " + num + " = " + val);

      num += 1;
      val += constantValue;
    }
    let newResultArray = resultArray.map(mapArrayFunc).join("<br>");

    function mapArrayFunc($_nUm) {
      return $_nUm;
    }
    $_resutBox.innerHTML = `<h2>${newResultArray}</h2>`;
  } else {
    alert("Enter a Value First");
  }
};
$userSubmit.on("click", printTable);
toggleMuchLineIndex.on("click", function () {
  user__MuchLineInput.removeAttribute("hidden");
  toggleMuchLineIndex.attr("hidden", "hidden");
});
$(_userInput).on("keyup", checkFunction1);
$(user__MuchLineInput).on("keyup", checkFunction2);
