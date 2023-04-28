import React, { useEffect, useState } from "react";
import axios from "axios";

const ExamList = () => {
  const [exams, setExams] = useState([]);

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

  if (!exams || exams.length === 0) {
    return <p>No exams available.</p>;
  }

  return (
    <div>
      {exams.map((exam) => (
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
