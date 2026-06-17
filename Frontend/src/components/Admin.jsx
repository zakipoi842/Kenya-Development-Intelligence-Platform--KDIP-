import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Target,
  Settings,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Filter,
  Calendar,
  Clock,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  AlertCircle,
  UserPlus,
  MessageSquare,
  DollarSign,
  MapPin,
  Building2,
  Shield,
  Globe,
  Phone,
  Mail,
  Star,
  Activity,
  PieChart,
  Layers,
  BookOpen,
  Award,
  Briefcase,
  Users2,
  UserCheck,
  UserX,
  UserMinus,
  Zap,
  Sparkles,
  Crown,
  Medal,
  Trophy,
  Heart,
  Flame,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  Wind,
  Droplets,
  Thermometer,
  Compass,
  Navigation,
  Anchor,
  Ship,
  Truck,
  Plane,
  Train,
  Bus,
  Bike,
  Car,
  UserCircle,
  MessageCircle,
  Share2,
  HeartHandshake,
  Handshake,
  ThumbsUp,
  ThumbsDown,
  AlertTriangle,
  ShieldCheck,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  CreditCard,
  Wallet,
  PiggyBank,
  Coins,
  Euro,
  PoundSterling,
  Rocket,
  Globe2,
  Map,
  MapPinned,
  Navigation2,
  Route,
  Signpost,
  Construction,
  Wrench,
  Hammer,
  HardHat,
  ClipboardList,
  ClipboardCheck,
  ClipboardEdit,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FolderSearch,
  FolderCheck,
  Database,
  Server,
  CloudDownload,
  CloudUpload,
  CloudSnow,
  CloudLightning,
  CloudSun,
  CloudMoon,
  Cloudy,
  Compass as CompassIcon,
  Star as StarIcon,
  Sparkles as SparklesIcon,
  Zap as ZapIcon,
  Flame as FlameIcon,
  Heart as HeartIcon,
  Shield as ShieldIcon,
  Award as AwardIcon,
  Trophy as TrophyIcon,
  Medal as MedalIcon,
  Crown as CrownIcon,
  Gem,
  Diamond,
  Rocket as RocketIcon,
  Globe2 as Globe2Icon,
  Map as MapIcon,
  MapPinned as MapPinnedIcon,
  Navigation2 as Navigation2Icon,
  Route as RouteIcon,
  Signpost as SignpostIcon,
  Construction as ConstructionIcon,
  Wrench as WrenchIcon,
  Hammer as HammerIcon,
  HardHat as HardHatIcon,
  ClipboardList as ClipboardListIcon,
  ClipboardCheck as ClipboardCheckIcon,
  ClipboardEdit as ClipboardEditIcon,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
  FolderPlus as FolderPlusIcon,
  FolderMinus as FolderMinusIcon,
  FolderSearch as FolderSearchIcon,
  FolderCheck as FolderCheckIcon,
  Database as DatabaseIcon,
  Server as ServerIcon,
  Cloud as CloudIcon,
  CloudDownload as CloudDownloadIcon,
  CloudUpload as CloudUploadIcon,
  CloudSnow as CloudSnowIcon,
  CloudLightning as CloudLightningIcon,
  CloudSun as CloudSunIcon,
  CloudMoon as CloudMoonIcon,
  Cloudy as CloudyIcon,
} from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New user registered", time: "5 min ago", read: false, icon: UserPlus },
    { id: 2, title: "Project milestone reached", time: "1 hour ago", read: false, icon: Target },
    { id: 3, title: "Budget alert: Nakuru County", time: "3 hours ago", read: false, icon: DollarSign },
    { id: 4, title: "New report submitted", time: "5 hours ago", read: true, icon: FileText },
    { id: 5, title: "System update completed", time: "1 day ago", read: true, icon: Settings },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const userData = localStorage.getItem("user");
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    
    if (!userData || !isAuthenticated) {
      navigate("/login");
      return;
    }
    
    setUser(JSON.parse(userData));
    
    // Check if user is admin
    const parsedUser = JSON.parse(userData);
    if (parsedUser.role !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  // Handle window resize
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

  const markAllNotificationsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  // Dashboard stats
  const stats = [
    { label: "Total Users", value: "15,328", change: "+12.5%", trend: "up", icon: Users, color: "bg-blue-500" },
    { label: "Total Projects", value: "12,540", change: "+8.3%", trend: "up", icon: FileText, color: "bg-emerald-500" },
    { label: "Budget Allocated", value: "KES 2.31T", change: "+5.2%", trend: "up", icon: DollarSign, color: "bg-purple-500" },
    { label: "Active Counties", value: "47", change: "+0%", trend: "neutral", icon: MapPin, color: "bg-orange-500" },
    { label: "Reports Submitted", value: "1,528", change: "+18.7%", trend: "up", icon: MessageSquare, color: "bg-red-500" },
    { label: "Community Feedback", value: "4,203", change: "+22.1%", trend: "up", icon: Users, color: "bg-pink-500" },
  ];

  // Recent activities
  const recentActivities = [
    { id: 1, user: "John Mwangi", action: "reported an issue on", project: "Nakuru Water Project", time: "2 hours ago", type: "report" },
    { id: 2, user: "Sarah Ochieng", action: "submitted feedback for", project: "Kisumu Affordable Housing", time: "4 hours ago", type: "feedback" },
    { id: 3, user: "Peter Kamau", action: "volunteered for", project: "Machakos Level 5 Hospital", time: "6 hours ago", type: "volunteer" },
    { id: 4, user: "Mary Atieno", action: "suggested budget for", project: "Kiambu Roads Network", time: "8 hours ago", type: "budget" },
    { id: 5, user: "Admin User", action: "approved a new project", project: "Eldoret Sports City", time: "1 day ago", type: "admin" },
  ];

  // Quick actions
  const quickActions = [
    { label: "Add New Project", icon: Plus, color: "bg-emerald-500", path: "/admin/projects/add" },
    { label: "Manage Users", icon: Users, color: "bg-blue-500", path: "/admin/users" },
    { label: "View Reports", icon: FileText, color: "bg-purple-500", path: "/admin/reports" },
    { label: "Budget Settings", icon: DollarSign, color: "bg-orange-500", path: "/admin/budget" },
  ];

  // Pending approvals
  const pendingApprovals = [
    { id: 1, type: "Project", title: "Kisumu - Busia Road Upgrade", submittedBy: "KeRRA", date: "2024-12-10", status: "pending" },
    { id: 2, type: "Budget", title: "Nakuru Water Supply Expansion", submittedBy: "Water Services Board", date: "2024-12-08", status: "pending" },
    { id: 3, type: "Report", title: "Mombasa Port Quality Issue", submittedBy: "Citizen Report", date: "2024-12-07", status: "pending" },
  ];

  // System health
  const systemHealth = [
    { label: "API Status", status: "Operational", icon: CheckCircle, color: "text-emerald-500" },
    { label: "Database", status: "Connected", icon: CheckCircle, color: "text-emerald-500" },
    { label: "Server Load", status: "68%", icon: Activity, color: "text-blue-500" },
    { label: "Last Backup", status: "2 hours ago", icon: Clock, color: "text-yellow-500" },
  ];

  const getTrendIcon = (trend) => {
    if (trend === "up") return <TrendingUp className="w-3 h-3 text-emerald-500" />;
    if (trend === "down") return <TrendingDown className="w-3 h-3 text-red-500" />;
    return null;
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case "pending": return "bg-yellow-100 text-yellow-700";
      case "approved": return "bg-emerald-100 text-emerald-700";
      case "rejected": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex pt-16">
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-16 left-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
          isSidebarOpen ? "w-64" : "w-0 lg:w-20 overflow-hidden"
        }`}
      >
        <div className={`p-4 ${!isSidebarOpen && "lg:px-2"}`}>
          {/* Sidebar Header */}
          <div className={`flex items-center gap-3 mb-6 ${!isSidebarOpen && "lg:justify-center"}`}>
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shrink-0">
              <LayoutDashboard className="w-4 h-4 text-white" />
            </div>
            {isSidebarOpen && <span className="font-bold text-gray-900">Admin Panel</span>}
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                activeTab === "overview" ? "bg-emerald-50 text-emerald-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <LayoutDashboard className="w-5 h-5 shrink-0" />
              {isSidebarOpen && <span className="text-sm font-medium">Overview</span>}
            </button>
            
            <button 
              onClick={() => setActiveTab("users")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                activeTab === "users" ? "bg-emerald-50 text-emerald-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Users className="w-5 h-5 shrink-0" />
              {isSidebarOpen && <span className="text-sm font-medium">Users</span>}
            </button>
            
            <button 
              onClick={() => setActiveTab("projects")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                activeTab === "projects" ? "bg-emerald-50 text-emerald-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <FileText className="w-5 h-5 shrink-0" />
              {isSidebarOpen && <span className="text-sm font-medium">Projects</span>}
            </button>
            
            <button 
              onClick={() => setActiveTab("budget")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                activeTab === "budget" ? "bg-emerald-50 text-emerald-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <DollarSign className="w-5 h-5 shrink-0" />
              {isSidebarOpen && <span className="text-sm font-medium">Budget</span>}
            </button>
            
            <button 
              onClick={() => setActiveTab("reports")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                activeTab === "reports" ? "bg-emerald-50 text-emerald-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <MessageSquare className="w-5 h-5 shrink-0" />
              {isSidebarOpen && <span className="text-sm font-medium">Feedback</span>}
            </button>
            
            <button 
              onClick={() => setActiveTab("settings")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                activeTab === "settings" ? "bg-emerald-50 text-emerald-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Settings className="w-5 h-5 shrink-0" />
              {isSidebarOpen && <span className="text-sm font-medium">Settings</span>}
            </button>
          </nav>

          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-6 border-t border-gray-200 pt-4`}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {isSidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}>
        
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sticky top-16 z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-1.5 rounded-md hover:bg-gray-100"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-lg font-semibold text-gray-900">
                {activeTab === "overview" && "Dashboard Overview"}
                {activeTab === "users" && "User Management"}
                {activeTab === "projects" && "Project Management"}
                {activeTab === "budget" && "Budget Management"}
                {activeTab === "reports" && "Feedback & Reports"}
                {activeTab === "settings" && "Settings"}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="hidden sm:block relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-40 lg:w-56 pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              </div>

              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 relative"
                >
                  <Bell className="w-5 h-5 text-gray-600" />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] rounded-full flex items-center justify-center">
                      {notifications.filter(n => !n.read).length}
                    </span>
                  )}
                </button>
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                    <div className="p-3 border-b border-gray-100 flex justify-between items-center">
                      <span className="font-semibold text-gray-900 text-sm">Notifications</span>
                      <button onClick={markAllNotificationsRead} className="text-xs text-emerald-600 hover:text-emerald-700">
                        Mark all read
                      </button>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map((notification) => {
                        const Icon = notification.icon;
                        return (
                          <div key={notification.id} className={`px-3 py-2.5 hover:bg-gray-50 transition-colors ${!notification.read ? "bg-emerald-50/30" : ""}`}>
                            <div className="flex items-start gap-2.5">
                              <div className={`w-7 h-7 rounded-full flex items-center justify-center ${!notification.read ? "bg-emerald-100" : "bg-gray-100"}`}>
                                <Icon className={`w-3.5 h-3.5 ${!notification.read ? "text-emerald-600" : "text-gray-400"}`} />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm text-gray-700">{notification.title}</p>
                                <p className="text-xs text-gray-400">{notification.time}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100"
                >
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <UserCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-700">{user.firstName || "Admin"}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                    <div className="p-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">{user.firstName} {user.lastName}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors rounded-b-xl"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-8 h-8 ${stat.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className={`text-xs font-medium ${stat.trend === "up" ? "text-emerald-600" : stat.trend === "down" ? "text-red-600" : "text-gray-500"}`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                  <div className="border-b border-gray-100 mt-2"></div>
                </div>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {quickActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <button
                  key={idx}
                  onClick={() => navigate(action.path)}
                  className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
                >
                  <div className={`w-10 h-10 ${action.color} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                </button>
              );
            })}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            
            {/* Recent Activities */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-semibold text-gray-900">Recent Activities</h2>
                <button className="text-xs text-emerald-600 hover:text-emerald-700">View All</button>
              </div>
              <div className="space-y-3">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === "report" ? "bg-red-100" :
                      activity.type === "feedback" ? "bg-blue-100" :
                      activity.type === "volunteer" ? "bg-purple-100" :
                      activity.type === "budget" ? "bg-emerald-100" : "bg-gray-100"
                    }`}>
                      {activity.type === "report" && <AlertCircle className="w-4 h-4 text-red-600" />}
                      {activity.type === "feedback" && <MessageSquare className="w-4 h-4 text-blue-600" />}
                      {activity.type === "volunteer" && <Users className="w-4 h-4 text-purple-600" />}
                      {activity.type === "budget" && <DollarSign className="w-4 h-4 text-emerald-600" />}
                      {activity.type === "admin" && <UserCheck className="w-4 h-4 text-gray-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">{activity.user}</span> {activity.action} <span className="font-medium">{activity.project}</span>
                      </p>
                      <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Approvals */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-semibold text-gray-900">Pending Approvals</h2>
                <button className="text-xs text-emerald-600 hover:text-emerald-700">View All</button>
              </div>
              <div className="space-y-3">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{item.type}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="text-xs text-gray-500">By: {item.submittedBy}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusBadge(item.status)}`}>
                        {item.status}
                      </span>
                      <button className="p-1 hover:bg-emerald-100 rounded transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </button>
                      <button className="p-1 hover:bg-red-100 rounded transition-colors">
                        <X className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* System Health & Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* System Health */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm lg:col-span-1">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">System Health</h2>
              <div className="space-y-3">
                {systemHealth.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{item.label}</span>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-sm font-medium ${item.color}`}>{item.status}</span>
                        <Icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm lg:col-span-2">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">Platform Statistics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Total Reports</p>
                  <p className="text-xl font-bold text-gray-900">1,528</p>
                  <div className="h-1.5 bg-gray-200 rounded-full mt-2">
                    <div className="h-1.5 bg-emerald-500 rounded-full" style={{ width: "68%" }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Resolved Reports</p>
                  <p className="text-xl font-bold text-emerald-600">1,247</p>
                  <div className="h-1.5 bg-gray-200 rounded-full mt-2">
                    <div className="h-1.5 bg-emerald-500 rounded-full" style={{ width: "82%" }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Active Users</p>
                  <p className="text-xl font-bold text-blue-600">15,328</p>
                  <div className="h-1.5 bg-gray-200 rounded-full mt-2">
                    <div className="h-1.5 bg-blue-500 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Volunteers</p>
                  <p className="text-xl font-bold text-purple-600">345</p>
                  <div className="h-1.5 bg-gray-200 rounded-full mt-2">
                    <div className="h-1.5 bg-purple-500 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}