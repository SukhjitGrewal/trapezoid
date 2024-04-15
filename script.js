var calculate = document.getElementById("calculate");
var check = "images/check.png";

//Calculate
calculate.addEventListener("click", calcTrapezoid);

function calcTrapezoid() {
  //
  let sideA = +document.getElementById("b1-input").value;
  let sideB = +document.getElementById("b2-input").value;
  let height = +document.getElementById("h-input").value;
  let roundTo = +document.getElementById("round-to").value;

  //
  let area = (1 / 2) * (sideA + sideB) * height;
  //
  document.getElementById("area").innerHTML = `${area.toFixed(roundTo)}`;
  document.getElementById("check1").style.visibility = "visible";
  document.getElementById("check2").style.visibility = "visible";
  document.getElementById("check3").style.visibility = "visible";
  document.getElementById("check4").style.visibility = "visible";
  document.getElementById("b1-input").value = ``;
  document.getElementById("b2-input").value = ``;
  document.getElementById("h-input").value = ``;
  document.getElementById("round-to").value = ``;
}
