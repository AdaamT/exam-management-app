import React, { useState, useEffect } from "react";
import axios from "axios";

const ExamList = () => {
  const [exams, setExams] = useState([]);
  const [candidateFilter, setCandidateFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [filteredExams, setFilteredExams] = useState([]);

  useEffect(() => {
    const fetchExamsData = async () => {
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

    fetchExamsData();
  }, []);

  const handleCandidateFilterChange = (event) => {
    setCandidateFilter(event.target.value);
  };

  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleFilterClick = () => {
    const filteredExams = exams.filter((exam) => {
      const matchesCandidate =
        exam.CandidateName.toLowerCase().includes(
          candidateFilter.toLowerCase()
        ) || candidateFilter === "";
      const matchesLocation =
        exam.LocationName.toLowerCase().includes(
          locationFilter.toLowerCase()
        ) || locationFilter === "";
      return matchesCandidate && matchesLocation;
    });
    setFilteredExams(filteredExams);
  };

  const handleClearFilters = () => {
    setCandidateFilter("");
    setLocationFilter("");
    setFilteredExams([]);
  };

  return (
    <div>
      <div>
        <label>Candidate Name:</label>
        <input
          type="text"
          placeholder="Enter candidate name"
          value={candidateFilter}
          onChange={handleCandidateFilterChange}
        />
      </div>

      <div>
        <label>Location:</label>
        <input
          type="text"
          placeholder="Enter location"
          value={locationFilter}
          onChange={handleLocationFilterChange}
        />
      </div>

      <button onClick={handleFilterClick}>Filter</button>
      <button onClick={handleClearFilters}>Clear Filters</button>

      {filteredExams.length > 0 ? (
        filteredExams.map((exam) => (
          <div key={exam.id}>
            <h2>{exam.CandidateName}</h2>
            <p>Date: {exam.Date}</p>
            <p>Location: {exam.LocationName}</p>
          </div>
        ))
      ) : (
        <p>No exams available.</p>
      )}
    </div>
  );
};

export default ExamList;
