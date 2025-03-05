function Hello(props) {
  //Props make the components more dynamic and reusable. Props are immutable. You can pass any data type to them.
  const { name, message, emoji, seatNumbers } = props; //Destructuring props. You can also destructure props at the component declaration e.g. function Hello({name, message}) {}
  return (
    <div>
      <h1>
        {message} {name} {emoji} {seatNumbers}
      </h1>
    </div>
  );
}

export default Hello;
