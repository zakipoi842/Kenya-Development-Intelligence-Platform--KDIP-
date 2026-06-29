import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  BarChart3,
  Target,
  Users,
  Clock,
  Shield,
  Phone,
  Globe,
} from "lucide-react";
import api from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const kenyaGreen = "#1B4D3E";
  const kenyaGreenDark = "#0E3328";

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      const isAuth = localStorage.getItem("isAuthenticated");
      
      if (!token || isAuth !== "true") {
        return;
      }

      try {
        const response = await api.get("/auth/profile");
        if (response.data) {
          navigate("/userdashbored");
        }
      } catch (error) {
        console.log("Token invalid, clearing...");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("isAuthenticated");
      }
    };
    
    checkAuth();
  }, [navigate]);

  useEffect(() => {
    if (location.state?.message) {
      toast.success(location.state.message);
    }
    if (location.state?.email) {
      setFormData((prev) => ({ ...prev, email: location.state.email }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!formData.password.trim()) {
      toast.error("Please enter your password");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await api.post("/auth/login", {
        email: formData.email.toLowerCase(),
        password: formData.password,
      });

      const { access_token, user } = response.data;

      localStorage.setItem("token", access_token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("loginTime", new Date().toISOString());

      toast.success(`Welcome back, ${user.firstName}!`);

      setTimeout(() => {
        navigate("/userdashbored");
      }, 1500);
    } catch (error) {
      console.error("Login error:", error);

      if (error.code === "ERR_NETWORK") {
        toast.error("Cannot connect to server. Make sure backend is running on port 5000");
      } else if (error.response) {
        const { status, data } = error.response;

        if (status === 401) {
          toast.error("Invalid email or password. Please try again.");
        } else if (status === 403) {
          toast.error("Your account is not active. Please contact support.");
        } else if (status === 404) {
          toast.error("Account not found. Please check your email or register.");
        } else {
          toast.error(data.error || "Login failed. Please try again.");
        }
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { value: "12,540+", label: "Projects Tracked", icon: BarChart3 },
    { value: "47", label: "Counties", icon: Target },
    { value: "345+", label: "Active Volunteers", icon: Users },
    { value: "24/7", label: "Support", icon: Clock },
  ];

  const features = [
    { icon: Shield, text: "Secure & Encrypted Login" },
    { icon: Phone, text: "24/7 Citizen Support" },
    { icon: Globe, text: "Access All 47 Counties" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center px-4 pt-24 pb-10">
      <ToastContainer />
      
      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="hidden lg:flex relative" style={{ backgroundColor: kenyaGreen }}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
          <div className="relative z-10 p-10 text-white flex flex-col justify-between w-full">
            <div>
              <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/20">
                <Building2 className="w-6 h-6" />
                <span className="font-semibold text-lg">KDIP</span>
              </div>
              <div className="mt-16">
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-200">Welcome Back</p>
                <h1 className="mt-4 text-4xl font-bold leading-tight">Kenya Development Intelligence Platform</h1>
                <p className="mt-5 text-emerald-200 text-base leading-7 max-w-lg">Access your account to track development projects, monitor budget utilization, and participate in Kenya's development process.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm border border-white/20">
                    <Icon className="w-5 h-5 text-emerald-300 mb-2" />
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-emerald-200">{stat.label}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 space-y-3">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 text-sm text-emerald-200">
                    <Icon className="w-4 h-4" />
                    <span>{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-10 lg:p-14 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <div className="lg:hidden mb-8 text-center">
              <div className="mx-auto mb-4 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: kenyaGreen }}>
                <Building2 className="w-7 h-7" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                <span style={{ color: kenyaGreen }}>KDIP</span>
              </h1>
              <p className="text-xs text-gray-500 mt-1 tracking-wider">KENYA DEVELOPMENT INTELLIGENCE PLATFORM</p>
            </div>

            <p className="text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: kenyaGreen }}>Login</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">Welcome back!</h2>
            <p className="mt-3 text-gray-500 leading-6">Please enter your details to access your account and track development projects.</p>

            <form onSubmit={handleLogin} className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus-within:ring-2 focus-within:ring-emerald-500 transition">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent outline-none text-gray-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus-within:ring-2 focus-within:ring-emerald-500 transition">
                  <Lock className="w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent outline-none text-gray-700"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="text-right">
                <Link to="/forgot-password" className="text-sm font-medium hover:underline" style={{ color: kenyaGreen }}>Forgot password?</Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ backgroundColor: kenyaGreen }}
                onMouseEnter={(e) => e.target.style.backgroundColor = kenyaGreenDark}
                onMouseLeave={(e) => e.target.style.backgroundColor = kenyaGreen}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-8 text-sm text-gray-600 text-center">
              Don't have an account?{" "}
              <Link to="/register" className="font-semibold hover:underline" style={{ color: kenyaGreen }}>Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
