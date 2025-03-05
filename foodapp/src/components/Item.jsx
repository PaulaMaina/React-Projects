import styles from "./item.module.css";

export default function Item({ item }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={
              `https://img.spoonacular.com/cdn/ingredients_50x50/` + item.image
            }
          ></img>
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.itemDetails}>
            {item.amount}
            {item.unit} {item.name}
          </div>
        </div>
      </div>
    </div>
  );
}
