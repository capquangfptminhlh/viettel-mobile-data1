import React, { useState } from 'react';
import { Smartphone, CheckCircle, Search, HelpCircle, Loader2, Sparkles, Filter } from 'lucide-react';
import { TelecomPackage } from '../types';
import { VIETTEL_PACKAGES } from '../data/packages';

interface SimLookupProps {
  onSelectPackage: (pkgId: string) => void;
}

const VIETTEL_PREFIXES = ['096', '097', '098', '086', '032', '033', '034', '035', '036', '037', '038', '039', '090', '091', '093', '070', '079', '077', '076', '078', '089', '088', '081', '082', '083', '084', '085', '056', '058', '059'];
const GENUINE_VIETTEL_PREFIXES = ['096', '097', '098', '086', '032', '033', '034', '035', '036', '037', '038', '039'];

export default function SimLookup({ onSelectPackage }: SimLookupProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [simType, setSimType] = useState<'prepaid' | 'postpaid'>('prepaid');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<null | {
    eligiblePackages: TelecomPackage[];
    isViettel: boolean;
    simType: string;
    num: string;
  }>(null);
  const [error, setError] = useState('');

  const stepsList = [
    'Khởi tạo kết nối cổng tra cứu Viettel...',
    'Đang phân tích đầu số nhà mạng...',
    'Quét danh mục gói ưu đãi từ cơ sở dữ liệu...',
    'Đang biên dịch danh sách gói cước phù hợp...'
  ];

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const checkedNum = phoneNumber.trim().replace(/\D/g, '');
    if (!checkedNum) {
      setError('Vui lòng nhập số điện thoại');
      return;
    }
    if (checkedNum.length < 10 || checkedNum.length > 11) {
      setError('Số điện thoại di động phải chứa 10 hoặc 11 chữ số');
      return;
    }
    if (!checkedNum.startsWith('0')) {
      setError('Số điện thoại di động Việt Nam phải bắt đầu bằng số 0');
      return;
    }

    const prefix3 = checkedNum.substring(0, 3);
    const prefix4 = checkedNum.substring(0, 4);
    const isGenericMobile = VIETTEL_PREFIXES.includes(prefix3) || VIETTEL_PREFIXES.includes(prefix4);
    const isGenuineViettel = GENUINE_VIETTEL_PREFIXES.includes(prefix3) || GENUINE_VIETTEL_PREFIXES.includes(prefix4);

    if (!isGenericMobile) {
      setError('Đầu số di động không đúng định dạng nhà mạng Việt Nam');
      return;
    }

    // Trigger lookup loading animation sequence
    setLoading(true);
    setStep(0);

    const intervalTime = 400;
    const runSteps = (currentStep: number) => {
      if (currentStep < stepsList.length) {
        setStep(currentStep);
        setTimeout(() => runSteps(currentStep + 1), intervalTime);
      } else {
        // Complete
        setLoading(false);
        // Categorize packages based on phone number suffix to create highly tailored results
        const digit = parseInt(checkedNum.slice(-1)) || 0;
        let selected: TelecomPackage[] = [];
        
        if (!isGenuineViettel) {
          // If other networks, show limited data packages and advise conversion
          selected = VIETTEL_PACKAGES.filter(p => p.id === 'sd90' || p.id === 'sd120');
        } else if (digit % 3 === 0) {
          // Select MXH social pack
          selected = VIETTEL_PACKAGES.filter(p => p.category === 'social' || p.id === 'sd120');
        } else if (digit % 2 === 0) {
          // Select combo voice packs
          selected = VIETTEL_PACKAGES.filter(p => p.category === 'combo' || p.id === 'mxh120');
        } else {
          // Select high speed data packs
          selected = VIETTEL_PACKAGES.filter(p => p.category === 'data' || p.id === 'v120b');
        }

        // Always ensure at least 3 packages
        if (selected.length < 3) {
          selected = VIETTEL_PACKAGES.slice(0, 4);
        }

        setResult({
          eligiblePackages: selected,
          isViettel: isGenuineViettel,
          simType: simType === 'prepaid' ? 'Trả trước' : 'Trả sau',
          num: checkedNum
        });
      }
    };

    setTimeout(() => {
      runSteps(0);
    }, 100);
  };

  return (
    <section id="tra-cuu" className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-red-700 via-[#D71920] to-orange-500 rounded-xl shadow-sm border border-red-200/20 overflow-hidden p-6 sm:p-8 lg:p-10 relative">
        <div className="absolute inset-x-0 bottom-0 top-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_50%55%)] pointer-events-none"></div>
        <div className="absolute -top-[50px] -right-[50px] w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Headline Text */}
          <div className="lg:col-span-5 text-white space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-yellow-300">
              <Sparkles className="w-3.5 h-3.5" />
              Công nghệ Tra Cứu Ưu Đãi
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black italic tracking-tighter leading-tight uppercase">
              Tra Cứu Khuyến Mãi <br className="hidden sm:inline" />
              Dành Riêng Cho Sim
            </h2>
            <p className="text-red-100 text-xs leading-relaxed max-w-xl mx-auto lg:mx-0">
              Mỗi số di động Viettel có danh sách gói cước được nhà mạng cấp mã ưu đãi khác nhau tùy theo mức tiêu dùng. Hãy nhập số điện thoại để hệ thống quét tự động xem bạn đăng ký được gói siêu hời nào!
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-semibold text-white/90">
              <span className="flex items-center gap-1 bg-black/15 px-3 py-1.5 rounded-full">
                ✓ Bảo mật thông tin 100%
              </span>
              <span className="flex items-center gap-1 bg-black/15 px-3 py-1.5 rounded-full">
                ✓ Đăng ký trực tiếp Viettel
              </span>
            </div>
          </div>

          {/* Form and Interaction */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-7 rounded-xl shadow-sm border border-gray-200 text-gray-800">
            {!result && !loading && (
              <form onSubmit={handleLookup} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  {/* Phone input */}
                  <div className="sm:col-span-8 space-y-1.5">
                    <label htmlFor="sim-input-phone" className="block text-xs font-bold text-gray-650 uppercase tracking-wider">Số Điện Thoại Của Bạn</label>
                    <div className="relative">
                      <input
                        id="sim-input-phone"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Ví dụ: 098xxxxx88"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl text-base font-semibold focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all font-mono"
                      />
                      <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* SIM type select */}
                  <div className="sm:col-span-4 space-y-1.5">
                    <label htmlFor="sim-input-type" className="block text-xs font-bold text-gray-650 uppercase tracking-wider">Loại Thuê Bao</label>
                    <select
                      id="sim-input-type"
                      value={simType}
                      onChange={(e) => setSimType(e.target.value as 'prepaid' | 'postpaid')}
                      className="w-full px-3.5 py-3 border border-gray-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white transition-all cursor-pointer"
                    >
                      <option value="prepaid">Trả trước</option>
                      <option value="postpaid">Trả sau</option>
                    </select>
                  </div>
                </div>

                {error && (
                  <p className="text-xs text-[#D71920] font-bold bg-red-50 border border-red-100 py-2.5 px-3 rounded-lg flex items-center gap-1.5">
                    ⚠️ {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-5 bg-[#D71920] hover:bg-red-700 active:bg-red-850 text-white text-sm font-bold uppercase tracking-wide rounded-lg shadow-xs transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  Tra Cứu Gói Ưu Đãi Ngay
                </button>
                <p className="text-[10px] text-center text-gray-400">
                  Phần mềm an toàn được quản lý tự động, không thu phí dịch vụ tra cứu.
                </p>
              </form>
            )}

            {/* Simulated steps Loading indicator */}
            {loading && (
              <div className="py-8 flex flex-col items-center justify-center text-center space-y-5 animate-pulse">
                <Loader2 className="w-10 h-10 text-[#D71920] animate-spin" />
                <div className="space-y-1">
                  <h4 className="font-extrabold text-gray-800 text-sm">Đang Quét Hệ Thống Khuyến Mãi Viettel</h4>
                  <div className="min-h-[20px]">
                    <p className="text-[11px] text-gray-550 font-mono italic">
                      {stepsList[step]}
                    </p>
                  </div>
                </div>
                {/* Visual loading bar */}
                <div className="w-60 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#D71920] transition-all duration-300"
                    style={{ width: `${((step + 1) / stepsList.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Results display */}
            {result && (
              <div className="space-y-5 animate-fade-in text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-100 pb-3 gap-3">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-xs sm:text-sm">
                        Tra Cứu Kết Quả Thành Công !
                      </h4>
                      <p className="text-[11px] text-gray-500">
                        Thuê bao: <span className="font-mono font-bold text-gray-700">{result.num}</span> ({result.simType})
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setResult(null);
                      setPhoneNumber('');
                    }}
                    className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-md text-[11px] font-bold transition-colors cursor-pointer"
                  >
                    Tra Cứu Gói Khác
                  </button>
                </div>

                {!result.isViettel && (
                  <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg text-[11px] text-yellow-905 leading-relaxed space-y-1">
                    <p className="font-bold text-[#D71920]">⚠️ Lưu ý: Thuê bao không thuộc đầu số gốc Viettel</p>
                    <p>
                      Hệ thống hiển thị các gói lướt mạng cơ bản tốt nhất. Bạn có thể cần kiểm tra xem thuê bao đã chuyển mạng giữ số sang Viettel chưa, hoặc đăng ký mua thêm SIM Viettel mới để nhận khuyến mãi!
                    </p>
                  </div>
                )}

                <div className="space-y-2.5">
                  <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5 text-[#D71920]" />
                    DANH SÁCH GÓI CƯỚC SIM ĐỦ ĐIỀU KIỆN ĐĂNG KÝ:
                  </h5>
                  
                  {/* Package Cards list for result */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[260px] overflow-y-auto pr-1">
                    {result.eligiblePackages.map((pkg) => (
                      <div 
                        key={pkg.id} 
                        className="p-3 border border-red-100 hover:border-red-200 bg-red-50/20 rounded-lg flex items-center justify-between gap-3 transition-colors"
                      >
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-mono font-bold text-[#D71920] bg-red-100/50 px-1.5 py-0.5 rounded">
                            {pkg.name}
                          </span>
                          <span className="block text-xs font-bold text-gray-700 font-mono">
                            {pkg.price.toLocaleString('vi-VN')}đ / {pkg.duration}
                          </span>
                          <span className="block text-[10px] text-gray-450">
                            {pkg.dataPerDay} ({pkg.dataLimit})
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onSelectPackage(pkg.id)}
                          className="px-3 py-1 bg-[#D71920] hover:bg-red-700 active:bg-red-850 text-white font-bold text-xs rounded transition-colors cursor-pointer shrink-0"
                        >
                          Đăng Ký
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
