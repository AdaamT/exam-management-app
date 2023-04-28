// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import ExamList from "./components/ExamList";
import axios from "axios";

function App() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    // Fetch the exams data from the API
    axios
      .get("http://localhost:3000/api/exams")
      .then((response) => {
        console.log("Exams data:", response.data); // Log the exams data
        setExams(response.data);
      })
      .catch((error) => {
        console.log("Error fetching exams:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Exam List</h1>
      <ExamList exams={exams} />
    </div>
  );
}

export default App;
