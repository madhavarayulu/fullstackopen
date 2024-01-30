const Persons = ({ persons, search }) => {
  return (
    <div>
      {persons
        .filter((person) => person.name.toLowerCase().includes(search))
        .map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
          </p>
        ))}
    </div>
  );
};

export default Persons;
