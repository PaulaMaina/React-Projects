import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "5913be6813b94a5d9d60abe412ed3ab7";

export default function Search({ foodData, setFoodData }) {
  // Hooks are functions called from React components. They are always inside components
  // useEffect hook allows use to sync a component with an external system.
  const [query, setQuery] = useState("pizza");
  // Syntax of a useEffect hook. It takes 2 parameters: callaback function and a dependencies list as an array
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();

      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
}
