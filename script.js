document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        let currentPosition = 0;
        const slides = carousel.querySelectorAll('.slide');
        const totalSlides = slides.length;
        let intervalId;

        function nextSlide() {
            if (currentPosition < totalSlides - 1) {
                currentPosition++;
            } else {
                currentPosition = 0;
            }
            updateCarousel();
        }

        function prevSlide() {
            if (currentPosition > 0) {
                currentPosition--;
            } else {
                currentPosition = totalSlides - 1;
            }
            updateCarousel();
        }

        function updateCarousel() {
            const offset = -currentPosition * 100;
            carousel.querySelector('.slides').style.transition = 'opacity 0.5s ease';
            carousel.querySelector('.slides').style.opacity = '0';
            setTimeout(function() {
                carousel.querySelector('.slides').style.transform = `translateX(${offset}%)`;
                carousel.querySelector('.slides').style.opacity = '1';
            }, 500);
        }

        function startAutoPlay() {
            intervalId = setInterval(nextSlide, 2000);
        }

        function stopAutoPlay() {
            clearInterval(intervalId);
        }

        // Iniciar autoplay quando o cursor estiver sobre a imagem
        carousel.addEventListener('mouseenter', startAutoPlay);
        // Parar autoplay quando o cursor sair da imagem
        carousel.addEventListener('mouseleave', stopAutoPlay);
    });
});
