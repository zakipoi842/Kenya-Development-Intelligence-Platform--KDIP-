import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  
  // Navigation handlers
  const handleViewAllMap = () => navigate('/map')
  const handleViewAllProjects = () => navigate('/projects')
  const handleViewAllReports = () => navigate('/impact')
  const handleViewAllProcurement = () => navigate('/procurement')
  const handleViewAllCounties = () => navigate('/counties')
  
  // ===== Navigation to specific Participate sections =====
  const handleViewFeedback = () => navigate('/participate', { state: { activeTab: 'participate' } })
  const handleShareFeedback = () => navigate('/participate', { state: { activeTab: 'participate', openForm: 'feedback' } })
  const handleReportIssue = () => navigate('/participate', { state: { activeTab: 'participate', openForm: 'report' } })
  const handleCommunityFeedback = () => navigate('/participate', { state: { activeTab: 'participate', openForm: 'feedback' } })
  const handleBudgetSuggestion = () => navigate('/participate', { state: { activeTab: 'participate', openForm: 'budget' } })
  const handleVolunteer = () => navigate('/participate', { state: { activeTab: 'participate', openForm: 'volunteer' } })
  const handleViewEvents = () => navigate('/participate', { state: { activeTab: 'events' } })
  const handleViewLeaders = () => navigate('/participate', { state: { activeTab: 'leaders' } })
  const handleViewResources = () => navigate('/participate', { state: { activeTab: 'resources' } })

  // ===== County click handler - navigates directly to county page =====
  const handleCountyClick = (countyName) => {
    navigate(`/counties/${countyName.toLowerCase()}`)
  }

  const summaryStats = [
    { id: 'projects', label: 'Total Projects', value: '12,540', link: '/projects', icon: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4ca.png' },
    { id: 'budget', label: 'Total Budget', value: 'KES 2.31T', link: '/budget', icon: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4b0.png' },
    { id: 'completed', label: 'Completed', value: '8,320', link: '/projects', icon: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/2705.png' },
    { id: 'delayed', label: 'Delayed', value: '1,120', link: '/projects', icon: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/26a0.png' }
  ]

  const featureCards = [
    { title: 'Track Development', desc: 'Monitor projects in real time across 47 counties', link: '/projects', icon: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4cd.png' },
    { title: 'Budget Transparency', desc: 'Track budgets and utilization for every project', link: '/budget', icon: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4b0.png' },
    { title: 'Citizen Participation', desc: 'Report issues and track project progress', link: '/participate', icon: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f5e3.png', action: handleViewFeedback },
    { title: 'Development Intelligence', desc: 'Measure outcomes and compare counties', link: '/impact', icon: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4c8.png' }
  ]

  const recentProjects = [
    { title: 'Kisumu - Busia Road Upgrade', county: 'Kisumu', progress: 75, status: 'Ongoing', img: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=260&q=80' },
    { title: 'Machakos Level 5 Hospital', county: 'Machakos', progress: 60, status: 'Ongoing', img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=260&q=80' },
    { title: 'Nakuru Water Supply', county: 'Nakuru', progress: 90, status: 'Completed', img: 'https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&w=260&q=80' }
  ]

  const indicators = [
    { label: 'Water Access', score: '78%', variance: '+5.4%', link: '/impact' },
    { label: 'School Enrollment', score: '84%', variance: '+3.2%', link: '/impact' },
    { label: 'Healthcare Coverage', score: '62%', variance: '+4.1%', link: '/impact' },
    { label: 'Employment Rate', score: '68%', variance: '+2.8%', link: '/impact' }
  ]

  const procurementItems = [
    { title: 'Construction of Kisumu Market', budget: 'KES 450M', deadline: 'Dec 30, 2024', status: 'Open', dept: 'Transport & Infrastructure' },
    { title: 'Nairobi Water Treatment Plant', budget: 'KES 1.2B', deadline: 'Jan 15, 2025', status: 'Evaluation', dept: 'Water & Sanitation' },
    { title: 'Mombasa Port Modernization', budget: 'KES 2.8B', deadline: 'Feb 01, 2025', status: 'Pre-qualification', dept: 'Transport & Infrastructure' },
    { title: 'Digital Learning Devices Supply', budget: 'KES 780M', deadline: 'Dec 20, 2024', status: 'Open', dept: 'Education' }
  ]

  const countyRankings = [
    { name: 'Nairobi', score: 94, rank: 1, change: '+2', projects: 1240, budget: 'KES 345B' },
    { name: 'Mombasa', score: 89, rank: 2, change: '+1', projects: 892, budget: 'KES 234B' },
    { name: 'Kisumu', score: 87, rank: 3, change: '+3', projects: 756, budget: 'KES 187B' },
    { name: 'Nakuru', score: 82, rank: 4, change: '-1', projects: 684, budget: 'KES 156B' },
    { name: 'Kiambu', score: 78, rank: 5, change: '-2', projects: 623, budget: 'KES 143B' }
  ]

  const milestones = [
    { project: 'Thika Road Expansion', milestone: 'Phase 2 Completion', date: 'Dec 15, 2024', daysLeft: 12, status: 'On Track', progress: 85 },
    { project: 'Lake Victoria Basin Project', milestone: 'Environmental Assessment', date: 'Dec 28, 2024', daysLeft: 25, status: 'At Risk', progress: 45 },
    { project: 'Konza Technopolis Phase 1', milestone: 'Infrastructure Handover', date: 'Jan 20, 2025', daysLeft: 48, status: 'On Track', progress: 72 },
    { project: 'Coastal Tourism Circuit', milestone: 'Contractor Selection', date: 'Feb 05, 2025', daysLeft: 64, status: 'Delayed', progress: 30 }
  ]

  const testimonials = [
    { name: 'James Mwangi', region: 'Nakuru', role: 'Community Leader', message: 'The transparency in project tracking has transformed how we hold our leaders accountable.', rating: 5, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=60&q=80' },
    { name: 'Dr. Sarah Ochieng', region: 'Mombasa', role: 'Civil Society', message: 'KDIP has bridged the gap between government and citizens.', rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80' },
    { name: 'Peter Kamau', region: 'Kiambu', role: 'Ward Rep', message: 'The budget transparency feature has helped our community track utilization effectively.', rating: 4, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=60&q=80' },
    { name: 'Mary Atieno', region: 'Kisumu', role: 'Youth Advocate', message: 'Finally, a platform that gives citizens a voice in development.', rating: 5, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=60&q=80' }
  ]

  return (
    <div className="bg-[#f8fafc] text-[#0f172a] antialiased min-h-screen">
      
      {/* ===== SECTION 1: HERO BANNER ===== */}
      <section 
        className="relative bg-[#0f172a] flex items-center bg-cover bg-center overflow-hidden pt-20 pb-16 lg:pt-24 lg:pb-20"
        style={{ backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.97) 40%, rgba(15, 23, 42, 0.85) 100%), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-5 space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Building a Transparent <br />
              and Developing <span className="text-[#22c55e]">Kenya</span>
            </h1>
            <p className="text-slate-300 text-sm max-w-md font-normal leading-relaxed">
              KDIP tracks development projects, budgets and impact across all counties. Real data. Real impact.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button onClick={() => navigate('/projects')} className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors shadow-sm">
                Explore Projects
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
              <button onClick={() => navigate('/dashboard')} className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#0f172a] px-5 py-2.5 rounded-lg text-xs font-bold transition-colors border border-gray-200 shadow-sm">
                View Dashboard
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0f172a]/95 border border-slate-800/90 rounded-xl p-6 shadow-2xl">
            <h2 className="text-slate-400 text-xs font-bold tracking-wider uppercase mb-4">
              Kenya <span className="underline decoration-[#22c55e] underline-offset-[5px] pb-1 font-bold text-slate-200">at a</span> Glance
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-4">
              {summaryStats.map((stat) => (
                <div 
                  key={stat.id} 
                  onClick={() => navigate(stat.link)}
                  className="bg-[#1e293b]/70 hover:bg-[#1e293b] border border-slate-800/60 rounded-xl p-4 transition-all cursor-pointer group"
                >
                  <img src={stat.icon} alt={stat.label} className="w-6 h-6 mb-2" />
                  <div className="text-xl font-black text-white tracking-tight">{stat.value}</div>
                  <div className="text-[11px] font-bold text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <div 
              onClick={() => navigate('/counties')}
              className="bg-[#1e293b]/30 border border-slate-800/40 rounded-xl p-3.5 cursor-pointer hover:bg-[#1e293b]/50 transition-colors"
            >
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-bold text-slate-300">Development across 47 Counties</span>
                <span className="text-[#22c55e] text-xs font-extrabold">85%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-[#22c55e] h-2 rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: FEATURE CARDS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featureCards.map((feat, i) => (
            <div 
              key={i} 
              onClick={() => feat.action ? feat.action() : navigate(feat.link)}
              className="bg-white border border-gray-100 shadow-md rounded-xl p-5 flex items-start gap-4 hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <div className={`p-3 rounded-xl shrink-0 bg-[#22c55e]/10 text-[#22c55e] flex items-center justify-center group-hover:scale-105 transition-transform`}>
                <img src={feat.icon} alt={feat.title} className="w-6 h-6" />
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-sm font-bold text-[#0f172a] tracking-wide">{feat.title}</h3>
                <p className="text-xs font-medium text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-[#0f172a] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 3: CORE CONTENT INSIGHTS ROW ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* ===== UPDATED: Projects by County - Removed navigation, View All, and border ===== */}
          <div className="lg:col-span-4 bg-white rounded-xl p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
            <div className="mb-4">
              <h3 className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">Projects by County</h3>
            </div>
            
            <div 
              className="bg-white rounded-xl p-4 flex flex-col items-center justify-center min-h-[320px] cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => navigate('/counties')}
            >
              <div className="relative w-full max-w-xs mx-auto">
                <img 
                  src="https://www.nationsonline.org/maps/Kenya-Map-L.jpg"
                  alt="Kenya Map - Click to view county insights" 
                  className="w-full h-auto object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
                  style={{ maxHeight: '280px' }}
                />
                {/* Map overlay indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#0f172a]/80 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-white text-xs font-medium">Click to explore counties</span>
                  </div>
                </div>
              </div>
              <p className="text-[10px] font-medium text-gray-400 mt-3 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse"></span>
                Interactive Map • 47 Counties
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">Recent Projects</h3>
              <button onClick={handleViewAllProjects} className="text-xs font-bold text-[#22c55e] hover:text-[#16a34a] transition-colors flex items-center gap-1">
                View All <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            <div className="space-y-3">
              {recentProjects.map((project, idx) => (
                <div key={idx} className="flex items-center gap-3 border border-gray-100 bg-white p-2.5 rounded-xl hover:shadow-md transition-all cursor-pointer" onClick={() => navigate('/projects')}>
                  <img src={project.img} alt={project.title} className="w-12 h-12 object-cover rounded-lg shrink-0 bg-slate-50" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#0f172a] truncate">{project.title}</h4>
                    <p className="text-[10px] font-bold text-gray-400 mb-1">{project.county} County</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#22c55e] h-1.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                      </div>
                      <span className="text-[10px] font-bold text-gray-600">{project.progress}%</span>
                    </div>
                  </div>
                  <span className={`text-[9px] font-extrabold px-2 py-0.5 border rounded-full shrink-0 ${
                    project.status === 'Completed' ? 'bg-[#22c55e]/10 text-[#22c55e] border-[#22c55e]/20' : 
                    project.status === 'Delayed' ? 'bg-orange-100 text-orange-700' : 'bg-[#22c55e]/10 text-[#22c55e] border-[#22c55e]/20'
                  }`}>
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">Development Indicators</h3>
              <button onClick={handleViewAllReports} className="text-xs font-bold text-[#22c55e] hover:text-[#16a34a] transition-colors flex items-center gap-1">
                View All <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {indicators.map((ind, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 p-3.5 rounded-xl bg-white flex flex-col justify-between min-h-[115px] cursor-pointer hover:shadow-md transition-all hover:border-[#22c55e]/30"
                  onClick={() => navigate(ind.link)}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <span className="text-lg">{ind.label === 'Water Access' ? '💧' : ind.label === 'School Enrollment' ? '📚' : ind.label === 'Healthcare Coverage' ? '🏥' : '💼'}</span>
                      <span className="text-[11px] font-bold truncate block">{ind.label}</span>
                    </div>
                    <span className="text-2xl font-black text-[#0f172a] block tracking-tight">{ind.score}</span>
                  </div>
                  <span className="text-[9px] font-bold text-[#22c55e] bg-[#22c55e]/10 border border-[#22c55e]/20 px-1.5 py-0.5 rounded mt-2 w-max">
                    {ind.variance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: Procurement & Tender Opportunities ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#0f172a] rounded-2xl p-6 border border-slate-800">
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="text-[#22c55e] text-xs font-bold uppercase tracking-wider bg-[#22c55e]/10 px-3 py-1 rounded-full border border-[#22c55e]/20">Open Opportunities</span>
              <h2 className="text-2xl font-bold text-white mt-2">Procurement & Tenders</h2>
              <p className="text-slate-400 text-sm mt-1">Active bids and contract opportunities across all counties</p>
            </div>
            <button onClick={handleViewAllProcurement} className="text-sm font-bold text-[#22c55e] hover:text-[#16a34a] transition-colors flex items-center gap-1 group">
              View All <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {procurementItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#1e293b] rounded-xl p-5 hover:bg-[#2a3a5c] transition-all border border-slate-700/50"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-white text-sm leading-tight">{item.title}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    item.status === 'Open' ? 'bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/30' :
                    item.status === 'Evaluation' ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30' :
                    'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>{item.status}</span>
                </div>
                <p className="text-[11px] text-slate-400 mb-2">{item.dept}</p>
                <div className="flex justify-between items-center mt-3 pt-2 border-t border-slate-700/50">
                  <span className="text-lg font-black text-white">{item.budget}</span>
                  <span className="text-[10px] text-slate-400">Deadline: {item.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: County Performance Rankings ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-[#22c55e] text-xs font-bold uppercase tracking-wider bg-[#22c55e]/10 px-3 py-1 rounded-full border border-[#22c55e]/20">Performance Metrics</span>
            <h2 className="text-2xl font-bold text-[#0f172a] mt-2">County Performance Rankings</h2>
            <p className="text-gray-500 text-sm mt-1">Development index score based on project completion and budget utilization</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0f172a] border-b border-slate-800">
                <tr><th className="text-left px-6 py-4 text-xs font-bold text-slate-300 uppercase">Rank</th><th className="text-left px-6 py-4 text-xs font-bold text-slate-300 uppercase">County</th><th className="text-left px-6 py-4 text-xs font-bold text-slate-300 uppercase">Dev Score</th><th className="text-left px-6 py-4 text-xs font-bold text-slate-300 uppercase">Projects</th><th className="text-left px-6 py-4 text-xs font-bold text-slate-300 uppercase">Budget</th><th className="text-left px-6 py-4 text-xs font-bold text-slate-300 uppercase">Trend</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {countyRankings.map((county, idx) => (
                  <tr 
                    key={idx} 
                    onClick={() => handleCountyClick(county.name)}
                    className="hover:bg-gray-50 transition-colors cursor-pointer group"
                  >
                    <td className="px-6 py-4"><span className={`text-sm font-bold ${county.rank <= 3 ? 'text-[#22c55e]' : 'text-gray-700'}`}>#{county.rank}</span></td>
                    <td className="px-6 py-4 font-semibold text-[#0f172a] group-hover:text-[#22c55e] transition-colors">{county.name}</td>
                    <td className="px-6 py-4"><div className="flex items-center gap-2"><span className="text-sm font-bold text-[#0f172a]">{county.score}%</span><div className="w-16 bg-gray-100 rounded-full h-1.5"><div className="bg-[#22c55e] h-1.5 rounded-full" style={{ width: `${county.score}%` }}></div></div></div></td>
                    <td className="px-6 py-4 text-sm text-gray-600">{county.projects.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">{county.budget}</td>
                    <td className="px-6 py-4"><span className={`text-xs font-bold ${county.change.startsWith('+') ? 'text-[#22c55e]' : 'text-red-600'}`}>{county.change.startsWith('+') ? '↑' : '↓'} {county.change}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: Project Milestones & Timeline ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <span className="text-[#22c55e] text-xs font-bold uppercase tracking-wider bg-[#22c55e]/10 px-3 py-1 rounded-full border border-[#22c55e]/20">Coming Deadlines</span>
          <h2 className="text-3xl font-bold text-[#0f172a] mt-2">Critical Project Milestones</h2>
          <p className="text-gray-500 mt-2">Key deliverables and upcoming deadlines for major development projects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-[#0f172a] text-base leading-tight">{milestone.project}</h3>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  milestone.status === 'On Track' ? 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20' :
                  milestone.status === 'At Risk' ? 'bg-amber-100 text-amber-700' :
                  'bg-red-100 text-red-700'
                }`}>{milestone.status}</span>
              </div>
              <div className="mb-4">
                <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Current Milestone</p>
                <p className="text-sm font-semibold text-[#0f172a]">{milestone.milestone}</p>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-[11px] text-gray-500 mb-1.5">
                  <span className="font-medium">Completion Progress</span>
                  <span className="font-bold text-[#22c55e]">{milestone.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className={`h-2 rounded-full transition-all duration-700 ${
                    milestone.progress >= 70 ? 'bg-[#22c55e]' :
                    milestone.progress >= 40 ? 'bg-amber-500' : 'bg-red-500'
                  }`} style={{ width: `${milestone.progress}%` }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-medium text-gray-500">{milestone.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-12 bg-gray-100 rounded-full h-1">
                    <div className="bg-[#22c55e] h-1 rounded-full" style={{ width: `${Math.min(100, (milestone.daysLeft / 90) * 100)}%` }}></div>
                  </div>
                  <span className="text-xs font-bold text-[#22c55e]">{milestone.daysLeft}d left</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 7: Citizen Feedback & Testimonials ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <span className="text-[#22c55e] text-xs font-bold uppercase tracking-wider bg-[#22c55e]/10 px-3 py-1 rounded-full border border-[#22c55e]/20">Community Voice</span>
          <h2 className="text-3xl font-bold text-[#0f172a] mt-2">What Citizens Are Saying</h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">Real feedback from community members across Kenya</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer" onClick={handleViewFeedback}>
              <div className="flex items-center gap-3 mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-[#22c55e]/20" />
                <div>
                  <h4 className="font-bold text-[#0f172a] text-sm">{testimonial.name}</h4>
                  <p className="text-[10px] text-gray-500">{testimonial.region}</p>
                  <p className="text-[9px] text-[#22c55e] font-semibold mt-0.5">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">"{testimonial.message}"</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-[#22c55e] fill-[#22c55e]' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-gray-500 ml-2">({testimonial.rating}.0)</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={handleShareFeedback} className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg">
            Share Your Feedback
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      </section>

      {/* ===== SECTION 8: IMPACT MEASUREMENT ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-10">
              <span className="text-[#22c55e] text-xs font-bold uppercase tracking-wider bg-[#22c55e]/10 px-3 py-1 rounded-full border border-[#22c55e]/20 inline-block">Impact Measurement</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0f172a] mt-4 mb-4">Development Project Impact Metrics</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">Measuring real community outcomes across all 47 counties. Track how development projects transform lives through data-driven insights.</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100"><div className="text-2xl font-bold text-[#22c55e]">84%</div><div className="text-xs text-gray-500 mt-1">Community Satisfaction</div><div className="mt-2 h-1 bg-gray-200 rounded-full"><div className="w-[84%] h-1 bg-[#22c55e] rounded-full"></div></div></div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100"><div className="text-2xl font-bold text-[#22c55e]">2.3M+</div><div className="text-xs text-gray-500 mt-1">Lives Impacted</div><div className="mt-2 h-1 bg-gray-200 rounded-full"><div className="w-[76%] h-1 bg-[#22c55e] rounded-full"></div></div></div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100"><div className="text-2xl font-bold text-[#22c55e]">1,247</div><div className="text-xs text-gray-500 mt-1">Projects Completed</div><div className="mt-2 h-1 bg-gray-200 rounded-full"><div className="w-[66%] h-1 bg-[#22c55e] rounded-full"></div></div></div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100"><div className="text-2xl font-bold text-[#22c55e]">92%</div><div className="text-xs text-gray-500 mt-1">On-time Delivery</div><div className="mt-2 h-1 bg-gray-200 rounded-full"><div className="w-[92%] h-1 bg-[#22c55e] rounded-full"></div></div></div>
              </div>
              <button onClick={() => navigate('/impact')} className="w-full bg-[#22c55e] text-white py-2.5 rounded-lg font-bold text-sm hover:bg-[#16a34a] transition-all duration-200">View Full Impact Report →</button>
            </div>
            <div className="bg-gray-50 p-8 lg:p-10">
              <h3 className="text-[#0f172a] font-bold mb-4">Impact by Sector</h3>
              <div className="space-y-4">
                <div><div className="flex justify-between text-sm text-gray-600 mb-1"><span>Infrastructure</span><span className="font-bold text-[#22c55e]">78%</span></div><div className="h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-2 bg-[#22c55e] rounded-full" style={{ width: '78%' }}></div></div></div>
                <div><div className="flex justify-between text-sm text-gray-600 mb-1"><span>Healthcare</span><span className="font-bold text-[#22c55e]">64%</span></div><div className="h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-2 bg-[#22c55e] rounded-full" style={{ width: '64%' }}></div></div></div>
                <div><div className="flex justify-between text-sm text-gray-600 mb-1"><span>Education</span><span className="font-bold text-[#22c55e]">71%</span></div><div className="h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-2 bg-[#22c55e] rounded-full" style={{ width: '71%' }}></div></div></div>
                <div><div className="flex justify-between text-sm text-gray-600 mb-1"><span>Water & Sanitation</span><span className="font-bold text-[#22c55e]">59%</span></div><div className="h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-2 bg-[#22c55e] rounded-full" style={{ width: '59%' }}></div></div></div>
                <div><div className="flex justify-between text-sm text-gray-600 mb-1"><span>Agriculture</span><span className="font-bold text-[#22c55e]">68%</span></div><div className="h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-2 bg-[#22c55e] rounded-full" style={{ width: '68%' }}></div></div></div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200"><p className="text-gray-400 text-xs text-center">Data updated quarterly • Source: County Impact Assessments</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: FINANCIAL TRANSPARENCY ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <span className="text-[#22c55e] text-xs font-bold uppercase tracking-wider bg-[#22c55e]/10 px-3 py-1 rounded-full border border-[#22c55e]/20">Financial Transparency</span>
          <h2 className="text-3xl font-bold text-[#0f172a] mt-3">Budget Utilization Tracker</h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">Real-time monitoring of development budget across all sectors</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#22c55e]/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-xs font-bold text-[#22c55e] bg-[#22c55e]/10 px-2 py-1 rounded-full border border-[#22c55e]/20">National</span>
            </div>
            <h3 className="text-lg font-bold text-[#0f172a]">Total Development Budget</h3>
            <div className="text-3xl font-black text-[#0f172a] mt-2">KES 2.31T</div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">Utilization Rate</span><span className="font-bold text-[#22c55e]">68%</span></div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-2 bg-[#22c55e] rounded-full" style={{ width: '68%' }}></div></div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100"><div className="flex justify-between text-xs text-gray-500"><span>Disbursed: KES 1.57T</span><span>Remaining: KES 0.74T</span></div></div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#22c55e]/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-[#22c55e] bg-[#22c55e]/10 px-2 py-1 rounded-full border border-[#22c55e]/20">By Sector</span>
            </div>
            <h3 className="text-lg font-bold text-[#0f172a]">Budget by Sector</h3>
            <div className="mt-4 space-y-3">
              <div><div className="flex justify-between text-xs mb-1"><span className="text-gray-600">Infrastructure</span><span className="font-semibold text-[#0f172a]">KES 892B</span></div><div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-1.5 bg-[#22c55e] rounded-full" style={{ width: '38%' }}></div></div></div>
              <div><div className="flex justify-between text-xs mb-1"><span className="text-gray-600">Health</span><span className="font-semibold text-[#0f172a]">KES 485B</span></div><div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-1.5 bg-[#22c55e] rounded-full" style={{ width: '21%' }}></div></div></div>
              <div><div className="flex justify-between text-xs mb-1"><span className="text-gray-600">Education</span><span className="font-semibold text-[#0f172a]">KES 392B</span></div><div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-1.5 bg-[#22c55e] rounded-full" style={{ width: '17%' }}></div></div></div>
              <div><div className="flex justify-between text-xs mb-1"><span className="text-gray-600">Agriculture</span><span className="font-semibold text-[#0f172a]">KES 278B</span></div><div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-1.5 bg-[#22c55e] rounded-full" style={{ width: '12%' }}></div></div></div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#22c55e]/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18M5 4h14M5 4v14a2 2 0 002 2h10a2 2 0 002-2V4M5 4l2-2m10 0l2 2m-7 5h.01" />
                </svg>
              </div>
              <span className="text-xs font-bold text-[#22c55e] bg-[#22c55e]/10 px-2 py-1 rounded-full border border-[#22c55e]/20">County</span>
            </div>
            <h3 className="text-lg font-bold text-[#0f172a]">Top County Allocations</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3"><div className="w-16 text-xs font-medium text-gray-700">Nairobi</div><div className="flex-1"><div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-2 bg-[#22c55e] rounded-full" style={{ width: '100%' }}></div></div></div><div className="text-xs font-bold text-[#0f172a]">KES 45.2B</div></div>
              <div className="flex items-center gap-3"><div className="w-16 text-xs font-medium text-gray-700">Mombasa</div><div className="flex-1"><div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-2 bg-[#22c55e] rounded-full" style={{ width: '63%' }}></div></div></div><div className="text-xs font-bold text-[#0f172a]">KES 28.4B</div></div>
              <div className="flex items-center gap-3"><div className="w-16 text-xs font-medium text-gray-700">Kisumu</div><div className="flex-1"><div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-2 bg-[#22c55e] rounded-full" style={{ width: '51%' }}></div></div></div><div className="text-xs font-bold text-[#0f172a]">KES 23.1B</div></div>
              <div className="flex items-center gap-3"><div className="w-16 text-xs font-medium text-gray-700">Nakuru</div><div className="flex-1"><div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-2 bg-[#22c55e] rounded-full" style={{ width: '44%' }}></div></div></div><div className="text-xs font-bold text-[#0f172a]">KES 19.8B</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 10: YOUR VOICE MATTERS - Citizen Participation Hub ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <div className="text-center mb-8">
            <span className="text-[#22c55e] text-xs font-bold uppercase tracking-wider bg-[#22c55e]/10 px-3 py-1 rounded-full border border-[#22c55e]/20">Your Voice Matters</span>
            <h2 className="text-3xl font-bold text-[#0f172a] mt-3">Citizen Participation Hub</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto">Empowering every Kenyan to be part of the development process</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div onClick={handleReportIssue} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-200 cursor-pointer border border-gray-200 hover:border-[#22c55e]/30">
              <div className="w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-bold text-[#0f172a] mb-2">Report Project Issue</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Flag concerns about project quality, delays, or mismanagement directly to oversight committees.</p>
              <div className="mt-4 inline-flex items-center gap-1 text-[#22c55e] text-sm font-medium hover:gap-2 transition-all">Submit Report →</div>
              <div className="mt-4 pt-3 border-t border-gray-100"><span className="text-xs text-gray-400">2,847 reports resolved</span></div>
            </div>

            <div onClick={handleCommunityFeedback} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-200 cursor-pointer border border-gray-200 hover:border-[#22c55e]/30">
              <div className="w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-bold text-[#0f172a] mb-2">Community Feedback</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Share your experience with development projects and suggest improvements for your area.</p>
              <div className="mt-4 inline-flex items-center gap-1 text-[#22c55e] text-sm font-medium hover:gap-2 transition-all">Share Feedback →</div>
              <div className="mt-4 pt-3 border-t border-gray-100"><span className="text-xs text-gray-400">12.5K+ citizen voices heard</span></div>
            </div>

            <div onClick={handleBudgetSuggestion} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-200 cursor-pointer border border-gray-200 hover:border-[#22c55e]/30">
              <div className="w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-[#0f172a] mb-2">Budget Suggestions</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Propose how county budgets should be allocated to address community priorities.</p>
              <div className="mt-4 inline-flex items-center gap-1 text-[#22c55e] text-sm font-medium hover:gap-2 transition-all">Submit Suggestion →</div>
              <div className="mt-4 pt-3 border-t border-gray-100"><span className="text-xs text-gray-400">347 suggestions implemented</span></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-200">
            <div onClick={handleVolunteer} className="text-center cursor-pointer hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">🤝</span>
              </div>
              <div className="text-sm font-semibold text-[#0f172a]">Become a Volunteer</div>
              <div className="text-xs text-gray-400">Join our monitoring team</div>
            </div>
            <div onClick={handleViewEvents} className="text-center cursor-pointer hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">📅</span>
              </div>
              <div className="text-sm font-semibold text-[#0f172a]">Upcoming Events</div>
              <div className="text-xs text-gray-400">Join community forums</div>
            </div>
            <div onClick={handleViewLeaders} className="text-center cursor-pointer hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">🏆</span>
              </div>
              <div className="text-sm font-semibold text-[#0f172a]">Community Leaders</div>
              <div className="text-xs text-gray-400">Meet our champions</div>
            </div>
            <div onClick={handleViewResources} className="text-center cursor-pointer hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">📚</span>
              </div>
              <div className="text-sm font-semibold text-[#0f172a]">Resource Center</div>
              <div className="text-xs text-gray-400">Guides & templates</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}