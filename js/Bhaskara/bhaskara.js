function Calcular(){
  
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;

  var positivo;
  var negativo;

  var delta = (b * b) - 4 * (a * c);


if (delta < 0 ) {
    document.getElementById("text").innerHTML=("<p>A equação não possui raízes</p>")
  } else {
    positivo = (-b + Math.sqrt(delta)) / (2 * a);
    negativo = (-b - Math.sqrt(delta)) / (2 * a);

    document.getElementById("text").innerHTML=(`<p>x1: ${positivo} x2: ${negativo} </p>`);
  }
}