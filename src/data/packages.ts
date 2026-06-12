import { TelecomPackage, FAQItem } from '../types';

export const VIETTEL_PACKAGES: TelecomPackage[] = [
  // CORES / POPULAR
  {
    id: 'mxh120',
    name: 'MXH120',
    price: 120000,
    duration: '30 ngày',
    dataLimit: '30 GB',
    dataPerDay: '1 GB/ngày',
    calls: {
      internal: 'Miễn phí gọi nội mạng < 10 phút',
      external: '30 phút gọi ngoại mạng/tháng'
    },
    social: ['tiktok', 'youtube', 'facebook', 'messenger'],
    category: 'social',
    description: 'Combo ưu đãi siêu việt dành riêng cho người dùng mạng xã hội thường xuyên. Miễn phí không giới hạn dung lượng xem Tiktok, YouTube và lướt Facebook thoải mái cả tháng không lo tốn PIN hay hết dung lượng!',
    benefits: [
      'Miễn phí 100% data xem Youtube, Tiktok, Facebook, Messenger',
      'Có 30GB Data tốc độ cao (1GB/ngày) dùng cho các nhu cầu mạng khác',
      'Miễn phí hoàn toàn các cuộc gọi nội mạng Viettel dưới 10 phút',
      'Tặng 30 phút gọi ngoại mạng di động trong nước'
    ],
    rules: [
      'Áp dụng cho thuê bao di động trả trước kích hoạt mới từ ngày 01/07/2023',
      'Tài khoản chính tại thời điểm đăng ký phải có tối thiểu 120.000đ',
      'Gói cước tự động gia hạn khi hết chu kỳ 30 ngày.'
    ],
    popular: true
  },
  {
    id: 'v120b',
    name: 'V120B',
    price: 120000,
    duration: '30 ngày',
    dataLimit: '45 GB',
    dataPerDay: '1.5 GB/ngày',
    calls: {
      internal: 'Miễn phí gọi nội mạng < 10 phút',
      external: '50 phút gọi ngoại mạng/tháng'
    },
    category: 'combo',
    description: 'Gói combo "Quốc dân" được ưa chuộng nhất của Viettel. Đáp ứng trọn vẹn cả nhu cầu lướt web tốc độ cao hàng ngày lẫn gọi thoại thả ga với gia đình và đối tác với chi phí cực tiết kiệm.',
    benefits: [
      '1.5 GB data tốc độ cao mỗi ngày (Tổng cộng 45 GB/tháng)',
      'Miễn phí cuộc gọi nội mạng Viettel thời lượng dưới 10 phút',
      'Tặng thêm 50 phút gọi mạng khác ngoài Viettel',
      'Tự ngắt kết nối internet khi hết 1.5GB trong ngày để tránh phát sinh chi phí'
    ],
    rules: [
      'Áp dụng cho thuê bao trả trước mới kích hoạt từ ngày 15/06/2023',
      'Hoặc thuê bao nằm trong danh sách khuyến mãi riêng của Viettel',
      'Tài khoản gốc phải có đủ 120.000đ.'
    ],
    popular: true
  },
  {
    id: 'sd120',
    name: 'SD120',
    price: 120000,
    duration: '30 ngày',
    dataLimit: '60 GB',
    dataPerDay: '2 GB/ngày',
    category: 'data',
    description: 'Gói cước siêu tốc truyền thống dành riêng cho khách hàng có nhu cầu sử dụng Internet di động với dung lượng lớn mọi lúc mọi nơi. Học tập, làm việc trực tuyến hay xem phim Full HD thả ga không ngắt quãng.',
    benefits: [
      '2 GB data siêu tốc 4G/5G mỗi ngày (Tổng cộng 60 GB/tháng)',
      'Miễn phí xem truyền hình TV366 gói Standard cực sắc nét',
      'Hạ băng thông phát sinh (ngừng kết nối rủi ro) khi dùng hết hạn mức ngày',
      'Phủ sóng 4G/5G toàn quốc với độ ổn định cao nhất từ mạng Viettel'
    ],
    rules: [
      'Dành cho mọi thuê bao di động trả trước và trả sau hoạt động 2 chiều',
      'Không giới hạn thời gian kích hoạt của Sim',
      'Tài khoản gốc có từ 120.000đ trở lên đối với Sim trả trước.'
    ],
    popular: true
  },
  {
    id: 'sd90',
    name: 'SD90',
    price: 90000,
    duration: '30 ngày',
    dataLimit: '45 GB',
    dataPerDay: '1.5 GB/ngày',
    category: 'data',
    description: 'Giải pháp lướt mạng giá siêu rẻ cho học sinh, sinh viên và nhân viên văn phòng. Chỉ với 3.000đ một ngày, bạn đã sở hữu kết nối 4G Viettel ổn định cho các nhu cầu cơ bản: Zalo, Maps, Email, lướt tin tức.',
    benefits: [
      '1.5 GB data tốc độ cao mỗi ngày (Tổng cộng 45 GB/tháng)',
      'Bao gồm miễn phí xem nội dung TV360 cơ bản',
      'Cú pháp đăng ký cực kỳ đơn giản, kích hoạt nhanh chóng',
      'Giá cước cực mềm chỉ 90.000đ cho trọn vẹn 30 ngày sử dụng'
    ],
    rules: [
      'Phù hợp với tất cả thuê bao di động trả trước kích hoạt từ 01/01/2023 trở đi',
      'Hoặc các thuê bao nhận được tin nhắn khuyến mại SMS riêng',
      'Số tiền trong tài khoản chính lớn hơn hoặc bằng 90.000đ.'
    ],
    popular: true
  },

  // SOCIAL MEDIA PACKAGES
  {
    id: 'mxh100',
    name: 'MXH100',
    price: 100000,
    duration: '30 ngày',
    dataLimit: '30 GB',
    dataPerDay: '1 GB/ngày',
    social: ['tiktok', 'youtube', 'facebook'],
    category: 'social',
    description: 'Thỏa thích sáng tạo nội dung và giải trí không giới hạn mà không cần lo về pin hay lưu lượng. Gói cước cam kết miễn phí 100% băng thông cho 3 nền tảng mạng xã hội phổ biến nhất Việt Nam hiện nay.',
    benefits: [
      'Data không giới hạn khi truy cập ứng dụng Youtube, Tiktok và Facebook',
      'Tải ảnh, video, xem livestream 4K siêu mượt không lag',
      'Cộng thêm 1GB Data/ngày tốc độ cực cao làm việc và lướt web khác',
      'Chi phí siêu tiết kiệm chỉ 100k mỗi tháng'
    ],
    rules: [
      'Thuê báo trả trước kích hoạt mới của Viettel kể từ ngày 01/07/2023',
      'Có số dư tài khoản chính đạt thấp nhất là 100.000đ'
    ]
  },
  {
    id: 'mxh150',
    name: 'MXH150',
    price: 150000,
    duration: '30 ngày',
    dataLimit: '45 GB',
    dataPerDay: '1.5 GB/ngày',
    calls: {
      internal: 'Miễn phí gọi nội mạng < 10 phút',
      external: '50 phút gọi ngoại mạng/tháng'
    },
    social: ['tiktok', 'youtube', 'facebook', 'messenger'],
    category: 'social',
    description: 'Phiên bản nâng cấp cao cấp nhất của dòng gói mạng xã hội. Dung lượng dùng chung hàng ngày tăng lên 1.5GB thoải mái check-in hay duyệt thư điện tử kết hợp miễn phí trọn gói Messenger cùng gọi thoại tẹt ga.',
    benefits: [
      'Không giới hạn data tốc độ cao cho TikTok, YouTube, Facebook và nhắn tin Messenger',
      'Nhận ngay 1.5 GB/ngày data ngoài (Tổng 45 GB cả tháng)',
      'Miễn phí mọi cuộc gọi nội mạng dưới 10 phút, không giới hạn số lượng cuộc gọi',
      'Bao gồm 50 phút gọi ngoài mạng liên tiếp trong nước'
    ],
    rules: [
      'Dành cho thuê bao di động kích hoạt mới từ tháng 07/2023',
      'Tài khoản chính có tối thiểu 150.000đ.'
    ]
  },

  // DATA PACKAGES
  {
    id: 'sd70',
    name: 'SD70',
    price: 70000,
    duration: '30 ngày',
    dataLimit: '30 GB',
    dataPerDay: '1 GB/ngày',
    category: 'data',
    description: 'Gói 4G Viettel rẻ nhất hệ thống siêu tốc data. Phù hợp tuyệt đối cho những ai chỉ cần mạng phòng hờ khi ra ngoài đường, bật định vị chỉ đường khi đi ship hàng hoặc check-in cơ bản.',
    benefits: [
      '1 GB/ngày data 4G tốc độ cao (Tổng cộng 30 GB/tháng)',
      'Hết 1GB ngắt kết nối an toàn để tránh bị trừ tiền oan',
      'Áp dụng đăng ký cực kỳ dễ dàng cho nhiều thuê bao di động',
      'Giá học sinh chỉ 70.000đ/tháng (chưa đầy 2.500đ/ngày)'
    ],
    rules: [
      'Áp dụng cho thuê bao có danh sách và thuê kích hoạt từ 01/06/2023',
      'Tài khoản đáp ứng từ 70.000đ di động trở lên.'
    ]
  },
  {
    id: 'sd150',
    name: 'SD150',
    price: 150000,
    duration: '30 ngày',
    dataLimit: '90 GB',
    dataPerDay: '3 GB/ngày',
    category: 'data',
    description: 'Sự lựa chọn đỉnh cao cho dân cày game di động hoặc những người thường thực hiện livestream bán hàng, họp Zoom ngoài trời. Cung cấp tới 3GB Data siêu tốc hàng ngày đảm bảo kết nối mượt mà nhất có thể.',
    benefits: [
      'Nhận ngay 3 GB data tốc độ siêu hạng mỗi ngày (Tổng cộng 90 GB/30 ngày)',
      'Miễn phí gói Standard trên ứng dụng xem tivi di động TV360',
      'Sử dụng băng thông 5G thế hệ mới không giới hạn tại các khu vực phủ sóng',
      'Ưu tiên kết nối băng thông lớn nhất của trạm phát'
    ],
    rules: [
      'Thuê di động Viettel trả trước và trả sau đủ điều kiện hoạt động ổn định',
      'Khách hàng có số dư tối thiểu 150.000đ.'
    ]
  },

  // COMBO PACKAGES
  {
    id: 'v90b',
    name: 'V90B',
    price: 90000,
    duration: '30 ngày',
    dataLimit: '30 GB',
    dataPerDay: '1 GB/ngày',
    calls: {
      internal: 'Miễn phí gọi nội mạng < 10 phút',
      external: '30 phút gọi ngoại mạng/tháng'
    },
    category: 'combo',
    description: 'Gói súp lơ combo giá rẻ kết hợp 2 trong 1. Vừa có data sử dụng hàng ngày vừa nghe gọi điện thoại không lo cước phí phát sinh, hóa đơn dôi dư mỗi tháng!',
    benefits: [
      '1 GB data tốc độ cao mỗi ngày (Tổng cộng 30 GB/tháng)',
      'Mọi cuộc gọi nội mạng của Viettel dưới 10 phút đều hoàn toàn miễn phí',
      'Tặng 30 phút đàm thoại ngoại mạng an tâm liên lạc bạn bè',
      'Giá cước siêu mềm chỉ 90.000đ cho mỗi tháng chu kỳ'
    ],
    rules: [
      'Dành cho sim trả trước Viettel kích hoạt mới kể từ 15/06/2023',
      'Đảm bảo số dư tối thiểu 90.000đ để kích hoạt gói.'
    ]
  },
  {
    id: 'v150b',
    name: 'V150B',
    price: 150000,
    duration: '30 ngày',
    dataLimit: '60 GB',
    dataPerDay: '2 GB/ngày',
    calls: {
      internal: 'Miễn phí gọi nội mạng < 10 phút',
      external: '80 phút gọi ngoại mạng/tháng'
    },
    category: 'combo',
    description: 'Combo VIP dành cho các cá nhân kinh doanh, bán hàng online thường xuyên trao đổi với khách hàng qua số điện thoại di động chính. Dung lượng 2GB/ngày thoải mái gửi tài liệu hành chính.',
    benefits: [
      '2 GB data 4G tốc độ cao hàng ngày (60 GB mỗi tháng)',
      'Miễn phí toàn bộ cuộc gọi nội mạng Viettel thời lượng dưới 10 phút',
      'Tặng 80 phút gọi ngoại mạng di động trong nước miễn phí',
      'Đáp ứng kết nối 5G mượt mà nhất tại các thành phố lớn'
    ],
    rules: [
      'Áp dụng thuê bao di động kích hoạt mới từ ngày 15/06/2023',
      'Tài khoản chính có tối thiểu 150.000đ.'
    ]
  },
  {
    id: 'v200b',
    name: 'V200B',
    price: 200000,
    duration: '30 ngày',
    dataLimit: '240 GB',
    dataPerDay: '8 GB/ngày',
    calls: {
      internal: 'Miễn phí gọi nội mạng < 20 phút',
      external: '100 phút gọi ngoại mạng/tháng'
    },
    category: 'combo',
    description: 'Vua của các dòng gói Combo Viettel! Khủng nhất hành tinh với lượng data nhận được lên đến 8GB tốc độ cao mỗi ngày. Tận hưởng cảm giác xem phim HD, chơi game trực tuyến vô lo suốt ngày dài.',
    benefits: [
      'Thả ga lướt web với 8 GB/ngày data siêu tốc (Tổng cực khủng 240 GB/tháng)',
      'Miễn phí các cuộc hội thoại nội mạng Viettel có thời lượng dưới 20 phút',
      'Tặng thêm 100 phút đàm thoại ngoài mạng Viettel chất lượng cao',
      'Gói cước tối ưu nhất dành cho tài xế công nghệ hoặc Streamer'
    ],
    rules: [
      'Áp dụng di động trả trước hòa mạng mới từ ngày 15/06/2023 trở đi',
      'Số dư trong tài khoản SIM tối thiểu đạt trên 200.000đ.'
    ]
  },

  // LONG TERM (Chu kỳ dài)
  {
    id: '6mxh120',
    name: '6MXH120',
    price: 720000,
    duration: '180 ngày',
    dataLimit: '180 GB',
    dataPerDay: '1 GB/ngày',
    calls: {
      internal: 'Miễn phí gọi nội mạng < 10 phút',
      external: '30 phút gọi ngoại mạng/tháng'
    },
    social: ['tiktok', 'youtube', 'facebook', 'messenger'],
    category: 'long_term',
    description: 'Đăng ký 1 lần dùng tẹt ga nửa năm! Tránh rắc rối quên gia hạn hàng tháng khiến kết nối ngắt quãng. Trọn gói đặc quyền MXH120 gia tăng hiệu suất trải nghiệm lâu dài.',
    benefits: [
      'Đóng cước 6 tháng dùng trọn gói không phát sinh thêm chi phí sạc',
      'Miễn phí hoàn toàn data truy cập YouTube, Tiktok, Facebook, Messenger',
      'Cộng ngay 1 GB/ngày dung lượng tốc độ cao làm việc ngoài',
      'Miễn phí các cuộc gọi nội mạng dưới 10 phút và 30 phút ngoại mạng mỗi tháng'
    ],
    rules: [
      'Mọi thuê bao kích hoạt mới từ 01/07/2023 hoặc nằm trong diện khuyến mãi',
      'Tài khoản chính có tối thiểu 720.000đ.'
    ]
  },
  {
    id: '12mxh120',
    name: '12MXH120',
    price: 1440000,
    duration: '360 ngày',
    dataLimit: '360 GB',
    dataPerDay: '1 GB/ngày',
    calls: {
      internal: 'Miễn phí gọi nội mạng < 10 phút',
      external: '30 phút gọi ngoại mạng/tháng'
    },
    social: ['tiktok', 'youtube', 'facebook', 'messenger'],
    category: 'long_term',
    description: 'Gói cước thông minh tiết kiệm năng lượng nhất! Đầu tư một lần trọn gói 1 năm sử dụng Free Data MXH tốc độ cao, vừa không sợ tăng giá vừa nhận thêm các khuyến mại định kỳ từ hệ thống đại lý.',
    benefits: [
      'Trọn gói một năm (360 ngày) lướt mạng chất lượng cao di động',
      'Data không giới hạn cho Tiktok, YouTube, Facebook, Messenger',
      '1 GB data tốc độ cao mỗi ngày để duyệt web khác thoải mái',
      'Miễn phí cuộc gọi nội mạng dưới 10 phút cùng 30 phút ngoại mạng hàng tháng'
    ],
    rules: [
      'Áp dụng sim thuộc danh sách khuyến mãi của nhà mạng Viettel',
      'Tài khoản chính có đủ 1.440.000đ.'
    ]
  },
  {
    id: '6sd120',
    name: '6SD120',
    price: 720000,
    duration: '180 ngày',
    dataLimit: '360 GB',
    dataPerDay: '2 GB/ngày',
    category: 'long_term',
    description: 'Gói siêu dữ liệu chu kỳ dài 6 tháng. Giữ cho thiết bị phát wifi di động hoặc IPad học sinh luôn luôn trực tuyến tốc độ cao đỉnh cao ổn định suốt 180 ngày.',
    benefits: [
      'Nhận 2 GB data 4G/5G mỗi ngày trong suốt 6 chu kỳ liên tiếp',
      'Tặng kèm tài khoản standard của truyền hình di động TV360 siêu nét',
      'Thanh toán 1 lần 720k sử dụng hết 6 tháng không bận tâm nạp tiền',
      'Hỗ trợ đổi trả hoặc nâng cấp nhanh chóng qua hotline'
    ],
    rules: [
      'Áp dụng cho mọi sim trả trước/trả sau của Viettel có nhu cầu',
      'Số dư sạc tài khoản gốc tối thiểu 720.000đ.'
    ]
  },
  {
    id: '12sd120',
    name: '12SD120',
    price: 1440000,
    duration: '360 ngày',
    dataLimit: '720 GB',
    dataPerDay: '2 GB/ngày',
    category: 'long_term',
    description: 'Gói cước đầu bảng cho xe ô tô, camera giám sát và máy công tác di động. Trọn bộ data 2GB tốc độ cao mỗi ngày ròng rã suốt 1 năm chỉ với một lần đăng ký bằng cú pháp nhắn tin.',
    benefits: [
      'Gói cước đỉnh cao kéo dài 12 chu kỳ (360 ngày) liên tục',
      'Mỗi ngày nhận 2 GB data tốc độ cao phục vụ đắc lực (Tổng 720 Gb)',
      'Miễn phí hoàn toàn các khoản phí hạ tầng kết nối 5G',
      'Miễn phí xem truyền hình giải trí trên TV360'
    ],
    rules: [
      'Dành cho tất cả các sim di động Viettel trên toàn lãnh thổ Việt Nam',
      'Nhân viên đại lý hỗ trợ kiểm tra tài khoản và kích hoạt ngay tức thì.'
    ]
  },
  {
    id: '5g135',
    name: '5G135',
    price: 135000,
    duration: '30 ngày',
    dataLimit: '120 GB',
    dataPerDay: '4 GB/ngày',
    category: 'data',
    description: 'Trải nghiệm siêu tốc độ 5G đỉnh cao với chi phí phải chăng. Nhận ngay 4 GB mỗi ngày sử dụng trên hạ tầng mạng 5G thế mới không gián đoạn, miễn phí hoàn toàn kho nội dung số giải trí TV360 Basic.',
    benefits: [
      '4 GB Data tốc độ cực đại 5G mỗi ngày (Tổng cộng 120 GB/tháng)',
      'Miễn phí 100% data truyền hình TV360 gói Basic xem trực tuyến',
      'Được ưu tiên băng thông truyền dữ liệu mượt mà, hạn chế tối đa độ trễ',
      'Tự động ngắt kết nối khi hết dung lượng ngày để bảo vệ tài khoản'
    ],
    rules: [
      'Chương trình áp dụng cho thuê bao kích hoạt mới hoặc thuộc danh sách ưu đãi 5G',
      'Điện thoại của khách hàng có hỗ trợ công nghệ kết nối 5G',
      'Số dư tài khoản chính đạt từ 135.000đ trở lên ở thời điểm kích hoạt.'
    ],
    popular: true
  },
  {
    id: '5g150',
    name: '5G150',
    price: 150000,
    duration: '30 ngày',
    dataLimit: '180 GB',
    dataPerDay: '6 GB/ngày',
    category: 'data',
    description: 'Sự lựa chọn hoàn hảo cho tín đồ công nghệ cần truyền tải lượng thông tin cực lớn qua kết nối 5G siêu mượt. Sở hữu ngay 6 GB lưu lượng siêu tốc mỗi ngày thỏa thích truyền phát hoặc tải tệp nặng.',
    benefits: [
      '6 GB Data 5G siêu cấp mỗi ngày (Tổng cộng lên tới 180 GB/tháng)',
      'Miễn phí 100% dung lượng data xem dịch vụ video MyClip cao cấp',
      'Xem phim, bóng đá độ nét Ultra HD trên TV360 Basic không tốn dung lượng',
      'Băng thông ưu tiên tốc độ cực đại ổn định kỷ lục'
    ],
    rules: [
      'Thuê bộ trả trước Viettel thuộc danh sách khuyến mãi của nhà mạng',
      'Tài khoản chính tại ngày đăng ký có từ 150.000đ trở lên.'
    ]
  },
  {
    id: '5g160b',
    name: '5G160B',
    price: 160000,
    duration: '30 ngày',
    dataLimit: '120 GB',
    dataPerDay: '4 GB/ngày',
    calls: {
      internal: 'Miễn phí gọi nội mạng < 10 phút',
      external: '100 phút gọi ngoại mạng/tháng'
    },
    category: 'combo',
    description: 'Combo thế hệ mới kết hợp sức mạnh kết nối 5G mượt mà cùng đặc quyền nghe gọi thả ga không lo phát sinh hóa đơn. Đi kèm gói xem phim truyền hình TV360 trọn vẹn.',
    benefits: [
      '4 GB data siêu tốc 5G mỗi ngày (Tổng cộng 120 GB/tháng)',
      'Miễn phí toàn bộ các cuộc gọi nội mạng của Viettel dưới 10 phút',
      'Nhận ngay 100 phút gọi ngoại mạng liên tiếp trong tháng',
      'Miễn phí xem truyền hình sắc nét trên ứng dụng TV360 App'
    ],
    rules: [
      'Dành cho thuê bao di động trả trước hòa mạng mới từ năm 2024',
      'Yêu cầu tài khoản chính phải lớn hơn hoặc bằng 160.000đ.'
    ]
  },
  {
    id: '5g230',
    name: '5G230',
    price: 230000,
    duration: '30 ngày',
    dataLimit: '240 GB',
    dataPerDay: '8 GB/ngày',
    calls: {
      internal: 'Miễn phí gọi nội mạng < 20 phút',
      external: '150 phút gọi ngoại mạng/tháng'
    },
    category: 'combo',
    description: 'Trải nghiệm đỉnh cao của gói cước Combo 5G siêu việt. Thích hợp cho doanh nhân, người dùng di động chuyên nghiệp thường xuyên đàm thoại ngoại mạng và livestream chất lượng cao.',
    benefits: [
      '8 GB data tốc độ siêu cường 5G mỗi ngày (Tổng cộng 240 GB/tháng)',
      'Miễn phí hoàn toàn các cuộc gọi nội mạng Viettel thời lượng dưới 20 phút',
      'Tặng tới 150 phút thoại ngoại mạng di động trong nước miễn phí',
      'Miễn phí trọn vẹn data xem TV360 Basic và MyClip giải trí'
    ],
    rules: [
      'Áp dụng đăng ký trực tiếp cho sim di động trả trước có tài khoản chính tối thiểu 230.000đ',
      'Sim hoạt động bình thường cả 2 chiều nghe gọi.'
    ]
  },
  {
    id: 'sd135',
    name: 'SD135',
    price: 135000,
    duration: '30 ngày',
    dataLimit: '150 GB',
    dataPerDay: '5 GB/ngày',
    category: 'data',
    description: 'Gói siêu dữ liệu 4G bứt phá với giá siêu mềm. Chi phí chỉ tương đương 4.500đ/ngày nhưng nhận tới 5GB data tốc độ cao, hỗ trợ tối đa việc xem phim giải trí, lướt Tiktok, học tập hay làm việc trực tuyến.',
    benefits: [
      '5 GB Data siêu tốc độ mạng 4G/5G mỗi ngày (Tổng cộng 150 GB/30 ngày)',
      'Miễn phí tài khoản xem kho phim truyền hình phong phú trên ứng dụng TV360 Basic',
      'Không giới hạn băng thông truy cập các nội dung học tập trực tuyến chỉ định',
      'Bảo lưu thông tin an toàn, ngắt kết nối tự động khi dùng hết dung lượng ngày tránh phát sinh chi phí'
    ],
    rules: [
      'Dành cho thuê bao trả trước kích hoạt mới từ ngày 01/01/2024 hoặc thuộc danh sách ưu đãi',
      'Tài khoản chính tại ngày đăng ký phải có tối thiểu 135.000đ.'
    ],
    popular: true
  },
  {
    id: 'st30k',
    name: 'ST30K',
    price: 30000,
    duration: '7 ngày',
    dataLimit: '7 GB',
    dataPerDay: '1 GB/ngày',
    category: 'data',
    description: 'Giải pháp nạp nhanh mạng xã hội cho những chuyến công tác, du lịch hay dã ngoại ngắn ngày. Trọn gói data lưu lượng tốc độ cao thoải mái check-in chia sẻ khoảnh khắc đẹp.',
    benefits: [
      '7 GB data 4G tốc độ cao sử dụng linh hoạt trong vòng 7 ngày',
      'Sử dụng chung dung lượng cho mọi hoạt động duyệt web, nghe nhạc, video',
      'Gia hạn tự động khi hết chu kỳ tuần cho sự tiện dụng',
      'Tính hợp lý cao cho chi tiêu ngắn hạn'
    ],
    rules: [
      'Dành cho tất cả mọi thuê bao di động Viettel (cả trả trước và trả sau)',
      'Tài khoản gốc của quý khách lớn hơn hoặc bằng 30.000đ.'
    ],
    popular: true
  },
  {
    id: 'st15k',
    name: 'ST15K',
    price: 15000,
    duration: '3 ngày',
    dataLimit: '3 GB',
    dataPerDay: '1 GB/ngày',
    category: 'data',
    description: 'Cực kỳ tiện lợi cho các tình huống khẩn cấp khi bạn đi xa nhà hoặc cần kết nối lướt web nhanh trong vài ngày. Băng thông khỏe bất chấp khu vực địa lý.',
    benefits: [
      '3 GB data chất lượng cao dùng thoải mái trong 3 ngày liên tiếp',
      'Soạn tin nhắn đăng ký cực dễ và nhanh gọn hữu dụng',
      'Tự ngắt băng thông khi dùng hết data ngăn ngừa bị trừ tiền gốc'
    ],
    rules: [
      'Áp dụng chung cho tất cả các đối tượng thuê bao di động của Viettel',
      'Điện thoại có số dư trên 15.000đ phục vụ trả phí.'
    ]
  },
  {
    id: 'st10k',
    name: 'ST10K',
    price: 10000,
    duration: '1 ngày',
    dataLimit: '2 GB',
    dataPerDay: '2 GB/ngày',
    category: 'data',
    description: 'Chỉ với 10k một ngày, bạn đã có ngay 2GB dung lượng data siêu khỏe để chữa cháy tại các nơi không có kết nối Wifi. Đăng ký nhận kết nối ngay tức khắc.',
    benefits: [
      '2 GB data 4G tốc độ cao dùng hết ngày (đến 24h ngày đăng ký)',
      'Nhu cầu dùng mạng đột xuất được giải quyết hoàn hảo cực kỳ tiết kiệm',
      'Không giới hạn băng thông tốc độ tại bất kì ứng dụng nào'
    ],
    rules: [
      'Dành cho tất cả khách hàng sử dụng dịch vụ di động Viettel',
      'Tài khoản di động đạt tối thiểu 10.000đ.'
    ]
  },
  {
    id: 'st5k',
    name: 'ST5K',
    price: 5000,
    duration: '1 ngày',
    dataLimit: '500 MB',
    dataPerDay: '500 MB/ngày',
    category: 'data',
    description: 'Gói cước ngày giá rẻ nhất của Viettel. Lý tưởng cho việc tra cứu bản đồ gửi tin nhắn nhanh khi đang di chuyển ngoài đường.',
    benefits: [
      '500 MB data tốc độ cao dùng đến hết 24h ngày đăng ký',
      'Chi phí siêu tiết kiệm chỉ bằng nửa ly trà đá cứu nguy kết nối trực tuyến',
      'Cú pháp đăng ký cực nhanh tin cậy'
    ],
    rules: [
      'Phù hợp với tất cả sim di động Viettel kích hoạt trên toàn quốc',
      'Tài khoản có đủ 5.000đ sạc trực tiếp.'
    ]
  },
  {
    id: 'v300b',
    name: 'V300B',
    price: 300000,
    duration: '30 ngày',
    dataLimit: '300 GB',
    dataPerDay: '10 GB/ngày',
    calls: {
      internal: 'Miễn phí gọi nội mạng < 20 phút',
      external: '200 phút gọi ngoại mạng/tháng'
    },
    category: 'combo',
    description: 'Trải nghiệm đỉnh cao siêu tốc của dòng gói V-B từ nhà mạng Viettel. Mang đến lượng data 10 GB khổng lồ hàng ngày giúp bạn quên đi sự tồn tại của cáp quang Wifi.',
    benefits: [
      'Nhận ngay 10 GB Data tốc độ cao tối đa mỗi ngày (Tổng cộng 300 GB/tháng)',
      'Miễn phí tuyệt đối tất cả cuộc gọi thoại nội mạng Viettel dưới 20 phút',
      'Đặc quyền tặng thêm 200 phút liên lạc ngoại mạng toàn quốc',
      'Thỏa thích cày ải xem phim, Livestream kinh doanh trọn vẹn chất lượng cao'
    ],
    rules: [
      'Thuê di động Viettel hòa mạng mới hoặc thuộc nhóm ưu đãi đặc biệt',
      'Đáp ứng tài khoản chính đạt mức tối thiểu 300.000đ.'
    ]
  },
  {
    id: '6sd135',
    name: '6SD135',
    price: 810000,
    duration: '180 ngày',
    dataLimit: '900 GB',
    dataPerDay: '5 GB/ngày',
    category: 'long_term',
    description: 'Mua lẻ rẻ như mua buôn! Sử dụng liền mạch gói SD135 siêu hot trong suốt 6 tháng với một lần thanh toán duy nhất. Phục vụ hoàn hảo cho học tập và làm việc liên tiếp cả năm.',
    benefits: [
      'Thanh toán một lần dùng liên tục 180 ngày không ngắt quãng hay lo quên nạp tiền',
      'Nhận 5 GB data tốc độ cao phục hận lướt mạng mỗi ngày (Tổng cộng 900 GB)',
      'Miễn phí hoàn toàn xem truyền hình siêu nét TV360 Basic di động',
      'Tự động khởi tạo và phát hành ưu đãi chu kỳ mới hàng tháng.'
    ],
    rules: [
      'Áp dụng cho thuê bao thỏa mãn dòng gói SD135 hoặc có tin nhắn mời đăng ký',
      'Tài khoản chính có tối thiểu 810.000đ để thực hiện giao dịch.'
    ]
  },
  {
    id: '12sd135',
    name: '12SD135',
    price: 1620000,
    duration: '360 ngày',
    dataLimit: '1.800 GB',
    dataPerDay: '5 GB/ngày',
    category: 'long_term',
    description: 'Vua của ưu đãi dài hạn không giới hạn thời gian! Sử dụng liên tiếp 360 ngày gói siêu dữ liệu SD135 tốc độ siêu đỉnh, tặng thêm thời lượng sử dụng và trải nghiệm liền mạch cực chất.',
    benefits: [
      'Trọn vẹn 1 năm (360 ngày) online lướt mạng đỉnh cao không cần lo nghĩ nạp thẻ',
      'Mỗi ngày nhận 5 GB dung lượng tốc độ cao (Tổng data nhận được lên tới 1.800 GB)',
      'Miễn phí xem truyền hình sắc nét trên MyTV360 chu kỳ dài cực hấp dẫn',
      'Hỗ trợ đăng ký chính danh từ tổng đài đại lý ủy quyền nhanh nhất'
    ],
    rules: [
      'Dành cho thuê bao Viettel trong diện khuyến mại ưu đãi hoặc mới hòa mạng',
      'Có số dư tài khoản từ 1.620.000đ trở lên tại thời điểm đăng ký.'
    ]
  },
  {
    id: '6v120b',
    name: '6V120B',
    price: 720000,
    duration: '180 ngày',
    dataLimit: '270 GB',
    dataPerDay: '1.5 GB/ngày',
    calls: {
      internal: 'Miễn phí gọi nội mạng < 10 phút',
      external: '50 phút gọi ngoại mạng/tháng'
    },
    category: 'long_term',
    description: 'Nửa năm nghe gọi lướt web không bận tâm hóa đơn phát sinh với gói dài hạn V120B quốc dân. Quét nhanh ưu đãi nhận mã kích hoạt tức thì từ hệ thống.',
    benefits: [
      'Nhận 1.5 GB data tốc độ cao 4G/5G mỗi ngày trong suốt 180 ngày sử dụng',
      'Miễn phí mọi cuộc gọi nội mạng Viettel dưới 10 phút vô điều kiện',
      'Cộng thêm 50 phút gọi ngoại mạng mỗi tháng vào tài khoản khuyến mãi',
      'Tiết kiệm thời gian rườm rà gia hạn thuê bao hàng tháng'
    ],
    rules: [
      'Thuê di động Viettel nằm trong danh sách khuyến mại hoặc mới kích hoạt từ tháng 06/2023',
      'Giá cước trọn gói 720.000đ trừ trực tiếp tài khoản chính.'
    ]
  },
  {
    id: '12v120b',
    name: '12V120B',
    price: 1440000,
    duration: '360 ngày',
    dataLimit: '540 GB',
    dataPerDay: '1.5 GB/ngày',
    calls: {
      internal: 'Miễn phí gọi nội mạng < 10 phút',
      external: '50 phút gọi ngoại mạng/tháng'
    },
    category: 'long_term',
    description: 'Chu kỳ dài 12 tháng của siêu phẩm Combo V120B. Đăng ký trọn vẹn 1 năm tha hồ online trò chuyện làm việc cùng bạn bè người thân không lo giãn cách do hết tiền di động.',
    benefits: [
      'Trọn gói 1 năm sử dụng thả ga data 1.5 GB/ngày mượt mà',
      'Miễn phí 100% cuộc gọi nội mạng Viettel dưới 10 phút cả năm',
      'Tặng 50 phút gọi ngoại mạng mỗi tháng liên tục trong 12 chu kỳ',
      'Đại lý hỗ trợ kích hoạt trực tiếp từ hạ tầng nhà mạng nhanh siêu tốc Chăm sóc chu đáo'
    ],
    rules: [
      'Phù hợp với thuê bao thỏa mãn tiêu chuẩn kích hoạt mới của dòng gói hoặc nhận tin nhắn',
      'Đảm bảo có đủ 1.440.000đ tài khoản gốc lúc soạn tin.'
    ]
  },
  {
    id: '6mxh100',
    name: '6MXH100',
    price: 600000,
    duration: '180 ngày',
    dataLimit: '180 GB',
    dataPerDay: '1 GB/ngày',
    social: ['tiktok', 'youtube', 'facebook'],
    category: 'long_term',
    description: 'Gói cước mạng xã hội chu kỳ dài 6 tháng cực hot của giới trẻ. Xem video, Livestream lướt tin tức thả ga không tốn một xu data cả năm.',
    benefits: [
      'Miễn phí 100% data tốc độ cao xem YouTube, Tiktok và Facebook trọn vẹn 6 tháng',
      'Nhận thêm 1 GB dung lượng tốc độ cao ngoài mỗi ngày để đọc báo tìm bản đồ',
      'Chỉ một lần thanh toán 600k dùng tẹt ga không lo ngắt kết nối',
      'Băng thông 5G mượt ổn định bậc nhất'
    ],
    rules: [
      'Thuê thuộc danh sách khuyến mãi hoặc kích hoạt mới từ tháng 07/2023',
      'Tài khoản chính đáp ứng đủ 600.000đ.'
    ]
  },
  {
    id: '12mxh100',
    name: '12MXH100',
    price: 1200000,
    duration: '360 ngày',
    dataLimit: '360 GB',
    dataPerDay: '1 GB/ngày',
    social: ['tiktok', 'youtube', 'facebook'],
    category: 'long_term',
    description: 'Gói cước tiết kiệm tối ưu cho học sinh sinh viên chuyên lướt app. Sử dụng liên tục 1 năm không cần nạp tiền cước phí hàng tháng, thoải mái cày trọn bộ phim hay.',
    benefits: [
      'Sử dụng liên tục 360 ngày với các ưu đãi của gói MXH100 cực đỉnh',
      'Free data hoàn toàn không giới hạn trên 3 ứng dụng phổ biến: Youtube, Tiktok, Facebook',
      '1 GB/ngày Data tốc độ cao dùng cho mục đích lướt mạng khác học tập giải trí',
      'Giá cước chia nhỏ chỉ khoảng 100k/tháng vô cùng dễ chịu cho chu kỳ cả năm'
    ],
    rules: [
      'Dành cho thuê bao di động nằm trong danh sách khuyến mại đặc thù',
      'Số dư tài khoản chính đạt 1.200.000đ trở lên phục vụ thanh toán.'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Mã đại lý 290 là gì? Đăng ký có mất thêm chi phí trung gian không?',
    answer: 'Tổng đài 290 là kênh đăng ký dịch vụ di động trực tuyến chính thức của Tổng Công Ty Viễn Thông Viettel. Khi bạn đăng ký có kèm mã số đại lý (ví dụ: DA, 352525287), hệ thống ghi nhận doanh số cho đại lý phát triển thuê bao. Bạn hoàn toàn KHÔNG MẤT thêm bất kỳ chi phí phát sinh nào, giá cước gói đăng ký được trừ trực tiếp vào tài khoản chính của SIM tương đương đúng bảng giá niêm yết của Viettel.'
  },
  {
    question: 'Điều kiện để đăng ký thành công các gói cước 4G/5G Viettel là gì?',
    answer: 'Để đăng ký gói cước thành công, SIM của bạn cần thỏa mãn các điều kiện cơ bản sau:\n1. Là SIM di động Viettel đang hoạt động cả 2 chiều nghe và gọi.\n2. Thuộc đối tượng ưu đãi của gói cước (ví dụ: kích hoạt mới từ mốc thời gian quy định hoặc nằm trong danh sách khuyến mãi).\n3. Tài khoản chính (tài khoản gốc) của thuê bao trả trước phải có số dư lớn hơn hoặc bằng giá tiền của gói cước tại thời điểm soạn tin nhắn.'
  },
  {
    question: 'Làm thế nào để kiểm tra dung lượng Data tốc độ cao còn lại của gói?',
    answer: 'Trong quá trình sử dụng, bạn có thể dễ dàng kiểm tra dung lượng data còn lại bằng 2 cách:\n- Cách 1: Soạn tin nhắn văn bản miễn phí theo cú pháp: KTTK gửi 191.\n- Cách 2: Tải và đăng nhập ứng dụng My Viettel để tra cứu lưu lượng trực quan tại màn hình trang chủ.'
  },
  {
    question: 'Hủy gói cước 4G/5G Viettel như thế nào khi không còn nhu cầu sử dụng?',
    answer: 'Khi không muốn gói cước tự động gia hạn ở chu kỳ tiếp theo, bạn có hai phương án để hủy:\n- Hủy gia hạn gói (vẫn được bảo lưu data và phút gọi còn lại sử dụng đến hết chu kỳ): Soạn HUY [Tên-Gói] gửi 191, sau đó soạn Y gửi 191 để xác nhận.\n- Hủy hoàn toàn gói cước ngay lập tức (mọi ưu đãi thừa sẽ mất ngay): Soạn HUYDATA [Tên-Gói] gửi 191, sau đó soạn Y gửi 191 để xác nhận.'
  },
  {
    question: 'Khi sử dụng hết Data tốc độ cao trong ngày thì kết nối Internet có bị trừ tiền ngoài gói không?',
    answer: 'Để bảo vệ quyền lợi và số dư trong tài khoản của khách hàng, hầu hết các gói cước thế hệ mới của Viettel (như dòng SD, MXH, V-B) đều tự động TẠM NGƯNG truy cập internet khi bạn đã dùng hết dung lượng tốc độ cao trong ngày. Do đó, bạn sẽ hoàn toàn không bị trừ thêm tiền phát sinh ở tài khoản chính. Bạn có thể mua thêm gói data ngày phụ trợ nếu cần tiếp tục kết nối.'
  }
];
