import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { 
  ArrowRight, ShieldCheck, Zap, Network, Layers, Activity, 
  CheckCircle2, Terminal, Sun, Moon, Code2, GitCompare, 
  ChevronRight, Sparkles, Cpu, Lock, Database, Search, 
  ShieldAlert, Shuffle, Crosshair, BarChart3, ExternalLink
} from 'lucide-react';
import { fetchDashboard } from '../services/api';

export default function LandingPage() {
  const { theme, toggleTheme, isDark, setTheme } = useTheme();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalAlgorithms: 30,
    implemented: 29,
    modules: 6,
    implementationCoverage: 96
  });

  useEffect(() => {
    fetchDashboard().then(data => {
      if (data) setStats(data);
    }).catch(() => {});
  }, []);

  const pillars = [
    {
      module: "M1",
      co: "CO1",
      title: "Linear String Algorithms",
      desc: "Zero-backtracking pattern matching over transaction streams and dictionary-based multi-keyword fraud screening.",
      algorithms: ["KMP Search", "Aho-Corasick Automaton", "Z-Function", "Rabin-Karp"],
      complexity: "O(N + M + Z)",
      accent: "brass",
      path: "/transaction-intelligence",
      icon: Search
    },
    {
      module: "M2",
      co: "CO2",
      title: "Suffix Structures & Indexing",
      desc: "Full-text indexing of historical bank ledgers, LCP Kasai clustering, and constant-time substring verification.",
      algorithms: ["Suffix Array", "SA-IS Linear Sort", "Kasai LCP", "Suffix Automaton"],
      complexity: "O(N) Construction",
      accent: "brass",
      path: "/modules/M2",
      icon: Database
    },
    {
      module: "M3",
      co: "CO3",
      title: "Dynamic Programming Reconciliation",
      desc: "Tolerant string reconciliation handling typographic slips, character transpositions, and matrix portfolio optimization.",
      algorithms: ["Levenshtein", "Damerau-Levenshtein", "Weighted Edit Distance", "Bitmask DP"],
      complexity: "O(M × N)",
      accent: "clay",
      path: "/transaction-matching",
      icon: GitCompare
    },
    {
      module: "M4",
      co: "CO4",
      title: "Network Flow & Clearing Bottlenecks",
      desc: "Modeling interbank liquidity conduits with maximum flow augmentations and identifying single-point-of-failure min-cuts.",
      algorithms: ["Dinic's Algorithm", "Edmonds-Karp", "Min-Cut Bottlenecks", "Bipartite Matching"],
      complexity: "O(V² · E)",
      accent: "clay",
      path: "/transaction-network",
      icon: Network
    },
    {
      module: "M5",
      co: "CO5",
      title: "NP-Completeness & Risk Reductions",
      desc: "Validating regulatory compliance constraints via 3-SAT reductions and computing 2-approximation risk surveillance covers.",
      algorithms: ["3-SAT Solver", "3-SAT → CLIQUE", "CLIQUE → IS → VC", "Vertex Cover 2-Approx"],
      complexity: "Polynomial Reductions",
      accent: "sage",
      path: "/rule-validation",
      icon: ShieldAlert
    },
    {
      module: "M6",
      co: "CO6",
      title: "Randomized & Parallel Processing",
      desc: "Pivoted transaction ranking avoiding worst-case quadratic degradation, uniform stream sampling, and parallel scans.",
      algorithms: ["Randomized QuickSort", "Reservoir Sampling (Alg R)", "Miller-Rabin", "Blelloch Scan"],
      complexity: "Expected O(N log N)",
      accent: "focus",
      path: "/transaction-ranking",
      icon: Zap
    }
  ];

  return (
    <div className="landing-page-root">
      {/* TOP GLOWING AMBIENT BACKGROUND */}
      <div className="landing-ambient-glow"></div>

      {/* TOP NAVBAR */}
      <header className="landing-navbar">
        <div className="landing-nav-container">
          <Link to="/" className="landing-brand">
            <span className="brand-logo-mark font-serif">F</span>
            <div className="landing-brand-text">
              <span className="landing-brand-name font-serif italic font-bold">FinServe</span>
              <span className="landing-brand-tag font-mono text-xs uppercase text-dim">Intelligence</span>
            </div>
          </Link>

          <nav className="landing-nav-links">
            <Link to="/dashboard" className="landing-nav-item">Console</Link>
            <Link to="/modules" className="landing-nav-item">Modules (CO1–CO6)</Link>
            <Link to="/algorithms" className="landing-nav-item">Algorithms Directory</Link>
            <Link to="/comparison" className="landing-nav-item">Benchmark Comparison</Link>
            <Link to="/settings" className="landing-nav-item">Settings</Link>
          </nav>

          <div className="landing-nav-actions">
            <div className="nav-theme-switcher" role="group" aria-label="Theme mode switcher">
              <button 
                type="button" 
                className={`nav-theme-btn ${isDark ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
                title="Switch to Dark Specimen Mode"
                aria-label="Dark mode"
              >
                <Moon size={13} />
                <span>DARK</span>
              </button>
              <button 
                type="button" 
                className={`nav-theme-btn ${!isDark ? 'active' : ''}`}
                onClick={() => setTheme('light')}
                title="Switch to Light Banking Mode"
                aria-label="Light mode"
              >
                <Sun size={13} />
                <span>LIGHT</span>
              </button>
            </div>

            <button 
              type="button" 
              className="btn btn-primary landing-launch-btn"
              onClick={() => navigate('/dashboard')}
            >
              <span>Launch Console</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="landing-hero-section">
        <div className="landing-hero-content">
          <div className="landing-badge-pill font-mono">
            <Sparkles size={13} className="text-brass" />
            <span>ADVANCED ALGORITHMIC ARCHITECTURE · CO1 TO CO6</span>
            <span className="status-dot pulsing"></span>
          </div>

          <h1 className="landing-hero-title font-serif italic">
            Theoretical Rigor Meets High-Volume Banking
          </h1>

          <p className="landing-hero-desc">
            FinServe unites <strong>30 fundamental Data Structures & Algorithms</strong>—spanning 
            linear-time string automata, maximal flow networks, polynomial NP reductions, and 
            randomized sampling—into an enterprise analytics platform running on Spring Boot 3.1 & React 19.
          </p>

          <div className="landing-hero-actions">
            <button 
              type="button" 
              className="btn btn-primary btn-lg landing-hero-cta"
              onClick={() => navigate('/dashboard')}
            >
              <span>Enter Analytics Console</span>
              <ArrowRight size={18} />
            </button>

            <Link to="/modules" className="btn btn-secondary btn-lg">
              <Layers size={18} />
              <span>Explore 6 Modules</span>
            </Link>

            <Link to="/about" className="btn btn-tertiary btn-lg">
              <Terminal size={18} />
              <span>System Spec</span>
            </Link>
          </div>

          {/* REALTIME TELEMETRY STRIP */}
          <div className="landing-stats-grid">
            <div className="landing-stat-card">
              <span className="landing-stat-number font-mono">{stats.totalAlgorithms}</span>
              <span className="landing-stat-label font-mono uppercase text-dim">DSA Algorithms</span>
            </div>
            <div className="landing-stat-card">
              <span className="landing-stat-number font-mono text-brass">{stats.modules}</span>
              <span className="landing-stat-label font-mono uppercase text-dim">Curriculum Modules (CO1–CO6)</span>
            </div>
            <div className="landing-stat-card">
              <span className="landing-stat-number font-mono text-clay">{stats.implementationCoverage}%</span>
              <span className="landing-stat-label font-mono uppercase text-dim">Operational Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE 6 MODULE PILLARS */}
      <section className="landing-pillars-section">
        <div className="landing-section-header">
          <div className="header-eyebrow font-mono text-xs uppercase tracking-wider text-brass mb-2">
            <span className="eyebrow-line"></span> CURRICULUM FOUNDATIONS
          </div>
          <h2 className="landing-section-title font-serif italic">
            Six Specialized Algorithmic Disciplines
          </h2>
          <p className="landing-section-subtitle text-dim max-w-3xl">
            Each module addresses a distinct computational bottleneck in enterprise banking, 
            backed by formal proofs, rigorous complexity boundaries, and live REST endpoints.
          </p>
        </div>

        <div className="landing-pillars-grid">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className={`landing-pillar-card group-accent-${p.accent}`}
                onClick={() => navigate(p.path)}
                role="button"
                tabIndex={0}
              >
                <div className="pillar-card-top">
                  <div className="pillar-badge-box">
                    <span className="pillar-module font-mono font-bold">{p.module}</span>
                    <span className="pillar-co font-mono text-xs text-dim">[{p.co}]</span>
                  </div>
                  <span className="pillar-complexity font-mono text-xs">{p.complexity}</span>
                </div>

                <div className="pillar-icon-box my-3">
                  <Icon size={24} />
                </div>

                <h3 className="pillar-title font-serif">{p.title}</h3>
                <p className="pillar-desc text-sm text-dim">{p.desc}</p>

                <div className="pillar-algos-list mt-3">
                  {p.algorithms.map((algo, aIdx) => (
                    <span key={aIdx} className="pillar-algo-tag font-mono text-xs">
                      {algo}
                    </span>
                  ))}
                </div>

                <div className="pillar-card-footer mt-4 pt-3 border-t border-line flex items-center justify-between">
                  <span className="font-mono text-xs text-dim">Launch Module</span>
                  <ChevronRight size={16} className="pillar-arrow text-brass" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ARCHITECTURAL HIGHLIGHT & WORKFLOW */}
      <section className="landing-arch-section">
        <div className="landing-arch-card">
          <div className="arch-card-left">
            <div className="header-eyebrow font-mono text-xs uppercase tracking-wider text-clay mb-2">
              <span className="eyebrow-line" style={{ background: 'var(--clay)' }}></span> FULL-STACK INTEGRATION
            </div>
            <h3 className="arch-title font-serif italic text-3xl mb-3">
              Production-Grade Pipeline Architecture
            </h3>
            <p className="text-dim text-sm mb-4">
              All algorithms run natively in high-performance Java 26 compiled bytecode. 
              The Spring Boot REST controller manages JSON validation, CSV persistence for audit compliance, 
              and CORS negotiation with React 19 for instantaneous UI response.
            </p>

            <ul className="arch-feature-list font-mono text-xs">
              <li><CheckCircle2 size={14} className="text-brass inline mr-2" /> REST Controllers at /api/banking/*</li>
              <li><CheckCircle2 size={14} className="text-brass inline mr-2" /> Microsecond in-memory algorithmic execution</li>
              <li><CheckCircle2 size={14} className="text-brass inline mr-2" /> Regulatory audit logging via CsvStorageService</li>
              <li><CheckCircle2 size={14} className="text-brass inline mr-2" /> Full test harness for M1 through M6</li>
            </ul>

            <button 
              type="button" 
              className="btn btn-primary mt-6"
              onClick={() => navigate('/dashboard')}
            >
              <span>Explore Live Telemetry</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="arch-card-right font-mono text-xs">
            <div className="arch-terminal-header">
              <span className="terminal-dot"></span>
              <span className="terminal-dot" style={{ background: '#e0a15c' }}></span>
              <span className="terminal-dot" style={{ background: '#e8836b' }}></span>
              <span className="arch-terminal-title ml-2">FINSERVE PIPELINE TRACE</span>
            </div>
            <div className="arch-terminal-code">
              <p className="text-dim">// 1. Frontend Ingestion</p>
              <p><span className="text-brass">POST</span> /api/banking/transactions/search</p>
              <p className="text-dim mt-2">// 2. Service Dispatch</p>
              <p><span className="text-clay">BankingAlgorithmService</span>.search(request)</p>
              <p className="text-dim mt-2">// 3. KMP Linear Execution</p>
              <p>KMP.search(text, pattern) <span className="text-focus">→ O(N + M)</span></p>
              <p className="text-dim mt-2">// 4. Regulatory Audit Persistence</p>
              <p>CsvStorageService.save("data/csv/search.csv") <span className="text-brass">✓ OK</span></p>
              <p className="text-dim mt-2">// 5. Result Dispatch</p>
              <p className="text-paper">{`{ "found": true, "position": 4, "algorithm": "KMP" }`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION FOOTER BANNER */}
      <section className="landing-cta-banner">
        <h2 className="landing-cta-title font-serif italic text-4xl mb-3">
          Ready to inspect the live analytics?
        </h2>
        <p className="text-dim text-base max-w-2xl mx-auto mb-6">
          Access the real-time operational dashboard, test all 30 algorithms interactively, 
          and review academic benchmarks directly in the platform.
        </p>
        <button 
          type="button" 
          className="btn btn-primary btn-lg"
          onClick={() => navigate('/dashboard')}
        >
          <span>Open FinServe Dashboard</span>
          <ArrowRight size={18} />
        </button>
      </section>

      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="landing-footer-container font-mono text-xs text-dim flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="footer-dot shrink-0"></span>
            <span>FinServe Intelligence Platform · v1.0.0</span>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="hover:text-paper">Console</Link>
            <Link to="/modules" className="hover:text-paper">Modules</Link>
            <Link to="/algorithms" className="hover:text-paper">Algorithms</Link>
            <Link to="/settings" className="hover:text-paper">Settings</Link>
            <Link to="/about" className="hover:text-paper">About</Link>
          </div>

          <div>
            <span>Spring Boot · React 19 · Vite</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
