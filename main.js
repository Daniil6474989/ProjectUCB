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


// Услуги
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
