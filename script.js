document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function handleVideoEnd() {
        nextItem();
    }

    function setupVideos() {
        items.forEach(item => {
            const video = item.querySelector('video');
            if (video) {
                video.addEventListener('ended', handleVideoEnd);
                video.addEventListener('play', () => {
                    clearInterval(cycleInterval);
                });
            }
        });
    }

    showItem(currentIndex);
    setupVideos();
    const cycleInterval = setInterval(nextItem, 5000); // Cambia cada 5 segundos
});
