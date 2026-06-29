import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  User,
  Phone,
  Shield,
  Globe,
  CheckCircle,
  Send,
  Key,
} from "lucide-react";
import api from "../services/api";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Step 1: Registration form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  
  // Step 2: Verification
  const [step, setStep] = useState(1); // 1 = form, 2 = verify code
  const [verificationCode, setVerificationCode] = useState("");
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [isResending, setIsResending] = useState(false);

  const kenyaGreen = '#1B4D3E';
  const kenyaGreenDark = '#0E3328';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Step 1: Initiate registration - Send verification code
  const handleInitiateRegistration = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }
    if (!formData.password.trim() || formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await api.post("/auth/register/initiate", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email.toLowerCase(),
        phone: formData.phone,
        password: formData.password,
        role: "user",
      });

      console.log("Initiate registration response:", response.data);
      
      toast.success(`📧 Verification code sent to ${formData.email}!`);
      setRegisteredEmail(formData.email);
      setStep(2); // Go to verification step
      
    } catch (error) {
      console.error("Initiate registration error:", error);
      
      if (error.code === "ERR_NETWORK") {
        toast.error("Cannot connect to server. Make sure backend is running.");
      } else if (error.response) {
        toast.error(error.response.data?.error || "Registration failed");
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 2: Verify code and complete registration
  const handleVerifyCode = async (e) => {
    e.preventDefault();

    if (!verificationCode || verificationCode.length !== 6) {
      toast.error("Please enter a valid 6-digit verification code");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await api.post("/auth/register/verify", {
        email: registeredEmail,
        code: verificationCode,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        password: formData.password,
      });

      console.log("Verification response:", response.data);
      
      toast.success("🎉 Registration successful! Account verified.");
      
      setTimeout(() => {
        navigate("/login", {
          state: {
            message: "Registration successful! Please login.",
            email: registeredEmail,
          },
        });
      }, 2000);
      
    } catch (error) {
      console.error("Verification error:", error);
      
      if (error.response) {
        toast.error(error.response.data?.error || "Invalid verification code");
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Resend verification code
  const handleResendCode = async () => {
    setIsResending(true);
    
    try {
      const response = await api.post("/auth/register/initiate", {
        email: registeredEmail,
      });
      
      toast.success("📧 New verification code sent!");
      
    } catch (error) {
      toast.error("Failed to resend code. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  // Go back to step 1
  const handleBackToForm = () => {
    setStep(1);
    setVerificationCode("");
  };

  const stats = [
    { value: "12,540+", label: "Projects Tracked" },
    { value: "47", label: "Counties" },
    { value: "345+", label: "Active Volunteers" },
    { value: "24/7", label: "Support" },
  ];

  const features = [
    { icon: Shield, text: "Secure & Encrypted Data" },
    { icon: Phone, text: "24/7 Citizen Support" },
    { icon: Globe, text: "Access All 47 Counties" },
    { icon: CheckCircle, text: "Free Registration" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center px-4 pt-24 pb-10">
      <ToastContainer />
      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        
        {/* Left Side - Kenya Green Brand Section */}
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
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-200">
                  {step === 1 ? "Join Us" : "Verify Your Email"}
                </p>
                <h1 className="mt-4 text-4xl font-bold leading-tight">
                  {step === 1 
                    ? "Create Your Account Today" 
                    : "Check Your Email"
                  }
                </h1>
                <p className="mt-5 text-emerald-200 text-base leading-7 max-w-lg">
                  {step === 1 
                    ? "Join KDIP to track development projects, monitor budget utilization, and participate in Kenya's development process."
                    : `We sent a 6-digit verification code to ${registeredEmail}. Enter it below to complete your registration.`
                  }
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm border border-white/20">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-emerald-200">{stat.label}</p>
                </div>
              ))}
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

        {/* Right Side - Registration Form / Verification */}
        <div className="p-6 sm:p-10 lg:p-14 flex items-center">
          <div className="w-full max-w-md mx-auto">
            {/* Mobile Logo */}
            <div className="lg:hidden mb-8 text-center">
              <div className="mx-auto mb-4 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: kenyaGreen }}>
                <Building2 className="w-7 h-7" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                <span style={{ color: kenyaGreen }}>KDIP</span>
              </h1>
              <p className="text-xs text-gray-500 mt-1 tracking-wider">KENYA DEVELOPMENT INTELLIGENCE PLATFORM</p>
            </div>

            {step === 1 ? (
              // Step 1: Registration Form
              <>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: kenyaGreen }}>Register</p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900">Create account</h2>
                <p className="mt-3 text-gray-500 leading-6">Join KDIP to participate in Kenya's development process.</p>

                <form onSubmit={handleInitiateRegistration} className="mt-8 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                      <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-500 transition">
                        <User className="w-5 h-5 text-gray-400" />
                        <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} required className="w-full bg-transparent outline-none text-gray-700" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                      <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-500 transition">
                        <User className="w-5 h-5 text-gray-400" />
                        <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} required className="w-full bg-transparent outline-none text-gray-700" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-500 transition">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required className="w-full bg-transparent outline-none text-gray-700" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-500 transition">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <input type="tel" name="phone" placeholder="Enter your number" value={formData.phone} onChange={handleChange} required className="w-full bg-transparent outline-none text-gray-700" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                    <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-500 transition">
                      <Lock className="w-5 h-5 text-gray-400" />
                      <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required className="w-full bg-transparent outline-none text-gray-700" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-400 hover:text-gray-600">
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                    <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-500 transition">
                      <Lock className="w-5 h-5 text-gray-400" />
                      <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required className="w-full bg-transparent outline-none text-gray-700" />
                      <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-gray-400 hover:text-gray-600">
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed" style={{ backgroundColor: kenyaGreen }} onMouseEnter={(e) => e.target.style.backgroundColor = kenyaGreenDark} onMouseLeave={(e) => e.target.style.backgroundColor = kenyaGreen}>
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending code...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Verification Code
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-8 text-sm text-gray-600 text-center">
                  Already have an account?{" "}
                  <Link to="/login" className="font-semibold hover:underline" style={{ color: kenyaGreen }}>Sign in</Link>
                </p>
              </>
            ) : (
              // Step 2: Verification Code
              <>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: kenyaGreen }}>Verify Email</p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900">Enter Verification Code</h2>
                <p className="mt-3 text-gray-500 leading-6">
                  We sent a 6-digit code to <span className="font-semibold text-[#0f172a]">{registeredEmail}</span>
                </p>

                <form onSubmit={handleVerifyCode} className="mt-8 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Verification Code *</label>
                    <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-500 transition">
                      <Key className="w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        placeholder="Enter 6 digit code"
                        maxLength="6"
                        className="w-full bg-transparent outline-none text-gray-700 text-lg tracking-widest font-mono"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-2"></p>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed" style={{ backgroundColor: kenyaGreen }} onMouseEnter={(e) => e.target.style.backgroundColor = kenyaGreenDark} onMouseLeave={(e) => e.target.style.backgroundColor = kenyaGreen}>
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Verify & Create Account
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleBackToForm}
                      className="text-sm text-gray-500 hover:text-[#1B4D3E] transition-colors"
                    >
                      ← Change email
                    </button>
                    <button
                      type="button"
                      onClick={handleResendCode}
                      disabled={isResending}
                      className="text-sm text-[#1B4D3E] hover:underline disabled:opacity-50"
                    >
                      {isResending ? "Sending..." : "Resend code"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
