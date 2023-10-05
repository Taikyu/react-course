import React from "react";

import "./InterestPerYear.css";

const InterestPerYear = () => {
  return (
    <tbody className="yearly">
      <tr>
        <td>YEAR NUMBER</td>
        <td>TOTAL SAVINGS END OF YEAR</td>
        <td>INTEREST GAINED IN YEAR</td>
        <td>TOTAL INTEREST GAINED</td>
        <td>TOTAL INVESTED CAPITAL</td>
      </tr>
    </tbody>
  );
};

export default InterestPerYear;
