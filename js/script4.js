function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
console.log("Завдання 4");
let A,B,sum=0;
do
{
    A= randomInteger(1,19);
    B =randomInteger(1,19);
}while(A>B)
console.log("A=",A);
console.log("B=",B);
for(let i=A;i<=B;i++)
{
    sum+=i;
}
console.log("sum:",sum);
for(let i=A;i<=B;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}