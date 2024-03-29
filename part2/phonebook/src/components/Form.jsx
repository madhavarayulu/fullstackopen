const Form = ({
  handleSubmit,
  handleInputName,
  handleInputNumber,
  newName,
  newNumber,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>add a new</h3>
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
    </div>
  );
};

export default Form;
