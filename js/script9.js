console.log("Завдання 9");
function Add(num1,num2){
return num1+num2;
}
function Sub(num1,num2){
    return num1+num2;
}

function Mul(num1,num2){
    return num1*num2;
}
function Div(num1,num2){
if(num1 !=0 && num2!=0){
return num1/num2;
}
else{
    alert("Помилка, не можна ділити на 0");
}
}
 let op; 
 function func() {
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch (op) {
      case '+':
        result = Add(num1,num2);
        break;
      case '-':
        result = Sub(num1,num2);
        break;
      case '*':
        result = Mul(num1,num2);
        break;
      case '/':
        result = Div(num1,num2);
        break;
    }
    document.getElementById("result").innerHTML = result;
  }
  