import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, RefreshCw, Layers, PhoneCall, Globe, TrendingUp, Sparkles } from 'lucide-react';
import { TelecomPackage, PackageCategory } from '../types';
import { VIETTEL_PACKAGES } from '../data/packages';
import PackageCard from './PackageCard';

interface PackageGridProps {
  onSelectPackage: (pkgId: string) => void;
  onOpenDetails: (pkg: TelecomPackage) => void;
  searchQuery: string;
  onSearchReset: () => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function PackageGrid({
  onSelectPackage,
  onOpenDetails,
  searchQuery,
  onSearchReset,
  selectedCategory,
  onCategoryChange
}: PackageGridProps) {
  // Local active filters state
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [dataFilter, setDataFilter] = useState<string>('all');
  const [privilegeFilter, setPrivilegeFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('default');

  const categories: { label: string; value: string }[] = [
    { label: 'Tất Cả Gói Cước', value: 'all' },
    { label: '🔥 Hottest', value: 'hot' },
    { label: '⚡ Siêu Tốc Data', value: 'data' },
    { label: '📱 Gói Mạng Xã Hội', value: 'social' },
    { label: '📞 Combo Thoại + Data', value: 'combo' },
    { label: '⏳ Chu Kỳ Dài (6-12T)', value: 'long_term' },
  ];

  const filteredPackages = useMemo(() => {
    let result = [...VIETTEL_PACKAGES];

    // 1. Process main category tab selection
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'hot') {
        result = result.filter((p) => p.popular);
      } else {
        result = result.filter((p) => p.category === selectedCategory);
      }
    }

    // 2. Process search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.dataLimit.toLowerCase().includes(q) ||
          p.benefits.some((b) => b.toLowerCase().includes(q))
      );
    }

    // 3. Process price filter
    if (priceFilter !== 'all') {
      if (priceFilter === 'under100') {
        result = result.filter((p) => p.price < 100000);
      } else if (priceFilter === '100to150') {
        result = result.filter((p) => p.price >= 100000 && p.price <= 150000);
      } else if (priceFilter === 'over150') {
        result = result.filter((p) => p.price > 150000);
      }
    }

    // 4. Process daily data allowance filter
    if (dataFilter !== 'all') {
      if (dataFilter === '1gb') {
        result = result.filter((p) => p.dataPerDay.startsWith('1 GB'));
      } else if (dataFilter === '1.5gb') {
        result = result.filter((p) => p.dataPerDay.startsWith('1.5 GB'));
      } else if (dataFilter === '2gb') {
        result = result.filter((p) => p.dataPerDay.startsWith('2 GB'));
      } else if (dataFilter === '3gbplus') {
        // match "3 GB", "8 GB" etc
        result = result.filter((p) => {
          const quota = parseFloat(p.dataPerDay);
          return quota >= 3;
        });
      }
    }

    // 5. Process privileges filter
    if (privilegeFilter !== 'all') {
      if (privilegeFilter === 'calls') {
        result = result.filter((p) => p.calls && (p.calls.internal || p.calls.external));
      } else if (privilegeFilter === 'mxh') {
        result = result.filter((p) => p.social && p.social.length > 0);
      }
    }

    // 6. Process sorting criteria
    if (sortBy === 'price_asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price_desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'data_desc') {
      const parseData = (str: string) => {
        const val = parseFloat(str) || 0;
        return val;
      };
      result.sort((a, b) => parseData(b.dataPerDay) - parseData(a.dataPerDay));
    }

    return result;
  }, [selectedCategory, searchQuery, priceFilter, dataFilter, privilegeFilter, sortBy]);

  const handleResetFilters = () => {
    setPriceFilter('all');
    setDataFilter('all');
    setPrivilegeFilter('all');
    setSortBy('all');
    onSearchReset();
    onCategoryChange('all');
  };

  return (
    <section id="goi-cuoc" className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      
      {/* Title block */}
      <div className="text-center md:text-left space-y-2 border-b border-gray-150 pb-4">
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center justify-center md:justify-start gap-2 uppercase italic">
          <Layers className="w-5.5 h-5.5 text-[#D71920]" />
          Bảng Giá Đăng Ký Gói Cước 4G/5G Viettel
        </h2>
        <p className="text-xs text-gray-500 max-w-2xl leading-relaxed">
          Tổng hợp chi tiết toàn bộ gói cước Viettel đang được triển khai áp dụng năm 2026. Lựa chọn bộ lọc để nhanh chóng khoanh vùng gói cước tối ưu nhu cầu và ngân sách của bạn.
        </p>
      </div>

      {/* Tabs category selector scroll wheel (Desktop + Mobile inline scroll) */}
      <div className="flex items-center overflow-x-auto pb-1.5 -mx-4 px-4 sm:mx-0 sm:px-0 gap-1.5 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => onCategoryChange(cat.value)}
            className={`px-3.5 py-1.5 rounded text-xs font-bold border shrink-0 transition-all cursor-pointer uppercase tracking-wider whitespace-nowrap ${
              selectedCategory === cat.value
                ? 'bg-[#D71920] text-white border-[#D71920] shadow-sm'
                : 'bg-white hover:bg-slate-50 text-gray-700 border-gray-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Filter and sorting widgets block */}
      <div className="bg-slate-50 border border-gray-200 p-4 rounded-xl space-y-4 shadow-3xs">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-800">
            <SlidersHorizontal className="w-4 h-4 text-[#D71920]" />
            Bộ Lọc Tìm Kiếm Nâng Cao
          </div>
          <button
            type="button"
            onClick={handleResetFilters}
            className="text-xs text-[#D71920] hover:text-red-700 font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Đặt Lại Bộ Lọc
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Price Range Filter */}
          <div className="space-y-1">
            <label htmlFor="filter-price" className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Ngân Sách / Tháng</label>
            <select
              id="filter-price"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="w-full text-xs bg-white border border-gray-300 rounded py-2 px-2.5 font-semibold text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#D71920] focus:border-[#D71920] cursor-pointer"
            >
              <option value="all">Tất cả mức giá</option>
              <option value="under100">Dưới 100.000đ</option>
              <option value="100to150">Từ 100k - 150.000đ</option>
              <option value="over150">Trên 150.000đ</option>
            </select>
          </div>

          {/* Daily quota limitation filter */}
          <div className="space-y-1">
            <label htmlFor="filter-data" className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Data Tốc Độ Cao / Ngày</label>
            <select
              id="filter-data"
              value={dataFilter}
              onChange={(e) => setDataFilter(e.target.value)}
              className="w-full text-xs bg-white border border-gray-300 rounded py-2 px-2.5 font-semibold text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#D71920] focus:border-[#D71920] cursor-pointer"
            >
              <option value="all">Tất cả lưu lượng</option>
              <option value="1gb">1 GB / ngày</option>
              <option value="1.5gb">1.5 GB / ngày</option>
              <option value="2gb">2 GB / ngày</option>
              <option value="3gbplus">Từ 3 GB trở lên / ngày</option>
            </select>
          </div>

          {/* Specific privilege filters (calls vs app bypass) */}
          <div className="space-y-1">
            <label htmlFor="filter-privilege" className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Đặc Quyền Kèm Theo</label>
            <select
              id="filter-privilege"
              value={privilegeFilter}
              onChange={(e) => setPrivilegeFilter(e.target.value)}
              className="w-full text-xs bg-white border border-gray-300 rounded py-2 px-2.5 font-semibold text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#D71920] focus:border-[#D71920] cursor-pointer"
            >
              <option value="all">Mọi đặc quyền</option>
              <option value="calls">Khuyến mãi thoại (Gặp gỡ/Gọi thoại)</option>
              <option value="mxh">Miễn phí data MXH (Youtube/Tiktok)</option>
            </select>
          </div>

          {/* Sorting filters */}
          <div className="space-y-1">
            <label htmlFor="filter-sort" className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Sắp Xếp Hiển Thị</label>
            <select
              id="filter-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full text-xs bg-white border border-gray-300 rounded py-2 px-2.5 font-semibold text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#D71920] focus:border-[#D71920] cursor-pointer"
            >
              <option value="default">Mặc định phổ biến</option>
              <option value="price_asc">Giá gói tăng dần</option>
              <option value="price_desc">Giá gói giảm dần</option>
              <option value="data_desc">Dung lượng khủng nhất</option>
            </select>
          </div>

        </div>

        {/* Informative counts badge */}
        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center justify-between">
          <span>Tìm thấy <strong className="text-[#D71920] font-bold">{filteredPackages.length}</strong> gói cước phù hợp</span>
          {searchQuery && (
            <span>Từ khóa: "<span className="italic text-gray-700 font-bold">{searchQuery}</span>"</span>
          )}
        </div>
      </div>

      {/* Grid of Results */}
      {filteredPackages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelect={onSelectPackage}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      ) : (
        /* Empty State with elegant details */
        <div className="py-12 text-center bg-slate-50 rounded-xl border border-dashed border-gray-300 space-y-3">
          <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto text-lg">
            🔍
          </div>
          <div className="max-w-md mx-auto space-y-1">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Không tìm thấy gói cước</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed text-center px-4">
              Rất tiếc bộ lọc quá hẹp nên không có dòng sản phẩm nào đáp ứng. Bạn thử đặt lại các tham số cấu hình.
            </p>
          </div>
          <button
            type="button"
            onClick={handleResetFilters}
            className="px-4 py-2 bg-[#D71920] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wide rounded shadow-xs transition-colors cursor-pointer"
          >
            Đặt Lại Bộ Lọc
          </button>
        </div>
      )}

    </section>
  );
}
