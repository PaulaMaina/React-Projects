import styles from "./todoitem.module.css";

export default function TodoItem({ todo, tasks, setTasks }) {
  function handleDelete(todo) {
    console.log("Delete button clicked for item", todo);
    setTasks(tasks.filter((task) => task !== todo));
  }
  function handleClick(itemName) {
    const newTaskList = tasks.map((task) =>
      task.name === itemName ? { ...task, done: !task.done } : task
    );
    setTasks(newTaskList);
  }

  const completedClass = todo.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={completedClass} onClick={() => handleClick(todo.name)}>
          {todo.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(todo)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
