import React, { useState, useEffect } from "react";

function FetchingAsync() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUser();
  }, []);
  console.log(posts);
  return (
    <div>
      <h1>posts</h1>
      {posts.map((post) => {
        return (
          <p
            key={post.id}
            style={{
              border: "2px solid green",
            }}
          >
            {post.body}
          </p>
        );
      })}
    </div>
  );
}
export default FetchingAsync;
