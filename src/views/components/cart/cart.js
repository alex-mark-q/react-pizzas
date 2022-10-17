const side_wrapper = document.querySelector('.popup__cart');
const side_content = document.querySelector('.popup__content--cart');
const open_btn = document.querySelector('.button__cart');
const close_btn = document.querySelector('.cart__close');

open_btn.addEventListener('click', openMenu);
close_btn.addEventListener('click', closeMenu);
window.addEventListener('click', outsideClick);

function openMenu() {
  side_wrapper.classList.add('active');
  side_content.classList.add('slideIn');
  document.querySelector('body').style.overflow = 'hidden';
}

function closeMenu() {
  side_wrapper.classList.remove('active');
  side_content.classList.remove('slideIn');
  document.querySelector('body').style.overflow = 'auto';
}

function outsideClick(e) {
  if (e.target === side_wrapper) {
    closeMenu();
  }
}