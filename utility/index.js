import Aos from "aos";

export const tekprofUtility = {
  animation() {
    Aos.init();
  },
  fixedHeader() {
    window.addEventListener("scroll", function () {
      // Header Style and Scroll to Top
      if (document.querySelectorAll(".main-header").length) {
        var windowpos = document.documentElement.scrollTop;
        var siteHeader = document.querySelector(".main-header");
        if (windowpos >= 100) {
          siteHeader.classList.add("fixed-header");
        } else {
          siteHeader.classList.remove("fixed-header");
        }
      }
    });
  },
  sidebar() {
    const menuSidebar = document.querySelector(".menu-sidebar");
    if (menuSidebar) {
      //Show Form
      menuSidebar.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.add("side-content-visible");
      });
      //Hide Form
      const hiddenBar = document.querySelector(
        ".hidden-bar .inner-box .cross-icon"
      );
      const formBackDrop = document.querySelector(".form-back-drop");
      const closeMenu = document.querySelector(".close-menu");
      [hiddenBar, formBackDrop, closeMenu].forEach((el) => {
        if (el) {
          el.addEventListener("click", (e) => {
            e.preventDefault();
            document.body.classList.remove("side-content-visible");
          });
        }
      });
      //Dropdown Menu
      const navigationItems = document.querySelectorAll(
        ".fullscreen-menu .navigation li.dropdown > a"
      );
      navigationItems.forEach((item) => {
        item.addEventListener("click", (e) => {
          const nextSibling = item.nextElementSibling;
          if (nextSibling) {
            nextSibling.classList.toggle("show");
          }
        });
      });
    }
  },
};
