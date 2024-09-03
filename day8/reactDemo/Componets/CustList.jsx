import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CounterContext } from "../Counter/CounterContext";

export const CustList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { decement } = useContext(CounterContext);

  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/coust");
      setLoading(false);
      setUsers(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const resp = await axios.delete(`http://localhost:5000/coust/${id}`);
      fetchData();
      alert("user deleted");
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async (id) => {
    navigate(`/updatecust/${id}`);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const viewUser = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div>
      <button onClick={decement}>-</button>

      {loading ? (
        <p>Loading please wait</p>
      ) : (
        <div className="row">
          {users.map((user) => (
            <div className="col-md-4" key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <button
                onClick={() => {
                  handleDelete(user.id);
                }}
                className="btn btn-success"
              >
                Delete
              </button>

              <button
                onClick={() => {
                  handleUpdate(user.id);
                }}
                className="btn btn-success"
              >
                Update
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
