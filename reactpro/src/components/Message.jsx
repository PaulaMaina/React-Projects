export default function Message() {
  function handleClick() {
    console.log("Button clicked!");
  }
  //When passing a function to the onClick event, don't add parentheses because the function will be called even if you don't click the button
  //Only pass the function name
  return (
    <div>
      <button onClick={handleClick}>Click here to get a message</button>
    </div>
  );
}
