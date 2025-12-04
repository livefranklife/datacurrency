import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  Coins,
  TrendingUp,
  TrendingDown,
  Star,
  Award,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  BarChart3
} from 'lucide-react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const CoinValue = () => {
  const [coinData, setCoinData] = useState({
    currentValue: 0.0456,
    totalSupply: 1000000000,
    marketCap: 45600000,
    volume24h: 2345678,
    priceChange24h: 8.5,
    dataShares: 12450000,
    rating: 4.8
  })

  useEffect(() => {
    // Simulate live coin value updates
    const interval = setInterval(() => {
      setCoinData(prev => ({
        ...prev,
        currentValue: prev.currentValue + (Math.random() * 0.001 - 0.0005),
        volume24h: prev.volume24h + Math.floor(Math.random() * 10000 - 5000),
        priceChange24h: prev.priceChange24h + (Math.random() * 0.5 - 0.25)
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const chartData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    value: 0.03 + Math.random() * 0.02,
    volume: 1000000 + Math.random() * 500000
  }))

  const valueFactors = [
    { name: 'Data Sharing', value: 45, color: '#06b6d4' },
    { name: 'Network Activity', value: 30, color: '#a855f7' },
    { name: 'Market Demand', value: 15, color: '#10b981' },
    { name: 'Referendum Votes', value: 10, color: '#f59e0b' }
  ]

  const ratingFactors = [
    { label: 'Data Quality', score: 4.9, max: 5 },
    { label: 'Network Speed', score: 4.7, max: 5 },
    { label: 'Security', score: 5.0, max: 5 },
    { label: 'User Satisfaction', score: 4.6, max: 5 },
    { label: 'Market Stability', score: 4.8, max: 5 }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold gradient-text">Coin Value & Rating</h1>
          <p className="text-gray-400 mt-1">Data Currency coin valuation and performance metrics</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-400">Live Updates</span>
        </div>
      </motion.div>

      {/* Main Coin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Current Value',
            value: `$${coinData.currentValue.toFixed(4)}`,
            change: `+${coinData.priceChange24h.toFixed(2)}%`,
            trend: 'up',
            icon: Coins,
            color: 'from-cyan-500 to-blue-500'
          },
          {
            title: 'Market Cap',
            value: `$${(coinData.marketCap / 1000000).toFixed(2)}M`,
            change: '+12.5%',
            trend: 'up',
            icon: BarChart3,
            color: 'from-purple-500 to-pink-500'
          },
          {
            title: '24h Volume',
            value: `$${(coinData.volume24h / 1000).toFixed(2)}K`,
            change: '+8.3%',
            trend: 'up',
            icon: Activity,
            color: 'from-green-500 to-emerald-500'
          },
          {
            title: 'Value Rating',
            value: coinData.rating.toFixed(1),
            change: '+0.2',
            trend: 'up',
            icon: Star,
            color: 'from-yellow-500 to-orange-500'
          }
        ].map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-xl p-6 card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-5 h-5 text-green-400" />
                ) : (
                  <ArrowDownRight className="w-5 h-5 text-red-400" />
                )}
              </div>
              <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-white mb-2">{stat.value}</p>
              <p className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change} from last 24h
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Price Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Price History</h3>
              <p className="text-gray-400 text-sm">Last 30 days</p>
            </div>
            <TrendingUp className="w-6 h-6 text-cyan-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
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
              <Area
                type="monotone"
                dataKey="value"
                stroke="#06b6d4"
                fillOpacity={1}
                fill="url(#colorPrice)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Value Factors */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Value Factors</h3>
              <p className="text-gray-400 text-sm">What drives coin value</p>
            </div>
            <Zap className="w-6 h-6 text-purple-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={valueFactors}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {valueFactors.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Rating System */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Value Rating System</h3>
            <p className="text-gray-400 text-sm">Comprehensive rating metrics</p>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-6 h-6 text-yellow-400" />
            <span className="text-2xl font-bold text-yellow-400">{coinData.rating.toFixed(1)}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(coinData.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {ratingFactors.map((factor, index) => (
            <motion.div
              key={factor.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-white/5 rounded-lg"
            >
              <p className="text-gray-400 text-sm mb-2">{factor.label}</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-white">{factor.score.toFixed(1)}</span>
                <span className="text-gray-500">/ {factor.max}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(factor.score / factor.max) * 100}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How Value Increases */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-white mb-6">How Coin Value Increases</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Data Sharing',
              description: 'More data you share, higher your coin value',
              icon: Activity,
              color: 'from-cyan-500 to-blue-500'
            },
            {
              title: 'Data Collection',
              description: 'Collecting valuable data increases coin worth',
              icon: Zap,
              color: 'from-purple-500 to-pink-500'
            },
            {
              title: 'Network Participation',
              description: 'Active participation in network boosts value',
              icon: Coins,
              color: 'from-green-500 to-emerald-500'
            }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-white/5 rounded-lg card-hover"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export default CoinValue

