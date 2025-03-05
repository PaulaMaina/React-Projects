import { useState } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList key={foodID} foodData={foodData} setFoodID={setFoodID} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails key={foodID} foodID={foodID} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
