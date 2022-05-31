// console.log("hello world");
// 1./
// let phepTinh = prompt("Nhập phép tính (+, -, *, /)");
// let x =  "+-*/";
// if(!x.includes(phepTinh)) {
//   alert("Mời bạn nhập lại");
//   process.exit(1);
// } 

// let a= Number(prompt("Mòi bạn nhập giá trị đầu tiên"));
// let b = Number(prompt("Mời bạn nhập giá trị thứ 2"));

// switch(phepTinh) {
//     case "+": alert(a+b);
//     break;
    
//     case "-": alert(a-b);
//     break;

//     case "*": alert(a*b);
//     break;

//     case "/": alert(a/b);
//     break;
// }

// /2
const number = Number(prompt("Nhập số nguyên tố:"));

if (number < 1 || number == 1) {
  alert(`${number} không phải là số nguyên tố !`);
} else if (number % 2 == 0) {
  alert(`${number} không phải là số nguyên tố`);
} else if (number == 2) {
  alert(`${number} không phải là số nguyên tố`);
} else {
  for(i = 3; i < number - 1; i += 2) {
    if (number % i == 0) {
      alert (`${number} không phải là số nguyên tố !`);
    } else if (number % i != 0) {
      alert (`${number} là số nguyên tố`);
      break;
    }
  }
}


