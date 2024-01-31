import { useState, useEffect } from "react";
import axios from 'axios'
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
    console.log('effect')
    personsDB
      .getAll()
      .then(response => {
        console.log("promise fulfilled")
        setPersons(response.data)
      })
  }, [])

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
    personsDB
      .create(newPerson)
      .then(response => {
        console.log(response)
      })
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
