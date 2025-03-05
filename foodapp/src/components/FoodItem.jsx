import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodID }) {
  return (
    <div className={styles.foodItemContainer}>
      <img
        className={styles.foodItemImage}
        src={food.image}
        alt="Food item image"
      ></img>
      <div className={styles.foodItemContent}>
        <p className={styles.foodItemTitle}>{food.title}</p>
      </div>
      <div>
        <button
          className={styles.foodItemButton}
          onClick={() => {
            setFoodID(food.id);
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
