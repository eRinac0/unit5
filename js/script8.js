console.log("Завдання 8");

let array = [
    [3, -2, 4, 0, -1],
    [1, 5, -3, 2, 6],
    [-4, 0, -2, 7, 10],
    [8, -9, 1, -6, 3],
    [-7, 2, 0, 9, -5]
  ];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i][i] > 0) {
      array[i][i] = 1;
    } else if (array[i][i] < 0) {
      array[i][i] = 0;
    }
  }
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++)
     {
      console.log(array[i][j])+" ";
    }

}