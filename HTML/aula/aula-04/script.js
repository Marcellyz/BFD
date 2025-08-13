var num01 = document.getElementById("num01").value;
var num02 = document.getElementById("num01").value;

var n1 = Number(num01);
var n2 = Number(num02);

var res = document.getElementById("res").value;

function calcularIdade() {
  if (n1 > n2) {
    var total = (res.textContent = "O numero maior é o " + n1);
  } else {
    var total = (res.textContent = "O numero maior é o " + n2);
  }

  console.log(total);
}
