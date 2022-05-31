console.log("Hello world");
let a = document.querySelector("#a").value;
let b = document.querySelector("#b").value;

if (a < 0 || b < 0) {
  alert (`${a} và ${b} không phải số nguyên tố !`);
} else if (a > b) {
  alert(`Khoảng số không phù hợp vì ${a} > ${b}`)
} else {
  for (i=a; i< b; i++) {
    if(i>1) {
      for ( j= 2; j < mart.sqrt(i); i ++){
        if (i % j == 0) {
          
        } else {
          alert(`${a} và ${b}  không phải là số nguyên tố`)
        }
      }
    }
  }
}