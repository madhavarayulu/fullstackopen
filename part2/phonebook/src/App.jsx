import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1, number: '987-654-3210' },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(undefined)
  const [search, setSearch] = useState('')

  const handleInputSearch = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

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
      <h1>Phonebook</h1>
      filter shown with <input value={search} onChange={handleInputSearch} />
      <form onSubmit={handleSubmit}>
        <h2>add a new</h2>
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
      {persons.filter((person) => person.name.toLowerCase().includes(search)).map((person) => (
        <p key={person.id}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}

export default App