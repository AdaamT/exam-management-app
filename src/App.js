import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ExamList from "./components/ExamList";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Exam Management System</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exams" element={<ExamList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
