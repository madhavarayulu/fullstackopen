import { useState } from "react";
import Filter from "./components/Filter.jsx";
import Form from "./components/Form.jsx";
import Persons from "./components/Persons.jsx";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: 1, number: "987-654-3210" },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(undefined);
  const [search, setSearch] = useState("");

  const handleInputSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const handleInputName = (event) => {
    setNewName(event.target.value);
  };

  const handleInputNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    const isNameExist = persons.find((person) => person.name === newName);
    if (isNameExist) {
      alert(`${isNameExist.name} is already added to phonebook`);
    } else {
      setPersons((prevPersons) => [...prevPersons, newPerson]);
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleInputSearch={handleInputSearch} />
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        handleInputName={handleInputName}
        newNumber={newNumber}
        handleInputNumber={handleInputNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} />
    </div>
  );
};

export default App;
