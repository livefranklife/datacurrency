# 💰 Data Currency Platform

> **Transform Your Data Into Valuable Currency** - A comprehensive web platform for data monetization, stock market integration, investment management, and network governance.

🌐 **Live Website**: [https://datacurrency.vercel.app/login](https://datacurrency.vercel.app/login)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Features in Detail](#features-in-detail)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**Data Currency** is a cutting-edge web application that revolutionizes how users interact with, monetize, and manage their personal data. Built with modern React technologies, this platform provides a comprehensive ecosystem where data becomes a valuable asset that can be traded, invested, and utilized across multiple devices.

### What Makes This Platform Unique?

- **Data Monetization**: Users can earn coins by sharing their data, creating a new revenue stream from personal information
- **Comprehensive Tracking**: Monitor interests, expenses, shopping habits, movie preferences, and brand interactions
- **Investment Opportunities**: Multiple investment tiers with profit tracking and ROI visualization
- **Stock Market Integration**: Real-time stock prices and market data analysis
- **Network Governance**: Participate in network decisions through referendum voting
- **Multi-Device Sync**: Seamlessly share and sync data across smartphones, watches, tablets, laptops, and desktops

---

## 🌐 Live Demo

**🔗 Access the live application**: [https://datacurrency.vercel.app/login](https://datacurrency.vercel.app/login)

### Quick Start
1. Visit the live website using the link above
2. Click "Get Started" or navigate to the registration page
3. Create an account (demo mode - any email/password works)
4. Explore all features from the dashboard

---

## ✨ Key Features

### 🏠 **Landing Page**
- Modern hero section with animated backgrounds
- Feature showcase with interactive cards
- Platform statistics and benefits
- Call-to-action sections

### 📊 **Dashboard**
- Real-time portfolio overview
- Live data visualization with interactive charts
- Recent activity feed
- Quick action buttons
- Performance metrics and analytics

### 📈 **Stock Market**
- Real-time stock prices and market data
- Interactive charts and graphs
- Market cap and volume tracking
- Top stocks table with live updates
- Market performance analytics (24h trends)

### 💎 **Coin Value & Rating System**
- Current coin value tracking
- Comprehensive value rating system (5-factor analysis)
- Price history charts (30-day trends)
- Value factors breakdown (Data Sharing, Network Activity, Market Demand, Referendum Votes)
- How coin value increases guide

### 💾 **Data Management**
- **Data Import**: Upload CSV, JSON, Excel, XML files
- **Data Export**: Multiple format support with customizable settings
- **Data Manipulation**: Filter, sort, transform, merge, clean, and aggregate tools
- **Data Visualization**: Advanced charts and graphs
- **Data Prediction**: AI-powered forecasting based on historical data

### 💼 **Investment Plans & Profits**
- **Starter Plan**: $100/month - 5-8% returns
- **Professional Plan**: $500/3 months - 10-15% returns
- **Enterprise Plan**: $2000/6 months - 18-25% returns
- Profit tracking and earnings visualization
- ROI analytics and performance metrics

### 🗳️ **Network Referendum**
- Active voting on network proposals
- Real-time vote tracking with progress bars
- Network statistics (participants, voters, proposals)
- Vote distribution charts
- Completed referendum history

### 📱 **Device Sharing**
- Multi-device support (Mobile, Watch, Tablet, Laptop, Desktop)
- Real-time data synchronization
- Device-specific data sharing tracking
- Coin earnings per device
- 24-hour activity charts

### 🛒 **Marketplace**
- Buy and sell goods with Data Currency coins
- Product categories: Electronics, Fashion, Food, Books, Services
- Product ratings and reviews
- Discount badges and trending indicators
- Search and filter functionality

### 👤 **User Profile & Data Tracking**
- **Formations & Skills**: Track expertise levels (Data Trader, Market Analyst, Investor, Data Collector)
- **Interests Tracking**: 
  - Movies watched (245+ with genre breakdown)
  - Shopping items (189+ with categories)
  - Brands followed (156+ brands)
  - Entertainment preferences
- **Expense Management**: Monthly expense charts and category breakdowns
- **Ratings & Reviews**: Product/service ratings with star system
- **Shares & Trading**: Portfolio tracking and share management

### 💱 **Data Trading & Selling**
- Upload and monetize data packages
- Browse data marketplace
- Sell shopping behavior data
- Sell movie watching analytics
- Sell brand interest data
- Sell expense tracking data
- Trading analytics and earnings dashboard

---

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.2.0** - Modern UI library for building interactive interfaces
- **React Router DOM 6.20.0** - Client-side routing and navigation

### Styling & UI
- **Tailwind CSS 3.3.6** - Utility-first CSS framework
- **Framer Motion 10.16.16** - Production-ready motion library for animations
- **Lucide React 0.294.0** - Beautiful icon library

### Data Visualization
- **Recharts 2.10.3** - Composable charting library built on React components

### Build Tools
- **Vite 5.0.8** - Next-generation frontend build tool
- **PostCSS 8.4.32** - CSS post-processor
- **Autoprefixer 10.4.16** - CSS vendor prefixer

### Development
- **TypeScript Support** - Type definitions for React and React DOM

---

## 📁 Project Structure

```
datacurrency/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── Layout.jsx     # Main layout with sidebar navigation
│   │   └── ProtectedRoute.jsx  # Authentication route protection
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Landing page
│   │   ├── Login.jsx      # Login page
│   │   ├── Register.jsx  # Registration page
│   │   ├── Dashboard.jsx  # Main dashboard
│   │   ├── StockMarket.jsx      # Stock market page
│   │   ├── CoinValue.jsx        # Coin value & rating page
│   │   ├── DataManagement.jsx  # Data management tools
│   │   ├── DataTrading.jsx     # Data trading & selling
│   │   ├── Marketplace.jsx     # Buy/sell marketplace
│   │   ├── InvestmentPlans.jsx # Investment plans & profits
│   │   ├── NetworkReferendum.jsx # Network governance
│   │   ├── DeviceSharing.jsx   # Device sharing & sync
│   │   └── UserProfile.jsx     # User profile & tracking
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles and Tailwind imports
├── .gitignore            # Git ignore rules
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── README.md             # Project documentation
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Step 1: Clone the Repository

```bash
git clone https://github.com/livefranklife/datacurrency.git
cd datacurrency
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Step 4: Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Step 5: Preview Production Build

```bash
npm run preview
```

---

## 📖 Features in Detail

### 🎨 Design & User Experience

- **Glassmorphism UI**: Modern glass-effect design with backdrop blur
- **Smooth Animations**: Framer Motion animations throughout the application
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop
- **Interactive Charts**: Real-time data visualization with Recharts
- **Gradient Backgrounds**: Animated gradient backgrounds with floating elements
- **Professional Aesthetics**: Business-grade design with attention to detail

### 💰 Data Currency System

The platform implements a unique data currency system where:

- **Coin Value**: Increases based on data sharing activity
- **Rating System**: 5-factor rating (Data Quality, Network Speed, Security, User Satisfaction, Market Stability)
- **Value Factors**: 
  - Data Sharing (45%)
  - Network Activity (30%)
  - Market Demand (15%)
  - Referendum Votes (10%)

### 📊 Data Analytics

- **Real-time Updates**: Live data updates every 2-3 seconds
- **Historical Tracking**: 30-day historical data visualization
- **Predictive Analytics**: AI-powered forecasting
- **Performance Metrics**: Comprehensive analytics dashboard

### 🔐 Security & Authentication

- **Protected Routes**: Authentication-based route protection
- **Session Management**: Local storage-based session handling
- **Secure Navigation**: Protected access to all features

---

## 🖼️ Screenshots

### Key Pages

- **Landing Page**: Modern hero section with feature showcase
- **Dashboard**: Comprehensive overview with live charts
- **Stock Market**: Real-time stock prices and market data
- **Coin Value**: Value tracking and rating system
- **Data Management**: Import, export, manipulate, visualize, predict
- **Marketplace**: Buy/sell goods with coins
- **User Profile**: Formations, interests, expenses, ratings

---

## 🌍 Deployment

### Vercel Deployment

The application is currently deployed on Vercel:

**Live URL**: [https://datacurrency.vercel.app/login](https://datacurrency.vercel.app/login)

### Deployment Steps

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on every push to main branch

### Other Deployment Options

- **Netlify**: Similar process, connect GitHub repo
- **AWS Amplify**: Connect repository and configure build settings
- **GitHub Pages**: Use GitHub Actions for automated deployment

---

## 🎯 Use Cases

### For Individual Users
- Monetize personal data by sharing it securely
- Track and manage expenses and interests
- Invest in data currency and earn profits
- Participate in network governance
- Sync data across multiple devices

### For Businesses
- Access valuable user data through marketplace
- Analyze consumer behavior patterns
- Market research and analytics
- Data-driven decision making

### For Investors
- Invest in data currency plans
- Track ROI and earnings
- Monitor market trends
- Portfolio management

---

## 🔮 Future Enhancements

- [ ] Real API integrations for stock market data
- [ ] Blockchain integration for coin transactions
- [ ] Advanced AI/ML predictions
- [ ] Mobile app (React Native)
- [ ] Social features and community
- [ ] Advanced security features
- [ ] Multi-language support
- [ ] Dark/Light theme toggle

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**livefranklife**

- GitHub: [@livefranklife](https://github.com/livefranklife)
- Portfolio: [franklinportfolio.vercel.app](https://franklinportfolio.vercel.app)
- LinkedIn: [franklin-nagralkar](https://linkedin.com/in/franklin-nagralkar)

---

## 📞 Support

For support, email support@datacurrency.com or create an issue in the repository.

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Vercel for hosting platform
- All contributors and users of this project

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

[Live Website](https://datacurrency.vercel.app/login) • [Report Bug](https://github.com/livefranklife/datacurrency/issues) • [Request Feature](https://github.com/livefranklife/datacurrency/issues)

Made with ❤️ by [livefranklife](https://github.com/livefranklife)

</div>
