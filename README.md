# Data Currency Website

A comprehensive React-based Data Currency platform featuring Stock Market integration, Coin Value tracking, Data Management, Investment Plans, Network Referendum, and Device Sharing capabilities.

## Features

### 🎯 Core Features
- **Dashboard**: Live data visualization with interactive charts and real-time updates
- **Stock Market**: Real-time stock prices, market data, and trading information
- **Coin Value**: Data currency coin valuation with rating system
- **Data Management**: 
  - Data Import/Export
  - Data Manipulation tools
  - Data Visualization
  - AI-powered Data Prediction
- **Investment Plans**: Multiple investment tiers with profit tracking
- **Network Referendum**: Participate in network governance and voting
- **Device Sharing**: Connect and share data across multiple devices (Mobile, Watch, Tablet, Laptop, Desktop)

### 🎨 Design Features
- Modern, professional UI with glassmorphism effects
- Framer Motion animations throughout
- Responsive design for all screen sizes
- Live data updates and real-time charts
- Interactive cards, sheets, and dashboards
- Gradient backgrounds with animated effects
- Professional business-like appearance

## Tech Stack

- **React 18** - UI framework
- **React Router** - Navigation
- **Framer Motion** - Animations
- **Recharts** - Data visualization
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
datacurrency/
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Main layout with sidebar navigation
│   │   └── ProtectedRoute.jsx  # Route protection
│   ├── pages/
│   │   ├── Login.jsx            # Login page
│   │   ├── Register.jsx         # Registration page
│   │   ├── Dashboard.jsx        # Main dashboard
│   │   ├── StockMarket.jsx      # Stock market page
│   │   ├── CoinValue.jsx        # Coin value & rating page
│   │   ├── DataManagement.jsx   # Data management tools
│   │   ├── InvestmentPlans.jsx  # Investment plans & profits
│   │   ├── NetworkReferendum.jsx # Network governance
│   │   └── DeviceSharing.jsx    # Device sharing & sync
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Usage

### Authentication
- Default login: Use any email/password (demo mode)
- After login, you'll be redirected to the dashboard

### Navigation
- Use the sidebar to navigate between different sections
- All pages feature live data updates and interactive elements

### Key Pages

1. **Dashboard**: Overview of portfolio, coin value, and recent activity
2. **Stock Market**: Real-time stock prices and market trends
3. **Coin Value**: Track coin value, ratings, and factors affecting value
4. **Data Management**: Import, export, manipulate, visualize, and predict data
5. **Investment Plans**: Choose plans and track earnings
6. **Network Referendum**: Vote on network proposals
7. **Device Sharing**: Manage connected devices and data sharing

## Features in Detail

### Data Currency System
- Coin value increases with more data sharing
- Value rating system based on multiple factors
- Real-time coin price tracking

### Stock Market Integration
- Live stock prices
- Market cap and volume tracking
- Interactive charts and tables

### Data Management
- Support for CSV, JSON, Excel formats
- Data manipulation tools
- Advanced visualization
- AI-powered predictions

### Investment & Profits
- Multiple investment tiers
- ROI tracking
- Profit visualization
- Earnings history

### Network Referendum
- Active voting on proposals
- Vote tracking and results
- Governance participation

### Device Sharing
- Multi-device support
- Real-time data sync
- Coin earnings from device sharing
- Activity tracking

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme.

### Animations
Modify Framer Motion animations in individual components.

### Data
Replace mock data with real API integrations in each page component.

## License

This project is open source and available for use.

## Support

For issues or questions, please refer to the project documentation or create an issue.

