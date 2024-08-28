import axios from 'axios';

// Base URL for API requests
const API_URL = 'http://localhost:5000/api';

// Contact API
export const submitContactForm = async (contactData) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, contactData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};


