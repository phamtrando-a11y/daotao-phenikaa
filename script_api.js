document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('register-modal');
    const btnRegisterTop = document.getElementById('btn-register-top');
    const btnRegisterHero = document.getElementById('btn-register-hero');
    const btnCancel = document.getElementById('btn-cancel-modal');
    const closeBtn = document.querySelector('.close-modal');
    const form = document.getElementById('course-registration-form');

    // Mở modal
    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Đóng modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    if (btnRegisterTop) btnRegisterTop.addEventListener('click', openModal);
    if (btnRegisterHero) btnRegisterHero.addEventListener('click', openModal);
    if (btnCancel) btnCancel.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Đóng khi click ngoài modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Xử lý submit form

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Lấy dữ liệu form
            const formData = {
                action: 'register',
                fullName: form.querySelector('input[type="text"]').value, // Cần gán name hoặc id cho input để chính xác hơn, đây là demo
                courseName: document.querySelector('input[value="Chẩn đoán và điều trị bệnh truyền nhiễm"]') ? document.querySelector('input[value="Chẩn đoán và điều trị bệnh truyền nhiễm"]').value : 'Khóa học Test',
                fee: 1000000 
            };
            
            const submitBtn = form.querySelector('.btn-submit');
            submitBtn.textContent = 'Đang xử lý...';
            submitBtn.disabled = true;

            // URL của Google Apps Script (Thực tế)
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxF-bL8fkBCjjfVcTxVnY7Z9dTegFQivtfsVCxGb7EirLyP6LQLrzzgf96Wfjj_zyQ9OA/exec';

            // GỌI API THẬT
            fetch(SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' }, // Apps Script CORS yêu cầu gửi dạng text/plain
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    // Thành công: Hiện mã QR
                    form.style.display = 'none';
                    document.getElementById('qr-payment-screen').style.display = 'block';
                    document.getElementById('qr-order-id').innerText = data.orderId;
                    if(data.qrUrl) {
                        document.getElementById('qr-code-img').src = data.qrUrl;
                    } else {
                        // Nếu là hội thảo không có QR
                        document.getElementById('qr-code-img').style.display = 'none';
                    }
                } else {
                    alert('Lỗi từ máy chủ: ' + (data.error || 'Không rõ nguyên nhân'));
                }
            })
            .catch(err => {
                alert('Có lỗi xảy ra trong quá trình gửi dữ liệu: ' + err);
            })
            .finally(() => {
                // Đặt lại form cho lần sau
                submitBtn.textContent = 'Xác nhận đăng ký';
                submitBtn.disabled = false;
                form.reset();
            });
        });
    }

});
