// Получаем элементы
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const images = document.querySelectorAll(".section-image");
const closeBtn = document.querySelector(".close");

// Открытие модального окна
images.forEach(image => {
    image.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src; // Передаем src изображения в модальное окно
    });
});

// Закрытие модального окна
closeBtn.addEventListener("click", function () {
    closeModal();
});

// Закрытие при клике вне изображения
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Функция для закрытия с анимацией
function closeModal() {
    modal.classList.add("modalClosing"); // Новое имя класса
    modalImg.classList.add("modalClosing"); // Новое имя класса

    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("modalClosing");
        modalImg.classList.remove("modalClosing");
    }, 300); // Время анимации
}

 // Улучшенное создание частиц
 const particlesContainer = document.getElementById('particles');
 const particleCount = 50;
 
 for (let i = 0; i < particleCount; i++) {
     const particle = document.createElement('div');
     particle.classList.add('particle');
     
     // Случайные параметры частиц
     const size = Math.random() * 8 + 2;
     const posX = Math.random() * 100;
     const duration = Math.random() * 15 + 10;
     const delay = Math.random() * 10;
     const endX = (Math.random() - 0.5) * 40;
     
     particle.style.setProperty('--start-x', `${posX}%`);
     particle.style.setProperty('--end-x', `${posX + endX}%`);
     particle.style.width = `${size}px`;
     particle.style.height = `${size}px`;
     particle.style.left = `${posX}%`;
     particle.style.top = `${Math.random() * 100 + 100}%`;
     particle.style.animationDuration = `${duration}s`;
     particle.style.animationDelay = `${delay}s`;
     particle.style.opacity = Math.random() * 0.5 + 0.3;
     
     particlesContainer.appendChild(particle);
 }

 document.querySelectorAll('.team-member').forEach(item => {
     item.addEventListener('mouseenter', function() {
         this.style.zIndex = '10';
     });
     
     item.addEventListener('mouseleave', function() {
         this.style.zIndex = '1';
     });
 });

 document.querySelectorAll('.mod-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});


document.addEventListener('touchmove', function (event) {
    event.preventDefault();
}, { passive: false });



document.addEventListener("scroll", function () {
    const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");
    const downloadLauncherBtn = document.querySelector(".download-launcher-btn");
    const raysContainer = document.querySelector(".rays-container");

    // Прокрутка от верха
    const scrollTop = window.scrollY;

    // Прокрутка от низа
    const scrollBottom = document.body.scrollHeight - (window.scrollY + window.innerHeight);

    // Условие для верхней части (прокрутка больше 500 пикселей от верха)
    const isScrollTop = scrollTop > 500;

    // Условие для нижней части (прокрутка больше 500 пикселей от низа)
    const isScrollBottom = scrollBottom > 500;

    // Общее условие: отображать элементы, если прокрутка больше 500 пикселей от верха И больше 500 пикселей от низа
    if (isScrollTop && isScrollBottom) {
        scrollToTopBtn.classList.add("visible");
        downloadLauncherBtn.classList.add("visible");
        raysContainer.classList.add("visible");
    } else {
        scrollToTopBtn.classList.remove("visible");
        downloadLauncherBtn.classList.remove("visible");
        raysContainer.classList.remove("visible");
    }
});

// Плавная прокрутка для кнопки "Наверх"
document.querySelector(".scroll-to-top-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const duration = 2000;
    const start = window.scrollY;
    const startTime = performance.now();

    function scrollStep(timestamp) {
        const currentTime = timestamp - startTime;
        const progress = Math.min(currentTime / duration, 1);
        const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

        window.scrollTo(0, start * (1 - ease));

        if (currentTime < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
});

