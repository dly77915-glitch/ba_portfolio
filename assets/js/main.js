document.addEventListener('DOMContentLoaded', () => {
    // Logic Modal (CV Popup)
    const modal = document.getElementById('cv-modal');
    const btnOpenModal = document.getElementById('btn-view-cv');
    const btnCloseModal = document.getElementById('close-modal');

    // Mở Modal
    if(btnOpenModal) {
        btnOpenModal.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Khóa cuộn trang
        });
    }

    // Đóng Modal khi bấm nút X
    if(btnCloseModal) {
        btnCloseModal.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Mở lại cuộn trang
        });
    }

    // Đóng Modal khi click ra vùng tối bên ngoài
    if(modal) {
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});