
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Collapse all other answers
            document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                if (otherAnswer !== answer) {
                    otherAnswer.classList.remove('open');
                    otherAnswer.previousElementSibling.classList.remove('open');
                }
            });

            // Toggle the clicked answer
            answer.classList.toggle('open');
            question.classList.toggle('open');
        });
    });
