function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  let r=randomInteger(1,9);
  let h = randomInteger(1,9);
  let pi =3.14;
  let S=2*pi*r*(r+h),V=pi*r**2*h;
  console.log("Завдання 3");
  console.log('S=',S);
  document.write('S=',S);
  console.log('V=',V);
  document.write(' V=',V);