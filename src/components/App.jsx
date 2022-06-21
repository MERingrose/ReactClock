import React, { useState } from "react";

function App() {
  const [time, setState] = useState(new Date().toLocaleTimeString());

  function getTime() {
    setState(new Date().toLocaleTimeString());
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
