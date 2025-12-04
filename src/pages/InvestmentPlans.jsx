import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  TrendingUp,
  DollarSign,
  Target,
  Award,
  Zap,
  Check,
  ArrowRight,
  Star,
  BarChart3,
  Coins
} from 'lucide-react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const InvestmentPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const plans = [
    {
      id: 'starter',
      name: 'Starter Plan',
      price: 100,
      duration: '1 Month',
      returns: '5-8%',
      features: [
        'Basic data sharing',
        'Access to coin marketplace',
        'Basic analytics',
        'Email support',
        '1GB data storage'
      ],
      color: 'from-cyan-500 to-blue-500',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional Plan',
      price: 500,
      duration: '3 Months',
      returns: '10-15%',
      features: [
        'Advanced data sharing',
        'Priority coin trading',
        'Advanced analytics',
        '24/7 support',
        '10GB data storage',
        'Data prediction tools',
        'Investment portfolio tracker'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      price: 2000,
      duration: '6 Months',
      returns: '18-25%',
      features: [
        'Unlimited data sharing',
        'VIP coin trading',
        'Premium analytics',
        'Dedicated support',
        'Unlimited storage',
        'All prediction tools',
        'Custom investment strategies',
        'API access',
        'White-label options'
      ],
      color: 'from-orange-500 to-red-500',
      popular: false
    }
  ]

  const profitData = Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    profit: 1000 + i * 200 + Math.random() * 300,
    investment: 5000 + i * 500
  }))

  const earnings = {
    totalEarned: 45230.50,
    thisMonth: 5230.25,
    activeInvestments: 5,
    roi: 18.5
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
          <h1 className="text-3xl font-bold gradient-text">Investment Plans & Profits</h1>
          <p className="text-gray-400 mt-1">Choose your investment plan and track your earnings</p>
        </div>
      </motion.div>

      {/* Earnings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Earned',
            value: `$${earnings.totalEarned.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            change: '+12.5%',
            icon: DollarSign,
            color: 'from-green-500 to-emerald-500'
          },
          {
            title: 'This Month',
            value: `$${earnings.thisMonth.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            change: '+8.3%',
            icon: TrendingUp,
            color: 'from-cyan-500 to-blue-500'
          },
          {
            title: 'Active Investments',
            value: earnings.activeInvestments.toString(),
            change: '+2',
            icon: Target,
            color: 'from-purple-500 to-pink-500'
          },
          {
            title: 'ROI',
            value: `${earnings.roi}%`,
            change: '+2.1%',
            icon: Award,
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
              <p className="text-2xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm font-medium text-green-400">{stat.change} from last month</p>
            </motion.div>
          )
        })}
      </div>

      {/* Investment Plans */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Choose Your Investment Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`glass-effect rounded-xl p-6 relative ${
                plan.popular ? 'border-2 border-cyan-400' : ''
              } card-hover`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} mb-4`}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">${plan.price}</span>
                  <span className="text-gray-400">/{plan.duration}</span>
                </div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 rounded-full">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">{plan.returns} Returns</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full py-3 bg-gradient-to-r ${plan.color} text-white rounded-lg font-semibold flex items-center justify-center space-x-2`}
              >
                <span>Select Plan</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Profit Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Profit & Earnings Trend</h3>
            <p className="text-gray-400 text-sm">Track your investment performance over time</p>
          </div>
          <BarChart3 className="w-6 h-6 text-cyan-400" />
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={profitData}>
            <defs>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorInvestment" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
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
            <Area
              type="monotone"
              dataKey="profit"
              stroke="#10b981"
              fillOpacity={1}
              fill="url(#colorProfit)"
              name="Profit"
            />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#06b6d4"
              fillOpacity={1}
              fill="url(#colorInvestment)"
              name="Investment"
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-white mb-6">How Investment & Profits Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '1',
              title: 'Choose Plan',
              description: 'Select an investment plan that suits your goals',
              icon: Target,
              color: 'from-cyan-500 to-blue-500'
            },
            {
              step: '2',
              title: 'Invest Funds',
              description: 'Deposit your investment amount securely',
              icon: DollarSign,
              color: 'from-purple-500 to-pink-500'
            },
            {
              step: '3',
              title: 'Earn Returns',
              description: 'Watch your investment grow with data currency',
              icon: TrendingUp,
              color: 'from-green-500 to-emerald-500'
            },
            {
              step: '4',
              title: 'Withdraw Profits',
              description: 'Withdraw your earnings anytime',
              icon: Coins,
              color: 'from-orange-500 to-red-500'
            }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${item.color} mb-4`}>
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.color} mb-3`}>
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

export default InvestmentPlans

