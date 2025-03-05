/* Component imports
import Hello from "./components/Hello";
import Hello2 from "./components/Hello2";
import Fruits from "./components/Fruits";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";
import ConditionalComponent from "./components/ConditionalComponent"; 
*/

function App() {
  const seatNumbers = [2, 3, 4];
  // Passing an object into props
  const person = {
    name: "Maryanne",
    message: "Hi There!",
    emoji: "🙋‍♀️",
    seatNumbers: [1, 4, 7],
  };
  return <div className="App"></div>;
}

export default App;

// Previsouly used component examples
/* 
      <ConditionalComponent />
      <Hello2 person={person} />
      <Hello
        name="Timmy"
        message="Learning React is so much fun!"
        emoji="😁"
        seatNumbers={seatNumbers}
      />
      <Fruits />
      <Message />
      <Counter />
      <Form />
*/
