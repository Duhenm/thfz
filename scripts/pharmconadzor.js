  const button = document.querySelector('.menu__burger-button');
  const aside = document.querySelector('.menu__nav')
     
  button.addEventListener('click', (e) => {
    button.classList.toggle('menu__burger-button_active');
    aside.classList.toggle('menu__nav_active')
  });
 
