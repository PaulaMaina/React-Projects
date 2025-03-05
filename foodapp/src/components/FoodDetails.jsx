import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./ItemList";
import InstructionList from "./InstructionList";

export default function FoodDetails({ foodID }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "5913be6813b94a5d9d60abe412ed3ab7";
  useEffect(() => {
    async function fetchFoodInfo() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();

      setFood(data);
      setIsLoading(false);
    }
    fetchFoodInfo();
  }, [foodID]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image}></img>
        <div className={styles.recipeDetails}>
          <span>
            ⏱ Cooking Time: <strong> {food.readyInMinutes} minutes</strong>
          </span>
          <span>
            👪 Serves<strong> {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegeterian ? "🥦 Vegeterian" : "🥩 Non-Vegeterian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐄 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>💸 {food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList key={food.id} food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <InstructionList food={food} isLoading={isLoading} />
      </div>
    </div>
  );
}
