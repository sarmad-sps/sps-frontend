// src/apis/quoteRequestsApi.ts
import axios from "axios";

const API_URL = "https://api.securepath-solutions.com/api/quote-requests";

// POST: Create quote request
export const createQuoteRequest = async (data: any) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error: any) {
    console.error("Create Quote Request API error:", error);
    throw new Error(error.response?.data?.message || "Failed to create quote request");
  }
};
