import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Database,
  Users,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Coins,
  BarChart3
} from 'lucide-react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Dashboard = () => {
  const [liveData, setLiveData] = useState({
    totalValue: 125847.32,
    coinValue: 0.0456,
    dataShares: 12450,
    activeUsers: 8923,
    profit: 12.5,
    volume: 2456789
  })

  useEffect(() => {
    // Simulate live data updates
    const interval = setInterval(() => {
      setLiveData(prev => ({
        ...prev,
        totalValue: prev.totalValue + (Math.random() * 100 - 50),
        coinValue: prev.coinValue + (Math.random() * 0.001 - 0.0005),
        dataShares: prev.dataShares + Math.floor(Math.random() * 10 - 5),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5 - 2),
        profit: prev.profit + (Math.random() * 0.5 - 0.25),
        volume: prev.volume + Math.floor(Math.random() * 10000 - 5000)
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const chartData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    value: 1000 + Math.random() * 500,
    coin: 0.03 + Math.random() * 0.02
  }))

  const stats = [
    {
      title: 'Total Portfolio Value',
      value: `$${liveData.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Coin Value',
      value: `$${liveData.coinValue.toFixed(4)}`,
      change: '+8.3%',
      trend: 'up',
      icon: Coins,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Data Shares',
      value: liveData.dataShares.toLocaleString(),
      change: '+15.2%',
      trend: 'up',
      icon: Database,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Active Users',
      value: liveData.activeUsers.toLocaleString(),
      change: '+5.7%',
      trend: 'up',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const recentActivities = [
    { type: 'Data Share', amount: '+1,250', time: '2 min ago', status: 'success' },
    { type: 'Investment', amount: '+$5,000', time: '15 min ago', status: 'success' },
    { type: 'Coin Purchase', amount: '+500 Coins', time: '1 hour ago', status: 'success' },
    { type: 'Data Export', amount: '2.5 GB', time: '2 hours ago', status: 'info' },
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
          <h1 className="text-3xl font-bold gradient-text">Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back! Here's your data currency overview</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-400">Live Data</span>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
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
                {stat.change} from last month
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio Value Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Portfolio Value</h3>
              <p className="text-gray-400 text-sm">Last 30 days performance</p>
            </div>
            <BarChart3 className="w-6 h-6 text-cyan-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
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
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Coin Value Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Coin Value Trend</h3>
              <p className="text-gray-400 text-sm">Real-time coin valuation</p>
            </div>
            <TrendingUp className="w-6 h-6 text-purple-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
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
              <Line
                type="monotone"
                dataKey="coin"
                stroke="#a855f7"
                strokeWidth={2}
                dot={{ fill: '#a855f7', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 glass-effect rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${
                    activity.status === 'success' ? 'bg-green-500/20' : 'bg-blue-500/20'
                  }`}>
                    <Activity className={`w-5 h-5 ${
                      activity.status === 'success' ? 'text-green-400' : 'text-blue-400'
                    }`} />
                  </div>
                  <div>
                    <p className="text-white font-medium">{activity.type}</p>
                    <p className="text-gray-400 text-sm">{activity.time}</p>
                  </div>
                </div>
                <p className="text-cyan-400 font-semibold">{activity.amount}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
          <div className="space-y-3">
            {[
              { label: 'Buy Coins', icon: Coins, color: 'from-cyan-500 to-blue-500' },
              { label: 'Share Data', icon: Database, color: 'from-purple-500 to-pink-500' },
              { label: 'View Analytics', icon: BarChart3, color: 'from-green-500 to-emerald-500' },
            ].map((action, index) => {
              const Icon = action.icon
              return (
                <motion.button
                  key={action.label}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${action.color}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">{action.label}</span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard

