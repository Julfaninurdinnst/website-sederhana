function toggleMenu() {
    var navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('navbar-menu-open');
    
    var navbarToggle = document.querySelector('.navbar-toggle');
    navbarToggle.classList.toggle('open');
    
    var isOpen = navbarToggle.classList.contains('open');
    navbarToggle.setAttribute('aria-expanded', isOpen);
  }