let currentSlide = 0;
const totalSlides = document.getElementById('slides').children.length;
const intervalTime = 3000; // Tempo em milissegundos

function showSlide(index) {
    const slides = document.getElementById('slides');
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

function autoSlide() {
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, intervalTime);
}

// Iniciar o carrossel automático
autoSlide();