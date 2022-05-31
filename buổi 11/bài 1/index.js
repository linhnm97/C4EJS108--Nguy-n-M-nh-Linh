let todolist= [];

let input = document.querySelector("#input");
let  ul = document.querySelector("#todoList");
let bt2 = document.querySelector("#btn2");

bt2.onclick = function () {
  todolist = [...todolist, input.value];
  input.value="";
  renderTodolist(todolist);
}

ul.onclick = (event) => {
  let li = event.target;
  ul.removeChild(li);
  todolist.splice([]);
  }
const renderTodolist = (arrTodo) => {
  ul.innerHTML = ""
  for (let i = 0; i < arrTodo.length; i++) {
    let li = document.createElement("li");
    li.innerText = arrTodo[i];
    ul.appendChild(li)
  }
}

