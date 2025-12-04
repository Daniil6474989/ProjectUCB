// бургер меню 

  document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger-icon');
    const mobileNav = document.querySelector('.mobile-nav');

    burger.addEventListener('click', function () {
      mobileNav.classList.toggle('active');
      
      // Анимация бургера

    });
  });


// faq 
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const svg = question.querySelector('.faq-svg svg');

            // Закрываем все другие
            document.querySelectorAll('.faq-answer').forEach(el => {
                if (el !== answer) {
                    el.classList.remove('show');
                    const otherQuestion = el.previousElementSibling;
                    const otherSvg = otherQuestion.querySelector('.faq-svg svg');
                    if (otherSvg) {
                        otherSvg.classList.remove('rotate');
                        otherQuestion.classList.remove('open');
                    }
                }
            });

            // Переключаем текущий
            answer.classList.toggle('show');
            if (svg) {
                svg.classList.toggle('rotate');
                question.classList.toggle('open'); // ← КЛЮЧЕВАЯ СТРОКА
            }
        });
    });
});


// преимущества ИСБ
document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.advantages-swiper', {
      // Сколько слайдов показывать
      slidesPerView: 3,
      spaceBetween: 30,

      // Бесконечный цикл
      loop: true,

      // Перетаскивание мышкой и пальцем
      grabCursor: true,

      // Плавная прокрутка
      speed: 600,

      // Адаптивность
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1001: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  });


// Услуги моб
document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.services-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        speed: 600,
      // Автопрокрутка (если будет нужна):
      //   autoplay: {
      //     delay: 5000,
      //     disableOnInteraction: false
      //  }
    });
});

// Услуги десктоп
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('service-slider');
    const slides = Array.from(slider.querySelectorAll('.service-slide'));
    let currentIndex = 0;

    // Функция показа слайда
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Обработчики кнопок
    slider.addEventListener('click', function(e) {
        if (e.target.classList.contains('prev')) {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }
        if (e.target.classList.contains('next')) {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }
    });

    // Инициализация
    showSlide(currentIndex);
});


document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('contact-popup');
    const closeBtn = document.querySelector('.popup-close');
    const form = document.getElementById('contact-form');

    // Кнопки, которые открывают попап
    const triggerButtons = document.querySelectorAll('.btn-primary-guarantee, .btn-primary-footer, .btn-primary');

    // Открываем попап
    triggerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // если кнопка — ссылка или submit
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // блокируем скролл
        });
    });

    // Закрываем попап по крестику
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Закрываем попап по клику вне окна
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Обработка формы (можно добавить отправку)
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
        form.reset();
    });
});