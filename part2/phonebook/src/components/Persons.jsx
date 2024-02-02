const Persons = ({ persons, search, handleDelete }) => {
  const deleteStyle = {
    margin: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "orange",
  };
  return (
    <div>
      {persons
        .filter((person) => person.name.toLowerCase().includes(search))
        .map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
            <button style={deleteStyle} onClick={() => handleDelete(person)}>
              Delete
            </button>
          </p>
        ))}
    </div>
  );
};

export default Persons;
