import React from 'react';
import { X, ShieldCheck, Scale, FileSpreadsheet } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'disclaimer';
}

export default function PolicyModal({ isOpen, onClose, type }: PolicyModalProps) {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: "Chính sách bảo mật thông tin người dùng",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      tagline: "Chính sách đảm bảo an toàn tuyệt đối thông tin thuê bao và hoạt động sử dụng tại tracuugoicuoc.com",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Chào mừng bạn đến với hệ thống <strong>tracuugoicuoc.com</strong>. Chúng tôi cực kỳ tôn trọng quyền riêng tư của khách hàng và cam kết bảo vệ thông tin cá nhân của bạn theo đúng các quy định chính sách bảo mật quốc tế cũng như Luật an ninh mạng Việt Nam.
          </p>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900">1. Thu thập thông tin cá nhân</h4>
            <p>
              Hệ thống <strong>tracuugoicuoc.com</strong> hoạt động dựa trên mô hình tra cứu tiện ích công khai. Chúng tôi <strong className="text-red-700">KHÔNG thu thập bất cứ dữ liệu cá nhân nhạy cảm nào</strong> như: Họ tên đầy đủ, địa chỉ nhà, thẻ căn cước công dân trực thẹo, mật khẩu hay tài khoản ngân hàng của bạn. Bạn có thể sử dụng toàn bộ tính năng tra cứu hoàn toàn ẩn danh.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900">2. Phương thức xử lý cú pháp SMS</h4>
            <p>
              Các nút đăng ký trên trang web hoạt động bằng phương thức sinh mã cú pháp tin nhắn tiện ích tiêu chuẩn kết nối trực tiếp với ứng dụng SMS gốc của thiết bị (điện thoại). Nội dung tin nhắn gửi đi hoàn toàn hiển thị công khai trên giao diện máy của bạn đến <strong>đầu số 290</strong> của Viettel. Chúng tôi hoàn toàn không quản lý hay lưu trữ nội dung tin nhắn đó.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900">3. Sử dụng Cookie & Phân tích truy cập</h4>
            <p>
              Hệ thống sử dụng các cookie kỹ thuật cơ bản để ghi nhớ tùy chọn tra cứu của bạn, phân tích mật độ lưu lượng truy cập bằng Google Analytics nhằm mục đích cải thiện tốc độ tải trang, tăng trải nghiệm lướt gói cước được mượt mà hơn. Toàn bộ các dữ liệu phân tích này đều được mã hóa dưới dạng ẩn danh hoàn toàn.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900">4. Cam kết bảo mật & An toàn giao dịch</h4>
            <p>
              Hệ thống được chứng nhận bảo mật <strong>SSL mã hóa mật độ cao (HTTPS)</strong>. Mọi tác vụ ấn nút đều an toàn, không chứa phần mềm mã độc tự tải, không tự động kích hoạt dịch vụ ngầm khi chưa có sự xác nhận đồng ý thủ công bằng cách nhấn nút gửi SMS từ người dùng.
            </p>
          </div>
        </div>
      )
    },
    terms: {
      title: "Điều khoản sử dụng dịch vụ",
      icon: <Scale className="w-6 h-6 text-red-500" />,
      tagline: "Quy ước điều kiện và điều khoản liên quan tới việc sử dụng hệ thống tra cứu nhanh",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Bằng việc duyệt xem danh mục và sử dụng hệ thống tiện ích của <strong>tracuugoicuoc.com</strong>, bạn đồng ý tuân thủ toàn bộ các điều ước ràng buộc pháp lý cụ thể dưới đây:
          </p>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900">1. Bản chất dịch vụ</h4>
            <p>
              Chúng tôi là Cộng tác viên kênh số Số Độc Lập tiếp thị liên kết ủy nhiệm từ Tập đoàn Viettel. Chúng tôi tối ưu hóa quá trình biên dịch cú pháp SMS của các gói cước chính sách sang cổng biểu mẫu tương tác để người dùng đăng ký nhanh chóng. Website không trực tiếp quản lý hạ tầng mạng viễn thông hay có quyền tự thực hiện trừ tiền hoặc kết nối thu phí tài khoản SIM của khách hàng.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900">2. Sử dụng đúng mục đích chính thống</h4>
            <p>
              Khách hàng cam kết chỉ sử dụng cú pháp để đăng ký dịch vụ di động chính thức cho các thuê bao sở hữu chính chủ hợp pháp hoặc được sự ủy quyền từ chủ thuê bao liên quan. Tuyệt đối không can thiệp thay đổi cấu trúc mã số đại diện ưu đãi đi kèm mã nguồn của nền tảng.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900">3. Biến động thông tin giá cước</h4>
            <p>
              Các gói cước di động trên mạng có thể thay đổi hoặc tạm ngừng cung cấp theo chính sách cục bộ của Viettel viễn thông từng thời điểm. Mặc dù chúng tôi liên tục kiểm duyệt đồng bộ cập nhật dữ liệu, chúng tôi khuyến cáo người dùng nên kiểm tra số dư và tin nhắn phản hồi tổng đài 191/290 để xác nhận trạng thái kích hoạt chính xác nhất.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900">4. Giới hạn độ tuổi & Trách nhiệm pháp lý</h4>
            <p>
              Người sử dụng dịch vụ phải là chủ thuê bao di động hoặc người giám hộ hợp pháp của thuê bao đó để đảm bảo quyền tự chủ thanh toán cước phí viễn thông hàng tháng.
            </p>
          </div>
        </div>
      )
    },
    disclaimer: {
      title: "Quy chế miễn trừ trách nhiệm pháp lý",
      icon: <FileSpreadsheet className="w-6 h-6 text-amber-500" />,
      tagline: "Công khai vai trò độc lập, không mạo danh thương hiệu sở hữu Tập đoàn",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Tài liệu này xác nhận giới hạn trách nhiệm giữa đội ngũ quản trị nội dung website <strong>tracuugoicuoc.com</strong> và các quý độc giả truy cập:
          </p>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900">1. Không mạo danh tập đoàn chính chủ</h4>
            <p>
              Website <strong>tracuugoicuoc.com</strong> KHÔNG phải là trang chủ trực tiếp của Tập đoàn Công nghiệp - Viễn thông Quân đội Viettel Công ty mẹ (viettel.vn). Hệ thống hoạt động độc lập dưới cơ chế cộng tác viên tiếp thị số đại lý. Chúng tôi tự thiết kế giao diện giúp việc tiếp cận thông tin gói cước khoa học, trực quan, dễ so sánh hơn cho người dùng Việt Nam.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900">2. Miễn trừ can thiệp giao dịch tiền tệ</h4>
            <p>
              Hệ thống hoàn toàn <strong>KHÔNG có chức năng thu tiền, nạp tiền trực tiếp hay quản lý ví của khách hàng</strong>. Tất cả chi phí gói cước đều do hệ thống Viettel trực tiếp khấu trừ tự động vào tài khoản chính của SIM SIM khách hàng qua đầu số tin nhắn quốc gia 290. Mọi phát sinh thắc mắc hay tranh chấp tiền cước, xin quý khách liên hệ hotline CSKH toàn quốc: <strong>18008098</strong> của Viettel Telecom để được xử lý kỹ thuật triệt để.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900">3. Miễn trừ thiệt hại gián tiếp</h4>
            <p>
              Chúng tôi không chịu trách nhiệm cho bất kỳ tổn thất, gián đoạn liên lạc hay lỗi đăng ký phát sinh do đường truyền thuê sim yếu, cú pháp hủy gói chưa kịp thời, hoặc sự sai khác khách quan về ưu đãi thuộc diện giới hạn riêng của thuê bao cụ thể chưa được cập nhật kịp thời.
            </p>
          </div>
        </div>
      )
    }
  };

  const activeContent = content[type];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl flex flex-col overflow-hidden max-h-[85vh] animate-fade-in border border-slate-150">
        
        {/* Header */}
        <div className="px-5 py-4 border-b border-gray-150 bg-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {activeContent.icon}
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{activeContent.title}</h3>
              <p className="text-[10px] text-gray-500 font-medium">{activeContent.tagline}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200 text-gray-550 transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {activeContent.body}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-gray-150 bg-gray-50 flex items-center justify-between text-[11px] text-gray-500">
          <span className="font-semibold font-mono">tracuugoicuoc.com • Copyright 2026</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg cursor-pointer transition-colors"
          >
            Tôi đã hiểu
          </button>
        </div>

      </div>
    </div>
  );
}
