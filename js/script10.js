console.log("Завдання 10");
function sign(num) {
    let result1;
    if (num>0) {
        result1 ="Число додатне";
            }
        else if(num<0){
            result1 ="Число від'ємне";
        }
        else if(num==0){
            result1 ="Це 0";
        }
        return result1;
}
function simple(num) {
    let result2;
    if( num <= 1 )
    return result2 = "Число не  просте";
  for( i = 2; i * i <= num; i ++)
  { 
      if( num % i == 0 ) 
      return result2 = "Число не  просте";
  }
  return  result2 = "Число просте";


}
function division(num) {
    let result3;
    if (num%2==0) {
        result3 ="Число ділится без залишку на 2";
        if (num%5==0) {
            result3 ="Число ділится без залишку на 2,5";
            if(num%3==0){
                result3 ="Число ділится без залишку на 2,5,3";
                if (num%6==0) {
                    result3 ="Число ділится без залишку на 2,5,3,6";
                    if(num%9==0){
                         result3 ="Число ділится без залишку на 2,5,3,6,9";
                    }
                }
            }
        }
    }
    else {
        result3 ="Число не ділится без залишку на заданні числа";

    }
    return result3;
}
function fun(){
let num = Number(document.getElementById("num").value);

    
    document.getElementById("sign").innerHTML =sign(num);
    document.getElementById("simple").innerHTML =simple(num);
    document.getElementById("division").innerHTML =division(num);
}
