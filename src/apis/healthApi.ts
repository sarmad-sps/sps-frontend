// src/apis/healthApi.ts
import axios from "axios";

const API_URL = "https://api.securepath-solutions.com/api";

export const submitHealthForm = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}/health`, data);
    return response.data;
  } catch (error: any) {
    console.error("Health form API error:", error);
    throw new Error(error.response?.data?.message || "Failed to submit health form");
  }
};
