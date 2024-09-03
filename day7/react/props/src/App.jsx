import { useState } from "react";
import viteLogo from "/vite.svg";
import { UserForm } from "./componets/userForm";
import { TodoApp } from "./componets/todoApp";
import { Greeting } from "./componets/Greeting";
import { UserDetails } from "./componets/UserDetails";
import { ProductList } from "./componets/ProductList";
import { Counter } from "./componets/Counter";
import { CustomerList } from "./componets/CustomerList";
import { SocialMedia } from "./componets/socialMedia";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="customer" element={<CustomerList />} />
        <Route path="product" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );

  {
    /* <h1 className="text-3xl font-bold underline">react app</h1> */
  }
  {
    /* <UserForm />  */
  }
  {
    /* <TodoApp/> */
  }
  {
    /* <Greeting /> */
  }
  {
    /* <Greeting name="Sarb" message="Good morning" /> */
  }
  {
    /* <UserDetails user={userObj} method={handleClick} /> */
  }
  {
    /* <ProductList /> */
  }
  {
    /* <Counter /> */
  }
  {
    /* <CustomerList /> */
  }
  {
    /* <Comment/> */
  }
  //
}

export default App;
