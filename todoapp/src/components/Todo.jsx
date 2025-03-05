import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const completedTasks = tasks.filter((task) => task.done).length;
  const totalTodos = tasks.length;
  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
      <Footer completedTasks={completedTasks} totalTodos={totalTodos} />
    </div>
  );
}
