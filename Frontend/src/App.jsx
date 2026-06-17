import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar";
import HomePage from './components/home';
import ProjectsPage from './components/Projects';
import BudgetPage from "./components/Budget";
import ImpactPage from "./components/Impact";
import ParticipatePage from "./components/Participate"
import ContactPage from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/Admin";
import UserDashbored from "./users/layout/UserDashbored";
import AdminDashboard from "./admin/layout/AdminDashbored";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/participate" element={<ParticipatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/userdashbored" element={<UserDashbored/>} />
        <Route path="/admindashbored" element={<AdminDashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App