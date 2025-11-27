
        // Простой скрипт для FAQ
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const plusIcon = question.querySelector('span:last-child');
                
                // Закрываем все другие ответы
                document.querySelectorAll('.faq-answer').forEach(a => {
                    if (a !== answer) {
                        a.classList.remove('show');
                        a.previousElementSibling.querySelector('span:last-child').textContent = '+';
                    }
                });
                
                // Переключаем текущий ответ
                answer.classList.toggle('show');
                plusIcon.textContent = answer.classList.contains('show') ? '−' : '+';
            });
        });
