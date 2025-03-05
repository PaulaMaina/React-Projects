export default function Fruit({ name, price, emoji, soldout }) {
  return (
    <>
      <li>
        {emoji} {name} Ksh.{price} {soldout ? "SoldOut" : ""}
      </li>
    </>
  );
}
