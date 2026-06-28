document.addEventListener('DOMContentLoaded', () => {
    // 1. Logic Modal (CV Popup)
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

    // 2. Logic Language Toggle (Khung sườn)
    const langSwitch = document.getElementById('lang-switch');
    let isEnglish = false;

    if(langSwitch) {
        langSwitch.addEventListener('click', () => {
            isEnglish = !isEnglish;
            // Toggle class trên body để điều khiển CSS hiển thị sau này
            if(isEnglish) {
                document.body.classList.remove('lang-vi');
                document.body.classList.add('lang-en');
                console.log("Đã chuyển sang tiếng Anh");
            } else {
                document.body.classList.remove('lang-en');
                document.body.classList.add('lang-vi');
                console.log("Đã chuyển sang tiếng Việt");
            }
        });
    }
});