import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  ArrowRight
} from 'lucide-react'

export default function ProjectsPage() {
  const navigate = useNavigate()
  
  // States
  const [selectedCounty, setSelectedCounty] = useState('all')
  const [selectedSector, setSelectedSector] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCountyDropdownOpen, setIsCountyDropdownOpen] = useState(false)
  const [countySearch, setCountySearch] = useState('')
  const [selectedTimelineProject, setSelectedTimelineProject] = useState(null)
  const [isTimelineOpen, setIsTimelineOpen] = useState(false)
  const [isReportModalOpen, setIsReportModalOpen] = useState(false)
  const [reportData, setReportData] = useState({ issue: '', description: '' })

  // ===== ALL 47 COUNTIES =====
  const counties = [
    'All Counties', 'Baringo', 'Bomet', 'Bungoma', 'Busia', 'Elgeyo Marakwet', 
    'Embu', 'Garissa', 'Homa Bay', 'Isiolo', 'Kajiado', 'Kakamega', 'Kericho', 
    'Kiambu', 'Kilifi', 'Kirinyaga', 'Kisii', 'Kisumu', 'Kitui', 'Kwale', 
    'Laikipia', 'Lamu', 'Machakos', 'Makueni', 'Mandera', 'Marsabit', 'Meru', 
    'Migori', 'Mombasa', 'Muranga', 'Nairobi', 'Nakuru', 'Nandi', 'Narok', 
    'Nyamira', 'Nyandarua', 'Nyeri', 'Samburu', 'Siaya', 'Taita Taveta', 
    'Tana River', 'Tharaka Nithi', 'Trans Nzoia', 'Turkana', 'Uasin Gishu', 
    'Vihiga', 'Wajir', 'West Pokot'
  ]

  const filteredCounties = counties.filter(county => 
    county !== 'All Counties' && county.toLowerCase().includes(countySearch.toLowerCase())
  )

  const sectors = [
    'All Sectors', 'Infrastructure', 'Healthcare', 'Education', 
    'Water & Sanitation', 'Agriculture', 'Energy', 'Housing', 'Transport', 'Tourism', 'Technology'
  ]

  const statuses = ['All Status', 'Ongoing', 'Completed', 'Delayed', 'Planning', 'Tendering']

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
  }

  // ===== PROFESSIONAL IMAGE URLS FOR EACH PROJECT TYPE =====
  const imageUrls = {
    housing: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
    education: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80',
    healthcare: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80',
    water: 'https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&w=600&q=80',
    infrastructure: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=600&q=80',
    agriculture: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    energy: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    transport: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80',
    tourism: 'https://images.unsplash.com/photo-1573848511323-89c324a9f2e1?auto=format&fit=crop&w=600&q=80',
    technology: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80'
  }

  // ===== COMPLETE PROJECTS DATA - ALL 47 COUNTIES WITH UNIQUE IMAGES =====
  const projects = [
    // BARINGO
    { id: 1, title: 'Baringo County Roads Rehabilitation', county: 'Baringo', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 875M', startDate: 'Jan 2022', endDate: 'Dec 2023', description: 'Rehabilitation of 150km of county roads connecting major trading centers.', contractor: 'KeRRA', image: imageUrls.infrastructure, beneficiaries: 250000, timeline: ['Jan 2022: Project started', 'Jun 2022: 30% complete', 'Dec 2022: 60% complete', 'Jun 2023: 85% complete', 'Dec 2023: Project completed'] },
    { id: 2, title: 'Baringo Affordable Housing', county: 'Baringo', sector: 'Housing', status: 'Ongoing', progress: 71, budget: 'KES 450M', utilized: 'KES 320M', startDate: 'Mar 2022', endDate: 'Dec 2024', description: '300 affordable housing units in Kabarnet town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1500, timeline: ['Mar 2022: Ground breaking', 'Sep 2022: Foundation', 'Mar 2023: 40% complete', 'Sep 2023: 60% complete', 'Current: 71% complete'] },
    { id: 3, title: 'Baringo Water Pans Project', county: 'Baringo', sector: 'Water & Sanitation', status: 'Ongoing', progress: 56, budget: 'KES 320M', utilized: 'KES 180M', startDate: 'Jun 2022', endDate: 'Jun 2025', description: 'Construction of 50 water pans for livestock and irrigation.', contractor: 'NDMA', image: imageUrls.water, beneficiaries: 80000, timeline: ['Jun 2022: Project launched', 'Dec 2022: 20% complete', 'Jun 2023: 40% complete', 'Current: 56% complete'] },
    { id: 4, title: 'Baringo Solar Mini-Grid', county: 'Baringo', sector: 'Energy', status: 'Completed', progress: 100, budget: 'KES 780M', utilized: 'KES 780M', startDate: 'Feb 2021', endDate: 'Dec 2023', description: '5MW solar mini-grid powering 10,000 households.', contractor: 'Rural Electrification Authority', image: imageUrls.energy, beneficiaries: 50000, timeline: ['Feb 2021: Construction began', 'Aug 2022: 50% complete', 'Jun 2023: 90% complete', 'Dec 2023: Fully operational'] },
    
    // BOMET
    { id: 5, title: 'Bomet Tea Factory Modernization', county: 'Bomet', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 1.2B', utilized: 'KES 1.18B', startDate: 'May 2021', endDate: 'Jun 2024', description: 'Modern tea processing facility with increased capacity.', contractor: 'KTDA', image: imageUrls.agriculture, beneficiaries: 120000, timeline: ['May 2021: Construction started', 'Dec 2022: 60% complete', 'Dec 2023: 90% complete', 'Jun 2024: Factory operational'] },
    { id: 6, title: 'Bomet Affordable Housing', county: 'Bomet', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', startDate: 'Feb 2022', endDate: 'Mar 2025', description: '350 affordable housing units in Bomet town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1750, timeline: ['Feb 2022: Ground breaking', 'Aug 2022: Foundation', 'Feb 2023: 35% complete', 'Current: 61% complete'] },
    { id: 7, title: 'Bomet Level 4 Hospital', county: 'Bomet', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Jan 2020', endDate: 'Dec 2023', description: 'Upgrade of Bomet Hospital to Level 4 status.', contractor: 'Ministry of Health', image: imageUrls.healthcare, beneficiaries: 500000, timeline: ['Jan 2020: Construction started', 'Dec 2021: 50% complete', 'Dec 2022: 85% complete', 'Dec 2023: Hospital operational'] },
    { id: 8, title: 'Bomet Technical Institute', county: 'Bomet', sector: 'Education', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Aug 2022', endDate: 'Dec 2025', description: 'Modern technical training institute with workshops.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 2000, timeline: ['Aug 2022: Construction began', 'Feb 2023: 30% complete', 'Current: 62% complete'] },
    
    // BUNGOMA
    { id: 9, title: 'Bungoma Rice Irrigation Scheme', county: 'Bungoma', sector: 'Agriculture', status: 'Ongoing', progress: 65, budget: 'KES 2.1B', utilized: 'KES 1.36B', startDate: 'Aug 2022', endDate: 'Dec 2025', description: 'Irrigation project for rice farmers in Budalangi area.', contractor: 'National Irrigation Authority', image: imageUrls.agriculture, beneficiaries: 50000, timeline: ['Aug 2022: Project launched', 'Mar 2023: Canal construction 40%', 'Oct 2023: 50% complete', 'Current: 65% complete'] },
    { id: 10, title: 'Bungoma Affordable Housing', county: 'Bungoma', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 670M', utilized: 'KES 670M', startDate: 'Apr 2021', endDate: 'May 2024', description: '400 affordable housing units in Bungoma town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 2000, timeline: ['Apr 2021: Construction started', 'Oct 2022: 50% complete', 'Oct 2023: 85% complete', 'May 2024: Project completed'] },
    { id: 11, title: 'Bungoma Referral Hospital', county: 'Bungoma', sector: 'Healthcare', status: 'Ongoing', progress: 65, budget: 'KES 1.5B', utilized: 'KES 980M', startDate: 'Feb 2022', endDate: 'Aug 2025', description: 'Upgrade of Bungoma Hospital to Level 5 referral status.', contractor: 'Ministry of Health', image: imageUrls.healthcare, beneficiaries: 1200000, timeline: ['Feb 2022: Construction started', 'Aug 2023: 45% complete', 'Current: 65% complete'] },
    { id: 12, title: 'Bungoma County Roads', county: 'Bungoma', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Mar 2020', endDate: 'Dec 2023', description: 'Upgrading 120km of county roads to bitumen standard.', contractor: 'KeRRA', image: imageUrls.infrastructure, beneficiaries: 400000, timeline: ['Mar 2020: Project started', 'Mar 2022: 60% complete', 'Mar 2023: 85% complete', 'Dec 2023: Completed'] },
    { id: 13, title: 'Bungoma ICT Hub', county: 'Bungoma', sector: 'Technology', status: 'Delayed', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', startDate: 'Oct 2022', endDate: 'Jun 2025', description: 'Digital innovation and training center.', contractor: 'ICT Authority', image: imageUrls.technology, beneficiaries: 50000, timeline: ['Oct 2022: Project started', 'Apr 2023: 30% complete', 'Current: 62% complete (delayed due to funding)'] },
    
    // BUSIA
    { id: 14, title: 'Busia One Stop Border Post', county: 'Busia', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 2.5B', utilized: 'KES 2.48B', startDate: 'Jan 2021', endDate: 'Jun 2023', description: 'Modernized border post to facilitate trade with Uganda.', contractor: 'Kenya Railways', image: imageUrls.infrastructure, beneficiaries: 500000, timeline: ['Jan 2021: Construction started', 'Dec 2021: Main building complete', 'Jun 2022: Systems installation', 'Mar 2023: Testing', 'Jun 2023: Official opening'] },
    { id: 15, title: 'Busia Affordable Housing', county: 'Busia', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', startDate: 'May 2022', endDate: 'Apr 2025', description: '300 housing units in Busia town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1500, timeline: ['May 2022: Ground breaking', 'Nov 2022: Foundation', 'Current: 61% complete'] },
    { id: 16, title: 'Busia Water Supply', county: 'Busia', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 780M', utilized: 'KES 780M', startDate: 'Feb 2021', endDate: 'Dec 2023', description: 'Bulk water supply and distribution network.', contractor: 'Water Services Board', image: imageUrls.water, beneficiaries: 150000, timeline: ['Feb 2021: Project launched', 'Aug 2022: 60% complete', 'Jun 2023: 90% complete', 'Dec 2023: Water flowing'] },
    { id: 17, title: 'Busia Market Modernization', county: 'Busia', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', startDate: 'Jan 2023', endDate: 'Dec 2025', description: 'Modern market for cross-border traders.', contractor: 'County Government', image: imageUrls.agriculture, beneficiaries: 80000, timeline: ['Jan 2023: Construction began', 'Jul 2023: 40% complete', 'Current: 65% complete'] },
    
    // ELGEYO MARAKWET
    { id: 18, title: 'Elgeyo Marakwet Water Pans', county: 'Elgeyo Marakwet', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 450M', utilized: 'KES 445M', startDate: 'Oct 2022', endDate: 'May 2024', description: 'Construction of 50 water pans for livestock.', contractor: 'NDMA', image: imageUrls.water, beneficiaries: 80000, timeline: ['Oct 2022: Project started', 'Apr 2023: 20 water pans', 'Oct 2023: 40 water pans', 'Mar 2024: 50 water pans done', 'May 2024: Project completed'] },
    { id: 19, title: 'Elgeyo Marakwet Affordable Housing', county: 'Elgeyo Marakwet', sector: 'Housing', status: 'Ongoing', progress: 60, budget: 'KES 350M', utilized: 'KES 210M', startDate: 'Aug 2022', endDate: 'Dec 2025', description: '200 housing units in Iten town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1000, timeline: ['Aug 2022: Construction started', 'Feb 2023: 30% complete', 'Current: 60% complete'] },
    { id: 20, title: 'Elgeyo Marakwet Roads', county: 'Elgeyo Marakwet', sector: 'Infrastructure', status: 'Ongoing', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', startDate: 'Mar 2022', endDate: 'Jun 2025', description: 'Upgrading 80km of county roads.', contractor: 'KeRRA', image: imageUrls.infrastructure, beneficiaries: 150000, timeline: ['Mar 2022: Project started', 'Sep 2022: 30% complete', 'Current: 64% complete'] },
    { id: 21, title: 'Kerio Valley Development', county: 'Elgeyo Marakwet', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 670M', utilized: 'KES 670M', startDate: 'Jan 2021', endDate: 'Dec 2023', description: 'Irrigation and agricultural development project.', contractor: 'Kerio Valley Development Authority', image: imageUrls.agriculture, beneficiaries: 100000, timeline: ['Jan 2021: Project launched', 'Dec 2022: 70% complete', 'Dec 2023: Completed'] },
    
    // EMBU
    { id: 22, title: 'Embu ICT Innovation Hub', county: 'Embu', sector: 'Technology', status: 'Completed', progress: 100, budget: 'KES 450M', utilized: 'KES 445M', startDate: 'Jun 2022', endDate: 'Mar 2024', description: 'Digital skills training and innovation center.', contractor: 'ICT Authority', image: imageUrls.technology, beneficiaries: 50000, timeline: ['Jun 2022: Construction began', 'Dec 2022: Building foundation', 'Jun 2023: 60% complete', 'Dec 2023: Equipment installation', 'Mar 2024: Hub operational'] },
    { id: 23, title: 'Embu Affordable Housing', county: 'Embu', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Apr 2022', endDate: 'Mar 2025', description: '250 housing units in Embu town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1250, timeline: ['Apr 2022: Construction started', 'Oct 2022: Foundation', 'Current: 62% complete'] },
    { id: 24, title: 'Embu Level 5 Hospital', county: 'Embu', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Feb 2020', endDate: 'Dec 2023', description: 'Upgrade of Embu Hospital to Level 5 status.', contractor: 'Ministry of Health', image: imageUrls.healthcare, beneficiaries: 800000, timeline: ['Feb 2020: Construction started', 'Dec 2021: 60% complete', 'Dec 2022: 85% complete', 'Dec 2023: Hospital operational'] },
    { id: 25, title: 'Embu Agricultural Hub', county: 'Embu', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', startDate: 'Sep 2022', endDate: 'Aug 2025', description: 'Modern aggregation and value addition facility.', contractor: 'County Government', image: imageUrls.agriculture, beneficiaries: 40000, timeline: ['Sep 2022: Project started', 'Mar 2023: 35% complete', 'Current: 65% complete'] },
    
    // GARISSA
    { id: 26, title: 'Garissa Solar Power Plant', county: 'Garissa', sector: 'Energy', status: 'Completed', progress: 100, budget: 'KES 13.5B', utilized: 'KES 13.4B', startDate: 'Mar 2019', endDate: 'Dec 2022', description: '55MW solar power plant - largest in East Africa at completion.', contractor: 'Rural Electrification Authority', image: imageUrls.energy, beneficiaries: 500000, timeline: ['Mar 2019: Construction started', 'Dec 2020: Solar panels installation', 'Jun 2021: 30MW operational', 'Mar 2022: 50MW operational', 'Dec 2022: Full 55MW operational'] },
    { id: 27, title: 'Garissa Affordable Housing', county: 'Garissa', sector: 'Housing', status: 'Ongoing', progress: 63, budget: 'KES 670M', utilized: 'KES 420M', startDate: 'Jul 2022', endDate: 'Jun 2025', description: '400 housing units in Garissa town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 2000, timeline: ['Jul 2022: Ground breaking', 'Jan 2023: Foundation', 'Current: 63% complete'] },
    { id: 28, title: 'Garissa Water Supply', county: 'Garissa', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Apr 2021', endDate: 'Sep 2023', description: 'Bulk water supply and treatment facility.', contractor: 'Water Sector Trust Fund', image: imageUrls.water, beneficiaries: 250000, timeline: ['Apr 2021: Project launch', 'Dec 2021: Pipeline installation', 'Jun 2022: Treatment plant', 'Mar 2023: Testing', 'Sep 2023: Water flowing'] },
    { id: 29, title: 'Garissa University College', county: 'Garissa', sector: 'Education', status: 'Ongoing', progress: 65, budget: 'KES 1.2B', utilized: 'KES 780M', startDate: 'Aug 2022', endDate: 'Dec 2025', description: 'New university campus with modern facilities.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 3000, timeline: ['Aug 2022: Construction started', 'Feb 2023: 35% complete', 'Current: 65% complete'] },
    { id: 30, title: 'Garissa Flood Mitigation', county: 'Garissa', sector: 'Infrastructure', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', startDate: 'Oct 2022', endDate: 'Aug 2025', description: 'Flood control and drainage system.', contractor: 'Water Resources Authority', image: imageUrls.infrastructure, beneficiaries: 200000, timeline: ['Oct 2022: Project started', 'Apr 2023: 30% complete', 'Current: 64% complete (delayed due to floods)'] },
    
    // HOMA BAY
    { id: 31, title: 'Homa Bay Fish Processing Plant', county: 'Homa Bay', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 950M', utilized: 'KES 940M', startDate: 'Dec 2021', endDate: 'May 2024', description: 'Modern fish processing and cold storage facility.', contractor: 'Lake Basin Development Authority', image: imageUrls.agriculture, beneficiaries: 100000, timeline: ['Dec 2021: Ground breaking', 'Aug 2022: Foundation complete', 'Mar 2023: Building structure', 'Oct 2023: Equipment installation', 'May 2024: Plant operational'] },
    { id: 32, title: 'Homa Bay Affordable Housing', county: 'Homa Bay', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Jun 2022', endDate: 'May 2025', description: '250 housing units in Homa Bay town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1250, timeline: ['Jun 2022: Construction started', 'Dec 2022: Foundation', 'Current: 62% complete'] },
    { id: 33, title: 'Homa Bay Water Supply', county: 'Homa Bay', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 670M', utilized: 'KES 670M', startDate: 'Mar 2021', endDate: 'Dec 2023', description: 'Bulk water supply for Homa Bay town.', contractor: 'Lake Victoria South Water Works', image: imageUrls.water, beneficiaries: 120000, timeline: ['Mar 2021: Project launch', 'Nov 2022: 70% complete', 'Jun 2023: 95% complete', 'Dec 2023: Water flowing'] },
    { id: 34, title: 'Homa Bay Port Rehabilitation', county: 'Homa Bay', sector: 'Infrastructure', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', startDate: 'Nov 2022', endDate: 'Sep 2025', description: 'Rehabilitation of Homa Bay port facilities.', contractor: 'Kenya Ports Authority', image: imageUrls.infrastructure, beneficiaries: 80000, timeline: ['Nov 2022: Project started', 'May 2023: 35% complete', 'Current: 64% complete'] },
    
    // ISIOLO
    { id: 35, title: 'Isiolo Resort City', county: 'Isiolo', sector: 'Tourism', status: 'Ongoing', progress: 25, budget: 'KES 6.8B', utilized: 'KES 1.7B', startDate: 'Oct 2022', endDate: 'Dec 2026', description: 'Tourism hub and resort development.', contractor: 'Isiolo Resort City Authority', image: imageUrls.tourism, beneficiaries: 150000, timeline: ['Oct 2022: Master planning', 'Jun 2023: Land acquisition', 'Dec 2023: Construction began', 'Current: 25% complete'] },
    { id: 36, title: 'Isiolo Affordable Housing', county: 'Isiolo', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Jul 2022', endDate: 'Jun 2025', description: '200 housing units in Isiolo town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1000, timeline: ['Jul 2022: Construction started', 'Jan 2023: Foundation', 'Current: 62% complete'] },
    { id: 37, title: 'Isiolo Airport Upgrade', county: 'Isiolo', sector: 'Transport', status: 'Completed', progress: 100, budget: 'KES 1.2B', utilized: 'KES 1.18B', startDate: 'Feb 2020', endDate: 'Dec 2023', description: 'Upgrade of Isiolo Airport to international standards.', contractor: 'Kenya Airports Authority', image: imageUrls.transport, beneficiaries: 200000, timeline: ['Feb 2020: Construction started', 'Dec 2021: Runway completed', 'Dec 2022: Terminal building', 'Dec 2023: Airport operational'] },
    { id: 38, title: 'Isiolo Water Project', county: 'Isiolo', sector: 'Water & Sanitation', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', startDate: 'Sep 2022', endDate: 'Jul 2025', description: 'Boreholes and water distribution network.', contractor: 'Water Services Board', image: imageUrls.water, beneficiaries: 90000, timeline: ['Sep 2022: Project started', 'Mar 2023: 30% complete', 'Current: 64% complete'] },
    
    // KAJIADO
    { id: 39, title: 'Kajiado Water Pan Network', county: 'Kajiado', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 880M', startDate: 'Sep 2021', endDate: 'Dec 2023', description: '150 water pans for pastoral communities.', contractor: 'ASAL Development Program', image: imageUrls.water, beneficiaries: 120000, timeline: ['Sep 2021: Project launch', 'Jun 2022: 50 water pans', 'Dec 2022: 100 water pans', 'Aug 2023: 140 water pans', 'Dec 2023: All 150 completed'] },
    { id: 40, title: 'Kajiado Affordable Housing', county: 'Kajiado', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', startDate: 'Apr 2022', endDate: 'Mar 2025', description: '300 housing units in Kajiado town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1500, timeline: ['Apr 2022: Construction started', 'Oct 2022: Foundation', 'Current: 61% complete'] },
    { id: 41, title: 'Kajiado Wind Power', county: 'Kajiado', sector: 'Energy', status: 'Ongoing', progress: 65, budget: 'KES 2.1B', utilized: 'KES 1.36B', startDate: 'Jan 2022', endDate: 'Dec 2025', description: '50MW wind power project.', contractor: 'KenGen', image: imageUrls.energy, beneficiaries: 200000, timeline: ['Jan 2022: Feasibility study', 'Aug 2022: Construction began', 'Current: 65% complete'] },
    { id: 42, title: 'Kajiado Roads Network', county: 'Kajiado', sector: 'Transport', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Mar 2020', endDate: 'Nov 2023', description: 'Upgrading 100km of county roads.', contractor: 'KeRRA', image: imageUrls.infrastructure, beneficiaries: 300000, timeline: ['Mar 2020: Project started', 'Dec 2021: 50% complete', 'Dec 2022: 80% complete', 'Nov 2023: Completed'] },
    { id: 43, title: 'Kajiado Livestock Market', county: 'Kajiado', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', startDate: 'Nov 2022', endDate: 'Oct 2025', description: 'Modern livestock market and auction center.', contractor: 'County Government', image: imageUrls.agriculture, beneficiaries: 60000, timeline: ['Nov 2022: Project started', 'May 2023: 35% complete', 'Current: 65% complete'] },
    
    // KAKAMEGA
    { id: 44, title: 'Kakamega County Referral Hospital', county: 'Kakamega', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 3.1B', utilized: 'KES 3.05B', startDate: 'Mar 2020', endDate: 'Dec 2023', description: 'Level 5 hospital serving Western Kenya.', contractor: 'Ministry of Health', image: imageUrls.healthcare, beneficiaries: 2800000, timeline: ['Mar 2020: Construction started', 'Dec 2021: Main building complete', 'Jun 2022: Equipment installation', 'Mar 2023: Staff recruitment', 'Dec 2023: Hospital operational'] },
    { id: 45, title: 'Kakamega Affordable Housing', county: 'Kakamega', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 780M', utilized: 'KES 480M', startDate: 'May 2022', endDate: 'Apr 2025', description: '500 housing units in Kakamega town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 2500, timeline: ['May 2022: Construction started', 'Nov 2022: Foundation', 'Current: 62% complete'] },
    { id: 46, title: 'Kakamega ICT Hub', county: 'Kakamega', sector: 'Technology', status: 'Completed', progress: 100, budget: 'KES 450M', utilized: 'KES 445M', startDate: 'Oct 2021', endDate: 'Mar 2024', description: 'Digital innovation hub and ICT training center.', contractor: 'ICT Authority', image: imageUrls.technology, beneficiaries: 50000, timeline: ['Oct 2021: Construction began', 'Jun 2022: 50% complete', 'Dec 2022: 80% complete', 'Mar 2024: Hub operational'] },
    { id: 47, title: 'Kakamega Sugar Industry', county: 'Kakamega', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 1.2B', utilized: 'KES 780M', startDate: 'Feb 2022', endDate: 'Dec 2025', description: 'Sugar factory and cane processing facility.', contractor: 'Kenya Sugar Board', image: imageUrls.agriculture, beneficiaries: 100000, timeline: ['Feb 2022: Project started', 'Aug 2022: 30% complete', 'Current: 65% complete'] },
    { id: 48, title: 'Kakamega University', county: 'Kakamega', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Jan 2019', endDate: 'Dec 2023', description: 'New university campus expansion.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 8000, timeline: ['Jan 2019: Construction started', 'Dec 2021: 60% complete', 'Dec 2022: 85% complete', 'Dec 2023: Campus operational'] },
    
    // KERICHO
    { id: 49, title: 'Kericho Tea Processing Hub', county: 'Kericho', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 1.8B', utilized: 'KES 1.78B', startDate: 'May 2022', endDate: 'Mar 2024', description: 'Modern tea processing and value addition facility.', contractor: 'KTDA', image: imageUrls.agriculture, beneficiaries: 150000, timeline: ['May 2022: Construction began', 'Nov 2022: Foundation', 'May 2023: 50% complete', 'Nov 2023: 80% complete', 'Mar 2024: Facility operational'] },
    { id: 50, title: 'Kericho Affordable Housing', county: 'Kericho', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', startDate: 'Mar 2022', endDate: 'Feb 2025', description: '300 housing units in Kericho town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1500, timeline: ['Mar 2022: Construction started', 'Sep 2022: Foundation', 'Current: 61% complete'] },
    { id: 51, title: 'Kericho Level 5 Hospital', county: 'Kericho', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 1.2B', utilized: 'KES 1.18B', startDate: 'Aug 2020', endDate: 'Jun 2024', description: 'Upgrade of Kericho Hospital to Level 5 status.', contractor: 'Ministry of Health', image: imageUrls.healthcare, beneficiaries: 600000, timeline: ['Aug 2020: Construction started', 'Dec 2022: 70% complete', 'Dec 2023: 95% complete', 'Jun 2024: Hospital operational'] },
    { id: 52, title: 'Kericho Tea Research', county: 'Kericho', sector: 'Education', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Sep 2022', endDate: 'Aug 2025', description: 'Tea research and training institute.', contractor: 'Tea Research Foundation', image: imageUrls.education, beneficiaries: 3000, timeline: ['Sep 2022: Construction started', 'Mar 2023: 35% complete', 'Current: 62% complete'] },
    
    // KIAMBU
    { id: 53, title: 'Thika Road Expansion', county: 'Kiambu', sector: 'Transport', status: 'Completed', progress: 100, budget: 'KES 31B', utilized: 'KES 30.8B', startDate: 'Jan 2018', endDate: 'Nov 2024', description: 'Expansion of Thika Superhighway from 6 to 10 lanes.', contractor: 'China Wu Yi', image: imageUrls.infrastructure, beneficiaries: 3500000, timeline: ['Jan 2018: Project started', 'Dec 2020: Phase 1 complete', 'Dec 2022: Phase 2 complete', 'Jun 2024: 90% complete', 'Nov 2024: Fully operational'] },
    { id: 54, title: 'Kiambu Affordable Housing - Ruiru', county: 'Kiambu', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 2.2B', utilized: 'KES 2.18B', startDate: 'Feb 2021', endDate: 'Mar 2024', description: '1,000 affordable housing units in Ruiru.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 5000, timeline: ['Feb 2021: Ground breaking', 'Aug 2022: 50% complete', 'Aug 2023: 85% complete', 'Mar 2024: Project completed'] },
    { id: 55, title: 'Kiambu Institute of Science', county: 'Kiambu', sector: 'Education', status: 'Ongoing', progress: 65, budget: 'KES 1.2B', utilized: 'KES 780M', startDate: 'Sep 2022', endDate: 'Dec 2025', description: 'New technical training institute.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 3000, timeline: ['Sep 2022: Construction started', 'Mar 2023: 35% complete', 'Current: 65% complete'] },
    { id: 56, title: 'Kiambu Water Supply', county: 'Kiambu', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Apr 2020', endDate: 'Dec 2023', description: 'Bulk water supply for Kiambu County.', contractor: 'Athi Water Works', image: imageUrls.water, beneficiaries: 300000, timeline: ['Apr 2020: Project launch', 'Dec 2021: 60% complete', 'Dec 2022: 85% complete', 'Dec 2023: Water flowing'] },
    { id: 57, title: 'Kiambu Level 5 Hospital', county: 'Kiambu', sector: 'Healthcare', status: 'Ongoing', progress: 65, budget: 'KES 1.5B', utilized: 'KES 980M', startDate: 'Jun 2022', endDate: 'May 2025', description: 'Upgrade of Kiambu Hospital to Level 5.', contractor: 'Ministry of Health', image: imageUrls.healthcare, beneficiaries: 800000, timeline: ['Jun 2022: Construction started', 'Dec 2022: 30% complete', 'Current: 65% complete'] },
    
    // KILIFI
    { id: 58, title: 'Kilifi County Water Supply', county: 'Kilifi', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 3.8B', utilized: 'KES 3.75B', startDate: 'Apr 2021', endDate: 'Sep 2023', description: 'Bulk water supply serving 300,000+ residents.', contractor: 'Water Services Corporation', image: imageUrls.water, beneficiaries: 300000, timeline: ['Apr 2021: Project launch', 'Dec 2021: Pipeline installation', 'Jun 2022: Treatment plant', 'Mar 2023: Testing', 'Sep 2023: Water flowing'] },
    { id: 59, title: 'Kilifi Affordable Housing', county: 'Kilifi', sector: 'Housing', status: 'Ongoing', progress: 63, budget: 'KES 670M', utilized: 'KES 420M', startDate: 'Aug 2022', endDate: 'Jul 2025', description: '400 housing units in Kilifi town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 2000, timeline: ['Aug 2022: Construction started', 'Feb 2023: Foundation', 'Current: 63% complete'] },
    { id: 60, title: 'Watamu Beachfront Tourism', county: 'Kilifi', sector: 'Tourism', status: 'Ongoing', progress: 40, budget: 'KES 2.2B', utilized: 'KES 880M', startDate: 'Apr 2022', endDate: 'Jun 2026', description: 'Tourism infrastructure and beachfront upgrade.', contractor: 'Tourism Finance Corporation', image: imageUrls.tourism, beneficiaries: 80000, timeline: ['Apr 2022: Project started', 'Oct 2022: 15% complete', 'Current: 40% complete'] },
    { id: 61, title: 'Kilifi Referral Hospital', county: 'Kilifi', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 1.2B', utilized: 'KES 1.18B', startDate: 'Jan 2021', endDate: 'Dec 2023', description: 'Upgrade of Kilifi Hospital to referral status.', contractor: 'Ministry of Health', image: imageUrls.healthcare, beneficiaries: 500000, timeline: ['Jan 2021: Construction started', 'Dec 2022: 80% complete', 'Dec 2023: Hospital operational'] },
    { id: 62, title: 'Kilifi Coconut Processing', county: 'Kilifi', sector: 'Agriculture', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Oct 2022', endDate: 'Sep 2025', description: 'Coconut processing and value addition facility.', contractor: 'County Government', image: imageUrls.agriculture, beneficiaries: 50000, timeline: ['Oct 2022: Project started', 'Apr 2023: 30% complete', 'Current: 62% complete'] },
    
    // KIRINYAGA
    { id: 63, title: 'Kirinyaga Rice Irrigation', county: 'Kirinyaga', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 780M', utilized: 'KES 770M', startDate: 'Aug 2022', endDate: 'Jul 2024', description: 'Mwea Rice Irrigation Scheme expansion.', contractor: 'National Irrigation Authority', image: imageUrls.agriculture, beneficiaries: 80000, timeline: ['Aug 2022: Project started', 'Feb 2023: Canal construction', 'Aug 2023: 50% complete', 'Feb 2024: 85% complete', 'Jul 2024: Project completed'] },
    { id: 64, title: 'Kirinyaga Affordable Housing', county: 'Kirinyaga', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'May 2022', endDate: 'Apr 2025', description: '250 housing units in Kerugoya town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1250, timeline: ['May 2022: Construction started', 'Nov 2022: Foundation', 'Current: 62% complete'] },
    { id: 65, title: 'Kirinyaga University', county: 'Kirinyaga', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Mar 2019', endDate: 'Dec 2023', description: 'New university campus development.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 5000, timeline: ['Mar 2019: Construction started', 'Dec 2021: 60% complete', 'Dec 2022: 85% complete', 'Dec 2023: Campus operational'] },
    { id: 66, title: 'Kirinyaga Water Supply', county: 'Kirinyaga', sector: 'Water & Sanitation', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', startDate: 'Nov 2022', endDate: 'Oct 2025', description: 'Rural water supply project.', contractor: 'Water Services Board', image: imageUrls.water, beneficiaries: 100000, timeline: ['Nov 2022: Project started', 'May 2023: 30% complete', 'Current: 64% complete'] },
    
    // KISII
    { id: 67, title: 'Kisii Teaching & Referral Hospital', county: 'Kisii', sector: 'Healthcare', status: 'Ongoing', progress: 80, budget: 'KES 4.5B', utilized: 'KES 3.6B', startDate: 'Jan 2022', endDate: 'Mar 2025', description: 'Upgrade to Level 6 teaching hospital.', contractor: 'Seynol Construction', image: imageUrls.healthcare, beneficiaries: 2000000, timeline: ['Jan 2022: Ground breaking', 'Sep 2022: Foundation', 'May 2023: 40% complete', 'Jan 2024: 65% complete', 'Current: 80% complete'] },
    { id: 68, title: 'Kisii Affordable Housing', county: 'Kisii', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 1.2B', utilized: 'KES 1.18B', startDate: 'Oct 2021', endDate: 'Feb 2024', description: '600 affordable housing units.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 3000, timeline: ['Oct 2021: Construction started', 'Apr 2022: 40% complete', 'Oct 2022: 70% complete', 'Feb 2024: Completed'] },
    { id: 69, title: 'Kisii Banana Processing', county: 'Kisii', sector: 'Agriculture', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', startDate: 'Jun 2022', endDate: 'May 2025', description: 'Banana processing and value addition facility.', contractor: 'County Government', image: imageUrls.agriculture, beneficiaries: 60000, timeline: ['Jun 2022: Project started', 'Dec 2022: 30% complete', 'Current: 61% complete'] },
    { id: 70, title: 'Kisii University Expansion', county: 'Kisii', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Feb 2020', endDate: 'Dec 2023', description: 'University campus expansion.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 10000, timeline: ['Feb 2020: Construction started', 'Dec 2021: 60% complete', 'Dec 2022: 85% complete', 'Dec 2023: Completed'] },
    { id: 71, title: 'Kisii Market Modernization', county: 'Kisii', sector: 'Infrastructure', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Aug 2022', endDate: 'Jul 2025', description: 'Modern market facility for traders.', contractor: 'County Government', image: imageUrls.infrastructure, beneficiaries: 80000, timeline: ['Aug 2022: Project started', 'Feb 2023: 35% complete', 'Current: 62% complete'] },
    
    // KISUMU
    { id: 72, title: 'Kisumu Port Rehabilitation', county: 'Kisumu', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 3.2B', utilized: 'KES 3.15B', startDate: 'Aug 2021', endDate: 'Dec 2023', description: 'Rehabilitation of Kisumu Port for Lake Victoria trade.', contractor: 'Kenya Ports Authority', image: imageUrls.infrastructure, beneficiaries: 1200000, timeline: ['Aug 2021: Project launch', 'Apr 2022: Dock rehabilitation', 'Nov 2022: Cargo handling equipment', 'Jun 2023: Testing', 'Dec 2023: Port operational'] },
    { id: 73, title: 'Kisumu Affordable Housing', county: 'Kisumu', sector: 'Housing', status: 'Ongoing', progress: 55, budget: 'KES 8.5B', utilized: 'KES 4.7B', startDate: 'Mar 2022', endDate: 'Dec 2025', description: 'Construction of 3,000 affordable housing units.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 15000, timeline: ['Mar 2022: Started', 'Sep 2022: Foundation', 'Mar 2023: 35% complete', 'Current: 55% complete'] },
    { id: 74, title: 'Kisumu Digital Hub', county: 'Kisumu', sector: 'Technology', status: 'Completed', progress: 100, budget: 'KES 650M', utilized: 'KES 645M', startDate: 'Oct 2021', endDate: 'Jun 2024', description: 'ICT innovation hub for Lake Region.', contractor: 'ICT Authority', image: imageUrls.technology, beneficiaries: 50000, timeline: ['Oct 2021: Started', 'Jun 2022: 40% complete', 'Dec 2022: 70% complete', 'Jun 2024: Hub operational'] },
    { id: 75, title: 'Kisumu Jomo Kenyatta Stadium', county: 'Kisumu', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 1.5B', utilized: 'KES 1.48B', startDate: 'Jan 2020', endDate: 'Dec 2022', description: 'Renovation of Moi Stadium Kisumu.', contractor: 'Sports Kenya', image: imageUrls.infrastructure, beneficiaries: 300000, timeline: ['Jan 2020: Started', 'Dec 2021: 60% complete', 'Dec 2022: Stadium opened'] },
    { id: 76, title: 'Kisumu Water Supply', county: 'Kisumu', sector: 'Water & Sanitation', status: 'Ongoing', progress: 63, budget: 'KES 890M', utilized: 'KES 560M', startDate: 'Feb 2022', endDate: 'Jan 2025', description: 'Water supply expansion project.', contractor: 'Lake Victoria South Water Works', image: imageUrls.water, beneficiaries: 200000, timeline: ['Feb 2022: Started', 'Aug 2022: 30% complete', 'Current: 63% complete'] },
    
    // KITUI
    { id: 77, title: 'Kitui County Aggregation Park', county: 'Kitui', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 650M', utilized: 'KES 640M', startDate: 'Dec 2022', endDate: 'Sep 2024', description: 'Farmers market and value addition hub.', contractor: 'County Government Kitui', image: imageUrls.agriculture, beneficiaries: 60000, timeline: ['Dec 2022: Construction started', 'Jun 2023: Building structure', 'Dec 2023: 60% complete', 'May 2024: 90% complete', 'Sep 2024: Market operational'] },
    { id: 78, title: 'Kitui Affordable Housing', county: 'Kitui', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Apr 2022', endDate: 'Mar 2025', description: '250 housing units in Kitui town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1250, timeline: ['Apr 2022: Started', 'Oct 2022: Foundation', 'Current: 62% complete'] },
    { id: 79, title: 'Kitui Water Supply', county: 'Kitui', sector: 'Water & Sanitation', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', startDate: 'Oct 2022', endDate: 'Aug 2025', description: 'Rural water supply project.', contractor: 'Water Services Board', image: imageUrls.water, beneficiaries: 120000, timeline: ['Oct 2022: Started', 'Apr 2023: 30% complete', 'Current: 64% complete'] },
    { id: 80, title: 'Kitui Solar Power', county: 'Kitui', sector: 'Energy', status: 'Completed', progress: 100, budget: 'KES 780M', utilized: 'KES 780M', startDate: 'Jan 2021', endDate: 'Dec 2023', description: '10MW solar power plant.', contractor: 'Rural Electrification Authority', image: imageUrls.energy, beneficiaries: 100000, timeline: ['Jan 2021: Started', 'Dec 2022: 70% complete', 'Dec 2023: Plant operational'] },
    
    // KWALE
    { id: 81, title: 'Kwale County Water Project', county: 'Kwale', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 1.2B', utilized: 'KES 1.18B', startDate: 'Feb 2022', endDate: 'Aug 2024', description: 'Boreholes and water distribution network.', contractor: 'Coast Water Works', image: imageUrls.water, beneficiaries: 150000, timeline: ['Feb 2022: Project started', 'Sep 2022: Borehole drilling', 'Apr 2023: Pipeline laying', 'Dec 2023: 70% complete', 'Aug 2024: Water flowing'] },
    { id: 82, title: 'Kwale Affordable Housing', county: 'Kwale', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', startDate: 'May 2022', endDate: 'Apr 2025', description: '300 housing units in Kwale town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1500, timeline: ['May 2022: Started', 'Nov 2022: Foundation', 'Current: 61% complete'] },
    { id: 83, title: 'Kwale Titanium Mining', county: 'Kwale', sector: 'Energy', status: 'Ongoing', progress: 65, budget: 'KES 2.1B', utilized: 'KES 1.36B', startDate: 'Mar 2022', endDate: 'Feb 2026', description: 'Mining and mineral processing expansion.', contractor: 'Base Titanium', image: imageUrls.energy, beneficiaries: 30000, timeline: ['Mar 2022: Started', 'Sep 2022: 30% complete', 'Current: 65% complete'] },
    { id: 84, title: 'Kwale Beach Tourism', county: 'Kwale', sector: 'Tourism', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Jan 2021', endDate: 'Dec 2023', description: 'Beachfront tourism infrastructure.', contractor: 'Tourism Finance Corporation', image: imageUrls.tourism, beneficiaries: 50000, timeline: ['Jan 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    
    // LAIKIPIA
    { id: 85, title: 'Laikipia Water Pan Project', county: 'Laikipia', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 750M', utilized: 'KES 740M', startDate: 'Oct 2022', endDate: 'Aug 2024', description: '200 water pans for livestock and irrigation.', contractor: 'NDMA', image: imageUrls.water, beneficiaries: 80000, timeline: ['Oct 2022: Project started', 'Apr 2023: 50 water pans', 'Oct 2023: 120 water pans', 'Apr 2024: 180 water pans', 'Aug 2024: All 200 completed'] },
    { id: 86, title: 'Laikipia Affordable Housing', county: 'Laikipia', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Jun 2022', endDate: 'May 2025', description: '250 housing units in Nanyuki town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1250, timeline: ['Jun 2022: Started', 'Dec 2022: Foundation', 'Current: 62% complete'] },
    { id: 87, title: 'Laikipia Wind Power', county: 'Laikipia', sector: 'Energy', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Feb 2021', endDate: 'Dec 2023', description: '20MW wind power project.', contractor: 'KenGen', image: imageUrls.energy, beneficiaries: 80000, timeline: ['Feb 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Operational'] },
    { id: 88, title: 'Laikipia Livestock Market', county: 'Laikipia', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', startDate: 'Nov 2022', endDate: 'Oct 2025', description: 'Modern livestock auction center.', contractor: 'County Government', image: imageUrls.agriculture, beneficiaries: 50000, timeline: ['Nov 2022: Started', 'May 2023: 35% complete', 'Current: 65% complete'] },
    
    // LAMU
    { id: 89, title: 'Lamu Port Phase 1', county: 'Lamu', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 34B', utilized: 'KES 33.8B', startDate: 'Mar 2016', endDate: 'May 2022', description: 'First three berths of Lamu Port - LAPSSET corridor.', contractor: 'China Communications Construction', image: imageUrls.infrastructure, beneficiaries: 1000000, timeline: ['Mar 2016: Construction started', 'Dec 2018: First berth complete', 'Dec 2020: Second berth complete', 'Dec 2021: Third berth complete', 'May 2022: Port operational'] },
    { id: 90, title: 'Lamu Affordable Housing', county: 'Lamu', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', startDate: 'Jul 2022', endDate: 'Jun 2025', description: '300 housing units in Lamu town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1500, timeline: ['Jul 2022: Started', 'Jan 2023: Foundation', 'Current: 61% complete'] },
    { id: 91, title: 'Lamu Wind Power', county: 'Lamu', sector: 'Energy', status: 'Ongoing', progress: 65, budget: 'KES 1.2B', utilized: 'KES 780M', startDate: 'Aug 2022', endDate: 'Jul 2025', description: '15MW wind power project.', contractor: 'KenGen', image: imageUrls.energy, beneficiaries: 60000, timeline: ['Aug 2022: Started', 'Feb 2023: 30% complete', 'Current: 65% complete'] },
    { id: 92, title: 'Lamu Beach Tourism', county: 'Lamu', sector: 'Tourism', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Mar 2021', endDate: 'Dec 2023', description: 'Beachfront tourism development.', contractor: 'Tourism Finance Corporation', image: imageUrls.tourism, beneficiaries: 40000, timeline: ['Mar 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    
    // MACHAKOS
    { id: 93, title: 'Konza Technopolis Phase 1', county: 'Machakos', sector: 'Infrastructure', status: 'Ongoing', progress: 40, budget: 'KES 82B', utilized: 'KES 32.8B', startDate: 'Mar 2018', endDate: 'Dec 2027', description: 'Kenya\'s "Silicon Savanna" technology hub.', contractor: 'Konza Technopolis Authority', image: imageUrls.technology, beneficiaries: 200000, timeline: ['Mar 2018: Master planning', 'Dec 2020: Infrastructure began', 'Dec 2022: Phase 1 roads', 'Current: 40% complete'] },
    { id: 94, title: 'Machakos Affordable Housing', county: 'Machakos', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 1.8B', utilized: 'KES 1.76B', startDate: 'Apr 2021', endDate: 'Mar 2024', description: '800 affordable housing units.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 4000, timeline: ['Apr 2021: Started', 'Oct 2022: 60% complete', 'Oct 2023: 90% complete', 'Mar 2024: Completed'] },
    { id: 95, title: 'Machakos Level 5 Hospital', county: 'Machakos', sector: 'Healthcare', status: 'Ongoing', progress: 60, budget: 'KES 3.2B', utilized: 'KES 1.92B', startDate: 'Jun 2022', endDate: 'May 2025', description: 'Upgrade of Machakos Hospital.', contractor: 'Ministry of Health', image: imageUrls.healthcare, beneficiaries: 1000000, timeline: ['Jun 2022: Started', 'Dec 2022: 30% complete', 'Current: 60% complete'] },
    { id: 96, title: 'Machakos University', county: 'Machakos', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Jan 2019', endDate: 'Dec 2023', description: 'University campus expansion.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 8000, timeline: ['Jan 2019: Started', 'Dec 2021: 70% complete', 'Dec 2023: Completed'] },
    { id: 97, title: 'Machakos Water Supply', county: 'Machakos', sector: 'Water & Sanitation', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', startDate: 'Oct 2022', endDate: 'Aug 2025', description: 'Water supply expansion.', contractor: 'Athi Water Works', image: imageUrls.water, beneficiaries: 200000, timeline: ['Oct 2022: Started', 'Apr 2023: 30% complete', 'Current: 64% complete'] },
    
    // MAKUENI
    { id: 98, title: 'Makueni Fruit Processing Plant', county: 'Makueni', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 520M', utilized: 'KES 515M', startDate: 'Sep 2022', endDate: 'Jun 2024', description: 'Mango and citrus processing facility.', contractor: 'County Government Makueni', image: imageUrls.agriculture, beneficiaries: 40000, timeline: ['Sep 2022: Construction started', 'Mar 2023: Building foundation', 'Sep 2023: Equipment installation', 'Mar 2024: 90% complete', 'Jun 2024: Plant operational'] },
    { id: 99, title: 'Makueni Affordable Housing', county: 'Makueni', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'May 2022', endDate: 'Apr 2025', description: '250 housing units in Wote town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1250, timeline: ['May 2022: Started', 'Nov 2022: Foundation', 'Current: 62% complete'] },
    { id: 100, title: 'Makueni Water Supply', county: 'Makueni', sector: 'Water & Sanitation', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', startDate: 'Nov 2022', endDate: 'Sep 2025', description: 'Rural water supply project.', contractor: 'Water Services Board', image: imageUrls.water, beneficiaries: 100000, timeline: ['Nov 2022: Started', 'May 2023: 30% complete', 'Current: 64% complete'] },
    { id: 101, title: 'Makueni Drip Irrigation', county: 'Makueni', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 340M', utilized: 'KES 340M', startDate: 'Feb 2022', endDate: 'Dec 2023', description: 'Drip irrigation for smallholder farmers.', contractor: 'National Irrigation Authority', image: imageUrls.agriculture, beneficiaries: 20000, timeline: ['Feb 2022: Started', 'Aug 2022: 50% complete', 'Dec 2023: Completed'] },
    
    // MANDERA
    { id: 102, title: 'Mandera Water Supply', county: 'Mandera', sector: 'Water & Sanitation', status: 'Ongoing', progress: 45, budget: 'KES 2.2B', utilized: 'KES 990M', startDate: 'Sep 2022', endDate: 'Aug 2025', description: 'Bulk water supply and treatment facility.', contractor: 'Water Sector Trust Fund', image: imageUrls.water, beneficiaries: 250000, timeline: ['Sep 2022: Project launch', 'Apr 2023: Pipeline laying', 'Nov 2023: Treatment plant', 'Current: 45% complete'] },
    { id: 103, title: 'Mandera Affordable Housing', county: 'Mandera', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', startDate: 'Jul 2022', endDate: 'Jun 2025', description: '300 housing units in Mandera town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1500, timeline: ['Jul 2022: Started', 'Jan 2023: Foundation', 'Current: 61% complete'] },
    { id: 104, title: 'Mandera Solar Power', county: 'Mandera', sector: 'Energy', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Mar 2021', endDate: 'Dec 2023', description: '10MW solar power plant.', contractor: 'Rural Electrification Authority', image: imageUrls.energy, beneficiaries: 100000, timeline: ['Mar 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Operational'] },
    { id: 105, title: 'Mandera Teachers College', county: 'Mandera', sector: 'Education', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Oct 2022', endDate: 'Aug 2025', description: 'Teachers training college.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 1000, timeline: ['Oct 2022: Started', 'Apr 2023: 35% complete', 'Current: 62% complete'] },
    
    // MARSABIT
    { id: 106, title: 'Marsabit Wind Power', county: 'Marsabit', sector: 'Energy', status: 'Ongoing', progress: 30, budget: 'KES 8.5B', utilized: 'KES 2.55B', startDate: 'Jan 2023', endDate: 'Dec 2026', description: '80MW wind power project in northern Kenya.', contractor: 'Lake Turkana Wind Power', image: imageUrls.energy, beneficiaries: 250000, timeline: ['Jan 2023: Feasibility study', 'Jul 2023: Land acquisition', 'Jan 2024: Construction began', 'Current: 30% complete'] },
    { id: 107, title: 'Marsabit Affordable Housing', county: 'Marsabit', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Aug 2022', endDate: 'Jul 2025', description: '250 housing units in Marsabit town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1250, timeline: ['Aug 2022: Started', 'Feb 2023: Foundation', 'Current: 62% complete'] },
    { id: 108, title: 'Marsabit Water Pans', county: 'Marsabit', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 560M', utilized: 'KES 560M', startDate: 'Nov 2021', endDate: 'Dec 2023', description: '100 water pans for pastoral communities.', contractor: 'NDMA', image: imageUrls.water, beneficiaries: 100000, timeline: ['Nov 2021: Started', 'Aug 2022: 60% complete', 'Dec 2023: Completed'] },
    { id: 109, title: 'Marsabit Livestock Market', county: 'Marsabit', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', startDate: 'Dec 2022', endDate: 'Nov 2025', description: 'Modern livestock market.', contractor: 'County Government', image: imageUrls.agriculture, beneficiaries: 50000, timeline: ['Dec 2022: Started', 'Jun 2023: 35% complete', 'Current: 65% complete'] },
    
    // MERU
    { id: 110, title: 'Meru University Expansion', county: 'Meru', sector: 'Education', status: 'Ongoing', progress: 60, budget: 'KES 3.2B', utilized: 'KES 1.92B', startDate: 'Aug 2022', endDate: 'Dec 2025', description: 'Engineering and medical school facilities.', contractor: 'Meru University Foundation', image: imageUrls.education, beneficiaries: 8000, timeline: ['Aug 2022: Started', 'Mar 2023: Foundation', 'Oct 2023: 40% complete', 'Current: 60% complete'] },
    { id: 111, title: 'Meru Affordable Housing', county: 'Meru', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 1.1B', utilized: 'KES 1.09B', startDate: 'Nov 2021', endDate: 'May 2024', description: '550 affordable housing units.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 2750, timeline: ['Nov 2021: Started', 'May 2022: 40% complete', 'Nov 2022: 70% complete', 'May 2024: Completed'] },
    { id: 112, title: 'Meru Level 5 Hospital', county: 'Meru', sector: 'Healthcare', status: 'Ongoing', progress: 65, budget: 'KES 1.5B', utilized: 'KES 980M', startDate: 'Apr 2022', endDate: 'Mar 2025', description: 'Upgrade of Meru Hospital.', contractor: 'Ministry of Health', image: imageUrls.healthcare, beneficiaries: 800000, timeline: ['Apr 2022: Started', 'Oct 2022: 30% complete', 'Current: 65% complete'] },
    { id: 113, title: 'Meru Farmers Market', county: 'Meru', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 450M', utilized: 'KES 450M', startDate: 'Feb 2022', endDate: 'Dec 2023', description: 'Modern farmers market.', contractor: 'County Government', image: imageUrls.agriculture, beneficiaries: 50000, timeline: ['Feb 2022: Started', 'Aug 2022: 60% complete', 'Dec 2023: Completed'] },
    { id: 114, title: 'Meru Water Supply', county: 'Meru', sector: 'Water & Sanitation', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', startDate: 'Sep 2022', endDate: 'Jul 2025', description: 'Water supply expansion.', contractor: 'Water Services Board', image: imageUrls.water, beneficiaries: 150000, timeline: ['Sep 2022: Started', 'Mar 2023: 30% complete', 'Current: 64% complete'] },
    
    // MIGORI
    { id: 115, title: 'Migori Gold Mining Project', county: 'Migori', sector: 'Energy', status: 'Ongoing', progress: 30, budget: 'KES 4.2B', utilized: 'KES 1.26B', startDate: 'Mar 2023', endDate: 'Dec 2026', description: 'Regulated gold mining and processing.', contractor: 'Ministry of Mining', image: imageUrls.energy, beneficiaries: 50000, timeline: ['Mar 2023: Licensing', 'Sep 2023: Site preparation', 'Mar 2024: Construction began', 'Current: 30% complete'] },
    { id: 116, title: 'Migori Affordable Housing', county: 'Migori', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Jun 2022', endDate: 'May 2025', description: '250 housing units in Migori town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1250, timeline: ['Jun 2022: Started', 'Dec 2022: Foundation', 'Current: 62% complete'] },
    { id: 117, title: 'Migori Referral Hospital', county: 'Migori', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Jan 2021', endDate: 'Dec 2023', description: 'Upgrade of Migori Hospital.', contractor: 'Ministry of Health', image: imageUrls.healthcare, beneficiaries: 600000, timeline: ['Jan 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Operational'] },
    { id: 118, title: 'Migori Rice Irrigation', county: 'Migori', sector: 'Agriculture', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', startDate: 'Oct 2022', endDate: 'Aug 2025', description: 'Rice irrigation scheme.', contractor: 'National Irrigation Authority', image: imageUrls.agriculture, beneficiaries: 40000, timeline: ['Oct 2022: Started', 'Apr 2023: 30% complete', 'Current: 64% complete'] },
    
    // MOMBASA
    { id: 119, title: 'Mombasa Port Modernization', county: 'Mombasa', sector: 'Infrastructure', status: 'Ongoing', progress: 45, budget: 'KES 38B', utilized: 'KES 17.1B', startDate: 'Jun 2022', endDate: 'Dec 2026', description: 'Container terminal expansion and cargo handling.', contractor: 'China Communications Construction', image: imageUrls.infrastructure, beneficiaries: 2000000, timeline: ['Jun 2022: Project launch', 'Feb 2023: Dredging', 'Oct 2023: Berth construction', 'Current: 45% complete'] },
    { id: 120, title: 'Mombasa Dongo Kundu Bypass', county: 'Mombasa', sector: 'Transport', status: 'Completed', progress: 100, budget: 'KES 23B', utilized: 'KES 22.8B', startDate: 'Jan 2019', endDate: 'Mar 2023', description: 'New 17km bypass reducing congestion.', contractor: 'China Wu Yi', image: imageUrls.infrastructure, beneficiaries: 800000, timeline: ['Jan 2019: Started', 'Dec 2021: 70% complete', 'Mar 2023: Completed'] },
    { id: 121, title: 'Mombasa Affordable Housing', county: 'Mombasa', sector: 'Housing', status: 'Ongoing', progress: 60, budget: 'KES 2.8B', utilized: 'KES 1.68B', startDate: 'Sep 2022', endDate: 'Aug 2025', description: '2,500 affordable housing units.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 12500, timeline: ['Sep 2022: Started', 'Mar 2023: 30% complete', 'Current: 60% complete'] },
    { id: 122, title: 'Mombasa Technical University', county: 'Mombasa', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 1.2B', utilized: 'KES 1.18B', startDate: 'Apr 2020', endDate: 'Dec 2023', description: 'Technical university expansion.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 10000, timeline: ['Apr 2020: Started', 'Dec 2021: 60% complete', 'Dec 2023: Completed'] },
    { id: 123, title: 'Mombasa Water Supply', county: 'Mombasa', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Feb 2021', endDate: 'Dec 2023', description: 'Water supply improvement.', contractor: 'Coast Water Works', image: imageUrls.water, beneficiaries: 300000, timeline: ['Feb 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    
    // MURANGA
    { id: 124, title: 'Muranga County Roads Network', county: 'Muranga', sector: 'Transport', status: 'Ongoing', progress: 60, budget: 'KES 1.2B', utilized: 'KES 720M', startDate: 'Nov 2022', endDate: 'Jun 2025', description: 'Upgrading county roads to bitumen standard.', contractor: 'KeRRA', image: imageUrls.infrastructure, beneficiaries: 400000, timeline: ['Nov 2022: Project started', 'May 2023: 30% complete', 'Nov 2023: 50% complete', 'Current: 60% complete'] },
    { id: 125, title: 'Muranga Affordable Housing', county: 'Muranga', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Apr 2022', endDate: 'Mar 2025', description: '250 housing units in Muranga town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1250, timeline: ['Apr 2022: Started', 'Oct 2022: Foundation', 'Current: 62% complete'] },
    { id: 126, title: 'Muranga Coffee Mill', county: 'Muranga', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 560M', utilized: 'KES 560M', startDate: 'May 2021', endDate: 'Dec 2023', description: 'Coffee processing mill.', contractor: 'New KCC', image: imageUrls.agriculture, beneficiaries: 60000, timeline: ['May 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    { id: 127, title: 'Muranga Water Supply', county: 'Muranga', sector: 'Water & Sanitation', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', startDate: 'Dec 2022', endDate: 'Oct 2025', description: 'Rural water supply.', contractor: 'Water Services Board', image: imageUrls.water, beneficiaries: 80000, timeline: ['Dec 2022: Started', 'Jun 2023: 30% complete', 'Current: 65% complete'] },
    
    // NAIROBI
    { id: 128, title: 'Nairobi Expressway', county: 'Nairobi', sector: 'Transport', status: 'Completed', progress: 100, budget: 'KES 75B', utilized: 'KES 74.2B', startDate: 'Mar 2019', endDate: 'Jul 2022', description: '27km elevated highway from JKIA to Westlands.', contractor: 'China Road & Bridge Corporation', image: imageUrls.infrastructure, beneficiaries: 3500000, timeline: ['Mar 2019: Construction started', 'Dec 2020: 40% complete', 'Dec 2021: 80% complete', 'Jul 2022: Expressway opened'] },
    { id: 129, title: 'Nairobi Affordable Housing', county: 'Nairobi', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 4.5B', utilized: 'KES 4.48B', startDate: 'Jan 2021', endDate: 'Dec 2023', description: '1,370 affordable housing units in Pangani.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 6850, timeline: ['Jan 2021: Ground breaking', 'Jun 2022: 50% complete', 'Jun 2023: 90% complete', 'Dec 2023: Completed'] },
    { id: 130, title: 'Nairobi BRT Line 1', county: 'Nairobi', sector: 'Transport', status: 'Ongoing', progress: 65, budget: 'KES 15.6B', utilized: 'KES 10.1B', startDate: 'Jan 2023', endDate: 'Dec 2025', description: 'Bus Rapid Transit system along Thika Road.', contractor: 'Kenya Urban Roads Authority', image: imageUrls.transport, beneficiaries: 500000, timeline: ['Jan 2023: Project launched', 'Jun 2023: 25% complete', 'Jan 2024: 50% complete', 'Current: 65% complete'] },
    { id: 131, title: 'Nairobi Water Treatment Plant', county: 'Nairobi', sector: 'Water & Sanitation', status: 'Ongoing', progress: 55, budget: 'KES 8.2B', utilized: 'KES 4.5B', startDate: 'Mar 2022', endDate: 'Dec 2025', description: 'New water treatment plant serving 1M residents.', contractor: 'Athi Water Works', image: imageUrls.water, beneficiaries: 1000000, timeline: ['Mar 2022: Project started', 'Sep 2023: 30% complete', 'Current: 55% complete'] },
    { id: 132, title: 'Nairobi Green Park School', county: 'Nairobi', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 885M', startDate: 'Aug 2021', endDate: 'Jan 2024', description: 'Modern secondary school with 50 classrooms.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 2500, timeline: ['Aug 2021: Construction started', 'Aug 2022: 40% complete', 'Aug 2023: 85% complete', 'Jan 2024: School opened'] },
    { id: 133, title: 'Nairobi Waste Management', county: 'Nairobi', sector: 'Water & Sanitation', status: 'Delayed', progress: 65, budget: 'KES 2.1B', utilized: 'KES 1.36B', startDate: 'May 2022', endDate: 'Apr 2025', description: 'Solid waste management facility.', contractor: 'Nairobi City County', image: imageUrls.infrastructure, beneficiaries: 4000000, timeline: ['May 2022: Started', 'Nov 2022: 30% complete', 'Current: 65% complete'] },
    
    // NAKURU
    { id: 134, title: 'Nakuru - Eldoret Highway', county: 'Nakuru', sector: 'Transport', status: 'Ongoing', progress: 70, budget: 'KES 28B', utilized: 'KES 19.6B', startDate: 'Feb 2022', endDate: 'Aug 2025', description: '120km highway upgrade to dual carriageway.', contractor: 'China Wu Yi', image: imageUrls.infrastructure, beneficiaries: 950000, timeline: ['Feb 2022: Project started', 'Sep 2022: 25% complete', 'Apr 2023: 45% complete', 'Dec 2023: 60% complete', 'Current: 70% complete'] },
    { id: 135, title: 'Nakuru Affordable Housing', county: 'Nakuru', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 2.1B', utilized: 'KES 2.08B', startDate: 'Jun 2021', endDate: 'May 2024', description: '1,200 affordable housing units.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 6000, timeline: ['Jun 2021: Started', 'Jun 2022: 40% complete', 'Jun 2023: 80% complete', 'May 2024: Completed'] },
    { id: 136, title: 'Nakuru Level 6 Hospital', county: 'Nakuru', sector: 'Healthcare', status: 'Ongoing', progress: 75, budget: 'KES 5.2B', utilized: 'KES 3.9B', startDate: 'Mar 2022', endDate: 'Dec 2025', description: 'Upgrade to Level 6 referral hospital.', contractor: 'Ministry of Health', image: imageUrls.healthcare, beneficiaries: 2000000, timeline: ['Mar 2022: Started', 'Oct 2022: 30% complete', 'May 2023: 50% complete', 'Jan 2024: 65% complete', 'Current: 75% complete'] },
    { id: 137, title: 'Nakuru Water Supply', county: 'Nakuru', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Jan 2021', endDate: 'Dec 2023', description: 'Water supply improvement.', contractor: 'Rift Valley Water Works', image: imageUrls.water, beneficiaries: 300000, timeline: ['Jan 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    { id: 138, title: 'Nakuru Industrial Park', county: 'Nakuru', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 1.2B', utilized: 'KES 780M', startDate: 'Jul 2022', endDate: 'Jun 2025', description: 'Agro-processing industrial park.', contractor: 'Industrial Park Authority', image: imageUrls.agriculture, beneficiaries: 100000, timeline: ['Jul 2022: Started', 'Jan 2023: 35% complete', 'Current: 65% complete'] },
    
    // NANDI
    { id: 139, title: 'Nandi Milk Processing Plant', county: 'Nandi', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 980M', utilized: 'KES 970M', startDate: 'Feb 2022', endDate: 'Aug 2024', description: 'Modern milk processing and packaging facility.', contractor: 'New KCC', image: imageUrls.agriculture, beneficiaries: 80000, timeline: ['Feb 2022: Construction began', 'Sep 2022: Foundation', 'Apr 2023: 50% complete', 'Dec 2023: 80% complete', 'Aug 2024: Plant operational'] },
    { id: 140, title: 'Nandi Affordable Housing', county: 'Nandi', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'May 2022', endDate: 'Apr 2025', description: '250 housing units in Kapsabet town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1250, timeline: ['May 2022: Started', 'Nov 2022: Foundation', 'Current: 62% complete'] },
    { id: 141, title: 'Nandi Tea Factory', county: 'Nandi', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 560M', utilized: 'KES 560M', startDate: 'Mar 2021', endDate: 'Dec 2023', description: 'Tea processing factory.', contractor: 'KTDA', image: imageUrls.agriculture, beneficiaries: 70000, timeline: ['Mar 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    { id: 142, title: 'Nandi Technical Institute', county: 'Nandi', sector: 'Education', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', startDate: 'Sep 2022', endDate: 'Jul 2025', description: 'Technical training institute.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 2000, timeline: ['Sep 2022: Started', 'Mar 2023: 30% complete', 'Current: 65% complete'] },
    
    // NAROK
    { id: 143, title: 'Narok - Sekenani Road', county: 'Narok', sector: 'Tourism', status: 'Ongoing', progress: 55, budget: 'KES 2.1B', utilized: 'KES 1.155B', startDate: 'May 2022', endDate: 'Oct 2025', description: 'Road upgrade to Maasai Mara Game Reserve.', contractor: 'Kenya National Highways Authority', image: imageUrls.infrastructure, beneficiaries: 300000, timeline: ['May 2022: Project started', 'Dec 2022: 20% complete', 'Jul 2023: 40% complete', 'Current: 55% complete'] },
    { id: 144, title: 'Narok Affordable Housing', county: 'Narok', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Jun 2022', endDate: 'May 2025', description: '250 housing units in Narok town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1250, timeline: ['Jun 2022: Started', 'Dec 2022: Foundation', 'Current: 62% complete'] },
    { id: 145, title: 'Narok Water Supply', county: 'Narok', sector: 'Water & Sanitation', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', startDate: 'Oct 2022', endDate: 'Aug 2025', description: 'Water supply project.', contractor: 'Water Services Board', image: imageUrls.water, beneficiaries: 100000, timeline: ['Oct 2022: Started', 'Apr 2023: 30% complete', 'Current: 64% complete'] },
    { id: 146, title: 'Maasai Mara Tourism Hub', county: 'Narok', sector: 'Tourism', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Feb 2021', endDate: 'Dec 2023', description: 'Tourism information and service center.', contractor: 'Tourism Finance Corporation', image: imageUrls.tourism, beneficiaries: 50000, timeline: ['Feb 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    
    // NYAMIRA
    { id: 147, title: 'Nyamira Tea Farmers Support', county: 'Nyamira', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 350M', utilized: 'KES 345M', startDate: 'Jun 2022', endDate: 'Apr 2024', description: 'Tea factory rehabilitation and farmer training.', contractor: 'KTDA', image: imageUrls.agriculture, beneficiaries: 60000, timeline: ['Jun 2022: Program launched', 'Dec 2022: Training begins', 'Jun 2023: Factory rehabilitation', 'Dec 2023: 80% complete', 'Apr 2024: Program completed'] },
    { id: 148, title: 'Nyamira Affordable Housing', county: 'Nyamira', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', startDate: 'Jul 2022', endDate: 'Jun 2025', description: '200 housing units in Nyamira town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1000, timeline: ['Jul 2022: Started', 'Jan 2023: Foundation', 'Current: 62% complete'] },
    { id: 149, title: 'Nyamira Water Supply', county: 'Nyamira', sector: 'Water & Sanitation', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Sep 2022', endDate: 'Jul 2025', description: 'Rural water supply.', contractor: 'Water Services Board', image: imageUrls.water, beneficiaries: 80000, timeline: ['Sep 2022: Started', 'Mar 2023: 30% complete', 'Current: 62% complete'] },
    { id: 150, title: 'Nyamira Technical College', county: 'Nyamira', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 340M', utilized: 'KES 340M', startDate: 'Mar 2021', endDate: 'Dec 2023', description: 'Technical training college.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 1500, timeline: ['Mar 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    
    // NYANDARUA
    { id: 151, title: 'Nyandarua Potato Value Chain', county: 'Nyandarua', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 550M', utilized: 'KES 545M', startDate: 'Oct 2022', endDate: 'Jun 2024', description: 'Cold storage and potato processing facility.', contractor: 'County Government Nyandarua', image: imageUrls.agriculture, beneficiaries: 45000, timeline: ['Oct 2022: Project started', 'Apr 2023: Cold storage construction', 'Oct 2023: 60% complete', 'Mar 2024: 90% complete', 'Jun 2024: Facility operational'] },
    { id: 152, title: 'Nyandarua Affordable Housing', county: 'Nyandarua', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', startDate: 'Aug 2022', endDate: 'Jul 2025', description: '200 housing units in Ol Kalou town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1000, timeline: ['Aug 2022: Started', 'Feb 2023: Foundation', 'Current: 62% complete'] },
    { id: 153, title: 'Nyandarua Water Supply', county: 'Nyandarua', sector: 'Water & Sanitation', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Nov 2022', endDate: 'Sep 2025', description: 'Rural water supply.', contractor: 'Water Services Board', image: imageUrls.water, beneficiaries: 70000, timeline: ['Nov 2022: Started', 'May 2023: 30% complete', 'Current: 62% complete'] },
    { id: 154, title: 'Nyandarua Cold Storage', county: 'Nyandarua', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 340M', utilized: 'KES 340M', startDate: 'Apr 2021', endDate: 'Dec 2023', description: 'Cold storage facility for potatoes.', contractor: 'County Government', image: imageUrls.agriculture, beneficiaries: 30000, timeline: ['Apr 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    
    // NYERI
    { id: 155, title: 'Nyeri Level 5 Hospital', county: 'Nyeri', sector: 'Healthcare', status: 'Completed', progress: 100, budget: 'KES 2.8B', utilized: 'KES 2.76B', startDate: 'Aug 2020', endDate: 'Jul 2023', description: 'Upgrade to Level 5 referral facility.', contractor: 'Ministry of Health', image: imageUrls.healthcare, beneficiaries: 1500000, timeline: ['Aug 2020: Construction started', 'Dec 2021: 50% complete', 'Dec 2022: 85% complete', 'Apr 2023: Equipment installation', 'Jul 2023: Hospital operational'] },
    { id: 156, title: 'Nyeri Affordable Housing', county: 'Nyeri', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 885M', startDate: 'Jan 2022', endDate: 'May 2024', description: '450 affordable housing units.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 2250, timeline: ['Jan 2022: Started', 'Jul 2022: 40% complete', 'Jan 2023: 70% complete', 'May 2024: Completed'] },
    { id: 157, title: 'Nyeri Water Supply', county: 'Nyeri', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 560M', utilized: 'KES 560M', startDate: 'Mar 2021', endDate: 'Dec 2023', description: 'Water supply improvement.', contractor: 'Water Services Board', image: imageUrls.water, beneficiaries: 200000, timeline: ['Mar 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    { id: 158, title: 'Nyeri Technical Institute', county: 'Nyeri', sector: 'Education', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Apr 2022', endDate: 'Mar 2025', description: 'Technical training institute.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 2500, timeline: ['Apr 2022: Started', 'Oct 2022: 30% complete', 'Current: 62% complete'] },
    { id: 159, title: 'Nyeri Coffee Mill', county: 'Nyeri', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', startDate: 'Oct 2022', endDate: 'Aug 2025', description: 'Coffee processing mill.', contractor: 'New KCC', image: imageUrls.agriculture, beneficiaries: 50000, timeline: ['Oct 2022: Started', 'Apr 2023: 30% complete', 'Current: 65% complete'] },
    
    // SAMBURU
    { id: 160, title: 'Samburu Water Project', county: 'Samburu', sector: 'Water & Sanitation', status: 'Ongoing', progress: 40, budget: 'KES 620M', utilized: 'KES 248M', startDate: 'Jan 2023', endDate: 'Dec 2025', description: 'Boreholes and water pans for pastoral communities.', contractor: 'NDMA', image: imageUrls.water, beneficiaries: 70000, timeline: ['Jan 2023: Project launch', 'Jul 2023: Site survey', 'Jan 2024: Drilling began', 'Current: 40% complete'] },
    { id: 161, title: 'Samburu Affordable Housing', county: 'Samburu', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', startDate: 'Jun 2022', endDate: 'May 2025', description: '200 housing units in Maralal town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1000, timeline: ['Jun 2022: Started', 'Dec 2022: Foundation', 'Current: 62% complete'] },
    { id: 162, title: 'Samburu Tourism Lodge', county: 'Samburu', sector: 'Tourism', status: 'Completed', progress: 100, budget: 'KES 560M', utilized: 'KES 560M', startDate: 'Mar 2021', endDate: 'Dec 2023', description: 'Eco-tourism lodge development.', contractor: 'Tourism Finance Corporation', image: imageUrls.tourism, beneficiaries: 30000, timeline: ['Mar 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    { id: 163, title: 'Samburu Livestock Market', county: 'Samburu', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', startDate: 'Nov 2022', endDate: 'Oct 2025', description: 'Modern livestock market.', contractor: 'County Government', image: imageUrls.agriculture, beneficiaries: 40000, timeline: ['Nov 2022: Started', 'May 2023: 30% complete', 'Current: 65% complete'] },
    
    // SIAYA
    { id: 164, title: 'Siaya County Stadium', county: 'Siaya', sector: 'Infrastructure', status: 'Ongoing', progress: 45, budget: 'KES 890M', utilized: 'KES 400M', startDate: 'Nov 2022', endDate: 'Dec 2025', description: 'Modern sports stadium for community events.', contractor: 'Sports Kenya', image: imageUrls.infrastructure, beneficiaries: 200000, timeline: ['Nov 2022: Ground breaking', 'May 2023: Foundation', 'Nov 2023: 30% complete', 'Current: 45% complete'] },
    { id: 165, title: 'Siaya Affordable Housing', county: 'Siaya', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', startDate: 'Jul 2022', endDate: 'Jun 2025', description: '200 housing units in Siaya town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1000, timeline: ['Jul 2022: Started', 'Jan 2023: Foundation', 'Current: 62% complete'] },
    { id: 166, title: 'Siaya Water Supply', county: 'Siaya', sector: 'Water & Sanitation', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Sep 2022', endDate: 'Jul 2025', description: 'Rural water supply.', contractor: 'Water Services Board', image: imageUrls.water, beneficiaries: 90000, timeline: ['Sep 2022: Started', 'Mar 2023: 30% complete', 'Current: 62% complete'] },
    { id: 167, title: 'Siaya Fish Processing', county: 'Siaya', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 340M', utilized: 'KES 340M', startDate: 'Feb 2021', endDate: 'Dec 2023', description: 'Fish processing facility.', contractor: 'Lake Basin Development Authority', image: imageUrls.agriculture, beneficiaries: 50000, timeline: ['Feb 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    
    // TAITA TAVETA
    { id: 168, title: 'Taita Taveta Dairy Project', county: 'Taita Taveta', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 420M', utilized: 'KES 415M', startDate: 'Jul 2022', endDate: 'Mar 2024', description: 'Dairy farming modernization and milk cooling plants.', contractor: 'County Government', image: imageUrls.agriculture, beneficiaries: 30000, timeline: ['Jul 2022: Project started', 'Jan 2023: Training farmers', 'Jul 2023: Cooling plants installed', 'Dec 2023: 90% complete', 'Mar 2024: Project completed'] },
    { id: 169, title: 'Taita Taveta Affordable Housing', county: 'Taita Taveta', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', startDate: 'Aug 2022', endDate: 'Jul 2025', description: '200 housing units in Voi town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1000, timeline: ['Aug 2022: Started', 'Feb 2023: Foundation', 'Current: 62% complete'] },
    { id: 170, title: 'Taita Hills Tourism', county: 'Taita Taveta', sector: 'Tourism', status: 'Delayed', progress: 64, budget: 'KES 560M', utilized: 'KES 360M', startDate: 'Oct 2022', endDate: 'Aug 2025', description: 'Eco-tourism development.', contractor: 'Tourism Finance Corporation', image: imageUrls.tourism, beneficiaries: 50000, timeline: ['Oct 2022: Started', 'Apr 2023: 30% complete', 'Current: 64% complete'] },
    { id: 171, title: 'Taita Taveta Water Supply', county: 'Taita Taveta', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 340M', utilized: 'KES 340M', startDate: 'May 2021', endDate: 'Dec 2023', description: 'Water supply project.', contractor: 'Coast Water Works', image: imageUrls.water, beneficiaries: 80000, timeline: ['May 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    
    // TANA RIVER
    { id: 172, title: 'Tana River Irrigation Scheme', county: 'Tana River', sector: 'Agriculture', status: 'Ongoing', progress: 40, budget: 'KES 3.5B', utilized: 'KES 1.4B', startDate: 'Apr 2022', endDate: 'Dec 2025', description: 'Large-scale irrigation for food security.', contractor: 'Galana Kulalu Food Security Project', image: imageUrls.agriculture, beneficiaries: 100000, timeline: ['Apr 2022: Project launch', 'Oct 2022: Canal construction', 'Apr 2023: 25% complete', 'Oct 2023: 35% complete', 'Current: 40% complete'] },
    { id: 173, title: 'Tana River Affordable Housing', county: 'Tana River', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', startDate: 'Sep 2022', endDate: 'Aug 2025', description: '200 housing units in Hola town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1000, timeline: ['Sep 2022: Started', 'Mar 2023: Foundation', 'Current: 62% complete'] },
    { id: 174, title: 'Tana River Water Supply', county: 'Tana River', sector: 'Water & Sanitation', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Nov 2022', endDate: 'Sep 2025', description: 'Rural water supply.', contractor: 'Water Services Board', image: imageUrls.water, beneficiaries: 80000, timeline: ['Nov 2022: Started', 'May 2023: 30% complete', 'Current: 62% complete'] },
    { id: 175, title: 'Tana Delta Sugar', county: 'Tana River', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 560M', utilized: 'KES 560M', startDate: 'Jan 2021', endDate: 'Dec 2023', description: 'Sugar cane plantation and processing.', contractor: 'Tana Sugar Company', image: imageUrls.agriculture, beneficiaries: 50000, timeline: ['Jan 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    
    // THARAKA NITHI
    { id: 176, title: 'Tharaka Nithi Water Supply', county: 'Tharaka Nithi', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 380M', utilized: 'KES 375M', startDate: 'May 2022', endDate: 'Feb 2024', description: 'Rural water supply and sanitation project.', contractor: 'Water Services Board', image: imageUrls.water, beneficiaries: 50000, timeline: ['May 2022: Project started', 'Nov 2022: Borehole drilling', 'May 2023: Pipeline installation', 'Nov 2023: 85% complete', 'Feb 2024: Water flowing'] },
    { id: 177, title: 'Tharaka Nithi Affordable Housing', county: 'Tharaka Nithi', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', startDate: 'Jun 2022', endDate: 'May 2025', description: '200 housing units in Kathwana town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1000, timeline: ['Jun 2022: Started', 'Dec 2022: Foundation', 'Current: 62% complete'] },
    { id: 178, title: 'Tharaka Nithi Roads', county: 'Tharaka Nithi', sector: 'Transport', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', startDate: 'Oct 2022', endDate: 'Aug 2025', description: 'County road improvement.', contractor: 'KeRRA', image: imageUrls.infrastructure, beneficiaries: 100000, timeline: ['Oct 2022: Started', 'Apr 2023: 30% complete', 'Current: 65% complete'] },
    { id: 179, title: 'Tharaka Nithi Market', county: 'Tharaka Nithi', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 230M', utilized: 'KES 230M', startDate: 'Mar 2021', endDate: 'Dec 2023', description: 'Modern farmers market.', contractor: 'County Government', image: imageUrls.agriculture, beneficiaries: 30000, timeline: ['Mar 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    
    // TRANS NZOIA
    { id: 180, title: 'Kitale Industrial Park', county: 'Trans Nzoia', sector: 'Agriculture', status: 'Ongoing', progress: 35, budget: 'KES 3.5B', utilized: 'KES 1.225B', startDate: 'Aug 2022', endDate: 'Dec 2025', description: 'Agro-processing industrial park for maize and dairy.', contractor: 'Industrial Park Authority', image: imageUrls.agriculture, beneficiaries: 100000, timeline: ['Aug 2022: Master planning', 'Feb 2023: Land acquisition', 'Aug 2023: Construction began', 'Current: 35% complete'] },
    { id: 181, title: 'Trans Nzoia Affordable Housing', county: 'Trans Nzoia', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Apr 2022', endDate: 'Mar 2025', description: '250 housing units in Kitale town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1250, timeline: ['Apr 2022: Started', 'Oct 2022: Foundation', 'Current: 62% complete'] },
    { id: 182, title: 'Trans Nzoia Water Supply', county: 'Trans Nzoia', sector: 'Water & Sanitation', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', startDate: 'Nov 2022', endDate: 'Oct 2025', description: 'Water supply project.', contractor: 'Water Services Board', image: imageUrls.water, beneficiaries: 100000, timeline: ['Nov 2022: Started', 'May 2023: 30% complete', 'Current: 65% complete'] },
    { id: 183, title: 'Kitale Teachers College', county: 'Trans Nzoia', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 450M', utilized: 'KES 450M', startDate: 'Jan 2021', endDate: 'Dec 2023', description: 'Teachers training college.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 1500, timeline: ['Jan 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    
    // TURKANA
    { id: 184, title: 'Turkana Wind Power Phase 2', county: 'Turkana', sector: 'Energy', status: 'Ongoing', progress: 35, budget: 'KES 15B', utilized: 'KES 5.25B', startDate: 'Jun 2022', endDate: 'Jun 2026', description: 'Expansion adding 100MW capacity.', contractor: 'Lake Turkana Wind Power', image: imageUrls.energy, beneficiaries: 500000, timeline: ['Jun 2022: Project launch', 'Dec 2022: Site preparation', 'Jun 2023: Turbine installation', 'Current: 35% complete'] },
    { id: 185, title: 'Turkana Affordable Housing', county: 'Turkana', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', startDate: 'Aug 2022', endDate: 'Jul 2025', description: '300 housing units in Lodwar town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1500, timeline: ['Aug 2022: Started', 'Feb 2023: Foundation', 'Current: 61% complete'] },
    { id: 186, title: 'Turkana University College', county: 'Turkana', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 1.8B', utilized: 'KES 1.78B', startDate: 'May 2019', endDate: 'Dec 2023', description: 'New university campus.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 5000, timeline: ['May 2019: Started', 'Dec 2021: 50% complete', 'Dec 2022: 85% complete', 'Dec 2023: Campus operational'] },
    { id: 187, title: 'Turkana Water Pans', county: 'Turkana', sector: 'Water & Sanitation', status: 'Ongoing', progress: 63, budget: 'KES 670M', utilized: 'KES 420M', startDate: 'Feb 2022', endDate: 'Jan 2025', description: 'Water pans for pastoral communities.', contractor: 'NDMA', image: imageUrls.water, beneficiaries: 100000, timeline: ['Feb 2022: Started', 'Aug 2022: 30% complete', 'Current: 63% complete'] },
    { id: 188, title: 'Turkana Fishing Port', county: 'Turkana', sector: 'Agriculture', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Oct 2022', endDate: 'Sep 2025', description: 'Fishing port and cold storage.', contractor: 'Lake Basin Development Authority', image: imageUrls.agriculture, beneficiaries: 50000, timeline: ['Oct 2022: Started', 'Apr 2023: 30% complete', 'Current: 62% complete'] },
    
    // UASIN GISHU
    { id: 189, title: 'Eldoret Sports City', county: 'Uasin Gishu', sector: 'Infrastructure', status: 'Ongoing', progress: 50, budget: 'KES 5.2B', utilized: 'KES 2.6B', startDate: 'Feb 2022', endDate: 'Sep 2025', description: 'Modern sports complex including stadium.', contractor: 'Eldoret Sports Development', image: imageUrls.infrastructure, beneficiaries: 400000, timeline: ['Feb 2022: Ground breaking', 'Aug 2022: Foundation', 'Feb 2023: 30% complete', 'Aug 2023: 45% complete', 'Current: 50% complete'] },
    { id: 190, title: 'Eldoret Affordable Housing', county: 'Uasin Gishu', sector: 'Housing', status: 'Completed', progress: 100, budget: 'KES 1.5B', utilized: 'KES 1.49B', startDate: 'Jul 2021', endDate: 'Mar 2024', description: '800 affordable housing units.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 4000, timeline: ['Jul 2021: Started', 'Jan 2023: 60% complete', 'Jul 2023: 85% complete', 'Mar 2024: Completed'] },
    { id: 191, title: 'Moi University Expansion', county: 'Uasin Gishu', sector: 'Education', status: 'Ongoing', progress: 70, budget: 'KES 2.2B', utilized: 'KES 1.54B', startDate: 'Sep 2021', endDate: 'Dec 2025', description: 'New engineering complex.', contractor: 'Moi University', image: imageUrls.education, beneficiaries: 10000, timeline: ['Sep 2021: Started', 'Mar 2022: 30% complete', 'Sep 2022: 50% complete', 'Current: 70% complete'] },
    { id: 192, title: 'Eldoret Water Supply', county: 'Uasin Gishu', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 890M', utilized: 'KES 890M', startDate: 'Apr 2021', endDate: 'Dec 2023', description: 'Water supply improvement.', contractor: 'Rift Valley Water Works', image: imageUrls.water, beneficiaries: 300000, timeline: ['Apr 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    { id: 193, title: 'Eldoret Industrial Park', county: 'Uasin Gishu', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 1.2B', utilized: 'KES 780M', startDate: 'Nov 2022', endDate: 'Oct 2025', description: 'Agro-processing industrial park.', contractor: 'Industrial Park Authority', image: imageUrls.agriculture, beneficiaries: 80000, timeline: ['Nov 2022: Started', 'May 2023: 35% complete', 'Current: 65% complete'] },
    
    // VIHIGA
    { id: 194, title: 'Vihiga Water Project', county: 'Vihiga', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 670M', utilized: 'KES 665M', startDate: 'Jul 2022', endDate: 'May 2024', description: 'Rural water supply and sanitation project.', contractor: 'Western Water Services', image: imageUrls.water, beneficiaries: 90000, timeline: ['Jul 2022: Project started', 'Jan 2023: Borehole drilling', 'Jul 2023: Pipeline laying', 'Jan 2024: 85% complete', 'May 2024: Water flowing'] },
    { id: 195, title: 'Vihiga Affordable Housing', county: 'Vihiga', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', startDate: 'Aug 2022', endDate: 'Jul 2025', description: '200 housing units in Mbale town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1000, timeline: ['Aug 2022: Started', 'Feb 2023: Foundation', 'Current: 62% complete'] },
    { id: 196, title: 'Vihiga Tea Factory', county: 'Vihiga', sector: 'Agriculture', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', startDate: 'Oct 2022', endDate: 'Aug 2025', description: 'Tea processing factory.', contractor: 'KTDA', image: imageUrls.agriculture, beneficiaries: 40000, timeline: ['Oct 2022: Started', 'Apr 2023: 30% complete', 'Current: 65% complete'] },
    { id: 197, title: 'Vihiga Technical College', county: 'Vihiga', sector: 'Education', status: 'Completed', progress: 100, budget: 'KES 340M', utilized: 'KES 340M', startDate: 'Mar 2021', endDate: 'Dec 2023', description: 'Technical training institute.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 1500, timeline: ['Mar 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] },
    
    // WAJIR
    { id: 198, title: 'Wajir Madaraka Day Stadium', county: 'Wajir', sector: 'Infrastructure', status: 'Completed', progress: 100, budget: 'KES 1.8B', utilized: 'KES 1.78B', startDate: 'Jan 2021', endDate: 'May 2023', description: '15,000-capacity stadium that hosted 2023 Madaraka Day celebrations.', contractor: 'Sports Kenya', image: imageUrls.infrastructure, beneficiaries: 200000, timeline: ['Jan 2021: Construction started', 'Dec 2021: 40% complete', 'Dec 2022: 85% complete', 'May 2023: Stadium opened for Madaraka Day'] },
    { id: 199, title: 'Wajir Affordable Housing', county: 'Wajir', sector: 'Housing', status: 'Ongoing', progress: 61, budget: 'KES 560M', utilized: 'KES 340M', startDate: 'Jun 2022', endDate: 'May 2025', description: '300 housing units in Wajir town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1500, timeline: ['Jun 2022: Started', 'Dec 2022: Foundation', 'Current: 61% complete'] },
    { id: 200, title: 'Wajir Solar Power Plant', county: 'Wajir', sector: 'Energy', status: 'Completed', progress: 100, budget: 'KES 1.5B', utilized: 'KES 1.48B', startDate: 'Feb 2022', endDate: 'Dec 2023', description: '20MW solar power plant for Northern Kenya.', contractor: 'Rural Electrification Authority', image: imageUrls.energy, beneficiaries: 200000, timeline: ['Feb 2022: Construction started', 'Aug 2022: Solar panel installation', 'Feb 2023: 50% complete', 'Aug 2023: 90% complete', 'Dec 2023: Plant operational'] },
    { id: 201, title: 'Wajir Water Supply', county: 'Wajir', sector: 'Water & Sanitation', status: 'Ongoing', progress: 63, budget: 'KES 670M', utilized: 'KES 420M', startDate: 'Mar 2022', endDate: 'Feb 2025', description: 'Bulk water supply project.', contractor: 'Water Sector Trust Fund', image: imageUrls.water, beneficiaries: 150000, timeline: ['Mar 2022: Started', 'Sep 2022: 30% complete', 'Current: 63% complete'] },
    { id: 202, title: 'Wajir Teachers College', county: 'Wajir', sector: 'Education', status: 'Delayed', progress: 62, budget: 'KES 450M', utilized: 'KES 280M', startDate: 'Oct 2022', endDate: 'Sep 2025', description: 'Teachers training college.', contractor: 'Ministry of Education', image: imageUrls.education, beneficiaries: 1200, timeline: ['Oct 2022: Started', 'Apr 2023: 30% complete', 'Current: 62% complete'] },
    
    // WEST POKOT
    { id: 203, title: 'West Pokot Water Pans', county: 'West Pokot', sector: 'Water & Sanitation', status: 'Completed', progress: 100, budget: 'KES 520M', utilized: 'KES 515M', startDate: 'Nov 2022', endDate: 'Jul 2024', description: '100 water pans for livestock and irrigation.', contractor: 'NDMA', image: imageUrls.water, beneficiaries: 60000, timeline: ['Nov 2022: Project started', 'May 2023: 30 water pans', 'Nov 2023: 70 water pans', 'Apr 2024: 95 water pans', 'Jul 2024: All 100 completed'] },
    { id: 204, title: 'West Pokot Affordable Housing', county: 'West Pokot', sector: 'Housing', status: 'Ongoing', progress: 62, budget: 'KES 340M', utilized: 'KES 210M', startDate: 'Sep 2022', endDate: 'Aug 2025', description: '200 housing units in Kapenguria town.', contractor: 'National Housing Corporation', image: imageUrls.housing, beneficiaries: 1000, timeline: ['Sep 2022: Started', 'Mar 2023: Foundation', 'Current: 62% complete'] },
    { id: 205, title: 'West Pokot Roads', county: 'West Pokot', sector: 'Transport', status: 'Delayed', progress: 65, budget: 'KES 340M', utilized: 'KES 220M', startDate: 'Dec 2022', endDate: 'Nov 2025', description: 'County road improvement.', contractor: 'KeRRA', image: imageUrls.infrastructure, beneficiaries: 80000, timeline: ['Dec 2022: Started', 'Jun 2023: 30% complete', 'Current: 65% complete'] },
    { id: 206, title: 'West Pokot Livestock Market', county: 'West Pokot', sector: 'Agriculture', status: 'Completed', progress: 100, budget: 'KES 230M', utilized: 'KES 230M', startDate: 'Apr 2021', endDate: 'Dec 2023', description: 'Modern livestock market.', contractor: 'County Government', image: imageUrls.agriculture, beneficiaries: 40000, timeline: ['Apr 2021: Started', 'Dec 2022: 80% complete', 'Dec 2023: Completed'] }
  ]

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchCounty = selectedCounty === 'all' || project.county === selectedCounty
    const matchSector = selectedSector === 'all' || project.sector === selectedSector
    const matchStatus = selectedStatus === 'all' || project.status === selectedStatus
    const matchSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.county.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.sector.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchCounty && matchSector && matchStatus && matchSearch
  })

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Ongoing': return 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20'
      case 'Completed': return 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20'
      case 'Delayed': return 'bg-red-100 text-red-700'
      case 'Planning': return 'bg-purple-100 text-purple-700'
      case 'Tendering': return 'bg-orange-100 text-orange-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const stats = {
    total: projects.length,
    ongoing: projects.filter(p => p.status === 'Ongoing').length,
    completed: projects.filter(p => p.status === 'Completed').length,
    delayed: projects.filter(p => p.status === 'Delayed').length,
    totalBudget: 'KES 523.8B'
  }

  // Get sector icon
  const getSectorIcon = (sectorName) => {
    const Icon = sectorIcons[sectorName]
    return Icon ? <Icon size={14} className="text-[#22c55e]" /> : <Building2 size={14} className="text-[#22c55e]" />
  }

  const handleReportSubmit = (e) => {
    e.preventDefault()
    alert(`Report submitted successfully!\n\nProject: ${selectedProject?.title}\nIssue: ${reportData.issue}\nDescription: ${reportData.description}\n\nThank you for your feedback. The relevant authorities will be notified.`)
    setIsReportModalOpen(false)
    setReportData({ issue: '', description: '' })
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20">
      {/* Page Header */}
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
                <span className="ml-1">{stats.completed} completed • {stats.ongoing} ongoing • {stats.delayed} delayed (2022-2026)</span>
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
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
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
            <div className="border-b border-gray-200 mt-2"></div>
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
            <div className="border-b border-gray-200 mt-2"></div>
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
            <div className="border-b border-gray-200 mt-2"></div>
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
            <div className="border-b border-gray-200 mt-2"></div>
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
            <div className="border-b border-gray-200 mt-2"></div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
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
                    onClick={() => {
                      setSelectedCounty('all')
                      setIsCountyDropdownOpen(false)
                      setCountySearch('')
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${selectedCounty === 'all' ? 'bg-[#22c55e]/10 text-[#22c55e] font-semibold' : 'text-gray-700'}`}
                  >
                    <MapPin size={14} className="text-[#22c55e]" /> All 47 Counties
                  </button>
                  {filteredCounties.map(county => (
                    <button
                      key={county}
                      onClick={() => {
                        setSelectedCounty(county)
                        setIsCountyDropdownOpen(false)
                        setCountySearch('')
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${selectedCounty === county ? 'bg-[#22c55e]/10 text-[#22c55e] font-semibold' : 'text-gray-700'}`}
                    >
                      <MapPin size={12} className="text-gray-400" /> {county}
                    </button>
                  ))}
                  {filteredCounties.length === 0 && (
                    <div className="px-4 py-3 text-sm text-gray-500 text-center">
                      No counties found
                    </div>
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
              {sectors.map(sector => (
                <option key={sector} value={sector === 'All Sectors' ? 'all' : sector}>
                  {sector === 'All Sectors' ? 'All Sectors' : sector}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
            >
              {statuses.map(status => (
                <option key={status} value={status === 'All Status' ? 'all' : status}>
                  {status}
                </option>
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
                  setSelectedCounty('all')
                  setSelectedSector('all')
                  setSelectedStatus('all')
                  setSearchQuery('')
                }}
                className="text-xs text-[#22c55e] hover:text-[#16a34a]"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Projects Display */}
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
                setSelectedCounty('all')
                setSelectedSector('all')
                setSelectedStatus('all')
                setSearchQuery('')
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
                onClick={() => { setSelectedProject(project); setIsModalOpen(true); }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group hover:border-[#22c55e]/30"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
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
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400 flex items-center gap-1 justify-end"><Clock size={10} /> Timeline</p>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedTimelineProject(project)
                          setIsTimelineOpen(true)
                        }}
                        className="text-xs font-medium text-[#22c55e] hover:text-[#16a34a] flex items-center gap-1"
                      >
                        View <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 px-5 py-3 bg-gray-50 flex justify-between items-center">
                  <span className="text-xs text-gray-500 flex items-center gap-1"><Users size={10} /> {project.beneficiaries.toLocaleString()}+</span>
                  <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar size={10} /> {project.startDate} - {project.endDate}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => { setSelectedProject(project); setIsModalOpen(true); }}
                className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all cursor-pointer hover:border-[#22c55e]/30"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <img src={project.image} alt={project.title} className="w-full md:w-32 h-24 object-cover rounded-lg" />
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
                  <div className="text-right">
                    <p className="text-xs text-gray-500 flex items-center gap-1 justify-end"><Clock size={10} /> Timeline</p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedTimelineProject(project)
                        setIsTimelineOpen(true)
                      }}
                      className="text-sm font-semibold text-[#22c55e] hover:text-[#16a34a] flex items-center gap-1"
                    >
                      View <ArrowRight size={14} />
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

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-t-2xl" />
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#0f172a]">{selectedProject.title}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-500 flex items-center gap-1"><MapPin size={14} /> {selectedProject.county} County</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">{getSectorIcon(selectedProject.sector)} {selectedProject.sector}</span>
                  </div>
                </div>
                <span className={`text-sm px-3 py-1 rounded-full ${getStatusBadge(selectedProject.status)}`}>
                  {selectedProject.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Building2 size={12} /> Contractor</p>
                  <p className="font-semibold text-[#0f172a]">{selectedProject.contractor}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Users size={12} /> Beneficiaries</p>
                  <p className="font-semibold text-[#0f172a]">{selectedProject.beneficiaries.toLocaleString()}+ residents</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">Overall Progress</span>
                  <span className="font-bold text-[#22c55e]">{selectedProject.progress}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-[#22c55e] rounded-full" style={{ width: `${selectedProject.progress}%` }}></div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => {
                    setIsModalOpen(false)
                    setSelectedTimelineProject(selectedProject)
                    setIsTimelineOpen(true)
                  }}
                  className="flex-1 bg-[#22c55e] text-white py-2.5 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors flex items-center justify-center gap-2"
                >
                  <Clock size={16} /> View Full Timeline
                </button>
                <button 
                  onClick={() => {
                    setIsModalOpen(false)
                    setIsReportModalOpen(true)
                  }}
                  className="flex-1 border border-red-500 text-red-600 py-2.5 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Flag size={16} /> Report Issue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Timeline Modal */}
      {isTimelineOpen && selectedTimelineProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-5 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-[#0f172a] flex items-center gap-2"><Clock size={20} className="text-[#22c55e]" /> Project Timeline</h2>
                <p className="text-sm text-gray-500">{selectedTimelineProject.title} - {selectedTimelineProject.county} County</p>
              </div>
              <button onClick={() => setIsTimelineOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#22c55e]/30"></div>
                
                <div className="space-y-6">
                  {selectedTimelineProject.timeline.map((event, index) => (
                    <div key={index} className="relative flex gap-4">
                      <div className="relative z-10">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          index === selectedTimelineProject.timeline.length - 1 && selectedTimelineProject.status === 'Completed'
                            ? 'bg-[#22c55e]'
                            : 'bg-[#22c55e]/10'
                        }`}>
                          <div className={`w-3 h-3 rounded-full ${
                            index === selectedTimelineProject.timeline.length - 1 && selectedTimelineProject.status === 'Completed'
                              ? 'bg-white'
                              : 'bg-[#22c55e]'
                          }`}></div>
                        </div>
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-[#0f172a]">{event}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 flex items-center justify-center gap-1"><Calendar size={12} /> Start Date</p>
                    <p className="font-semibold text-[#0f172a]">{selectedTimelineProject.startDate}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 flex items-center justify-center gap-1"><Calendar size={12} /> End Date</p>
                    <p className="font-semibold text-[#0f172a]">{selectedTimelineProject.endDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Report Issue Modal */}
      {isReportModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-lg">
            <div className="border-b border-gray-200 p-5 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-[#0f172a] flex items-center gap-2"><Flag size={20} className="text-red-500" /> Report Project Issue</h2>
                <p className="text-sm text-gray-500">{selectedProject.title} - {selectedProject.county} County</p>
              </div>
              <button onClick={() => setIsReportModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleReportSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Issue Type</label>
                <select
                  required
                  value={reportData.issue}
                  onChange={(e) => setReportData({...reportData, issue: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
                >
                  <option value="">Select issue type</option>
                  <option value="Project Delay">Project Delay</option>
                  <option value="Poor Quality">Poor Quality Workmanship</option>
                  <option value="Budget Mismanagement">Budget Mismanagement</option>
                  <option value="Corruption">Corruption Allegations</option>
                  <option value="Safety Concern">Safety Concern</option>
                  <option value="Environmental Damage">Environmental Damage</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  required
                  rows="4"
                  value={reportData.description}
                  onChange={(e) => setReportData({...reportData, description: e.target.value})}
                  placeholder="Please provide detailed information about the issue..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
                ></textarea>
              </div>
              
              <div className="bg-amber-50 rounded-lg p-3 text-sm text-amber-700 flex items-start gap-2">
                <AlertTriangle size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Anonymous Report</p>
                  <p className="text-xs mt-1">Your identity will be protected. This report will be sent to the relevant oversight committee for investigation.</p>
                </div>
              </div>
              
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsReportModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Flag size={16} /> Submit Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}