import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("component did mount");
  }, []);

  // CLean Up interval
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("tick");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);


  const [users, setUsers] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
      setLoadingState(false);
    }, 1900);
  }, []);

  return (
    <>
    <span>{loadingState && 'Loading...'}</span>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
