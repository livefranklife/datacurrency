import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  DollarSign,
  TrendingUp,
  Database,
  Upload,
  Download,
  BarChart3,
  Zap,
  Eye,
  Share2,
  Coins,
  Activity,
  Filter,
  Search,
  Star
} from 'lucide-react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const DataTrading = () => {
  const [activeTab, setActiveTab] = useState('sell')

  const dataForSale = [
    {
      id: 1,
      name: 'Shopping Behavior Data',
      category: 'Behavior',
      size: '2.5 GB',
      price: 125.50,
      coinsPrice: 2750,
      views: 1245,
      purchases: 89,
      rating: 4.8,
      description: 'Comprehensive shopping patterns, preferences, and purchase history',
      tags: ['Shopping', 'Behavior', 'Preferences']
    },
    {
      id: 2,
      name: 'Movie Watching Analytics',
      category: 'Entertainment',
      size: '1.8 GB',
      price: 89.99,
      coinsPrice: 1980,
      views: 892,
      purchases: 56,
      rating: 4.6,
      description: 'Movie preferences, watch history, genre preferences, and ratings',
      tags: ['Movies', 'Entertainment', 'Analytics']
    },
    {
      id: 3,
      name: 'Brand Interest Data',
      category: 'Marketing',
      size: '3.2 GB',
      price: 199.99,
      coinsPrice: 4400,
      views: 2345,
      purchases: 145,
      rating: 4.9,
      description: 'Brand preferences, loyalty, engagement metrics, and purchase intent',
      tags: ['Brands', 'Marketing', 'Preferences']
    },
    {
      id: 4,
      name: 'Expense Tracking Data',
      category: 'Financial',
      size: '1.5 GB',
      price: 75.00,
      coinsPrice: 1650,
      views: 678,
      purchases: 34,
      rating: 4.5,
      description: 'Detailed expense patterns, categories, and spending habits',
      tags: ['Expenses', 'Financial', 'Tracking']
    },
    {
      id: 5,
      name: 'Interest & Hobby Data',
      category: 'Lifestyle',
      size: '2.1 GB',
      price: 99.99,
      coinsPrice: 2200,
      views: 1456,
      purchases: 78,
      rating: 4.7,
      description: 'Personal interests, hobbies, activities, and lifestyle patterns',
      tags: ['Interests', 'Lifestyle', 'Hobbies']
    },
    {
      id: 6,
      name: 'Rating & Review Data',
      category: 'Feedback',
      size: '850 MB',
      price: 49.99,
      coinsPrice: 1100,
      views: 567,
      purchases: 23,
      rating: 4.4,
      description: 'Product ratings, reviews, preferences, and feedback patterns',
      tags: ['Ratings', 'Reviews', 'Feedback']
    }
  ]

  const tradingStats = {
    totalEarnings: 45230.50,
    dataSold: 12450,
    activeListings: 12,
    avgPrice: 99.99,
    totalViews: 12456,
    totalPurchases: 425
  }

  const salesData = Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    sales: 100 + Math.random() * 200,
    revenue: 5000 + Math.random() * 5000
  }))

  const categoryData = [
    { category: 'Behavior', count: 45, revenue: 12500 },
    { category: 'Entertainment', count: 32, revenue: 8900 },
    { category: 'Marketing', count: 28, revenue: 15200 },
    { category: 'Financial', count: 19, revenue: 5600 },
    { category: 'Lifestyle', count: 24, revenue: 7200 }
  ]

  const tabs = [
    { id: 'sell', label: 'Sell Data', icon: Upload },
    { id: 'marketplace', label: 'Data Marketplace', icon: Database },
    { id: 'analytics', label: 'Trading Analytics', icon: BarChart3 },
    { id: 'earnings', label: 'Earnings', icon: DollarSign }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'sell':
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-8 border-2 border-dashed border-cyan-500/30"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mb-4"
                >
                  <Upload className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">Sell Your Data</h3>
                <p className="text-gray-400 mb-6">Upload and monetize your data. Earn coins for sharing valuable information.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold"
                >
                  Upload Data Package
                </motion.button>
                <p className="text-gray-500 text-sm mt-4">Supported formats: CSV, JSON, Excel, XML</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Your Data Listings</h3>
              <div className="space-y-4">
                {dataForSale.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                            {item.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-white font-semibold">{item.rating}</span>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
                        <p className="text-gray-400 mb-3">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-white/5 text-gray-300 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="flex items-center space-x-2">
                            <Eye className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400">{item.views} views</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Download className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400">{item.purchases} purchases</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Database className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400">{item.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right ml-6">
                        <p className="text-2xl font-bold text-white mb-1">${item.price.toFixed(2)}</p>
                        <p className="text-cyan-400 font-semibold mb-4">{item.coinsPrice.toLocaleString()} Coins</p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-sm"
                        >
                          Edit Listing
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )

      case 'marketplace':
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Browse Data Marketplace</h3>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search data..."
                      className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10"
                  >
                    <Filter className="w-5 h-5 text-gray-400" />
                  </motion.button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dataForSale.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-effect rounded-xl p-6 card-hover"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-white text-sm">{item.rating}</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.name}</h4>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xl font-bold text-white">${item.price.toFixed(2)}</p>
                        <p className="text-cyan-400 text-sm">{item.coinsPrice.toLocaleString()} Coins</p>
                      </div>
                      <div className="text-right text-sm text-gray-400">
                        <p>{item.size}</p>
                        <p>{item.purchases} sold</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold"
                    >
                      Purchase Data
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )

      case 'analytics':
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Sales & Revenue Trends</h3>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={salesData}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
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
                  <Area type="monotone" dataKey="sales" stroke="#06b6d4" fillOpacity={1} fill="url(#colorSales)" name="Sales" />
                  <Area type="monotone" dataKey="revenue" stroke="#a855f7" fillOpacity={1} fill="url(#colorRevenue)" name="Revenue ($)" />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Data by Category</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="category" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="count" fill="#06b6d4" name="Listings" />
                  <Bar dataKey="revenue" fill="#a855f7" name="Revenue ($)" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        )

      case 'earnings':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Earnings', value: `$${tradingStats.totalEarnings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, icon: DollarSign, color: 'from-green-500 to-emerald-500' },
                { label: 'Data Sold', value: tradingStats.dataSold.toLocaleString(), icon: Database, color: 'from-cyan-500 to-blue-500' },
                { label: 'Active Listings', value: tradingStats.activeListings.toString(), icon: Upload, color: 'from-purple-500 to-pink-500' },
                { label: 'Avg Price', value: `$${tradingStats.avgPrice.toFixed(2)}`, icon: TrendingUp, color: 'from-orange-500 to-red-500' }
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect rounded-xl p-6 card-hover"
                  >
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-gray-400 text-sm mb-1">{stat.label}</h3>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </motion.div>
                )
              })}
            </div>
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
          <h1 className="text-3xl font-bold gradient-text">Data Trading & Selling</h1>
          <p className="text-gray-400 mt-1">Sell your data and earn coins from data marketplace</p>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {[
          { label: 'Total Earnings', value: `$${(tradingStats.totalEarnings / 1000).toFixed(1)}K`, icon: DollarSign, color: 'from-green-500 to-emerald-500' },
          { label: 'Data Sold', value: tradingStats.dataSold.toLocaleString(), icon: Database, color: 'from-cyan-500 to-blue-500' },
          { label: 'Listings', value: tradingStats.activeListings.toString(), icon: Upload, color: 'from-purple-500 to-pink-500' },
          { label: 'Views', value: tradingStats.totalViews.toLocaleString(), icon: Eye, color: 'from-yellow-500 to-orange-500' },
          { label: 'Purchases', value: tradingStats.totalPurchases.toString(), icon: Download, color: 'from-red-500 to-pink-500' },
          { label: 'Avg Price', value: `$${tradingStats.avgPrice.toFixed(0)}`, icon: TrendingUp, color: 'from-indigo-500 to-purple-500' }
        ].map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-xl p-6 card-hover"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-400 text-xs mb-1">{stat.label}</h3>
              <p className="text-xl font-bold text-white">{stat.value}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {tabs.map((tab, index) => {
          const Icon = tab.icon
          return (
            <motion.button
              key={tab.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </motion.button>
          )
        })}
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  )
}

export default DataTrading

