
const user = document.getElementById("user");
const password = document.getElementById("password");
const btn = document.getElementById("button");
const erruser = document.getElementById("error-user");
const errpass = document.getElementById("error-password");

btn.onclick = login;


function login () {
  if ( password.value.length < 8) {
    errpass.innerHTML = "Vui lòng kiểm tra lại mật khẩu";
  } else if (!/^[a-zA-Z0-9]+$/.test(user.value)) {
    erruser.innerHTML = "Vui lòng kiểm tra tài khoản";
  } else if(password.value =="" || user.value == "") {
    errpass.innerHTML = "Vui lòng kiểm tra lại"
  }
  event.preventDefault();
  }
  