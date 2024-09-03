import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const loggedIn = localStorage.getItem("loggedIn");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };
  const items = useSelector((state) => state.cart.items);
  return (
    <ul className="nav">
      {loggedIn ? (
        <li className="nav-item">
          <button className="nav-link" onClick={logout}>
            Logout
          </button>
        </li>
      ) : (
        <li className="nav-item">
          <Link className="nav-link" to="login">
            Login
          </Link>
        </li>
      )}
      <li className="nav-item">
        <Link className="nav-link" to="users">
          Users
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="addcust">
          Add Customer
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="cust">
          Customer
        </Link>
      </li>
      <li>
        <span>{items.length}Products in Card</span>
      </li>
    </ul>
  );
};
