import React, { useState } from "react";

import Header from "./components/Header";
import InterestForm from "./components/InterestForm";
import InterestTable from "./components/InterestTable";

function App() {
  const [interestData, setInterestData] = useState([]);

  const interestSubmitHandler = (yearlyData) =>
    setInterestData([...yearlyData]);

  return (
    <div>
      <Header />
      <InterestForm onInterestSubmit={interestSubmitHandler} />
      <InterestTable data={interestData} />
    </div>
  );
}

export default App;
