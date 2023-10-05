import React from "react";

import Header from "./components/Header";
import InterestForm from "./components/InterestForm";
import InterestTable from "./components/InterestTable";

function App() {
  const interestData = [];

  return (
    <div>
      <Header />
      <InterestForm />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <InterestTable />
    </div>
  );
}

export default App;
