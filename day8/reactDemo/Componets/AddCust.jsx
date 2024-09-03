import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CounterContext } from "../Counter/CounterContext";

export const AddCust = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { increment } = useContext(CounterContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      user.id = Date.now() + "";
      const resp = await axios.post("http://localhost:5000/coust", user);
      if (resp.status == 200) {
        toast.success("Registered done");
        navigate("/cust");
      } else toast.error("Register error");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>Register Page</div>
      <button onClick={increment}>+</button>
      <div className="mt-3">
        <label>Name</label>
        <input
          type="text"
          placeholder="enter name"
          value={user.name || ""}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
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
            setUser({ ...user, email: e.target.value });
          }}
          className="form-control"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-3"
        onClick={handleSubmit}
      >
        Login
      </button>
    </>
  );
};
