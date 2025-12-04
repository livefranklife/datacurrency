import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  ShoppingBag,
  Search,
  Filter,
  Star,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  Heart,
  Tag,
  DollarSign,
  Package,
  ArrowRight
} from 'lucide-react'

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products', icon: ShoppingBag },
    { id: 'electronics', name: 'Electronics', icon: Package },
    { id: 'fashion', name: 'Fashion', icon: Tag },
    { id: 'food', name: 'Food & Beverage', icon: ShoppingBag },
    { id: 'books', name: 'Books', icon: Package },
    { id: 'services', name: 'Services', icon: Tag }
  ]

  const products = [
    {
      id: 1,
      name: 'Premium Smartphone',
      category: 'electronics',
      price: 899.99,
      originalPrice: 1099.99,
      rating: 4.8,
      reviews: 1245,
      image: '📱',
      seller: 'TechStore Pro',
      coinsPrice: 19780,
      discount: 18,
      trending: 'up'
    },
    {
      id: 2,
      name: 'Designer Watch',
      category: 'fashion',
      price: 450.00,
      originalPrice: 600.00,
      rating: 4.6,
      reviews: 892,
      image: '⌚',
      seller: 'Luxury Time',
      coinsPrice: 9900,
      discount: 25,
      trending: 'up'
    },
    {
      id: 3,
      name: 'Gourmet Coffee Set',
      category: 'food',
      price: 89.99,
      originalPrice: 120.00,
      rating: 4.9,
      reviews: 567,
      image: '☕',
      seller: 'Coffee Masters',
      coinsPrice: 1980,
      discount: 25,
      trending: 'up'
    },
    {
      id: 4,
      name: 'Best Seller Book Collection',
      category: 'books',
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.7,
      reviews: 1234,
      image: '📚',
      seller: 'BookWorld',
      coinsPrice: 1100,
      discount: 38,
      trending: 'down'
    },
    {
      id: 5,
      name: 'Premium Headphones',
      category: 'electronics',
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.5,
      reviews: 678,
      image: '🎧',
      seller: 'AudioTech',
      coinsPrice: 6600,
      discount: 25,
      trending: 'up'
    },
    {
      id: 6,
      name: 'Fashion Jacket',
      category: 'fashion',
      price: 199.99,
      originalPrice: 299.99,
      rating: 4.4,
      reviews: 445,
      image: '🧥',
      seller: 'StyleHub',
      coinsPrice: 4400,
      discount: 33,
      trending: 'up'
    },
    {
      id: 7,
      name: 'Organic Food Basket',
      category: 'food',
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.8,
      reviews: 789,
      image: '🥗',
      seller: 'Organic Plus',
      coinsPrice: 1760,
      discount: 20,
      trending: 'up'
    },
    {
      id: 8,
      name: 'Professional Services',
      category: 'services',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.9,
      reviews: 234,
      image: '💼',
      seller: 'ProServices',
      coinsPrice: 4400,
      discount: 20,
      trending: 'up'
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const stats = {
    totalProducts: products.length,
    activeSellers: 156,
    totalSales: 12450,
    avgRating: 4.7
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
          <h1 className="text-3xl font-bold gradient-text">Marketplace</h1>
          <p className="text-gray-400 mt-1">Buy and sell goods with Data Currency coins</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
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

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Products', value: stats.totalProducts.toString(), icon: Package, color: 'from-cyan-500 to-blue-500' },
          { label: 'Active Sellers', value: stats.activeSellers.toString(), icon: ShoppingBag, color: 'from-purple-500 to-pink-500' },
          { label: 'Total Sales', value: stats.totalSales.toLocaleString(), icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
          { label: 'Avg Rating', value: stats.avgRating.toFixed(1), icon: Star, color: 'from-yellow-500 to-orange-500' }
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
              <h3 className="text-gray-400 text-sm mb-1">{stat.label}</h3>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Categories */}
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          )
        })}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-effect rounded-xl p-6 card-hover relative"
          >
            {product.discount > 0 && (
              <div className="absolute top-4 right-4 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                -{product.discount}%
              </div>
            )}
            <div className="text-6xl mb-4 text-center">{product.image}</div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs font-medium">
                {product.category}
              </span>
              {product.trending === 'up' ? (
                <TrendingUp className="w-4 h-4 text-green-400" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-400" />
              )}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
            <p className="text-gray-400 text-sm mb-3">{product.seller}</p>
            <div className="flex items-center space-x-1 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-400 text-sm ml-1">({product.reviews})</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-2xl font-bold text-white">${product.price.toFixed(2)}</p>
                {product.originalPrice > product.price && (
                  <p className="text-gray-500 text-sm line-through">${product.originalPrice.toFixed(2)}</p>
                )}
              </div>
              <div className="text-right">
                <p className="text-cyan-400 font-semibold">{product.coinsPrice.toLocaleString()}</p>
                <p className="text-gray-500 text-xs">Coins</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Buy Now</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Heart className="w-5 h-5 text-gray-400" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-400 text-lg">No products found matching your search.</p>
        </motion.div>
      )}
    </div>
  )
}

export default Marketplace

