import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateCust = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchData = async () => {
    const resp = await axios.get(`http://localhost:5000/coust/${id}`);
    setUser({ name: resp.data.name, email: resp.data.email });
    console.log(resp.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.put(`http://localhost:5000/coust/${id}`, user);
      if (resp.status == 200) {
        alert("Update done");
        navigate("/cust");
      } else alert("Update error");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>Update Customer</div>
      <div className="mt-3">
        <label>Name</label>
        <input
          type="text"
          placeholder="enter name"
          value={user.name}
          onChange={(e) => {
            setUser({ ...user,name: e.target.value });
          }}
          className="form-control"
        />
      </div>
      <div className="mt-3">
        <label>Email Id</label>
        <input
          type="email"
          placeholder="enter email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user,email: e.target.value });
          }}
          className="form-control"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-3"
        onClick={handleSubmit}
      >
        Update
      </button>
    </>
  );
};
