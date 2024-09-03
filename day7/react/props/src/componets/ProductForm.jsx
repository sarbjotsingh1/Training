import React, { useState } from "react";

export const ProductForm = ({ addProduct }) => {
  const [product, setProduct] = useState({ name: "", price: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    product.id = Math.floor(Math.random() * 1000);
    addProduct(product);
  };
  return (
    <div className="container">
      <h3>Product Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Product Name"
          className="form-control mt-3"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="text"
          name="price"
          placeholder="Enter Product Price"
          className="form-control mt-3"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <button type="submit" className="btn btn-primary  mt-3 ">
          Add Product
        </button>
      </form>
    </div>
  );
};
