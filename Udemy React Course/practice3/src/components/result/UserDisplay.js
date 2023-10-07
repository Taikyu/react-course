import React from "react";

const UserDisplay = (props) => {
  return (
    <div className="border p-1 px-2 border-gray-500 ">
      {props.name} ({props.age} years old)
    </div>
  );
};

export default UserDisplay;
