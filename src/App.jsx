import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import StockMarket from './pages/StockMarket'
import CoinValue from './pages/CoinValue'
import DataManagement from './pages/DataManagement'
import InvestmentPlans from './pages/InvestmentPlans'
import NetworkReferendum from './pages/NetworkReferendum'
import DeviceSharing from './pages/DeviceSharing'
import UserProfile from './pages/UserProfile'
import Marketplace from './pages/Marketplace'
import DataTrading from './pages/DataTrading'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const auth = localStorage.getItem('isAuthenticated')
    setIsAuthenticated(auth === 'true')
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/stock-market"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout>
                <StockMarket />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/coin-value"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout>
                <CoinValue />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/data-management"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout>
                <DataManagement />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/investment-plans"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout>
                <InvestmentPlans />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/network-referendum"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout>
                <NetworkReferendum />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/device-sharing"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout>
                <DeviceSharing />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout>
                <UserProfile />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/marketplace"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout>
                <Marketplace />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/data-trading"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout>
                <DataTrading />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/home"} replace />} />
      </Routes>
    </Router>
  )
}

export default App

