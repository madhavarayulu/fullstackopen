const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  const notifyStyle = {
    color: "green",
    backgroundColor: "lightgrey",
    borderColor: "green",
    borderWidth: 5,
    borderStyle: "solid",
    fontStyle: "bold",
    padding: 10,
    margin: 10,
    fontSize: 20,
  };

  return <div style={notifyStyle}>{message}</div>;
};

export default Notification;
