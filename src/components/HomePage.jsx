import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to the Exam Management System</h2>
      <p>Manage and view exams with ease.</p>
      <Link to="/exams">View All Exams</Link>
    </div>
  );
};

export default HomePage;
