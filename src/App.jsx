import { useState } from "react";

import "./App.css";
import Inputs from "./components/__organisms/Inputs/Inputs";
import Bar from "./components/__organisms/Bar/Bar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Bar />
      <div className="form-container">
        <Inputs />
      </div>
    </>
  );
}

export default App;
