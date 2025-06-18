import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home';
import { ThemeProvider } from './context/ThemeContext';
import QRManagement from './pages/qrManagement';
import ReferralManagement from './pages/ReferralManagement';
// import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/qr-management" element={<QRManagement />} />
            <Route path="/referral" element={<ReferralManagement />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
