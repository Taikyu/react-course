import React from "react";

import InterestPerYear from "./InterestPerYear";
import "./InterestTable.css";

const InterestTable = ({ data }) => {
  if (data.length === 0) {
    return <h5 className="fallback">No investment calculated yet.</h5>;
  }
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
      {data.map((item) => (
        <InterestPerYear
          key={item.year}
          year={item.year}
          totalSavings={item.totalSavings}
          interest={item.interest}
          totalInterest={item.totalInterest}
          capital={item.capital}
        />
      ))}
    </table>
  );
};

export default InterestTable;
