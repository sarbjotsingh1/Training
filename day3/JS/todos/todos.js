inputTodo = document.querySelector("#inputTodo");
enterTodo = document.querySelector("#enterTodo");
getTodo = document.querySelector("#getTodo");

let todos = [];
function addTodo(inputTodo) {
  todos.push(inputTodo);
  console.log(inputTodo);
}
function onClickGet() {
  let flag = -1;
  for (let i = 0; todos.length; i++) {
    if (todos[i].id == id) {
      flag = i;
      break;
    }
  }
  if (flag >= 0) {
    todos.splice(flag, 1);
    console.log("todo deleted")
  } else {
    console.log("No todo found for deletion");
  }
}
function getTodos(){
  return todos;
}
function completeTodo(id){
  let flag = -1;
  for (let i = 0; todos.length; i++) {
    if (todos[i].id == id) {
      flag = i;
      break;
    }
  }
  if (flag >= 0) {
    todos[i].completed=true;
    console.log("todo updated")
  } else {
    console.log("No todo found for updation");
  }

}
