//Прямокутник
let width = 20;
let height = 5; 
let rectangle = ""; 
for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    if (i == 0 || i == height - 1 || j == 0 || j == width - 1) {
      rectangle += "*";
    } else {
      rectangle += '&nbsp;&nbsp;';

    }
  }
  rectangle += "<br>";
}
document.write(rectangle); 
//Прямокутний трикутник
let rows1 = 10; 
let triangle1 = ''; 
 
for (let i = 0; i < rows1; i++) { 
  for (let j = 0; j <= i; j++) { 
    triangle1 += '*&nbsp;'; 
  } 
  triangle1 += '<br>'; 
} 
document.write(triangle1);
//Рівносторонній трикутник
let rows2 = 11; 
let triangle2 = ''; 
 
for (let i = 0; i < rows2; i++) { 
  for (let j = 0; j < rows2 - i; j++) { 
    triangle2 += '&nbsp;&nbsp;'; 
  } 
  for (let k = 0; k <= i; k++) { 
    triangle2 += '*&nbsp;&nbsp;'; 
  } 
  triangle2 += '<br>'; 
} 
 
document.write(triangle2);
//Ромб
let n = 7;
for (let i = 1; i <= n; i++) {
  let romb = '';
  for (let j = 1; j <= n - i; j++) {
    romb += '&nbsp;';
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    romb += '*';
  }
  document.write(romb + '<br>');
}
for (let i = n - 1; i >= 1; i--) {
  let romb = '';
  for (let j = 1; j <= n - i; j++) {
    romb += '&nbsp;';
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    romb += '*';
  }
  document.write(romb + '<br>');
}