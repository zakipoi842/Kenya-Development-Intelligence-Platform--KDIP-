import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  LayoutDashboard, 
  BarChart3, 
  Target, 
  Users, 
  Phone, 
  Search,
  LogIn,
  UserPlus,
  User,
  Shield
} from 'lucide-react'

export default function Navbar() {
  const location = useLocation()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false)

  // Kenya Green Color
  const kenyaGreen = '#1B4D3E'

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLoginDropdownOpen && !event.target.closest('.login-dropdown')) {
        setIsLoginDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isLoginDropdownOpen])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // FIXED: Search function - shows alert with search query
  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"\n\nThis feature will search across all projects, counties, and sectors.`)
      setSearchQuery('')
    }
  }

  // FIXED: Search icon click handler
  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"\n\nThis feature will search across all projects, counties, and sectors.`)
      setSearchQuery('')
    } else {
      alert('Please enter a search term')
    }
  }

  // NAVIGATION ITEMS
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Projects', path: '/projects', icon: LayoutDashboard },
    { name: 'Budget', path: '/budget', icon: BarChart3 },
    { name: 'Impact', path: '/impact', icon: Target },
    { name: 'Participate', path: '/participate', icon: Users },
    { name: 'Contact', path: '/contact', icon: Phone }
  ]

  // Login dropdown items
  const loginOptions = [
    { name: 'User Login', path: '/login', icon: User },
    { name: 'Admin Login', path: '/admin/login', icon: Shield }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          
          {/* ===== LOGO SECTION ===== */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img 
              src="https://img.icons8.com/color/48/kenya-circular.png"
              alt="Kenya Logo"
              className="w-7 h-7 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight" style={{ color: kenyaGreen }}>
                KDIP
              </span>
              <span className="text-[6px] font-bold tracking-wide text-gray-600 uppercase">
                KENYA DEVELOPMENT INTELLIGENCE PLATFORM
              </span>
            </div>
          </Link>

          {/* ===== DESKTOP NAVIGATION WITH ICONS ===== */}
          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path || 
                              (item.path === '/participate' && location.pathname.startsWith('/participate'))
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-1.5 text-sm font-medium transition-all duration-200 ${
                    isActive ? 'text-emerald-700' : 'text-gray-700 hover:text-emerald-700'
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* ===== RIGHT SECTION - SEARCH & AUTH ===== */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Bar - FIXED with working alert */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearch}
                placeholder="Search projects, counties..."
                className="w-48 pl-8 pr-8 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
              <Search 
                size={14} 
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-emerald-600 transition-colors" 
                onClick={handleSearchClick}
              />
            </div>

            {/* Login Dropdown + Register Button */}
            <div className="flex items-center gap-2">
              {/* Login Dropdown */}
              <div className="relative login-dropdown">
                <button
                  onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
                  className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-gray-700 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <LogIn size={14} />
                  <span>Login</span>
                  <svg className={`w-3 h-3 text-gray-400 transition-transform ${isLoginDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isLoginDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-44 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    {loginOptions.map((option, idx) => {
                      const Icon = option.icon
                      return (
                        <Link
                          key={idx}
                          to={option.path}
                          onClick={() => setIsLoginDropdownOpen(false)}
                          className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <Icon size={14} />
                          <span>{option.name}</span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Register Button */}
              <Link
                to="/register"
                className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-white rounded-md transition-colors"
                style={{ backgroundColor: kenyaGreen }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0E3328'}
                onMouseLeave={(e) => e.target.style.backgroundColor = kenyaGreen}
              >
                <UserPlus size={14} />
                <span>Register</span>
              </Link>
            </div>
          </div>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-1.5 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {isMobileOpen && (
          <div className="lg:hidden py-3 border-t border-gray-200">
            <div className="flex flex-col gap-1">
              {/* Mobile Search - FIXED */}
              <div className="relative mb-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearch}
                  placeholder="Search projects, counties..."
                  className="w-full pl-8 pr-8 py-1.5 text-sm border border-gray-300 rounded-md"
                />
                <Search 
                  size={14} 
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-emerald-600 transition-colors" 
                  onClick={handleSearchClick}
                />
              </div>

              {/* Mobile Nav Links */}
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path ||
                                (item.path === '/participate' && location.pathname.startsWith('/participate'))
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center gap-2 px-2 py-1.5 text-sm font-medium rounded-md transition-colors ${
                      isActive ? 'bg-gray-100 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                )
              })}

              {/* Mobile Auth Section */}
              <div className="mt-2 pt-2 border-t border-gray-100 space-y-1">
                {loginOptions.map((option, idx) => {
                  const Icon = option.icon
                  return (
                    <Link
                      key={idx}
                      to={option.path}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <Icon size={14} />
                      <span>{option.name}</span>
                    </Link>
                  )
                })}
                <Link
                  to="/register"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-2 py-1.5 text-sm font-medium text-white rounded-md mt-1"
                  style={{ backgroundColor: kenyaGreen }}
                >
                  <UserPlus size={14} />
                  <span>Register</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}