let rc = 5,
  urc = 1,
  count_Timer = document.getElementById("countTimer"),
  count_Timer_success = document.getElementById("sucessDownloading"),
  cad = $("#closeAddbanner");
$(count_Timer).parent().css("display", "none");
$("[data-download-target]").click(function () {
  $(":button").prop("disabled", true);
  setTimeout(() => {
    let ts = setInterval(timeFunction, 1000);
    $(count_Timer).parent().css("display", "flex");
    $(count_Timer).css("display", "block");
    $(cad).css("display", "none");
    $(count_Timer_success).css("display", "none");
    function timeFunction() {
      let reversedTimer = rc - urc;
      count_Timer.innerHTML =
        "Your File will Start Downloading in " + "0" + reversedTimer + "s";
      urc++;
      if (urc == 6) {
        myStopFunction();
      }
    }
    var targetValue = $(this).data("download-target");
    let targetAnchor = document.getElementById(targetValue);
    function myStopFunction() {
      clearInterval(ts);
      targetAnchor.click();
      setTimeout(() => {
        setTimeout(() => {
          count_Timer.innerHTML = "Your File will Start Downloading in 05s";
          $(count_Timer).css("display", "none");
          $(count_Timer_success).css("display", "block");
          $(":button").prop("disabled", false);
          $(cad).css("display", "block");
          setTimeout(() => {
            count_Timer_success.innerHTML = "Your File is Downloaded";
          }, 10000);
        }, 600);
        urc = 1;
      }, 280);
    }
  }, 600);
});
$(cad).click(function () {
  $(count_Timer).parent().css("display", "none");
  count_Timer_success.innerHTML = "Your File is Downloading";
});

