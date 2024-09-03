import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const fetchData = async () => {
    try {
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      console.log(resp.data);

      setUser(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h3>User Details</h3>
      {user ? (
        <>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>
            {user.address.street}
            {user.address.city}
          </p>
        </>
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
};
