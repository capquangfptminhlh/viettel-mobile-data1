import React, { useState } from 'react';
import { Search, Phone, Settings, Menu, X, Smartphone, Globe, ShieldCheck, BookOpen } from 'lucide-react';
import { AgentConfig } from '../types';

interface HeaderProps {
  config: AgentConfig;
  onOpenSettings: () => void;
  onOpenAdsGuide: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

export default function Header({ 
  config, 
  onOpenSettings, 
  onOpenAdsGuide,
  searchQuery, 
  onSearchChange,
  onCategorySelect,
  selectedCategory
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Trang Chủ', action: 'all', id: 'all' },
    { label: '🔥 Gói Hot', action: 'hot', id: 'hot' },
    { label: '⚡ Siêu Tốc Data', action: 'data', id: 'data' },
    { label: '📱 Gói MXH', action: 'social', id: 'social' },
    { label: '📞 Combo Thoại', action: 'combo', id: 'combo' },
    { label: '⏳ Chu Kỳ Dài', action: 'long_term', id: 'long_term' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      {/* Top small info bar */}
      <div className="bg-[#D71920] text-white text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 h-8 flex items-center justify-between font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-red-100" />
              Soạn SMS gửi tổng đài Viettel 290 (Miễn phí 100% dịch vụ)
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-red-100 text-[11px]">
              <Globe className="w-3.5 h-3.5" />
              Kênh CTV tiếp thị số đại lý Viettel độc lập
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSettings}
              className="text-red-100 hover:text-white flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-sm border border-white/20 cursor-pointer text-[11px] transition-colors"
            >
              <Settings className="w-3 h-3" />
              Cấu hình Website
            </button>
            <a 
              href={`tel:${config.supportPhone.replace(/\./g, '')}`} 
              className="flex items-center gap-1 hover:underline font-bold text-[11px]"
            >
              <Phone className="w-3 h-3 fill-white" />
              Hotline: {config.supportPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main header block */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-[#D71920] rounded-full flex items-center justify-center shadow-xs">
              <span className="text-white font-black text-sm tracking-tighter italic">5G</span>
            </div>
            <div className="leading-tight flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-[#D71920] font-black text-lg sm:text-xl tracking-tighter italic uppercase font-sans">
                  TRACUU
                </span>
                <span className="bg-[#D71920] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-xs tracking-wider font-mono">GOICUOC.COM</span>
              </div>
              <span className="text-[8px] font-bold text-gray-500 tracking-wider leading-none">KÊNH CTV TIẾP THỊ ỦY QUYỀN VIETTEL DUYỆT CHUẨN</span>
            </div>
          </div>

          {/* Search bar inside header (Desktop size) */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Tìm kiếm gói cước (ví dụ: SD135, V200B, MXH120...)"
              className="w-full pl-9 pr-4 py-1.5 text-xs border border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#D71920] focus:border-[#D71920] transition-all placeholder:text-gray-400"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>

          {/* Quick Support contacts (Desktop Size) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={config.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-red-50 text-[#D71920] text-xs font-semibold rounded-full border border-red-100 hover:bg-red-100 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
              Trợ giúp Zalo
            </a>

            <div className="text-right h-8 border-l border-gray-150 pl-3 flex flex-col justify-center">
              <p className="text-[9px] text-gray-400 font-medium leading-none mb-0.5">Hotline 24/7</p>
              <a 
                href={`tel:${config.supportPhone.replace(/\./g, '')}`} 
                className="text-xs font-black text-[#D71920] hover:underline leading-none"
              >
                {config.supportPhone}
              </a>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Categories Navigation Bar (Desktop Size) */}
      <nav className="hidden md:block bg-[#D71920]">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center h-10 text-white font-medium text-xs">
            {menuItems.map((item) => (
              <li key={item.id} className="h-full">
                <button
                  type="button"
                  onClick={() => onCategorySelect(item.action)}
                  className={`px-4 lg:px-5 h-full flex items-center relative transition-all duration-150 hover:bg-black/10 cursor-pointer uppercase font-bold tracking-wider ${
                    (selectedCategory === item.action)
                      ? 'bg-black/20 text-white'
                      : 'text-red-100'
                  }`}
                >
                  {item.label}
                  {selectedCategory === item.action && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu & Search Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                aria-label="Tìm nhanh gói cước"
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Tìm nhanh gói cước (ví dụ: SD120...)"
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
          <ul className="py-2 text-sm font-semibold divide-y divide-gray-50">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    onCategorySelect(item.action);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 flex items-center justify-between cursor-pointer ${
                    selectedCategory === item.action 
                      ? 'bg-red-50 text-red-600 font-bold' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-mono font-normal">
                    {item.action === 'all' ? 'Tất cả' : item.action.toUpperCase()}
                  </span>
                </button>
              </li>
            ))}
            <li className="px-5 py-4 flex flex-col gap-2.5 bg-gray-50">
              <a
                href={config.zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 bg-blue-600 text-white text-center text-xs font-bold rounded-lg block shadow-sm hover:bg-blue-700 hover:shadow-md transition-all"
              >
                Hỗ Trợ Đại Lý Qua Zalo
              </a>
              <a
                href={`tel:${config.supportPhone.replace(/\./g, '')}`}
                className="w-full py-2 bg-[#D71920] text-white text-center text-xs font-extrabold rounded-lg block shadow-sm"
              >
                ⚡ Gọi Điện Hotline {config.supportPhone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
