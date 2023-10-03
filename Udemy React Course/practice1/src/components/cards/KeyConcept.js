import React from "react";

const KeyConcept = ({ image, title, description }) => {
  return (
    <div>
      <li className="concept">
        <img src={image} alt="TODO: TITLE" />
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    </div>
  );
};

export default KeyConcept;
