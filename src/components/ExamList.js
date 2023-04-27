import React, { useEffect, useState } from 'react';

function ExamList() {
    // Component state to hold the exams data
    const [exams, setExams] = useState([]);
  
    // Fetch the exams data from the API
    useEffect(() => {
      // Make an API request to fetch the exams data using Axios
      // Update the exams state with the fetched data using setExams
    }, []);
  
    // Render the list of exams
    return (
      <div>
        {/* Map over the exams array and render each exam */}
        {exams.map((exam) => (
          <div key={exam.id}>
            {/* Display the exam details */}
            <p>{exam.CandidateName}</p>
            {/* Add more JSX to display other exam details */}
          </div>
        ))}
      </div>
    );
  }
  
  export default ExamList;
  