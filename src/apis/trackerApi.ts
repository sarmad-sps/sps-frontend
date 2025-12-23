import axios from "axios";

// Backend URL
const API_URL = "https://api.securepath-solutions.com/api/tracker"; 

// Interface for form data
export interface TrackerFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// API call function
export const submitTrackerForm = async (formData: TrackerFormData) => {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data; 
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    throw error.response?.data || error;
  }
};
