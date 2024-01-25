// Importing modules
import { handleScroll } from './scroll.js';
import initializeCarousel from './carousel.js';
import { toggleText } from './faqmodule.js';

document.addEventListener('DOMContentLoaded', () => {
  // Handling scroll
  handleScroll();

  // Initializing carousel
  initializeCarousel();

  // Adding event listener for FAQ section
  const faqQuestions = document.querySelectorAll('.faq-container .question-container');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => toggleText(question));
  });
});
