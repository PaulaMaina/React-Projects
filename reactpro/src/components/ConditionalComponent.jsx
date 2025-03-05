//Conditionally rendering components
// It is not a good practice tohave multiple return statements in JSX
// Element variables allow you to store HTML in them e.g let msg = <h1>I am learning React</h1>
import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponent() {
  const display = true;

  return display ? <Welcome /> : <Code />;
}
