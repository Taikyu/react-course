import React from "react";

const Card = (props) => {
  return (
    <div className="container shadow border rounded-lg w-[45rem] mx-auto bg-white  p-5 mt-10">
      {props.children}
    </div>
  );
};

export default Card;
