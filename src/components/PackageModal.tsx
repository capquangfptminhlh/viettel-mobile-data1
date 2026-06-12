import React, { useState } from 'react';
import { X, MessageSquareCode, Copy, ClipboardCheck, ExternalLink, QrCode, Phone, Sparkles, Youtube, Check } from 'lucide-react';
import { TelecomPackage, AgentConfig } from '../types';

interface PackageModalProps {
  pkg: TelecomPackage | null;
  config: AgentConfig;
  onClose: () => void;
  defaultTab?: 'sms' | 'qr' | 'details';
}

export default function PackageModal({ pkg, config, onClose, defaultTab = 'sms' }: PackageModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'sms' | 'qr' | 'details'>(defaultTab);

  if (!pkg) return null;

  const smsBody = `${pkg.name} ${config.agentCode}`;
  const smsNumber = '290';
  
  // Dynamic SMS URL generation for mobile devices
  const getSmsHref = () => {
    // Standard cross-platform format. 
    // Android often expects "?" while iOS sometimes expects ";" or "&", but "?" is highly compatible with modern systems.
    return `sms:${smsNumber}?body=${encodeURIComponent(smsBody)}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(smsBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-scale-up">
        
        {/* Banner header of the modal */}
        <div className="relative bg-[#D71920] p-5 text-white shrink-0">
          <div className="absolute top-0 right-0 p-3 flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-1 pr-8">
            <span className="text-[9px] font-black uppercase tracking-wider bg-yellow-400 text-neutral-900 px-2 py-0.5 rounded inline-block">
              ĐĂNG KÝ ONLINE CHÍNH THỨC
            </span>
            <h3 className="text-xl font-black flex items-baseline gap-1.5 font-mono uppercase">
              GÓI CƯỚC {pkg.name}
              <span className="text-xs font-bold font-sans text-red-100 italic">
                ({pkg.price.toLocaleString('vi-VN')}đ /{pkg.duration})
              </span>
            </h3>
            <p className="text-xs text-red-50 font-medium leading-relaxed line-clamp-2">
              {pkg.description}
            </p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-gray-150 bg-slate-50 text-xs font-bold text-gray-500 uppercase tracking-wider shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('sms')}
            className={`flex-1 py-2.5 px-2.5 border-b-2 text-center transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'sms' ? 'border-[#D71920] text-[#D71920] bg-white' : 'border-transparent hover:text-gray-800'
            }`}
          >
            <MessageSquareCode className="w-4 h-4" />
            Cú Pháp SMS
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('qr')}
            className={`flex-1 py-2.5 px-2.5 border-b-2 text-center transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'qr' ? 'border-[#D71920] text-[#D71920] bg-white' : 'border-transparent hover:text-gray-800'
            }`}
          >
            <QrCode className="w-4 h-4" />
            Quét Mã QR
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('details')}
            className={`flex-1 py-2.5 px-2.5 border-b-2 text-center transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'details' ? 'border-[#D71920] text-[#D71920] bg-white' : 'border-transparent hover:text-gray-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Chi Tiết Gói
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          
          {/* TAB 1: SMS SYNTAX REGISTRATION */}
          {activeTab === 'sms' && (
            <div className="space-y-4 animate-fade-in text-gray-800">
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Soạn Tin Nhắn Theo Cú Pháp:</p>
                <div className="bg-slate-50 border border-red-200 rounded p-4 text-center relative overflow-hidden space-y-2.5">
                  <div className="absolute top-0 right-0 bg-red-50 text-[#D71920] font-mono text-[9px] font-bold px-2 py-0.5 rounded-bl border-l border-b border-red-200">
                    Mã Đại Lý: {config.agentCode}
                  </div>
                  <div className="inline-block px-1 rounded-sm mt-1">
                    <span className="text-xl sm:text-2xl font-black text-[#D71920] font-mono tracking-wider select-all">{smsBody}</span>
                  </div>
                  <div className="text-gray-400 font-bold text-xs uppercase tracking-wider">gửi</div>
                  <div>
                    <span className="text-xl sm:text-2xl font-black text-gray-800 font-mono bg-white border border-gray-300 px-3 py-0.5 rounded shadow-3xs leading-none inline-block">{smsNumber}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full py-2 px-3 bg-white hover:bg-slate-50 text-gray-800 text-xs font-bold rounded border border-gray-300 flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-98"
                >
                  {copied ? (
                    <>
                      <ClipboardCheck className="w-4 h-4 text-green-500" />
                      Đã Sao Chép Cú Pháp
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-gray-500" />
                      Sao Chép Cú Pháp
                    </>
                  )}
                </button>

                <a
                  href={getSmsHref()}
                  className="w-full py-2 px-3 bg-[#D71920] hover:bg-red-700 text-white text-xs font-bold rounded shadow-3xs flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-98"
                >
                  <ExternalLink className="w-4 h-4" />
                  Gửi SMS Đăng Ký Ngay
                </a>
              </div>

              {/* Informative Step Guides */}
              <div className="bg-red-50 border border-red-100 p-3 rounded text-[11px] text-red-950 leading-relaxed space-y-0.5">
                <p className="font-bold">📱 Dành cho thiết bị di động:</p>
                <p>
                  Nhấn nút <strong className="text-red-700">"Gửi SMS Đăng Ký Ngay"</strong> ở trên, ứng dụng tin nhắn trên điện thoại của bạn sẽ tự động mở với cú pháp soạn sẵn. Bạn chỉ cần nhấn nút <strong className="text-red-700">Gửi</strong> để hoàn tất.
                </p>
                <p className="mt-1">
                  * Hệ thống gửi trả tin nhắn xác nhận hoàn toàn miễn phí. Hãy chuẩn bị sẵn số dư tối thiểu trong tài khoản chính là <strong className="text-red-700">{pkg.price.toLocaleString('vi-VN')}đ</strong>.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: QR CODE SCAN */}
          {activeTab === 'qr' && (
            <div className="space-y-5 flex flex-col items-center animate-fade-in">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center">Quét Thẻ Để Soạn Tin Bản Nháp:</p>
              
              {/* Programmatically styled dynamic QR code image */}
              <div className="relative border-4 border-[#D71920] p-4 bg-white rounded-2xl shadow-lg flex items-center justify-center w-52 h-52">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&ecc=H&data=${encodeURIComponent(`SMSTO:${smsNumber}:${smsBody}`)}`}
                  alt={`Mã QR Đăng ký ${pkg.name}`}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Visual marker/overlay in the center of the QR code */}
                <div className="absolute inset-0 m-auto w-9 h-9 rounded-full bg-[#D71920] border-2 border-white flex items-center justify-center shadow-md">
                  <span className="text-[10px] font-black text-white tracking-tighter">VT</span>
                </div>
              </div>

              {/* Instruction banner below QR code */}
              <div className="text-center max-w-sm space-y-1.5 mt-2">
                <p className="text-xs font-bold text-gray-700">📱 Quét QR để lưu cú pháp SMS tự động</p>
                <div className="bg-slate-50 border border-gray-150 rounded p-3 text-left text-[11px] text-gray-600 space-y-1">
                  <p><strong className="text-gray-800">Cách 1:</strong> Mở ứng dụng <strong className="text-[#D71920]">Zalo</strong>, nhấp biểu tượng <strong className="text-gray-800">Quét QR</strong> bên cạnh thanh tìm kiếm.</p>
                  <p><strong className="text-gray-800">Cách 2:</strong> Mở ứng dụng <strong className="text-gray-800">Camera</strong> mặc định của điện thoại để quét mã.</p>
                  <p className="text-[10px] text-gray-400 italic font-medium pt-1 border-t border-gray-200 mt-1.5">
                    * Sau khi quét, chạm vào liên kết xuất hiện để tự động mở trình nhắn tin SMS có sẵn cú pháp đăng ký <span className="font-mono font-bold text-gray-800">{smsBody}</span> gửi tới <span className="font-mono font-bold text-gray-800">{smsNumber}</span>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SPECIFIC DETAILS */}
          {activeTab === 'details' && (
            <div className="space-y-4 animate-fade-in text-sm text-gray-700">
              {/* Detailed specs */}
              <div className="space-y-2.5">
                <h4 className="font-bold text-gray-900 border-l-3 border-red-650 pl-2 text-xs uppercase tracking-wider">Đặc quyền nhận được:</h4>
                <ul className="grid grid-cols-1 gap-2 pl-1.5">
                  {pkg.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                      <div className="w-5 h-5 shrink-0 bg-green-50 border border-green-200 text-green-600 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5">✓</div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call privileges if any */}
              {pkg.calls && (
                <div className="p-3 bg-orange-50 border border-orange-100 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-orange-950 text-xs flex items-center gap-1.5 uppercase tracking-wider leading-none">
                    <Phone className="w-3.5 h-3.5 text-orange-600" />
                    Đặc Quyền Gọi Thoại Đàm thoại:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-orange-900 pl-1">
                    {pkg.calls.internal && <p>• Nội mạng: <strong>{pkg.calls.internal}</strong></p>}
                    {pkg.calls.external && <p>• Ngoại mạng: <strong>{pkg.calls.external}</strong></p>}
                  </div>
                </div>
              )}

              {/* Target audiences */}
              <div className="space-y-2.5 pt-1">
                <h4 className="font-bold text-gray-900 border-l-3 border-red-650 pl-2 text-xs uppercase tracking-wider">Điều kiện áp dụng đăng ký:</h4>
                <ul className="space-y-1.5 pl-1.5">
                  {pkg.rules.map((rule, idx) => (
                    <li key={idx} className="text-xs text-gray-500 leading-relaxed flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0"></span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between shrink-0">
          <div className="text-xs text-gray-400 flex items-center gap-1">
            <span>Kênh bảo trợ:</span>
            <span className="font-medium text-gray-600">Đại lý ủy quyền 290</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
          >
            Đóng Lại
          </button>
        </div>

      </div>
    </div>
  );
}
