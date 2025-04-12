import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then(res => res.json())
      .then(setUsers);

    fetch("/orders")
      .then(res => res.json())
      .then(setOrders);
  }, []);

  return (
    <div>
      <h1>Frontend React App</h1>
      <h2>Users:</h2>
      <ul>{users.map((u, i) => <li key={i}>{u}</li>)}</ul>
      <h2>Orders:</h2>
      <ul>{orders.map((o, i) => <li key={i}>{o}</li>)}</ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
