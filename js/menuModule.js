export function toggleMenu() {
    const wrapperMenu = document.querySelector(".wrapper-menu");
    const burgerColorChange = document.querySelector(".line-menu");
    const openmenu = document.querySelector(".mobmen");
    const blureSide = document.querySelector(".mobmen-box");
  
    wrapperMenu.addEventListener("click", function () {
      toggleClasses();
    });
  
    blureSide.addEventListener("click", function () {
      toggleClasses();
    });
  
    function toggleClasses() {
      wrapperMenu.classList.toggle("open");
      openmenu.classList.toggle("active");
      blureSide.classList.toggle("active");
      burgerColorChange.classList.toggle("open");
    }
  }
  