class Todo {
  constructor(id, task, status) {
    this.id = id;
    this.task = task;
    this.status = status;
  }
}

class TodoList {
  constructor() {
    this.todos = [];
  }
  addTodo(data) {
    const todo = new Todo(Date.now(), data, "pending");
    this.todos.push(todo);
  }
  removeTodo(id) {
    this.todos = this.todos.filter((item) => item.id != id);
  }
  changeStatus(name){
    this.todos = this.todos.map(item=>{
        if(item.task==name){
            item.status='completed';
        }
        return item;
    })
    
  }
  getAllTodos() {
    return this.todos;
  }
}

const list = new TodoList();
list.addTodo("checkPapers");
list.addTodo("Check assignemt");
list.changeStatus("checkPapers")
console.log(list.getAllTodos());
