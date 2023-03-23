function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
console.log("Завдання 5");
let N =randomInteger(1,7),
i=1,
factorial=1;
console.log(N);

do {
    factorial*=i;
    i++;
} while (i<=N);
console.log(factorial);