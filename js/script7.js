function randomInteger(min, max) 
{
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
console.log("Завдання 7");

let arr =[];
for (let i = 0; i < 7;i++) {
    let a=0;
    a=randomInteger(1,19);
	arr.push(a);
}
let min=arr[0],max=arr[0];
for (let i = 0; i < 7; i++) {
    console.log(arr[i]);
}

for(let i=0;i<7;i++)
{
    if(min>arr[i])
    {
        min=arr[i];
     
    }
    if (max<arr[i])
     {
      max=arr[i];
  
    }
}    
console.log('Max=',max);
console.log('Min=',min);
let summa=0;
for (let i = 0; i < 7;i++) 
{ 

summa+=arr[i];
}
console.log('Sum=',summa);
console.log('Середнє арифметичне значення=',summa/7)
for(let i=0;i<7;i++)
{
    if (arr[i]%2!=0 ) {
        console.log(arr[i]);
    }
}