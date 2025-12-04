import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Upload,
  Download,
  Database,
  BarChart3,
  TrendingUp,
  FileText,
  Settings,
  Play,
  Filter,
  Search
} from 'lucide-react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const DataManagement = () => {
  const [activeTab, setActiveTab] = useState('import')
  const [dataFiles, setDataFiles] = useState([
    { id: 1, name: 'Market Data Q4 2024.csv', size: '2.5 MB', date: '2024-01-15', type: 'CSV' },
    { id: 2, name: 'User Analytics.json', size: '1.8 MB', date: '2024-01-14', type: 'JSON' },
    { id: 3, name: 'Transaction Logs.xlsx', size: '5.2 MB', date: '2024-01-13', type: 'Excel' },
  ])

  const visualizationData = Array.from({ length: 20 }, (_, i) => ({
    day: i + 1,
    imports: 100 + Math.random() * 50,
    exports: 80 + Math.random() * 40,
    manipulations: 60 + Math.random() * 30
  }))

  const predictionData = Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    actual: 1000 + Math.random() * 500,
    predicted: 1200 + Math.random() * 600
  }))

  const tabs = [
    { id: 'import', label: 'Data Import', icon: Upload },
    { id: 'export', label: 'Data Export', icon: Download },
    { id: 'manipulation', label: 'Data Manipulation', icon: Settings },
    { id: 'visualization', label: 'Data Visualization', icon: BarChart3 },
    { id: 'prediction', label: 'Data Prediction', icon: TrendingUp },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'import':
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
                <h3 className="text-xl font-bold text-white mb-2">Import Data Files</h3>
                <p className="text-gray-400 mb-6">Drag and drop files here or click to browse</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold"
                >
                  Select Files
                </motion.button>
                <p className="text-gray-500 text-sm mt-4">Supports CSV, JSON, Excel, XML</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Recent Imports</h3>
              <div className="space-y-3">
                {dataFiles.map((file, index) => (
                  <motion.div
                    key={file.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-cyan-500/20 rounded-lg">
                        <FileText className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{file.name}</p>
                        <p className="text-gray-400 text-sm">{file.size} • {file.date}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      {file.type}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )

      case 'export':
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Export Data</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['CSV', 'JSON', 'Excel'].map((format, index) => (
                  <motion.button
                    key={format}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10"
                  >
                    <Download className="w-8 h-8 text-cyan-400 mb-3" />
                    <p className="text-white font-semibold">{format} Format</p>
                    <p className="text-gray-400 text-sm mt-1">Download as {format}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Export Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Data Range
                  </label>
                  <select className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                    <option>All time</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Include Fields
                  </label>
                  <div className="space-y-2">
                    {['Date', 'Value', 'Volume', 'Transactions'].map((field) => (
                      <label key={field} className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-gray-300">{field}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold"
                >
                  Export Data
                </motion.button>
              </div>
            </motion.div>
          </div>
        )

      case 'manipulation':
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Data Manipulation Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Filter Data', icon: Filter, color: 'from-cyan-500 to-blue-500' },
                  { name: 'Sort Data', icon: Settings, color: 'from-purple-500 to-pink-500' },
                  { name: 'Transform', icon: Database, color: 'from-green-500 to-emerald-500' },
                  { name: 'Merge Datasets', icon: FileText, color: 'from-orange-500 to-red-500' },
                  { name: 'Clean Data', icon: Settings, color: 'from-yellow-500 to-orange-500' },
                  { name: 'Aggregate', icon: BarChart3, color: 'from-indigo-500 to-purple-500' },
                ].map((tool, index) => {
                  const Icon = tool.icon
                  return (
                    <motion.button
                      key={tool.name}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10"
                    >
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${tool.color} mb-3`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-semibold">{tool.name}</p>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          </div>
        )

      case 'visualization':
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Data Activity Overview</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={visualizationData}>
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
                  <Bar dataKey="imports" fill="#06b6d4" />
                  <Bar dataKey="exports" fill="#a855f7" />
                  <Bar dataKey="manipulations" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-effect rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Import Trends</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={visualizationData}>
                    <defs>
                      <linearGradient id="colorImports" x1="0" y1="0" x2="0" y2="1">
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
                    <Area type="monotone" dataKey="imports" stroke="#06b6d4" fillOpacity={1} fill="url(#colorImports)" />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-effect rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Export Trends</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={visualizationData}>
                    <defs>
                      <linearGradient id="colorExports" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
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
                    <Area type="monotone" dataKey="exports" stroke="#a855f7" fillOpacity={1} fill="url(#colorExports)" />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </div>
        )

      case 'prediction':
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Data Prediction Model</h3>
                  <p className="text-gray-400 text-sm">AI-powered forecasting based on historical data</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold flex items-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Run Prediction</span>
                </motion.button>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={predictionData}>
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
                  <Line type="monotone" dataKey="actual" stroke="#06b6d4" strokeWidth={2} name="Actual" />
                  <Line type="monotone" dataKey="predicted" stroke="#a855f7" strokeWidth={2} strokeDasharray="5 5" name="Predicted" />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Accuracy', value: '94.5%', color: 'from-green-500 to-emerald-500' },
                { label: 'Confidence', value: 'High', color: 'from-cyan-500 to-blue-500' },
                { label: 'Next Month', value: '+15.2%', color: 'from-purple-500 to-pink-500' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6"
                >
                  <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                  <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </p>
                </motion.div>
              ))}
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
          <h1 className="text-3xl font-bold gradient-text">Data Management</h1>
          <p className="text-gray-400 mt-1">Import, export, manipulate, visualize and predict data</p>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {tabs.map((tab, index) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
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
                isActive
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

export default DataManagement

