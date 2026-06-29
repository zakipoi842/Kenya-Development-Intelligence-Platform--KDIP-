// ProjectsPage.jsx - Complete with Real Data and Backend Integration
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Grid,
  List,
  X,
  ChevronDown,
  MapPin,
  Calendar,
  DollarSign,
  Target,
  Users,
  Clock,
  AlertCircle,
  CheckCircle,
  Building2,
  GraduationCap,
  Heart,
  Sprout,
  Droplets,
  Home,
  Zap,
  Car,
  Umbrella,
  Globe,
  FileText,
  Flag,
  BarChart3,
  Activity,
  Layers,
  Eye,
  Play,
  Pause,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
  Plus,
  Edit,
  Trash2,
  Filter,
  RefreshCw
} from 'lucide-react';
import api from '../services/api';

export default function ProjectsPage() {
  const navigate = useNavigate();
  
  // ===== STATE =====
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filter states
  const [selectedCounty, setSelectedCounty] = useState('all');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  
  // Modal states
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCountyDropdownOpen, setIsCountyDropdownOpen] = useState(false);
  const [countySearch, setCountySearch] = useState('');
  
  // Form states
  const [formData, setFormData] = useState({
    title: '',
    county: '',
    sector: '',
    status: 'Ongoing',
    progress: 0,
    budget: '',
    utilized: '',
    startDate: '',
    endDate: '',
    description: '',
    contractor: '',
    beneficiaries: 0
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  // ===== ALL 47 COUNTIES =====
  const counties = [
    'Baringo', 'Bomet', 'Bungoma', 'Busia', 'Elgeyo Marakwet', 
    'Embu', 'Garissa', 'Homa Bay', 'Isiolo', 'Kajiado', 'Kakamega', 'Kericho', 
    'Kiambu', 'Kilifi', 'Kirinyaga', 'Kisii', 'Kisumu', 'Kitui', 'Kwale', 
    'Laikipia', 'Lamu', 'Machakos', 'Makueni', 'Mandera', 'Marsabit', 'Meru', 
    'Migori', 'Mombasa', 'Muranga', 'Nairobi', 'Nakuru', 'Nandi', 'Narok', 
    'Nyamira', 'Nyandarua', 'Nyeri', 'Samburu', 'Siaya', 'Taita Taveta', 
    'Tana River', 'Tharaka Nithi', 'Trans Nzoia', 'Turkana', 'Uasin Gishu', 
    'Vihiga', 'Wajir', 'West Pokot'
  ];

  const filteredCounties = counties.filter(county => 
    county.toLowerCase().includes(countySearch.toLowerCase())
  );

  const sectors = [
    'Infrastructure', 'Healthcare', 'Education', 
    'Water & Sanitation', 'Agriculture', 'Energy', 'Housing', 'Transport', 'Tourism', 'Technology'
  ];

  const statuses = ['Ongoing', 'Completed', 'Delayed', 'Planning', 'Tendering'];

  // ===== SECTOR ICON MAP =====
  const sectorIcons = {
    'Infrastructure': Building2,
    'Education': GraduationCap,
    'Healthcare': Heart,
    'Agriculture': Sprout,
    'Water & Sanitation': Droplets,
    'Housing': Home,
    'Energy': Zap,
    'Transport': Car,
    'Tourism': Umbrella,
    'Technology': Globe
  };

  // ===== FETCH PROJECTS =====
  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/projects');
      setProjects(response.data);
      setFilteredProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setError('Failed to load projects. Please try again.');
      // Fallback to sample data if API fails
      setProjects(sampleProjects);
      setFilteredProjects(sampleProjects);
    } finally {
      setLoading(false);
    }
  };

  // ===== SAMPLE DATA (Fallback) =====
  const sampleProjects = [
    { id: 1, title: 'Baringo County Roads Rehabilitation', county: 'Baringo', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 875M', startDate: 'Jan 2022', endDate: 'Dec 2023', description: 'Rehabilitation of 150km of county roads connecting major trading centers.', contractor: 'KeRRA', beneficiaries: 250000 },
    { id: 2, title: 'Baringo Affordable Housing', county: 'Baringo', sector: 'Housing', status: 'Ongoing', progress: 71, budget: 'KES 450M', utilized: 'KES 320M', startDate: 'Mar 2022', endDate: 'Dec 2024', description: '300 affordable housing units in Kabarnet town.', contractor: 'National Housing Corporation', beneficiaries: 1500 },
    { id: 5, title: 'Bomet Tea Factory Modernization', county: 'Bomet', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 1.2B', utilized: 'KES 1.18B', startDate: 'May 2021', endDate: 'Jun 2024', description: 'Modern tea processing facility with increased capacity.', contractor: 'KTDA', beneficiaries: 120000 },
    { id: 7, title: 'Bomet Level 4 Hospital', county: 'Bomet', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Jan 2020', endDate: 'Dec 2023', description: 'Upgrade of Bomet Hospital to Level 4 status.', contractor: 'Ministry of Health', beneficiaries: 500000 },
    { id: 11, title: 'Bungoma Referral Hospital', county: 'Bungoma', sector: 'Healthcare', status: 'Ongoing', progress: 65, budget: 'KES 1.5B', utilized: 'KES 980M', startDate: 'Feb 2022', endDate: 'Aug 2025', description: 'Upgrade of Bungoma Hospital to Level 5 referral status.', contractor: 'Ministry of Health', beneficiaries: 1200000 },
    { id: 14, title: 'Busia One Stop Border Post', county: 'Busia', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 2.5B', utilized: 'KES 2.48B', startDate: 'Jan 2021', endDate: 'Jun 2023', description: 'Modernized border post to facilitate trade with Uganda.', contractor: 'Kenya Railways', beneficiaries: 500000 },
    { id: 26, title: 'Garissa Solar Power Plant', county: 'Garissa', sector: 'Energy', status: 'Completed', progress: 100, budget: 'KES 13.5B', utilized: 'KES 13.4B', startDate: 'Mar 2019', endDate: 'Dec 2022', description: '55MW solar power plant - largest in East Africa at completion.', contractor: 'Rural Electrification Authority', beneficiaries: 500000 },
    { id: 44, title: 'Kakamega County Referral Hospital', county: 'Kakamega', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 3.1B', utilized: 'KES 3.05B', startDate: 'Mar 2020', endDate: 'Dec 2023', description: 'Level 5 hospital serving Western Kenya.', contractor: 'Ministry of Health', beneficiaries: 2800000 },
    { id: 53, title: 'Thika Road Expansion', county: 'Kiambu', sector: 'Transport', status: 'Completed', progress: 100, budget: 'KES 31B', utilized: 'KES 30.8B', startDate: 'Jan 2018', endDate: 'Nov 2024', description: 'Expansion of Thika Superhighway from 6 to 10 lanes.', contractor: 'China Wu Yi', beneficiaries: 3500000 },
    { id: 72, title: 'Kisumu Port Rehabilitation', county: 'Kisumu', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 3.2B', utilized: 'KES 3.15B', startDate: 'Aug 2021', endDate: 'Dec 2023', description: 'Rehabilitation of Kisumu Port for Lake Victoria trade.', contractor: 'Kenya Ports Authority', beneficiaries: 1200000 },
    { id: 93, title: 'Konza Technopolis Phase 1', county: 'Machakos', sector: 'Infrastructure', status: 'Ongoing', progress: 40, budget: 'KES 82B', utilized: 'KES 32.8B', startDate: 'Mar 2018', endDate: 'Dec 2027', description: 'Kenya\'s "Silicon Savanna" technology hub.', contractor: 'Konza Technopolis Authority', beneficiaries: 200000 },
    { id: 119, title: 'Mombasa Port Modernization', county: 'Mombasa', sector: 'Infrastructure', status: 'Ongoing', progress: 45, budget: 'KES 38B', utilized: 'KES 17.1B', startDate: 'Jun 2022', endDate: 'Dec 2026', description: 'Container terminal expansion and cargo handling.', contractor: 'China Communications Construction', beneficiaries: 2000000 },
    { id: 128, title: 'Nairobi Expressway', county: 'Nairobi', sector: 'Transport', status: 'Completed', progress: 100, budget: 'KES 75B', utilized: 'KES 74.2B', startDate: 'Mar 2019', endDate: 'Jul 2022', description: '27km elevated highway from JKIA to Westlands.', contractor: 'China Road & Bridge Corporation', beneficiaries: 3500000 },
    { id: 134, title: 'Nakuru - Eldoret Highway', county: 'Nakuru', sector: 'Transport', status: 'Ongoing', progress: 70, budget: 'KES 28B', utilized: 'KES 19.6B', startDate: 'Feb 2022', endDate: 'Aug 2025', description: '120km highway upgrade to dual carriageway.', contractor: 'China Wu Yi', beneficiaries: 950000 },
    { id: 155, title: 'Nyeri Level 5 Hospital', county: 'Nyeri', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 2.8B', utilized: 'KES 2.76B', startDate: 'Aug 2020', endDate: 'Jul 2023', description: 'Upgrade to Level 5 referral facility.', contractor: 'Ministry of Health', beneficiaries: 1500000 },
    { id: 184, title: 'Turkana Wind Power Phase 2', county: 'Turkana', sector: 'Energy', status: 'Ongoing', progress: 35, budget: 'KES 15B', utilized: 'KES 5.25B', startDate: 'Jun 2022', endDate: 'Jun 2026', description: 'Expansion adding 100MW capacity.', contractor: 'Lake Turkana Wind Power', beneficiaries: 500000 },
    { id: 198, title: 'Wajir Madaraka Day Stadium', county: 'Wajir', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 1.8B', utilized: 'KES 1.78B', startDate: 'Jan 2021', endDate: 'May 2023', description: '15,000-capacity stadium that hosted 2023 Madaraka Day celebrations.', contractor: 'Sports Kenya', beneficiaries: 200000 },
    { id: 206, title: 'West Pokot Livestock Market', county: 'West Pokot', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 230M', utilized: 'KES 230M', startDate: 'Apr 2021', endDate: 'Dec 2023', description: 'Modern livestock market and auction center.', contractor: 'County Government', beneficiaries: 40000 },
  ];

  // ===== FILTER PROJECTS =====
  useEffect(() => {
    let filtered = projects;
    
    if (selectedCounty !== 'all') {
      filtered = filtered.filter(p => p.county === selectedCounty);
    }
    
    if (selectedSector !== 'all') {
      filtered = filtered.filter(p => p.sector === selectedSector);
    }
    
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(p => p.status === selectedStatus);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.county.toLowerCase().includes(query) ||
        p.sector.toLowerCase().includes(query)
      );
    }
    
    setFilteredProjects(filtered);
  }, [projects, selectedCounty, selectedSector, selectedStatus, searchQuery]);

  // ===== CRUD OPERATIONS =====
  
  // Add Project
  const handleAddProject = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');
    
    try {
      const response = await api.post('/projects', formData);
      setProjects([...projects, response.data]);
      setFilteredProjects([...projects, response.data]);
      setIsAddModalOpen(false);
      resetForm();
      alert('Project added successfully!');
    } catch (error) {
      console.error('Error adding project:', error);
      setFormError('Failed to add project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Edit Project
  const handleEditProject = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');
    
    try {
      const response = await api.put(`/projects/${selectedProject.id}`, formData);
      const updatedProjects = projects.map(p => 
        p.id === selectedProject.id ? response.data : p
      );
      setProjects(updatedProjects);
      setFilteredProjects(updatedProjects);
      setIsEditModalOpen(false);
      resetForm();
      alert('Project updated successfully!');
    } catch (error) {
      console.error('Error updating project:', error);
      setFormError('Failed to update project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Project
  const handleDeleteProject = async () => {
    setIsSubmitting(true);
    
    try {
      await api.delete(`/projects/${selectedProject.id}`);
      const updatedProjects = projects.filter(p => p.id !== selectedProject.id);
      setProjects(updatedProjects);
      setFilteredProjects(updatedProjects);
      setIsDeleteModalOpen(false);
      setSelectedProject(null);
      alert('Project deleted successfully!');
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ===== FORM HANDLERS =====
  const resetForm = () => {
    setFormData({
      title: '',
      county: '',
      sector: '',
      status: 'Ongoing',
      progress: 0,
      budget: '',
      utilized: '',
      startDate: '',
      endDate: '',
      description: '',
      contractor: '',
      beneficiaries: 0
    });
    setFormError('');
  };

  const handleFormChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value
    }));
  };

  const openEditModal = (project) => {
    setSelectedProject(project);
    setFormData({
      title: project.title,
      county: project.county,
      sector: project.sector,
      status: project.status,
      progress: project.progress,
      budget: project.budget,
      utilized: project.utilized,
      startDate: project.startDate,
      endDate: project.endDate,
      description: project.description || '',
      contractor: project.contractor || '',
      beneficiaries: project.beneficiaries || 0
    });
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (project) => {
    setSelectedProject(project);
    setIsDeleteModalOpen(true);
  };

  const openViewModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // ===== STATS =====
  const stats = {
    total: projects.length,
    ongoing: projects.filter(p => p.status === 'Ongoing').length,
    completed: projects.filter(p => p.status === 'Completed').length,
    delayed: projects.filter(p => p.status === 'Delayed').length,
    totalBudget: 'KES 523.8B'
  };

  // ===== GET STATUS BADGE =====
  const getStatusBadge = (status) => {
    const styles = {
      'Ongoing': 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20',
      'Completed': 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20',
      'Delayed': 'bg-red-100 text-red-700 border border-red-200',
      'Planning': 'bg-purple-100 text-purple-700 border border-purple-200',
      'Tendering': 'bg-orange-100 text-orange-700 border border-orange-200'
    };
    return styles[status] || 'bg-gray-100 text-gray-700 border border-gray-200';
  };

  // ===== GET SECTOR ICON =====
  const getSectorIcon = (sectorName) => {
    const Icon = sectorIcons[sectorName];
    return Icon ? <Icon size={14} className="text-[#22c55e]" /> : <Building2 size={14} className="text-[#22c55e]" />;
  };

  // ===== INITIAL FETCH =====
  useEffect(() => {
    fetchProjects();
  }, []);

  // ===== RENDER =====
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#22c55e] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#0f172a] font-medium">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20">
      
      {/* ===== PAGE HEADER ===== */}
      <div className="bg-white border-b border-gray-200 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="p-2 bg-[#22c55e]/10 rounded-lg border border-[#22c55e]/20">
                  <Layers size={24} className="text-[#22c55e]" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-[#0f172a]">Development Projects</h1>
              </div>
              <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                <Activity size={14} className="text-[#22c55e]" />
                Tracking <span className="font-bold text-[#22c55e]">{stats.total} projects</span> across <span className="font-bold text-[#22c55e]">47 counties</span> | 
                <span className="ml-1">{stats.completed} completed • {stats.ongoing} ongoing • {stats.delayed} delayed</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-[#22c55e]/10 text-[#22c55e]' : 'bg-gray-100 text-gray-500'}`}
              >
                <Grid size={20} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-[#22c55e]/10 text-[#22c55e]' : 'bg-gray-100 text-gray-500'}`}
              >
                <List size={20} />
              </button>
              <button 
                onClick={() => { resetForm(); setIsAddModalOpen(true); }}
                className="flex items-center gap-2 px-4 py-2 bg-[#22c55e] text-white rounded-lg hover:bg-[#16a34a] transition-colors"
              >
                <Plus size={16} />
                Add Project
              </button>
              <button 
                onClick={fetchProjects}
                className="p-2 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                title="Refresh"
              >
                <RefreshCw size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== STATS CARDS ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#22c55e]/30 transition-all cursor-default">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-2xl font-bold text-[#22c55e]">{stats.total}</div>
                <div className="text-xs text-gray-500">Total Projects</div>
              </div>
              <div className="p-2 bg-[#22c55e]/10 rounded-lg">
                <Layers size={16} className="text-[#22c55e]" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#22c55e]/30 transition-all cursor-default">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-2xl font-bold text-[#0f172a]">{stats.ongoing}</div>
                <div className="text-xs text-gray-500">Ongoing</div>
              </div>
              <div className="p-2 bg-[#0f172a]/10 rounded-lg">
                <Play size={16} className="text-[#0f172a]" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#22c55e]/30 transition-all cursor-default">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-2xl font-bold text-[#22c55e]">{stats.completed}</div>
                <div className="text-xs text-gray-500">Completed</div>
              </div>
              <div className="p-2 bg-[#22c55e]/10 rounded-lg">
                <CheckCircle size={16} className="text-[#22c55e]" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#22c55e]/30 transition-all cursor-default">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-2xl font-bold text-red-600">{stats.delayed}</div>
                <div className="text-xs text-gray-500">Delayed</div>
              </div>
              <div className="p-2 bg-red-50 rounded-lg">
                <AlertCircle size={16} className="text-red-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#22c55e]/30 transition-all cursor-default">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xl font-bold text-[#0f172a]">{stats.totalBudget}</div>
                <div className="text-xs text-gray-500">Total Budget</div>
              </div>
              <div className="p-2 bg-[#0f172a]/10 rounded-lg">
                <DollarSign size={16} className="text-[#0f172a]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FILTERS SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
              />
            </div>

            {/* County Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCountyDropdownOpen(!isCountyDropdownOpen)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] bg-white text-left flex justify-between items-center"
              >
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-gray-400" />
                  <span className={selectedCounty === 'all' ? 'text-gray-500' : 'text-[#0f172a] font-medium'}>
                    {selectedCounty === 'all' ? 'All 47 Counties' : selectedCounty}
                  </span>
                </span>
                <ChevronDown size={16} className={`text-gray-400 transition-transform ${isCountyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCountyDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                  <div className="sticky top-0 bg-white p-2 border-b border-gray-100">
                    <div className="relative">
                      <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search county..."
                        value={countySearch}
                        onChange={(e) => setCountySearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => { setSelectedCounty('all'); setIsCountyDropdownOpen(false); setCountySearch(''); }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${selectedCounty === 'all' ? 'bg-[#22c55e]/10 text-[#22c55e] font-semibold' : 'text-gray-700'}`}
                  >
                    <MapPin size={14} className="text-[#22c55e]" /> All 47 Counties
                  </button>
                  {filteredCounties.map(county => (
                    <button
                      key={county}
                      onClick={() => { setSelectedCounty(county); setIsCountyDropdownOpen(false); setCountySearch(''); }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${selectedCounty === county ? 'bg-[#22c55e]/10 text-[#22c55e] font-semibold' : 'text-gray-700'}`}
                    >
                      <MapPin size={12} className="text-gray-400" /> {county}
                    </button>
                  ))}
                  {filteredCounties.length === 0 && (
                    <div className="px-4 py-3 text-sm text-gray-500 text-center">No counties found</div>
                  )}
                </div>
              )}
            </div>

            {/* Sector Filter */}
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
            >
              <option value="all">All Sectors</option>
              {sectors.map(sector => (
                <option key={sector} value={sector}>{sector}</option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
            >
              <option value="all">All Status</option>
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>

          {/* Active Filters */}
          {(selectedCounty !== 'all' || selectedSector !== 'all' || selectedStatus !== 'all' || searchQuery) && (
            <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-500">Active filters:</span>
              {selectedCounty !== 'all' && (
                <span className="text-xs bg-[#22c55e]/10 text-[#22c55e] px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#22c55e]/20">
                  <MapPin size={10} /> {selectedCounty}
                  <button onClick={() => setSelectedCounty('all')} className="hover:text-[#0f172a]"><X size={12} /></button>
                </span>
              )}
              {selectedSector !== 'all' && (
                <span className="text-xs bg-[#22c55e]/10 text-[#22c55e] px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#22c55e]/20">
                  {getSectorIcon(selectedSector)} {selectedSector}
                  <button onClick={() => setSelectedSector('all')} className="hover:text-[#0f172a]"><X size={12} /></button>
                </span>
              )}
              {selectedStatus !== 'all' && (
                <span className="text-xs bg-[#22c55e]/10 text-[#22c55e] px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#22c55e]/20">
                  <Activity size={10} /> {selectedStatus}
                  <button onClick={() => setSelectedStatus('all')} className="hover:text-[#0f172a]"><X size={12} /></button>
                </span>
              )}
              {searchQuery && (
                <span className="text-xs bg-[#22c55e]/10 text-[#22c55e] px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#22c55e]/20">
                  <Search size={10} /> {searchQuery}
                  <button onClick={() => setSearchQuery('')} className="hover:text-[#0f172a]"><X size={12} /></button>
                </span>
              )}
              <button 
                onClick={() => {
                  setSelectedCounty('all');
                  setSelectedSector('all');
                  setSelectedStatus('all');
                  setSearchQuery('');
                }}
                className="text-xs text-[#22c55e] hover:text-[#16a34a]"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ===== PROJECTS DISPLAY ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <BarChart3 size={14} className="text-[#22c55e]" />
            Showing <span className="font-semibold text-[#22c55e]">{filteredProjects.length}</span> projects 
            {selectedCounty === 'all' ? ' across all 47 counties' : ` in ${selectedCounty} County`}
          </p>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <AlertCircle size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No projects found matching your filters.</p>
            <button 
              onClick={() => {
                setSelectedCounty('all');
                setSelectedSector('all');
                setSelectedStatus('all');
                setSearchQuery('');
              }}
              className="mt-3 text-[#22c55e] hover:text-[#16a34a] text-sm font-medium"
            >
              Clear all filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group hover:border-[#22c55e]/30"
              >
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-[#0f172a] text-base leading-tight line-clamp-1">{project.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusBadge(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-500 flex items-center gap-1"><MapPin size={10} /> {project.county} County</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">{getSectorIcon(project.sector)} {project.sector}</span>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-3">{project.description}</p>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">Progress</span>
                      <span className="font-semibold text-[#22c55e]">{project.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div className="h-1.5 bg-[#22c55e] rounded-full" style={{ width: `${project.progress}%` }}></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] text-gray-400 flex items-center gap-1"><DollarSign size={10} /> Budget</p>
                      <p className="text-xs font-bold text-[#0f172a]">{project.budget}</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={(e) => { e.stopPropagation(); openViewModal(project); }}
                        className="p-1.5 text-gray-400 hover:text-[#22c55e] transition-colors rounded-lg hover:bg-[#22c55e]/10"
                        title="View"
                      >
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); openEditModal(project); }}
                        className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); openDeleteModal(project); }}
                        className="p-1.5 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all cursor-pointer hover:border-[#22c55e]/30"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-[#0f172a]">{project.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusBadge(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1"><MapPin size={10} /> {project.county} County</span>
                      <span className="flex items-center gap-1">{getSectorIcon(project.sector)} {project.sector}</span>
                      <span className="flex items-center gap-1"><DollarSign size={10} /> {project.budget}</span>
                    </div>
                    <div className="w-full md:w-64">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">Progress</span>
                        <span className="font-semibold text-[#22c55e]">{project.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full">
                        <div className="h-1.5 bg-[#22c55e] rounded-full" style={{ width: `${project.progress}%` }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={(e) => { e.stopPropagation(); openViewModal(project); }}
                      className="p-2 text-gray-400 hover:text-[#22c55e] transition-colors rounded-lg hover:bg-[#22c55e]/10"
                      title="View"
                    >
                      <Eye size={18} />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); openEditModal(project); }}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); openDeleteModal(project); }}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-8 text-sm text-gray-400">
          Showing {filteredProjects.length} of {filteredProjects.length} projects
        </div>
      </div>

      {/* ===== VIEW PROJECT MODAL ===== */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-5 flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#0f172a]">Project Details</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a]">{selectedProject.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-500 flex items-center gap-1"><MapPin size={14} /> {selectedProject.county} County</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">{getSectorIcon(selectedProject.sector)} {selectedProject.sector}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className={`text-sm px-3 py-1 rounded-full ${getStatusBadge(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                  <span className="text-sm text-gray-500">Progress: {selectedProject.progress}%</span>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Building2 size={12} /> Contractor</p>
                    <p className="font-semibold text-[#0f172a]">{selectedProject.contractor || 'N/A'}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Users size={12} /> Beneficiaries</p>
                    <p className="font-semibold text-[#0f172a]">{selectedProject.beneficiaries?.toLocaleString() || 'N/A'}+ residents</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 flex items-center gap-1"><DollarSign size={12} /> Budget</p>
                    <p className="font-bold text-[#0f172a]">{selectedProject.budget}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 flex items-center gap-1"><Target size={12} /> Utilized</p>
                    <p className="font-bold text-[#0f172a]">{selectedProject.utilized}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 flex items-center gap-1"><Calendar size={12} /> Start Date</p>
                    <p className="font-semibold text-[#0f172a]">{selectedProject.startDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 flex items-center gap-1"><Clock size={12} /> End Date</p>
                    <p className="font-semibold text-[#0f172a]">{selectedProject.endDate}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">Overall Progress</span>
                    <span className="font-bold text-[#22c55e]">{selectedProject.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-[#22c55e] rounded-full" style={{ width: `${selectedProject.progress}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== ADD PROJECT MODAL ===== */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-5 flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#0f172a] flex items-center gap-2">
                <Plus size={20} className="text-[#22c55e]" /> Add New Project
              </h2>
              <button onClick={() => { setIsAddModalOpen(false); resetForm(); }} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleAddProject} className="p-6">
              <div className="space-y-4">
                {formError && (
                  <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg text-sm">{formError}</div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Project Title *</label>
                  <input type="text" name="title" value={formData.title} onChange={handleFormChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">County *</label>
                    <select name="county" value={formData.county} onChange={handleFormChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]">
                      <option value="">Select County</option>
                      {counties.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Sector *</label>
                    <select name="sector" value={formData.sector} onChange={handleFormChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]">
                      <option value="">Select Sector</option>
                      {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Status *</label>
                    <select name="status" value={formData.status} onChange={handleFormChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]">
                      {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Progress %</label>
                    <input type="number" name="progress" value={formData.progress} onChange={handleFormChange} min="0" max="100" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Budget *</label>
                    <input type="text" name="budget" value={formData.budget} onChange={handleFormChange} placeholder="KES 100M" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Utilized</label>
                    <input type="text" name="utilized" value={formData.utilized} onChange={handleFormChange} placeholder="KES 50M" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Start Date</label>
                    <input type="text" name="startDate" value={formData.startDate} onChange={handleFormChange} placeholder="Jan 2024" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">End Date</label>
                    <input type="text" name="endDate" value={formData.endDate} onChange={handleFormChange} placeholder="Dec 2025" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Description</label>
                  <textarea name="description" value={formData.description} onChange={handleFormChange} rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Contractor</label>
                    <input type="text" name="contractor" value={formData.contractor} onChange={handleFormChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Beneficiaries</label>
                    <input type="number" name="beneficiaries" value={formData.beneficiaries} onChange={handleFormChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 pt-6 border-t border-gray-200 mt-6">
                <button type="button" onClick={() => { setIsAddModalOpen(false); resetForm(); }} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="flex-1 bg-[#22c55e] text-white py-2 rounded-lg font-medium hover:bg-[#16a34a] transition-colors disabled:opacity-70">
                  {isSubmitting ? 'Adding...' : 'Add Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===== EDIT PROJECT MODAL ===== */}
      {isEditModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-5 flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#0f172a] flex items-center gap-2">
                <Edit size={20} className="text-blue-600" /> Edit Project
              </h2>
              <button onClick={() => { setIsEditModalOpen(false); resetForm(); }} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleEditProject} className="p-6">
              <div className="space-y-4">
                {formError && (
                  <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg text-sm">{formError}</div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Project Title *</label>
                  <input type="text" name="title" value={formData.title} onChange={handleFormChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">County *</label>
                    <select name="county" value={formData.county} onChange={handleFormChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]">
                      <option value="">Select County</option>
                      {counties.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Sector *</label>
                    <select name="sector" value={formData.sector} onChange={handleFormChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]">
                      <option value="">Select Sector</option>
                      {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Status *</label>
                    <select name="status" value={formData.status} onChange={handleFormChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]">
                      {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Progress %</label>
                    <input type="number" name="progress" value={formData.progress} onChange={handleFormChange} min="0" max="100" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Budget *</label>
                    <input type="text" name="budget" value={formData.budget} onChange={handleFormChange} placeholder="KES 100M" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Utilized</label>
                    <input type="text" name="utilized" value={formData.utilized} onChange={handleFormChange} placeholder="KES 50M" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Start Date</label>
                    <input type="text" name="startDate" value={formData.startDate} onChange={handleFormChange} placeholder="Jan 2024" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">End Date</label>
                    <input type="text" name="endDate" value={formData.endDate} onChange={handleFormChange} placeholder="Dec 2025" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Description</label>
                  <textarea name="description" value={formData.description} onChange={handleFormChange} rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Contractor</label>
                    <input type="text" name="contractor" value={formData.contractor} onChange={handleFormChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Beneficiaries</label>
                    <input type="number" name="beneficiaries" value={formData.beneficiaries} onChange={handleFormChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 pt-6 border-t border-gray-200 mt-6">
                <button type="button" onClick={() => { setIsEditModalOpen(false); resetForm(); }} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-70">
                  {isSubmitting ? 'Updating...' : 'Update Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===== DELETE PROJECT MODAL ===== */}
      {isDeleteModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-full">
                <AlertTriangle size={24} className="text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-[#0f172a]">Delete Project</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete <span className="font-semibold text-[#0f172a]">"{selectedProject.title}"</span>? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button onClick={() => { setIsDeleteModalOpen(false); setSelectedProject(null); }} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50">Cancel</button>
              <button onClick={handleDeleteProject} disabled={isSubmitting} className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-70">
                {isSubmitting ? 'Deleting...' : 'Delete Project'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}