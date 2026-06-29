// frontend/src/services/api.js
import axios from "axios";

// API URL configuration - Vite compatible
const API_URL = "http://localhost:5000/api";

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request interceptor - Add token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle token expiration
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized - Token expired
    if (error.response && error.response.status === 401) {
      // Clear local storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
      
      // Redirect to login
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Auth endpoints
export const authAPI = {
  login: (data) => api.post("/auth/login", data),
  register: (data) => api.post("/auth/register", data),
  logout: () => api.post("/auth/logout"),
  getProfile: () => api.get("/auth/profile"),
  updateProfile: (data) => api.put("/auth/profile", data),
  changePassword: (data) => api.post("/auth/change-password", data),
  forgotPassword: (email) => api.post("/auth/forgot-password", { email }),
  resetPassword: (token, password) => api.post("/auth/reset-password", { token, password }),
};

// Project endpoints
export const projectAPI = {
  getAll: (params) => api.get("/projects", { params }),
  getById: (id) => api.get(`/projects/${id}`),
  create: (data) => api.post("/projects", data),
  update: (id, data) => api.put(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`),
  getCountyProjects: (county) => api.get(`/projects/county/${county}`),
};

// Budget endpoints
export const budgetAPI = {
  getOverview: () => api.get("/budget/overview"),
  getSectors: () => api.get("/budget/sectors"),
  getCounties: () => api.get("/budget/counties"),
  getProjects: () => api.get("/budget/projects"),
};

// Impact endpoints
export const impactAPI = {
  getOverview: () => api.get("/impact/overview"),
  getSectors: () => api.get("/impact/sectors"),
  getCounties: () => api.get("/impact/counties"),
  getStories: () => api.get("/impact/stories"),
  getSDG: () => api.get("/impact/sdg"),
};

// County endpoints
export const countyAPI = {
  getAll: () => api.get("/counties"),
  getById: (id) => api.get(`/counties/${id}`),
  getByName: (name) => api.get(`/counties/name/${name}`),
};

// User endpoints
export const userAPI = {
  getDashboard: () => api.get("/user/dashboard"),
  getProjects: () => api.get("/user/projects"),
  getNotifications: () => api.get("/user/notifications"),
  markNotificationRead: (id) => api.put(`/user/notifications/${id}`),
};

// Admin endpoints
export const adminAPI = {
  getUsers: () => api.get("/admin/users"),
  getUserById: (id) => api.get(`/admin/users/${id}`),
  updateUser: (id, data) => api.put(`/admin/users/${id}`, data),
  deleteUser: (id) => api.delete(`/admin/users/${id}`),
  getStats: () => api.get("/admin/stats"),
  getSettings: () => api.get("/admin/settings"),
  updateSettings: (data) => api.put("/admin/settings", data),
};

// Export default api
export default api;
