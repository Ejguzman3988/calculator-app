import React from "react";

const Button = ({ content }) => {
  return (
    <div className="border rounded-lg px-10 py-2 w-36 text-center">
      {content}
    </div>
  );
};

export default Button;
