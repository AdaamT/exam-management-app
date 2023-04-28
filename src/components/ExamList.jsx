import React, { useEffect, useState } from "react";
import { fetchExams } from "../utils/api";

const ExamList = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExamsData = async () => {
      try {
        const response = await fetchExams();
        const sortedExams = response.data.sort(
          (a, b) => new Date(a.Date) - new Date(b.Date)
        );
        setExams(sortedExams);
      } catch (error) {
        console.log("Error fetching exams:", error);
      }
    };

    fetchExamsData();
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
