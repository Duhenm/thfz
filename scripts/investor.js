const spoilers = document.querySelector('.content');
const spoiler = document.querySelectorAll('.spoiler__header');

spoilers.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('spoiler__header')) {
    const spoilerContent = evt.target.nextElementSibling;
    const spoilerIcon = evt.target.querySelector('.spoiler__icon');
    spoilerIcon.classList.toggle('spoiler__icon_opened');
    spoilerContent.classList.toggle('spoiler__content_opened');
  }
  if (evt.target.classList.contains('spoiler__icon')) {
    const spoilerHeader = evt.target.parentElement;
    const spoilerContent = spoilerHeader.nextElementSibling;
    evt.target.classList.toggle('spoiler__icon_opened');
    spoilerContent.classList.toggle('spoiler__content_opened');
  }
}); 

