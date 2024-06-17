document.addEventListener("DOMContentLoaded", () => {
    // Home page cinematic zoom effect
    if (document.getElementById('home-banner')) {
        const homeBanner = document.getElementById('home-banner');
        window.addEventListener('scroll', () => {
            let offset = window.pageYOffset;
            homeBanner.style.backgroundPositionY = offset * 0.5 + "px";
        });
    }
});

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('open');
        const answer = question.nextElementSibling;
        if (question.classList.contains('open')) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});


