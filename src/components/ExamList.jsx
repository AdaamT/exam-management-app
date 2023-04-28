import React, { useEffect, useState } from "react";
import axios from "axios";

const ExamList = () => {
  const [exams, setExams] = useState([]);
  const [candidateFilter, setCandidateFilter] = useState("");

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/exams");
        const sortedExams = response.data.sort(
          (a, b) => new Date(a.Date) - new Date(b.Date)
        );
        setExams(sortedExams);
      } catch (error) {
        console.log("Error fetching exams:", error);
      }
    };

    fetchExams();
  }, []);

  const handleFilterChange = (event) => {
    setCandidateFilter(event.target.value);
  };

  const filteredExams = exams.filter((exam) =>
    exam.CandidateName.toLowerCase().includes(candidateFilter.toLowerCase())
  );

  if (!filteredExams || filteredExams.length === 0) {
    return (
      <div>
        <p>No exams available.</p>
        <input
          type="text"
          // placeholder="Search by candidate"
          value={candidateFilter}
          onChange={handleFilterChange}
        />
      </div>
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Candidate"
        value={candidateFilter}
        onChange={handleFilterChange}
      />
      {filteredExams.map((exam) => (
        <div key={exam.id}>
          <h2>{exam.CandidateName}</h2>
          <p>Date: {exam.Date}</p>
          <p>Location: {exam.LocationName}</p>
          {/* Render other exam details if needed */}
        </div>
      ))}
    </div>
  );
};

export default ExamList;
