import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ tasks, setTasks }) {
  const [task, setTask] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({ name: "", done: false });
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
            type="text"
            value={task.name}
            placeholder="Enter task name:"
          />
          <button className={styles.modernButton} type="submit">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
