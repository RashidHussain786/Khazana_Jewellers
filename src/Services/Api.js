import axios from "axios";

const baseUrl = "https://localhost:7108"; // Replace with your base URL

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to include the token in the headers of every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

const authService = {
  // Define your authentication service methods here
  signup: async (authUser) => {
    try {
      const response = await api.post("/authuser/signup", authUser);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  login: async (loginRequest) => {
    try {
      const response = await api.post("/authuser/login", loginRequest);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
};

const jewelleryService = {
  // Define your jewellery service methods here
  createJewellery: async (jewellery) => {
    try {
      const response = await api.post("/api/jewellery", jewellery);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data);
    }
  },
  getJewelleryById: async (id) => {
    try {
      const response = await api.get(`/api/jewellery/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  getAllJewellery: async () => {
    try {
      const response = await api.get("/api/jewellery");
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  updateJewellery: async (id, jewellery) => {
    try {
      const response = await api.put(`/api/jewellery/${id}`, jewellery);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  deleteJewellery: async (id) => {
    try {
      const response = await api.delete(`/api/jewellery/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
};

export { authService, jewelleryService };
