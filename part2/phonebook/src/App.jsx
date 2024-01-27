import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1, number: `987-654-3210` }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(undefined)

  const handleInputName = (event) => {
    setNewName(event.target.value)
  }

  const handleInputNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    const isNameExist = persons.find((person) => person.name === newName)
    if (isNameExist) {
      alert(`${isNameExist.name} is already added to phonebook`)
    } else {
      setPersons((prevPersons) => [...prevPersons, newPerson])
    }
    setNewName('')
    setNewNumber('')
  }  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInputName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleInputNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <p key={person.id}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}

export default App