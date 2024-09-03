import React, { useState, useEffect } from "react";

export const Comments = ({ postId }) => {
  const [comm, setComm] = useState([]);
  const fetchData = async () => {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    const json = await resp.json();
    setComm(json);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {comm.map((comment,index) => {
        if(index>=2){
          return ''
        }
        else{return (
          <div key={comment.id}>
          {/* <h3>{comment.id}</h3> */}
          <p>
            name:{comment.email}
            comment:{comment.name}
          </p>
        </div>)
        }
})}
    </>
  );
};
