import React from "react";

const ExamList = ({ exams }) => {
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
