// Initialize the carousel
function initializeCarousel() {
    const buttons = document.querySelectorAll("[data-carousel-button]");
    const slides = document.querySelector("[data-carousel] [data-slides]");
    const dots = document.querySelectorAll("[data-carousel] .carousel-dots li");

    let autoScrollInterval;
    // Start auto-scrolling initially
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            autoScroll(slides, dots);
        }, window.innerWidth <= 1000 ? 3000 : 2500);
    }
    

    // Stop auto-scrolling when any button is clicked
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    startAutoScroll();

    // Add click event listeners to carousel buttons
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            stopAutoScroll();

            const activeSlide = slides.querySelector("[data-active]");
            let currentIndex = [...slides.children].indexOf(activeSlide);

            let targetIndex;
            if (button.dataset.carouselButton === "next") {
                targetIndex = (currentIndex + 1) % slides.children.length;
            } else if (button.dataset.carouselButton === "prev") {
                targetIndex =
                    (currentIndex - 1 + slides.children.length) % slides.children.length;
            } else {
                targetIndex = parseInt(button.dataset.carouselButton);
            }

            slides.children[currentIndex].removeAttribute("data-active");
            slides.children[targetIndex].setAttribute("data-active", "true");

            dots[currentIndex].classList.remove("active");
            dots[targetIndex].classList.add("active");

            startAutoScroll();
        });
    });
    // Add hover events to stop auto-scrolling
    slides.addEventListener('mouseover', () => {
        stopAutoScroll();
    });

    // Restart auto-scrolling when mouse leaves the slider
    slides.addEventListener('mouseout', () => {
        startAutoScroll();
    });
}

// Auto-scroll carousel , removes active from current slide and adds it to next slide , timing was defined previously (2500ms)
function autoScroll(slides, dots) {
    const activeSlide = slides.querySelector("[data-active]");
    let currentIndex = [...slides.children].indexOf(activeSlide);
    let targetIndex = (currentIndex + 1) % slides.children.length;

    slides.children[currentIndex].removeAttribute("data-active");
    slides.children[targetIndex].setAttribute("data-active", "true");

    dots[currentIndex].classList.remove("active");
    dots[targetIndex].classList.add("active");
}

export default initializeCarousel; 
