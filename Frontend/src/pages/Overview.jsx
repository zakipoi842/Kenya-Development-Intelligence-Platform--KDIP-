import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Target,
  Activity,
  CheckCircle,
  DollarSign,
  TrendingUp,
  Users,
  Clock,
  MapPin,
  Building2,
  Award,
  AlertCircle,
  BarChart3,
  PieChart,
  ArrowRight,
} from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Pie, Doughnut, Line } from "react-chartjs-2";
import api from "../services/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

export default function Overview() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [dashboardData, setDashboardData] = useState({
    // Projects Data
    totalProjects: 0,
    ongoingProjects: 0,
    completedProjects: 0,
    delayedProjects: 0,
    
    // Budget Data
    totalBudget: "KES 0",
    utilizedBudget: "KES 0",
    utilizationRate: 0,
    
    // Impact Data
    impactScore: 0,
    satisfaction: 0,
    topSector: "N/A",
    
    // Charts Data
    sectorStats: [],
    monthlyProgress: [],
    countyStats: [],
    budgetBySector: [],
    recentProjects: [],
  });

  const colors = {
    primary: '#1B4D3E',
    secondary: '#2D7A5E',
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#3b82f6',
    purple: '#8b5cf6',
    cyan: '#06b6d4',
    pink: '#ec4899',
    orange: '#f97316',
  };

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

        // Fetch real data from backend
        const response = await api.get("/user/dashboard");
        
        if (response.data) {
          const data = response.data;
          setDashboardData({
            // Projects Data
            totalProjects: data.totalProjects || 0,
            ongoingProjects: data.ongoingProjects || 0,
            completedProjects: data.completedProjects || 0,
            delayedProjects: data.delayedProjects || 0,
            
            // Budget Data
            totalBudget: data.totalBudget || "KES 0",
            utilizedBudget: data.utilizedBudget || "KES 0",
            utilizationRate: data.utilizationRate || 0,
            
            // Impact Data
            impactScore: data.impactScore || 0,
            satisfaction: data.satisfaction || 0,
            topSector: data.topSector || "N/A",
            
            // Charts Data
            sectorStats: data.sectorStats || [
              { name: "Infrastructure", value: 35, color: colors.primary },
              { name: "Education", value: 25, color: colors.success },
              { name: "Healthcare", value: 20, color: colors.info },
              { name: "Agriculture", value: 12, color: colors.warning },
              { name: "Energy", value: 8, color: colors.purple },
            ],
            monthlyProgress: data.monthlyProgress || [
              { month: "Jan", projects: 12 },
              { month: "Feb", projects: 15 },
              { month: "Mar", projects: 18 },
              { month: "Apr", projects: 22 },
              { month: "May", projects: 25 },
              { month: "Jun", projects: 30 },
            ],
            countyStats: data.countyStats || [
              { name: "Nairobi", score: 94 },
              { name: "Mombasa", score: 89 },
              { name: "Kisumu", score: 87 },
              { name: "Nakuru", score: 85 },
              { name: "Kiambu", score: 84 },
            ],
            budgetBySector: data.budgetBySector || [
              { name: "Infrastructure", value: 38, color: colors.primary },
              { name: "Education", value: 22, color: colors.success },
              { name: "Healthcare", value: 18, color: colors.info },
              { name: "Agriculture", value: 12, color: colors.warning },
              { name: "Water", value: 10, color: colors.cyan },
            ],
            recentProjects: data.recentProjects || [],
          });
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, [navigate]);

  // Chart Configurations
  const sectorChartData = {
    labels: dashboardData.sectorStats.map(s => s.name),
    datasets: [{
      data: dashboardData.sectorStats.map(s => s.value),
      backgroundColor: dashboardData.sectorStats.map(s => s.color || colors.primary),
      borderColor: '#fff',
      borderWidth: 2,
    }],
  };

  const budgetChartData = {
    labels: dashboardData.budgetBySector.map(s => s.name),
    datasets: [{
      data: dashboardData.budgetBySector.map(s => s.value),
      backgroundColor: dashboardData.budgetBySector.map(s => s.color || colors.primary),
      borderColor: '#fff',
      borderWidth: 2,
    }],
  };

  const progressChartData = {
    labels: dashboardData.monthlyProgress.map(p => p.month),
    datasets: [{
      label: "Projects",
      data: dashboardData.monthlyProgress.map(p => p.projects),
      backgroundColor: 'rgba(27, 77, 62, 0.2)',
      borderColor: colors.primary,
      borderWidth: 3,
      tension: 0.3,
      fill: true,
      pointBackgroundColor: colors.primary,
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 5,
    }],
  };

  const countyChartData = {
    labels: dashboardData.countyStats.map(c => c.name),
    datasets: [{
      label: "Impact Score",
      data: dashboardData.countyStats.map(c => c.score),
      backgroundColor: 'rgba(27, 77, 62, 0.8)',
      borderColor: colors.primary,
      borderWidth: 2,
      borderRadius: 6,
    }],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 12, weight: '500' },
        },
      },
    },
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1B4D3E] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const stats = [
    { label: "Total Projects", value: dashboardData.totalProjects, icon: Target, color: colors.primary },
    { label: "Ongoing", value: dashboardData.ongoingProjects, icon: Activity, color: colors.info },
    { label: "Completed", value: dashboardData.completedProjects, icon: CheckCircle, color: colors.success },
    { label: "Delayed", value: dashboardData.delayedProjects, icon: AlertCircle, color: colors.danger },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#1B4D3E] to-[#2D7A5E] rounded-2xl p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, {user?.firstName || "User"}! 👋</h1>
              <p className="text-emerald-200 mt-1 text-sm">Here's your complete development impact overview</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <div className="bg-white/20 rounded-xl px-4 py-2 text-center backdrop-blur-sm">
                <p className="text-xs text-emerald-200">Impact Score</p>
                <p className="text-xl font-bold">{dashboardData.impactScore}%</p>
              </div>
              <div className="bg-white/20 rounded-xl px-4 py-2 text-center backdrop-blur-sm">
                <p className="text-xs text-emerald-200">Satisfaction</p>
                <p className="text-xl font-bold">{dashboardData.satisfaction}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all hover:border-[#1B4D3E]/20">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-[#1B4D3E]/10">
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E]">{stat.label}</span>
                </div>
                <p className="text-2xl font-bold text-[#0f172a] mt-2">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Budget Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>Total Budget</span>
            </div>
            <p className="text-2xl font-bold text-[#0f172a] mt-1">{dashboardData.totalBudget}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>Utilized</span>
            </div>
            <p className="text-2xl font-bold text-[#1B4D3E] mt-1">{dashboardData.utilizedBudget}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Target className="w-4 h-4" />
              <span>Utilization Rate</span>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-2xl font-bold text-[#0f172a]">{dashboardData.utilizationRate}%</p>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-[#1B4D3E] rounded-full transition-all duration-1000" style={{ width: `${dashboardData.utilizationRate}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Projects by Sector - Pie Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-[#0f172a]">Projects by Sector</h3>
                <p className="text-xs text-gray-500">Distribution across sectors</p>
              </div>
              <PieChart className="w-5 h-5 text-gray-400" />
            </div>
            <div className="h-[260px]">
              <Pie data={sectorChartData} options={chartOptions} />
            </div>
          </div>

          {/* Budget Allocation - Doughnut Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-[#0f172a]">Budget Allocation</h3>
                <p className="text-xs text-gray-500">By sector</p>
              </div>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <div className="h-[260px]">
              <Doughnut data={budgetChartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Monthly Progress - Line Chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-[#0f172a]">Monthly Progress</h3>
              <p className="text-xs text-gray-500">Project completion trend</p>
            </div>
            <TrendingUp className="w-5 h-5 text-[#1B4D3E]" />
          </div>
          <div className="h-[240px]">
            <Line data={progressChartData} options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  grid: { display: true, color: 'rgba(0,0,0,0.05)' },
                },
                x: {
                  grid: { display: false },
                },
              },
            }} />
          </div>
        </div>

        {/* County Rankings - Bar Chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-[#0f172a]">County Rankings</h3>
              <p className="text-xs text-gray-500">Top performing counties</p>
            </div>
            <MapPin className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-[220px]">
            <Bar data={countyChartData} options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  grid: { display: true, color: 'rgba(0,0,0,0.05)' },
                },
                x: {
                  grid: { display: false },
                },
              },
            }} />
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[#0f172a]">Recent Projects</h3>
            <button onClick={() => navigate("/projects")} className="text-sm text-[#1B4D3E] hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          {dashboardData.recentProjects && dashboardData.recentProjects.length > 0 ? (
            <div className="space-y-3">
              {dashboardData.recentProjects.slice(0, 4).map((project, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#1B4D3E]/20 transition-all">
                  <div>
                    <p className="font-medium text-[#0f172a]">{project.title}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{project.county}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <Building2 className="w-3 h-3" />
                      <span>{project.sector}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      project.status === "Completed" ? "bg-green-100 text-green-700" :
                      project.status === "Ongoing" ? "bg-blue-100 text-blue-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-sm font-semibold text-[#1B4D3E]">{project.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No projects found</p>
            </div>
          )}
        </div>

        {/* Key Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Award className="w-4 h-4 text-[#1B4D3E]" />
              <span>Top Performing Sector</span>
            </div>
            <p className="text-lg font-bold text-[#0f172a] mt-1">{dashboardData.topSector}</p>
            <p className="text-xs text-gray-500">Highest impact sector</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Users className="w-4 h-4 text-[#1B4D3E]" />
              <span>Total Beneficiaries</span>
            </div>
            <p className="text-lg font-bold text-[#0f172a] mt-1">8.2M+</p>
            <p className="text-xs text-gray-500">Across all projects</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Clock className="w-4 h-4 text-[#1B4D3E]" />
              <span>Projects On Track</span>
            </div>
            <p className="text-lg font-bold text-[#0f172a] mt-1">
              {dashboardData.totalProjects > 0 
                ? Math.round((dashboardData.completedProjects / dashboardData.totalProjects) * 100) 
                : 0}%
            </p>
            <p className="text-xs text-gray-500">Completion rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
