export function toggleText(element) {
    const hiddenText = element.nextElementSibling;
    const arrowIcon = element.querySelector('.fa-solid');

    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
        arrowIcon.classList.remove("fa-angle-down");
        arrowIcon.classList.add("fa-angle-up");
    } else {
        hiddenText.style.display = "none";
        arrowIcon.classList.remove("fa-angle-up");
        arrowIcon.classList.add("fa-angle-down");
    }
}
