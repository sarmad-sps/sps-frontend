// src/apis/insuranceApi.ts
import axios from "axios";

const API_URL = "https://api.securepath-solutions.com/api/insurance";

export const calculateInsurance = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}/calculate`, data);
    return response.data;
  } catch (error: any) {
    console.error("Insurance calculate API error:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch quotes");
  }
};
