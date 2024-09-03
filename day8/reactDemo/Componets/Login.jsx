import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({setLoggedIn}) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (user.email == "sarb@gmail.com" && user.password == "password") {
      localStorage.setItem("loggedIn", true);
      setLoggedIn(true);
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
      setUser({ ...user, password: "" });
    }
  };
  return (
    <>
      <div>Login Page</div>
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
        <label>Password</label>
        <input
          type="password"
          placeholder="enter password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          className="form-control"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-3"
        onClick={handleLogin}
      >
        Login
      </button>
    </>
  );
};
