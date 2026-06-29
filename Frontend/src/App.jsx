// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ===== COMPONENTS =====
import Navbar from "./components/Navbar";

// ===== PUBLIC PAGES (No authentication required) =====
import HomePage from './components/home';
import ProjectsPage from './components/Projects'; // <-- Your ProjectsPage
import BudgetPage from "./components/Budget";
import ImpactPage from "./components/Impact";
import ParticipatePage from "./components/Participate";
import ContactPage from "./components/Contact";

// ===== AUTHENTICATION PAGES =====
import Login from "./components/Login";
import Register from "./components/Register";

// ===== ADMIN PAGES (Admin authentication required) =====
import Admin from "./components/Admin";
import AdminDashboard from "./admin/layout/AdminDashbored";

// ===== USER DASHBOARD PAGES (User authentication required) =====
import UserDashbored from "./users/layout/UserDashbored";
import OverviewPage from "./users/pages/overview";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer />
      
      <Routes>
        {/* ===== PUBLIC ROUTES ===== */}
        <Route path="/" element={<HomePage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/projects" element={<ProjectsPage />} /> {/* <-- Projects route */}
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/participate" element={<ParticipatePage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* ===== AUTHENTICATION ROUTES ===== */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ===== ADMIN ROUTES ===== */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admindashbored" element={<AdminDashboard />} />

        {/* ===== USER DASHBOARD ROUTES ===== */}
        <Route path="/userdashbored" element={<UserDashbored />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;