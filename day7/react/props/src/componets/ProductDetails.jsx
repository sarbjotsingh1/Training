export const ProductDetails = ({ product }) => {
  return (
    <div className="mt-2">
      <h3>Product Details : {product.id}</h3>
      <h4>Name : {product.name}</h4>
      <p>Price : {product.price}</p>
    </div>
  );
};
