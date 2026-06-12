import React from 'react';
import { Smartphone, Zap, PhoneCall, Globe, Sparkles, Youtube, CheckCircle2 } from 'lucide-react';
import { TelecomPackage } from '../types';

interface PackageCardProps {
  key?: any;
  pkg: TelecomPackage;
  onSelect: (pkgId: string) => void;
  onOpenDetails: (pkg: TelecomPackage) => void;
}

export default function PackageCard({ pkg, onSelect, onOpenDetails }: PackageCardProps) {
  // Calculate daily cost for micro-marketing text
  const dailyCost = Math.round(pkg.price / parseInt(pkg.duration) || 30);

  // Return background tag styling based on category
  const getCategoryBadge = () => {
    switch (pkg.category) {
      case 'social':
        return 'bg-pink-100 text-pink-700 border-pink-200';
      case 'combo':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'data':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'long_term':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryName = () => {
    switch (pkg.category) {
      case 'social': return 'Mạng Xã Hội';
      case 'combo': return 'Combo Thoại + Data';
      case 'data': return 'Siêu Tốc Data';
      case 'long_term': return 'Chu Kỳ Dài';
      default: return 'Gói Ưu Đãi';
    }
  };

  return (
    <article 
      className="bg-white rounded-lg border border-gray-200 hover:border-[#D71920] shadow-2xs hover:shadow-xs transition-all duration-350 flex flex-col justify-between overflow-hidden relative group"
    >
      {/* Hot badge marker */}
      {pkg.popular && (
        <div className="absolute top-0 left-0 bg-gradient-to-r from-red-750 to-orange-500 text-white font-black text-[9px] uppercase px-2.5 py-0.5 rounded-br shadow-xs tracking-wider z-10 flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-yellow-300" />
          Hot Nhất
        </div>
      )}

      {/* Card Content Top Block */}
      <div className="p-4 sm:p-5 space-y-3 flex-1">
        
        {/* Header Metadata */}
        <div className="flex items-center justify-between gap-1.5 pt-1.5">
          <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getCategoryBadge()}`}>
            {getCategoryName()}
          </span>
          <span className="text-[10px] font-bold text-gray-400 font-mono">
            Hạn dùng: {pkg.duration}
          </span>
        </div>

        {/* Big Code Name and Price */}
        <div className="space-y-1 text-center flex flex-col items-center justify-center">
          <h3 className="text-xl sm:text-2xl font-black text-[#D71920] tracking-tight font-mono transition-transform duration-200 uppercase w-full text-center">
            {pkg.name}
          </h3>
          <div className="flex items-center justify-center gap-1 w-full text-center">
            <span className="text-lg sm:text-xl font-black text-gray-950 font-mono tracking-tight">
              {pkg.price.toLocaleString('vi-VN')}đ
            </span>
            <span className="text-[10px] text-gray-400 font-bold uppercase">/ {pkg.duration === '30 Ngày' ? 'Tháng' : pkg.duration}</span>
          </div>
          <p className="text-[10px] text-gray-500 font-medium w-full text-center">
            Khoảng <strong className="text-gray-700 font-mono">{dailyCost.toLocaleString('vi-VN')}đ</strong> / ngày
          </p>
        </div>

        {/* Highlighting Quota Specs */}
        <div className="py-2.5 px-3 bg-slate-50 rounded-lg space-y-1.5 border border-gray-150">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500 flex items-center gap-1 font-medium">
              <Globe className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
              Tổng dung lượng:
            </span>
            <span className="font-bold text-gray-800 font-mono bg-white px-1.5 py-0.5 rounded border border-gray-200 text-[11px]">
              {pkg.dataLimit}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500 flex items-center gap-1 font-medium">
              <Zap className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
              Tốc độ cao:
            </span>
            <span className="font-extrabold text-[#D71920] font-mono text-[11px]">
              {pkg.dataPerDay}
            </span>
          </div>

          {pkg.calls && (
            <div className="text-[10px] pt-1.5 border-t border-gray-255 text-gray-650 space-y-0.5">
              {pkg.calls.internal && (
                <div className="flex items-start gap-1">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="line-clamp-1">{pkg.calls.internal}</span>
                </div>
              )}
              {pkg.calls.external && (
                <div className="flex items-start gap-1">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="line-clamp-1">Ngoại mạng: {pkg.calls.external}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Free Social Applications badges */}
        {pkg.social && pkg.social.length > 0 && (
          <div className="space-y-1">
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block">Miễn Phí Data:</span>
            <div className="flex flex-wrap gap-1">
              {pkg.social.includes('youtube') && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-rose-50 text-rose-600 border border-rose-100 px-1.5 py-0.5 rounded">
                  📺 YouTube
                </span>
              )}
              {pkg.social.includes('tiktok') && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-stone-900 text-white px-1.5 py-0.5 rounded">
                  🎵 TikTok
                </span>
              )}
              {pkg.social.includes('facebook') && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100 px-1.5 py-0.5 rounded">
                  👥 Facebook
                </span>
              )}
              {pkg.social.includes('messenger') && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-indigo-50 text-indigo-600 border border-indigo-100 px-1.5 py-0.5 rounded">
                  💬 Messenger
                </span>
              )}
            </div>
          </div>
        )}

        {/* Short Summary benefits text */}
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
          {pkg.description}
        </p>

      </div>

      {/* Card Action Footer */}
      <div className="p-3 bg-slate-50 border-t border-gray-150 flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={() => onOpenDetails(pkg)}
          className="flex-1 py-1.5 bg-white hover:bg-slate-100 border border-gray-200 text-gray-700 text-xs font-bold rounded text-center cursor-pointer transition-colors"
        >
          Chi Tiết
        </button>

        <button
          type="button"
          onClick={() => onSelect(pkg.id)}
          className="flex-1 py-1.5 bg-[#D71920] hover:bg-red-700 active:bg-red-800 text-white text-xs font-bold rounded text-center shadow-2xs cursor-pointer transition-colors"
        >
          Đăng Ký
        </button>
      </div>

    </article>
  );
}
