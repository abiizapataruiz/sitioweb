document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = slider.children;
    let index = 0;
    const interval = 3000; // Cambia de imagen cada 3 segundos

    function autoPlay() {
        index = (index + 1) % slides.length; // Incrementa el índice y reinicia al llegar al final
        slider.scrollTo({
            left: slider.clientWidth * index,
            behavior: "smooth" // Desplazamiento suave
        });
    }

    setInterval(autoPlay, interval);

    // Para asegurar que el slider se ajuste automáticamente
    slider.style.scrollSnapType = "x mandatory";
});
