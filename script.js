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
            const formObj = new FormData(form);
            const formData = {
                action: 'register',
                registrationType: 'course', // Default to course for the modal
                fullName: formObj.get('fullName') || '',
                dob: formObj.get('dob') || '',
                gender: formObj.get('gender') || '',
                cccd: formObj.get('cccd') || '',
                cccdPlace: formObj.get('cccdPlace') || '',
                workplace: formObj.get('workplace') || '',
                degree: formObj.get('degree') || '',
                taxCode: formObj.get('taxCode') || '',
                invoiceCompany: formObj.get('invoiceCompany') || '',
                email: formObj.get('email') || '',
                phone: formObj.get('phone') || '',
                specialty: formObj.get('specialty') || '',
                courseName: formObj.get('courseName') || '',
                audience: formObj.get('audience') || '',
                duration: formObj.get('duration') || '',
                startDate: formObj.get('startDate') || '',
                endDate: formObj.get('endDate') || '',
                fee: 10000 // Mức phí test 10000đ
            };
            
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Đang xử lý...';
            submitBtn.disabled = true;

            // URL của Google Apps Script (Thực tế)
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbww20LbGllmbIJs6tShlzUxxmDQcPyuS6OCwlRCzwQ_nLPQk6yX-o73sgjF9l8c8oAcBA/exec';

            // GỌI API THẬT
            fetch(SCRIPT_URL + "?action=register", {
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
                        
                        // Bắt đầu vòng lặp kiểm tra thanh toán (Polling) mỗi 3 giây
                        const checkInterval = setInterval(() => {
                            fetch(SCRIPT_URL + "?action=check_payment", {
                                method: 'POST',
                                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                                body: JSON.stringify({ action: 'check_payment', orderId: data.orderId })
                            })
                            .then(r => r.json())
                            .then(resData => {
                                if (resData.status === 'success') {
                                    clearInterval(checkInterval);
                                    document.getElementById('qr-payment-screen').innerHTML = `
                                        <div style="text-align: center; padding: 30px;">
                                            <div style="font-size: 60px; color: #2ecc71; margin-bottom: 20px;">✓</div>
                                            <h2 style="color: #27ae60; margin-bottom: 15px;">Thanh toán thành công!</h2>
                                            <p style="color: #555; font-size: 16px;">Cảm ơn bạn. Chúng tôi đã nhận được tiền và xác nhận đăng ký.</p>
                                            <button type="button" class="btn-submit-green" style="margin-top: 25px;" onclick="document.getElementById('register-modal').style.display='none'">Đóng cửa sổ</button>
                                        </div>
                                    `;
                                }
                            })
                            .catch(e => console.log('Polling error:', e));
                        }, 3000);
                        
                        // Hủy vòng lặp nếu người dùng đóng modal
                        closeBtn.addEventListener('click', () => clearInterval(checkInterval));
                        window.addEventListener('click', function(event) {
                            if (event.target === modal) clearInterval(checkInterval);
                        });
                        
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
