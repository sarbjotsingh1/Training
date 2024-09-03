import React, { useState } from "react";
import { ProductForm } from "./ProductForm";
import { ProductDetails } from "./ProductDetails";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const addProduct = (obj) => {
    setProducts([...products, obj]); //obj is coming from child comp
    alert("Product added");
  };
  return (
    <div className="container mt-3 p-2" style={{ border: "2px solid red" }}>
      <h3>Product List Component</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => setSelected(item)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row p-2">
        <div className="col">
          <ProductForm addProduct={addProduct} />
        </div>
        <div className="col">
          {selected && <ProductDetails product={selected} />}
        </div>
      </div>
    </div>
  );
};
