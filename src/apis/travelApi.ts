import axios from "axios";

const API_URL = "https://api.securepath-solutions.com/api/travel";

export const submitTravelForm = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}/submit`, data);
    return response.data;
  } catch (error: any) {
    console.error("Travel form API error:", error);
    throw new Error(error.response?.data?.message || "Failed to submit travel form");
  }
};
