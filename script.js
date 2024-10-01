document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const postContent = button.previousElementSibling;
        const dots = postContent.querySelector('.dots');
        const moreText = postContent.querySelector('.more');

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            moreText.style.display = "none";
            button.textContent = "Read more";
        } else {
            dots.style.display = "none";
            moreText.style.display = "inline";
            button.textContent = "Read less";
            }
        });
});