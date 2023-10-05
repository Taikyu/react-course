import React from "react";

import InterestPerYear from "./InterestPerYear";
import "./InterestTable.css";

const InterestTable = () => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <InterestPerYear />
    </table>
  );
};

export default InterestTable;
