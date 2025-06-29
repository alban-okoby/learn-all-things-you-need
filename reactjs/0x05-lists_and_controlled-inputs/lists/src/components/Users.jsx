function Users() {
  const users = ["John Doe", "Alain Gouba", "Luc Cargo"];

  return (
    <ul>
        {users.map((user, idx) => (
            <li key={idx}>{user}</li>
        ))}
    </ul>
  );
}

export default Users;