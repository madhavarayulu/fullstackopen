import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import personsDB from "./services/persons.js";
import Filter from "./components/Filter.jsx";
import Form from "./components/Form.jsx";
import Persons from "./components/Persons.jsx";
import Notification from "./components/Notification.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [notification, setNotification] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

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
    if (
      isNameExist &&
      isNameExist.number &&
      isNameExist.number !== newPerson.number
    ) {
      const userResponse = window.confirm(
        `${isNameExist.name} is already added to phonebook, replace the old number with a new one?`
      );
      if (userResponse) {
        personsDB
          .modify(isNameExist.id, newPerson)
          .then(() => {
            setPersons((prevPersons) =>
              prevPersons.map((person) =>
                person.id === isNameExist.id
                  ? { ...person, number: newPerson.number }
                  : person
              )
            );
          })
          .catch((error) => {
            console.error(error);
            setErrorMessage(error);
            setErrorMessage(
              `Information of ${isNameExist.name} has already been removed from server`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          });
      }
    } else {
      personsDB
        .create(newPerson)
        .then(() => {
          setPersons((prevPersons) => [...prevPersons, newPerson]);
          setNotification(`Added ${newPerson.name}`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage(error.response.data.error);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
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
        setNotification(`Deleted ${person.name}`);
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <ErrorMessage message={errorMessage} />
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
