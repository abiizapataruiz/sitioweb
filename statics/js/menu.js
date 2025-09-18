document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (navToggle) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // comportamiento móvil: primer toque abre el submenú, segundo toque sigue el enlace
    document.querySelectorAll(".nav-menu > li > a").forEach((link) => {
        const li = link.parentElement;
        const submenu = li.querySelector(".nav-child");
        if (!submenu) return;

        link.addEventListener(
            "click",
            function (e) {
                if (window.innerWidth <= 768) {
                    if (!li.classList.contains("submenu-open")) {
                        e.preventDefault(); // evita ir a la página en el primer toque
                        // cerrar otros submenús abiertos
                        document.querySelectorAll(".nav-menu li.submenu-open").forEach((el) => {
                            if (el !== li) {
                                el.classList.remove("submenu-open");
                                el.querySelector(".nav-child")?.classList.remove("active");
                            }
                        });
                        li.classList.add("submenu-open");
                        submenu.classList.add("active");
                    } // si ya tiene submenu-open, dejamos que el enlace funcione (segundo toque)
                }
            },
            false
        );
    });

    // cerrar submenús si se hace click fuera (opcional)
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".nav-container")) {
            document.querySelectorAll(".nav-menu li.submenu-open").forEach((el) => {
                el.classList.remove("submenu-open");
                el.querySelector(".nav-child")?.classList.remove("active");
            });
        }
    });
});