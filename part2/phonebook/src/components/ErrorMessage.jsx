const ErrorMessage = ({ message }) => {
  if (message === null) {
    return null;
  }

  const errorStyle = {
    color: "red",
    backgroundColor: "lightgrey",
    borderColor: "red",
    borderWidth: 5,
    borderStyle: "solid",
    borderRadius: 5,
    fontStyle: "bold",
    padding: 10,
    margin: 10,
    fontSize: 20,
  };

  return <div style={errorStyle}>{message}</div>;
};

export default ErrorMessage;
