import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ tasks, setTasks }) {
  const sortedTasks = tasks
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.todolist}>
      {sortedTasks.map((todo) => (
        <TodoItem
          key={todo.name}
          todo={todo}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
}
