import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// ===== ICON COMPONENTS =====
const IconReport = () => (
  <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const IconCheck = () => (
  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
)

const IconHandshake = () => (
  <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const IconLightbulb = () => (
  <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)

const IconComment = () => (
  <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

const IconBudget = () => (
  <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const IconCalendar = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const IconLocation = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const IconShield = () => (
  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const IconDocument = () => (
  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const IconDownload = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
)

const IconArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
)

const IconStar = ({ filled = false }) => (
  <svg className={`w-5 h-5 ${filled ? 'text-[#22c55e]' : 'text-gray-300'}`} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
)

// ===== MAIN PARTICIPATE PAGE =====
export default function ParticipatePage() {
  const navigate = useNavigate()
  const [activeForm, setActiveForm] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [showEventModal, setShowEventModal] = useState(false)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const [activeTab, setActiveTab] = useState('participate')

  // ===== STATISTICS DATA =====
  const stats = [
    { label: 'Reports Submitted', value: '1,528', icon: <IconReport />, change: '+12%' },
    { label: 'Issues Resolved', value: '1,247', icon: <IconCheck />, change: '+8%' },
    { label: 'Active Volunteers', value: '345', icon: <IconHandshake />, change: '+15%' },
    { label: 'Suggestions Implemented', value: '89', icon: <IconLightbulb />, change: '+23%' }
  ]

  // ===== ACTION CARDS =====
  const actionCards = [
    { id: 'report', title: 'Report Project Issues', description: 'Flag concerns about project quality, delays, or mismanagement.', icon: <IconReport /> },
    { id: 'feedback', title: 'Community Feedback', description: 'Share your experience and suggest improvements.', icon: <IconComment /> },
    { id: 'budget', title: 'Budget Suggestions', description: 'Propose how county budgets should be allocated.', icon: <IconBudget /> },
    { id: 'volunteer', title: 'Volunteer for Monitoring', description: 'Join citizen monitors tracking development projects.', icon: <IconHandshake /> }
  ]

  // ===== HOW IT WORKS =====
  const howItWorks = [
    { step: '01', title: 'Choose an Action', description: 'Select the type of participation that matches your needs.' },
    { step: '02', title: 'Complete the Form', description: 'Fill out the simple form with your details.' },
    { step: '03', title: 'Submit', description: 'Submit your report or application for review.' },
    { step: '04', title: 'Get Response', description: 'Receive updates on your submission status.' }
  ]

  // ===== IMPACT STORIES =====
  const impactStories = [
    { title: 'Nakuru Water Project', result: 'Citizen report led to repair of broken pipeline serving 50,000 residents.', date: 'Nov 2024' },
    { title: 'Rural Road Construction', result: 'Community feedback resulted in KES 120M budget reallocation.', date: 'Oct 2024' },
    { title: 'School Quality Monitoring', result: 'Volunteer monitors ensured standards at 15 new classrooms.', date: 'Sep 2024' }
  ]

  // ===== FAQS =====
  const faqs = [
    { q: 'How long does review take?', a: 'Reports are reviewed within 48 hours. You will receive a confirmation email once reviewed.' },
    { q: 'Can I submit anonymously?', a: 'Yes, all forms include an anonymous option. Your identity will be protected.' },
    { q: 'How do I become a volunteer?', a: 'Complete the volunteer application form. You will be contacted within 5 working days.' }
  ]

  // ===== UPCOMING EVENTS =====
  const upcomingEvents = [
    { id: 1, title: 'Community Budget Forum - Nairobi', date: 'Dec 15, 2024', time: '10:00 AM', location: 'Nairobi City Hall', type: 'Budget', attendees: 120 },
    { id: 2, title: 'Project Monitoring Training - Kisumu', date: 'Dec 20, 2024', time: '9:00 AM', location: 'Kisumu Social Hall', type: 'Training', attendees: 75 },
    { id: 3, title: 'Public Participation Workshop - Mombasa', date: 'Jan 10, 2025', time: '2:00 PM', location: 'Mombasa County Assembly', type: 'Workshop', attendees: 200 },
    { id: 4, title: 'Development Impact Assessment', date: 'Jan 25, 2025', time: '11:00 AM', location: 'Online (Virtual)', type: 'Webinar', attendees: 500 }
  ]

  // ===== NEW SECTION 1: COMMUNITY LEADERSHIP BOARD =====
  const communityLeaders = [
    { 
      name: 'James Mwangi', 
      role: 'Community Representative', 
      county: 'Nakuru',
      region: 'Rift Valley',
      projects: 47,
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
      achievements: ['Led water project rehabilitation', 'Established 5 community groups']
    },
    { 
      name: 'Dr. Sarah Ochieng', 
      role: 'Civil Society Leader', 
      county: 'Mombasa',
      region: 'Coast',
      projects: 32,
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      achievements: ['Health facility oversight', 'Youth empowerment programs']
    },
    { 
      name: 'Peter Kamau', 
      role: 'Ward Representative', 
      county: 'Kiambu',
      region: 'Central',
      projects: 28,
      rating: 4.7,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
      achievements: ['Budget transparency advocacy', 'Community forum organizer']
    },
    { 
      name: 'Mary Atieno', 
      role: 'Youth Advocate', 
      county: 'Kisumu',
      region: 'Lake Victoria',
      projects: 19,
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
      achievements: ['Youth engagement initiatives', 'Digital literacy campaigns']
    }
  ]

  // ===== NEW SECTION 2: RESOURCE CENTER =====
  const resources = [
    {
      id: 1,
      title: 'Citizen Participation Guide',
      type: 'Guide',
      category: 'Documentation',
      description: 'A comprehensive guide on how citizens can effectively participate in development projects.',
      downloads: 1245,
      date: '2024-10-01'
    },
    {
      id: 2,
      title: 'Budget Monitoring Toolkit',
      type: 'Toolkit',
      category: 'Resources',
      description: 'Tools and templates for tracking county budget utilization and performance.',
      downloads: 876,
      date: '2024-09-15'
    },
    {
      id: 3,
      title: 'Project Reporting Template',
      type: 'Template',
      category: 'Forms',
      description: 'Standardized template for reporting project issues and progress monitoring.',
      downloads: 2341,
      date: '2024-08-20'
    },
    {
      id: 4,
      title: 'Community Engagement Best Practices',
      type: 'Document',
      category: 'Resources',
      description: 'Best practices for effective community engagement and stakeholder participation.',
      downloads: 567,
      date: '2024-07-10'
    }
  ]

  // ===== SUCCESS METRICS =====
  const successMetrics = [
    { label: 'Average Response Time', value: '48 hrs', change: '-12 hrs', trend: 'up' },
    { label: 'Community Satisfaction', value: '87%', change: '+5%', trend: 'up' },
    { label: 'Reports Resolved', value: '81%', change: '+8%', trend: 'up' },
    { label: 'Volunteer Retention', value: '76%', change: '+3%', trend: 'up' }
  ]

  const handleRegister = (event) => {
    setSelectedEvent(event)
    setShowEventModal(true)
  }

  const handleRegistrationSubmit = (e) => {
    e.preventDefault()
    setRegistrationSuccess(true)
    setTimeout(() => {
      setRegistrationSuccess(false)
      setShowEventModal(false)
      setSelectedEvent(null)
    }, 3000)
  }

  const getEventTypeColor = (type) => {
    const colors = {
      Budget: 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20',
      Training: 'bg-[#0f172a]/10 text-[#0f172a] border border-[#0f172a]/20',
      Workshop: 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20',
      Webinar: 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20'
    }
    return colors[type] || 'bg-gray-100 text-gray-700'
  }

  // If a form is active, show the form page
  if (activeForm) {
    return <FormPage formType={activeForm} onBack={() => setActiveForm(null)} />
  }

  // ===== MAIN RENDER =====
  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20">
      
      {/* ===== HERO SECTION ===== */}
      <div className="bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Citizen Participation Hub</h1>
            <p className="text-slate-300 text-base">Report issues, provide feedback, suggest budget allocations, and volunteer for community monitoring.</p>
          </div>
        </div>
      </div>

      {/* ===== STATS ROW ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:border-[#22c55e]/30 transition-all group">
              <div className="flex items-center justify-between">
                <div className="w-6 h-6">{stat.icon}</div>
                <span className="text-xs font-medium text-[#22c55e] bg-[#22c55e]/10 px-2 py-0.5 rounded-full">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-[#22c55e] mt-2">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
              <div className="border-b border-gray-100 mt-3"></div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== NAVIGATION TABS ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-1 border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('participate')} 
            className={`px-5 py-2.5 text-sm font-medium transition-all ${activeTab === 'participate' ? 'text-[#22c55e] border-b-2 border-[#22c55e]' : 'text-gray-500 hover:text-[#0f172a]'}`}
          >
            Participate
          </button>
          <button 
            onClick={() => setActiveTab('leaders')} 
            className={`px-5 py-2.5 text-sm font-medium transition-all ${activeTab === 'leaders' ? 'text-[#22c55e] border-b-2 border-[#22c55e]' : 'text-gray-500 hover:text-[#0f172a]'}`}
          >
            Community Leaders
          </button>
          <button 
            onClick={() => setActiveTab('resources')} 
            className={`px-5 py-2.5 text-sm font-medium transition-all ${activeTab === 'resources' ? 'text-[#22c55e] border-b-2 border-[#22c55e]' : 'text-gray-500 hover:text-[#0f172a]'}`}
          >
            Resource Center
          </button>
          <button 
            onClick={() => setActiveTab('events')} 
            className={`px-5 py-2.5 text-sm font-medium transition-all ${activeTab === 'events' ? 'text-[#22c55e] border-b-2 border-[#22c55e]' : 'text-gray-500 hover:text-[#0f172a]'}`}
          >
            Events
          </button>
        </div>
      </div>

      {/* ===== TAB CONTENT ===== */}
      
      {/* --- TAB 1: PARTICIPATE --- */}
      {activeTab === 'participate' && (
        <>
          {/* Action Cards */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[#0f172a]">How to Participate</h2>
              <p className="text-gray-500 text-sm mt-1">Choose from four ways to get involved</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {actionCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => setActiveForm(card.id)}
                  className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 hover:border-[#22c55e]/30"
                >
                  <div className="w-12 h-12 bg-[#22c55e]/10 rounded-xl flex items-center justify-center mb-4">{card.icon}</div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500">{card.description}</p>
                  <div className="mt-4 flex items-center text-[#22c55e] text-sm font-medium">Get started <span className="ml-1">→</span></div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-[#0f172a]">How It Works</h2>
                <p className="text-gray-500 text-sm">Simple process to make your voice heard</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {howItWorks.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-10 h-10 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full flex items-center justify-center text-[#22c55e] font-bold mx-auto mb-3">{item.step}</div>
                    <h3 className="font-semibold text-[#0f172a] text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Stories */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-[#0f172a]">Impact Stories</h2>
              <p className="text-gray-500 text-sm">Real results from citizen participation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {impactStories.map((story, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-[#22c55e]/30 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full flex items-center justify-center">
                      <IconCheck />
                    </div>
                    <span className="text-xs font-medium text-[#22c55e]">Success</span>
                    <span className="text-xs text-gray-400 ml-auto">{story.date}</span>
                  </div>
                  <h3 className="font-semibold text-[#0f172a] text-sm mb-1">{story.title}</h3>
                  <p className="text-xs text-gray-500">{story.result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-[#0f172a]">Frequently Asked Questions</h2>
                <p className="text-gray-500 text-sm">Find answers to common questions</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-[#f8fafc] rounded-xl p-4 border border-gray-200 hover:border-[#22c55e]/30 transition-all">
                    <h3 className="font-semibold text-[#0f172a] text-sm mb-1">{faq.q}</h3>
                    <p className="text-xs text-gray-500">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* --- TAB 2: COMMUNITY LEADERS (NEW) --- */}
      {activeTab === 'leaders' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <span className="text-[#22c55e] text-sm font-semibold uppercase tracking-wide">Leadership</span>
            <h2 className="text-2xl font-bold text-[#0f172a] mt-2">Community Leadership Board</h2>
            <p className="text-gray-500 text-sm mt-1">Recognizing community champions driving development across Kenya</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityLeaders.map((leader, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-[#22c55e]/30">
                <div className="flex items-center gap-4 mb-4">
                  <img src={leader.avatar} alt={leader.name} className="w-16 h-16 rounded-full object-cover ring-2 ring-[#22c55e]/20" />
                  <div>
                    <h3 className="font-bold text-[#0f172a] text-sm">{leader.name}</h3>
                    <p className="text-xs text-[#22c55e] font-medium">{leader.role}</p>
                    <p className="text-xs text-gray-400">{leader.county} • {leader.region}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-[#0f172a]">{leader.projects}</span>
                    <span className="text-xs text-gray-400">Projects</span>
                  </div>
                  <div className="w-px h-6 bg-gray-200"></div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-[#22c55e]">{leader.rating}</span>
                    <span className="text-xs text-gray-400">★ Rating</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-3">
                  <p className="text-xs font-medium text-gray-700 mb-1">Key Achievements:</p>
                  <ul className="space-y-1">
                    {leader.achievements.map((achievement, i) => (
                      <li key={i} className="text-xs text-gray-500 flex items-start gap-1">
                        <span className="text-[#22c55e]">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <button className="w-full text-center text-xs font-medium text-[#22c55e] hover:text-[#16a34a] transition-colors">
                    View Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#22c55e]/10 rounded-xl p-4 border border-[#22c55e]/20 text-center">
            <p className="text-sm text-gray-700">Nominate a community leader for recognition. <button className="text-[#22c55e] font-medium hover:text-[#16a34a]">Submit nomination →</button></p>
          </div>
        </div>
      )}

      {/* --- TAB 3: RESOURCE CENTER (NEW) --- */}
      {activeTab === 'resources' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <span className="text-[#22c55e] text-sm font-semibold uppercase tracking-wide">Resources</span>
            <h2 className="text-2xl font-bold text-[#0f172a] mt-2">Resource Center</h2>
            <p className="text-gray-500 text-sm mt-1">Access tools, guides, and templates for effective community participation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-[#22c55e]/30">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-[#0f172a] text-base">{resource.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20">{resource.type}</span>
                      <span className="text-xs text-gray-400">{resource.category}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-[#22c55e]">{resource.downloads}</div>
                    <div className="text-[10px] text-gray-400">Downloads</div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">Updated: {resource.date}</span>
                  <button className="flex items-center gap-1 text-xs font-medium text-[#22c55e] hover:text-[#16a34a] transition-colors">
                    Download <IconDownload />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="text-[#22c55e] text-sm font-medium hover:text-[#16a34a] transition-colors">
              View all resources →
            </button>
          </div>
        </div>
      )}

      {/* --- TAB 4: EVENTS --- */}
      {activeTab === 'events' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <span className="text-[#22c55e] text-sm font-semibold uppercase tracking-wide">Events</span>
            <h2 className="text-2xl font-bold text-[#0f172a] mt-2">Upcoming Events & Workshops</h2>
            <p className="text-gray-500 text-sm mt-1">Join community engagement events near you</p>
          </div>

          {/* Success Metrics Dashboard */}
          <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((metric, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:border-[#22c55e]/30 transition-all">
                  <div className="text-3xl font-bold text-[#22c55e] mb-2">{metric.value}</div>
                  <div className="text-sm font-medium text-[#0f172a] mb-2">{metric.label}</div>
                  <div className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                    metric.trend === 'up' ? 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20' : 'bg-red-50 text-red-600 border border-red-200'
                  }`}>
                    <span>{metric.trend === 'up' ? '↑' : '↓'}</span>
                    <span>{metric.change}</span>
                  </div>
                  <div className="border-b border-gray-100 mt-3"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all hover:border-[#22c55e]/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2 h-2 rounded-full ${event.type === 'Budget' || event.type === 'Workshop' || event.type === 'Webinar' ? 'bg-[#22c55e]' : 'bg-[#0f172a]'}`}></div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getEventTypeColor(event.type)}`}>{event.type}</span>
                </div>
                <h3 className="font-bold text-[#0f172a] mb-2">{event.title}</h3>
                <div className="space-y-1 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <IconCalendar />
                    <span>{event.date} at {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <IconLocation />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{event.attendees}+ attending</span>
                  <button 
                    onClick={() => handleRegister(event)} 
                    className="text-[#22c55e] text-sm font-medium hover:text-[#16a34a] transition-colors"
                  >
                    Register →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#22c55e]/10 rounded-xl p-4 border border-[#22c55e]/20 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#22c55e]/20 rounded-full flex items-center justify-center">
                  <IconShield />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0f172a]">Community Engagement Target: 92%</p>
                  <p className="text-xs text-gray-500">of community suggestions reviewed within 30 days</p>
                </div>
              </div>
              <button className="text-[#22c55e] text-sm font-medium hover:text-[#16a34a]">View detailed report →</button>
            </div>
          </div>
        </div>
      )}

      {/* ===== CONTACT SECTION (Visible on all tabs) ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#22c55e]/10 rounded-xl p-5 border border-[#22c55e]/20 text-center">
          <p className="text-sm text-gray-700">Need assistance? Contact us at <a href="mailto:participation@kdip.go.ke" className="text-[#22c55e] font-medium hover:text-[#16a34a]">participation@kdip.go.ke</a></p>
        </div>
      </div>

      {/* ===== EVENT REGISTRATION MODAL ===== */}
      {showEventModal && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-md">
            <div className="border-b border-gray-200 p-5 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-[#0f172a]">Register for Event</h2>
                <p className="text-sm text-gray-500">{selectedEvent.title}</p>
              </div>
              <button onClick={() => setShowEventModal(false)} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
            </div>
            
            {registrationSuccess ? (
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconCheck />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Registration Successful!</h3>
                <p className="text-sm text-gray-500">You have been registered for {selectedEvent.title}. A confirmation email will be sent shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleRegistrationSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Full Name *</label>
                  <input type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Email Address *</label>
                  <input type="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Phone Number *</label>
                  <input type="tel" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="0712 345 678" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Organization (Optional)</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="e.g., Community Group, NGO" />
                </div>
                <div className="flex gap-3 pt-4">
                  <button type="button" onClick={() => setShowEventModal(false)} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50">Cancel</button>
                  <button type="submit" className="flex-1 bg-[#22c55e] text-white py-2 rounded-lg font-medium hover:bg-[#16a34a] transition-colors">Confirm Registration</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ===== FORM PAGE COMPONENT =====
function FormPage({ formType, onBack }) {
  const [submitted, setSubmitted] = useState(false)
  
  const counties = [
    'Baringo', 'Bomet', 'Bungoma', 'Busia', 'Elgeyo Marakwet', 'Embu', 'Garissa', 
    'Homa Bay', 'Isiolo', 'Kajiado', 'Kakamega', 'Kericho', 'Kiambu', 'Kilifi', 
    'Kirinyaga', 'Kisii', 'Kisumu', 'Kitui', 'Kwale', 'Laikipia', 'Lamu', 
    'Machakos', 'Makueni', 'Mandera', 'Marsabit', 'Meru', 'Migori', 'Mombasa', 
    'Muranga', 'Nairobi', 'Nakuru', 'Nandi', 'Narok', 'Nyamira', 'Nyandarua', 
    'Nyeri', 'Samburu', 'Siaya', 'Taita Taveta', 'Tana River', 'Tharaka Nithi', 
    'Trans Nzoia', 'Turkana', 'Uasin Gishu', 'Vihiga', 'Wajir', 'West Pokot'
  ]

  const sectors = ['Infrastructure', 'Healthcare', 'Education', 'Water & Sanitation', 'Agriculture', 'Energy', 'Housing', 'Transport', 'Tourism']

  const [reportForm, setReportForm] = useState({ type: '', project: '', county: '', location: '', description: '', anonymous: true })
  const [feedbackForm, setFeedbackForm] = useState({ type: '', project: '', county: '', rating: 0, comment: '', anonymous: true })
  const [budgetForm, setBudgetForm] = useState({ county: '', sector: '', amount: '', priority: '', justification: '', anonymous: true })
  const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', phone: '', county: '', skills: '', availability: '', motivation: '', terms: false })

  const getFormConfig = () => {
    switch(formType) {
      case 'report':
        return { title: 'Report a Project Issue', subtitle: 'Flag concerns about project quality, delays, or mismanagement', icon: <IconReport />, buttonText: 'Submit Report' }
      case 'feedback':
        return { title: 'Share Community Feedback', subtitle: 'Help us improve development projects', icon: <IconComment />, buttonText: 'Submit Feedback' }
      case 'budget':
        return { title: 'Suggest Budget Allocation', subtitle: 'Propose how county budgets should be allocated', icon: <IconBudget />, buttonText: 'Submit Suggestion' }
      case 'volunteer':
        return { title: 'Volunteer Application', subtitle: 'Join our community of citizen monitors', icon: <IconHandshake />, buttonText: 'Submit Application' }
      default:
        return { title: 'Form', subtitle: '', icon: <IconDocument />, buttonText: 'Submit' }
    }
  }

  const config = getFormConfig()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onBack()
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="bg-[#f8fafc] min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <IconCheck />
          </div>
          <h2 className="text-xl font-bold text-[#0f172a] mb-2">Submission Successful!</h2>
          <p className="text-gray-500">Thank you for your submission. The relevant authorities will review it.</p>
          <button onClick={onBack} className="mt-6 px-6 py-2 bg-[#22c55e] text-white rounded-lg hover:bg-[#16a34a] transition-colors">Return to Participation Hub</button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <button onClick={onBack} className="text-[#22c55e] mb-6 flex items-center gap-1 hover:text-[#16a34a] transition-colors">← Back to Participation Hub</button>
        
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#22c55e]/10 rounded-xl flex items-center justify-center">{config.icon}</div>
            <div>
              <h1 className="text-2xl font-bold text-[#0f172a]">{config.title}</h1>
              <p className="text-sm text-gray-500">{config.subtitle}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* REPORT FORM */}
            {formType === 'report' && (
              <>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Issue Type *</label><select required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" value={reportForm.type} onChange={(e) => setReportForm({...reportForm, type: e.target.value})}><option value="">Select type</option><option>Project Delay</option><option>Poor Quality</option><option>Budget Mismanagement</option><option>Corruption</option><option>Other</option></select></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Project Title *</label><input type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="Enter project name" value={reportForm.project} onChange={(e) => setReportForm({...reportForm, project: e.target.value})} /></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">County *</label><select required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" value={reportForm.county} onChange={(e) => setReportForm({...reportForm, county: e.target.value})}><option value="">Select county</option>{counties.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Location (Optional)</label><input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="Ward, village, or street" value={reportForm.location} onChange={(e) => setReportForm({...reportForm, location: e.target.value})} /></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Description *</label><textarea required rows="5" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="Describe the issue in detail..." value={reportForm.description} onChange={(e) => setReportForm({...reportForm, description: e.target.value})}></textarea></div>
                <div className="flex items-center gap-2"><input type="checkbox" id="anonymous" checked={reportForm.anonymous} onChange={(e) => setReportForm({...reportForm, anonymous: e.target.checked})} className="w-4 h-4 text-[#22c55e] rounded focus:ring-[#22c55e]" /><label htmlFor="anonymous" className="text-sm text-gray-600">Submit anonymously</label></div>
              </>
            )}

            {/* FEEDBACK FORM */}
            {formType === 'feedback' && (
              <>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Feedback Type *</label><select required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" value={feedbackForm.type} onChange={(e) => setFeedbackForm({...feedbackForm, type: e.target.value})}><option value="">Select type</option><option>Appreciation</option><option>Improvement Suggestion</option><option>Quality Concern</option><option>General Comment</option></select></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Project Title</label><input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="Project name (optional)" value={feedbackForm.project} onChange={(e) => setFeedbackForm({...feedbackForm, project: e.target.value})} /></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">County</label><select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" value={feedbackForm.county} onChange={(e) => setFeedbackForm({...feedbackForm, county: e.target.value})}><option value="">Select county</option>{counties.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Rating</label><div className="flex gap-2">{[...Array(5)].map((_, i) => (<button key={i} type="button" onClick={() => setFeedbackForm({...feedbackForm, rating: i+1})} className="focus:outline-none">{i < feedbackForm.rating ? <IconStar filled /> : <IconStar />}</button>))}</div></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Your Message *</label><textarea required rows="5" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="Share your experience or suggestions..." value={feedbackForm.comment} onChange={(e) => setFeedbackForm({...feedbackForm, comment: e.target.value})}></textarea></div>
                <div className="flex items-center gap-2"><input type="checkbox" checked={feedbackForm.anonymous} onChange={(e) => setFeedbackForm({...feedbackForm, anonymous: e.target.checked})} className="w-4 h-4 text-[#22c55e] rounded focus:ring-[#22c55e]" /><label className="text-sm text-gray-600">Submit anonymously</label></div>
              </>
            )}

            {/* BUDGET SUGGESTION FORM */}
            {formType === 'budget' && (
              <>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">County *</label><select required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" value={budgetForm.county} onChange={(e) => setBudgetForm({...budgetForm, county: e.target.value})}><option value="">Select county</option>{counties.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Sector *</label><select required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" value={budgetForm.sector} onChange={(e) => setBudgetForm({...budgetForm, sector: e.target.value})}><option value="">Select sector</option>{sectors.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Suggested Amount *</label><input type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="e.g., 50,000,000" value={budgetForm.amount} onChange={(e) => setBudgetForm({...budgetForm, amount: e.target.value})} /></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Priority *</label><select required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" value={budgetForm.priority} onChange={(e) => setBudgetForm({...budgetForm, priority: e.target.value})}><option value="">Select priority</option><option>High</option><option>Medium</option><option>Low</option></select></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Justification *</label><textarea required rows="5" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="Explain why this allocation is needed..." value={budgetForm.justification} onChange={(e) => setBudgetForm({...budgetForm, justification: e.target.value})}></textarea></div>
                <div className="flex items-center gap-2"><input type="checkbox" checked={budgetForm.anonymous} onChange={(e) => setBudgetForm({...budgetForm, anonymous: e.target.checked})} className="w-4 h-4 text-[#22c55e] rounded focus:ring-[#22c55e]" /><label className="text-sm text-gray-600">Submit anonymously</label></div>
              </>
            )}

            {/* VOLUNTEER FORM */}
            {formType === 'volunteer' && (
              <>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Full Name *</label><input type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="Enter your full name" value={volunteerForm.name} onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})} /></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Email *</label><input type="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="Enter Your Email" value={volunteerForm.email} onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})} /></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Enter Your Phone Number; *</label><input type="tel" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="phone number" value={volunteerForm.phone} onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})} /></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">County *</label><select required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" value={volunteerForm.county} onChange={(e) => setVolunteerForm({...volunteerForm, county: e.target.value})}><option value="">Select county</option>{counties.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Skills/Expertise</label><input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="e.g., Project management, Data collection" value={volunteerForm.skills} onChange={(e) => setVolunteerForm({...volunteerForm, skills: e.target.value})} /></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Availability *</label><select required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" value={volunteerForm.availability} onChange={(e) => setVolunteerForm({...volunteerForm, availability: e.target.value})}><option value="">Select availability</option><option>Weekdays only</option><option>Weekends only</option><option>Flexible</option><option>Evenings</option></select></div>
                <div><label className="block text-sm font-medium text-[#0f172a] mb-1">Why do you want to volunteer? *</label><textarea required rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e]" placeholder="Tell us why you're interested..." value={volunteerForm.motivation} onChange={(e) => setVolunteerForm({...volunteerForm, motivation: e.target.value})}></textarea></div>
                <div className="flex items-center gap-2"><input type="checkbox" id="terms" required checked={volunteerForm.terms} onChange={(e) => setVolunteerForm({...volunteerForm, terms: e.target.checked})} className="w-4 h-4 text-[#22c55e] rounded focus:ring-[#22c55e]" /><label htmlFor="terms" className="text-sm text-gray-600">I agree to the terms and conditions *</label></div>
              </>
            )}

            <div className="flex gap-3 pt-4">
              <button type="button" onClick={onBack} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50">Cancel</button>
              <button type="submit" className="flex-1 bg-[#22c55e] text-white py-2 rounded-lg font-medium hover:bg-[#16a34a] transition-colors">{config.buttonText}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}