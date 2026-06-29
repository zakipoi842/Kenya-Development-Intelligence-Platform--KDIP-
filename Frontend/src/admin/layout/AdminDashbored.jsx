import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
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
  MessageSquare,
  Shield,
  MapPin,
} from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    
    if (!userData || !isAuthenticated) {
      navigate("/login");
      return;
    }
    
    setUser(JSON.parse(userData));
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
    navigate("/login");
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  // Professional Admin Navigation Items
  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "users", label: "User Management", icon: Users },
    { id: "projects", label: "Project Management", icon: Target },
    { id: "budget", label: "Budget & Finance", icon: DollarSign },
    { id: "reports", label: "Reports & Analytics", icon: FileText },
    { id: "feedback", label: "Feedback & Reviews", icon: MessageSquare },
    { id: "counties", label: "County Management", icon: MapPin },
    { id: "system", label: "System Settings", icon: Settings },
  ];

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#22c55e] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        </div>
      </div>
    );
  }

  // Empty page render - completely blank
  const renderPageContent = () => {
    return <div className="min-h-[70vh]"></div>;
  };

  return (
    <>
      {/* Global styles to hide scroll bars */}
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Hide scrollbar for entire page and sidebar */
        body, html {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        body::-webkit-scrollbar, html::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for sidebar specifically */
        .sidebar-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow-y: auto;
        }
        .sidebar-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="min-h-screen bg-[#f8fafc] flex flex-col">
        
        {/* Top Navigation Bar */}
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
          <div className="flex items-center justify-between px-4 h-16">
            
            {/* Left Section - Logo & Toggle */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#22c55e] rounded-lg flex items-center justify-center">
                  <LayoutDashboard className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg text-[#0f172a] hidden sm:block">KDIP</span>
                <span className="text-xs text-gray-400 hidden sm:block">| Admin Panel</span>
              </div>
            </div>

            {/* Center Section - Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search users, projects, reports..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-all placeholder-gray-400"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-2">
              {/* Mobile Search Toggle */}
              <button 
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors md:hidden"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </button>

              {/* Notifications */}
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
                
                {/* Notifications Dropdown */}
                {showNotifications && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)}></div>
                    <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-lg border border-gray-200 z-50 max-h-[calc(100vh-100px)] overflow-hidden">
                      <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                        <span className="font-semibold text-[#0f172a]">Notifications</span>
                      </div>
                      <div className="max-h-96 overflow-y-auto no-scrollbar">
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

              {/* User Menu */}
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 p-1.5 pr-3 rounded-lg hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
                >
                  <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {user.firstName?.[0]}{user.lastName?.[0] || "A"}
                    </span>
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-[#0f172a]">
                    {user.firstName || "Admin"}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
                </button>
                
                {/* User Dropdown */}
                {showUserMenu && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)}></div>
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg border border-gray-200 z-50 overflow-hidden">
                      <div className="p-4 border-b border-gray-100">
                        <p className="text-sm font-semibold text-[#0f172a]">{user.firstName} {user.lastName}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        <span className="inline-block mt-1.5 px-2 py-0.5 text-[10px] font-medium bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20 rounded-full">
                          Administrator
                        </span>
                      </div>
                      <div className="p-2">
                        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                          <UserCircle className="w-4 h-4 text-gray-400" />
                          My Profile
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

          {/* Mobile Search Bar */}
          {showMobileSearch && (
            <div className="md:hidden p-2 border-t border-gray-100 bg-white">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-all"
                  autoFocus
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          )}
        </header>

        {/* Sidebar */}
        <aside 
          className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
            isSidebarOpen ? "w-64" : "w-0 lg:w-20 overflow-hidden"
          }`}
        >
          <div className={`h-full flex flex-col p-4 ${!isSidebarOpen && "lg:px-2"} sidebar-scroll`}>
            
            {/* Admin Info */}
            <div className={`flex items-center gap-3 mb-6 p-3 bg-[#f8fafc] rounded-lg border border-gray-200 ${
              !isSidebarOpen && "lg:justify-center lg:p-2"
            }`}>
              <div className="w-10 h-10 bg-[#22c55e] rounded-lg flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              {isSidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#0f172a] truncate">{user.firstName} {user.lastName}</p>
                  <p className="text-xs text-gray-500 truncate">System Administrator</p>
                </div>
              )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 sidebar-scroll">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                      isActive 
                        ? "bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20" 
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#0f172a]"
                    }`}
                  >
                    <Icon className={`w-5 h-5 shrink-0 transition-colors ${
                      isActive ? "text-[#22c55e]" : "text-gray-400 group-hover:text-gray-600"
                    }`} />
                    {isSidebarOpen && (
                      <span className={`text-sm font-medium transition-colors ${
                        isActive ? "text-[#22c55e]" : "text-gray-600 group-hover:text-[#0f172a]"
                      }`}>
                        {item.label}
                      </span>
                    )}
                    {isActive && isSidebarOpen && (
                      <span className="ml-auto w-1.5 h-6 bg-[#22c55e] rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Logout Button */}
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

        {/* Main Content - Completely Empty */}
        <main className={`flex-1 transition-all duration-300 mt-16 ${isSidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}>
          <div className="p-4 sm:p-6 lg:p-8">
            {renderPageContent()}
          </div>
        </main>

        {/* Footer - Original Professional Style */}
        <footer className={`bg-white border-t border-gray-200 transition-all duration-300 ${isSidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6">
                <span className="text-sm font-semibold text-gray-900">KDIP</span>
                <span className="text-xs text-gray-400">© 2024 Kenya Development Intelligence Platform</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-xs text-gray-500 hover:text-emerald-600 transition-colors">Privacy Policy</a>
                <a href="#" className="text-xs text-gray-500 hover:text-emerald-600 transition-colors">Terms of Service</a>
                <a href="#" className="text-xs text-gray-500 hover:text-emerald-600 transition-colors">Help Center</a>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">Status:</span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    Operational
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}