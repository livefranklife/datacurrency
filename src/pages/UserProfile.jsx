import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  User,
  Edit,
  Settings,
  TrendingUp,
  Award,
  BarChart3,
  Coins,
  Database,
  ShoppingBag,
  Film,
  Heart,
  DollarSign,
  Star,
  Share2
} from 'lucide-react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    memberSince: '2023-06-15',
    totalCoins: 1250.50,
    dataShares: 12450,
    rating: 4.8,
    totalEarned: 45230.50
  }

  const formations = [
    { label: 'Data Trader', level: 'Expert', progress: 95, icon: Database, color: 'from-cyan-500 to-blue-500' },
    { label: 'Market Analyst', level: 'Advanced', progress: 78, icon: BarChart3, color: 'from-purple-500 to-pink-500' },
    { label: 'Investor', level: 'Professional', progress: 85, icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { label: 'Data Collector', level: 'Master', progress: 92, icon: Share2, color: 'from-orange-500 to-red-500' }
  ]

  const interests = [
    { category: 'Movies', count: 245, icon: Film, color: 'from-purple-500 to-pink-500' },
    { category: 'Shopping', count: 189, icon: ShoppingBag, color: 'from-cyan-500 to-blue-500' },
    { category: 'Entertainment', count: 312, icon: Heart, color: 'from-red-500 to-pink-500' },
    { category: 'Brands', count: 156, icon: Star, color: 'from-yellow-500 to-orange-500' }
  ]

  const expenseData = Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    amount: 1000 + Math.random() * 2000,
    category: ['Shopping', 'Entertainment', 'Movies', 'Food'][Math.floor(Math.random() * 4)]
  }))

  const ratingData = [
    { name: 'Movies', rating: 4.5, reviews: 245 },
    { name: 'Brands', rating: 4.2, reviews: 156 },
    { name: 'Products', rating: 4.7, reviews: 389 },
    { name: 'Services', rating: 4.3, reviews: 178 }
  ]

  const chartData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    value: 1000 + Math.random() * 500
  }))

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'formations', label: 'Formations' },
    { id: 'interests', label: 'Interests & Tracking' },
    { id: 'expenses', label: 'Expenses' },
    { id: 'ratings', label: 'Ratings & Reviews' },
    { id: 'shares', label: 'Shares & Trading' }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: 'Total Coins', value: userData.totalCoins.toFixed(2), icon: Coins, color: 'from-cyan-500 to-blue-500' },
                { title: 'Data Shares', value: userData.dataShares.toLocaleString(), icon: Database, color: 'from-purple-500 to-pink-500' },
                { title: 'Rating', value: userData.rating.toFixed(1), icon: Star, color: 'from-yellow-500 to-orange-500' },
                { title: 'Total Earned', value: `$${userData.totalEarned.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, icon: DollarSign, color: 'from-green-500 to-emerald-500' }
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect rounded-xl p-6 card-hover"
                  >
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Activity Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="day" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#06b6d4" fillOpacity={1} fill="url(#colorActivity)" />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        )

      case 'formations':
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Your Formations & Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formations.map((formation, index) => {
                  const Icon = formation.icon
                  return (
                    <motion.div
                      key={formation.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 bg-white/5 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${formation.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                          {formation.level}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{formation.label}</h4>
                      <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${formation.progress}%` }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                          className={`h-3 rounded-full bg-gradient-to-r ${formation.color}`}
                        />
                      </div>
                      <p className="text-gray-400 text-sm">{formation.progress}% Complete</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        )

      case 'interests':
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Your Interests & Data Tracking</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {interests.map((interest, index) => {
                  const Icon = interest.icon
                  return (
                    <motion.div
                      key={interest.category}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="p-6 bg-white/5 rounded-lg card-hover"
                    >
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${interest.color} mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{interest.category}</h4>
                      <p className="text-3xl font-bold text-cyan-400">{interest.count}</p>
                      <p className="text-gray-400 text-sm mt-1">Items tracked</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Detailed Interest Breakdown</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Film className="w-5 h-5 text-purple-400" />
                      <span className="text-white font-semibold">Movies Watched</span>
                    </div>
                    <span className="text-cyan-400 font-bold">245</span>
                  </div>
                  <p className="text-gray-400 text-sm">Genres: Action (45), Drama (38), Comedy (52), Sci-Fi (30), Horror (28), Romance (52)</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <ShoppingBag className="w-5 h-5 text-cyan-400" />
                      <span className="text-white font-semibold">Shopping Items</span>
                    </div>
                    <span className="text-cyan-400 font-bold">189</span>
                  </div>
                  <p className="text-gray-400 text-sm">Categories: Electronics (32), Clothing (45), Food (28), Books (24), Other (60)</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-white font-semibold">Brands Followed</span>
                    </div>
                    <span className="text-cyan-400 font-bold">156</span>
                  </div>
                  <p className="text-gray-400 text-sm">Top Brands: Tech (45), Fashion (38), Food & Beverage (28), Automotive (20), Other (25)</p>
                </div>
              </div>
            </motion.div>
          </div>
        )

      case 'expenses':
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Expense Tracking</h3>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={expenseData}>
                  <defs>
                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                  <Area type="monotone" dataKey="amount" stroke="#a855f7" fillOpacity={1} fill="url(#colorExpense)" />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { category: 'Shopping', amount: 12500, color: 'from-cyan-500 to-blue-500' },
                { category: 'Entertainment', amount: 8900, color: 'from-purple-500 to-pink-500' },
                { category: 'Movies', amount: 3200, color: 'from-red-500 to-pink-500' },
                { category: 'Food', amount: 5600, color: 'from-green-500 to-emerald-500' }
              ].map((expense, index) => (
                <motion.div
                  key={expense.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6"
                >
                  <h3 className="text-gray-400 text-sm mb-2">{expense.category}</h3>
                  <p className={`text-2xl font-bold bg-gradient-to-r ${expense.color} bg-clip-text text-transparent`}>
                    ${expense.amount.toLocaleString()}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 'ratings':
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Your Ratings & Reviews</h3>
              <div className="space-y-4">
                {ratingData.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-white/5 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-white">{item.name}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(item.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-cyan-400 font-bold">{item.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{item.reviews} reviews</span>
                      <div className="w-48 bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(item.rating / 5) * 100}%` }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                          className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )

      case 'shares':
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Shares & Trading</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[
                  { label: 'Total Shares', value: '1,245', icon: Share2, color: 'from-cyan-500 to-blue-500' },
                  { label: 'Active Trades', value: '12', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
                  { label: 'Share Value', value: '$45,230', icon: DollarSign, color: 'from-purple-500 to-pink-500' }
                ].map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 bg-white/5 rounded-lg"
                    >
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-gray-400 text-sm mb-1">{stat.label}</h4>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold gradient-text">User Profile</h1>
          <p className="text-gray-400 mt-1">Manage your formations, interests, expenses, and data</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors flex items-center space-x-2"
        >
          <Edit className="w-5 h-5 text-gray-400" />
          <span className="text-gray-300">Edit Profile</span>
        </motion.button>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-xl p-6"
      >
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">{userData.name}</h2>
            <p className="text-gray-400 mb-1">{userData.email}</p>
            <p className="text-gray-500 text-sm">Member since {new Date(userData.memberSince).toLocaleDateString()}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 mb-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-2xl font-bold text-white">{userData.rating.toFixed(1)}</span>
            </div>
            <p className="text-gray-400 text-sm">User Rating</p>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  )
}

export default UserProfile

