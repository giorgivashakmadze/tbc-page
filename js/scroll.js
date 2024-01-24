export function handleScroll() {
    const header = document.querySelector('[data-header="myHeader"]');
    let lastScrollPos = 0;
  
    window.addEventListener('scroll', () => {
      const currentScrollPos = window.scrollY;
  
      if (currentScrollPos > lastScrollPos) {
        header.classList.add('scrolled');
      } else{
        header.classList.remove('scrolled')
      }
      
    });
  }
  