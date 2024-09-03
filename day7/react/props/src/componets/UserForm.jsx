import React, { useState } from "react";

export const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Name is " + { name });
  };
  return (
    <div className="container">
      <h3>
        Name: {name} email: {email}
      </h3>
      <form>
        <input
          type="text"
          placeholder="Enter name"
          className="border rounded-md"
          name="name"
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Enter email"
          //   className=""
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="rounded-full ">
          Submit
        </button>
      </form>
    </div>
  );
};
