import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Smartphone,
  Watch,
  Tablet,
  Laptop,
  Monitor,
  Wifi,
  Share2,
  Download,
  Upload,
  Activity,
  Zap,
  Settings,
  CheckCircle,
  Clock
} from 'lucide-react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const DeviceSharing = () => {
  const [devices, setDevices] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro',
      type: 'mobile',
      status: 'connected',
      dataShared: '2.5 GB',
      coinsEarned: 125.50,
      lastActive: '2 min ago',
      icon: Smartphone,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 2,
      name: 'Apple Watch Series 9',
      type: 'watch',
      status: 'connected',
      dataShared: '850 MB',
      coinsEarned: 42.30,
      lastActive: '5 min ago',
      icon: Watch,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'iPad Pro',
      type: 'tablet',
      status: 'connected',
      dataShared: '5.2 GB',
      coinsEarned: 260.00,
      lastActive: '1 min ago',
      icon: Tablet,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      name: 'MacBook Pro',
      type: 'laptop',
      status: 'idle',
      dataShared: '12.8 GB',
      coinsEarned: 640.00,
      lastActive: '15 min ago',
      icon: Laptop,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      name: 'Desktop Monitor',
      type: 'desktop',
      status: 'disconnected',
      dataShared: '8.5 GB',
      coinsEarned: 425.00,
      lastActive: '2 hours ago',
      icon: Monitor,
      color: 'from-indigo-500 to-purple-500'
    }
  ])

  const [sharingStats, setSharingStats] = useState({
    totalDevices: 5,
    activeDevices: 3,
    totalDataShared: '29.85 GB',
    totalCoinsEarned: 1492.80,
    sharingRate: 125.5
  })

  const activityData = Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    data: 100 + Math.sin(i / 4) * 50 + Math.random() * 30,
    devices: 2 + Math.floor(Math.random() * 3)
  }))

  const deviceTypeData = [
    { type: 'Mobile', count: 2, data: '3.35 GB' },
    { type: 'Watch', count: 1, data: '850 MB' },
    { type: 'Tablet', count: 1, data: '5.2 GB' },
    { type: 'Laptop', count: 1, data: '12.8 GB' }
  ]

  const toggleDeviceStatus = (deviceId) => {
    setDevices(devices.map(device =>
      device.id === deviceId
        ? {
            ...device,
            status: device.status === 'connected' ? 'idle' : 'connected'
          }
        : device
    ))
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
          <h1 className="text-3xl font-bold gradient-text">Device Sharing</h1>
          <p className="text-gray-400 mt-1">Connect and share data across all your devices</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-400">Live Sync</span>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {[
          {
            title: 'Total Devices',
            value: sharingStats.totalDevices.toString(),
            icon: Smartphone,
            color: 'from-cyan-500 to-blue-500'
          },
          {
            title: 'Active Devices',
            value: sharingStats.activeDevices.toString(),
            icon: Activity,
            color: 'from-green-500 to-emerald-500'
          },
          {
            title: 'Data Shared',
            value: sharingStats.totalDataShared,
            icon: Share2,
            color: 'from-purple-500 to-pink-500'
          },
          {
            title: 'Coins Earned',
            value: `$${sharingStats.totalCoinsEarned.toFixed(2)}`,
            icon: Zap,
            color: 'from-yellow-500 to-orange-500'
          },
          {
            title: 'Sharing Rate',
            value: `${sharingStats.sharingRate} MB/s`,
            icon: Wifi,
            color: 'from-indigo-500 to-purple-500'
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
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Connected Devices */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Connected Devices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((device, index) => {
            const Icon = device.icon
            return (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-effect rounded-xl p-6 card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${device.color}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    device.status === 'connected'
                      ? 'bg-green-500/20 text-green-400'
                      : device.status === 'idle'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {device.status}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{device.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Data Shared</span>
                    <span className="text-white font-semibold">{device.dataShared}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Coins Earned</span>
                    <span className="text-cyan-400 font-semibold">{device.coinsEarned}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Last Active</span>
                    <span className="text-gray-500">{device.lastActive}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleDeviceStatus(device.id)}
                    className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                      device.status === 'connected'
                        ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                        : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                    }`}
                  >
                    {device.status === 'connected' ? 'Disconnect' : 'Connect'}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Settings className="w-5 h-5 text-gray-400" />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Activity Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">24h Sharing Activity</h3>
            <p className="text-gray-400 text-sm">Real-time data sharing across devices</p>
          </div>
          <Activity className="w-6 h-6 text-cyan-400" />
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={activityData}>
            <defs>
              <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="hour" stroke="#9ca3af" />
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
              dataKey="data"
              stroke="#06b6d4"
              fillOpacity={1}
              fill="url(#colorActivity)"
              name="Data (MB)"
            />
            <Line
              type="monotone"
              dataKey="devices"
              stroke="#a855f7"
              strokeWidth={2}
              name="Active Devices"
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Device Type Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-effect rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-6">Data by Device Type</h3>
          <div className="space-y-4">
            {deviceTypeData.map((item, index) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white/5 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">{item.type}</span>
                  <span className="text-gray-400 text-sm">{item.count} device(s)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-medium">{item.data}</span>
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(parseFloat(item.data) / 12.8) * 100}%` }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-effect rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
          <div className="space-y-3">
            {[
              { label: 'Add New Device', icon: Smartphone, color: 'from-cyan-500 to-blue-500' },
              { label: 'Sync All Devices', icon: Wifi, color: 'from-purple-500 to-pink-500' },
              { label: 'Export Data', icon: Download, color: 'from-green-500 to-emerald-500' },
              { label: 'Import Data', icon: Upload, color: 'from-orange-500 to-red-500' },
            ].map((action, index) => {
              const Icon = action.icon
              return (
                <motion.button
                  key={action.label}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
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

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-white mb-6">Benefits of Device Sharing</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Earn More Coins',
              description: 'Share data from multiple devices to maximize your coin earnings',
              icon: Zap,
              color: 'from-yellow-500 to-orange-500'
            },
            {
              title: 'Seamless Sync',
              description: 'All your devices automatically sync data in real-time',
              icon: Wifi,
              color: 'from-cyan-500 to-blue-500'
            },
            {
              title: 'Increased Value',
              description: 'More data sharing means higher coin value and ratings',
              icon: Activity,
              color: 'from-purple-500 to-pink-500'
            }
          ].map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/5 rounded-lg"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${benefit.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export default DeviceSharing

