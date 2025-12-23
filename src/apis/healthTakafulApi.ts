import axios from "axios";

const API_URL = "https://api.securepath-solutions.com/api";

export const submitHealthTakafulForm = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}/healthtakaful`, data);
    return response.data;
  } catch (error: any) {
    console.error("Health takaful form API error:", error);
    throw new Error(error.response?.data?.message || "Failed to submit health form");
  }
};
