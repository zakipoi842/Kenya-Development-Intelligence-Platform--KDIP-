import { useState } from 'react'
import {
  Building2,
  GraduationCap,
  Heart,
  Sprout,
  Droplets,
  Home,
  Zap,
  Car,
  Umbrella,
  TrendingUp,
  Users,
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Search,
  ArrowRight,
  BarChart3,
  PieChart,
  Activity,
  Clock,
  DollarSign,
  Target,
  Layers,
  Globe
} from 'lucide-react'

export default function BudgetPage() {
  
  // States
  const [selectedYear, setSelectedYear] = useState('2024')
  const [selectedSector, setSelectedSector] = useState('all')
  const [selectedCounty, setSelectedCounty] = useState('all')
  const [selectedView, setSelectedView] = useState('overview')
  const [isCountyDropdownOpen, setIsCountyDropdownOpen] = useState(false)
  const [countySearch, setCountySearch] = useState('')
  const [selectedBudgetItem, setSelectedBudgetItem] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

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

  const years = ['2022', '2023', '2024', '2025', '2026']

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

  // ===== NATIONAL BUDGET SUMMARY =====
  const nationalBudget = {
    totalBudget: 'KES 3.82 Trillion',
    totalDisbursed: 'KES 2.91 Trillion',
    totalUtilized: 'KES 2.68 Trillion',
    utilizationRate: 70,
    remainingBudget: 'KES 1.14 Trillion',
    fiscalYear: '2024/2025'
  }

  // ===== SECTOR BUDGET BREAKDOWN =====
  const sectorBudgets = [
    { name: 'Infrastructure', budget: 'KES 892B', disbursed: 'KES 678B', utilized: 'KES 623B', percentage: 38, utilization: 70, projects: 1245, icon: Building2 },
    { name: 'Education', budget: 'KES 524B', disbursed: 'KES 498B', utilized: 'KES 475B', percentage: 22, utilization: 91, projects: 3456, icon: GraduationCap },
    { name: 'Healthcare', budget: 'KES 435B', disbursed: 'KES 387B', utilized: 'KES 356B', percentage: 18, utilization: 82, projects: 2341, icon: Heart },
    { name: 'Agriculture', budget: 'KES 278B', disbursed: 'KES 234B', utilized: 'KES 212B', percentage: 12, utilization: 76, projects: 1876, icon: Sprout },
    { name: 'Water & Sanitation', budget: 'KES 245B', disbursed: 'KES 198B', utilized: 'KES 178B', percentage: 10, utilization: 73, projects: 1234, icon: Droplets },
    { name: 'Energy', budget: 'KES 198B', disbursed: 'KES 156B', utilized: 'KES 142B', percentage: 8, utilization: 72, projects: 567, icon: Zap },
    { name: 'Housing', budget: 'KES 156B', disbursed: 'KES 98B', utilized: 'KES 82B', percentage: 7, utilization: 53, projects: 234, icon: Home },
    { name: 'Transport', budget: 'KES 145B', disbursed: 'KES 112B', utilized: 'KES 98B', percentage: 6, utilization: 68, projects: 456, icon: Car },
    { name: 'Tourism', budget: 'KES 78B', disbursed: 'KES 56B', utilized: 'KES 48B', percentage: 3, utilization: 62, projects: 234, icon: Umbrella }
  ]

  // ===== ALL 47 COUNTIES BUDGET ALLOCATIONS =====
  const allCountyBudgets = [
    { name: 'Nairobi', allocation: 'KES 45.2B', disbursed: 'KES 42.1B', utilized: 'KES 39.8B', utilization: 88, projects: 1240 },
    { name: 'Kiambu', allocation: 'KES 28.5B', disbursed: 'KES 24.8B', utilized: 'KES 22.5B', utilization: 79, projects: 892 },
    { name: 'Mombasa', allocation: 'KES 26.4B', disbursed: 'KES 22.5B', utilized: 'KES 20.8B', utilization: 79, projects: 823 },
    { name: 'Kisumu', allocation: 'KES 23.1B', disbursed: 'KES 19.8B', utilized: 'KES 18.2B', utilization: 79, projects: 745 },
    { name: 'Nakuru', allocation: 'KES 22.8B', disbursed: 'KES 19.2B', utilized: 'KES 17.6B', utilization: 77, projects: 712 },
    { name: 'Kakamega', allocation: 'KES 18.2B', disbursed: 'KES 15.2B', utilized: 'KES 13.8B', utilization: 76, projects: 645 },
    { name: 'Uasin Gishu', allocation: 'KES 17.5B', disbursed: 'KES 14.8B', utilized: 'KES 13.2B', utilization: 75, projects: 598 },
    { name: 'Machakos', allocation: 'KES 16.8B', disbursed: 'KES 14.1B', utilized: 'KES 12.5B', utilization: 74, projects: 567 },
    { name: 'Meru', allocation: 'KES 15.8B', disbursed: 'KES 13.2B', utilized: 'KES 11.8B', utilization: 75, projects: 534 },
    { name: 'Kisii', allocation: 'KES 15.4B', disbursed: 'KES 12.8B', utilized: 'KES 11.5B', utilization: 75, projects: 512 },
    { name: 'Bungoma', allocation: 'KES 14.2B', disbursed: 'KES 11.5B', utilized: 'KES 10.2B', utilization: 72, projects: 478 },
    { name: 'Kilifi', allocation: 'KES 13.8B', disbursed: 'KES 11.2B', utilized: 'KES 9.8B', utilization: 71, projects: 456 },
    { name: 'Kericho', allocation: 'KES 13.2B', disbursed: 'KES 10.8B', utilized: 'KES 9.5B', utilization: 72, projects: 423 },
    { name: 'Kitui', allocation: 'KES 12.8B', disbursed: 'KES 9.8B', utilized: 'KES 8.2B', utilization: 64, projects: 398 },
    { name: 'Garissa', allocation: 'KES 12.5B', disbursed: 'KES 9.2B', utilized: 'KES 7.8B', utilization: 62, projects: 378 },
    { name: 'Nyeri', allocation: 'KES 12.2B', disbursed: 'KES 9.8B', utilized: 'KES 8.6B', utilization: 70, projects: 367 },
    { name: 'Turkana', allocation: 'KES 11.8B', disbursed: 'KES 7.8B', utilized: 'KES 6.2B', utilization: 53, projects: 345 },
    { name: 'Wajir', allocation: 'KES 11.5B', disbursed: 'KES 7.5B', utilized: 'KES 5.8B', utilization: 50, projects: 328 },
    { name: 'Mandera', allocation: 'KES 11.2B', disbursed: 'KES 7.2B', utilized: 'KES 5.5B', utilization: 49, projects: 312 },
    { name: 'Marsabit', allocation: 'KES 10.8B', disbursed: 'KES 6.8B', utilized: 'KES 5.2B', utilization: 48, projects: 298 },
    { name: 'Baringo', allocation: 'KES 10.5B', disbursed: 'KES 7.8B', utilized: 'KES 6.5B', utilization: 62, projects: 289 },
    { name: 'Bomet', allocation: 'KES 10.2B', disbursed: 'KES 7.5B', utilized: 'KES 6.2B', utilization: 61, projects: 276 },
    { name: 'Busia', allocation: 'KES 9.8B', disbursed: 'KES 7.2B', utilized: 'KES 5.8B', utilization: 59, projects: 265 },
    { name: 'Elgeyo Marakwet', allocation: 'KES 9.5B', disbursed: 'KES 7.0B', utilized: 'KES 5.5B', utilization: 58, projects: 254 },
    { name: 'Embu', allocation: 'KES 9.2B', disbursed: 'KES 6.8B', utilized: 'KES 5.2B', utilization: 57, projects: 245 },
    { name: 'Homa Bay', allocation: 'KES 9.0B', disbursed: 'KES 6.5B', utilized: 'KES 5.0B', utilization: 56, projects: 238 },
    { name: 'Isiolo', allocation: 'KES 8.8B', disbursed: 'KES 6.2B', utilized: 'KES 4.8B', utilization: 55, projects: 229 },
    { name: 'Kajiado', allocation: 'KES 8.5B', disbursed: 'KES 6.0B', utilized: 'KES 4.5B', utilization: 53, projects: 218 },
    { name: 'Kirinyaga', allocation: 'KES 8.2B', disbursed: 'KES 5.8B', utilized: 'KES 4.2B', utilization: 51, projects: 209 },
    { name: 'Kwale', allocation: 'KES 8.0B', disbursed: 'KES 5.5B', utilized: 'KES 4.0B', utilization: 50, projects: 198 },
    { name: 'Laikipia', allocation: 'KES 7.8B', disbursed: 'KES 5.2B', utilized: 'KES 3.8B', utilization: 49, projects: 189 },
    { name: 'Lamu', allocation: 'KES 7.5B', disbursed: 'KES 5.0B', utilized: 'KES 3.5B', utilization: 47, projects: 178 },
    { name: 'Makueni', allocation: 'KES 7.2B', disbursed: 'KES 4.8B', utilized: 'KES 3.2B', utilization: 44, projects: 167 },
    { name: 'Migori', allocation: 'KES 7.0B', disbursed: 'KES 4.5B', utilized: 'KES 3.0B', utilization: 43, projects: 158 },
    { name: 'Muranga', allocation: 'KES 6.8B', disbursed: 'KES 4.2B', utilized: 'KES 2.8B', utilization: 41, projects: 149 },
    { name: 'Nandi', allocation: 'KES 6.5B', disbursed: 'KES 4.0B', utilized: 'KES 2.5B', utilization: 38, projects: 138 },
    { name: 'Narok', allocation: 'KES 6.2B', disbursed: 'KES 3.8B', utilized: 'KES 2.2B', utilization: 35, projects: 129 },
    { name: 'Nyamira', allocation: 'KES 6.0B', disbursed: 'KES 3.5B', utilized: 'KES 2.0B', utilization: 33, projects: 118 },
    { name: 'Nyandarua', allocation: 'KES 5.8B', disbursed: 'KES 3.2B', utilized: 'KES 1.8B', utilization: 31, projects: 109 },
    { name: 'Samburu', allocation: 'KES 5.5B', disbursed: 'KES 3.0B', utilized: 'KES 1.5B', utilization: 27, projects: 98 },
    { name: 'Siaya', allocation: 'KES 5.2B', disbursed: 'KES 2.8B', utilized: 'KES 1.2B', utilization: 23, projects: 89 },
    { name: 'Taita Taveta', allocation: 'KES 5.0B', disbursed: 'KES 2.5B', utilized: 'KES 1.0B', utilization: 20, projects: 78 },
    { name: 'Tana River', allocation: 'KES 4.8B', disbursed: 'KES 2.2B', utilized: 'KES 0.8B', utilization: 17, projects: 67 },
    { name: 'Tharaka Nithi', allocation: 'KES 4.5B', disbursed: 'KES 2.0B', utilized: 'KES 0.6B', utilization: 13, projects: 56 },
    { name: 'Trans Nzoia', allocation: 'KES 4.2B', disbursed: 'KES 1.8B', utilized: 'KES 0.5B', utilization: 12, projects: 45 },
    { name: 'Vihiga', allocation: 'KES 4.0B', disbursed: 'KES 1.5B', utilized: 'KES 0.4B', utilization: 10, projects: 34 },
    { name: 'West Pokot', allocation: 'KES 3.8B', disbursed: 'KES 1.2B', utilized: 'KES 0.3B', utilization: 8, projects: 23 }
  ]

  const countyBudgets = [...allCountyBudgets].sort((a, b) => {
    const numA = parseInt(a.allocation.replace(/[^0-9]/g, ''))
    const numB = parseInt(b.allocation.replace(/[^0-9]/g, ''))
    return numB - numA
  })

  // ===== PROJECTS FOR EVERY COUNTY =====
  const projectBudgets = [
    // BARINGO - 4 projects
    { id: 1, title: 'Baringo County Roads Rehabilitation', county: 'Baringo', sector: 'Infrastructure', budget: 'KES 890M', utilized: 'KES 875M', status: 'Completed', progress: 100 },
    { id: 2, title: 'Baringo Affordable Housing', county: 'Baringo', sector: 'Housing', budget: 'KES 450M', utilized: 'KES 320M', status: 'Ongoing', progress: 71 },
    { id: 3, title: 'Baringo Water Pans Project', county: 'Baringo', sector: 'Water & Sanitation', budget: 'KES 320M', utilized: 'KES 180M', status: 'Ongoing', progress: 56 },
    { id: 4, title: 'Baringo Solar Mini-Grid', county: 'Baringo', sector: 'Energy', budget: 'KES 780M', utilized: 'KES 780M', status: 'Completed', progress: 100 },
    
    // BOMET - 4 projects
    { id: 5, title: 'Bomet Tea Factory Modernization', county: 'Bomet', sector: 'Agriculture', budget: 'KES 1.2B', utilized: 'KES 1.18B', status: 'Completed', progress: 100 },
    { id: 6, title: 'Bomet Affordable Housing', county: 'Bomet', sector: 'Housing', budget: 'KES 560M', utilized: 'KES 340M', status: 'Ongoing', progress: 61 },
    { id: 7, title: 'Bomet Level 4 Hospital', county: 'Bomet', sector: 'Healthcare', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    { id: 8, title: 'Bomet Technical Institute', county: 'Bomet', sector: 'Education', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    
    // BUNGOMA - 5 projects
    { id: 9, title: 'Bungoma Rice Irrigation Scheme', county: 'Bungoma', sector: 'Agriculture', budget: 'KES 2.1B', utilized: 'KES 1.36B', status: 'Ongoing', progress: 65 },
    { id: 10, title: 'Bungoma Affordable Housing', county: 'Bungoma', sector: 'Housing', budget: 'KES 670M', utilized: 'KES 670M', status: 'Completed', progress: 100 },
    { id: 11, title: 'Bungoma Referral Hospital', county: 'Bungoma', sector: 'Healthcare', budget: 'KES 1.5B', utilized: 'KES 980M', status: 'Ongoing', progress: 65 },
    { id: 12, title: 'Bungoma County Roads', county: 'Bungoma', sector: 'Transport', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    { id: 13, title: 'Bungoma ICT Hub', county: 'Bungoma', sector: 'Technology', budget: 'KES 340M', utilized: 'KES 210M', status: 'Delayed', progress: 62 },
    
    // BUSIA - 4 projects
    { id: 14, title: 'Busia One Stop Border Post', county: 'Busia', sector: 'Infrastructure', budget: 'KES 2.5B', utilized: 'KES 2.48B', status: 'Completed', progress: 100 },
    { id: 15, title: 'Busia Affordable Housing', county: 'Busia', sector: 'Housing', budget: 'KES 560M', utilized: 'KES 340M', status: 'Ongoing', progress: 61 },
    { id: 16, title: 'Busia Water Supply', county: 'Busia', sector: 'Water & Sanitation', budget: 'KES 780M', utilized: 'KES 780M', status: 'Completed', progress: 100 },
    { id: 17, title: 'Busia Market Modernization', county: 'Busia', sector: 'Agriculture', budget: 'KES 340M', utilized: 'KES 220M', status: 'Delayed', progress: 65 },
    
    // ELGEYO MARAKWET - 4 projects
    { id: 18, title: 'Elgeyo Marakwet Water Pans', county: 'Elgeyo Marakwet', sector: 'Water & Sanitation', budget: 'KES 450M', utilized: 'KES 445M', status: 'Completed', progress: 100 },
    { id: 19, title: 'Elgeyo Marakwet Affordable Housing', county: 'Elgeyo Marakwet', sector: 'Housing', budget: 'KES 350M', utilized: 'KES 210M', status: 'Ongoing', progress: 60 },
    { id: 20, title: 'Elgeyo Marakwet Roads', county: 'Elgeyo Marakwet', sector: 'Infrastructure', budget: 'KES 560M', utilized: 'KES 360M', status: 'Ongoing', progress: 64 },
    { id: 21, title: 'Kerio Valley Development', county: 'Elgeyo Marakwet', sector: 'Agriculture', budget: 'KES 670M', utilized: 'KES 670M', status: 'Completed', progress: 100 },
    
    // EMBU - 4 projects
    { id: 22, title: 'Embu ICT Innovation Hub', county: 'Embu', sector: 'Technology', budget: 'KES 450M', utilized: 'KES 445M', status: 'Completed', progress: 100 },
    { id: 23, title: 'Embu Affordable Housing', county: 'Embu', sector: 'Housing', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    { id: 24, title: 'Embu Level 5 Hospital', county: 'Embu', sector: 'Healthcare', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    { id: 25, title: 'Embu Agricultural Hub', county: 'Embu', sector: 'Agriculture', budget: 'KES 340M', utilized: 'KES 220M', status: 'Delayed', progress: 65 },
    
    // GARISSA - 5 projects
    { id: 26, title: 'Garissa Solar Power Plant', county: 'Garissa', sector: 'Energy', budget: 'KES 13.5B', utilized: 'KES 13.4B', status: 'Completed', progress: 100 },
    { id: 27, title: 'Garissa Affordable Housing', county: 'Garissa', sector: 'Housing', budget: 'KES 670M', utilized: 'KES 420M', status: 'Ongoing', progress: 63 },
    { id: 28, title: 'Garissa Water Supply', county: 'Garissa', sector: 'Water & Sanitation', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    { id: 29, title: 'Garissa University College', county: 'Garissa', sector: 'Education', budget: 'KES 1.2B', utilized: 'KES 780M', status: 'Ongoing', progress: 65 },
    { id: 30, title: 'Garissa Flood Mitigation', county: 'Garissa', sector: 'Infrastructure', budget: 'KES 560M', utilized: 'KES 360M', status: 'Delayed', progress: 64 },
    
    // HOMA BAY - 4 projects
    { id: 31, title: 'Homa Bay Fish Processing Plant', county: 'Homa Bay', sector: 'Agriculture', budget: 'KES 950M', utilized: 'KES 940M', status: 'Completed', progress: 100 },
    { id: 32, title: 'Homa Bay Affordable Housing', county: 'Homa Bay', sector: 'Housing', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    { id: 33, title: 'Homa Bay Water Supply', county: 'Homa Bay', sector: 'Water & Sanitation', budget: 'KES 670M', utilized: 'KES 670M', status: 'Completed', progress: 100 },
    { id: 34, title: 'Homa Bay Port Rehabilitation', county: 'Homa Bay', sector: 'Infrastructure', budget: 'KES 560M', utilized: 'KES 360M', status: 'Delayed', progress: 64 },
    
    // ISIOLO - 4 projects
    { id: 35, title: 'Isiolo Resort City', county: 'Isiolo', sector: 'Tourism', budget: 'KES 6.8B', utilized: 'KES 1.7B', status: 'Ongoing', progress: 25 },
    { id: 36, title: 'Isiolo Affordable Housing', county: 'Isiolo', sector: 'Housing', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    { id: 37, title: 'Isiolo Airport Upgrade', county: 'Isiolo', sector: 'Transport', budget: 'KES 1.2B', utilized: 'KES 1.18B', status: 'Completed', progress: 100 },
    { id: 38, title: 'Isiolo Water Project', county: 'Isiolo', sector: 'Water & Sanitation', budget: 'KES 560M', utilized: 'KES 360M', status: 'Delayed', progress: 64 },
    
    // KAJIADO - 5 projects
    { id: 39, title: 'Kajiado Water Pan Network', county: 'Kajiado', sector: 'Water & Sanitation', budget: 'KES 890M', utilized: 'KES 880M', status: 'Completed', progress: 100 },
    { id: 40, title: 'Kajiado Affordable Housing', county: 'Kajiado', sector: 'Housing', budget: 'KES 560M', utilized: 'KES 340M', status: 'Ongoing', progress: 61 },
    { id: 41, title: 'Kajiado Wind Power', county: 'Kajiado', sector: 'Energy', budget: 'KES 2.1B', utilized: 'KES 1.36B', status: 'Ongoing', progress: 65 },
    { id: 42, title: 'Kajiado Roads Network', county: 'Kajiado', sector: 'Transport', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    { id: 43, title: 'Kajiado Livestock Market', county: 'Kajiado', sector: 'Agriculture', budget: 'KES 340M', utilized: 'KES 220M', status: 'Delayed', progress: 65 },
    
    // KAKAMEGA - 5 projects
    { id: 44, title: 'Kakamega County Referral Hospital', county: 'Kakamega', sector: 'Healthcare', budget: 'KES 3.1B', utilized: 'KES 3.05B', status: 'Completed', progress: 100 },
    { id: 45, title: 'Kakamega Affordable Housing', county: 'Kakamega', sector: 'Housing', budget: 'KES 780M', utilized: 'KES 480M', status: 'Ongoing', progress: 62 },
    { id: 46, title: 'Kakamega ICT Hub', county: 'Kakamega', sector: 'Technology', budget: 'KES 450M', utilized: 'KES 445M', status: 'Completed', progress: 100 },
    { id: 47, title: 'Kakamega Sugar Industry', county: 'Kakamega', sector: 'Agriculture', budget: 'KES 1.2B', utilized: 'KES 780M', status: 'Delayed', progress: 65 },
    { id: 48, title: 'Kakamega University', county: 'Kakamega', sector: 'Education', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    
    // KERICHO - 4 projects
    { id: 49, title: 'Kericho Tea Processing Hub', county: 'Kericho', sector: 'Agriculture', budget: 'KES 1.8B', utilized: 'KES 1.78B', status: 'Completed', progress: 100 },
    { id: 50, title: 'Kericho Affordable Housing', county: 'Kericho', sector: 'Housing', budget: 'KES 560M', utilized: 'KES 340M', status: 'Ongoing', progress: 61 },
    { id: 51, title: 'Kericho Level 5 Hospital', county: 'Kericho', sector: 'Healthcare', budget: 'KES 1.2B', utilized: 'KES 1.18B', status: 'Completed', progress: 100 },
    { id: 52, title: 'Kericho Tea Research', county: 'Kericho', sector: 'Education', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    
    // KIAMBU - 5 projects
    { id: 53, title: 'Thika Road Expansion', county: 'Kiambu', sector: 'Transport', budget: 'KES 31B', utilized: 'KES 30.8B', status: 'Completed', progress: 100 },
    { id: 54, title: 'Kiambu Affordable Housing - Ruiru', county: 'Kiambu', sector: 'Housing', budget: 'KES 2.2B', utilized: 'KES 2.18B', status: 'Completed', progress: 100 },
    { id: 55, title: 'Kiambu Institute of Science', county: 'Kiambu', sector: 'Education', budget: 'KES 1.2B', utilized: 'KES 780M', status: 'Ongoing', progress: 65 },
    { id: 56, title: 'Kiambu Water Supply', county: 'Kiambu', sector: 'Water & Sanitation', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    { id: 57, title: 'Kiambu Level 5 Hospital', county: 'Kiambu', sector: 'Healthcare', budget: 'KES 1.5B', utilized: 'KES 980M', status: 'Ongoing', progress: 65 },
    
    // KILIFI - 5 projects
    { id: 58, title: 'Kilifi County Water Supply', county: 'Kilifi', sector: 'Water & Sanitation', budget: 'KES 3.8B', utilized: 'KES 3.75B', status: 'Completed', progress: 100 },
    { id: 59, title: 'Kilifi Affordable Housing', county: 'Kilifi', sector: 'Housing', budget: 'KES 670M', utilized: 'KES 420M', status: 'Ongoing', progress: 63 },
    { id: 60, title: 'Watamu Beachfront Tourism', county: 'Kilifi', sector: 'Tourism', budget: 'KES 2.2B', utilized: 'KES 880M', status: 'Ongoing', progress: 40 },
    { id: 61, title: 'Kilifi Referral Hospital', county: 'Kilifi', sector: 'Healthcare', budget: 'KES 1.2B', utilized: 'KES 1.18B', status: 'Completed', progress: 100 },
    { id: 62, title: 'Kilifi Coconut Processing', county: 'Kilifi', sector: 'Agriculture', budget: 'KES 450M', utilized: 'KES 280M', status: 'Delayed', progress: 62 },
    
    // KIRINYAGA - 4 projects
    { id: 63, title: 'Kirinyaga Rice Irrigation', county: 'Kirinyaga', sector: 'Agriculture', budget: 'KES 780M', utilized: 'KES 770M', status: 'Completed', progress: 100 },
    { id: 64, title: 'Kirinyaga Affordable Housing', county: 'Kirinyaga', sector: 'Housing', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    { id: 65, title: 'Kirinyaga University', county: 'Kirinyaga', sector: 'Education', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    { id: 66, title: 'Kirinyaga Water Supply', county: 'Kirinyaga', sector: 'Water & Sanitation', budget: 'KES 560M', utilized: 'KES 360M', status: 'Delayed', progress: 64 },
    
    // KISII - 5 projects
    { id: 67, title: 'Kisii Teaching & Referral Hospital', county: 'Kisii', sector: 'Healthcare', budget: 'KES 4.5B', utilized: 'KES 3.6B', status: 'Ongoing', progress: 80 },
    { id: 68, title: 'Kisii Affordable Housing', county: 'Kisii', sector: 'Housing', budget: 'KES 1.2B', utilized: 'KES 1.18B', status: 'Completed', progress: 100 },
    { id: 69, title: 'Kisii Banana Processing', county: 'Kisii', sector: 'Agriculture', budget: 'KES 560M', utilized: 'KES 340M', status: 'Ongoing', progress: 61 },
    { id: 70, title: 'Kisii University Expansion', county: 'Kisii', sector: 'Education', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    { id: 71, title: 'Kisii Market Modernization', county: 'Kisii', sector: 'Infrastructure', budget: 'KES 450M', utilized: 'KES 280M', status: 'Delayed', progress: 62 },
    
    // KISUMU - 5 projects
    { id: 72, title: 'Kisumu Port Rehabilitation', county: 'Kisumu', sector: 'Infrastructure', budget: 'KES 3.2B', utilized: 'KES 3.15B', status: 'Completed', progress: 100 },
    { id: 73, title: 'Kisumu Affordable Housing', county: 'Kisumu', sector: 'Housing', budget: 'KES 8.5B', utilized: 'KES 4.7B', status: 'Ongoing', progress: 55 },
    { id: 74, title: 'Kisumu Digital Hub', county: 'Kisumu', sector: 'Technology', budget: 'KES 650M', utilized: 'KES 645M', status: 'Completed', progress: 100 },
    { id: 75, title: 'Kisumu Jomo Kenyatta Stadium', county: 'Kisumu', sector: 'Infrastructure', budget: 'KES 1.5B', utilized: 'KES 1.48B', status: 'Completed', progress: 100 },
    { id: 76, title: 'Kisumu Water Supply', county: 'Kisumu', sector: 'Water & Sanitation', budget: 'KES 890M', utilized: 'KES 560M', status: 'Ongoing', progress: 63 },
    
    // KITUI - 4 projects
    { id: 77, title: 'Kitui County Aggregation Park', county: 'Kitui', sector: 'Agriculture', budget: 'KES 650M', utilized: 'KES 640M', status: 'Completed', progress: 100 },
    { id: 78, title: 'Kitui Affordable Housing', county: 'Kitui', sector: 'Housing', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    { id: 79, title: 'Kitui Water Supply', county: 'Kitui', sector: 'Water & Sanitation', budget: 'KES 560M', utilized: 'KES 360M', status: 'Delayed', progress: 64 },
    { id: 80, title: 'Kitui Solar Power', county: 'Kitui', sector: 'Energy', budget: 'KES 780M', utilized: 'KES 780M', status: 'Completed', progress: 100 },
    
    // KWALE - 4 projects
    { id: 81, title: 'Kwale County Water Project', county: 'Kwale', sector: 'Water & Sanitation', budget: 'KES 1.2B', utilized: 'KES 1.18B', status: 'Completed', progress: 100 },
    { id: 82, title: 'Kwale Affordable Housing', county: 'Kwale', sector: 'Housing', budget: 'KES 560M', utilized: 'KES 340M', status: 'Ongoing', progress: 61 },
    { id: 83, title: 'Kwale Titanium Mining', county: 'Kwale', sector: 'Energy', budget: 'KES 2.1B', utilized: 'KES 1.36B', status: 'Ongoing', progress: 65 },
    { id: 84, title: 'Kwale Beach Tourism', county: 'Kwale', sector: 'Tourism', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    
    // LAIKIPIA - 4 projects
    { id: 85, title: 'Laikipia Water Pan Project', county: 'Laikipia', sector: 'Water & Sanitation', budget: 'KES 750M', utilized: 'KES 740M', status: 'Completed', progress: 100 },
    { id: 86, title: 'Laikipia Affordable Housing', county: 'Laikipia', sector: 'Housing', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    { id: 87, title: 'Laikipia Wind Power', county: 'Laikipia', sector: 'Energy', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    { id: 88, title: 'Laikipia Livestock Market', county: 'Laikipia', sector: 'Agriculture', budget: 'KES 340M', utilized: 'KES 220M', status: 'Delayed', progress: 65 },
    
    // LAMU - 4 projects
    { id: 89, title: 'Lamu Port Phase 1', county: 'Lamu', sector: 'Infrastructure', budget: 'KES 34B', utilized: 'KES 33.8B', status: 'Completed', progress: 100 },
    { id: 90, title: 'Lamu Affordable Housing', county: 'Lamu', sector: 'Housing', budget: 'KES 560M', utilized: 'KES 340M', status: 'Ongoing', progress: 61 },
    { id: 91, title: 'Lamu Wind Power', county: 'Lamu', sector: 'Energy', budget: 'KES 1.2B', utilized: 'KES 780M', status: 'Ongoing', progress: 65 },
    { id: 92, title: 'Lamu Beach Tourism', county: 'Lamu', sector: 'Tourism', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    
    // MACHAKOS - 5 projects
    { id: 93, title: 'Konza Technopolis', county: 'Machakos', sector: 'Infrastructure', budget: 'KES 82B', utilized: 'KES 32.8B', status: 'Ongoing', progress: 40 },
    { id: 94, title: 'Machakos Affordable Housing', county: 'Machakos', sector: 'Housing', budget: 'KES 1.8B', utilized: 'KES 1.76B', status: 'Completed', progress: 100 },
    { id: 95, title: 'Machakos Level 5 Hospital', county: 'Machakos', sector: 'Healthcare', budget: 'KES 3.2B', utilized: 'KES 1.92B', status: 'Ongoing', progress: 60 },
    { id: 96, title: 'Machakos University', county: 'Machakos', sector: 'Education', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    { id: 97, title: 'Machakos Water Supply', county: 'Machakos', sector: 'Water & Sanitation', budget: 'KES 560M', utilized: 'KES 360M', status: 'Delayed', progress: 64 },
    
    // MAKUENI - 4 projects
    { id: 98, title: 'Makueni Fruit Processing Plant', county: 'Makueni', sector: 'Agriculture', budget: 'KES 520M', utilized: 'KES 515M', status: 'Completed', progress: 100 },
    { id: 99, title: 'Makueni Affordable Housing', county: 'Makueni', sector: 'Housing', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    { id: 100, title: 'Makueni Water Supply', county: 'Makueni', sector: 'Water & Sanitation', budget: 'KES 560M', utilized: 'KES 360M', status: 'Delayed', progress: 64 },
    { id: 101, title: 'Makueni Drip Irrigation', county: 'Makueni', sector: 'Agriculture', budget: 'KES 340M', utilized: 'KES 340M', status: 'Completed', progress: 100 },
    
    // MANDERA - 4 projects
    { id: 102, title: 'Mandera Water Supply', county: 'Mandera', sector: 'Water & Sanitation', budget: 'KES 2.2B', utilized: 'KES 990M', status: 'Ongoing', progress: 45 },
    { id: 103, title: 'Mandera Affordable Housing', county: 'Mandera', sector: 'Housing', budget: 'KES 560M', utilized: 'KES 340M', status: 'Ongoing', progress: 61 },
    { id: 104, title: 'Mandera Solar Power', county: 'Mandera', sector: 'Energy', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    { id: 105, title: 'Mandera Teachers College', county: 'Mandera', sector: 'Education', budget: 'KES 450M', utilized: 'KES 280M', status: 'Delayed', progress: 62 },
    
    // MARSABIT - 4 projects
    { id: 106, title: 'Marsabit Wind Power', county: 'Marsabit', sector: 'Energy', budget: 'KES 8.5B', utilized: 'KES 2.55B', status: 'Ongoing', progress: 30 },
    { id: 107, title: 'Marsabit Affordable Housing', county: 'Marsabit', sector: 'Housing', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    { id: 108, title: 'Marsabit Water Pans', county: 'Marsabit', sector: 'Water & Sanitation', budget: 'KES 560M', utilized: 'KES 560M', status: 'Completed', progress: 100 },
    { id: 109, title: 'Marsabit Livestock Market', county: 'Marsabit', sector: 'Agriculture', budget: 'KES 340M', utilized: 'KES 220M', status: 'Delayed', progress: 65 },
    
    // MERU - 5 projects
    { id: 110, title: 'Meru University Expansion', county: 'Meru', sector: 'Education', budget: 'KES 3.2B', utilized: 'KES 1.92B', status: 'Ongoing', progress: 60 },
    { id: 111, title: 'Meru Affordable Housing', county: 'Meru', sector: 'Housing', budget: 'KES 1.1B', utilized: 'KES 1.09B', status: 'Completed', progress: 100 },
    { id: 112, title: 'Meru Level 5 Hospital', county: 'Meru', sector: 'Healthcare', budget: 'KES 1.5B', utilized: 'KES 980M', status: 'Ongoing', progress: 65 },
    { id: 113, title: 'Meru Farmers Market', county: 'Meru', sector: 'Agriculture', budget: 'KES 450M', utilized: 'KES 450M', status: 'Completed', progress: 100 },
    { id: 114, title: 'Meru Water Supply', county: 'Meru', sector: 'Water & Sanitation', budget: 'KES 560M', utilized: 'KES 360M', status: 'Delayed', progress: 64 },
    
    // MIGORI - 4 projects
    { id: 115, title: 'Migori Gold Mining Project', county: 'Migori', sector: 'Energy', budget: 'KES 4.2B', utilized: 'KES 1.26B', status: 'Ongoing', progress: 30 },
    { id: 116, title: 'Migori Affordable Housing', county: 'Migori', sector: 'Housing', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    { id: 117, title: 'Migori Referral Hospital', county: 'Migori', sector: 'Healthcare', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    { id: 118, title: 'Migori Rice Irrigation', county: 'Migori', sector: 'Agriculture', budget: 'KES 560M', utilized: 'KES 360M', status: 'Delayed', progress: 64 },
    
    // MOMBASA - 5 projects
    { id: 119, title: 'Mombasa Port Modernization', county: 'Mombasa', sector: 'Infrastructure', budget: 'KES 38B', utilized: 'KES 17.1B', status: 'Ongoing', progress: 45 },
    { id: 120, title: 'Mombasa Dongo Kundu Bypass', county: 'Mombasa', sector: 'Transport', budget: 'KES 23B', utilized: 'KES 22.8B', status: 'Completed', progress: 100 },
    { id: 121, title: 'Mombasa Affordable Housing', county: 'Mombasa', sector: 'Housing', budget: 'KES 2.8B', utilized: 'KES 1.68B', status: 'Ongoing', progress: 60 },
    { id: 122, title: 'Mombasa Technical University', county: 'Mombasa', sector: 'Education', budget: 'KES 1.2B', utilized: 'KES 1.18B', status: 'Completed', progress: 100 },
    { id: 123, title: 'Mombasa Water Supply', county: 'Mombasa', sector: 'Water & Sanitation', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    
    // MURANGA - 4 projects
    { id: 124, title: 'Muranga County Roads Network', county: 'Muranga', sector: 'Transport', budget: 'KES 1.2B', utilized: 'KES 720M', status: 'Ongoing', progress: 60 },
    { id: 125, title: 'Muranga Affordable Housing', county: 'Muranga', sector: 'Housing', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    { id: 126, title: 'Muranga Coffee Mill', county: 'Muranga', sector: 'Agriculture', budget: 'KES 560M', utilized: 'KES 560M', status: 'Completed', progress: 100 },
    { id: 127, title: 'Muranga Water Supply', county: 'Muranga', sector: 'Water & Sanitation', budget: 'KES 340M', utilized: 'KES 220M', status: 'Delayed', progress: 65 },
    
    // NAIROBI - 6 projects
    { id: 128, title: 'Nairobi Expressway', county: 'Nairobi', sector: 'Transport', budget: 'KES 75B', utilized: 'KES 74.2B', status: 'Completed', progress: 100 },
    { id: 129, title: 'Nairobi Affordable Housing', county: 'Nairobi', sector: 'Housing', budget: 'KES 4.5B', utilized: 'KES 4.48B', status: 'Completed', progress: 100 },
    { id: 130, title: 'Nairobi BRT Line 1', county: 'Nairobi', sector: 'Transport', budget: 'KES 15.6B', utilized: 'KES 10.1B', status: 'Ongoing', progress: 65 },
    { id: 131, title: 'Nairobi Water Treatment Plant', county: 'Nairobi', sector: 'Water & Sanitation', budget: 'KES 8.2B', utilized: 'KES 4.5B', status: 'Ongoing', progress: 55 },
    { id: 132, title: 'Nairobi Green Park School', county: 'Nairobi', sector: 'Education', budget: 'KES 890M', utilized: 'KES 885M', status: 'Completed', progress: 100 },
    { id: 133, title: 'Nairobi Waste Management', county: 'Nairobi', sector: 'Water & Sanitation', budget: 'KES 2.1B', utilized: 'KES 1.36B', status: 'Delayed', progress: 65 },
    
    // NAKURU - 5 projects
    { id: 134, title: 'Nakuru - Eldoret Highway', county: 'Nakuru', sector: 'Transport', budget: 'KES 28B', utilized: 'KES 19.6B', status: 'Ongoing', progress: 70 },
    { id: 135, title: 'Nakuru Affordable Housing', county: 'Nakuru', sector: 'Housing', budget: 'KES 2.1B', utilized: 'KES 2.08B', status: 'Completed', progress: 100 },
    { id: 136, title: 'Nakuru Level 6 Hospital', county: 'Nakuru', sector: 'Healthcare', budget: 'KES 5.2B', utilized: 'KES 3.9B', status: 'Ongoing', progress: 75 },
    { id: 137, title: 'Nakuru Water Supply', county: 'Nakuru', sector: 'Water & Sanitation', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    { id: 138, title: 'Nakuru Industrial Park', county: 'Nakuru', sector: 'Agriculture', budget: 'KES 1.2B', utilized: 'KES 780M', status: 'Delayed', progress: 65 },
    
    // NANDI - 4 projects
    { id: 139, title: 'Nandi Milk Processing Plant', county: 'Nandi', sector: 'Agriculture', budget: 'KES 980M', utilized: 'KES 970M', status: 'Completed', progress: 100 },
    { id: 140, title: 'Nandi Affordable Housing', county: 'Nandi', sector: 'Housing', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    { id: 141, title: 'Nandi Tea Factory', county: 'Nandi', sector: 'Agriculture', budget: 'KES 560M', utilized: 'KES 560M', status: 'Completed', progress: 100 },
    { id: 142, title: 'Nandi Technical Institute', county: 'Nandi', sector: 'Education', budget: 'KES 340M', utilized: 'KES 220M', status: 'Delayed', progress: 65 },
    
    // NAROK - 4 projects
    { id: 143, title: 'Narok - Sekenani Road', county: 'Narok', sector: 'Tourism', budget: 'KES 2.1B', utilized: 'KES 1.155B', status: 'Ongoing', progress: 55 },
    { id: 144, title: 'Narok Affordable Housing', county: 'Narok', sector: 'Housing', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    { id: 145, title: 'Narok Water Supply', county: 'Narok', sector: 'Water & Sanitation', budget: 'KES 560M', utilized: 'KES 360M', status: 'Delayed', progress: 64 },
    { id: 146, title: 'Maasai Mara Tourism Hub', county: 'Narok', sector: 'Tourism', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    
    // NYAMIRA - 4 projects
    { id: 147, title: 'Nyamira Tea Farmers Support', county: 'Nyamira', sector: 'Agriculture', budget: 'KES 350M', utilized: 'KES 345M', status: 'Completed', progress: 100 },
    { id: 148, title: 'Nyamira Affordable Housing', county: 'Nyamira', sector: 'Housing', budget: 'KES 340M', utilized: 'KES 210M', status: 'Ongoing', progress: 62 },
    { id: 149, title: 'Nyamira Water Supply', county: 'Nyamira', sector: 'Water & Sanitation', budget: 'KES 450M', utilized: 'KES 280M', status: 'Delayed', progress: 62 },
    { id: 150, title: 'Nyamira Technical College', county: 'Nyamira', sector: 'Education', budget: 'KES 340M', utilized: 'KES 340M', status: 'Completed', progress: 100 },
    
    // NYANDARUA - 4 projects
    { id: 151, title: 'Nyandarua Potato Value Chain', county: 'Nyandarua', sector: 'Agriculture', budget: 'KES 550M', utilized: 'KES 545M', status: 'Completed', progress: 100 },
    { id: 152, title: 'Nyandarua Affordable Housing', county: 'Nyandarua', sector: 'Housing', budget: 'KES 340M', utilized: 'KES 210M', status: 'Ongoing', progress: 62 },
    { id: 153, title: 'Nyandarua Water Supply', county: 'Nyandarua', sector: 'Water & Sanitation', budget: 'KES 450M', utilized: 'KES 280M', status: 'Delayed', progress: 62 },
    { id: 154, title: 'Nyandarua Cold Storage', county: 'Nyandarua', sector: 'Agriculture', budget: 'KES 340M', utilized: 'KES 340M', status: 'Completed', progress: 100 },
    
    // NYERI - 5 projects
    { id: 155, title: 'Nyeri Level 5 Hospital', county: 'Nyeri', sector: 'Healthcare', budget: 'KES 2.8B', utilized: 'KES 2.76B', status: 'Completed', progress: 100 },
    { id: 156, title: 'Nyeri Affordable Housing', county: 'Nyeri', sector: 'Housing', budget: 'KES 890M', utilized: 'KES 885M', status: 'Completed', progress: 100 },
    { id: 157, title: 'Nyeri Water Supply', county: 'Nyeri', sector: 'Water & Sanitation', budget: 'KES 560M', utilized: 'KES 560M', status: 'Completed', progress: 100 },
    { id: 158, title: 'Nyeri Technical Institute', county: 'Nyeri', sector: 'Education', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    { id: 159, title: 'Nyeri Coffee Mill', county: 'Nyeri', sector: 'Agriculture', budget: 'KES 340M', utilized: 'KES 220M', status: 'Delayed', progress: 65 },
    
    // SAMBURU - 4 projects
    { id: 160, title: 'Samburu Water Project', county: 'Samburu', sector: 'Water & Sanitation', budget: 'KES 620M', utilized: 'KES 248M', status: 'Ongoing', progress: 40 },
    { id: 161, title: 'Samburu Affordable Housing', county: 'Samburu', sector: 'Housing', budget: 'KES 340M', utilized: 'KES 210M', status: 'Ongoing', progress: 62 },
    { id: 162, title: 'Samburu Tourism Lodge', county: 'Samburu', sector: 'Tourism', budget: 'KES 560M', utilized: 'KES 560M', status: 'Completed', progress: 100 },
    { id: 163, title: 'Samburu Livestock Market', county: 'Samburu', sector: 'Agriculture', budget: 'KES 340M', utilized: 'KES 220M', status: 'Delayed', progress: 65 },
    
    // SIAYA - 4 projects
    { id: 164, title: 'Siaya County Stadium', county: 'Siaya', sector: 'Infrastructure', budget: 'KES 890M', utilized: 'KES 400M', status: 'Ongoing', progress: 45 },
    { id: 165, title: 'Siaya Affordable Housing', county: 'Siaya', sector: 'Housing', budget: 'KES 340M', utilized: 'KES 210M', status: 'Ongoing', progress: 62 },
    { id: 166, title: 'Siaya Water Supply', county: 'Siaya', sector: 'Water & Sanitation', budget: 'KES 450M', utilized: 'KES 280M', status: 'Delayed', progress: 62 },
    { id: 167, title: 'Siaya Fish Processing', county: 'Siaya', sector: 'Agriculture', budget: 'KES 340M', utilized: 'KES 340M', status: 'Completed', progress: 100 },
    
    // TAITA TAVETA - 4 projects
    { id: 168, title: 'Taita Taveta Dairy Project', county: 'Taita Taveta', sector: 'Agriculture', budget: 'KES 420M', utilized: 'KES 415M', status: 'Completed', progress: 100 },
    { id: 169, title: 'Taita Taveta Affordable Housing', county: 'Taita Taveta', sector: 'Housing', budget: 'KES 340M', utilized: 'KES 210M', status: 'Ongoing', progress: 62 },
    { id: 170, title: 'Taita Hills Tourism', county: 'Taita Taveta', sector: 'Tourism', budget: 'KES 560M', utilized: 'KES 360M', status: 'Delayed', progress: 64 },
    { id: 171, title: 'Taita Taveta Water Supply', county: 'Taita Taveta', sector: 'Water & Sanitation', budget: 'KES 340M', utilized: 'KES 340M', status: 'Completed', progress: 100 },
    
    // TANA RIVER - 4 projects
    { id: 172, title: 'Tana River Irrigation Scheme', county: 'Tana River', sector: 'Agriculture', budget: 'KES 3.5B', utilized: 'KES 1.4B', status: 'Ongoing', progress: 40 },
    { id: 173, title: 'Tana River Affordable Housing', county: 'Tana River', sector: 'Housing', budget: 'KES 340M', utilized: 'KES 210M', status: 'Ongoing', progress: 62 },
    { id: 174, title: 'Tana River Water Supply', county: 'Tana River', sector: 'Water & Sanitation', budget: 'KES 450M', utilized: 'KES 280M', status: 'Delayed', progress: 62 },
    { id: 175, title: 'Tana Delta Sugar', county: 'Tana River', sector: 'Agriculture', budget: 'KES 560M', utilized: 'KES 560M', status: 'Completed', progress: 100 },
    
    // THARAKA NITHI - 4 projects
    { id: 176, title: 'Tharaka Nithi Water Supply', county: 'Tharaka Nithi', sector: 'Water & Sanitation', budget: 'KES 380M', utilized: 'KES 375M', status: 'Completed', progress: 100 },
    { id: 177, title: 'Tharaka Nithi Affordable Housing', county: 'Tharaka Nithi', sector: 'Housing', budget: 'KES 340M', utilized: 'KES 210M', status: 'Ongoing', progress: 62 },
    { id: 178, title: 'Tharaka Nithi Roads', county: 'Tharaka Nithi', sector: 'Transport', budget: 'KES 340M', utilized: 'KES 220M', status: 'Delayed', progress: 65 },
    { id: 179, title: 'Tharaka Nithi Market', county: 'Tharaka Nithi', sector: 'Agriculture', budget: 'KES 230M', utilized: 'KES 230M', status: 'Completed', progress: 100 },
    
    // TRANS NZOIA - 4 projects
    { id: 180, title: 'Kitale Industrial Park', county: 'Trans Nzoia', sector: 'Agriculture', budget: 'KES 3.5B', utilized: 'KES 1.225B', status: 'Ongoing', progress: 35 },
    { id: 181, title: 'Trans Nzoia Affordable Housing', county: 'Trans Nzoia', sector: 'Housing', budget: 'KES 450M', utilized: 'KES 280M', status: 'Ongoing', progress: 62 },
    { id: 182, title: 'Trans Nzoia Water Supply', county: 'Trans Nzoia', sector: 'Water & Sanitation', budget: 'KES 340M', utilized: 'KES 220M', status: 'Delayed', progress: 65 },
    { id: 183, title: 'Kitale Teachers College', county: 'Trans Nzoia', sector: 'Education', budget: 'KES 450M', utilized: 'KES 450M', status: 'Completed', progress: 100 },
    
    // TURKANA - 5 projects
    { id: 184, title: 'Turkana Wind Power Phase 2', county: 'Turkana', sector: 'Energy', budget: 'KES 15B', utilized: 'KES 5.25B', status: 'Ongoing', progress: 35 },
    { id: 185, title: 'Turkana Affordable Housing', county: 'Turkana', sector: 'Housing', budget: 'KES 560M', utilized: 'KES 340M', status: 'Ongoing', progress: 61 },
    { id: 186, title: 'Turkana University College', county: 'Turkana', sector: 'Education', budget: 'KES 1.8B', utilized: 'KES 1.78B', status: 'Completed', progress: 100 },
    { id: 187, title: 'Turkana Water Pans', county: 'Turkana', sector: 'Water & Sanitation', budget: 'KES 670M', utilized: 'KES 420M', status: 'Ongoing', progress: 63 },
    { id: 188, title: 'Turkana Fishing Port', county: 'Turkana', sector: 'Agriculture', budget: 'KES 450M', utilized: 'KES 280M', status: 'Delayed', progress: 62 },
    
    // UASIN GISHU - 5 projects
    { id: 189, title: 'Eldoret Sports City', county: 'Uasin Gishu', sector: 'Infrastructure', budget: 'KES 5.2B', utilized: 'KES 2.6B', status: 'Ongoing', progress: 50 },
    { id: 190, title: 'Eldoret Affordable Housing', county: 'Uasin Gishu', sector: 'Housing', budget: 'KES 1.5B', utilized: 'KES 1.49B', status: 'Completed', progress: 100 },
    { id: 191, title: 'Moi University Expansion', county: 'Uasin Gishu', sector: 'Education', budget: 'KES 2.2B', utilized: 'KES 1.54B', status: 'Ongoing', progress: 70 },
    { id: 192, title: 'Eldoret Water Supply', county: 'Uasin Gishu', sector: 'Water & Sanitation', budget: 'KES 890M', utilized: 'KES 890M', status: 'Completed', progress: 100 },
    { id: 193, title: 'Eldoret Industrial Park', county: 'Uasin Gishu', sector: 'Agriculture', budget: 'KES 1.2B', utilized: 'KES 780M', status: 'Delayed', progress: 65 },
    
    // VIHIGA - 4 projects
    { id: 194, title: 'Vihiga Water Project', county: 'Vihiga', sector: 'Water & Sanitation', budget: 'KES 670M', utilized: 'KES 665M', status: 'Completed', progress: 100 },
    { id: 195, title: 'Vihiga Affordable Housing', county: 'Vihiga', sector: 'Housing', budget: 'KES 340M', utilized: 'KES 210M', status: 'Ongoing', progress: 62 },
    { id: 196, title: 'Vihiga Tea Factory', county: 'Vihiga', sector: 'Agriculture', budget: 'KES 340M', utilized: 'KES 220M', status: 'Delayed', progress: 65 },
    { id: 197, title: 'Vihiga Technical College', county: 'Vihiga', sector: 'Education', budget: 'KES 340M', utilized: 'KES 340M', status: 'Completed', progress: 100 },
    
    // WAJIR - 5 projects
    { id: 198, title: 'Wajir Madaraka Day Stadium', county: 'Wajir', sector: 'Infrastructure', budget: 'KES 1.8B', utilized: 'KES 1.78B', status: 'Completed', progress: 100 },
    { id: 199, title: 'Wajir Affordable Housing', county: 'Wajir', sector: 'Housing', budget: 'KES 560M', utilized: 'KES 340M', status: 'Ongoing', progress: 61 },
    { id: 200, title: 'Wajir Solar Power Plant', county: 'Wajir', sector: 'Energy', budget: 'KES 1.5B', utilized: 'KES 1.48B', status: 'Completed', progress: 100 },
    { id: 201, title: 'Wajir Water Supply', county: 'Wajir', sector: 'Water & Sanitation', budget: 'KES 670M', utilized: 'KES 420M', status: 'Ongoing', progress: 63 },
    { id: 202, title: 'Wajir Teachers College', county: 'Wajir', sector: 'Education', budget: 'KES 450M', utilized: 'KES 280M', status: 'Delayed', progress: 62 },
    
    // WEST POKOT - 4 projects
    { id: 203, title: 'West Pokot Water Pans', county: 'West Pokot', sector: 'Water & Sanitation', budget: 'KES 520M', utilized: 'KES 515M', status: 'Completed', progress: 100 },
    { id: 204, title: 'West Pokot Affordable Housing', county: 'West Pokot', sector: 'Housing', budget: 'KES 340M', utilized: 'KES 210M', status: 'Ongoing', progress: 62 },
    { id: 205, title: 'West Pokot Roads', county: 'West Pokot', sector: 'Transport', budget: 'KES 340M', utilized: 'KES 220M', status: 'Delayed', progress: 65 },
    { id: 206, title: 'West Pokot Livestock Market', county: 'West Pokot', sector: 'Agriculture', budget: 'KES 230M', utilized: 'KES 230M', status: 'Completed', progress: 100 }
  ]

  const filteredProjectBudgets = projectBudgets.filter(item => {
    const matchCounty = selectedCounty === 'all' || selectedCounty === 'All Counties' || item.county === selectedCounty
    const matchSector = selectedSector === 'all' || item.sector === selectedSector
    return matchCounty && matchSector
  })

  // ===== GET SECTOR ICON =====
  const getSectorIcon = (sectorName) => {
    const Icon = sectorIcons[sectorName]
    return Icon ? <Icon size={20} className="text-[#22c55e]" /> : <Building2 size={20} className="text-[#22c55e]" />
  }

  // ===== UPDATED STATUS BADGE =====
  const getStatusBadge = (status) => {
    if (status === 'Completed') {
      return 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20'
    }
    if (status === 'Ongoing') {
      return 'bg-[#0f172a]/10 text-[#0f172a] border border-[#0f172a]/20'
    }
    if (status === 'Delayed') {
      return 'bg-red-100 text-red-700 border border-red-200'
    }
    return 'bg-gray-100 text-gray-700 border border-gray-200'
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20">
      
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#0f172a]">Budget Utilization Tracker</h1>
              <p className="text-gray-500 text-sm mt-1">
                Real-time monitoring of development budget across all 47 counties | 
                <span className="font-bold text-[#22c55e] ml-1">Fiscal Year {nationalBudget.fiscalYear}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] bg-white"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year} - {parseInt(year) + 1}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* View Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex gap-1 border-b border-gray-200">
          <button onClick={() => setSelectedView('overview')} className={`px-5 py-2.5 text-sm font-medium transition-all ${selectedView === 'overview' ? 'text-[#22c55e] border-b-2 border-[#22c55e]' : 'text-gray-500 hover:text-[#0f172a]'}`}>Overview</button>
          <button onClick={() => setSelectedView('sectors')} className={`px-5 py-2.5 text-sm font-medium transition-all ${selectedView === 'sectors' ? 'text-[#22c55e] border-b-2 border-[#22c55e]' : 'text-gray-500 hover:text-[#0f172a]'}`}>By Sector</button>
          <button onClick={() => setSelectedView('counties')} className={`px-5 py-2.5 text-sm font-medium transition-all ${selectedView === 'counties' ? 'text-[#22c55e] border-b-2 border-[#22c55e]' : 'text-gray-500 hover:text-[#0f172a]'}`}>By County</button>
          <button onClick={() => setSelectedView('projects')} className={`px-5 py-2.5 text-sm font-medium transition-all ${selectedView === 'projects' ? 'text-[#22c55e] border-b-2 border-[#22c55e]' : 'text-gray-500 hover:text-[#0f172a]'}`}>Project Budgets</button>
        </div>
      </div>

      {/* ===== OVERVIEW VIEW ===== */}
      {selectedView === 'overview' && (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#22c55e]/30 transition-all cursor-default">
                <div className="text-2xl font-bold text-[#22c55e]">{nationalBudget.totalBudget}</div>
                <div className="text-xs text-gray-500">Total Budget</div>
                <div className="border-b border-gray-200 mt-2"></div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#22c55e]/30 transition-all cursor-default">
                <div className="text-2xl font-bold text-[#0f172a]">{nationalBudget.totalDisbursed}</div>
                <div className="text-xs text-gray-500">Total Disbursed</div>
                <div className="border-b border-gray-200 mt-2"></div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#22c55e]/30 transition-all cursor-default">
                <div className="text-2xl font-bold text-[#22c55e]">{nationalBudget.totalUtilized}</div>
                <div className="text-xs text-gray-500">Total Utilized</div>
                <div className="border-b border-gray-200 mt-2"></div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#22c55e]/30 transition-all cursor-default">
                <div className="text-2xl font-bold text-[#22c55e]">{nationalBudget.utilizationRate}%</div>
                <div className="text-xs text-gray-500">Utilization Rate</div>
                <div className="mt-2 h-1.5 bg-gray-100 rounded-full">
                  <div className="h-1.5 bg-[#22c55e] rounded-full" style={{ width: `${nationalBudget.utilizationRate}%` }}></div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#22c55e]/30 transition-all cursor-default">
                <div className="text-xl font-bold text-[#0f172a]">{nationalBudget.remainingBudget}</div>
                <div className="text-xs text-gray-500">Remaining Budget</div>
                <div className="border-b border-gray-200 mt-2"></div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-[#0f172a]">Top Sectors by Budget Allocation</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {sectorBudgets.slice(0, 5).map((sector, idx) => {
                const Icon = sector.icon
                return (
                  <div key={idx} onClick={() => { setSelectedSector(sector.name); setSelectedView('sectors'); }} className="bg-white rounded-xl p-4 border border-gray-200 cursor-pointer hover:shadow-md transition-all hover:border-[#22c55e]/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[#0f172a]">{sector.name}</span>
                      <span className="text-sm font-bold text-[#22c55e]">{sector.budget}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>Utilization: {sector.utilization}%</span>
                      <span>{sector.percentage}% of total budget</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div className="h-1.5 bg-[#22c55e] rounded-full" style={{ width: `${sector.percentage}%` }}></div>
                    </div>
                    <div className="border-b border-gray-100 mt-3"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}

      {/* ===== SECTORS VIEW ===== */}
      {selectedView === 'sectors' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectorBudgets.map((sector, idx) => {
              const Icon = sector.icon
              return (
                <div key={idx} onClick={() => { setSelectedBudgetItem(sector); setIsModalOpen(true); }} className="bg-white rounded-xl p-5 border border-gray-200 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 hover:border-[#22c55e]/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#22c55e]/10 flex items-center justify-center">
                      <Icon size={24} className="text-[#22c55e]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0f172a] text-lg">{sector.name}</h3>
                      <p className="text-xs text-gray-500">{sector.projects} projects</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <p className="text-[10px] text-gray-400">Budget</p>
                      <p className="text-sm font-bold text-[#0f172a]">{sector.budget}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400">Disbursed</p>
                      <p className="text-sm font-semibold text-[#0f172a]">{sector.disbursed}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400">Utilized</p>
                      <p className="text-sm font-semibold text-[#22c55e]">{sector.utilized}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">Utilization Rate</span>
                      <span className="font-semibold text-[#22c55e]">{sector.utilization}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-2 bg-[#22c55e] rounded-full" style={{ width: `${sector.utilization}%` }}></div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 mt-3 pt-2">
                    <p className="text-xs text-gray-400">Click for detailed breakdown</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* ===== COUNTIES VIEW - ALL 47 COUNTIES ===== */}
      {selectedView === 'counties' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-5">
            <div className="relative w-72">
              <button onClick={() => setIsCountyDropdownOpen(!isCountyDropdownOpen)} className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white text-left flex justify-between items-center focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]">
                <span className={selectedCounty === 'all' || selectedCounty === 'All Counties' ? 'text-gray-500' : 'text-[#0f172a]'}>
                  {selectedCounty === 'all' || selectedCounty === 'All Counties' ? 'All 47 Counties' : selectedCounty}
                </span>
                <svg className={`w-4 h-4 text-gray-400 transition-transform ${isCountyDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCountyDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                  <div className="sticky top-0 bg-white p-2 border-b border-gray-100">
                    <input type="text" placeholder="Search county..." value={countySearch} onChange={(e) => setCountySearch(e.target.value)} className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]" />
                  </div>
                  <button onClick={() => { setSelectedCounty('all'); setIsCountyDropdownOpen(false); setCountySearch(''); }} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 font-medium text-[#22c55e]">All 47 Counties</button>
                  {filteredCounties.map(county => (<button key={county} onClick={() => { setSelectedCounty(county); setIsCountyDropdownOpen(false); setCountySearch(''); }} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-[#0f172a]">{county}</button>))}
                </div>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-2">Showing {selectedCounty === 'all' ? '47 counties' : '1 county'} • Sorted by allocation</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0f172a] border-b border-slate-800">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-300 uppercase">#</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-300 uppercase">County</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-300 uppercase">Allocation</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-300 uppercase">Disbursed</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-300 uppercase">Utilized</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-300 uppercase">Utilization</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-300 uppercase">Projects</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {(selectedCounty === 'all' || selectedCounty === 'All Counties' ? countyBudgets : countyBudgets.filter(c => c.name === selectedCounty)).map((county, idx) => (
                    <tr key={idx} onClick={() => { setSelectedBudgetItem(county); setIsModalOpen(true); }} className="hover:bg-gray-50 cursor-pointer">
                      <td className="px-6 py-3 text-sm text-gray-500">#{idx + 1}</td>
                      <td className="px-6 py-3 font-semibold text-[#0f172a]">{county.name}</td>
                      <td className="px-6 py-3 text-sm text-gray-700">{county.allocation}</td>
                      <td className="px-6 py-3 text-sm text-[#0f172a] font-medium">{county.disbursed}</td>
                      <td className="px-6 py-3 text-sm text-[#22c55e] font-medium">{county.utilized}</td>
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[#22c55e]">{county.utilization}%</span>
                          <div className="w-16 bg-gray-100 rounded-full h-1.5">
                            <div className="bg-[#22c55e] h-1.5 rounded-full" style={{ width: `${county.utilization}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-600">{county.projects.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ===== PROJECT BUDGETS VIEW ===== */}
      {selectedView === 'projects' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <select value={selectedSector} onChange={(e) => setSelectedSector(e.target.value)} className="px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]">
              {sectors.map(sector => (<option key={sector} value={sector === 'All Sectors' ? 'all' : sector}>{sector}</option>))}
            </select>
            <div className="relative">
              <button onClick={() => setIsCountyDropdownOpen(!isCountyDropdownOpen)} className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white text-left flex justify-between items-center focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]">
                <span className="text-[#0f172a]">{selectedCounty === 'all' || selectedCounty === 'All Counties' ? 'All 47 Counties' : selectedCounty}</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCountyDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                  <button onClick={() => { setSelectedCounty('all'); setIsCountyDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 font-medium text-[#22c55e]">All 47 Counties</button>
                  {filteredCounties.map(county => (
                    <button key={county} onClick={() => { setSelectedCounty(county); setIsCountyDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-[#0f172a]">{county}</button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mb-4">Showing {filteredProjectBudgets.length} projects across Kenya</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjectBudgets.map((project) => (
              <div key={project.id} onClick={() => { setSelectedProject(project); setIsProjectModalOpen(true); }} className="bg-white rounded-xl p-5 border border-gray-200 cursor-pointer hover:shadow-md transition-all hover:border-[#22c55e]/30">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#0f172a] text-sm leading-tight">{project.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-2">{project.county} County • {project.sector}</p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-[10px] text-gray-400">Budget</p>
                    <p className="text-xs font-bold text-[#0f172a]">{project.budget}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400">Utilized</p>
                    <p className="text-xs font-semibold text-[#22c55e]">{project.utilized}</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-semibold text-[#22c55e]">{project.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full">
                    <div className="h-1.5 bg-[#22c55e] rounded-full" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
                <div className="border-t border-gray-100 mt-3 pt-2">
                  <p className="text-xs text-gray-400">Click to view project details</p>
                </div>
              </div>
            ))}
          </div>
          {filteredProjectBudgets.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found for the selected filters.</p>
            </div>
          )}
        </div>
      )}

      {/* Project Details Modal */}
      {isProjectModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0f172a]">{selectedProject.title}</h2>
              <button onClick={() => setIsProjectModalOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">County</span>
                <span className="font-bold text-[#0f172a]">{selectedProject.county}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Sector</span>
                <span className="font-bold text-[#0f172a]">{selectedProject.sector}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Status</span>
                <span className={`font-bold ${selectedProject.status === 'Completed' ? 'text-[#22c55e]' : selectedProject.status === 'Ongoing' ? 'text-[#0f172a]' : 'text-red-600'}`}>
                  {selectedProject.status}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Budget</span>
                <span className="font-bold text-[#0f172a]">{selectedProject.budget}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Utilized</span>
                <span className="font-bold text-[#22c55e]">{selectedProject.utilized}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Progress</span>
                <span className="font-bold text-[#22c55e]">{selectedProject.progress}%</span>
              </div>
            </div>
            <div className="mt-4 pt-2">
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-[#22c55e] rounded-full" style={{ width: `${selectedProject.progress}%` }}></div>
              </div>
            </div>
            <button onClick={() => setIsProjectModalOpen(false)} className="w-full mt-6 bg-[#22c55e] text-white py-2.5 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors">Close</button>
          </div>
        </div>
      )}

      {/* Sector/County Modal */}
      {isModalOpen && selectedBudgetItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0f172a]">{selectedBudgetItem.name} {selectedBudgetItem.sector ? 'Sector' : 'County'} Details</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Total Budget</span>
                <span className="font-bold text-[#0f172a]">{selectedBudgetItem.budget || selectedBudgetItem.allocation}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Amount Disbursed</span>
                <span className="font-bold text-[#0f172a]">{selectedBudgetItem.disbursed}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Amount Utilized</span>
                <span className="font-bold text-[#22c55e]">{selectedBudgetItem.utilized}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Utilization Rate</span>
                <span className="font-bold text-[#22c55e]">{selectedBudgetItem.utilization}%</span>
              </div>
              {selectedBudgetItem.projects && (
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Total Projects</span>
                  <span className="font-bold text-[#0f172a]">{selectedBudgetItem.projects.toLocaleString()}</span>
                </div>
              )}
              {selectedBudgetItem.percentage && (
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Share of Budget</span>
                  <span className="font-bold text-[#22c55e]">{selectedBudgetItem.percentage}%</span>
                </div>
              )}
            </div>
            <div className="mt-4 pt-2">
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-[#22c55e] rounded-full" style={{ width: `${selectedBudgetItem.utilization}%` }}></div>
              </div>
            </div>
            <button onClick={() => setIsModalOpen(false)} className="w-full mt-6 bg-[#22c55e] text-white py-2.5 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors">Close</button>
          </div>
        </div>
      )}
    </div>
  )
}