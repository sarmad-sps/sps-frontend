import axios from "axios";

const API_URL = "http://localhost:5000/api/contact"; 

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data; 
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    throw error.response?.data || error;
  }
};
