import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
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
            <li>
              <Link to="/exams">All Exams</Link>
            </li>
            {/* Add more buttons for different pages */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exams" element={<ExamList />} />
          {/* Add more routes for different pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
