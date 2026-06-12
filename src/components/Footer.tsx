import React from 'react';
import { ShieldCheck, Phone, MapPin, Globe, CreditCard, Sparkles } from 'lucide-react';
import { AgentConfig } from '../types';

interface FooterProps {
  config: AgentConfig;
  onOpenPolicy: (type: 'privacy' | 'terms' | 'disclaimer') => void;
}

export default function Footer({ config, onOpenPolicy }: FooterProps) {
  return (
    <footer className="bg-[#0b0f19] text-slate-300 border-t border-slate-800/80 font-sans shadow-2xl relative z-10">
      
      {/* Top Value Propositions Row */}
      <div className="border-b border-slate-800/50 bg-[#080d16]">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 border border-red-500/25 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-white uppercase tracking-wider">Hạ tầng Viettel 100%</p>
              <p className="text-xs text-slate-400 mt-0.5">Đăng ký được giải quyết trực tiếp qua đầu số tổng đài 290.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 border border-red-500/25 flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-white uppercase tracking-wider">Miễn Phí Giao Dịch Gửi SMS</p>
              <p className="text-xs text-slate-400 mt-0.5">Nhà mạng cam kết không trừ thêm bất kỳ phụ thu ngoài đại lý.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 border border-red-500/25 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-white uppercase tracking-wider">Gia hạn thông minh và nhanh</p>
              <p className="text-xs text-slate-400 mt-0.5">Các gói cước sẽ tự động nhắc báo sạc gia hạn định kỳ 30 ngày.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 text-sm">
        
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-4">
          <div className="space-y-1.5">
            <div className="flex items-baseline gap-1.5">
              <span className="text-white font-black text-[20px] tracking-tight flex items-center uppercase italic font-sans animate-fade-in">
                tracuugoicuoc
                <span className="ml-[2px] w-2 h-2 bg-[#D71920] rounded-xs inline-block"></span>
              </span>
              <span className="bg-[#D71920] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-sm font-mono leading-none">.COM</span>
            </div>
            <p className="text-[10px] text-red-500 uppercase tracking-widest font-bold">KÊNH TIẾP THỊ LIÊN KẾT ĐỘC LẬP - CTV GIỚI THIỆU SỐ VIETTEL</p>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            Hệ thống website <strong className="text-white font-semibold">tracuugoicuoc.com</strong> là kênh số tiếp thị độc lập chuyên cung cấp thông tin, hướng dẫn tư vấn và hỗ trợ người dùng soạn nhanh cú pháp tin nhắn SMS đăng ký dịch vụ di động của cộng tác viên kênh số Viettel toàn quốc. Thông tin gói cước được cập nhật trực tiếp từ cơ sở dữ liệu nhà mạng Viettel Telecom.
          </p>

          <div className="bg-[#121826] p-5 border border-slate-800 rounded-xl space-y-3.5 text-xs shadow-lg">
            <p className="font-extrabold text-amber-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">⚠️ Tuyên bố minh bạch & Miễn trừ trách nhiệm:</p>
            <p className="text-slate-200 leading-relaxed font-normal text-[11.5px]">
              Thương hiệu, nhãn hiệu, logo &ldquo;Viettel&rdquo; trong trang web này thuộc bản quyền sở hữu hợp pháp của Tập đoàn Công nghiệp - Viễn thông Quân đội Viettel. Chúng tôi hoạt động độc lập với tư cách là Cộng tác viên Kênh Tiếp thị liên kết (Affiliate Marketer). 
            </p>
            <p className="text-slate-200 leading-relaxed font-normal pt-2.5 border-t border-slate-800/80 text-[11.5px]">
              Trang web hoàn toàn <strong className="text-white font-semibold underline decoration-red-500 underline-offset-2">KHÔNG thu tiền</strong> của người dùng, <strong className="text-white font-semibold">KHÔNG yêu cầu</strong> khai báo tài khoản ngân hàng hay ví điện tử, và <strong className="text-white font-semibold">KHÔNG mạo danh</strong> trang chủ viettel.vn. Khách hàng đăng ký gói cước trực tiếp tự nguyện bằng tin nhắn SMS miễn phí gửi đến tổng đài 290 và phí dịch vụ sẽ được Viettel trừ trực tiếp vào tài khoản chính của SIM.
            </p>
          </div>
        </div>

        {/* Categories Quick Links */}
        <div className="md:col-span-3 space-y-4 text-xs">
          <h4 className="font-bold text-white uppercase tracking-widest border-l-2 border-red-500 pl-2">Gói cước phân chia</h4>
          <ul className="space-y-2.5 text-slate-300">
            <li>
              <a href="#goi-cuoc" className="hover:text-red-400 transition-colors flex items-center gap-1">⚡ <span>Gói siêu tốc data SD70 - SD150</span></a>
            </li>
            <li>
              <a href="#goi-cuoc" className="hover:text-red-400 transition-colors flex items-center gap-1">📱 <span>Gói mạng xã hội MXH100 - MXH150</span></a>
            </li>
            <li>
              <a href="#goi-cuoc" className="hover:text-red-400 transition-colors flex items-center gap-1">📞 <span>Gói combo thoại V90B - V200B</span></a>
            </li>
            <li>
              <a href="#goi-cuoc" className="hover:text-red-400 transition-colors flex items-center gap-1">⏳ <span>Gói chu kỳ dài hạn 6T - 12T</span></a>
            </li>
          </ul>

          <h4 className="font-bold text-white uppercase tracking-widest border-l-2 border-red-500 pl-2 pt-3">Hướng dẫn bổ ích</h4>
          <ul className="space-y-2.5 text-slate-300">
            <li>• Cách hủy gia hạn 4G Viettel (HUY gửi 191)</li>
            <li>• Cách kiểm tra tài khoản chính (*101# gọi)</li>
            <li>• Đăng ký MultiSIM Viettel sử dụng song song</li>
          </ul>
        </div>

        {/* Contact/Support Column */}
        <div className="md:col-span-4 space-y-4 text-xs text-slate-350">
          <h4 className="font-bold text-white uppercase tracking-widest border-l-2 border-red-500 pl-2">Thông tin liên hệ đại lý</h4>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-2 pt-0.5">
              <MapPin className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed text-slate-300">Cơ sở hạ tầng khai thác miền Bắc: Tòa nhà Viettel, Lô D26 Khu đô thị mới Cầu Giấy, Yên Hòa, Cầu Giấy, Hà Nội.</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <span className="text-slate-300">Hotline Chăm Sóc: <strong className="text-white hover:underline hover:text-red-400"><a href={`tel:${config.supportPhone.replace(/\./g, '')}`}>{config.supportPhone}</a></strong></span>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-red-500 shrink-0" />
              <span className="text-slate-300">Đơn vị cộng tác: <strong className="text-red-500 font-semibold">{config.agentName}</strong></span>
            </li>
          </ul>

          <div className="pt-2">
            <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">
              Bản quyền website thuộc về tracuugoicuoc.com CTV đại lý ủy nhiệm. Tất cả thông tin gói cước đều thuộc quyền sở hữu của Tập đoàn Công nghiệp - Viễn thông Quân đội Viettel.
            </p>
          </div>
        </div>

      </div>

      {/* Copy / Bottom bar */}
      <div className="bg-[#05080e] text-slate-400 py-6 text-xs border-t border-slate-900 pb-20 md:pb-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 text-center sm:text-left">
            <span className="text-slate-200 font-extrabold tracking-tight text-[11px] flex items-center gap-1.5 shrink-0 uppercase select-none">
              <span className="w-2 h-2 bg-[#D71920] rounded-sm inline-block"></span>
              © 2026 tracuugoicuoc.com
            </span>
            <span className="hidden sm:inline text-slate-800 text-[10px]">•</span>
            <p className="text-slate-300 text-[11px] leading-relaxed font-normal">
              Kênh Đăng Ký Gói Cước Di Động Trực Tuyến <span className="text-slate-700 font-normal">|</span> <span className="text-slate-400 italic">Mọi thông tin gói cước và dịch vụ được cập nhật & đồng bộ hóa chính xác theo chính sách chính thức của Viettel Telecom</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 justify-center text-[11px] shrink-0 border-t border-slate-800/50 pt-3 lg:pt-0 lg:border-t-0">
            <button onClick={() => onOpenPolicy('privacy')} className="hover:text-red-400 text-slate-300 font-bold bg-transparent border-none p-0 inline-block transition-colors cursor-pointer">Chính sách bảo mật</button>
            <span className="text-slate-800 select-none">/</span>
            <button onClick={() => onOpenPolicy('terms')} className="hover:text-red-400 text-slate-300 font-bold bg-transparent border-none p-0 inline-block transition-colors cursor-pointer">Điều khoản sử dụng</button>
            <span className="text-slate-800 select-none">/</span>
            <button onClick={() => onOpenPolicy('disclaimer')} className="hover:text-red-400 text-slate-300 font-bold bg-transparent border-none p-0 inline-block transition-colors cursor-pointer">Miễn trừ trách nhiệm</button>
          </div>
        </div>
      </div>

    </footer>
  );
}
