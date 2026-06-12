import React, { useState } from 'react';
import { X, Copy, Check, FileText, ArrowRight, Shield, RefreshCw, AlertTriangle, HelpCircle, Laptop, Phone, Globe, Lock, Download } from 'lucide-react';

interface AdsGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdsGuideModal({ isOpen, onClose }: AdsGuideModalProps) {
  const [copiedNegative, setCopiedNegative] = useState(false);
  const [copiedKeywords, setCopiedKeywords] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'domain' | 'keywords' | 'account' | 'verification' | 'webSync'>('all');

  const negativeKeywordsList = `vinaphone
vinaphon
vina phone
vina
mobifone
mobifon
mobi phone
mobi
vietnamobile
vietnammobile
vietnamobile 4g
vietnam mobile
wintel
reddi
local sim
itel
i-tel
mobicard
mobigold
my vinaphone
my mobifone
myvnpt
my viettel cũ`;

  const safeKeywordsList = `"đăng ký gói cước 4g viettel"
"đăng ký 4g viettel tháng"
"gói cước mạng viettel"
"đăng ký 5g viettel tháng"
"gói cước di động viettel"
"soạn tin đăng ký 4g viettel"
"đăng ký data viettel"`;

  const handleCopyNegative = () => {
    navigator.clipboard.writeText(negativeKeywordsList.trim());
    setCopiedNegative(true);
    setTimeout(() => setCopiedNegative(false), 2000);
  };

  const handleCopyKeywords = () => {
    navigator.clipboard.writeText(safeKeywordsList.trim());
    setCopiedKeywords(true);
    setTimeout(() => setCopiedKeywords(false), 2000);
  };

  const handlePrintPdf = () => {
    // Open print window. We have print styles defined so only the manual sheet will print perfectly.
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 print:p-0 print:bg-white print:relative print:inset-auto">
      <div className="bg-white rounded-2xl w-full max-w-5xl h-[88vh] flex flex-col shadow-2xl overflow-hidden animate-fade-in print:h-auto print:shadow-none print:rounded-none print:w-full print:max-w-none">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 via-slate-800 to-red-950 text-white flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center">
              <FileText className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg tracking-tight flex items-center gap-1.5">
                Cẩm Nang Vận Hành & Google Ads Sạch
                <span className="bg-red-600 text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full tracking-wider animate-pulse">
                  Mới Nhất 2026
                </span>
              </h3>
              <p className="text-xs text-slate-300">Giải pháp tiếp thị liên kết an toàn, hiệu quả, tránh quét chính sách Google</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintPdf}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/25 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Tải / In Toàn Bộ File PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-slate-300 hover:text-white"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Print-Only Title Segment */}
        <div className="hidden print:block text-center space-y-2 border-b-2 border-slate-900 pb-6 mb-8">
          <p className="text-sm font-bold text-red-600 tracking-widest uppercase">TÀI LIỆU LƯU HÀNH NỘI BỘ • CỘNG TÁC VIÊN TIẾP THỊ LIÊN KẾT DI ĐỘNG</p>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">CẨM NANG TOÀN TẬP GOOGLE ADS SẠCH & TỐI ƯU CHIÊN DỊCH</h1>
          <p className="text-base text-slate-600 italic">Vận hành đồng bộ thương hiệu sạch trên tên miền: <strong>tracuugoicuoc.com</strong></p>
          <div className="text-xs text-slate-500 flex justify-center gap-6 pt-2 font-mono">
            <span>Phiên Bản: 6.2.0 (Tháng 6/2026)</span>
            <span>Số trang thiết kế: A4 Tiêu chuẩn</span>
            <span>Đồng bộ: Hệ thống Kênh CTV Số Viettel Toàn Quốc</span>
          </div>
        </div>

        {/* Inner Tabs Navigation (Print Hidden) */}
        <div className="bg-slate-50 border-b border-gray-150 px-6 py-2.5 flex items-center gap-2 overflow-x-auto print:hidden shrink-0">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'all' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            📂 Xem Tất Cả Quy Trình
          </button>
          <button
            onClick={() => setActiveTab('domain')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'domain' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            🌐 1. Chuẩn Hóa Tên Miền
          </button>
          <button
            onClick={() => setActiveTab('keywords')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'keywords' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            🚫 2. Chặn Khách Mobi/Vina (Phủ Định)
          </button>
          <button
            onClick={() => setActiveTab('account')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'account' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            🔒 3. Nuôi Tài Khoản & Setup IP
          </button>
          <button
            onClick={() => setActiveTab('verification')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'verification' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            🪪 4. Vượt Xác Minh Google Ads
          </button>
          <button
            onClick={() => setActiveTab('webSync')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'webSync' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            🌐 5. Đồng bộ khai báo Website & Tag
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-10 print:overflow-visible print:p-0 print:space-y-12 bg-slate-50/30">

          {/* INTRO SUMMARY BANNER */}
          {(activeTab === 'all') && (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 p-5 rounded-2xl space-y-3 print:bg-white print:border-slate-300">
              <div className="flex items-center gap-2 text-amber-800">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <h4 className="font-extrabold text-sm sm:text-base tracking-tight uppercase">Báo cáo khắc phục lỗi &ldquo;Phương thức kinh doanh không được chấp nhận&rdquo;</h4>
              </div>
              <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                Lỗi <strong className="text-red-700">“Unacceptable Business Practices”</strong> (Phương thức kinh doanh không được chấp nhận/Mạo danh thương hiệu) xảy ra do rô-bốt Google quét thấy tên miền chứa thương hiệu gốc của hãng (vd: <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-semibold">viettel</code>) kết hợp cùng thiết kế trang web gây nhầm lẫn là trang đại diện chính thức trực tiếp của nhà mạng (lack of clear commercial relation disclosure). 
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1.5 text-xs text-amber-900 leading-relaxed">
                <div className="bg-white/80 p-3 rounded-lg border border-amber-100">
                  <p className="font-bold text-slate-900 mb-1">❌ Nguyên nhân chết tài khoản:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Sử dụng đuôi miền như <code className="bg-gray-100 px-1 font-mono">tongdai5gviettel.com</code> chứa từ trùng Viettel.</li>
                    <li>Sử dụng các khẳng định như &ldquo;Trang chủ ủy quyền chính chủ Viettel&rdquo; thay vì nêu rõ vai trò tiếp tiếp thị liên kết.</li>
                    <li>Chạy trực diện các từ khóa nhãn hiệu nguyên chất (Broad Match) thu hút tệp khách hàng nhầm lẫn.</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-green-950">
                  <p className="font-bold text-green-800 mb-1">✅ Giải pháp khắc phục triệt để:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Rời bỏ hoàn toàn từ thương hiệu trong tên miền &rarr; Sử dụng đầu miền trung lập <strong className="text-green-700 font-extrabold font-mono">tracuugoicuoc.com</strong>.</li>
                    <li>Hiển thị Banner quy chế hợp tác tiếp thị độc lập ở đầu & chân trang cực kỳ minh bạch.</li>
                    <li>Áp dụng bộ lọc từ khóa phủ định cực mạnh để triệt hạ 100% người dùng mạng khác click tặc gây lãng phí ngân sách.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* STEP 1: DOMAIN & CONTENT PREP */}
          {(activeTab === 'all' || activeTab === 'domain') && (
            <section className="space-y-4 print:break-inside-avoid">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center font-mono">1</span>
                <div>
                  <h4 className="font-extrabold text-base text-slate-900 uppercase">Quy chuẩn 1: Thiết lập tên miền trung lập & Công bố liên kết</h4>
                  <p className="text-xs text-gray-500 font-medium">Bảo vệ tên miền khỏi các thuật toán kiểm toán bản quyền thương hiệu của Google Ads Core Bot</p>
                </div>
              </div>

              {/* DOMAIN SELECTION ARTWORK */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-4 shadow-sm">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-4 bg-gray-50 rounded-xl">
                  {/* Bad Domain Box */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 w-52 text-center relative flex flex-col items-center">
                    <span className="absolute -top-2.5 bg-red-600 text-white font-black text-[9px] px-2 py-0.5 rounded-full">TRADEMARK VIOLATION ❌</span>
                    <span className="text-xs text-red-700 font-bold font-mono mt-1">tongdai5gviettel.com</span>
                    <p className="text-[10px] text-red-500 mt-1">Chứa nhãn hiệu độc quyền &ldquo;viettel&rdquo;</p>
                  </div>

                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 sm:rotate-0" />

                  {/* Good Domain Box */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 w-52 text-center relative flex flex-col items-center">
                    <span className="absolute -top-2.5 bg-green-600 text-white font-black text-[9px] px-2 py-0.5 rounded-full">APPROVED & SAFE ✅</span>
                    <span className="text-xs text-green-700 font-black font-mono mt-1">tracuugoicuoc.com</span>
                    <p className="text-[10px] text-green-600 mt-1">100% Trung lập về định dạng ký tự</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-2">
                    <h5 className="font-bold text-slate-900 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      Tại sao tên miền mới giúp bứt phá quảng cáo?
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Sử dụng tên miền mới <strong className="text-slate-900">tracuugoicuoc.com</strong> giúp lách hoàn toàn bộ lọc quét chuỗi ký tự nhạy cảm chứa thương hiệu (Brand Keywords matching). Rô-bốt Google sẽ chỉ đánh giá đây là một cổng tra cứu thông tin di động độc lập phục vụ mục đích tiện ích.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-slate-900 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Sự bổ trợ từ Banner Minh Bạch Quan Hệ:
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Trang web đã được cập nhật hệ thống banner thông tin màu hổ phách phía dưới Header, công bố minh bạch quan hệ CTV tiếp thị độc lập. Điều này giúp tài khoản quảng cáo tự tin khai báo mô hình kinh doanh &ldquo;Tiếp thị liên kết&rdquo; khi được Google yêu cầu xác minh mà không lo bị khóa tài khoản.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* STEP 2: NEGATIVE KEYWORDS FOR SAVING BUDGET */}
          {(activeTab === 'all' || activeTab === 'keywords') && (
            <section className="space-y-4 print:break-inside-avoid">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center font-mono">2</span>
                <div>
                  <h4 className="font-extrabold text-base text-slate-900 uppercase">Quy chuẩn 2: Chặn khách mạng khác - Bộ lọc từ khóa phủ định</h4>
                  <p className="text-xs text-gray-500 font-medium">Bảo vệ túi tiền của bạn khỏi các mạng cạnh tranh (Mobifone, Vinaphone, Vietnamobile, Wintel) gõ click lầm gây phí</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-4 shadow-sm">
                <div className="bg-red-50 border border-red-100 p-4 rounded-xl text-xs text-red-950 space-y-1.5">
                  <p className="font-bold flex items-center gap-1 text-red-800">
                    <AlertTriangle className="w-4 h-4" />
                    BÀI TOÁN LÀO PHÍ NGÂN SÁCH DO KHÁCH GÕ CHUNG CHUNG
                  </p>
                  <p className="leading-relaxed">
                    Khi bạn chạy các từ khóa ý định rộng như <code className="bg-white text-red-700 px-1 py-0.5 rounded border border-red-150 font-mono italic font-bold">"đăng ký 4g"</code> hay <code className="bg-white text-red-700 px-1 py-0.5 rounded border border-red-150 font-mono italic font-bold">"gói cước mạng tháng"</code>, thuê bao của <strong>Mobifone, Vinaphone</strong> tìm kiếm cũng sẽ nhìn thấy quảng cáo của bạn. Nếu họ nhấp chuột bừa bãi vào rồi thoát ra (không thể soạn mã SMS đăng ký vì khác nhà mạng), bạn vẫn bị Google trừ tiền phí nhấp chuột (CPC) oan uổng!
                  </p>
                  <p className="font-extrabold text-red-900 pt-1">
                    &rarr; Giải pháp duy nhất: Khai báo toàn bộ danh sách thương hiệu đối thủ thành từ khóa phủ định ở cấp chiến dịch!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-950 flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-md">
                        🛠️ Bộ Từ Khóa Phủ Định Cần Thêm (Cấp Chiến Dịch)
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyNegative}
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                      >
                        {copiedNegative ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedNegative ? 'Đã sao chép!' : 'Sao chép nhanh'}
                      </button>
                    </div>
                    <div className="relative">
                      <textarea
                        readOnly
                        value={negativeKeywordsList}
                        className="w-full bg-slate-900 text-[#00FF66] font-mono p-3 text-xs rounded-xl h-44 cursor-text border border-slate-950 focus:outline-none"
                      />
                      <span className="absolute bottom-2 right-3 text-[9px] text-gray-500 font-mono">Bao gồm 18 từ phủ định tinh lọc</span>
                    </div>
                  </div>

                  <div className="space-y-3 flex flex-col justify-between">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2.5">
                      <p className="text-xs font-bold text-slate-900">💡 Hướng dẫn cài đặt phủ định trên Google Ads:</p>
                      <ol className="list-decimal pl-4 text-[11px] text-slate-600 space-y-2 leading-relaxed">
                        <li>Truy cập tài khoản Google Ads của bạn &rarr; Chọn chiến dịch đăng ký gói.</li>
                        <li>Ở menu bên trái chọn mục <strong>Từ khóa (Keywords)</strong> &rarr; Click tab <strong>Từ khóa phủ định (Negative Keywords)</strong>.</li>
                        <li>Nhấp vào nút cộng đỏ <strong className="text-red-650">+</strong> để thêm từ khóa phủ định mới.</li>
                        <li>Dán toàn bộ các từ đối thủ đã sao chép bên trái vào ô nhập dán.</li>
                        <li>Bấm <strong>Lưu</strong>. Quảng cáo của bạn sẽ hoàn toàn ẩn đi trước người dùng Mobifone và Vinaphone!</li>
                      </ol>
                    </div>

                    <div className="border border-green-200 bg-green-50/60 rounded-xl p-3 text-xs space-y-1">
                      <p className="font-bold text-green-800 flex items-center gap-1">⭐ Từ khóa chạy khuyến nghị (Phrase Match):</p>
                      <p className="text-green-950 leading-relaxed text-[11px]">
                        Nên sử dụng đối sánh cụm từ (dùng dấu ngoặc kép) thay vì đối sánh rộng để lọc tệp khách hàng có ý định đăng ký trực hệ Viettel cụ thể:
                      </p>
                      <p className="font-mono bg-white border border-green-100 p-1.5 rounded text-green-700 text-[10px] whitespace-pre-line font-bold">
                        {safeKeywordsList}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* STEP 3: ACCOUNT WARMUP & IP ENVIRONMENT */}
          {(activeTab === 'all' || activeTab === 'account') && (
            <section className="space-y-4 print:break-inside-avoid">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-250">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center font-mono">3</span>
                <div>
                  <h4 className="font-extrabold text-base text-slate-900 uppercase">Quy chuẩn 3: Kỹ Thuật Nuôi Tài Khoản & Setup IP Thực Tế</h4>
                  <p className="text-xs text-gray-500 font-medium">Bảo đảm lớp vỏ danh tính kỹ thuật (Technical Persona Environment) bền vững để tránh treo thanh toán đáng ngờ</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-4 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  {/* Account setup box */}
                  <div className="border border-gray-150 rounded-xl p-4 space-y-2.5 bg-gradient-to-b from-white to-slate-50">
                    <div className="flex items-center gap-2 text-slate-900 font-bold">
                      <Lock className="w-4 h-4 text-slate-650" />
                      Gmail Quảng Cáo
                    </div>
                    <p className="text-gray-600 leading-relaxed text-[11px]">
                      Ưu tiên sử dụng <strong>Gmail cũ (đã tạo trên 3 tháng)</strong>, có lịch sử mở đọc thư điện tử, xem YouTube hoặc đã từng liên kết mua phần mềm. Nếu phải dùng Gmail mới tinh, hãy tiến hành nuôi trong <strong>3-5 ngày</strong> bằng cách online đăng nhập thường xuyên để tích lũy Cookie tin cậy trước khi thiết lập hồ sơ Google Ads.
                    </p>
                  </div>

                  {/* IP address box */}
                  <div className="border border-gray-150 rounded-xl p-4 space-y-2.5 bg-gradient-to-b from-white to-slate-50">
                    <div className="flex items-center gap-2 text-slate-900 font-bold">
                      <Globe className="w-4 h-4 text-slate-650" />
                      Yếu Tố Đường Truyền (IP)
                    </div>
                    <p className="text-gray-600 leading-relaxed text-[11px]">
                      Tuyệt đối <strong>KHÔNG dùng VPN, Proxy thay đổi IP, hoặc mạng WiFi cộng cộng kém an ninh</strong> liên tục khi đang thao tác cài đặt Ads. Nên thực hiện thiết lập trên đường truyền mạng IP tĩnh gia đình (Residential IP) cố định hoặc đường mạng điện thoại của bạn. Tránh xa các nhà mạng ảo dải IP động biến thiên liên tục.
                    </p>
                  </div>

                  {/* Payment Card Box */}
                  <div className="border border-gray-150 rounded-xl p-4 space-y-2.5 bg-gradient-to-b from-white to-slate-50">
                    <div className="flex items-center gap-2 text-slate-900 font-bold">
                      <Shield className="w-4 h-4 text-slate-650" />
                      An Toàn Thanh Toán (Billing)
                    </div>
                    <p className="text-gray-600 leading-relaxed text-[11px]">
                      Thẻ thanh toán (Visa/Mastercard) liên kết thanh toán phải là <strong>thẻ cứng vật lý chính chủ</strong> đại diện của người sở hữu, có tên chủ thẻ trùng khớp hoàn toàn với tên khách hàng trên chứng minh thư nhân dân. Tránh sử dụng thẻ ảo, thẻ mượn dùng chung nhiều tài khoản vì rất dễ bị đánh lỗi thanh toán đáng ngờ.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 text-slate-100 p-4 rounded-xl flex items-start gap-3 text-xs leading-relaxed">
                  <div className="bg-amber-500/20 text-amber-400 p-1 rounded">
                    <Laptop className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-amber-400 font-bold">💡 Lưu ý thiết lập Ban Đầu (Campaign Sandbox phase):</strong>
                    <p className="mt-1 text-slate-300">
                      Khi mới lên chiến dịch đầu tiên, khuyên dắt ngân sách hàng ngày ở mức <strong>50.000 VNĐ đến 100.000 VNĐ</strong> để tập cho thuật toán học từ từ. Chạy mồi trong 2 ngày đầu, sau đó mới nâng dần 20-30% ngân sách mỗi ngày. Tránh lên phát ngân sách tiền triệu ngay ngày đầu tiên khiến robot Google kích hoạt hệ thống cảnh báo bất thường!
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* STEP 4: ADVERTISER VERIFICATION STEP-BY-STEP */}
          {(activeTab === 'all' || activeTab === 'verification') && (
            <section className="space-y-4 print:break-inside-avoid">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-250">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center font-mono">4</span>
                <div>
                  <h4 className="font-extrabold text-base text-slate-900 uppercase">Quy chuẩn 4: Quy trình vượt Xác Minh Danh Tính Nhà Quảng Cáo</h4>
                  <p className="text-xs text-gray-500 font-medium">Bình tĩnh mở khóa khi Google yêu cầu xác minh thương hiệu & mối quan hệ đối tác liên kết độc lập</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-4 shadow-sm">
                <p className="text-xs text-gray-600 leading-relaxed">
                  Hiện nay Google yêu cầu 100% tài khoản quảng cáo phải thực hiện <strong className="text-slate-950 font-bold">Xác minh Danh tính (Advertiser Verification)</strong>. Khi nhận được cổng thông báo, hãy tuân theo các bước kỹ thuật chi tiết sau để bảo đảm đạt tỷ lệ duyệt tuyệt đối:
                </p>

                <div className="space-y-3.5 pt-1.5 text-xs text-gray-700">
                  <div className="flex gap-3 bg-gray-50 p-3 rounded-xl border border-gray-150">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center font-mono shrink-0">1</div>
                    <div className="space-y-1">
                      <p className="font-bold text-slate-900">Bước 1: Chuẩn bị Giấy Tờ Tùy Thân chuẩn chỉ</p>
                      <p className="leading-relaxed">
                        Chụp ảnh hai mặt rõ nét thẻ CCCD hoặc Hộ chiếu của người chủ đứng tên hồ sơ thanh toán thẻ Visa. Ảnh chụp không bị mất góc, không lóa ánh sáng đèn flash, định dạng ảnh rõ ràng từ chữ đến số.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 bg-gray-50 p-3 rounded-xl border border-gray-150">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center font-mono shrink-0">2</div>
                    <div className="space-y-1">
                      <p className="font-bold text-slate-900">Bước 2: Điền Hồ Sơ Trả Lời Câu Hỏi Cấu Trúc Tổ Chức</p>
                      <p className="leading-relaxed">
                        Khi Google hỏi: &ldquo;Bạn có sở hữu nhãn hiệu hay thương hiệu dịch vụ đang chạy không?&rdquo; hay &ldquo;Bạn quảng cáo đại diện cho ai?&rdquo;. Hãy chọn và điền như sau:
                      </p>
                      <p className="bg-slate-100 border-l-4 border-red-500 p-2 text-slate-805 leading-relaxed font-mono mt-1 text-[11px] select-all">
                        &quot;Chúng tôi là Đại lý ủy nhiệm và Cộng tác viên Tiếp thị liên kết (Affiliate Publisher) độc lập của Viettel. Chúng tôi tiến hành giới thiệu gói cước cước viễn thông cho người tiêu dùng với cơ chế miễn phí dịch vụ hoàn toàn. Khách hàng lựa chọn và nạp tiền thanh toán cước trực tiếp từ tài khoản gốc SIM gửi trực tiếp lên tổng đài quốc gia 290 của Viettel Telecom. Thương vụ giới thiệu được hệ thống Viettel ghi nhận tự động dựa trên cú pháp đăng ký do nhà mạng cấp và trả huê hồng định kỳ hoa hồng tiếp thị theo thỏa thuận mã của chúng tôi.&quot;
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 bg-gray-50 p-3 rounded-xl border border-gray-150">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center font-mono shrink-0">3</div>
                    <div className="space-y-1">
                      <p className="font-bold text-slate-900">Bước 3: Khai báo liên kết Website</p>
                      <p className="leading-relaxed">
                        Cung cấp đường dẫn trang web <strong>tracuugoicuoc.com</strong> làm minh chứng. Rõ ràng trên giao diện, banner công bố đã xuất hiện đầy đủ thông tin miễn trừ, chỉ rõ chúng tôi không phải trang chủ và mọi thanh toán trả phí đều do Viettel xử lý trực tiếp, cam kết ko lấy thông tin riêng tư ngân hàng hay ví điện tử của khách. Điều này chứng minh ta tuân thủ 100% chính sách chống gian lận lừa đảo người dùng.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* STEP 5: WEBSITE DECLARATION & GOOGLE TAG SYNC */}
          {(activeTab === 'all' || activeTab === 'webSync') && (
            <section className="space-y-4 print:break-inside-avoid">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-250">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center font-mono">5</span>
                <div>
                  <h4 className="font-extrabold text-base text-slate-900 uppercase font-sans">Quy chuẩn 5: Đồng bộ hóa kỹ thuật & Khai báo Website pháp lý</h4>
                  <p className="text-xs text-gray-400 font-semibold">Từng bước tích hợp tệp cấu hình, thẻ theo dõi chuyển đổi và các quy phạm pháp lý hợp chuẩn</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-5 shadow-sm">
                
                {/* 1. Ownership Declaration */}
                <div className="space-y-2">
                  <h5 className="font-bold text-slate-950 flex items-center gap-2 text-xs sm:text-sm">
                    <span className="w-2 h-2 rounded-full bg-red-650"></span>
                    1. Khai báo xác thực Tên Miền sạch với Google Search Console
                  </h5>
                  <div className="text-xs text-gray-650 leading-relaxed pl-4 space-y-1.5">
                    <p>
                      Mỗi khi chạy quảng cáo trên tên miền <strong>tracuugoicuoc.com</strong>, bạn cần đồng bộ hóa quyền sở hữu tên miền trong bảng điều khiển Webmaster của Google để gia tăng đáng kể điểm uy tín (Domain Authority/Trust Score):
                    </p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Truy cập <strong className="text-slate-900">Google Search Console</strong> &rarr; Điền tên miền của bạn vào mục thêm thuộc tính.</li>
                      <li>Chọn xác minh bằng phương thức <strong className="text-blue-600">Bản ghi DNS (TX Record)</strong>: Sao chép đoạn văn bản mã hóa dạng <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">google-site-verification=...</code> và dán vào phần cấu hình DNS của nhà quản trị đăng ký tên miền (iNET, Tenten, Cloudflare, Mat Bao...).</li>
                      <li>Nếu sử dụng tên miền phụ hoặc máy chủ hosting dùng chung, bạn có thể chọn xác minh nhanh bằng cách dán <strong className="text-blue-600">Thẻ Meta HTML</strong> vào cặp thẻ <code>&lt;head&gt;</code> của mã nguồn trang chủ.</li>
                    </ul>
                  </div>
                </div>

                {/* 2. Google Tag Manager / gtag.js Tracking */}
                <div className="space-y-2 border-t border-gray-150 pt-4">
                  <h5 className="font-bold text-slate-950 flex items-center gap-2 text-xs sm:text-sm">
                    <span className="w-2 h-2 rounded-full bg-red-650"></span>
                    2. Tích hợp Google Tag & Theo dõi Chuyển Đổi (Conversion Tracking)
                  </h5>
                  <div className="text-xs text-gray-650 leading-relaxed pl-4 space-y-2">
                    <p>
                      Để đo lường chuẩn xác xem có bao nhiêu khách hàng nhấp chuột từ Google Ads thực hiện soạn cú pháp hoặc click đăng ký nút gửi SMS & quét mã QR, hãy đồng bộ <strong>Google Tag (gtag.js)</strong>:
                    </p>
                    
                    <div className="bg-slate-950 text-[#00E5FF] p-3 rounded-lg font-mono text-[10px] space-y-1 select-all relative">
                      <span className="absolute top-2 right-2 text-gray-500 text-[8px] uppercase">SCRIPT KHUYẾN NGHỊ</span>
                      <p>&lt;!-- Google tag (gtag.js) --&gt;</p>
                      <p>&lt;script async src=&quot;https://www.googletagmanager.com/gtag/js?id=AW-YOUR_CONVERSION_ID&quot;&gt;&lt;/script&gt;</p>
                      <p>&lt;script&gt;</p>
                      <p>&nbsp;&nbsp;window.dataLayer = window.dataLayer || [];</p>
                      <p>&nbsp;&nbsp;function gtag()&#123;dataLayer.push(arguments);&#125;</p>
                      <p>&nbsp;&nbsp;gtag(&apos;js&apos;, new Date());</p>
                      <p>&nbsp;&nbsp;gtag(&apos;config&apos;, &apos;AW-YOUR_CONVERSION_ID&apos;);</p>
                      <p>&lt;/script&gt;</p>
                    </div>

                    <p className="text-[11px] text-gray-500 italic">
                      💡 Bạn dán đoạn mã theo dõi trên trực tiếp vào file <code>index.html</code> (trước thẻ đóng <code>&lt;/head&gt;</code>). Sau đó thiết lập sự kiện Trigger &quot;Click Button&quot; cho các nút <strong>Đăng ký ngay</strong> hoặc <strong>Nhận gói ưu đãi</strong> để ghi nhận lượt chuyển đổi (Conversion) về tài khoản Ads giúp tối ưu giá thầu thông minh (Smart Bidding).
                    </p>
                  </div>
                </div>

                {/* 3. Footer Policy Compliance */}
                <div className="space-y-2 border-t border-gray-150 pt-4">
                  <h5 className="font-bold text-slate-950 flex items-center gap-2 text-xs sm:text-sm">
                    <span className="w-2 h-2 rounded-full bg-red-650"></span>
                    3. Đồng bộ hiển thị hệ thống Chính sách pháp lý (Chính sách bảo mật & Điều khoản)
                  </h5>
                  <div className="text-xs text-slate-650 leading-relaxed pl-4 space-y-1.5">
                    <p>
                      Google Ads Core Bot quét kiểm tra website cực kỳ gắt gao các liên kết pháp lý bảo vệ người truy cập. Nếu chân trang (Footer) chỉ để chữ tĩnh không có trang nội dung chạy thực tế, tài khoản sẽ lập tức bị khóa do coi là trang lừa đảo hoặc cố ý che giấu thông tin.
                    </p>
                    <p className="font-semibold text-green-700">
                      ✅ TRANG TRẮC CỨU GÓI CƯỚC ĐÃ ĐƯỢC ĐỒNG BỘ HOÀN TOÀN:
                    </p>
                    <ul className="list-disc pl-4 space-y-1 text-[11px] text-gray-600">
                      <li>Tại góc dưới cùng website, chúng tôi đã tích hợp sẵn và chạy hoàn thiện 3 trang nội dung pháp lý chính thống bật cửa sổ pop-up (Modal) tức thì: <strong>Chính sách bảo mật (Privacy Policy)</strong>, <strong>Điều khoản sử dụng (Terms of use)</strong>, và <strong>Tuyên bố miễn trừ trách nhiệm (Disclaimer)</strong>.</li>
                      <li>Nội dung của các trang này đã được biên soạn tỉ mỉ theo đúng chuẩn phê duyệt của Google: Làm rõ vai trò Affiliate Marketer độc lập, không mạo danh thu tiền khách hàng, bảo mật dữ liệu Cookie người dùng. Điều này tự tin giúp bạn vượt qua 100% các chiến dịch kiểm duyệt gắt gao mạo danh từ Google.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>
          )}

          {/* CHECKLIST SUCCESS AND VERIFIED */}
          {(activeTab === 'all') && (
            <section className="bg-slate-900 text-white p-6 rounded-2xl space-y-4 print:bg-white print:text-slate-900 print:border print:border-slate-300">
              <h4 className="font-extrabold text-base tracking-tight uppercase flex items-center gap-1.5 text-[#00FF55] print:text-emerald-800">
                <Shield className="w-5 h-5" />
                Bộ Kiểm Tra Vận Hành - Đầy Đủ Các Bước
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-green-500 shrink-0" id="chk-1" />
                    <label htmlFor="chk-1">Đổi tên miền sạch sang <strong>tracuugoicuoc.com</strong> thành công.</label>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-green-500 shrink-0" id="chk-2" />
                    <label htmlFor="chk-2">Banner công bố minh bạch quan hệ CTV độc lập đã hiển trị đầu trang.</label>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-green-500 shrink-0" id="chk-3" />
                    <label htmlFor="chk-3">Footer hiển thị đầy đủ tuyên bố bản quyền &ldquo;Viettel&rdquo;.</label>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-green-500 shrink-0" id="chk-4" />
                    <label htmlFor="chk-4">Thiết lập bộ danh sách phủ định 18 từ đối thủ (Mobi/Vina).</label>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-green-500 shrink-0" id="chk-5" />
                    <label htmlFor="chk-5">Từ khóa thiết lập dạng dấy ngoặc kép (Phrase Match).</label>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-green-500 shrink-0" id="chk-6" />
                    <label htmlFor="chk-6">Duy trì mạng IP WiFi gia đình cố định khi cài đặt cấu hình ads.</label>
                  </div>
                </div>
              </div>
            </section>
          )}

        </div>

        {/* Modal Action Footer */}
        <div className="p-4 border-t border-gray-150 bg-gray-50 flex items-center justify-between shrink-0 print:hidden">
          <p className="text-[10px] text-gray-500">
            Ứng dụng hỗ trợ tối ưu dữ liệu mạng di động quốc gia Viettel
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-200 bg-white hover:bg-gray-100 rounded-lg text-xs font-semibold text-gray-700 cursor-pointer transition-colors"
            >
              Đóng Manual
            </button>
            <button
              onClick={handlePrintPdf}
              className="px-4 py-2 bg-[#D71920] hover:bg-[#B3141A] text-white rounded-lg text-xs font-bold shadow-xs cursor-pointer flex items-center gap-1.5 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Tải Xuất File PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
