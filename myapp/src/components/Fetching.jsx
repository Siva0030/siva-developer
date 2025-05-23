import React, { useState, useEffect, use } from "react";

function Fetching() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error", error));
  }, []);
  console.log(users);
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {users.map((user) => {
        return (
          <div
            key={user.id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid red",
              width: "300px",
              margin: "2px",
            }}
          >
            {user.name}
            <br />
            {user.email}
          </div>
        );
      })}
    </div>
  );
}
export default Fetching;
