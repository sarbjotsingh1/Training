import { useState } from "react";

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, task]);
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Task"
          name="task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button type="submit">Add task</button>
      </form>
      <h3>Todo List</h3>
      <ul >
        {
            todos.map((item,index)=>(
                <li key={index}>{item.task}{item.completed}</li>
            ))
        }
      </ul>
    </div>
  );
};
