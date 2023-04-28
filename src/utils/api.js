import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const fetchExams = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/exams`);
    return response.data;
  } catch (error) {
    console.log("Error fetching exams:", error);
    throw error;
  }
};
