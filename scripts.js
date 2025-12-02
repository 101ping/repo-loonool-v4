// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
