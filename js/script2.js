function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  let a = randomInteger(1,9),
    b=randomInteger(1,9),
    c=randomInteger(1,9);
    console.log("Завдання 2");
    console.log("a:",a);
    console.log("b:",b);
    console.log("c:",c);
    console.log("Середнє арифметичне:", (a+b+c)/3);
    document.write("Середнє арифметичне:", (a+b+c)/3);