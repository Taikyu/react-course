import React from "react";

import "./InterestPerYear.css";

const InterestPerYear = (props) => {
  return (
    <tbody className="yearly">
      <tr>
        <td>{props.year}</td>
        <td>{props.totalSavings}</td>
        <td>{props.interest}</td>
        <td>{props.totalInterest}</td>
        <td>{props.capital}</td>
      </tr>
    </tbody>
  );
};

export default InterestPerYear;
