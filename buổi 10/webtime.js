function startTime() {
  const today = new Date();
  let d = today.getDate();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  d = checkTime(d);
  document.getElementById('hours').innerHTML =  h;
  document.getElementById('minutes').innerHTML =  m;
  document.getElementById('seconds').innerHTML =  s;
  document.getElementById('date').innerHTML = d;
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

setInterval(startTime, 1000);