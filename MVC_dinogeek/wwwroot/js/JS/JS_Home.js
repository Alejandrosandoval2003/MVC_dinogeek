document.addEventListener("DOMContentLoaded", () => {
    /* =========================
       CARRUSEL DE TARJETAS (SECCIÓN SERIES)
       ========================= */
       document.querySelectorAll(".Seccion_Series").forEach(section => {
        const cardsContainer = section.querySelector(".Cards");
        const prevButton = section.querySelector(".prev-page-cards");
        const nextButton = section.querySelector(".next-page-cards");
        let cards = Array.from(cardsContainer.children);
    
        function updateStyles() {
            cards.forEach((card, index) => {
                if (index === 1) {
                    // Carta central
                    card.style.transform = "scale(1)";
                    card.style.opacity = "1";
                } else {
                    // Cartas laterales
                    card.style.transform = "scale(0.85)";
                    card.style.opacity = "0.8";
                }
            });
        }
    
        function updateVisibility() {
            cards.forEach((card, index) => {
                card.style.display = index < 3 ? "flex" : "none";
            });
            updateStyles();
        }
    
        function moveLeft() {
            cards.push(cards.shift());
            cardsContainer.appendChild(cards[cards.length - 1]);
            updateVisibility();
        }
    
        function moveRight() {
            cards.unshift(cards.pop());
            cardsContainer.insertBefore(cards[0], cardsContainer.firstChild);
            updateVisibility();
        }
    
        prevButton.addEventListener("click", moveLeft);
        nextButton.addEventListener("click", moveRight);
    
        // Añadir evento a las cartas para moverse al hacer clic
        cardsContainer.addEventListener("click", (event) => {
            const clickedCard = event.target.closest(".Card");
            if (!clickedCard) return; // Si no es una tarjeta, salir
    
            const clickedIndex = cards.indexOf(clickedCard);
    
            if (clickedIndex === 0) {
                moveLeft(); // Hizo clic en la carta izquierda
            } else if (clickedIndex === 2) {
                moveRight(); // Hizo clic en la carta derecha
            }
        });
    
        updateVisibility();
    });
    /* =========================
       CARRUSEL DEL BANNER
       ========================= */
    const images = document.querySelectorAll(".imagen");
    const dots = document.querySelectorAll(".dot");
    const titleElement = document.getElementById("banner-title");
    const descriptionElement = document.getElementById("banner-description");
    const prevBannerButton = document.querySelector(".next-page-banner");
    const nextBannerButton = document.querySelector(".next-page-banner2");

    const bannerTexts = [
        { title: "Spider-Man 2", description: "Vuelve la acción en Nueva York." },
        { title: "Jordi Wild", description: "El podcaster más salvaje habla de Maduro." },
        { title: "PC Acer", description: "Rendimiento al máximo nivel." },
        { title: "Red Dead Redemption", description: "Vuelve al Salvaje Oeste." }
    ];

    let currentIndex = 0;
    let interval = setInterval(nextSlide, 5000);

    function updateBanner(index) {
        images.forEach((img, i) => img.classList.toggle("active", i === index));
        dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
        titleElement.textContent = bannerTexts[index].title;
        descriptionElement.textContent = bannerTexts[index].description;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateBanner(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateBanner(currentIndex);
    }

    function restartInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 5000);
    }

    prevBannerButton.addEventListener("click", () => {
        prevSlide();
        restartInterval();
    });

    nextBannerButton.addEventListener("click", () => {
        nextSlide();
        restartInterval();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateBanner(currentIndex);
            restartInterval();
        });
    });

    updateBanner(currentIndex);

    /* =========================
       CARRUSEL DE GUÍAS
       ========================= */
    const guiasSection = document.querySelector(".Seccion_Guias");
    const guiaContainer = guiasSection.querySelector(".Guias");
    const prevGuiaButton = guiasSection.querySelector(".prev-page-guias");
    const nextGuiaButton = guiasSection.querySelector(".next-page-guias");
    let guias = Array.from(guiaContainer.children);

    function updateGuiaStyles() {
        guias.forEach((guia, index) => {
            if (index === 1 || index === 2 ) {
                // Imagen central
                guia.style.transform = "scale(1)";
                guia.style.opacity = "1";
            } else {
                // Imágenes laterales
                guia.style.transform = "scale(0.8)";
                guia.style.opacity = "0.5";
            }
        });
    }

    function updateGuiaVisibility() {
        guias.forEach((guia, index) => {
            guia.style.display = index < 4 ? "flex" : "none";
        });
        updateGuiaStyles();
    }

    function moveGuiaLeft() {
        guias.push(guias.shift());
        guiaContainer.appendChild(guias[guias.length - 1]);
        updateGuiaVisibility();
    }

    function moveGuiaRight() {
        guias.unshift(guias.pop());
        guiaContainer.insertBefore(guias[0], guiaContainer.firstChild);
        updateGuiaVisibility();
    }

    prevGuiaButton.addEventListener("click", moveGuiaLeft);
    nextGuiaButton.addEventListener("click", moveGuiaRight);

    updateGuiaVisibility();
});
