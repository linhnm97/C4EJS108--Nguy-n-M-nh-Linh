console.log("Hello world!");
// 1
// function min(a,b) {
//   if ( a < b ) {
//     alert(`${a} nhỏ hơn ${b}`)
//   } else if ( a > b ) {
//     alert(`${b} nhỏ hơn ${a}`)
//   } else if (a == b ) {
//     alert (`${a} bằng ${b}`)
//   }
// }

// let a = prompt("Nhập số a");
// let b = prompt("Nhập số b");

// min(a,b);

// 2.
// const ask = (question, yes, no) => {
//   if(confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// ask (
//   "Do you agree ?",
//   () => {
//     alert (`You agreed.`)
//   },
//   () => {
//     slert (`You canceled the execution`)
//   }
// )

// 3.
let user = prompt("Nhập tên đăng nhập");
let password = prompt("Nhập mật khẩu"); 
switch (user) {
  case "Admin" : {
    checkPassword();
    break;
  }
  case ""||NaN||undefined: {
    alert("Canceled");
    break;
  }
  default: {
    alert("Tôi không biết bạn");
    break;
  }
}

function checkPassword (password) {
  if(password = "mindX") {
    alert ("Chào mừng")
  } else if ( password = "" || password == NaN || password == undefined ) {
    alert("Đã hủy")
  } else {
    alert("Mật khẩu sai");
  }
}