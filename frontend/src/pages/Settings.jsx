import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, Moon, Monitor, Palette, Sliders, Database, 
  CheckCircle2, RefreshCw, Sparkles, Terminal, Activity,
  RotateCcw, Info
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Plate from '../components/Plate';

export default function Settings() {
  const { theme, setTheme, toggleTheme, isDark } = useTheme();
  const [currency, setCurrency] = useState(() => localStorage.getItem('finserve_currency') || 'INR');
  const [density, setDensity] = useState(() => localStorage.getItem('finserve_density') || 'standard');
  const [resetMessage, setResetMessage] = useState(null);

  const handleCurrencyChange = (val) => {
    setCurrency(val);
    localStorage.setItem('finserve_currency', val);
  };

  const handleDensityChange = (val) => {
    setDensity(val);
    localStorage.setItem('finserve_density', val);
  };

  const handleResetDefaults = () => {
    setTheme('dark');
    setCurrency('INR');
    setDensity('standard');
    localStorage.removeItem('finserve_sidebar_width');
    localStorage.removeItem('finserve_currency');
    localStorage.removeItem('finserve_density');
    document.documentElement.style.setProperty('--sidebar-w', '340px');
    setResetMessage('Preferences have been reset to factory defaults.');
    setTimeout(() => setResetMessage(null), 3500);
  };

  return (
    <div className="page-container">
      <PageHeader 
        eyebrow="System — Customization"
        title="Settings & Preferences"
        subtitle="Configure application theme, visual appearance, data formatting, and interface density."
        meta={
          <>
            <span className="badge badge-secondary font-mono">
              ACTIVE THEME: {theme.toUpperCase()}
            </span>
            <span>•</span>
            <span className="badge badge-secondary font-mono">
              CURRENCY: {currency}
            </span>
            <span>•</span>
            <span className="badge badge-secondary font-mono">
              BUILD: v1.0.0
            </span>
          </>
        }
      />

      {resetMessage && (
        <div className="alert-card success mb-6 p-4 border border-brass rounded bg-ink-2 flex items-center gap-3">
          <CheckCircle2 size={18} className="text-brass shrink-0" />
          <span className="font-mono text-sm text-paper">{resetMessage}</span>
        </div>
      )}

      {/* PLATE 1: APPEARANCE & THEME SWITCHING */}
      <Plate
        number={1}
        title="Theme Mode (Dark / Light)"
        description="Switch between FinServe's signature Dark Specimen palette and the clean, high-contrast Light Banking theme."
        tag="APPEARANCE"
        tagVariant="brass"
        watermark="01"
      >
        <div className="theme-selection-grid">
          {/* DARK MODE CARD */}
          <div 
            className={`theme-card ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
            role="button"
            tabIndex={0}
          >
            <div className="theme-card-preview dark-preview">
              <div className="preview-header">
                <span className="preview-dot"></span>
                <span className="preview-dot"></span>
                <span className="preview-dot"></span>
                <span className="preview-title font-mono text-xs">FINSERVE DARK</span>
              </div>
              <div className="preview-body">
                <div className="preview-sidebar-mini"></div>
                <div className="preview-content-mini">
                  <div className="preview-line line-accent"></div>
                  <div className="preview-line line-text"></div>
                  <div className="preview-line line-subtle"></div>
                </div>
              </div>
            </div>

            <div className="theme-card-footer">
              <div className="flex items-center gap-2">
                <Moon size={18} className="text-brass" />
                <div>
                  <h4 className="theme-card-name font-serif">Dark Specimen Mode</h4>
                  <p className="theme-card-desc text-xs text-dim">
                    Deep obsidian panels with kinetic neon accents for reduced eye fatigue.
                  </p>
                </div>
              </div>
              {theme === 'dark' ? (
                <span className="theme-active-badge badge badge-brass">ACTIVE</span>
              ) : (
                <button 
                  type="button" 
                  className="btn btn-secondary btn-sm"
                  onClick={(e) => { e.stopPropagation(); setTheme('dark'); }}
                >
                  Apply
                </button>
              )}
            </div>
          </div>

          {/* LIGHT MODE CARD */}
          <div 
            className={`theme-card ${theme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}
            role="button"
            tabIndex={0}
          >
            <div className="theme-card-preview light-preview">
              <div className="preview-header">
                <span className="preview-dot"></span>
                <span className="preview-dot"></span>
                <span className="preview-dot"></span>
                <span className="preview-title font-mono text-xs">FINSERVE LIGHT</span>
              </div>
              <div className="preview-body">
                <div className="preview-sidebar-mini"></div>
                <div className="preview-content-mini">
                  <div className="preview-line line-accent"></div>
                  <div className="preview-line line-text"></div>
                  <div className="preview-line line-subtle"></div>
                </div>
              </div>
            </div>

            <div className="theme-card-footer">
              <div className="flex items-center gap-2">
                <Sun size={18} className="text-clay" />
                <div>
                  <h4 className="theme-card-name font-serif">Light Banking Mode</h4>
                  <p className="theme-card-desc text-xs text-dim">
                    Crisp alabaster surfaces and high-contrast typography for day illumination.
                  </p>
                </div>
              </div>
              {theme === 'light' ? (
                <span className="theme-active-badge badge badge-brass">ACTIVE</span>
              ) : (
                <button 
                  type="button" 
                  className="btn btn-secondary btn-sm"
                  onClick={(e) => { e.stopPropagation(); setTheme('light'); }}
                >
                  Apply
                </button>
              )}
            </div>
          </div>
        </div>

        {/* QUICK THEME TOGGLE CONTROL */}
        <div className="theme-toggle-strip mt-6 p-4 rounded bg-ink-2 border border-line flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="kpi-icon" style={{ width: 40, height: 40 }}>
              {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} className="text-clay" />}
            </div>
            <div>
              <span className="font-mono text-sm font-semibold text-paper block">
                Instant Mode Switcher
              </span>
              <span className="text-xs text-dim block">
                Toggle seamlessly between Dark and Light mode without reloading.
              </span>
            </div>
          </div>

          <div className="theme-switch-pill-container">
            <button
              type="button"
              className={`theme-pill-btn ${theme === 'dark' ? 'selected' : ''}`}
              onClick={() => setTheme('dark')}
            >
              <Moon size={14} />
              <span>Dark</span>
            </button>
            <button
              type="button"
              className={`theme-pill-btn ${theme === 'light' ? 'selected' : ''}`}
              onClick={() => setTheme('light')}
            >
              <Sun size={14} />
              <span>Light</span>
            </button>
          </div>
        </div>
      </Plate>

      {/* PLATE 2: FINANCIAL FORMATTING PREFERENCES */}
      <Plate
        number={2}
        title="Financial Display & Regional Formatting"
        description="Choose the primary currency symbol and numerical representation across all transaction analytics."
        tag="LOCALIZATION"
        tagVariant="clay"
        watermark="02"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="font-mono text-xs uppercase text-dim mb-2 block">
              Default Currency Symbol
            </label>
            <div className="currency-selector-grid">
              {[
                { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
                { code: 'USD', symbol: '$', name: 'US Dollar' },
                { code: 'EUR', symbol: '€', name: 'Euro' },
                { code: 'GBP', symbol: '£', name: 'British Pound' }
              ].map(c => (
                <div 
                  key={c.code}
                  className={`currency-card ${currency === c.code ? 'selected' : ''}`}
                  onClick={() => handleCurrencyChange(c.code)}
                  role="button"
                  tabIndex={0}
                >
                  <span className="currency-symbol font-serif">{c.symbol}</span>
                  <div className="currency-info">
                    <span className="currency-code font-mono text-xs font-bold">{c.code}</span>
                    <span className="currency-name text-xs text-dim block">{c.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="font-mono text-xs uppercase text-dim mb-2 block">
              Table & Layout Density
            </label>
            <div className="density-selector-grid">
              {[
                { id: 'standard', name: 'Standard Comfortable', desc: 'Spacious padding for optimal audit scanning' },
                { id: 'compact', name: 'Compact Analyst', desc: 'Higher information density for complex ledgers' }
              ].map(d => (
                <div 
                  key={d.id}
                  className={`density-card ${density === d.id ? 'selected' : ''}`}
                  onClick={() => handleDensityChange(d.id)}
                  role="button"
                  tabIndex={0}
                >
                  <span className="font-mono text-xs font-semibold text-paper block mb-1">
                    {d.name}
                  </span>
                  <span className="text-xs text-dim block">{d.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Plate>

      {/* PLATE 3: STORAGE & SYSTEM DIAGNOSTICS */}
      <Plate
        number={3}
        title="Diagnostics & Reset"
        description="Verify backend microservice status or reset all cached layout configurations."
        tag="SYSTEM"
        tagVariant="focus"
        watermark="03"
      >
        <div className="system-diagnostics-row flex flex-wrap items-center justify-between gap-4 p-4 rounded bg-ink-2 border border-line">
          <div>
            <span className="font-mono text-sm font-semibold text-paper block">
              Reset Application Preferences
            </span>
            <span className="text-xs text-dim block">
              Restore default sidebar width (340px), default Dark theme, and standard formatting.
            </span>
          </div>

          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={handleResetDefaults}
          >
            <RotateCcw size={14} />
            <span>Reset To Defaults</span>
          </button>
        </div>
      </Plate>
    </div>
  );
}
