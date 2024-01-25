export function toggleText(element) {
    const hiddenText = element.nextElementSibling;

    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
    } else {
        hiddenText.style.display = "none";
    }
}
