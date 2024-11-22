import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <header>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/library">
              {" "}
              <li>Library</li>
            </Link>
          </ul>
        </header>
      </Router>
    </>
  );
}

export default App;
