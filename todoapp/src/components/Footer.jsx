import styles from "./footer.module.css";

export default function Footer({ completedTasks, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Tasks: {completedTasks}</span>
      <span className={styles.item}>All Tasks: {totalTodos}</span>
    </div>
  );
}
