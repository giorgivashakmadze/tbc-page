// Importing modules
import { handleMobileScroll } from './scrollformobile.js';
import { handleScroll } from './scroll.js';
import initializeCarousel from './carousel.js';
import { toggleText } from './faqmodule.js';
import { toggleMenu } from './menuModule.js';

toggleMenu();


document.addEventListener('DOMContentLoaded', () => {
  // Handling scroll
  handleScroll();
  //mobile scroll
  handleMobileScroll();

  // Initializing carousel
  initializeCarousel();

  // Adding event listener for FAQ section
  const faqQuestions = document.querySelectorAll('.faq-container .question-container');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => toggleText(question));
  });
});
