import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Coins,
  TrendingUp,
  Database,
  ShoppingBag,
  Share2,
  Smartphone,
  Network,
  Briefcase,
  BarChart3,
  Zap,
  ArrowRight,
  Check,
  Star,
  Users,
  Award,
  Target
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Stock Market',
      description: 'Real-time stock prices, market data, and trading information',
      color: 'from-cyan-500 to-blue-500',
      path: '/stock-market'
    },
    {
      icon: Coins,
      title: 'Coin Value',
      description: 'Track your data currency coin value and ratings',
      color: 'from-purple-500 to-pink-500',
      path: '/coin-value'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Import, export, manipulate, visualize, and predict data',
      color: 'from-green-500 to-emerald-500',
      path: '/data-management'
    },
    {
      icon: Share2,
      title: 'Data Trading',
      description: 'Sell your data and earn coins from the marketplace',
      color: 'from-orange-500 to-red-500',
      path: '/data-trading'
    },
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      description: 'Buy and sell goods with Data Currency coins',
      color: 'from-yellow-500 to-orange-500',
      path: '/marketplace'
    },
    {
      icon: Briefcase,
      title: 'Investment Plans',
      description: 'Choose investment plans and track your profits',
      color: 'from-indigo-500 to-purple-500',
      path: '/investment-plans'
    },
    {
      icon: Network,
      title: 'Network Referendum',
      description: 'Participate in network governance and voting',
      color: 'from-pink-500 to-rose-500',
      path: '/network-referendum'
    },
    {
      icon: Smartphone,
      title: 'Device Sharing',
      description: 'Connect and share data across all your devices',
      color: 'from-cyan-500 to-teal-500',
      path: '/device-sharing'
    },
    {
      icon: Users,
      title: 'User Profile',
      description: 'Track formations, interests, expenses, and ratings',
      color: 'from-blue-500 to-cyan-500',
      path: '/user-profile'
    }
  ]

  const stats = [
    { label: 'Active Users', value: '125K+', icon: Users },
    { label: 'Data Transactions', value: '2.5M+', icon: Database },
    { label: 'Total Coins', value: '50M+', icon: Coins },
    { label: 'Market Value', value: '$125M+', icon: TrendingUp }
  ]

  const benefits = [
    'Earn coins by sharing your data',
    'Track all your interests and preferences',
    'Buy and sell goods with data currency',
    'Invest and grow your portfolio',
    'Participate in network governance',
    'Connect multiple devices seamlessly'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-3xl mb-8"
            >
              <Coins className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Data Currency</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Your Data, Your Currency, Your Future
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Transform your data into valuable currency. Track interests, manage expenses, 
              trade data, invest, and earn - all in one powerful platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/login"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/dashboard"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  Explore Features
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              All Features in One Platform
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage, trade, and monetize your data
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect rounded-xl p-8 card-hover"
                >
                  <Link to={feature.path} className="block">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                    <div className="flex items-center text-cyan-400 font-medium">
                      <span>Explore</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Why Choose Data Currency?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join thousands of users who are already transforming their data into valuable currency
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-300">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Target, label: 'Goal Tracking', value: '98%', color: 'from-cyan-500 to-blue-500' },
                { icon: Award, label: 'User Satisfaction', value: '4.9/5', color: 'from-purple-500 to-pink-500' },
                { icon: Zap, label: 'Fast Processing', value: '<1s', color: 'from-green-500 to-emerald-500' },
                { icon: Star, label: 'Premium Features', value: '50+', color: 'from-yellow-500 to-orange-500' }
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect rounded-xl p-6 text-center"
                  >
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
                    <p className="text-gray-400">{stat.label}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join Data Currency today and start transforming your data into valuable currency
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/register"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg flex items-center space-x-2"
                >
                  <span>Create Account</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/login"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  Sign In
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

