const Persons = ({ persons, search, handleDelete }) => {
  return (
    <div>
      {persons
        .filter((person) => person.name.toLowerCase().includes(search))
        .map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person)}> delete</button>
          </p>
        ))}
    </div>
  );
};

export default Persons;
