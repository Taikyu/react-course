import React, { useState } from "react";

import "./InterestForm.css";

const InterestForm = (props) => {
  const [interestData, setInterestData] = useState({
    savings: "",
    contribution: "",
    return: "",
    duration: "",
  });

  const savingsChangeHandler = (e) => {
    let s = e.target.value;
    setInterestData((prevState) => {
      return { ...prevState, savings: s };
    });
  };
  const contributionChangeHandler = (e) => {
    let s = e.target.value;
    setInterestData((prevState) => {
      return { ...prevState, contribution: s };
    });
  };
  const returnChangeHandler = (e) => {
    let s = e.target.value;
    setInterestData((prevState) => {
      return { ...prevState, return: s };
    });
  };
  const durationChangeHandler = (e) => {
    let s = e.target.value;
    setInterestData((prevState) => {
      return { ...prevState, duration: s };
    });
  };

  let yearlyData = [];

  const calculateHandler = (event) => {
    event.preventDefault();

    // per-year results
    let currentSavings = +interestData.savings;
    const yearlyContribution = +interestData.contribution;
    const expectedReturn = +interestData.return / 100;
    const duration = +interestData.duration;
    let investedCapital = currentSavings;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      investedCapital += yearlyContribution;
      const totalInterest = currentSavings - investedCapital;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        totalSavings: currentSavings.toFixed(2),
        interest: yearlyInterest.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        capital: investedCapital,
      });
    }

    props.onInterestSubmit(yearlyData); //lifts up the yearlyData
  };

  const resetHandler = (e) => {
    e.preventDefault();
    setInterestData({
      savings: "",
      contribution: "",
      return: "",
      duration: "",
    });
    yearlyData = [];

    props.onInterestSubmit(yearlyData); //lifts up the reseted yearlyData
  };

  return (
    <form onSubmit={calculateHandler} onReset={resetHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={interestData.savings}
            type="number"
		id="current-savings"
            onChange={savingsChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={interestData.contribution}
            type="number"
		id="yearly-contribution"
            onChange={contributionChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (% per year)
          </label>
          <input
            value={interestData.return}
            type="number"
	    id="expected-return"
            onChange={returnChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={interestData.duration}
            type="number"
		id="duration"
            onChange={durationChangeHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InterestForm;
