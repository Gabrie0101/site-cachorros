document.addEventListener("DOMContentLoaded", function() {
    const cardImage = document.querySelector('.thumbnail');
    const youtubeUrl = 'https://www.youtube.com/watch?v=b95-WF1f5HY&ab_channel=QuintaldoSaber';

    cardImage.addEventListener('click', function() {
        window.open(youtubeUrl, '_blank');
    });
});