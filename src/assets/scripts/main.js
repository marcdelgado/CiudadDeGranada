/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */


/* https://godofredo.ninja/como-detectar-un-elemento-sticky-cuando-se-queda-fijo/ */
document.addEventListener('DOMContentLoaded', function () {
  const main_header = document.querySelector('.header-layout__menu-hr');

  /*const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle("fixed", e.intersectionRatio < 1),
    { threshold: [1] }
  );*/


  observer.observe(main_header);

});


function switchHamburger() {
  document.querySelector('.header-layout__main-header__hamburger-icon').classList.toggle("deployed");
  document.querySelector('.header-layout__main-header__menu-box').classList.toggle("deployed");
}


function checkStickyMenu() {
  const header = document.querySelector('.header-layout');
  if (window.scrollY > 41) {
    header.classList.add('header-layout--fixed');
  } else {
    header.classList.remove('header-layout--fixed');
  }
}

// Añade el listener al evento scroll de la ventana
window.addEventListener('scroll', checkStickyMenu);
