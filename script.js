document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Replace these image URLs with your own
    const imageUrls = [
        'images/1.webp',
        'images/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg',
        'images/155.jpg'
        // Add more image URLs as needed
    ];

    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = imageUrls.length - 1;
        } else if (index >= imageUrls.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const newPosition = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + newPosition + ')';
    }

    function changeSlide(direction) {
        showSlide(currentIndex + direction);
    }

    prevBtn.addEventListener('click', () => changeSlide(-1));
    nextBtn.addEventListener('click', () => changeSlide(1));

    // Dynamically add images to the slider
    imageUrls.forEach((imageUrl) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        slider.appendChild(img);
    });
});