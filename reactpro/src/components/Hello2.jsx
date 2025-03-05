function Hello2({ person }) {
  return (
    <div>
      <h1>
        {person.message} {person.name} {person.emoji} {person.seatNumbers}
      </h1>
    </div>
  );
}

export default Hello2;
