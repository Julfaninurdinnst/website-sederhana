function toggleMenu() {
    var navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('navbar-menu-open');
    
    var navbarToggle = document.querySelector('.navbar-toggle');
    navbarToggle.classList.toggle('open');
    
    var isOpen = navbarToggle.classList.contains('open');
    navbarToggle.setAttribute('aria-expanded', isOpen);
  }
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const overlay = card.querySelector('.overlay');
  const title = card.querySelector('h2');
  const text = card.querySelector('p');
  
  card.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    overlay.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    title.style.transform = 'translateZ(50px)';
    text.style.transform = 'translateZ(50px)';
  });
  
  card.addEventListener('mouseenter', e => {
    overlay.style.transition = 'none';
    title.style.transition = 'none';
    text.style.transition = 'none';
  });
  
  card.addEventListener('mouseleave', e => {
    overlay.style.transition = 'all 0.5s ease';
    overlay.style.transform = 'rotateY(0deg) rotateX(0deg)';
    title.style.transition = 'all 0.5s ease';
    title.style.transform = 'translateZ(0px)';
    text.style.transition = 'all 0.5s ease';
    text.style.transform = 'translateZ(0px)';
  });
});
