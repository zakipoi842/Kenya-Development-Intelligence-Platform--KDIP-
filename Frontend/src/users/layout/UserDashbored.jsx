import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  FileText,
  Target,
  Settings,
  LogOut,
  Bell,
  Search,
  Menu,
  ChevronDown,
  UserCircle,
  DollarSign,
  Users2,
} from "lucide-react";
import api from "../../services/api";

// ===== IMPORT OVERVIEW PAGE =====
import OverviewPage from "../pages/overview";

export default function UserDashbored() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = localStorage.getItem("user");
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        const token = localStorage.getItem("token");
        
        if (!userData || !isAuthenticated || !token) {
          navigate("/login");
          return;
        }
        
        setUser(JSON.parse(userData));
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        navigate("/login");
      }
    };
    
    fetchData();
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "projects", label: "Projects", icon: Target },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "budget", label: "Budget", icon: DollarSign },
    { id: "community", label: "Community", icon: Users2 },
    { id: "profile", label: "Profile", icon: UserCircle },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1B4D3E] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        </div>
      </div>
    );
  }

  const getInitials = () => {
    const first = user?.firstName?.[0] || "";
    const last = user?.lastName?.[0] || "";
    return (first + last).toUpperCase() || "U";
  };

  // ===== RENDER CONTENT BASED ON ACTIVE TAB =====
  const renderContent = () => {
    switch(activeTab) {
      case "overview":
        return <OverviewPage />; // <-- Your full Overview page
      case "projects":
        return (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <Target className="w-16 h-16 text-[#22c55e] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#0f172a]">Projects</h2>
              <p className="text-gray-500">View and manage all development projects</p>
              <button 
                onClick={() => navigate("/projects")}
                className="mt-4 px-6 py-2 bg-[#22c55e] text-white rounded-lg hover:bg-[#16a34a] transition-colors"
              >
                Go to Projects
              </button>
            </div>
          </div>
        );
      case "reports":
        return (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <FileText className="w-16 h-16 text-[#22c55e] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#0f172a]">Reports</h2>
              <p className="text-gray-500">View community impact and development reports</p>
              <button 
                onClick={() => navigate("/impact")}
                className="mt-4 px-6 py-2 bg-[#22c55e] text-white rounded-lg hover:bg-[#16a34a] transition-colors"
              >
                Go to Impact
              </button>
            </div>
          </div>
        );
      case "budget":
        return (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <DollarSign className="w-16 h-16 text-[#22c55e] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#0f172a]">Budget</h2>
              <p className="text-gray-500">Track budget utilization across all sectors</p>
              <button 
                onClick={() => navigate("/budget")}
                className="mt-4 px-6 py-2 bg-[#22c55e] text-white rounded-lg hover:bg-[#16a34a] transition-colors"
              >
                Go to Budget
              </button>
            </div>
          </div>
        );
      case "community":
        return (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <Users2 className="w-16 h-16 text-[#22c55e] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#0f172a]">Community</h2>
              <p className="text-gray-500">Connect with the community and participate</p>
              <button 
                onClick={() => navigate("/participate")}
                className="mt-4 px-6 py-2 bg-[#22c55e] text-white rounded-lg hover:bg-[#16a34a] transition-colors"
              >
                Go to Participate
              </button>
            </div>
          </div>
        );
      case "profile":
        return (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <UserCircle className="w-16 h-16 text-[#22c55e] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#0f172a]">Profile</h2>
              <p className="text-gray-500">Manage your account settings and preferences</p>
            </div>
          </div>
        );
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="flex items-center justify-between px-4 h-16">
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1B4D3E] rounded-lg flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-[#0f172a] hidden sm:block">KDIP</span>
              <span className="text-xs text-gray-400 hidden sm:block">| User Portal</span>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1B4D3E] focus:ring-1 focus:ring-[#1B4D3E] transition-all placeholder-gray-400"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors md:hidden"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
              >
                <Bell className="w-5 h-5 text-gray-600" />
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>
              
              {showNotifications && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)}></div>
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-lg border border-gray-200 z-50 max-h-[calc(100vh-100px)] overflow-hidden">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                      <span className="font-semibold text-[#0f172a]">Notifications</span>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      <div className="p-8 text-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Bell className="w-6 h-6 text-gray-300" />
                        </div>
                        <p className="text-gray-500 text-sm">No notifications</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 p-1.5 pr-3 rounded-lg hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
              >
                <div className="w-8 h-8 bg-[#1B4D3E] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{getInitials()}</span>
                </div>
                <span className="hidden sm:block text-sm font-medium text-[#0f172a]">
                  {user?.firstName || "User"}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
              </button>
              
              {showUserMenu && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)}></div>
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg border border-gray-200 z-50 overflow-hidden">
                    <div className="p-4 border-b border-gray-100">
                      <p className="text-sm font-semibold text-[#0f172a]">{user?.firstName} {user?.lastName}</p>
                      <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                    </div>
                    <div className="p-2">
                      <button 
                        onClick={() => { setActiveTab("profile"); setShowUserMenu(false); }}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <UserCircle className="w-4 h-4 text-gray-400" />
                        Profile
                      </button>
                      <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                        <Settings className="w-4 h-4 text-gray-400" />
                        Settings
                      </button>
                    </div>
                    <div className="p-2 border-t border-gray-100">
                      <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {showMobileSearch && (
          <div className="md:hidden p-2 border-t border-gray-100 bg-white">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1B4D3E] focus:ring-1 focus:ring-[#1B4D3E] transition-all"
                autoFocus
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        )}
      </header>

      <aside 
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
          isSidebarOpen ? "w-64" : "w-0 lg:w-20 overflow-hidden"
        }`}
      >
        <div className={`h-full flex flex-col p-4 ${!isSidebarOpen && "lg:px-2"}`}>
          
          <div className={`flex items-center gap-3 mb-6 p-3 bg-[#f8fafc] rounded-lg border border-gray-200 ${
            !isSidebarOpen && "lg:justify-center lg:p-2"
          }`}>
            <div className="w-10 h-10 bg-[#1B4D3E] rounded-lg flex items-center justify-center shrink-0">
              <span className="text-white text-sm font-bold">{getInitials()}</span>
            </div>
            {isSidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#0f172a] truncate">{user?.firstName} {user?.lastName}</p>
                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
              </div>
            )}
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                    isActive 
                      ? "bg-[#1B4D3E]/10 text-[#1B4D3E] border border-[#1B4D3E]/20" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#0f172a]"
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 transition-colors ${
                    isActive ? "text-[#1B4D3E]" : "text-gray-400 group-hover:text-gray-600"
                  }`} />
                  {isSidebarOpen && (
                    <span className={`text-sm font-medium transition-colors ${
                      isActive ? "text-[#1B4D3E]" : "text-gray-600 group-hover:text-[#0f172a]"
                    }`}>
                      {item.label}
                    </span>
                  )}
                  {isActive && isSidebarOpen && (
                    <span className="ml-auto w-1.5 h-6 bg-[#1B4D3E] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          <button 
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-4 border-t border-gray-200 pt-4 group ${
              !isSidebarOpen && "lg:justify-center"
            }`}
          >
            <LogOut className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
            {isSidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      <main className={`flex-1 transition-all duration-300 mt-16 ${isSidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}>
        <div className="p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </div>
      </main>

      <footer className={`bg-white border-t border-gray-200 transition-all duration-300 ${isSidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <span className="text-sm font-semibold text-[#0f172a]">KDIP</span>
              <span className="text-xs text-gray-400">© 2024 Kenya Development Intelligence Platform</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-gray-500 hover:text-[#1B4D3E] transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-[#1B4D3E] transition-colors">Terms of Service</a>
              <a href="#" className="text-xs text-gray-500 hover:text-[#1B4D3E] transition-colors">Help Center</a>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">Status:</span>
                <span className="flex items-center gap-1.5 text-xs text-[#1B4D3E]">
                  <span className="w-2 h-2 bg-[#1B4D3E] rounded-full animate-pulse"></span>
                  Operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}