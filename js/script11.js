let number1=10;
let number2=5;

function Add(number1,number2){
    return number1+number2;
}
function Sub(number1,number2){
        return number1-number2;
}
    
function Mul(number1,number2){
        return number1*number2;
}
function Div(number1,number2){
    if(number1 !=0 && number2!=0){
    return number1/number2;
    }
    else{
        alert("Помилка, не можна ділити на 0");
    }
}
function div_W_rem(number1,number2){
    if(number1 !=0 && number2!=0){
        return number1%number2;
        }
        else{
            alert("Помилка, не можна ділити на 0");
        }
    }
function funct1()
{
        document.getElementById("number1").innerHTML ="Значення першого числа "+ number1;
        document.getElementById("number2").innerHTML ="Значення другого числа "+ number2;
        document.getElementById("add").innerHTML ="Додавання:"+ Add(number1,number2);
        document.getElementById("sub").innerHTML ="Віднімання:"+ Sub(number1,number2);
        document.getElementById("mul").innerHTML ="Множення: "+ Mul(number1,number2);
        document.getElementById("div").innerHTML ="Ділення:"+Div(number1,number2);
        document.getElementById("div_W_rem").innerHTML ="Остача від ділення:"+ div_W_rem(number1,number2);



}
