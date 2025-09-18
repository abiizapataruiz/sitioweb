const slider = document.getElementById("slider");
const slides = slider.querySelectorAll("img");
const nav = document.getElementById("slider-nav");
let current = 0;

// Crear botones de navegación
slides.forEach((_, i) => {
    const btn = document.createElement("button");
    if (i === 0) btn.classList.add("active");
    btn.addEventListener("click", () => goToSlide(i));
    nav.appendChild(btn);
});

function updateActive() {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === current);
    });
    slider.style.transform = `translateX(-${current * 100}%)`;
    // Actualizar puntos de navegación
    nav.querySelectorAll("button").forEach((btn, i) => btn.classList.toggle("active", i === current));
}

function goToSlide(index) {
    current = index;
    updateActive();
}

// Auto-play cada 3 segundos
function nextSlide() {
    current = (current + 1) % slides.length;
    updateActive();
}

let autoplay = setInterval(nextSlide, 3000);

// Pausar auto-play al hacer hover
slider.addEventListener("mouseenter", () => clearInterval(autoplay));
slider.addEventListener("mouseleave", () => (autoplay = setInterval(nextSlide, 3000)));

// Inicializar
updateActive();
window.addEventListener("resize", updateActive);