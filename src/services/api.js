import axios from "axios";

const API_BASE_URL = "http://localhost/school_e-clearance_backend/api.php";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

export const loginAPI = {
  login: ({ email, password }) => api.post('', { email, password }, { params: { path: 'login' } }),
  logout: () => api.post('', {}, { params: { path: 'logout' } }),
};

export default api;
