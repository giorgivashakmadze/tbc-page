export function handleMobileScroll() {
    const header = document.querySelector('header');
    let lastScrollTop = 0;
  
    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
  
      lastScrollTop = scrollTop;
    }
  
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
  }