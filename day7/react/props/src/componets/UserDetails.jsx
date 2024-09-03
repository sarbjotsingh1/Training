import React from "react";
import { Greeting } from "./Greeting";

export const UserDetails = ({ user,method }) => {
  return (
    <>
      <div>UserDetails</div>
      <div>
        <h3>Name:{user.name}</h3>
        <h3>Email:{user.email}</h3>
        <button onClick={method}>Trigger</button>
      </div>
    </>
  );
};

