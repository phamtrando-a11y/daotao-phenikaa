const coursesData = [
    {
        "id": 1,
        "specialty": "TT thận nhân tạo",
        "name": "Cấp cứu ngừng tuần hoàn ở người bệnh lọc máu chu kỳ",
        "audience": "Bác sĩ",
        "duration": "1 ngày",
        "fee": "2.0"
    },
    {
        "id": 2,
        "specialty": "TT Ung bướu",
        "name": "Hóa chất cơ bản trong điều trị ung thư",
        "audience": "Bác sĩ",
        "duration": "2 ngày",
        "fee": "1.0"
    },
    {
        "id": 3,
        "specialty": "Trung tâm Tiêm chủng",
        "name": "Tiêm chủng cho mọi lứa tuổi",
        "audience": "Bác sĩ, Điều dưỡng",
        "duration": "05 ngày",
        "fee": "Liên hệ"
    },
    {
        "id": 4,
        "specialty": "TT Chẩn đóa hình ảnh và thăm dò chức năng",
        "name": "Thực hành Khám bệnh, chữa bệnh đối với chức danh kỹ thuật y có phạm vi hành nghề hình ảnh y học",
        "audience": "Kỹ thuật y",
        "duration": "3 tháng",
        "fee": "Liên hệ"
    },
    {
        "id": 5,
        "specialty": "TT Chẩn đóa hình ảnh và thăm dò chức năng",
        "name": "Cắt lớp vi tính cơ bản",
        "audience": "Bác sĩ",
        "duration": "3 tháng",
        "fee": "Liên hệ"
    },
    {
        "id": 6,
        "specialty": "TT Chẩn đóa hình ảnh và thăm dò chức năng",
        "name": "Siêu âm tổng quát",
        "audience": "Bác sĩ",
        "duration": "3 tháng",
        "fee": "Liên hệ"
    },
    {
        "id": 7,
        "specialty": "TT Chẩn đóa hình ảnh và thăm dò chức năng",
        "name": "Cắt lớp vi tính nâng cao",
        "audience": "Kỹ thuật y",
        "duration": "6 tháng",
        "fee": "12.0"
    },
    {
        "id": 8,
        "specialty": "TT Chẩn đóa hình ảnh và thăm dò chức năng",
        "name": "Cộng hưởng từ nâng cao",
        "audience": "Kỹ thuật y",
        "duration": "3 tháng",
        "fee": "9.0"
    },
    {
        "id": 9,
        "specialty": "TT Ung bướu",
        "name": "Xạ trị gia tốc cơ bản cho kỹ sư vật lý",
        "audience": "KTV",
        "duration": "3 tháng",
        "fee": "6.0"
    },
    {
        "id": 10,
        "specialty": "TT Ung bướu",
        "name": "Chăm sóc giảm nhẹ trong ung thư",
        "audience": "Bác sĩ",
        "duration": "2 ngày",
        "fee": "1.0"
    },
    {
        "id": 11,
        "specialty": "Khoa Nội tổng hợp",
        "name": "Hội thảo về Hô hấp kết hợp với Hội Phổi Pháp Việt",
        "audience": "Bác sĩ",
        "duration": "1 ngày",
        "fee": "1.0"
    },
    {
        "id": 12,
        "specialty": "TT Tiêu hóa",
        "name": "Trợ giúp nội soi đường tiêu hóa",
        "audience": "Điều dưỡng",
        "duration": "3 tháng",
        "fee": "6.0"
    },
    {
        "id": 13,
        "specialty": "TT Chẩn đóa hình ảnh và thăm dò chức năng",
        "name": "Kỹ thuật chụp cộng hưởng từ",
        "audience": "Bác sĩ",
        "duration": "3 tháng",
        "fee": "Liên hệ"
    },
    {
        "id": 14,
        "specialty": "TT Ung bướu",
        "name": "Xạ trị gia tốc cơ bản cho kỹ thuật viên",
        "audience": "KTV",
        "duration": "3 tháng",
        "fee": "6.0"
    },
    {
        "id": 15,
        "specialty": "TT Ung bướu",
        "name": "Điều trị miễn dịch trong ung thư",
        "audience": "Bác sĩ",
        "duration": "2 ngày",
        "fee": "1.0"
    },
    {
        "id": 16,
        "specialty": "Đơn nguyên Xạ trị - Y học hạt nhân",
        "name": "Xu hướng phát triển Y học hạt nhân trong chẩn đoán và điều trị",
        "audience": "Bác sĩ",
        "duration": "1 ngày",
        "fee": "1.0"
    },
    {
        "id": 17,
        "specialty": "TT Hồi sức cấp cứu",
        "name": "Cấp cứu ngừng tuần hoàn",
        "audience": "Bác sĩ, điều dưỡng",
        "duration": "1 ngày",
        "fee": "3.0"
    },
    {
        "id": 18,
        "specialty": "TT Chẩn đóa hình ảnh và thăm dò chức năng",
        "name": "Kỹ thuật chụp cắt lớp vi tính",
        "audience": "Kỹ thuật y",
        "duration": "3 tháng",
        "fee": "Liên hệ"
    },
    {
        "id": 19,
        "specialty": "TT Ung bướu",
        "name": "Điều trị đích trong ung thư",
        "audience": "Bác sĩ",
        "duration": "2 ngày",
        "fee": "1.0"
    },
    {
        "id": 20,
        "specialty": "TT Hồi sức cấp cứu",
        "name": "Sơ cấp cứu cơ bản",
        "audience": "Bác sĩ, điều dưỡng",
        "duration": "1 ngày",
        "fee": "3.0"
    },
    {
        "id": 21,
        "specialty": "TT Y học bào thai",
        "name": "Hội thảo Y học bào thai",
        "audience": "Bác sĩ",
        "duration": "1 ngày",
        "fee": "1.0"
    },
    {
        "id": 22,
        "specialty": "TT thận nhân tạo",
        "name": "Thận nhân tạo cơ bản",
        "audience": "Bác sĩ",
        "duration": "6 tháng",
        "fee": "12.0"
    },
    {
        "id": 23,
        "specialty": "TT thận nhân tạo",
        "name": "Lọc màng bụng cơ bản",
        "audience": "Bác sĩ",
        "duration": "3 tháng",
        "fee": "6.0"
    },
    {
        "id": 24,
        "specialty": "PK Răng Hàm Mặt Hoàng Ngân",
        "name": "Hội thảo Răng hàm mặt",
        "audience": "Bác sĩ",
        "duration": "1 ngày",
        "fee": "1.0"
    },
    {
        "id": 25,
        "specialty": "TT Tiêu hóa",
        "name": "Hội thảo tiêu hóa",
        "audience": "Bác sĩ",
        "duration": "1 ngày",
        "fee": "1.0"
    },
    {
        "id": 26,
        "specialty": "Khoa Phụ",
        "name": "Hội thảo phụ khoa ",
        "audience": "Bác sĩ",
        "duration": "1 ngày",
        "fee": "1.0"
    },
    {
        "id": 27,
        "specialty": "TT Y học cổ truyền ",
        "name": "Hội thảo Y học cổ truyền",
        "audience": "Bác sĩ",
        "duration": "1 ngày",
        "fee": "1.0"
    },
    {
        "id": 28,
        "specialty": "TT thận nhân tạo",
        "name": "HDF-Online",
        "audience": "Bác sĩ",
        "duration": "1 tháng",
        "fee": "2.0"
    },
    {
        "id": 29,
        "specialty": "Tổng Giám đốc",
        "name": "Hội thảo Hội Phổi Việt Nam",
        "audience": "Bác sĩ",
        "duration": "2 ngày",
        "fee": "1.0"
    },
    {
        "id": 30,
        "specialty": "Khoa Nhi",
        "name": "Hội thảo tim nhi",
        "audience": "Bác sĩ",
        "duration": "1 ngày",
        "fee": "1.0"
    },
    {
        "id": 31,
        "specialty": "TT thận nhân tạo",
        "name": "Lọc máu hấp phụ kết hợp thận nhân tạo chu kỳ",
        "audience": "Bác sĩ",
        "duration": "1 tháng",
        "fee": "2.0"
    },
    {
        "id": 32,
        "specialty": "Khoa Dược",
        "name": "Hội thảo dược lý lâm sàng",
        "audience": "Bác sĩ",
        "duration": "1 ngày",
        "fee": "1.0"
    },
    {
        "id": 33,
        "specialty": "TT Tiêu hóa",
        "name": "Chẩn đoán và điều trị các bệnh viêm gan",
        "audience": "Bác sĩ",
        "duration": "",
        "fee": "Liên hệ"
    },
    {
        "id": 34,
        "specialty": "TT Chẩn đóa hình ảnh và thăm dò chức năng",
        "name": "Kỹ thuật đo mật độ xương bằng phương pháp DXA",
        "audience": "KTY",
        "duration": "",
        "fee": "Liên hệ"
    },
    {
        "id": 35,
        "specialty": "Khoa Nội tổng hợp",
        "name": "Kỹ thuật đo chức năng hô hấp",
        "audience": "Điều dưỡng, KTY",
        "duration": "",
        "fee": "Liên hệ"
    },
    {
        "id": 36,
        "specialty": "Khoa Vi sinh",
        "name": "Xét nghiệm vi sinh cơ bản",
        "audience": "KTV",
        "duration": "3 tháng",
        "fee": "Liên hệ"
    },
    {
        "id": 37,
        "specialty": "Khoa Nội tổng hợp",
        "name": "Kỹ thuật nội soi phế quản",
        "audience": "Bác sĩ",
        "duration": "",
        "fee": "Liên hệ"
    }
];