import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  BarChart3
} from 'lucide-react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const StockMarket = () => {
  const [stocks, setStocks] = useState([
    { id: 1, symbol: 'AAPL', name: 'Apple Inc.', price: 178.45, change: 2.34, changePercent: 1.33, volume: 45234567 },
    { id: 2, symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.23, change: -1.12, changePercent: -0.78, volume: 23456789 },
    { id: 3, symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.92, change: 5.67, changePercent: 1.52, volume: 34567890 },
    { id: 4, symbol: 'AMZN', name: 'Amazon.com Inc.', price: 145.67, change: 3.21, changePercent: 2.25, volume: 56789012 },
    { id: 5, symbol: 'TSLA', name: 'Tesla Inc.', price: 248.34, change: -2.45, changePercent: -0.98, volume: 67890123 },
    { id: 6, symbol: 'META', name: 'Meta Platforms', price: 312.56, change: 4.12, changePercent: 1.34, volume: 45678901 },
  ])

  useEffect(() => {
    // Simulate live price updates
    const interval = setInterval(() => {
      setStocks(prevStocks =>
        prevStocks.map(stock => ({
          ...stock,
          price: stock.price + (Math.random() * 2 - 1),
          change: stock.change + (Math.random() * 0.5 - 0.25),
          changePercent: ((stock.price + (Math.random() * 2 - 1)) / (stock.price - stock.change) - 1) * 100
        }))
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const chartData = Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    value: 150 + Math.sin(i / 4) * 30 + Math.random() * 10
  }))

  const marketData = {
    totalMarketCap: '45.2T',
    volume24h: '234.5B',
    activeStocks: 1245,
    gainers: 856,
    losers: 389
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold gradient-text">Stock Market</h1>
          <p className="text-gray-400 mt-1">Real-time stock prices and market data</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search stocks..."
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-500"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
          >
            <Filter className="w-5 h-5 text-gray-400" />
          </motion.button>
        </div>
      </motion.div>

      {/* Market Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: 'Market Cap', value: `$${marketData.totalMarketCap}`, icon: BarChart3, color: 'from-cyan-500 to-blue-500' },
          { label: '24h Volume', value: `$${marketData.volume24h}`, icon: Activity, color: 'from-purple-500 to-pink-500' },
          { label: 'Active Stocks', value: marketData.activeStocks.toLocaleString(), icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
          { label: 'Gainers', value: marketData.gainers, icon: ArrowUpRight, color: 'from-green-500 to-emerald-500' },
          { label: 'Losers', value: marketData.losers, icon: ArrowDownRight, color: 'from-red-500 to-orange-500' },
        ].map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-xl p-4 card-hover"
            >
              <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.color} mb-3`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
              <p className="text-lg font-bold text-white">{stat.value}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Live Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Market Performance (24h)</h3>
            <p className="text-gray-400 text-sm">Real-time market trends</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">Live</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorMarket" x1="0" y1="0" x2="0" y2="1">
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
              dataKey="value"
              stroke="#06b6d4"
              fillOpacity={1}
              fill="url(#colorMarket)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Stocks Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-xl p-6 overflow-x-auto"
      >
        <h3 className="text-xl font-bold text-white mb-6">Top Stocks</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Symbol</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Company</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Price</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Change</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Change %</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Volume</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock, index) => (
                <motion.tr
                  key={stock.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-4">
                    <span className="font-bold text-white">{stock.symbol}</span>
                  </td>
                  <td className="py-4 px-4 text-gray-300">{stock.name}</td>
                  <td className="py-4 px-4 text-right font-semibold text-white">
                    ${stock.price.toFixed(2)}
                  </td>
                  <td className={`py-4 px-4 text-right font-medium ${
                    stock.change >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                  </td>
                  <td className={`py-4 px-4 text-right font-medium ${
                    stock.changePercent >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                  </td>
                  <td className="py-4 px-4 text-right text-gray-400">
                    {stock.volume.toLocaleString()}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

export default StockMarket

