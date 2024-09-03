import { AddProduct } from "./AddProduct";
import { ProductList } from "./ProductList";
import { Link, Routes, Route } from "react-router-dom";

export const DashBoard = () => {
  return (
    <>
      <h3>Dashboard</h3>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="listproducts">
            List Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="addproducts">
            Add Products
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="listProducts" element={<ProductList />} />
        <Route path="addProducts" element={<AddProduct />} />
      </Routes>
    </>
  );
};
