import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import personsDB from "./services/persons.js";
import Filter from "./components/Filter.jsx";
import Form from "./components/Form.jsx";
import Persons from "./components/Persons.jsx";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(undefined);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("effect");
    personsDB.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

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
      id: uuidv4(),
      name: newName,
      number: newNumber,
    };
    const isNameExist = persons.find((person) => person.name === newName);
    if (isNameExist) {
      alert(`${isNameExist.name} is already added to phonebook`);
    } else {
      personsDB.create(newPerson).then((response) => {
        console.log(response);
        setPersons((prevPersons) => [...prevPersons, newPerson]);
      });
    }
    setNewName("");
    setNewNumber("");
  };

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      const deletePersonId = person.id;
      personsDB.remove(deletePersonId).then((response) => {
        console.log(response);
        setPersons((prevPersons) =>
          prevPersons.filter((person) => person.id !== deletePersonId)
        );
      });
    }
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
      <Persons persons={persons} search={search} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
