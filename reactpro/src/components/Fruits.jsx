import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "Dragon Fruit", "Orange", "Pineapple"];
  const fruits = [
    {
      name: "Apple",
      price: 40,
      emoji: "🍎",
      soldout: true,
    },
    {
      name: "Mango",
      price: 30,
      emoji: "🥭",
      soldout: true,
    },
    {
      name: "Orange",
      price: 20,
      emoji: "🍊",
      soldout: false,
    },
    {
      name: "Pineapple",
      price: 50,
      emoji: "🍍",
      soldout: true,
    },
    {
      name: "Banana",
      price: 10,
      emoji: "🍌",
      soldout: false,
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout={fruit.soldout}
          />
          /* This fragment of code was refactored into the fruit component
          <li key={fruit.name}>
            {fruit.emoji} {fruit.name} Ksh. {fruit.price}
          </li> //Each child in an array should have a key prop to uniquely identify it. The key prop should ideally be an ID but you can use the name/variable instead.
          */
        ))}
      </ul>
    </div>
  );
}
