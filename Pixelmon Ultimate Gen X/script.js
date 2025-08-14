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


document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.start-game-btn');
    const hideOffset = 500; // Высота в пикселях, при которой кнопка уходит
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > hideOffset) {
            button.classList.add('hide-side');
        } else {
            button.classList.remove('hide-side');
        }
    });
});


