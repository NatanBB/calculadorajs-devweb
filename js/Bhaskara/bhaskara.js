function Calcular(){
  
  var valorA = document.querySelector("#a");
  var valorB = document.querySelector("#b");
  var valorC = document.querySelector("#c");
  
  var a = valorA.value;
  var b = valorB.value;
  var c = valorC.value;

  console.log(a);
  console.log(b);
  console.log(c);

  var positivo;
  var negativo;

  var delta = (b * b) - 4 * (a * c);

  document.getElementById("deltaValue").innerHTML=(delta);

  if (delta < 0 ) {
    document.getElementById("textDelta").innerHTML=("A equação não possui raízes")
  } else {
    positivo = (-b + Math.sqrt(delta)) / (2 * a);
    negativo = (-b - Math.sqrt(delta)) / (2 * a);

    document.getElementById("x1Value").innerHTML=("" + positivo + "</br>");
    document.getElementById("x2Value").innerHTML=("" + negativo);
  }
}