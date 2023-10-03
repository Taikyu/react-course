import React from "react";
import KeyConcept from "./cards/KeyConcept";

const KeyConcepts = ({ concepts }) => {
  return (
    <div className="concepts">
      {concepts.map((concept) => (
        <KeyConcept
          image={concept.image}
          title={concept.title}
          description={concept.description}
        />
      ))}
    </div>
  );
};

export default KeyConcepts;
