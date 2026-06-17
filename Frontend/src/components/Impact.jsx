import { useState } from 'react'

export default function ImpactPage() {
  
  // States
  const [selectedYear, setSelectedYear] = useState('2024')
  const [selectedCounty, setSelectedCounty] = useState('all')
  const [selectedSector, setSelectedSector] = useState('all')
  const [selectedView, setSelectedView] = useState('overview')
  const [isCountyDropdownOpen, setIsCountyDropdownOpen] = useState(false)
  const [countySearch, setCountySearch] = useState('')
  const [selectedImpactItem, setSelectedImpactItem] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
    'Water & Sanitation', 'Agriculture', 'Energy', 'Housing', 'Transport', 'Tourism'
  ]

  const years = ['2022', '2023', '2024', '2025']

  // ===== NATIONAL IMPACT SUMMARY =====
  const nationalImpact = {
    totalProjects: 12540,
    completedProjects: 8320,
    ongoingProjects: 3120,
    delayedProjects: 1100,
    totalBeneficiaries: '8.2M',
    avgCompletionRate: 76,
    totalJobsCreated: '245,000',
    womenBeneficiaries: '3.9M',
    youthBeneficiaries: '2.8M'
  }

  // ===== IMPACT METRICS OVER TIME =====
  const impactTimeline = [
    { year: 2022, projectsCompleted: 1840, beneficiaries: '1.2M', jobsCreated: 45000, avgProgress: 58 },
    { year: 2023, projectsCompleted: 2560, beneficiaries: '1.8M', jobsCreated: 62000, avgProgress: 67 },
    { year: 2024, projectsCompleted: 3120, beneficiaries: '2.4M', jobsCreated: 78000, avgProgress: 76 },
    { year: 2025, projectsCompleted: 800, beneficiaries: '0.8M', jobsCreated: 60000, avgProgress: 82 }
  ]

  // ===== SECTOR IMPACT METRICS =====
  const sectorImpact = [
    { name: 'Infrastructure', icon: '🏗️', projectsCompleted: 1245, beneficiaries: '2.8M', jobsCreated: 89000, satisfaction: 78 },
    { name: 'Education', icon: '📚', projectsCompleted: 892, beneficiaries: '1.6M', jobsCreated: 34000, satisfaction: 91 },
    { name: 'Healthcare', icon: '🏥', projectsCompleted: 734, beneficiaries: '2.1M', jobsCreated: 56000, satisfaction: 84 },
    { name: 'Agriculture', icon: '🌾', projectsCompleted: 567, beneficiaries: '1.2M', jobsCreated: 28000, satisfaction: 76 },
    { name: 'Water & Sanitation', icon: '💧', projectsCompleted: 456, beneficiaries: '1.4M', jobsCreated: 15000, satisfaction: 82 },
    { name: 'Housing', icon: '🏠', projectsCompleted: 234, beneficiaries: '0.6M', jobsCreated: 12000, satisfaction: 73 },
    { name: 'Energy', icon: '⚡', projectsCompleted: 189, beneficiaries: '0.8M', jobsCreated: 10000, satisfaction: 79 },
    { name: 'Transport', icon: '🚗', projectsCompleted: 345, beneficiaries: '1.5M', jobsCreated: 21000, satisfaction: 75 }
  ]

  // ===== ALL 47 COUNTIES IMPACT RANKINGS - COMPLETE =====
  const allCountyImpact = [
    { name: 'Nairobi', rank: 1, impactScore: 94, projectsCompleted: 890, beneficiaries: '1.8M', jobsCreated: 89000, satisfaction: 88, trend: '+5%' },
    { name: 'Mombasa', rank: 2, impactScore: 89, projectsCompleted: 567, beneficiaries: '0.9M', jobsCreated: 45000, satisfaction: 85, trend: '+4%' },
    { name: 'Kisumu', rank: 3, impactScore: 87, projectsCompleted: 478, beneficiaries: '0.8M', jobsCreated: 38000, satisfaction: 86, trend: '+6%' },
    { name: 'Nakuru', rank: 4, impactScore: 85, projectsCompleted: 445, beneficiaries: '0.7M', jobsCreated: 35000, satisfaction: 83, trend: '+3%' },
    { name: 'Kiambu', rank: 5, impactScore: 84, projectsCompleted: 423, beneficiaries: '0.7M', jobsCreated: 32000, satisfaction: 84, trend: '+4%' },
    { name: 'Kakamega', rank: 6, impactScore: 82, projectsCompleted: 398, beneficiaries: '0.6M', jobsCreated: 29000, satisfaction: 81, trend: '+5%' },
    { name: 'Uasin Gishu', rank: 7, impactScore: 81, projectsCompleted: 367, beneficiaries: '0.5M', jobsCreated: 27000, satisfaction: 80, trend: '+3%' },
    { name: 'Machakos', rank: 8, impactScore: 80, projectsCompleted: 345, beneficiaries: '0.5M', jobsCreated: 25000, satisfaction: 79, trend: '+4%' },
    { name: 'Meru', rank: 9, impactScore: 79, projectsCompleted: 334, beneficiaries: '0.5M', jobsCreated: 23000, satisfaction: 78, trend: '+3%' },
    { name: 'Kisii', rank: 10, impactScore: 78, projectsCompleted: 312, beneficiaries: '0.4M', jobsCreated: 21000, satisfaction: 77, trend: '+4%' },
    { name: 'Bungoma', rank: 11, impactScore: 77, projectsCompleted: 298, beneficiaries: '0.4M', jobsCreated: 19000, satisfaction: 76, trend: '+3%' },
    { name: 'Kilifi', rank: 12, impactScore: 76, projectsCompleted: 287, beneficiaries: '0.4M', jobsCreated: 18000, satisfaction: 75, trend: '+4%' },
    { name: 'Kericho', rank: 13, impactScore: 75, projectsCompleted: 276, beneficiaries: '0.3M', jobsCreated: 17000, satisfaction: 74, trend: '+2%' },
    { name: 'Kitui', rank: 14, impactScore: 74, projectsCompleted: 265, beneficiaries: '0.3M', jobsCreated: 16000, satisfaction: 73, trend: '+3%' },
    { name: 'Garissa', rank: 15, impactScore: 73, projectsCompleted: 254, beneficiaries: '0.3M', jobsCreated: 15000, satisfaction: 72, trend: '+5%' },
    { name: 'Nyeri', rank: 16, impactScore: 72, projectsCompleted: 243, beneficiaries: '0.3M', jobsCreated: 14000, satisfaction: 71, trend: '+2%' },
    { name: 'Turkana', rank: 17, impactScore: 71, projectsCompleted: 234, beneficiaries: '0.3M', jobsCreated: 13000, satisfaction: 70, trend: '+4%' },
    { name: 'Wajir', rank: 18, impactScore: 70, projectsCompleted: 225, beneficiaries: '0.2M', jobsCreated: 12000, satisfaction: 69, trend: '+5%' },
    { name: 'Mandera', rank: 19, impactScore: 69, projectsCompleted: 218, beneficiaries: '0.2M', jobsCreated: 11000, satisfaction: 68, trend: '+4%' },
    { name: 'Marsabit', rank: 20, impactScore: 68, projectsCompleted: 210, beneficiaries: '0.2M', jobsCreated: 10000, satisfaction: 67, trend: '+3%' },
    { name: 'Baringo', rank: 21, impactScore: 67, projectsCompleted: 203, beneficiaries: '0.2M', jobsCreated: 9500, satisfaction: 66, trend: '+3%' },
    { name: 'Bomet', rank: 22, impactScore: 66, projectsCompleted: 198, beneficiaries: '0.2M', jobsCreated: 9000, satisfaction: 65, trend: '+2%' },
    { name: 'Busia', rank: 23, impactScore: 65, projectsCompleted: 192, beneficiaries: '0.2M', jobsCreated: 8800, satisfaction: 64, trend: '+3%' },
    { name: 'Elgeyo Marakwet', rank: 24, impactScore: 64, projectsCompleted: 187, beneficiaries: '0.2M', jobsCreated: 8500, satisfaction: 63, trend: '+2%' },
    { name: 'Embu', rank: 25, impactScore: 63, projectsCompleted: 182, beneficiaries: '0.2M', jobsCreated: 8200, satisfaction: 62, trend: '+3%' },
    { name: 'Homa Bay', rank: 26, impactScore: 62, projectsCompleted: 178, beneficiaries: '0.2M', jobsCreated: 8000, satisfaction: 61, trend: '+4%' },
    { name: 'Isiolo', rank: 27, impactScore: 61, projectsCompleted: 174, beneficiaries: '0.1M', jobsCreated: 7800, satisfaction: 60, trend: '+3%' },
    { name: 'Kajiado', rank: 28, impactScore: 60, projectsCompleted: 170, beneficiaries: '0.1M', jobsCreated: 7600, satisfaction: 59, trend: '+2%' },
    { name: 'Kirinyaga', rank: 29, impactScore: 59, projectsCompleted: 166, beneficiaries: '0.1M', jobsCreated: 7400, satisfaction: 58, trend: '+2%' },
    { name: 'Kwale', rank: 30, impactScore: 58, projectsCompleted: 162, beneficiaries: '0.1M', jobsCreated: 7200, satisfaction: 57, trend: '+3%' },
    { name: 'Laikipia', rank: 31, impactScore: 57, projectsCompleted: 158, beneficiaries: '0.1M', jobsCreated: 7000, satisfaction: 56, trend: '+2%' },
    { name: 'Lamu', rank: 32, impactScore: 56, projectsCompleted: 154, beneficiaries: '0.1M', jobsCreated: 6800, satisfaction: 55, trend: '+3%' },
    { name: 'Makueni', rank: 33, impactScore: 55, projectsCompleted: 150, beneficiaries: '0.1M', jobsCreated: 6600, satisfaction: 54, trend: '+2%' },
    { name: 'Migori', rank: 34, impactScore: 54, projectsCompleted: 146, beneficiaries: '0.1M', jobsCreated: 6400, satisfaction: 53, trend: '+3%' },
    { name: 'Muranga', rank: 35, impactScore: 53, projectsCompleted: 142, beneficiaries: '0.1M', jobsCreated: 6200, satisfaction: 52, trend: '+2%' },
    { name: 'Nandi', rank: 36, impactScore: 52, projectsCompleted: 138, beneficiaries: '0.1M', jobsCreated: 6000, satisfaction: 51, trend: '+1%' },
    { name: 'Narok', rank: 37, impactScore: 51, projectsCompleted: 134, beneficiaries: '0.1M', jobsCreated: 5800, satisfaction: 50, trend: '+2%' },
    { name: 'Nyamira', rank: 38, impactScore: 50, projectsCompleted: 130, beneficiaries: '0.1M', jobsCreated: 5600, satisfaction: 49, trend: '+1%' },
    { name: 'Nyandarua', rank: 39, impactScore: 49, projectsCompleted: 126, beneficiaries: '0.1M', jobsCreated: 5400, satisfaction: 48, trend: '+2%' },
    { name: 'Samburu', rank: 40, impactScore: 48, projectsCompleted: 122, beneficiaries: '0.1M', jobsCreated: 5200, satisfaction: 47, trend: '+3%' },
    { name: 'Siaya', rank: 41, impactScore: 47, projectsCompleted: 118, beneficiaries: '0.1M', jobsCreated: 5000, satisfaction: 46, trend: '+2%' },
    { name: 'Taita Taveta', rank: 42, impactScore: 46, projectsCompleted: 114, beneficiaries: '0.1M', jobsCreated: 4800, satisfaction: 45, trend: '+1%' },
    { name: 'Tana River', rank: 43, impactScore: 45, projectsCompleted: 110, beneficiaries: '0.1M', jobsCreated: 4600, satisfaction: 44, trend: '+2%' },
    { name: 'Tharaka Nithi', rank: 44, impactScore: 44, projectsCompleted: 106, beneficiaries: '0.1M', jobsCreated: 4400, satisfaction: 43, trend: '+1%' },
    { name: 'Trans Nzoia', rank: 45, impactScore: 43, projectsCompleted: 102, beneficiaries: '0.1M', jobsCreated: 4200, satisfaction: 42, trend: '+2%' },
    { name: 'Vihiga', rank: 46, impactScore: 42, projectsCompleted: 98, beneficiaries: '0.1M', jobsCreated: 4000, satisfaction: 41, trend: '+1%' },
    { name: 'West Pokot', rank: 47, impactScore: 41, projectsCompleted: 94, beneficiaries: '0.1M', jobsCreated: 3800, satisfaction: 40, trend: '+2%' }
  ]

  const countyImpact = allCountyImpact

  // ===== IMPACT STORIES =====
  const impactStories = [
    { id: 1, title: 'Nairobi Expressway Transforms Commute', county: 'Nairobi', sector: 'Transport', image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=600&q=80', description: 'Travel time from JKIA to Westlands reduced from 2 hours to 20 minutes, benefiting over 3.5 million commuters daily.', impact: '350,000+ vehicles daily | 70% reduction in travel time | 40% reduction in fuel consumption', beneficiaries: 3500000, year: 2022 },
    { id: 2, title: 'Kisumu Port Revives Lake Victoria Trade', county: 'Kisumu', sector: 'Infrastructure', image: 'https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&w=600&q=80', description: 'Rehabilitation of Kisumu Port has boosted regional trade, creating over 5,000 direct jobs.', impact: '120% increase in cargo volume | 5,000+ jobs created | Trade with Uganda increased by 85%', beneficiaries: 1200000, year: 2023 },
    { id: 3, title: 'Garissa Solar Powers Northern Kenya', county: 'Garissa', sector: 'Energy', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80', description: '55MW solar plant providing clean energy to 500,000+ households in Northern Kenya.', impact: '55MW clean energy | 500,000+ households connected | 80,000 tons CO2 reduced annually', beneficiaries: 500000, year: 2022 },
    { id: 4, title: 'Thika Road Expansion Decongests Nairobi', county: 'Kiambu', sector: 'Transport', image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=600&q=80', description: '10-lane highway has revolutionized transport in Nairobi metro area.', impact: '60% reduction in congestion | 3.5M daily users | 45% reduction in accidents', beneficiaries: 3500000, year: 2024 },
    { id: 5, title: 'Mombasa Port Modernization Boosts Trade', county: 'Mombasa', sector: 'Infrastructure', image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=600&q=80', description: 'Modern cargo handling equipment has doubled port capacity.', impact: '100% increase in cargo handling | 200,000+ jobs created | Clearance time reduced by 65%', beneficiaries: 2000000, year: 2025 },
    { id: 6, title: 'Affordable Housing Transforming Communities', county: 'Nairobi', sector: 'Housing', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80', description: 'Thousands of families have received affordable homes under the Big 4 Agenda.', impact: '10,000+ units completed | 50,000+ families housed | 25,000+ construction jobs', beneficiaries: 50000, year: 2024 }
  ]

  // ===== SDG PROGRESS =====
  const sdgProgress = [
    { goal: 'No Poverty', target: 45, current: 38, progress: 84 },
    { goal: 'Zero Hunger', target: 70, current: 58, progress: 83 },
    { goal: 'Good Health', target: 80, current: 68, progress: 85 },
    { goal: 'Quality Education', target: 100, current: 85, progress: 85 },
    { goal: 'Clean Water', target: 100, current: 72, progress: 72 },
    { goal: 'Affordable Energy', target: 100, current: 75, progress: 75 },
    { goal: 'Economic Growth', target: 60, current: 48, progress: 80 },
    { goal: 'Industry & Innovation', target: 50, current: 35, progress: 70 }
  ]

  // Filter county impact
  const filteredCountyImpact = selectedCounty === 'all' || selectedCounty === 'All Counties' 
    ? countyImpact 
    : countyImpact.filter(c => c.name === selectedCounty)

  const getImpactColor = (score) => {
    if (score >= 85) return 'text-[#22c55e]'
    if (score >= 70) return 'text-[#0f172a]'
    if (score >= 50) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getProgressBarColor = (score) => {
    if (score >= 85) return 'bg-[#22c55e]'
    if (score >= 70) return 'bg-[#0f172a]'
    if (score >= 50) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20">
      
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#0f172a]">Community Impact Dashboard</h1>
              <p className="text-gray-500 text-sm mt-1">
                Measuring real community outcomes across all 47 counties | 
                <span className="font-bold text-[#22c55e] ml-1">Transforming Lives Since 2022</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] bg-white"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
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
          <button onClick={() => setSelectedView('counties')} className={`px-5 py-2.5 text-sm font-medium transition-all ${selectedView === 'counties' ? 'text-[#22c55e] border-b-2 border-[#22c55e]' : 'text-gray-500 hover:text-[#0f172a]'}`}>County Rankings</button>
          <button onClick={() => setSelectedView('stories')} className={`px-5 py-2.5 text-sm font-medium transition-all ${selectedView === 'stories' ? 'text-[#22c55e] border-b-2 border-[#22c55e]' : 'text-gray-500 hover:text-[#0f172a]'}`}>Impact Stories</button>
          <button onClick={() => setSelectedView('sdg')} className={`px-5 py-2.5 text-sm font-medium transition-all ${selectedView === 'sdg' ? 'text-[#22c55e] border-b-2 border-[#22c55e]' : 'text-gray-500 hover:text-[#0f172a]'}`}>SDG Progress</button>
        </div>
      </div>

      {/* ===== OVERVIEW VIEW ===== */}
      {selectedView === 'overview' && (
        <>
          {/* National Impact Cards */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-2xl font-bold text-[#22c55e]">{nationalImpact.totalProjects.toLocaleString()}</div>
                <div className="text-xs text-gray-500">Total Projects</div>
                <div className="border-b border-gray-200 mt-2"></div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-2xl font-bold text-[#22c55e]">{nationalImpact.completedProjects.toLocaleString()}</div>
                <div className="text-xs text-gray-500">Projects Completed</div>
                <div className="mt-2 h-1.5 bg-gray-100 rounded-full">
                  <div className="h-1.5 bg-[#22c55e] rounded-full" style={{ width: `${(nationalImpact.completedProjects / nationalImpact.totalProjects) * 100}%` }}></div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-2xl font-bold text-[#22c55e]">{nationalImpact.totalBeneficiaries}</div>
                <div className="text-xs text-gray-500">Total Beneficiaries</div>
                <div className="border-b border-gray-200 mt-2"></div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-2xl font-bold text-[#22c55e]">{nationalImpact.totalJobsCreated}</div>
                <div className="text-xs text-gray-500">Jobs Created</div>
                <div className="border-b border-gray-200 mt-2"></div>
              </div>
            </div>
          </div>

          {/* Impact Timeline */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-[#0f172a] mb-4">Impact Growth Over Time</h2>
              <div className="space-y-4">
                {impactTimeline.map((item, idx) => (
                  <div key={idx} className="cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors" onClick={() => setSelectedYear(item.year.toString())}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-[#0f172a]">{item.year}</span>
                      <span className="text-sm font-bold text-[#22c55e]">{item.projectsCompleted} projects</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Beneficiaries: {item.beneficiaries}</span>
                      <span>Jobs: {item.jobsCreated.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-2 bg-[#22c55e] rounded-full" style={{ width: `${item.avgProgress}%` }}></div>
                    </div>
                    <div className="border-b border-gray-100 mt-3"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Counties by Impact */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-[#0f172a]">Top Performing Counties</h2>
              <button onClick={() => setSelectedView('counties')} className="text-sm text-[#22c55e] hover:text-[#16a34a]">View All →</button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {countyImpact.slice(0, 5).map((county) => (
                <div key={county.name} onClick={() => { setSelectedCounty(county.name); setSelectedView('counties'); }} className="bg-white rounded-xl p-4 border border-gray-200 cursor-pointer hover:shadow-md transition-all hover:border-[#22c55e]/30">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#22c55e]">#{county.rank}</span>
                      <span className="font-semibold text-[#0f172a]">{county.name}</span>
                    </div>
                    <span className={`text-sm font-bold ${getImpactColor(county.impactScore)}`}>Score: {county.impactScore}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>{county.projectsCompleted} projects</span>
                    <span>{county.beneficiaries} beneficiaries</span>
                    <span>{county.trend} trend</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full">
                    <div className={`h-1.5 ${getProgressBarColor(county.impactScore)} rounded-full`} style={{ width: `${county.impactScore}%` }}></div>
                  </div>
                  <div className="border-b border-gray-100 mt-3"></div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ===== SECTORS VIEW ===== */}
      {selectedView === 'sectors' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectorImpact.map((sector, idx) => (
              <div key={idx} onClick={() => { setSelectedImpactItem(sector); setIsModalOpen(true); }} className="bg-white rounded-xl p-5 border border-gray-200 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 hover:border-[#22c55e]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#22c55e]/10 flex items-center justify-center text-2xl">{sector.icon}</div>
                  <div><h3 className="font-bold text-[#0f172a] text-lg">{sector.name}</h3><p className="text-xs text-gray-500">{sector.projectsCompleted} projects completed</p></div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div><p className="text-[10px] text-gray-400">Beneficiaries</p><p className="text-sm font-bold text-[#0f172a]">{sector.beneficiaries}</p></div>
                  <div><p className="text-[10px] text-gray-400">Jobs Created</p><p className="text-sm font-bold text-[#22c55e]">{sector.jobsCreated.toLocaleString()}</p></div>
                  <div><p className="text-[10px] text-gray-400">Satisfaction</p><p className="text-sm font-bold text-[#22c55e]">{sector.satisfaction}%</p></div>
                </div>
                <div><div className="flex justify-between text-xs mb-1"><span className="text-gray-500">Satisfaction Rate</span><span className="font-semibold text-[#22c55e]">{sector.satisfaction}%</span></div><div className="h-2 bg-gray-100 rounded-full"><div className="h-2 bg-[#22c55e] rounded-full" style={{ width: `${sector.satisfaction}%` }}></div></div></div>
                <div className="border-t border-gray-100 mt-3 pt-2"><p className="text-xs text-gray-400">Click for detailed impact</p></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== COUNTY RANKINGS VIEW - ALL 47 COUNTIES ===== */}
      {selectedView === 'counties' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* County Filter */}
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
            <p className="text-xs text-gray-400 mt-2">Showing {selectedCounty === 'all' ? '47 counties' : '1 county'} • Sorted by impact score</p>
          </div>

          {/* County Impact Table - ALL 47 COUNTIES */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0f172a] border-b border-slate-800">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-300 uppercase">Rank</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-300 uppercase">County</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-300 uppercase">Impact Score</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-300 uppercase">Projects</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-300 uppercase">Beneficiaries</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-300 uppercase">Jobs</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-300 uppercase">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredCountyImpact.map((county) => (
                    <tr key={county.name} onClick={() => { setSelectedImpactItem(county); setIsModalOpen(true); }} className="hover:bg-gray-50 cursor-pointer">
                      <td className="px-6 py-3"><span className="text-sm font-bold text-[#22c55e]">#{county.rank}</span></td>
                      <td className="px-6 py-3 font-semibold text-[#0f172a]">{county.name}</td>
                      <td className="px-6 py-3"><div className="flex items-center gap-2"><span className={`text-sm font-bold ${getImpactColor(county.impactScore)}`}>{county.impactScore}%</span><div className="w-16 bg-gray-100 rounded-full h-1.5"><div className={`h-1.5 ${getProgressBarColor(county.impactScore)} rounded-full`} style={{ width: `${county.impactScore}%` }}></div></div></div></td>
                      <td className="px-6 py-3 text-sm text-gray-600">{county.projectsCompleted}</td>
                      <td className="px-6 py-3 text-sm text-gray-600">{county.beneficiaries}</td>
                      <td className="px-6 py-3 text-sm text-gray-600">{county.jobsCreated.toLocaleString()}</td>
                      <td className="px-6 py-3"><span className="text-xs font-semibold text-[#22c55e]">{county.trend}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ===== IMPACT STORIES VIEW - NO LINKS TO PROJECTS ===== */}
      {selectedView === 'stories' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-lg transition-all group hover:border-[#22c55e]/30">
                <img src={story.image} alt={story.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20">{story.county}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#0f172a]/10 text-[#0f172a] border border-[#0f172a]/20">{story.sector}</span>
                  </div>
                  <h3 className="font-bold text-[#0f172a] text-lg mb-2">{story.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{story.description}</p>
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <p className="text-xs text-gray-500">Key Impact</p>
                    <p className="text-xs font-semibold text-[#0f172a]">{story.impact}</p>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{story.beneficiaries.toLocaleString()}+ beneficiaries</span>
                    <span className="text-xs text-gray-400">{story.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== SDG PROGRESS VIEW ===== */}
      {selectedView === 'sdg' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-[#0f172a] mb-4">Sustainable Development Goals Progress</h2>
            <div className="space-y-4">
              {sdgProgress.map((sdg, idx) => (
                <div key={idx} className="cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-[#0f172a]">{sdg.goal}</span>
                    <span className="text-sm font-bold text-[#22c55e]">{sdg.current}% / {sdg.target}%</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progress: {sdg.progress}% to target</span>
                    <span>Target: {sdg.target}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-[#22c55e] rounded-full" style={{ width: `${sdg.progress}%` }}></div>
                  </div>
                  <div className="border-b border-gray-100 mt-3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && selectedImpactItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0f172a]">{selectedImpactItem.name} {selectedImpactItem.sector ? 'Sector' : 'County'} Impact Details</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100"><span className="text-gray-600">Impact Score</span><span className={`font-bold ${getImpactColor(selectedImpactItem.impactScore || selectedImpactItem.satisfaction)}`}>{selectedImpactItem.impactScore || selectedImpactItem.satisfaction}%</span></div>
              <div className="flex justify-between py-2 border-b border-gray-100"><span className="text-gray-600">Projects Completed</span><span className="font-bold text-[#0f172a]">{selectedImpactItem.projectsCompleted || selectedImpactItem.projectsCompleted}</span></div>
              <div className="flex justify-between py-2 border-b border-gray-100"><span className="text-gray-600">Beneficiaries</span><span className="font-bold text-[#0f172a]">{selectedImpactItem.beneficiaries}</span></div>
              <div className="flex justify-between py-2 border-b border-gray-100"><span className="text-gray-600">Jobs Created</span><span className="font-bold text-[#22c55e]">{selectedImpactItem.jobsCreated?.toLocaleString()}</span></div>
              <div className="flex justify-between py-2 border-b border-gray-100"><span className="text-gray-600">Trend</span><span className="font-bold text-[#22c55e]">{selectedImpactItem.trend || '+3%'}</span></div>
            </div>
            <div className="mt-4 pt-2"><div className="h-2 bg-gray-100 rounded-full"><div className={`h-2 ${getProgressBarColor(selectedImpactItem.impactScore || selectedImpactItem.satisfaction)} rounded-full`} style={{ width: `${selectedImpactItem.impactScore || selectedImpactItem.satisfaction}%` }}></div></div></div>
            <button onClick={() => setIsModalOpen(false)} className="w-full mt-6 bg-[#22c55e] text-white py-2.5 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors">Close</button>
          </div>
        </div>
      )}
    </div>
  )
}