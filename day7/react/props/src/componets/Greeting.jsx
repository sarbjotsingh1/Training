import React from "react";
import { PropTypes } from "prop-types";

export const Greeting = ({ name, message }) => {
  return (
    <div>
      <h1>Greetings</h1>
      <h2>
        {name ? name : "guest"} {message ? message : "Welcome"}
      </h2>
    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
// Greeting.defaultProps={
//   name:"Guest",
//   message:"Welcome"
// }
