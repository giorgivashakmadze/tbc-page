// autoScroll.js

function autoScroll(slides, dots) {
    const activeSlide = slides.querySelector("[data-active]");
    let currentIndex = [...slides.children].indexOf(activeSlide);
    let targetIndex = (currentIndex + 1) % slides.children.length;

    slides.children[currentIndex].removeAttribute("data-active");
    slides.children[targetIndex].setAttribute("data-active", "true");

    dots[currentIndex].classList.remove("active");
    dots[targetIndex].classList.add("active");
}

export default autoScroll;
