import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Network,
  Vote,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  Award,
  BarChart3,
  MessageSquare,
  Zap
} from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'

const NetworkReferendum = () => {
  const [activeReferendums, setActiveReferendums] = useState([
    {
      id: 1,
      title: 'Increase Data Sharing Rewards',
      description: 'Proposal to increase coin rewards for data sharing by 20%',
      votesFor: 12450,
      votesAgainst: 3450,
      status: 'active',
      deadline: '2024-02-15',
      category: 'Rewards'
    },
    {
      id: 2,
      title: 'Network Upgrade Proposal',
      description: 'Upgrade network infrastructure for better performance',
      votesFor: 8920,
      votesAgainst: 2100,
      status: 'active',
      deadline: '2024-02-20',
      category: 'Infrastructure'
    },
    {
      id: 3,
      title: 'New Feature: Data Marketplace',
      description: 'Introduce a marketplace for buying and selling data',
      votesFor: 15670,
      votesAgainst: 1230,
      status: 'active',
      deadline: '2024-02-25',
      category: 'Features'
    }
  ])

  const [completedReferendums] = useState([
    {
      id: 4,
      title: 'Coin Value Adjustment',
      description: 'Adjust coin value calculation algorithm',
      result: 'passed',
      votesFor: 23450,
      votesAgainst: 5670,
      completedDate: '2024-01-10'
    },
    {
      id: 5,
      title: 'Security Enhancement',
      description: 'Implement enhanced security measures',
      result: 'passed',
      votesFor: 28900,
      votesAgainst: 2100,
      completedDate: '2024-01-05'
    }
  ])

  const networkStats = {
    totalParticipants: 45678,
    activeVoters: 23456,
    proposalsThisMonth: 12,
    approvalRate: 78.5
  }

  const voteData = [
    { name: 'For', value: 36840, color: '#10b981' },
    { name: 'Against', value: 6780, color: '#ef4444' },
    { name: 'Abstain', value: 3456, color: '#6b7280' }
  ]

  const categoryData = [
    { category: 'Rewards', count: 5 },
    { category: 'Infrastructure', count: 3 },
    { category: 'Features', count: 4 },
    { category: 'Governance', count: 2 }
  ]

  const handleVote = (referendumId, vote) => {
    // Handle voting logic
    console.log(`Voting ${vote} on referendum ${referendumId}`)
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
          <h1 className="text-3xl font-bold gradient-text">Network Referendum</h1>
          <p className="text-gray-400 mt-1">Participate in network governance and decision making</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-400">Live Voting</span>
        </div>
      </motion.div>

      {/* Network Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Participants',
            value: networkStats.totalParticipants.toLocaleString(),
            icon: Users,
            color: 'from-cyan-500 to-blue-500'
          },
          {
            title: 'Active Voters',
            value: networkStats.activeVoters.toLocaleString(),
            icon: Vote,
            color: 'from-purple-500 to-pink-500'
          },
          {
            title: 'Proposals This Month',
            value: networkStats.proposalsThisMonth.toString(),
            icon: Network,
            color: 'from-green-500 to-emerald-500'
          },
          {
            title: 'Approval Rate',
            value: `${networkStats.approvalRate}%`,
            icon: TrendingUp,
            color: 'from-orange-500 to-red-500'
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

      {/* Active Referendums */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Active Referendums</h2>
        <div className="space-y-4">
          {activeReferendums.map((referendum, index) => {
            const totalVotes = referendum.votesFor + referendum.votesAgainst
            const forPercentage = (referendum.votesFor / totalVotes) * 100
            const againstPercentage = (referendum.votesAgainst / totalVotes) * 100

            return (
              <motion.div
                key={referendum.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        {referendum.category}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Active</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{referendum.title}</h3>
                    <p className="text-gray-400 mb-4">{referendum.description}</p>
                  </div>
                </div>

                {/* Vote Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Voting Progress</span>
                    <span className="text-sm text-gray-400">{totalVotes.toLocaleString()} votes</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className="flex h-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${forPercentage}%` }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="bg-gradient-to-r from-green-500 to-emerald-500"
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${againstPercentage}%` }}
                        transition={{ delay: index * 0.2 + 0.1, duration: 0.5 }}
                        className="bg-gradient-to-r from-red-500 to-orange-500"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-300">
                        For: {referendum.votesFor.toLocaleString()} ({forPercentage.toFixed(1)}%)
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-300">
                        Against: {referendum.votesAgainst.toLocaleString()} ({againstPercentage.toFixed(1)}%)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Deadline: {referendum.deadline}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleVote(referendum.id, 'against')}
                      className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors font-medium"
                    >
                      Vote Against
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleVote(referendum.id, 'for')}
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium"
                    >
                      Vote For
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-effect rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-6">Vote Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={voteData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {voteData.map((entry, index) => (
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

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-effect rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-6">Proposals by Category</h3>
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
              <Bar dataKey="count" fill="#06b6d4" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Completed Referendums */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-white mb-6">Recently Completed</h3>
        <div className="space-y-4">
          {completedReferendums.map((referendum, index) => (
            <motion.div
              key={referendum.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <CheckCircle className={`w-5 h-5 ${
                    referendum.result === 'passed' ? 'text-green-400' : 'text-red-400'
                  }`} />
                  <h4 className="text-lg font-bold text-white">{referendum.title}</h4>
                </div>
                <p className="text-gray-400 text-sm mb-2">{referendum.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>For: {referendum.votesFor.toLocaleString()}</span>
                  <span>Against: {referendum.votesAgainst.toLocaleString()}</span>
                  <span>Completed: {referendum.completedDate}</span>
                </div>
              </div>
              <div className={`px-4 py-2 rounded-lg ${
                referendum.result === 'passed'
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-red-500/20 text-red-400'
              } font-semibold`}>
                {referendum.result === 'passed' ? 'Passed' : 'Rejected'}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default NetworkReferendum

