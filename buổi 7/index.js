let myNum= 10;

for(let i=1; i <myNum; i++) {
  let str="";
  for(let j=1; j < myNum; j++) {
    str += `${i*j} |`
  }
  console.log(str);
}