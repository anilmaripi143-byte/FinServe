import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import ProgressIndicator from './components/ProgressIndicator';
import Dashboard from './pages/Dashboard';
import Modules from './pages/Modules';
import ModuleDetail from './pages/ModuleDetail';
import Algorithms from './pages/Algorithms';
import AlgorithmDetail from './pages/AlgorithmDetail';
import Comparison from './pages/Comparison';
import Analytics from './pages/Analytics';
import TransactionIntelligence from './pages/TransactionIntelligence';
import FraudDetection from './pages/FraudDetection';
import TransactionMatching from './pages/TransactionMatching';
import TransactionNetwork from './pages/TransactionNetwork';
import CaseAssignment from './pages/CaseAssignment';
import RuleValidation from './pages/RuleValidation';
import RiskCoverage from './pages/RiskCoverage';
import TransactionRanking from './pages/TransactionRanking';
import TransactionSampling from './pages/TransactionSampling';
import About from './pages/About';
import Settings from './pages/Settings';
import LandingPage from './pages/LandingPage';
import './index.css';

function ScrollToTopAndObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Kinetic reveal-on-scroll observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll, .plate, .specimen-page-header, .landing-pillar-card, .landing-stat-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function AppShell() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div className={`app-container ${isLanding ? 'is-landing-mode' : ''}`}>
      {!isLanding && <Sidebar />}
      <main className={`main-content ${isLanding ? 'landing-main-content' : ''}`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/modules/:id" element={<ModuleDetail />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/algorithms/:id" element={<AlgorithmDetail />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/transaction-intelligence" element={<TransactionIntelligence />} />
          <Route path="/fraud-detection" element={<FraudDetection />} />
          <Route path="/transaction-matching" element={<TransactionMatching />} />
          <Route path="/transaction-network" element={<TransactionNetwork />} />
          <Route path="/case-assignment" element={<CaseAssignment />} />
          <Route path="/rule-validation" element={<RuleValidation />} />
          <Route path="/risk-coverage" element={<RiskCoverage />} />
          <Route path="/transaction-ranking" element={<TransactionRanking />} />
          <Route path="/transaction-sampling" element={<TransactionSampling />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      {!isLanding && <ProgressIndicator />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTopAndObserver />
        <AppShell />
      </Router>
    </ThemeProvider>
  );
}

export default App;
