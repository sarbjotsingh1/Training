import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setLoading(false);
      setUsers(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const viewUser = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div>
      {loading ? (
        <p>Loading please wait</p>
      ) : (
        <div className="row">
          {users.map((user) => (
            <div className="col-md-4" key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <button
                onClick={() => viewUser(user.id)}
                className="btn btn-success"
              >
                View
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
