  const imageButton = document.querySelector('.card-detail__image-container');
  const image = document.querySelector('.card-detail__image'); 
  const title = document.querySelector('.card-detail__title');
  const popup = document.querySelector('.popup');
  const overlay = document.querySelector('.popup__overlay');
  const buttonTypeClose = document.querySelector('.button_type_close');

  const popupImagePic = document.querySelector('.popup__image');
  const popupCaption = document.querySelector('.popup__caption');
  
  const button = document.querySelector('.menu__burger-button');
  const aside = document.querySelector('.menu__nav')
     
  button.addEventListener('click', (e) => {
    button.classList.toggle('menu__burger-button_active');
    aside.classList.toggle('menu__nav_active')
  });
 
  
  function openPopup(popup) {
    popup.classList.add('popup_opened');
  };

  function closePopup(popup) {
    popup.classList.remove('popup_opened');
  };

  imageButton.addEventListener('click', function () {
    popupImagePic.src =  image.src;
    popupCaption.textContent = title.textContent;
    popupImagePic.alt = title.textContent;
    openPopup(popup);
  }); 

  buttonTypeClose.addEventListener('click', () => closePopup(popup));
  overlay.addEventListener('click', () => closePopup(popup));
       
 
