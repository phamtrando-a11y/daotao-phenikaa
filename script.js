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
            alert('Cảm ơn bạn đã đăng ký! Thông tin của bạn đã được ghi nhận.');
            closeModal();
            form.reset();
        });
    }
});
