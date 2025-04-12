import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then(res => res.json())
      .then(setUsers);

    fetch("http://localhost:8082/orders")
      .then(res => res.json())
      .then(setOrders);
  }, []);

  return (
    <div>
      <h1>Frontend React App</h1>
      <h2>Users:</h2>
      <ul>{users.map(u => <li key={u}>{u}</li>)}</ul>
      <h2>Orders:</h2>
      <ul>{orders.map(o => <li key={o}>{o}</li>)}</ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));