import React, { useState, useEffect } from 'react';
import { Sparkles, PhoneCall, Gift, ShieldAlert, ArrowRight, ArrowLeft } from 'lucide-react';
import { TelecomPackage, AgentConfig } from '../types';

interface HeroCarouselProps {
  config: AgentConfig;
  onSelectPackage: (pkgCode: string) => void;
  onOpenSettings: () => void;
}

interface Slide {
  badge: string;
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  colorFrom: string;
  colorTo: string;
  packageId: string;
}

export default function HeroCarousel({ config, onSelectPackage, onOpenSettings }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      badge: 'GÓI CƯỚC KHỦNG NHẤT 2026',
      title: 'MXH120 - Miễn Phí Trọn Gói Mạng Xã Hội',
      subtitle: 'Xem TikTok, lướt Facebook & cày YouTube không tốn một giọt data tốc độ cao!',
      price: '120.000đ / 30 ngày',
      features: [
        'Dùng Data thả ga cho YouTube, TikTok, Facebook, Messenger',
        'Tặng 30 GB Data tốc độ cao sử dụng ngoài ứng dụng (1GB/ngày)',
        'Miễn phí hoàn toàn gọi nội mạng cuộc gọi dưới 10 phút',
        'Tặng thêm 30 phút đàm thoại ngoại mạng miễn phí'
      ],
      colorFrom: 'from-red-650 via-red-600 to-orange-500',
      colorTo: 'from-orange-500 to-red-650',
      packageId: 'mxh120'
    },
    {
      badge: 'COMBO LÊN MẠNG & GỌI ĐIỆN QUỐC DÂN',
      title: 'V120B - Đăng Ký Nhiều Nhất',
      subtitle: 'Thăng hoa truyền thông với combo data tốc độ cao hằng ngày kết hợp đàm thoại không giới hạn.',
      price: '120.000đ / 30 ngày',
      features: [
        '1.5 GB Data tốc độ tốc cực cao mỗi ngày (tổng 45 GB/tháng)',
        'Miễn phí 100% cuộc gọi nội mạng Viettel dưới 10 phút',
        'Tặng 50 phút gọi mạng di động khác hằng tháng',
        'Cú pháp đăng ký nhanh thông qua cổng 290 bảo mật'
      ],
      colorFrom: 'from-amber-600 via-red-600 to-rose-700',
      colorTo: 'from-rose-700 to-amber-600',
      packageId: 'v120b'
    },
    {
      badge: 'SIÊU TỐC DI ĐỘNG KHÔNG GIỚI HẠN',
      title: 'SD120 - 60GB Data Tốc Độ Cao',
      subtitle: 'Trải nghiệm đỉnh cao của mạng 4G/5G Viettel với băng tần ưu tiên lớn nhất phục vụ công nghệ.',
      price: '120.000đ / 30 ngày',
      features: [
        '2 GB/ngày Data tốc độ cao liên tục trong tháng (tổng 60 GB)',
        'Hỗ trợ công nghệ 5G Ultra siêu mượt thế hệ mới',
        'Miễn phí gói Standard trên ứng dụng giải trí TV360',
        'Hạn chế ngắt kết nối đột ngột hoặc trừ cước âm tài khoản'
      ],
      colorFrom: 'from-red-650 via-rose-600 to-deep-red',
      colorTo: 'from-red-650 to-rose-600',
      packageId: 'sd120'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Banner Section + Details Grid */}
        <div className="relative rounded-xl overflow-hidden shadow-sm border border-red-200/20 min-h-[340px] md:min-h-[300px] flex flex-col justify-between">
          
          {/* Animated Background Gradients & Grids */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-[#D71920] to-orange-500 text-white pointer-events-none z-0"></div>
          
          {/* 5G High-contrast Watermark */}
          <div className="absolute right-12 top-0 bottom-0 hidden md:flex items-center opacity-20 select-none pointer-events-none z-0">
            <div className="text-[140px] font-black italic tracking-tighter leading-none text-white">5G</div>
          </div>

          {/* Slide Content Layout */}
          <div className="relative z-10 flex-1 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 text-white">
            <div className="max-w-2xl space-y-3.5">
              
              {/* Badge Tag */}
              <div className="inline-flex items-center gap-1 px-3 py-0.5 bg-white/20 border border-white/30 text-white rounded-full font-bold text-[10px] uppercase tracking-wider animate-pulse">
                <Sparkles className="w-3 h-3 text-yellow-305" />
                {slides[currentSlide].badge}
              </div>

              {/* Title Header */}
              <div className="space-y-1">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3.5xl font-black italic text-white tracking-tight leading-tight transition-all duration-500 uppercase">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-white/95 text-xs sm:text-sm leading-relaxed transition-all duration-500 font-medium">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2 transition-all duration-300">
                {slides[currentSlide].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs text-white/95">
                    <div className="w-4 h-4 shrink-0 rounded-full bg-white/25 flex items-center justify-center text-white text-[10px] font-bold mt-0.5">
                      ✓
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons & Pricing */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <div className="shrink-0">
                  <span className="text-[10px] text-white/70 block font-bold uppercase tracking-wider">Giá Gói Đăng Ký</span>
                  <span className="text-xl sm:text-2xl font-black text-yellow-300 font-mono tracking-tight">{slides[currentSlide].price}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectPackage(slides[currentSlide].packageId)}
                    className="px-5 py-2 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-slate-900 font-black text-xs uppercase tracking-wide rounded-full shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    Đăng Ký Ngay
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={config.zaloLink}
                    target="_blank"
                    aria-label="Liên hệ Zalo hỗ trợ kỹ thuật"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs font-bold rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-yellow-300" />
                    Hỏi Đại Lý
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation layout & Bullets inside bottom strip */}
          <div className="relative z-10 px-6 sm:px-8 py-4 border-t border-white/5 bg-black/35 backdrop-blur-xs flex items-center justify-between">
            {/* Slide Index Dot indicator */}
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-7 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlide ? 'bg-red-500 w-8' : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Slider control arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 active:bg-white/20 border border-white/5 text-gray-300 hover:text-white transition-all cursor-pointer"
                aria-label="Slide trước"
              >
                <ArrowLeft className="w-4.5 h-4.5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 active:bg-white/20 border border-white/5 text-gray-300 hover:text-white transition-all cursor-pointer"
                aria-label="Slide sau"
              >
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
