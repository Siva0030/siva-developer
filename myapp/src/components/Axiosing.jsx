import React, { useState, useEffect } from "react";
import axios from "axios";

function Axiosing() {
  const [todos, setTodos] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/todos")
  //       .then((res) => setTodos(res.data))
  //       .catch((err) => console.error(err));
  //   }, []);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        // console.log(response.data);
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);
  console.log(todos);

  return (
    <div>
      <h3> Todos List</h3>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}
export default Axiosing;
