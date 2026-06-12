import React, { useState } from 'react';
import { Settings, X, Save, RefreshCw, Key, Phone, Link2, Briefcase, Lock, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { AgentConfig } from '../types';

interface AgentSettingsProps {
  config: AgentConfig;
  onSave: (newConfig: AgentConfig) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function AgentSettings({ config, onSave, isOpen, onClose }: AgentSettingsProps) {
  const [agentCode, setAgentCode] = useState(config.agentCode);
  const [supportPhone, setSupportPhone] = useState(config.supportPhone);
  const [zaloLink, setZaloLink] = useState(config.zaloLink);
  const [agentName, setAgentName] = useState(config.agentName);

  const [isSaved, setIsSaved] = useState(false);
  
  // Admin authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem('is_admin_authenticated') === 'true';
    } catch {
      return false;
    }
  });
  const [pinInput, setPinInput] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [authError, setAuthError] = useState('');

  const handleAuthenticate = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPin = pinInput.trim();
    // Support common intuitive admin PINs
    if (cleanPin === '290' || cleanPin === 'admin290' || cleanPin === '123456') {
      setIsAuthenticated(true);
      setAuthError('');
      try {
        sessionStorage.setItem('is_admin_authenticated', 'true');
      } catch (err) {
        console.error(err);
      }
    } else {
      setAuthError('Mã bảo mật quản trị không chính xác. Vui lòng nhập lại!');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      agentCode: agentCode.trim() || '290',
      supportPhone: supportPhone.trim() || '18008098',
      zaloLink: zaloLink.trim() || 'https://zalo.me/',
      agentName: agentName.trim() || 'Kênh CTV tiếp thị di động Viettel'
    });
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1000);
  };

  const handleReset = () => {
    setAgentCode('290');
    setSupportPhone('18008098');
    setZaloLink('https://zalo.me/18008098');
    setAgentName('Kênh CTV tiếp thị di động Viettel');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-xs transition-opacity duration-300">
      <div className="h-full w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in relative">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-zinc-900 text-white">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 animate-spin-slow text-yellow-500" />
            <div>
              <h3 className="font-extrabold text-lg tracking-tight uppercase">Cấu hình Hệ thống</h3>
              <p className="text-xs text-zinc-400">Dành riêng cho Quản trị viên Website</p>
            </div>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 transition-colors text-white"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Check screen */}
        {!isAuthenticated ? (
          <div className="flex-1 flex flex-col justify-between p-6">
            <div className="space-y-6 pt-6">
              <div className="text-center space-y-3">
                <div className="w-14 h-14 bg-red-500/10 text-[#D71920] border border-red-500/20 rounded-full flex items-center justify-center mx-auto shadow-inner animate-pulse">
                  <Lock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-zinc-800 text-base">Xác thực Quyền Quản trị viên</h4>
                  <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                    Khu vực này chứa cấu hình Affiliate ID và thông tin liên hệ của website. Vui lòng xác minh để tiếp tục.
                  </p>
                </div>
              </div>

              <form onSubmit={handleAuthenticate} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                    Nhập mã bảo mật quản trị
                  </label>
                  <div className="relative">
                    <input
                      type={showPin ? 'text' : 'password'}
                      autoFocus
                      required
                      value={pinInput}
                      onChange={(e) => setPinInput(e.target.value)}
                      placeholder="Mã PIN (Ví dụ: admin290 hoặc 290)"
                      className="w-full pl-3 pr-10 py-3 border border-zinc-200 rounded-lg text-sm text-center font-mono focus:ring-2 focus:ring-[#D71920] focus:border-[#D71920] transition-all tracking-widest placeholder:tracking-normal placeholder:text-zinc-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPin(!showPin)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                    >
                      {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {authError && (
                    <p className="text-xs text-red-600 font-bold text-center mt-1 animate-fade-in">
                      ⚠️ {authError}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#D71920] hover:bg-red-700 text-white font-bold text-sm rounded-lg transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Xác thực & Truy cập
                </button>
              </form>
            </div>

            <div className="text-center pt-6 border-t border-zinc-100">
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-zinc-500 hover:text-zinc-800 font-bold transition-colors underline underline-offset-2"
              >
                Hủy bỏ & Quay lại trang chủ
              </button>
            </div>
          </div>
        ) : (
          /* Real settings form displayed only after correct authenticate PIN matching */
          <>
            {/* Content Form */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
              <div className="bg-orange-50 border border-orange-150 p-4.5 rounded-xl text-xs text-orange-850 leading-relaxed space-y-1.5">
                <p className="font-extrabold text-orange-900 flex items-center gap-1">
                  🔑 XÁC THỰC QUẢN TRỊ THÀNH CÔNG
                </p>
                <p>
                  Bạn đang ghi đè biến cấu hình đại lý Viettel. Sau khi lưu thay đổi, toàn bộ cú pháp tin nhắn SMS đăng ký và mã QR trên website sẽ tự động cập nhật sang mã của bạn.
                </p>
              </div>

              <div className="space-y-4">
                {/* Agent Code */}
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-zinc-700 flex items-center gap-1.5">
                    <Key className="w-4 h-4 text-[#D71920]" />
                    Mã Số Đại Lý (Ví dụ: 290 hoặc Mã đối tác)
                  </label>
                  <input
                    type="text"
                    required
                    value={agentCode}
                    onChange={(e) => setAgentCode(e.target.value)}
                    placeholder="Mã số đăng ký gửi 290"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all font-mono font-bold text-zinc-800"
                  />
                  <p className="text-[11px] text-gray-500">
                    Mã số đại lý sẽ được điền vào cú pháp SMS đăng ký (ví dụ: SD135 [Mã Số] gửi 290).
                  </p>
                </div>

                {/* Agent Name */}
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-zinc-700 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-[#D71920]" />
                    Tên Hiển Thị Đại Lý (Chân trang)
                  </label>
                  <input
                    type="text"
                    required
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    placeholder="Ví dụ: Đại Lý Viettel Online"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-zinc-800"
                  />
                </div>

                {/* Support Phone */}
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-zinc-700 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-[#D71920]" />
                    Số Hotline Hỗ Trợ Độc Lập
                  </label>
                  <input
                    type="text"
                    required
                    value={supportPhone}
                    onChange={(e) => setSupportPhone(e.target.value)}
                    placeholder="Ví dụ: 1800.8098"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all font-mono font-bold text-zinc-800"
                  />
                </div>

                {/* Zalo Link */}
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-zinc-700 flex items-center gap-1.5">
                    <Link2 className="w-4 h-4 text-[#D71920]" />
                    Đường Dẫn Chat Zalo Đại Lý
                  </label>
                  <input
                    type="url"
                    required
                    value={zaloLink}
                    onChange={(e) => setZaloLink(e.target.value)}
                    placeholder="Ví dụ: https://zalo.me/0981234567"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-zinc-800"
                  />
                  <p className="text-[11px] text-gray-500">Dùng hỗ trợ trực tuyến khi khách bấm nút "Trợ giúp Zalo".</p>
                </div>
              </div>
            </form>

            {/* Footer actions */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                Khôi Phục
              </button>
              
              <button
                type="button"
                onClick={handleSubmit}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer text-white shadow-sm transition-all duration-250 ${
                  isSaved ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {isSaved ? (
                  <>Đã lưu cấu hình!</>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Lưu Thay Đổi
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
