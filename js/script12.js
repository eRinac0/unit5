
function draw()
{
    let side1 = Number(document.getElementById("side1").value);
    let side2 = Number(document.getElementById("side2").value);
let rectangle2 = ""; 
for (let i = 0; i < side2; i++) {
  for (let j = 0; j < side1; j++) {
    if (i == 0 || i == side2 - 1 || j == 0 || j == side1 - 1) {
      rectangle2 += "*";
    } else {
      rectangle2 += '&nbsp;&nbsp;';

    }
  }
  rectangle2 += "<br>";
}
document.getElementById("rectangle").innerHTML =rectangle2;

}
