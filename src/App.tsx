import React, { useState, useEffect } from 'react';
import { AgentConfig, TelecomPackage } from './types';
import { VIETTEL_PACKAGES } from './data/packages';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import SimLookup from './components/SimLookup';
import PackageGrid from './components/PackageGrid';
import FaqAccordion from './components/FaqAccordion';
import Footer from './components/Footer';
import AgentSettings from './components/AgentSettings';
import PackageModal from './components/PackageModal';
import AdsGuideModal from './components/AdsGuideModal';
import PolicyModal from './components/PolicyModal';

export default function App() {
  // 1. Initialize Agent Configuration with local storage persistent synchronization
  const [config, setConfig] = useState<AgentConfig>(() => {
    try {
      const stored = localStorage.getItem('viettel_agent_config');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load agent config', e);
    }
    return {
      agentCode: '352525287', // Realistic default affiliate partner code
      supportPhone: '1800.8098', // Viettel customer center hotline
      zaloLink: 'https://zalo.me/18008098', // Zalo chat connect
      agentName: 'Kênh CTV tiếp thị di động Viettel'
    };
  });

  // Persistent configuration updates
  const handleSaveConfig = (newConfig: AgentConfig) => {
    setConfig(newConfig);
    localStorage.setItem('viettel_agent_config', JSON.stringify(newConfig));
  };

  // 2. Global State management for modals and search parameters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAdsGuideOpen, setIsAdsGuideOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);
  const [selectedPkgId, setSelectedPkgId] = useState<string | null>(null);
  const [modalTab, setModalTab] = useState<'sms' | 'qr' | 'details'>('sms');

  // Find currently active package for instructions modal
  const activePackage = VIETTEL_PACKAGES.find((p) => p.id === selectedPkgId) || null;

  // Handles fast action selectors
  const handleSelectPackage = (pkgId: string) => {
    setSelectedPkgId(pkgId);
    setModalTab('sms');
  };

  const handleOpenDetails = (pkg: TelecomPackage) => {
    setSelectedPkgId(pkg.id);
    setModalTab('details');
  };

  const handleClosePackageModal = () => {
    setSelectedPkgId(null);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // If we have a query, scroll smoothly down to the package section so they see instant results
    if (query) {
      const element = document.getElementById('goi-cuoc');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // Scroll down to package table
    const element = document.getElementById('goi-cuoc');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-red-200 selection:text-red-900">
      
      {/* 1. Brand Navigation Header */}
      <Header
        config={config}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenAdsGuide={() => setIsAdsGuideOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />

      {/* Google Ads Regulatory Compliance & Clear Affiliate Disclosure Banner */}
      <div className="bg-amber-50/90 text-amber-900 border-b border-amber-200/50 py-3 px-4 text-xs animate-fade-in relative z-10 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center bg-amber-655 text-white font-black px-2 py-0.5 rounded text-[9px] uppercase tracking-wider shadow-2xs">
              CÔNG BỐ MINH BẠCH
            </span>
            <p className="font-bold text-amber-950 text-[11px] sm:text-xs">
              Cổng tra cứu & Tạo cú pháp tin nhắn soạn sẵn (Miễn phí 100% dịch vụ giới thiệu)
            </p>
          </div>
          <div className="text-[11px] text-amber-850 leading-relaxed max-w-4xl lg:text-right">
            Chúng tôi là <strong className="text-amber-950 font-extrabold">Đại lý ủy thác & Cộng tác viên tiếp thị số độc lập của Viettel</strong>. Trang web <strong className="text-red-700 font-bold">tracuugoicuoc.com</strong> KHÔNG phải là trang chủ trực tiếp của Tập đoàn Viettel (viettel.vn). Hệ thống chỉ cung cấp giải pháp tra cứu và chuẩn hóa cú pháp gửi trực tiếp đến <strong className="text-red-700 font-bold">tổng đài quốc gia 290</strong> của Viettel. Khách hàng tự thanh toán cước trực tiếp từ tài khoản gốc của SIM cho nhà mạng Viettel (Không thu phí trung gian).
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <main className="flex-1">
        
        {/* 2. Highlighted Slider Promotions */}
        <HeroCarousel
          config={config}
          onSelectPackage={handleSelectPackage}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />

        {/* 3. Interactive SIM Eligibility Verification Form */}
        <SimLookup
          onSelectPackage={handleSelectPackage}
        />

        {/* 4. Complete Catalog of 4G/5G Tariffs with sorting and filtering grids */}
        <PackageGrid
          onSelectPackage={handleSelectPackage}
          onOpenDetails={handleOpenDetails}
          searchQuery={searchQuery}
          onSearchReset={() => setSearchQuery('')}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* 5. Frequently Asked Questions (FAQ) with animated drawers */}
        <FaqAccordion />

      </main>

      {/* 6. Fully Integrated Legal and Informational Customer Footer */}
      <Footer config={config} onOpenPolicy={(type) => setActivePolicy(type)} />

      {/* -------- FULL INTEGRATION PORTALS MODALS -------- */}
      
      {/* A. Collapsible Affiliate Configuration Drawer */}
      <AgentSettings
        config={config}
        onSave={handleSaveConfig}
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      {/* A2. Google Ads & Compliance PDF Marketing Guide Manual */}
      <AdsGuideModal
        isOpen={isAdsGuideOpen}
        onClose={() => setIsAdsGuideOpen(false)}
      />

      {/* A3. Dynamic Legal Policy popups */}
      {activePolicy && (
        <PolicyModal
          isOpen={activePolicy !== null}
          type={activePolicy}
          onClose={() => setActivePolicy(null)}
        />
      )}

      {/* B. Specific Target Package Registration Instruction Modal (QR, SMS Code or terms details) */}
      {activePackage && (
        <PackageModal
          pkg={activePackage}
          config={config}
          onClose={handleClosePackageModal}
          defaultTab={modalTab}
        />
      )}

    </div>
  );
}
