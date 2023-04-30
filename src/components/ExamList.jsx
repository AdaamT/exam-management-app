import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="candidateFilter">Candidate Name:</label>
            <input
              type="text"
              className="form-control"
              id="candidateFilter"
              placeholder="Enter candidate name"
              value={candidateFilter}
              onChange={handleCandidateFilterChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="locationFilter">Location:</label>
            <input
              type="text"
              className="form-control"
              id="locationFilter"
              placeholder="Enter location"
              value={locationFilter}
              onChange={handleLocationFilterChange}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <button className="btn btn-primary" onClick={handleFilterClick}>
            Find Exams
          </button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-secondary" onClick={handleClearFilters}>
            Clear Filters
          </button>
        </div>
      </div>

      {filteredExams.length > 0 ? (
        filteredExams.map((exam) => (
          <div key={exam.id} className="card my-3">
            <div className="card-body">
              <h2 className="card-title">{exam.CandidateName}</h2>
              <p className="card-text">Date: {exam.Date}</p>
              <p className="card-text">Location: {exam.LocationName}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No exams available.</p>
      )}
    </div>
  );
};

export default ExamList;
