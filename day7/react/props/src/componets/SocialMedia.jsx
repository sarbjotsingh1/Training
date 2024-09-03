import { useState, useEffect } from "react";
import { Comments } from "./Comments";

export const SocialMedia = () => {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await resp.json();
    setPosts(json);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tittle</th>
              <th>Body</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <Comments postId={item.id}/>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
